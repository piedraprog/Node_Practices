let evento = {
  node: {
    data: {
      outputs: [
        {
          name: "salida test ",
          ml_id: "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
          id: "ca73fc13-afa0-4efd-ba83-efe43ce1007d",
        },
        {
          name: "salida test 2",
          ml_id: "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
          id: "ca73fc13-afa0-4efd-ba83-efe43ce1007123d",
        },
      ],
      valid: true,
      name: "Machine learning",
      machine_learning: "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
    },
    id: "node229e55aa-1163-46ec-b086-ea529974a430",
    type: 7,
    name: "Machine learning",
    x: 590,
    y: 298,
    index: 1,
    ml_id: "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
  },
  team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
  ivrId: "2d0efbf0-9710-4274-a10d-be72ff5687fb",
};

let otro2 ={
  "app_id": "d59d9c10-6326-47a9-9e27-4211b210ab5e",
  "ivrs": [
      {
          "name": "y apara subir ML",
          "id": "2d0efbf0-9710-4274-a10d-be72ff5687fb"
      },
      {
          "name": "y apara subir ML",
          "id": "2d0efbf0-9710-4274-a10d-87fb"
      },
      {
          "name": "y apara subir ML",
          "id": "2d0efbf0-9710-4274-be72ff5687fb"
      }
  ],
  "updated_at": 1705553477310,
  "outputs": [
      {
          "name": "salida test ",
          "id": "ca73fc13-afa0-4efd-ba83-efe43ce1007d"
      }
  ],
  "created_at": 1698434586293,
  "team_id": "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
  "used": true,
  "id": "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
  "name": "pruebas para subir ",
  "access_token": "KOS624W3BP2ML7V62EZLEOQLVSCLAMER",
  "training": 0
}


const existingIvrIndex = otro2.ivrs.findIndex(
  (ivr) => ivr.id === evento.ivrId
);

otro2.ivrs.splice(existingIvrIndex, 1);

console.log(otro2.ivrs)



let eventDelete = {
  node: {
    data: {
      outputs: [
        {
          name: "salida test 5",
          ml_id: "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
          id: "ca73fc13-afa0-4efd-ba83-34qewrq3123ce1007d",
        },
      ],
      valid: true,
      name: "Machine learning",
      machine_learning: "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
    },
    id: "node229e55aa-1163-46ec-b086-ea529974a430",
    type: 7,
    name: "Machine learning",
    x: 590,
    y: 298,
    index: 1,
    ml_id: "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
  },
  team_id: "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
  ivrId: "2d0efbf0-9710-4274-a10d-be72ff5687fb",
}

const deleteIvrFromMachineLearning = async (event, _context) => {
  // Verificar si ya el ML tiene las props de que es usado en un ivr
  let mlInfo = {
    "app_id": "d59d9c10-6326-47a9-9e27-4211b210ab5e",
    "ivrs": [
        {
            "name": "cualquier vaina",
            "outputs": [
                {
                    "name": "salida test ",
                    "id": "ca73fc13-afa0-4efd-ba83-efe43ce1007d"
                },
                {
                    "name": "salida test 4",
                    "id": "ca73fc13-afa0-4efd-ba83-343123ce1007d"
                },
                {
                    "name": "salida test 5",
                    "id": "ca73fc13-afa0-4efd-ba83-34qewrq3123ce1007d"
                }
            ],
            "id": "2d0efbf0-9710-4274-a10d-be72ff5687fb"
        }
    ],
    "updated_at": 1705634266097,
    "created_at": 1698434586293,
    "team_id": "501bb09c-5cef-48cd-be39-3b989ca4b5ef",
    "used": true,
    "id": "d8cf4d65-a8ad-4dbb-b824-294e138678ca",
    "name": "pruebas para subir ",
    "access_token": "KOS624W3BP2ML7V62EZLEOQLVSCLAMER",
    "training": 0
}

  // return res.send(mlInfo);
  if (mlInfo.ivrs) {
    // Buscar si el ivrId ya existe en la lista ivrs
    const existingIvrIndex = mlInfo.ivrs.findIndex(
      (ivr) => ivr.id === event.ivrId
    );

    if (existingIvrIndex !== -1) {
      // // Eliminar la prop
      // try {
      //   await machineLearningClass.deleteIvrProp(
      //     event.team_id,
      //     event.node.ml_id
      //   );
      // } catch (error) {
      //   return error;
      // }

      // El ivrId ya existe, eliminarlo
      console.log(existingIvrIndex)

      const newInfo = mlInfo.ivrs[0].outputs.filter((output)=> )
      console.log(newInfo)
      // Actualizar otros datos si es necesario

      let dataMl = {
        ivrs: [...newInfo],
      };

      return dataMl

      // try {
      //   let response = await machineLearningClass.update(
      //     event.team_id,
      //     event.node.ml_id,
      //     dataMl
      //   );

      //   return response;
      // } catch (error) {
      //   return error;
      // }
    }
  } else {
    return "no tiene";
  }
};


console.log(await deleteIvrFromMachineLearning(eventDelete,""))


