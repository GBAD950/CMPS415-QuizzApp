export interface Quiz {
  _id: any,
  quizName: string,
  question1: string,
  selections1: [
    {
      _id: string,
      text:string,
      isCorrect:boolean
    }
  ],
  // question2: string,
  // selections2: [
  //   {
  //     _id: string,
  //     text:string,
  //     isCorrect:boolean
  //   }
  // ]
}
