defmodule Hotelverse.Content.Extra do
  use Ecto.Schema
  import Ecto.Changeset

  schema "extras" do
    field :name, :string
    field :price, :float
    field :property_id, :integer

    timestamps()
  end

  @doc false
  def changeset(extra, attrs) do
    extra
    |> cast(attrs, [:property_id, :name, :price])
    |> validate_required([:property_id, :name, :price])
  end
end
