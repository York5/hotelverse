defmodule Hotelverse.Properties.Property do
  use Hotelverse.Schema
  import Ecto.Changeset

  schema "properties" do
    field :title, :string
    belongs_to :user, Hotelverse.Users.User
    field :max_adults, :integer, default: 1
    field :max_kids, :integer, default: 0
    field :price, :float
    field :rating, :float, default: 0.0
    field :location, :string
    field :features, {:array, :binary_id}, default: []
    field :description, :string
    field :images, {:array, :string}, default: []

    timestamps()
  end

  @doc false
  def changeset(property, attrs) do
    property
    |> cast(attrs, [:title, :user_id, :max_adults, :max_kids, :price, :rating, :location, :features, :description, :images])
    |> validate_required([:title, :user_id, :max_adults, :max_kids, :price, :rating, :location, :features, :description, :images])
  end

  def init_db do
    case Hotelverse.Properties.list_properties() do
      [] ->
        do_init_db()
      _ ->
        false;
    end
  end

  def do_init_db do
    data = [
      %{
        title: "J&F Cycle Yard Osaka ",
        image: "https://i.pinimg.com/originals/e7/a1/e6/e7a1e6910486befc2507c6462528c3d7.png",
        price: 15.4,
        rating: 4.0,
        location: "Osaks Japan",
        description: "If you want to live with locals like family in a hideway sharehouse, this is the place for you! You can make friends with down to earth local people from Osaka and people who come from all over the world at the same time. The living space has a warm and cozy wooden design that we hope will make you feel at home. This house boasts a fully equipped kitchen with food preparation tables large enough for everyone to make dinner together.",
        detail_images: [
          "https://img.freepik.com/free-vector/living-room-illustration-modern-retro-apartments-interior_33099-402.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/vector-illustration-of-a-cozy-cartoon-interior-of-a-home-room-a-room-vector-id810773514?k=6&m=810773514&s=612x612&w=0&h=4y45hFCWWI0zBDuLR6jYK7a_TlGlqY3HBZtfzZ8hKCU=",
          "https://i.pinimg.com/564x/40/f0/3d/40f03d5298c1bd3d9c1eeacd2b4fc198.jpg",
          "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Kings Bed",
            icon: "bed"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          }
        ]
      },

      %{
        title: "Superior Camping Retreet",
        image: "https://i.pinimg.com/originals/e7/a1/e6/e7a1e6910486befc2507c6462528c3d7.png",
        price: 10.2,
        rating: 3.0,
        location: "Klandike Alaska",
        description: "From dazzling glacially fed lakes to high mountain plateaus to expansive grasslands, this camping retree will immerse visitors in the beauty and solitude of the remote Ays??n region of Patagonia. The wild landscapes, adventurous trails, scenic transportation routes and unique local history are what makes this region so fascinating to explore.",
        detail_images: [
          "https://img.freepik.com/free-vector/concept-attic-repair-renovation-wooden-room-roof_1441-2670.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/messy-room-interior-illustration-cartoon-garret-attic-flat-clutter_33099-733.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/old-russian-kitchen-interior-and-traditional-stove-vector-id1193033455?k=6&m=1193033455&s=612x612&w=0&h=GWto051HOsDlLc6GWJyaXyBiO1xHrKHcS_uY4x9IOPc=",
          "https://img.freepik.com/free-vector/interior-old-russian-kitchen-ukrainian-house_107791-1036.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/cartoon-style-illustration-house-interior-entrance-open-door-with-stairs-rustic-vintage-furniture-wooden-floor-dining-table-with-hot-meal-it_134830-376.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      },

      %{
        title: "Solitary Country House Experience",
        image: "https://img.freepik.com/free-vector/countryside-landscape-illustration-concept_23-2148655444.jpg?size=626&ext=jpg",
        price: 18.0,
        rating: 5.0,
        location: "Oklahoma USA",
        description: "These country cottages have been newly renovated to a high standard and are perfectly located to enjoy an active beach vacation with friends or family.",
        detail_images: [
          "https://cdn.dribbble.com/users/25089/screenshots/4407309/dribbble-small-textured.jpg?compress=1&resize=400x300",
          "https://i.pinimg.com/originals/44/e1/28/44e1283bc092422b3d669f6325e118b5.jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-style-modern-multi-storey-building-architecture-cartoon-style_134830-543.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/japan-background-mountain-fuji-with-snow-near-the-water-sunset-vector-id1194436679?k=6&m=1194436679&s=612x612&w=0&h=WciWq6CxQ2mmCx-3uRyzVXYgGt8LPQzWX0CX7sViEcI=",
          "https://cdn.dribbble.com/users/642843/screenshots/6379424/trystram_mirage_dribbble_001_2x.jpg",
          "https://cdn.dribbble.com/users/1016207/screenshots/2677623/vetal_s_shot_copy_2.png"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Iron Board",
            icon: "iron"
          }
        ]
      },

      %{
        title: "Lulworth Cove House",
        image: "https://media.istockphoto.com/vectors/flat-design-vector-of-small-town-in-autumn-landscape-vector-id879004790?k=6&m=879004790&s=170667a&w=0&h=U9j2aQL2swmYkhtxmPu-s3oZWiSWRP7ZbaHRvsUODFg=",
        price: 9.0,
        rating: 2.0,
        location: "Lickfold, Near Petworth, West Sussex",
        description: "Lulworth Cove House is a very large thatched cottage with stunning sea views and is full of the WOW Factors. The 10 en-suite bedroom property can sleep up to 20 guests. The property benefits from an indoor heated swimming pool, cinema room and games room.",
        detail_images: [
          "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg",
          "https://media.istockphoto.com/vectors/flat-design-vector-of-small-town-in-autumn-landscape-vector-id879004790?k=6&m=879004790&s=170667a&w=0&h=U9j2aQL2swmYkhtxmPu-s3oZWiSWRP7ZbaHRvsUODFg=",
          "https://i.pinimg.com/originals/bc/4a/53/bc4a53ca04a5a56d6055a3a9e8bd4700.png",
          "https://img.freepik.com/free-vector/growing-future-city-metropolis-banner_1441-3600.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/shopping-mall-outside-composition-mall-building-with-tags-headlines-shops-wall_1284-58788.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/urban-street-landscape-with-cafe-beauty-salon_107791-1892.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Iron Board",
            icon: "iron"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          }
        ]
      },

      %{
        title: "Mayfield House",
        image: "https://cdn.dribbble.com/users/642843/screenshots/6379424/trystram_mirage_dribbble_001_2x.jpg",
        price: 9.0,
        rating: 2.0,
        location: "Mayfield, East Sussex",
        description: "Mayfield House is a modern country house designed in the Palladian style located close to the village of Mayfield. The property can accommodate 14 guests in 7 en suite bedrooms and benefits from an indoor swimming pool, steam room, cinema room, billiard room and gym.",
        detail_images: [
          "https://media.istockphoto.com/vectors/futuristic-city-landscape-vector-id1180630681?b=1&k=6&m=1180630681&s=170667a&w=0&h=uToNah_m2o1uBl5WW0R2J7Mq2sztRX5jQgCtSftPhb8=",
          "https://media.istockphoto.com/vectors/city-road-turn-empty-street-with-transport-highway-vector-id1179741579?k=6&m=1179741579&s=612x612&w=0&h=1JzNcKG7ZwiaLZMUtz2vRTX_aLv3KoOpZtlvEETSjIg=",
          "https://img.freepik.com/free-vector/countryside-landscape-illustration-concept_23-2148655444.jpg?size=626&ext=jpg",
          "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg",
          "https://media.istockphoto.com/vectors/flat-design-vector-of-small-town-in-autumn-landscape-vector-id879004790?k=6&m=879004790&s=170667a&w=0&h=U9j2aQL2swmYkhtxmPu-s3oZWiSWRP7ZbaHRvsUODFg=",
          "https://cdn.dribbble.com/users/642843/screenshots/6379424/trystram_mirage_dribbble_001_2x.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Kings Bed",
            icon: "bed"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Iron Board",
            icon: "iron"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          }
        ]
      },

      %{
        title: "South Downs House",
        image: "https://cdn.dribbble.com/users/1016207/screenshots/2677623/vetal_s_shot_copy_2.png",
        price: 59.9,
        rating: 5.0,
        location: "Soberton, South Downs",
        description: "South Downs House is a stunning New England style property located in the South Downs National Park. The property can accommodate 8-14 guests in 6 bedrooms and benefits from an indoor heated swimming pool, games room and sauna.",
        detail_images: [
          "https://img.freepik.com/free-vector/growing-future-city-metropolis-banner_1441-3600.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/shopping-mall-outside-composition-mall-building-with-tags-headlines-shops-wall_1284-58788.jpg?size=626&ext=jpg",
          "https://i.pinimg.com/736x/01/88/92/018892c2b872d0482f55f8225b11b176.jpg",
          "https://i.pinimg.com/736x/2a/2a/8c/2a2a8cfc5f5eaa98ed1b93f74a1faec7.jpg",
          "https://img.freepik.com/free-vector/interior-old-russian-kitchen-ukrainian-house_107791-1036.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/cartoon-style-illustration-house-interior-entrance-open-door-with-stairs-rustic-vintage-furniture-wooden-floor-dining-table-with-hot-meal-it_134830-376.jpg?size=626&ext=jpg",
          "https://static.vecteezy.com/system/resources/thumbnails/000/605/260/small_2x/1xdn_emer_180917.jpg"
        ],
        property_features: [
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Kings Bed",
            icon: "bed"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          }
        ]
      },

      %{
        title: "Honeybourne Manor",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/531a9a38747631.576d2a2c20e36.jpg",
        price: 29.9,
        rating: 2.0,
        location: "Middle Littleton, Evesham",
        description: "Honeybourne Manor is a charming 17th Century Jacobean style manor house located in the beautiful vale of Evesham. The 10-bedroom property can accommodate 20-22 guests and is set within two acres of gardens and grounds. The property benefits from a hot tub and sauna.",
        detail_images: [
          "https://img.freepik.com/free-vector/shopping-mall-outside-composition-mall-building-with-tags-headlines-shops-wall_1284-58788.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/urban-street-landscape-with-cafe-beauty-salon_107791-1892.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-style-modern-multi-storey-building-architecture-cartoon-style_134830-543.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/japan-background-mountain-fuji-with-snow-near-the-water-sunset-vector-id1194436679?k=6&m=1194436679&s=612x612&w=0&h=WciWq6CxQ2mmCx-3uRyzVXYgGt8LPQzWX0CX7sViEcI=",
          "https://media.istockphoto.com/vectors/family-sitting-around-campfire-and-tent-night-scene-vector-id824841926?k=6&m=824841926&s=612x612&w=0&h=XQHVD-EuzwsR2ZLcAFA8_l49BjSZW7YDXqWFvH5hZjc="
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          }
        ]
      },

      %{
        title: "The Orangery",
        image: "https://i.pinimg.com/736x/01/88/92/018892c2b872d0482f55f8225b11b176.jpg",
        price: 33.9,
        rating: 3.0,
        location: "Nr Yoxford, Suffolk",
        description: "The Orangery is a striking, walled garden property with 3 amazing glass houses located in a reserve Estate in Suffolk. This 8 en-suite bedroom property can accommodate 16 guests and benefits from a games room, cinema room, hot tub, sauna and a shared tennis court.",
        detail_images: [
          "https://image.freepik.com/free-vector/little-child-messy-room-interior-with-scattered-toys_33099-886.jpg",
          "https://images.assetsdelivery.com/compings_v2/neyro2008/neyro20081601/neyro2008160100247.jpg",
          "https://media.istockphoto.com/vectors/colorful-interior-of-bedroom-in-flat-cartoon-style-vector-id635870148?k=6&m=635870148&s=170667a&w=0&h=6OTUEJUzbS7UeujuNkmKUXHT4jVif1OipWCapHOq6yU=",
          "https://graphicriver.img.customer.envatousercontent.com/files/244494155/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=513eb02f907f77f9b5b4b0d2259e6cc0",
          "https://img.freepik.com/free-vector/cartoon-gamer-room-illustration_52683-60983.jpg?size=626&ext=jpg&ga=GA1.2.2100090899.1628640000",
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aed41ef-0620-4d84-9f97-fc4beb1254b7/dc5lsl8-beb34d8b-effb-467c-ae46-bf3e209b4c8f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZWQ0MWVmLTA2MjAtNGQ4NC05Zjk3LWZjNGJlYjEyNTRiN1wvZGM1bHNsOC1iZWIzNGQ4Yi1lZmZiLTQ2N2MtYWU0Ni1iZjNlMjA5YjRjOGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h1hEgj2xbDeMX9KN6f0CeuUjYMCq3cSPZ_TdfDn7zvw"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Bar",
            icon: "local_bar"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      },

      %{
        title: "Pentire Penthouse",
        image: "https://i.pinimg.com/736x/2a/2a/8c/2a2a8cfc5f5eaa98ed1b93f74a1faec7.jpg",
        price: 11.4,
        rating: 2.0,
        location: "Fistral Beach, Newquay, Cornwall",
        description: "The Orangery is a striking, walled garden property with 3 amazing glass houses located in a reserve Estate in Suffolk. This 8 en-suite bedroom property can accommodate 16 guests and benefits from a games room, cinema room, hot tub, sauna and a shared tennis court.",
        detail_images: [
          "https://img.freepik.com/free-vector/cartoon-style-illustration-house-interior-entrance-open-door-with-stairs-rustic-vintage-furniture-wooden-floor-dining-table-with-hot-meal-it_134830-376.jpg?size=626&ext=jpg",
          "https://static.vecteezy.com/system/resources/thumbnails/000/605/260/small_2x/1xdn_emer_180917.jpg",
          "https://i.pinimg.com/736x/b3/45/90/b345906700943075945ecc7df3fec36d.jpg",
          "https://thumbs.dreamstime.com/b/wild-west-living-room-western-style-interior-night-wild-west-living-room-night-empty-interior-western-rustic-style-199230846.jpg",
          "https://i.pinimg.com/736x/7c/7d/b1/7c7db132c9fc985cbb4da38ec23de75a.jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg?size=626&ext=jpg",
          "https://i.pinimg.com/736x/89/1d/1c/891d1cf40767014fa0f929c2f3bf21a2.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      },

      %{
        title: "The Oyster Catcher",
        image: "https://img.freepik.com/free-vector/illustration-with-nature-landscape-scenery-house-pine-tree-summer-countryside-nature-scene-mountains-lake_1150-37315.jpg?size=626&ext=jpg",
        price: 11.4,
        rating: 2.0,
        location: "St Mawes, Cornwall",
        description: "The Oyster Catcher is a stunning, modern home that is located on a peaceful footpath terrace less than 200 metres from the waterside above St. Mawes, with some truly amazing and breathtaking sea views. The property can accommodate 10 guests in 5 en suite bathrooms.",
        detail_images: [
          "https://img.freepik.com/free-vector/loft-lounge-room-interior-illustration-two-storey-modern-cozy-spacious-apartments_33099-674.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/concept-attic-repair-renovation-wooden-room-roof_1441-2670.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/messy-room-interior-illustration-cartoon-garret-attic-flat-clutter_33099-733.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/old-russian-kitchen-interior-and-traditional-stove-vector-id1193033455?k=6&m=1193033455&s=612x612&w=0&h=GWto051HOsDlLc6GWJyaXyBiO1xHrKHcS_uY4x9IOPc=",
          "https://img.freepik.com/free-vector/interior-old-russian-kitchen-ukrainian-house_107791-1036.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Iron Board",
            icon: "iron"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      },

      %{
        title: "Clarence House",
        image: "https://cdn.dribbble.com/users/3863141/screenshots/11132671/media/adbded637fe9a83fe6121f2b1122bb09.png?compress=1&resize=400x300",
        price: 21.4,
        rating: 3.0,
        location: "Nr Yoxford, Suffolk",
        description: "Clarence House is a wonderful manor built in 1827; the property is located on a Reserve Estate in Suffolk. The 14-bedroom property can accommodate 27 guests and it benefits from a gym , cinema room and games room.",
        detail_images: [
          "https://images.assetsdelivery.com/compings_v2/vectorpouch/vectorpouch1902/vectorpouch190200100.jpg",
          "https://img.freepik.com/free-vector/old-scary-house-with-glow-windows-night-cartoon-landscape-with-spooky-wooden-mansion-broken-fence-dark-silhouettes-trees-moon-sky_107791-4486.jpg?size=626&ext=jpg",
          "https://cdn.nohat.cc/thumb/f/720/5659673474629632.jpg",
          "https://i.pinimg.com/564x/40/f0/3d/40f03d5298c1bd3d9c1eeacd2b4fc198.jpg",
          "https://image.freepik.com/free-vector/little-child-messy-room-interior-with-scattered-toys_33099-886.jpg",
          "https://images.assetsdelivery.com/compings_v2/neyro2008/neyro20081601/neyro2008160100247.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Bar",
            icon: "local_bar"
          }
        ]
      },

      %{
        title: "Oaklands Barns",
        image: "https://i.pinimg.com/originals/44/e1/28/44e1283bc092422b3d669f6325e118b5.jpg",
        price: 12.0,
        rating: 5.0,
        location: "Lyonshall, Herefordshire",
        description: "Oaklands Barns are a luxurious collection of individually styled barns with wonderful views across the Herefordshire countryside. The barns can accommodate 24-28 guests in 12 en-suite bedrooms and benefits from a hot tub, games room and private courtyards.",
        detail_images: [
          "https://img.freepik.com/free-vector/cartoon-gamer-room-illustration_52683-60983.jpg?size=626&ext=jpg&ga=GA1.2.2100090899.1628640000",
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aed41ef-0620-4d84-9f97-fc4beb1254b7/dc5lsl8-beb34d8b-effb-467c-ae46-bf3e209b4c8f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZWQ0MWVmLTA2MjAtNGQ4NC05Zjk3LWZjNGJlYjEyNTRiN1wvZGM1bHNsOC1iZWIzNGQ4Yi1lZmZiLTQ2N2MtYWU0Ni1iZjNlMjA5YjRjOGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h1hEgj2xbDeMX9KN6f0CeuUjYMCq3cSPZ_TdfDn7zvw",
          "https://assets.puzzlefactory.pl/puzzle/261/499/original.jpg",
          "https://img.freepik.com/free-vector/four-different-bedrooms_1308-2346.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Kings Bed",
            icon: "bed"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Bar",
            icon: "local_bar"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          }
        ]
      },

      %{
        title: "Magnolia Barn",
        image: "https://images.assetsdelivery.com/compings_v2/vectorpouch/vectorpouch1902/vectorpouch190200100.jpg",
        price: 12.0,
        rating: 5.0,
        location: "Near Colchester, Essex",
        description: "Magnolia Barn is a luxurious modern property attached to a 16th century Grade II listed barn located in the village of Marks Tey, Essex. The property can accommodate 14-16 guests in 6 bedrooms set within 3 acres of beautiful grounds and benefits from a hot tub.",
        detail_images: [
          "https://img.freepik.com/free-vector/messy-room-interior-illustration-cartoon-garret-attic-flat-clutter_33099-733.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/old-russian-kitchen-interior-and-traditional-stove-vector-id1193033455?k=6&m=1193033455&s=612x612&w=0&h=GWto051HOsDlLc6GWJyaXyBiO1xHrKHcS_uY4x9IOPc=",
          "https://img.freepik.com/free-vector/interior-old-russian-kitchen-ukrainian-house_107791-1036.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/cartoon-gamer-room-illustration_52683-60983.jpg?size=626&ext=jpg&ga=GA1.2.2100090899.1628640000",
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aed41ef-0620-4d84-9f97-fc4beb1254b7/dc5lsl8-beb34d8b-effb-467c-ae46-bf3e209b4c8f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZWQ0MWVmLTA2MjAtNGQ4NC05Zjk3LWZjNGJlYjEyNTRiN1wvZGM1bHNsOC1iZWIzNGQ4Yi1lZmZiLTQ2N2MtYWU0Ni1iZjNlMjA5YjRjOGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h1hEgj2xbDeMX9KN6f0CeuUjYMCq3cSPZ_TdfDn7zvw",
          "https://assets.puzzlefactory.pl/puzzle/261/499/original.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Bar",
            icon: "local_bar"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          }
        ]
      },

      %{
        title: "Cookham House and SPA",
        image: "https://media.istockphoto.com/vectors/city-road-turn-empty-street-with-transport-highway-vector-id1179741579?k=6&m=1179741579&s=612x612&w=0&h=1JzNcKG7ZwiaLZMUtz2vRTX_aLv3KoOpZtlvEETSjIg=",
        price: 12.0,
        rating: 5.0,
        location: "Cookham Dean, Berkshire",
        description: "Cookham House is a large elegant Edwardian house totally refurbished in 2014. The house, nestled in the heart of this quintessentially English country village, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms.",
        detail_images: [
          "https://static.vecteezy.com/system/resources/thumbnails/000/605/260/small_2x/1xdn_emer_180917.jpg",
          "https://i.pinimg.com/736x/b3/45/90/b345906700943075945ecc7df3fec36d.jpg",
          "https://thumbs.dreamstime.com/b/wild-west-living-room-western-style-interior-night-wild-west-living-room-night-empty-interior-western-rustic-style-199230846.jpg",
          "https://i.pinimg.com/736x/7c/7d/b1/7c7db132c9fc985cbb4da38ec23de75a.jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          }
        ]
      },

      %{
        title: "Property Next To The Pier",
        image: "https://cdn.nohat.cc/thumb/f/720/5659673474629632.jpg",
        price: 41.0,
        rating: 2.0,
        location: "Shanty Cookland Brimshire",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://static.vecteezy.com/system/resources/thumbnails/000/605/260/small_2x/1xdn_emer_180917.jpg",
          "https://i.pinimg.com/736x/b3/45/90/b345906700943075945ecc7df3fec36d.jpg",
          "https://thumbs.dreamstime.com/b/wild-west-living-room-western-style-interior-night-wild-west-living-room-night-empty-interior-western-rustic-style-199230846.jpg",
          "https://i.pinimg.com/736x/7c/7d/b1/7c7db132c9fc985cbb4da38ec23de75a.jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          }
        ]
      },

      %{
        title: "Estate On The Foothil",
        image: "https://media.istockphoto.com/vectors/futuristic-city-landscape-vector-id1180630681?b=1&k=6&m=1180630681&s=170667a&w=0&h=uToNah_m2o1uBl5WW0R2J7Mq2sztRX5jQgCtSftPhb8=",
        price: 22.0,
        rating: 1.0,
        location: "Cornval Texas",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://static.vecteezy.com/system/resources/thumbnails/000/605/260/small_2x/1xdn_emer_180917.jpg",
          "https://i.pinimg.com/736x/b3/45/90/b345906700943075945ecc7df3fec36d.jpg",
          "https://thumbs.dreamstime.com/b/wild-west-living-room-western-style-interior-night-wild-west-living-room-night-empty-interior-western-rustic-style-199230846.jpg",
          "https://i.pinimg.com/736x/7c/7d/b1/7c7db132c9fc985cbb4da38ec23de75a.jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg?size=626&ext=jpg",
          "https://i.pinimg.com/736x/89/1d/1c/891d1cf40767014fa0f929c2f3bf21a2.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Kings Bed",
            icon: "bed"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Bar",
            icon: "local_bar"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          }
        ]
      },

      %{
        title: "Estate On The Desert Front",
        image: "https://img.freepik.com/free-vector/growing-future-city-metropolis-banner_1441-3600.jpg?size=626&ext=jpg",
        price: 12.0,
        rating: 4.0,
        location: "Cantinel Broadway USA",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://img.freepik.com/free-vector/cartoon-gamer-room-illustration_52683-60983.jpg?size=626&ext=jpg&ga=GA1.2.2100090899.1628640000",
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aed41ef-0620-4d84-9f97-fc4beb1254b7/dc5lsl8-beb34d8b-effb-467c-ae46-bf3e209b4c8f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZWQ0MWVmLTA2MjAtNGQ4NC05Zjk3LWZjNGJlYjEyNTRiN1wvZGM1bHNsOC1iZWIzNGQ4Yi1lZmZiLTQ2N2MtYWU0Ni1iZjNlMjA5YjRjOGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h1hEgj2xbDeMX9KN6f0CeuUjYMCq3cSPZ_TdfDn7zvw",
          "https://assets.puzzlefactory.pl/puzzle/261/499/original.jpg",
          "https://img.freepik.com/free-vector/four-different-bedrooms_1308-2346.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/kids-corner-play-room-playground-with-small-tent_82689-88.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Kings Bed",
            icon: "bed"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          }
        ]
      },

      %{
        title: "Estate On The Desert Front",
        image: "https://img.freepik.com/free-vector/shopping-mall-outside-composition-mall-building-with-tags-headlines-shops-wall_1284-58788.jpg?size=626&ext=jpg",
        price: 18.5,
        rating: 5.0,
        location: "Shrilanka",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://assets.puzzlefactory.pl/puzzle/261/499/original.jpg",
          "https://img.freepik.com/free-vector/four-different-bedrooms_1308-2346.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/kids-corner-play-room-playground-with-small-tent_82689-88.jpg?size=626&ext=jpg",
          "https://thumbs.dreamstime.com/b/wild-west-living-room-western-style-interior-night-wild-west-living-room-night-empty-interior-western-rustic-style-199230846.jpg",
          "https://i.pinimg.com/736x/7c/7d/b1/7c7db132c9fc985cbb4da38ec23de75a.jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Kings Bed",
            icon: "bed"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Bar",
            icon: "local_bar"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Iron Board",
            icon: "iron"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          }
        ]
      },

      %{
        title: "Estate On The Desert Front",
        image: "https://img.freepik.com/free-vector/urban-street-landscape-with-cafe-beauty-salon_107791-1892.jpg?size=626&ext=jpg",
        price: 12.5,
        rating: 3.0,
        location: "Africa",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://media.istockphoto.com/vectors/colorful-interior-of-bedroom-in-flat-cartoon-style-vector-id635870148?k=6&m=635870148&s=170667a&w=0&h=6OTUEJUzbS7UeujuNkmKUXHT4jVif1OipWCapHOq6yU=",
          "https://graphicriver.img.customer.envatousercontent.com/files/244494155/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=513eb02f907f77f9b5b4b0d2259e6cc0",
          "https://img.freepik.com/free-vector/cartoon-gamer-room-illustration_52683-60983.jpg?size=626&ext=jpg&ga=GA1.2.2100090899.1628640000",
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aed41ef-0620-4d84-9f97-fc4beb1254b7/dc5lsl8-beb34d8b-effb-467c-ae46-bf3e209b4c8f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZWQ0MWVmLTA2MjAtNGQ4NC05Zjk3LWZjNGJlYjEyNTRiN1wvZGM1bHNsOC1iZWIzNGQ4Yi1lZmZiLTQ2N2MtYWU0Ni1iZjNlMjA5YjRjOGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h1hEgj2xbDeMX9KN6f0CeuUjYMCq3cSPZ_TdfDn7zvw",
          "https://assets.puzzlefactory.pl/puzzle/261/499/original.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Iron Board",
            icon: "iron"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          }
        ]
      },

      %{
        title: "High Alps Accomodation",
        image: "https://img.freepik.com/free-vector/vector-cartoon-style-modern-multi-storey-building-architecture-cartoon-style_134830-543.jpg?size=626&ext=jpg",
        price: 223.5,
        rating: 5.0,
        location: "Switzerland Fiords",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://img.freepik.com/free-vector/cartoon-style-illustration-house-interior-entrance-open-door-with-stairs-rustic-vintage-furniture-wooden-floor-dining-table-with-hot-meal-it_134830-376.jpg?size=626&ext=jpg",
          "https://static.vecteezy.com/system/resources/thumbnails/000/605/260/small_2x/1xdn_emer_180917.jpg",
          "https://i.pinimg.com/736x/b3/45/90/b345906700943075945ecc7df3fec36d.jpg",
          "https://thumbs.dreamstime.com/b/wild-west-living-room-western-style-interior-night-wild-west-living-room-night-empty-interior-western-rustic-style-199230846.jpg",
          "https://i.pinimg.com/736x/7c/7d/b1/7c7db132c9fc985cbb4da38ec23de75a.jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg?size=626&ext=jpg",
          "https://i.pinimg.com/736x/89/1d/1c/891d1cf40767014fa0f929c2f3bf21a2.jpg",
          "https://i.pinimg.com/736x/7a/74/56/7a745618b1536dfc05862fab9ac4f25f.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      },

      %{
        title: "Fuji Relax And Rest Traditional House",
        image: "https://media.istockphoto.com/vectors/japan-background-mountain-fuji-with-snow-near-the-water-sunset-vector-id1194436679?k=6&m=1194436679&s=612x612&w=0&h=WciWq6CxQ2mmCx-3uRyzVXYgGt8LPQzWX0CX7sViEcI=",
        price: 223.5,
        rating: 5.0,
        location: "Japan",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://img.freepik.com/free-vector/four-different-bedrooms_1308-2346.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/kids-corner-play-room-playground-with-small-tent_82689-88.jpg?size=626&ext=jpg",
          "https://cdn.shopify.com/s/files/1/0065/4917/6438/products/a-fancy-hotel-room-with-king-size-bed_28fa5b74-cd5e-4d30-b248-afd4919c4cfb.jpg?v=1570322449",
          "https://1.bp.blogspot.com/-CA7-xZfDRwE/X9JhbWgGvgI/AAAAAAAAG_0/I3hSu--CqowX4OCNrToK9ZDYSqzCqGCnQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Anime-Room-bedroom-Background.jpg",
          "https://img.freepik.com/free-vector/living-room-illustration-modern-retro-apartments-interior_33099-402.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/vector-illustration-of-a-cozy-cartoon-interior-of-a-home-room-a-room-vector-id810773514?k=6&m=810773514&s=612x612&w=0&h=4y45hFCWWI0zBDuLR6jYK7a_TlGlqY3HBZtfzZ8hKCU=",
          "https://i.pinimg.com/564x/40/f0/3d/40f03d5298c1bd3d9c1eeacd2b4fc198.jpg",
          "https://image.freepik.com/free-vector/little-child-messy-room-interior-with-scattered-toys_33099-886.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Swimming Pool",
            icon: "pool"
          },
          %{
            title: "Refrigirator",
            icon: "kitchen"
          },
          %{
            title: "AC",
            icon: "ac_unit"
          },
          %{
            title: "Iron Board",
            icon: "iron"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      },

      %{
        title: "Campers Paradize Travelling Lodge",
        image: "https://media.istockphoto.com/vectors/family-sitting-around-campfire-and-tent-night-scene-vector-id824841926?k=6&m=824841926&s=612x612&w=0&h=XQHVD-EuzwsR2ZLcAFA8_l49BjSZW7YDXqWFvH5hZjc=",
        price: 46.5,
        rating: 4.0,
        location: "Forks USA",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://img.freepik.com/free-vector/kids-corner-play-room-playground-with-small-tent_82689-88.jpg?size=626&ext=jpg",
          "https://cdn.shopify.com/s/files/1/0065/4917/6438/products/a-fancy-hotel-room-with-king-size-bed_28fa5b74-cd5e-4d30-b248-afd4919c4cfb.jpg?v=1570322449",
          "https://1.bp.blogspot.com/-CA7-xZfDRwE/X9JhbWgGvgI/AAAAAAAAG_0/I3hSu--CqowX4OCNrToK9ZDYSqzCqGCnQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Anime-Room-bedroom-Background.jpg",
          "https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg?size=626&ext=jpg",
          "https://i.pinimg.com/736x/89/1d/1c/891d1cf40767014fa0f929c2f3bf21a2.jpg",
          "https://i.pinimg.com/736x/7a/74/56/7a745618b1536dfc05862fab9ac4f25f.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Iron Board",
            icon: "iron"
          },
          %{
            title: "Gym",
            icon: "fitness_center"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      },

      %{
        title: "Forbiden City Luxury Hotel",
        image: "https://st2.depositphotos.com/8197808/11814/v/600/depositphotos_118149434-stock-illustration-vintage-poster-of-forbidden-city.jpg",
        price: 50.5,
        rating: 2.0,
        location: "China ",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aed41ef-0620-4d84-9f97-fc4beb1254b7/dc5lsl8-beb34d8b-effb-467c-ae46-bf3e209b4c8f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZWQ0MWVmLTA2MjAtNGQ4NC05Zjk3LWZjNGJlYjEyNTRiN1wvZGM1bHNsOC1iZWIzNGQ4Yi1lZmZiLTQ2N2MtYWU0Ni1iZjNlMjA5YjRjOGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h1hEgj2xbDeMX9KN6f0CeuUjYMCq3cSPZ_TdfDn7zvw",
          "https://assets.puzzlefactory.pl/puzzle/261/499/original.jpg",
          "https://img.freepik.com/free-vector/four-different-bedrooms_1308-2",
          "https://img.freepik.com/free-vector/concept-attic-repair-renovation-wooden-room-roof_1441-2670.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/messy-room-interior-illustration-cartoon-garret-attic-flat-clutter_33099-733.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/old-russian-kitchen-interior-and-traditional-stove-vector-id1193033455?k=6&m=1193033455&s=612x612&w=0&h=GWto051HOsDlLc6GWJyaXyBiO1xHrKHcS_uY4x9IOPc=",
          "https://img.freepik.com/free-vector/interior-old-russian-kitchen-ukrainian-house_107791-1036.jpg?size=626&ext=jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      },

      %{
        title: "Rural USA Experience",
        image: "https://i.pinimg.com/originals/24/85/6e/24856e66831b3133aa8dbd0df290e2cb.jpg",
        price: 32.2,
        rating: 1.0,
        location: "Alabama USA",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://image.freepik.com/free-vector/little-child-messy-room-interior-with-scattered-toys_33099-886.jpg",
          "https://images.assetsdelivery.com/compings_v2/neyro2008/neyro20081601/neyro2008160100247.jpg",
          "https://media.istockphoto.com/vectors/colorful-interior-of-bedroom-in-flat-cartoon-style-vector-id635870148?k=6&m=635870148&s=170667a&w=0&h=6OTUEJUzbS7UeujuNkmKUXHT4jVif1OipWCapHOq6yU=",
          "https://graphicriver.img.customer.envatousercontent.com/files/244494155/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=513eb02f907f77f9b5b4b0d2259e6cc0",
          "https://img.freepik.com/free-vector/cartoon-gamer-room-illustration_52683-60983.jpg?size=626&ext=jpg&ga=GA1.2.2100090899.1628640000",
          "https://i.pinimg.com/736x/89/1d/1c/891d1cf40767014fa0f929c2f3bf21a2.jpg",
          "https://i.pinimg.com/736x/7a/74/56/7a745618b1536dfc05862fab9ac4f25f.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Big Room",
            icon: "zoom_out_map"
          },
          %{
            title: "Bar",
            icon: "local_bar"
          }
        ]
      },

      %{
        title: "Glaciar River Resort",
        image: "https://i.pinimg.com/originals/bc/4a/53/bc4a53ca04a5a56d6055a3a9e8bd4700.png",
        price: 68.9,
        rating: 4.0,
        location: "Candad Ontario",
        description: "Property totally refurbished and perfetly situated. The estate, nestled in the heart of this quintessentially beatifull location, accommodates 12-14 guests in 6 en-suite bedrooms and 5 reception rooms. Enjoy the pictoresque views on the counryside, or indulge into hiking around nearby forests. ",
        detail_images: [
          "https://img.freepik.com/free-vector/concept-attic-repair-renovation-wooden-room-roof_1441-2670.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/messy-room-interior-illustration-cartoon-garret-attic-flat-clutter_33099-733.jpg?size=626&ext=jpg",
          "https://media.istockphoto.com/vectors/old-russian-kitchen-interior-and-traditional-stove-vector-id1193033455?k=6&m=1193033455&s=612x612&w=0&h=GWto051HOsDlLc6GWJyaXyBiO1xHrKHcS_uY4x9IOPc=",
          "https://img.freepik.com/free-vector/interior-old-russian-kitchen-ukrainian-house_107791-1036.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/cartoon-style-illustration-house-interior-entrance-open-door-with-stairs-rustic-vintage-furniture-wooden-floor-dining-table-with-hot-meal-it_134830-376.jpg?size=626&ext=jpg",
          "https://static.vecteezy.com/system/resources/thumbnails/000/605/260/small_2x/1xdn_emer_180917.jpg",
          "https://i.pinimg.com/736x/b3/45/90/b345906700943075945ecc7df3fec36d.jpg"
        ],
        property_features: [
          %{
            title: "Wi-Fi",
            icon: "wifi_outlined"
          },
          %{
            title: "Bathtub",
            icon: "bathtub"
          },
          %{
            title: "Standard Bed",
            icon: "hotel"
          },
          %{
            title: "Breakfast",
            icon: "restaurant"
          },
          %{
            title: "Bar",
            icon: "local_bar"
          },
          %{
            title: "Pets Allowed",
            icon: "pets"
          },
          %{
            title: "Free Parking",
            icon: "local_parking"
          },
          %{
            title: "Mountain View",
            icon: "landscape"
          }
        ]
      }
    ]

    Enum.each(data, fn property ->
      property_params = %{
        "title" => property.title,
        "user_id" => get_random_user(),
        "max_adults" => Enum.random(1..6),
        "max_kids" => Enum.random(1..4),
        "price" => property.price,
        "rating" => property.rating,
        "location" => property.location,
        "features" => get_features_ids(property.property_features),
        "description" => property.description,
        "images" => [property.image|property.detail_images]
      }
      Hotelverse.Properties.create_property(property_params)
    end)
  end

  def get_random_user do
    Hotelverse.Repo.all(Hotelverse.Users.User)
    |> Enum.random()
    |> Map.get(:id)
  end

  defp get_features_ids(features) do
    Enum.map(features, fn feat ->
      feature = Hotelverse.Content.get_feature_by_title(feat.title)
      feature.id
    end)
  end

end
