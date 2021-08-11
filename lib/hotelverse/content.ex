defmodule Hotelverse.Content do
  @moduledoc """
  The Content context.
  """

  import Ecto.Query, warn: false
  alias Hotelverse.Repo

  alias Hotelverse.Content.Image

  @doc """
  Returns the list of images.

  ## Examples

      iex> list_images()
      [%Image{}, ...]

  """
  def list_images do
    Repo.all(Image)
  end

  @doc """
  Gets a single image.

  Raises `Ecto.NoResultsError` if the Image does not exist.

  ## Examples

      iex> get_image!(123)
      %Image{}

      iex> get_image!(456)
      ** (Ecto.NoResultsError)

  """
  def get_image!(id), do: Repo.get!(Image, id)

  @doc """
  Creates a image.

  ## Examples

      iex> create_image(%{field: value})
      {:ok, %Image{}}

      iex> create_image(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_image(attrs \\ %{}) do
    %Image{}
    |> Image.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a image.

  ## Examples

      iex> update_image(image, %{field: new_value})
      {:ok, %Image{}}

      iex> update_image(image, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_image(%Image{} = image, attrs) do
    image
    |> Image.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a image.

  ## Examples

      iex> delete_image(image)
      {:ok, %Image{}}

      iex> delete_image(image)
      {:error, %Ecto.Changeset{}}

  """
  def delete_image(%Image{} = image) do
    Repo.delete(image)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking image changes.

  ## Examples

      iex> change_image(image)
      %Ecto.Changeset{data: %Image{}}

  """
  def change_image(%Image{} = image, attrs \\ %{}) do
    Image.changeset(image, attrs)
  end

  alias Hotelverse.Content.Feature

  @doc """
  Returns the list of features.

  ## Examples

      iex> list_features()
      [%Feature{}, ...]

  """
  def list_features do
    Repo.all(Feature)
  end

  @doc """
  Gets a single feature.

  Raises `Ecto.NoResultsError` if the Feature does not exist.

  ## Examples

      iex> get_feature!(123)
      %Feature{}

      iex> get_feature!(456)
      ** (Ecto.NoResultsError)

  """
  def get_feature!(id), do: Repo.get!(Feature, id)

  @doc """
  Creates a feature.

  ## Examples

      iex> create_feature(%{field: value})
      {:ok, %Feature{}}

      iex> create_feature(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_feature(attrs \\ %{}) do
    %Feature{}
    |> Feature.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a feature.

  ## Examples

      iex> update_feature(feature, %{field: new_value})
      {:ok, %Feature{}}

      iex> update_feature(feature, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_feature(%Feature{} = feature, attrs) do
    feature
    |> Feature.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a feature.

  ## Examples

      iex> delete_feature(feature)
      {:ok, %Feature{}}

      iex> delete_feature(feature)
      {:error, %Ecto.Changeset{}}

  """
  def delete_feature(%Feature{} = feature) do
    Repo.delete(feature)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking feature changes.

  ## Examples

      iex> change_feature(feature)
      %Ecto.Changeset{data: %Feature{}}

  """
  def change_feature(%Feature{} = feature, attrs \\ %{}) do
    Feature.changeset(feature, attrs)
  end

  alias Hotelverse.Content.Extra

  @doc """
  Returns the list of extras.

  ## Examples

      iex> list_extras()
      [%Extra{}, ...]

  """
  def list_extras do
    Repo.all(Extra)
  end

  @doc """
  Gets a single extra.

  Raises `Ecto.NoResultsError` if the Extra does not exist.

  ## Examples

      iex> get_extra!(123)
      %Extra{}

      iex> get_extra!(456)
      ** (Ecto.NoResultsError)

  """
  def get_extra!(id), do: Repo.get!(Extra, id)

  @doc """
  Creates a extra.

  ## Examples

      iex> create_extra(%{field: value})
      {:ok, %Extra{}}

      iex> create_extra(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_extra(attrs \\ %{}) do
    %Extra{}
    |> Extra.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a extra.

  ## Examples

      iex> update_extra(extra, %{field: new_value})
      {:ok, %Extra{}}

      iex> update_extra(extra, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_extra(%Extra{} = extra, attrs) do
    extra
    |> Extra.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a extra.

  ## Examples

      iex> delete_extra(extra)
      {:ok, %Extra{}}

      iex> delete_extra(extra)
      {:error, %Ecto.Changeset{}}

  """
  def delete_extra(%Extra{} = extra) do
    Repo.delete(extra)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking extra changes.

  ## Examples

      iex> change_extra(extra)
      %Ecto.Changeset{data: %Extra{}}

  """
  def change_extra(%Extra{} = extra, attrs \\ %{}) do
    Extra.changeset(extra, attrs)
  end
end
