let tikkets = [
    {
        "id": "3db8e6a4-27d1-473f-93bf-13e16c71ebeb",
        "channel_id": "5_101392349681119",
        "network_id": "5_573024563536",
        "campaign_id": "3f60832f-0793-4822-86f9-37f4c79d3c81",
        "source": 1,
        "bot_id": "6332c7b7-2f59-4584-b81c-79ffb6581b56",
        "closed_created_at": "1_1699460839381",
        "created_at": "1699460841480",
        "campaign": "1699460839381",
        "updated_at": "1699460861706"
    },
    {
        "campaign_id": "9dff4e84-9c9d-4cbb-85e5-3eed75a09208",
        "source": 1,
        "bot_id": "6332c7b7-2f59-4584-b81c-79ffb6581b56",
        "closed_created_at": "1_1701112534821",
        "created_at": "1701112537720",
        "campaign": "1701112534821",
        "updated_at": "1701112561028"
    }
]
let campaigns = [
    {
        "id": "d206190c-71b9-4028-9710-6d4affc69686",
        "name": "Cliente SURA Prueba"
    },
    {
        "id": "2759c710-48b0-405d-8b34-52bda716e0f6",
        "name": "Prueba segment 2"
    },
    {
        "id": "c18b826d-36c7-4d52-a97e-7706280f7ff2",
        "name": "Prueba de envio nov"
    },
    {
        "id": "a29001b1-7054-40a2-92da-925b8397aeaa",
        "name": "pruebaenvioclaudia"
    },
    {
        "id": "69cadf4d-9cea-4f76-ad2d-16666ad220f2",
        "name": "Cliente SURA Prueba Enviada"
    },
    {
        "id": "0fcea820-6d79-4ac9-ad78-5d4823fa0a56",
        "name": "pruebaenvioclaudia"
    },
    {
        "id": "26f8c038-e6a8-4537-81a4-a7a8a3bccb73",
        "name": "Prueba segment 1"
    },
    {
        "id": "8a90b48c-bb92-4e8b-be07-6ddf28c7bdba",
        "name": "Promo Nov Barranquilla"
    },
    {
        "id": "a861efc6-acef-463d-999c-4c75d22d73b3",
        "name": "Cliente SURA Santa Marta"
    },
    {
        "id": "51a0aadf-a2cc-42df-98aa-628680f1e848",
        "name": "Cliente SURA Cartagena"
    },
    {
        "id": "cab8c9b6-a6ea-4eb8-9895-0e48576a6ee0",
        "name": "Promo Nov Barranquilla"
    },
    {
        "id": "db970033-34e7-44c1-9301-d01dc4454336",
        "name": "Promo Nov Santa Marta"
    },
    {
        "id": "772b0d91-23ca-4145-8394-84eef10fa1d5",
        "name": "Clientes SURA Barraquilla"
    },
    {
        "id": "314e1168-8b80-4f6e-aecf-ce68ac48f593",
        "name": "Promoción Alameda Diciembre"
    },
    {
        "id": "3f60832f-0793-4822-86f9-37f4c79d3c81",
        "name": "Promo Nov Cartagena"
    },
    {
        "id": "a38f9ffd-fa58-49ff-8ad0-0e1915e7ed81",
        "name": "Detecta a tiempo Santa Marta Diciembre"
    },
    {
        "id": "6b270eb5-6aa5-417e-83f9-e733e3bea725",
        "name": "Promo Nov Santa Marta 2"
    },
    {
        "id": "9dff4e84-9c9d-4cbb-85e5-3eed75a09208",
        "name": "Promo Nov Cartagena 2"
    },
    {
        "id": "365c6723-50cf-4ad4-ab96-2869791025d8",
        "name": "Deteccion a tiempo Sta Marta"
    },
    {
        "id": "1f9e1e56-e574-4164-94ad-e286a6bcb76c",
        "name": "Deteccion a tiempo Barranquilla"
    },
    {
        "id": "a0349841-0bff-4ca9-9562-05e2cd9da108",
        "name": "Promo Nov Barranquilla 2"
    },
    {
        "id": "4e64cf30-05d6-4bef-8f47-8cfebadfab64",
        "name": "Deteccion a tiempo Cartagena"
    },
    {
        "id": "a1b8a9f2-9a32-4bf6-9dcb-28f490faae9b",
        "name": "Deteccion a tiempo Soledad"
    }
]

// Crear un mapa para mapear los id de campaña a nombres de campaña
const campaignMap = new Map(campaigns.map(campaign => [campaign.id, campaign.name]));

// Mapear los tikkets y agregar el nombre de la campaña
const tikketsWithCampaignNames = tikkets.map(tikket => {
  const campaignName = campaignMap.get(tikket.campaign_id);
  return { ...tikket, campaign_name: campaignName };
});

console.log(tikketsWithCampaignNames);