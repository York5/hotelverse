defmodule Hotelverse.Properties do
  @moduledoc """
  The Properties context.
  """

  import Ecto.Query, warn: false
  alias Hotelverse.Repo

  alias Hotelverse.Properties.Property

  @doc """
  Returns the list of properties.

  ## Examples

      iex> list_properties()
      [%Property{}, ...]

  """
  def list_properties do
    Repo.all(Property)
    |> Enum.map(fn property ->

      selected_features = Enum.map(property.features, fn f_id ->
        feature = Hotelverse.Content.get_feature!(f_id)
        %{
          id: feature.id,
          name: feature.name,
          icon: feature.icon
        }
      end)
      Map.put(property, :features, selected_features)
    end)
  end

  @doc """
  Gets a single property.

  Raises `Ecto.NoResultsError` if the Property does not exist.

  ## Examples

      iex> get_property!(123)
      %Property{}

      iex> get_property!(456)
      ** (Ecto.NoResultsError)

  """
  def get_property!(id) do
    property = Repo.get!(Property, id)
    selected_features = Enum.map(property.features, fn f_id ->
      feature = Hotelverse.Content.get_feature!(f_id)
      %{
        id: feature.id,
        name: feature.name,
        icon: feature.icon
      }
    end)
    Map.put(property, :features, selected_features)
  end

  @doc """
  Creates a property.

  ## Examples

      iex> create_property(%{field: value})
      {:ok, %Property{}}

      iex> create_property(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_property(attrs \\ %{}) do
    %Property{}
    |> Property.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a property.

  ## Examples

      iex> update_property(property, %{field: new_value})
      {:ok, %Property{}}

      iex> update_property(property, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_property(%Property{} = property, attrs) do
    property
    |> Property.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a property.

  ## Examples

      iex> delete_property(property)
      {:ok, %Property{}}

      iex> delete_property(property)
      {:error, %Ecto.Changeset{}}

  """
  def delete_property(%Property{} = property) do
    Repo.delete(property)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking property changes.

  ## Examples

      iex> change_property(property)
      %Ecto.Changeset{data: %Property{}}

  """
  def change_property(%Property{} = property, attrs \\ %{}) do
    Property.changeset(property, attrs)
  end
end
