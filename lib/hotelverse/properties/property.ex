defmodule Hotelverse.Properties.Property do
  use Ecto.Schema
  import Ecto.Changeset

  schema "properties" do
    field :description, :string
    field :location, :string
    field :price, :float
    field :rating, :float
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(property, attrs) do
    property
    |> cast(attrs, [:title, :price, :rating, :location, :description])
    |> validate_required([:title, :price, :rating, :location, :description])
  end
end