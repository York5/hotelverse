defmodule Hotelverse.Properties.Property do
  use Hotelverse.Schema
  import Ecto.Changeset

  schema "properties" do
    field :title, :string
    field :price, :float
    field :max_adults, :integer
    field :max_kids, :integer
    field :rating, :float, default: 0.0
    field :location, :string
    field :description, :string

    timestamps()
  end

  @doc false
  def changeset(property, attrs) do
    property
    |> cast(attrs, [:title, :price, :rating, :location, :description])
    |> validate_required([:title, :price, :location, :description])
  end
end
