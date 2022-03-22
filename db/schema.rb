# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_22_201643) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.string "comment_text"
    t.integer "likes"
    t.integer "dislikes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "followings", force: :cascade do |t|
    t.string "name_of_user_being_followed"
    t.boolean "favorite"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_getting_followed_id"
    t.index ["user_getting_followed_id"], name: "index_followings_on_user_getting_followed_id"
    t.index ["user_id"], name: "index_followings_on_user_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "macro_type"
    t.string "name"
    t.float "serving_size"
    t.string "serving_measurement_type"
    t.float "fat"
    t.float "protein"
    t.float "carb"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "calories"
  end

  create_table "meal_ingredients", force: :cascade do |t|
    t.bigint "ingredient_id", null: false
    t.bigint "meal_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ingredient_id"], name: "index_meal_ingredients_on_ingredient_id"
    t.index ["meal_id"], name: "index_meal_ingredients_on_meal_id"
  end

  create_table "meals", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "like"
    t.integer "dislike"
    t.boolean "public"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title"
    t.string "image"
    t.string "description"
    t.integer "likes"
    t.integer "dislikes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "meal_post"
    t.boolean "routine_post"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "routines", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.integer "users_using_routine"
    t.string "created_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_meals", force: :cascade do |t|
    t.bigint "meal_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["meal_id"], name: "index_user_meals_on_meal_id"
    t.index ["user_id"], name: "index_user_meals_on_user_id"
  end

  create_table "user_routines", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "routine_id", null: false
    t.boolean "currently_using"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["routine_id"], name: "index_user_routines_on_routine_id"
    t.index ["user_id"], name: "index_user_routines_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "user_name"
    t.string "email"
    t.boolean "form_questions_answered"
    t.boolean "watched_tutorial"
    t.string "goal_type"
    t.integer "age"
    t.integer "weight"
    t.integer "height"
    t.integer "bmi"
    t.integer "bmr"
    t.string "initial_form_activity_level"
    t.string "profile_pic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  create_table "workout_routines", force: :cascade do |t|
    t.bigint "workout_id", null: false
    t.bigint "routine_id", null: false
    t.integer "reps"
    t.integer "sets"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["routine_id"], name: "index_workout_routines_on_routine_id"
    t.index ["workout_id"], name: "index_workout_routines_on_workout_id"
  end

  create_table "workouts", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "gif"
    t.string "video_link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "workout_type"
    t.string "target_muscles"
  end

  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "followings", "users"
  add_foreign_key "followings", "users", column: "user_getting_followed_id"
  add_foreign_key "meal_ingredients", "ingredients"
  add_foreign_key "meal_ingredients", "meals"
  add_foreign_key "posts", "users"
  add_foreign_key "user_meals", "meals"
  add_foreign_key "user_meals", "users"
  add_foreign_key "user_routines", "routines"
  add_foreign_key "user_routines", "users"
  add_foreign_key "workout_routines", "routines"
  add_foreign_key "workout_routines", "workouts"
end
