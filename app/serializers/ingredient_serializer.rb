class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :macro_type, :name, :serving_size, :serving_measurement_type, :fat, :protein, :carb
end
