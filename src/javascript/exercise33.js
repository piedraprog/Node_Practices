let json = [
  {
    account_mode: "LIVE",
    code_verification_status: "VERIFIED",
    name_status: "AVAILABLE_WITHOUT_REVIEW",
    id: "2345262345623456127436987128674",
    new_name_status: "NONE",
    status: "PENDING",
    whatsapp_business_profile: {
      data: [
        {
          messaging_product: "whatsapp",
        },
      ],
    },
  },
  {
    account_mode: "LIVE",
    code_verification_status: "VERIFIED",
    name_status: "AVAILABLE_WITHOUT_REVIEW",
    id: "21424351274369674",
    new_name_status: "NONE",
    status: "PENDING",
    whatsapp_business_profile: {
      data: [
        {
          messaging_product: "whatsapp",
        },
      ],
    },
  },
];

/*let bisnesid =  "127436987128674"

let id = "65141185181818998189118891";

let info = {};


let newjson = json.filter((xd)=> xd.id !== bisnesid);

info = {
  id_admin: id,
  ...newjson,
};

console.log(info);*/


let bisnesid = "127436987128674";
let id = "65141185181818998189118891";

json = json.filter((xd = {}) => xd.id === bisnesid);

json[0].business_id = bisnesid

let info = {
  whatsapp: json,
  team_id: "2cc9dc24-8625-4165-a670-c0a9280e740c",
};

console.log(info);