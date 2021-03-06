import Checker from "./checker";
import Decision from "./decision";
import Permit from "./permit";
import Question from "./question";
import Rule from "./rule";

describe("IMTR specific", () => {
  test('"-" and "no hit" support', () => {
    const q1 = new Question({
      id: "aaa",
      type: "boolean",
      text: "Do you need a permit?",
      prio: 10,
    });
    const q2 = new Question({
      id: "bbb",
      type: "boolean",
      text: "Are you sure?",
      prio: 20,
    });
    const d1 = new Decision(
      "d1",
      [q1, q2],
      [
        new Rule([true], "permit-required"),
        new Rule([false, false], "permit-required"),
        new Rule([false, true], "no-permit-required"),
      ]
    );
    const dummy = new Decision(
      "dummy",
      [d1],
      [
        new Rule(["permit-required"], "You need a permit."),
        new Rule(["no-permit-required"], "You don't need a permit."),
      ]
    );

    const checker = new Checker([new Permit("some permit", 1, [dummy])]);
    let question = checker.next() as Question;
    question.setAnswer(true);
    expect(checker.permits[0].getOutputByDecisionId("dummy")).toBe(
      "You need a permit."
    );
    question.setAnswer(false);
    expect(checker.permits[0].getOutputByDecisionId("dummy")).toBe(undefined);
    question = checker.next() as Question;
    question.setAnswer(true);
    expect(checker.permits[0].getOutputByDecisionId("dummy")).toBe(
      "You don't need a permit."
    );
    question.setAnswer(false);
    expect(checker.permits[0].getOutputByDecisionId("dummy")).toBe(
      "You need a permit."
    );
  });
});
