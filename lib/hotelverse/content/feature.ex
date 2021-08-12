defmodule Hotelverse.Content.Feature do
  use Hotelverse.Schema
  import Ecto.Changeset

  schema "features" do
    field :name, :string
    field :property_id, :integer
    field :icon, :string

    timestamps()
  end

  @doc false
  def changeset(feature, attrs) do
    feature
    |> cast(attrs, [:name, :icon])
    |> validate_required([:name, :icon])
  end

  def init_db do
    case Hotelverse.Content.list_features do
      [] ->
        do_init_db()
      _ ->
        false;
    end
  end

  def do_init_db do
    data = [
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

    Enum.each(data, fn feature ->
      feature_params = %{
        "name" => feature.title,
        "icon" => feature.icon
      }
      Hotelverse.Content.create_feature(feature_params)
    end)
  end
end
