defmodule Hotelverse.Content.Image do
  use Ecto.Schema
  import Ecto.Changeset

  schema "images" do
    field :property_id, :integer
    field :url, :string

    timestamps()
  end

  @doc false
  def changeset(image, attrs) do
    image
    |> cast(attrs, [:property_id, :url])
    |> validate_required([:property_id, :url])
  end
end
