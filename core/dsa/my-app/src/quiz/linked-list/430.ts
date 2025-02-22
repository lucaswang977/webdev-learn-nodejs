import {
  _Node,
  convertToMultilevelLinkedList,
  outputMultilevelList,
} from "./linked-list";

export default function testQuiz() {
  let head, headList: _Node | null;

  head = [1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12];
  headList = convertToMultilevelLinkedList(head);
  outputMultilevelList(headList);

  head = [1, 2, null, 3];
  headList = convertToMultilevelLinkedList(head);
  outputMultilevelList(headList);
}
