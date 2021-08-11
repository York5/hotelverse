defmodule Hotelverse.ContentTest do
  use Hotelverse.DataCase

  alias Hotelverse.Content

  describe "images" do
    alias Hotelverse.Content.Image

    @valid_attrs %{property_id: 42, url: "some url"}
    @update_attrs %{property_id: 43, url: "some updated url"}
    @invalid_attrs %{property_id: nil, url: nil}

    def image_fixture(attrs \\ %{}) do
      {:ok, image} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Content.create_image()

      image
    end

    test "list_images/0 returns all images" do
      image = image_fixture()
      assert Content.list_images() == [image]
    end

    test "get_image!/1 returns the image with given id" do
      image = image_fixture()
      assert Content.get_image!(image.id) == image
    end

    test "create_image/1 with valid data creates a image" do
      assert {:ok, %Image{} = image} = Content.create_image(@valid_attrs)
      assert image.property_id == 42
      assert image.url == "some url"
    end

    test "create_image/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Content.create_image(@invalid_attrs)
    end

    test "update_image/2 with valid data updates the image" do
      image = image_fixture()
      assert {:ok, %Image{} = image} = Content.update_image(image, @update_attrs)
      assert image.property_id == 43
      assert image.url == "some updated url"
    end

    test "update_image/2 with invalid data returns error changeset" do
      image = image_fixture()
      assert {:error, %Ecto.Changeset{}} = Content.update_image(image, @invalid_attrs)
      assert image == Content.get_image!(image.id)
    end

    test "delete_image/1 deletes the image" do
      image = image_fixture()
      assert {:ok, %Image{}} = Content.delete_image(image)
      assert_raise Ecto.NoResultsError, fn -> Content.get_image!(image.id) end
    end

    test "change_image/1 returns a image changeset" do
      image = image_fixture()
      assert %Ecto.Changeset{} = Content.change_image(image)
    end
  end

  describe "features" do
    alias Hotelverse.Content.Feature

    @valid_attrs %{name: "some name", property_id: 42}
    @update_attrs %{name: "some updated name", property_id: 43}
    @invalid_attrs %{name: nil, property_id: nil}

    def feature_fixture(attrs \\ %{}) do
      {:ok, feature} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Content.create_feature()

      feature
    end

    test "list_features/0 returns all features" do
      feature = feature_fixture()
      assert Content.list_features() == [feature]
    end

    test "get_feature!/1 returns the feature with given id" do
      feature = feature_fixture()
      assert Content.get_feature!(feature.id) == feature
    end

    test "create_feature/1 with valid data creates a feature" do
      assert {:ok, %Feature{} = feature} = Content.create_feature(@valid_attrs)
      assert feature.name == "some name"
      assert feature.property_id == 42
    end

    test "create_feature/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Content.create_feature(@invalid_attrs)
    end

    test "update_feature/2 with valid data updates the feature" do
      feature = feature_fixture()
      assert {:ok, %Feature{} = feature} = Content.update_feature(feature, @update_attrs)
      assert feature.name == "some updated name"
      assert feature.property_id == 43
    end

    test "update_feature/2 with invalid data returns error changeset" do
      feature = feature_fixture()
      assert {:error, %Ecto.Changeset{}} = Content.update_feature(feature, @invalid_attrs)
      assert feature == Content.get_feature!(feature.id)
    end

    test "delete_feature/1 deletes the feature" do
      feature = feature_fixture()
      assert {:ok, %Feature{}} = Content.delete_feature(feature)
      assert_raise Ecto.NoResultsError, fn -> Content.get_feature!(feature.id) end
    end

    test "change_feature/1 returns a feature changeset" do
      feature = feature_fixture()
      assert %Ecto.Changeset{} = Content.change_feature(feature)
    end
  end

  describe "extras" do
    alias Hotelverse.Content.Extra

    @valid_attrs %{name: "some name", price: 120.5, property_id: 42}
    @update_attrs %{name: "some updated name", price: 456.7, property_id: 43}
    @invalid_attrs %{name: nil, price: nil, property_id: nil}

    def extra_fixture(attrs \\ %{}) do
      {:ok, extra} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Content.create_extra()

      extra
    end

    test "list_extras/0 returns all extras" do
      extra = extra_fixture()
      assert Content.list_extras() == [extra]
    end

    test "get_extra!/1 returns the extra with given id" do
      extra = extra_fixture()
      assert Content.get_extra!(extra.id) == extra
    end

    test "create_extra/1 with valid data creates a extra" do
      assert {:ok, %Extra{} = extra} = Content.create_extra(@valid_attrs)
      assert extra.name == "some name"
      assert extra.price == 120.5
      assert extra.property_id == 42
    end

    test "create_extra/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Content.create_extra(@invalid_attrs)
    end

    test "update_extra/2 with valid data updates the extra" do
      extra = extra_fixture()
      assert {:ok, %Extra{} = extra} = Content.update_extra(extra, @update_attrs)
      assert extra.name == "some updated name"
      assert extra.price == 456.7
      assert extra.property_id == 43
    end

    test "update_extra/2 with invalid data returns error changeset" do
      extra = extra_fixture()
      assert {:error, %Ecto.Changeset{}} = Content.update_extra(extra, @invalid_attrs)
      assert extra == Content.get_extra!(extra.id)
    end

    test "delete_extra/1 deletes the extra" do
      extra = extra_fixture()
      assert {:ok, %Extra{}} = Content.delete_extra(extra)
      assert_raise Ecto.NoResultsError, fn -> Content.get_extra!(extra.id) end
    end

    test "change_extra/1 returns a extra changeset" do
      extra = extra_fixture()
      assert %Ecto.Changeset{} = Content.change_extra(extra)
    end
  end
end
