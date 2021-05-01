export interface Quiz {
  _id: any,
  quizName: string,
  question1: string,
  q1_select1:
    {
      text:string,
      isCorrect:boolean
    },
  q1_select2:
    {
      text:string,
      isCorrect:boolean
    },
  q1_select3:
    {
      text:string,
      isCorrect:boolean
    },
  q1_select4:
    {
      text:string,
      isCorrect:boolean
    },

  question2: string,

  q2_select1:
      {
        text:string,
        isCorrect:boolean
      },
  q2_select2:
      {
        text:string,
        isCorrect:boolean
      },
  q2_select3:
      {
        text:string,
        isCorrect:boolean
      },
  q2_select4:
      {
        text:string,
        isCorrect:boolean
      },

  question3: string,

  q3_select1:
        {
          text:string,
          isCorrect:boolean
        },
  q3_select2:
        {
          text:string,
          isCorrect:boolean
        },
  q3_select3:
        {
          text:string,
          isCorrect:boolean
        },
  q3_select4:
        {
          text:string,
          isCorrect:boolean
        },
  question4: string,
  quest4_ans: string

}
