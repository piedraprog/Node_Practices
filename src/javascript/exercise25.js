 /**
  * 
  * Unir dos json para hacer un solo arreglo con la info faltante
  * 
  */



let feedbacks = [
  {
    id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
    title: "pregunta numerica 1",
    type: "rating",
    value: "numbers",
    initial_value: "0",
    final_value: "10",
  },
  {
    id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
    title: "pregunta estrellas 2 ",
    type: "rating",
    value: "stars",
    initial_value: "7",
    final_value: 10,
  },
  {
    id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
    title: "pregunta feedback 3",
    type: "feedback",
    value: "",
    initial_value: 0,
    final_value: 10,
  },
];

let results = [
  {
    feedback_value: [
      {
        value: "0 - 1 test",
        id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
        title: "pregunta feedback 3",
        type: "feedback",
        value_type: "",
      },
      {
        value: "1",
        id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
        title: "pregunta estrellas 2 ",
        type: "rating",
        value_type: "stars",
      },
      {
        value: "0",
        id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
        title: "pregunta numerica 1",
        type: "rating",
        value_type: "numbers",
      },
    ],
  },
  {
    customer: {
      id: "26cca19e-cac2-4aaa-9a94-bb74b3798db5",
      name: "Mario Rodriguez",
      
      team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
    },
    created_at_feedback: "1690493367201",
    created_at: "1690493367201",
    feedback_value: [
      {
        value: "0",
        id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
        title: "pregunta numerica 1",
        type: "rating",
        value_type: "numbers",
      },
      {
        value: "0 - 1 respuestas",
        id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
        title: "pregunta feedback 3",
        type: "feedback",
        value_type: "",
      },
      {
        value: "1",
        id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
        title: "pregunta estrellas 2 ",
        type: "rating",
        value_type: "stars",
      },
    ],
  },
  {
    customer: {
      id: "5bc48637-e081-4593-94d6-c60383597df5",
      name: "Jesus Fusion Api externa",
      team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
    },
    created_at_feedback: "1690490605460",
    created_at: "1690490605460",
    feedback_value: [
      {
        value: "3",
        id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
        title: "pregunta estrellas 2 ",
        type: "rating",
        value_type: "stars",
      },
      {
        value: "asdasdas",
        id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
        title: "pregunta feedback 3",
        type: "feedback",
        value_type: "",
      },
      {
        value: "4",
        id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
        title: "pregunta numerica 1",
        type: "rating",
        value_type: "numbers",
      },
    ],
  },
  {
    customer: {
      id: "26cca19e-cac2-4aaa-9a94-bb74b3798db5",
      name: "Mario Rodriguez",
      team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
    },
    created_at_feedback: "1690490272344",
    created_at: "1690490272344",
    feedback_value: [
      {
        value: "3",
        id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
        title: "pregunta numerica 1",
        type: "rating",
        value_type: "numbers",
      },
      {
        value: "3",
        id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
        title: "pregunta estrellas 2 ",
        type: "rating",
        value_type: "stars",
      },
      {
        value: "33",
        id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
        title: "pregunta feedback 3",
        type: "feedback",
        value_type: "",
      },
    ],
  },
  {
    customer: {
      id: "26cca19e-cac2-4aaa-9a94-bb74b3798db5",
      name: "Mario Rodriguez",
      team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
    },
    created_at_feedback: "1690489928820",
    created_at: "1690489928820",
    feedback_value: [
      {
        value: "5",
        id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
        title: "pregunta numerica 1",
        type: "rating",
        value_type: "numbers",
      },
      {
        value: "5",
        id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
        title: "pregunta feedback 3",
        type: "feedback",
        value_type: "",
      },
      {
        value: "5",
        id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
        title: "pregunta estrellas 2 ",
        type: "rating",
        value_type: "stars",
      },
    ],
  },
  {
    customer: {
      id: "01b43fd5-ddae-4306-8e6b-dc1fc1675fba",
      name: "Jose Piedra | desarrador web | frontend dev",
      team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
    },
    created_at_feedback: "1690480659328",
    created_at: "1690480659328",
    feedback_value: [
      {
        value: "7",
        id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
        title: "pregunta numerica 1",
        type: "rating",
        value_type: "numbers",
      },
      {
        value: "456456456156",
        id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
        title: "pregunta feedback 3",
        type: "feedback",
        value_type: "",
      },
      {
        value: "4",
        id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
        title: "pregunta estrellas 2 ",
        type: "rating",
        value_type: "stars",
      },
    ],
  },
  {
    customer: {
      id: "01b43fd5-ddae-4306-8e6b-dc1fc1675fba",
      name: "Jose Piedra | desarrador web | frontend dev",
      team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
    },
    created_at_feedback: "1690480627968",
    created_at: "1690480627968",
    feedback_value: [
      {
        value: "a324523",
        id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
        title: "pregunta feedback 3",
        type: "feedback",
        value_type: "",
      },
      {
        value: "1",
        id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
        title: "pregunta estrellas 2 ",
        type: "rating",
        value_type: "stars",
      },
      {
        value: "3",
        id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
        title: "pregunta numerica 1",
        type: "rating",
        value_type: "numbers",
      },
    ],
  },
  {
    customer: {
      id: "01b43fd5-ddae-4306-8e6b-dc1fc1675fba",
      name: "Jose Piedra | desarrador web | frontend dev",
      team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
    },
    created_at_feedback: "1690480610790",
    created_at: "1690480610790",
    feedback_value: [
      {
        value: "4",
        id: "9d737e58-f051-4b8e-85b9-7ae4b51ca51b",
        title: "pregunta numerica 1",
        type: "rating",
        value_type: "numbers",
      },
      {
        value: "3",
        id: "a9507e61-c254-4be3-9e9f-ecf70e749727",
        title: "pregunta estrellas 2 ",
        type: "rating",
        value_type: "stars",
      },
      {
        value: "adsafdadfsa",
        id: "fc1b30cb-ddef-43f3-b31b-1fc1cffdaac1",
        title: "pregunta feedback 3",
        type: "feedback",
        value_type: "",
      },
    ],
  },
];

function getFeedbackValues(feedbackId) {
  const feedback = feedbacks.find((item) => item.id === feedbackId);

  return feedback
    ? {
        initial_value: feedback.initial_value,
        final_value: feedback.final_value,
      }
    : {};
}

// Iterar sobre cada resultado y actualizar el feedback_value con los valores adecuados
results.forEach((result) => {
  result.feedback_value.map((feedbackItem, index) => {
    const feedbackId = feedbackItem.id;
    const { initial_value, final_value } = getFeedbackValues(feedbackId);
    feedbackItem.initial_value = initial_value;
    feedbackItem.final_value = final_value;
  });
});

console.log(results);
