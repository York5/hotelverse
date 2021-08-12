defmodule HotelverseWeb.PropertyView do
  use HotelverseWeb, :view
  alias HotelverseWeb.PropertyView

  def render("index.json", %{properties: properties}) do
    %{data: render_many(properties, PropertyView, "property.json")}
  end

  def render("show.json", %{property: property}) do
    %{data: render_one(property, PropertyView, "property.json")}
  end

  def render("property.json", %{property: property}) do
    %{
      id: property.id,
      title: property.title,
      max_adults: property.max_adults,
      max_kids: property.max_kids,
      price: property.price,
      rating: property.rating,
      location: property.location,
      features: property.features,
      description: property.description,
      images: property.images
    }
  end
end
