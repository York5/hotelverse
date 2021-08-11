defmodule HotelverseWeb.ExtraView do
  use HotelverseWeb, :view
  alias HotelverseWeb.ExtraView

  def render("index.json", %{extras: extras}) do
    %{data: render_many(extras, ExtraView, "extra.json")}
  end

  def render("show.json", %{extra: extra}) do
    %{data: render_one(extra, ExtraView, "extra.json")}
  end

  def render("extra.json", %{extra: extra}) do
    %{id: extra.id,
      property_id: extra.property_id,
      name: extra.name,
      price: extra.price}
  end
end
