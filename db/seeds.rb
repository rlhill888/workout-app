# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'seeding...'
# user= User.create(
#     first_name: '', 
#     last_name: '', 
#     user_name: '', 
#     email: '', 
#     form_questions_answered: , 
#     watched_tutorial: , 
#     goal_type: '', 
#     age: , 
#     weight: , 
#     height: , 
#     bmi: , 
#     bmr: ,
#      initial_form_activity_level: ,
# password_digest: '')

user1= User.create(
    first_name: 'r', 
    last_name: 'l', 
    user_name: 'howdy', 
    email: 'bleh@yahoo.com', 
    form_questions_answered: false, 
    watched_tutorial: false, 
    goal_type: 'gain weight', 
    age: 20, 
    weight: 20, 
    height: 5, 
    bmi: 32, 
    bmr: 45,
    initial_form_activity_level: false,
    password: 'dapassword',
    profile_pic: 'stuff'
    )


#/////////////////// workouts ////////////////////////


workout1= Workout.create(
    name: '',
    description: '',
    gif: '',
    video_link: '',
    workout_type: '',
    target_muscles: ''
)

workout1= Workout.create(
    name: 'test workout',
    description: 'test descrip',
    gif: 'wgtrhe',
    video_link: 'rethreh'
)

pullups= Workout.create(
    name: 'pull up',
    description: 'an exercise in which one hangs by the hands from a support (such as a horizontal bar) and pulls oneself up until the chin is level with the support',
    gif: 'https://www.verywellfit.com/thmb/XoEuoBdbIxdzOGHzyu-9zrKjQT4=/3000x2000/filters:fill(FFDB5D,1)/67-3120735-Pullups-GIF-b08bf524e15c4bb2a70c7fc43e1fe9c0.gif',
    video_link: 'https://www.youtube.com/watch?v=jFmCrA6fo78',
    workout_type: 'calisthenic',
    target_muscles: 'back, biceps, lats, deltoids, rhomboids, core'
)

chinups= Workout.create(
    name: 'chin up',
    description: 'an exercise in which one hangs by the hands from a support (such as a horizontal bar) and pulls oneself up until the chin is level with the support',
    gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/chinup-1457101678.gif?crop=1xw:1xh;center,top&resize=480:*',
    video_link: 'https://www.youtube.com/watch?v=brhRXlOhsAM',
    workout_type: 'calisthenic',
    target_muscles: 'back, biceps, lats, deltoids, rhomboids, core'
)

weightedpulldowns= Workout.create(
    name: 'weighted pulldowns',
    description: " Slowly pull the bar toward your chest, moving your elbows behind you. Keep your chest high, and pinch your shoulder blades together. Stop when your elbows can go back no farther. The bar won't necessarily reach your chest. Then slowly return to the starting position.",
    gif: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/lat-pulldown-with-pronated-grip.gif?fit=600%2C600&ssl=1',
    video_link: '',
    workout_type: '',
    target_muscles: ''
)




# routine1= Routine.create(
#     name: '',
#     description: '',
#     image: '',
#     users_using_routine: 0
# )

routine1= Routine.create(
    name: 'test',
    description: 'testy test',
    image: 'image',
    users_using_routine: 0
)




# user_routine_joint1= UserRoutine.create(
#     user_id: ,
#     routine_id: ,
#     currently_using: 

# )

user_routine_joint1= UserRoutine.create(
    user_id: user1.id,
    routine_id: routine1.id,
    currently_using: true
)




# workoutroutinejoint1= WorkoutRoutine.create(
#     workout_id: ,
#     routine_id: ,
#     reps: ,
#     sets: 
# )

workoutroutinejoint1= WorkoutRoutine.create(
    workout_id: workout1.id,
    routine_id: routine1.id,
    reps: 20,
    sets: 3
)


# meal1= Meal.create(
#     name: '',
#     description: '',
#     like: 0,
#     dislike: 0,
#     public: false
# )

meal1= Meal.create(
    name: 'testy',
    description: 'test test',
    like: 0,
    dislike: 0,
    public: false
)

# usermealjoin1= UserMeal.create(
#     meal_id: ,
#     user_id: 
# )

usermealjoin1= UserMeal.create(
    meal_id: meal1.id,
    user_id: user1.id
)
#////////////////////////////// Ingredients /////////////////////

puts 'seeding ingredients...'

# ingredient1= Ingredient.create(
#     macro_type: '',
#     name: '',
#     serving_size: ,
#     serving_measurement_type: '',
#     fat: ,
#     protein: ,
#     carb: ,
#     calories:   
# )

chickenwing= Ingredient.create(
    macro_type: 'protein',
    name: 'Chicken wing',
    serving_size: 3.5,
    serving_measurement_type: 'ounces',
    fat: 8.1,
    protein: 30.5,
    carb: 0,
    calories: 203
)

chickenbreast= Ingredient.create(
    macro_type: 'protein',
    name: 'chicken breast',
    serving_size: 3.5,
    serving_measurement_type: 'ounce',
    fat: 6.2,
    protein: 53.4,
    carb: 0,
    calories: 284
)

chickenLegs= Ingredient.create(
    macro_type: 'protein',
    name: 'chicken leg',
    serving_size: 3.5,
    serving_measurement_type: 'ounces',
    fat: 5.7,
    protein: 28.3,
    carb: 0,
    calories: 172
)

chickenthighs= Ingredient.create(
    macro_type: 'protein',
    name: 'chicken thigh',
    serving_size: 3.5,
    serving_measurement_type: 'ounces',
    fat: 10.9,
    protein: 26,
    carb: 0,
    calories: 209
)

groundbeef= Ingredient.create(
    macro_type: 'protein',
    name: 'groundbeef',
    serving_size: 28.3,
    serving_measurement_type: 'grams',
    fat: 5,
    protein: 7.8,
    carb: 0,
    calories: 77
)

steak= Ingredient.create(
    macro_type: 'protein',
    name: 'steak',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 17,
    protein: 26,
    carb: 0,
    calories: 259
)

groundturkey= Ingredient.create(
    macro_type: 'protein',
    name: 'ground turkey',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 2.7,
    protein: 32,
    carb: 0,
    calories: 151 
)

turkeywing= Ingredient.create(
    macro_type: 'protein',
    name: 'turkey wing',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 12.33,
    protein: 27.15,
    carb: 0,
    calories: 227
)

turkeyleg= Ingredient.create(
    macro_type: 'protein',
    name: 'turkey leg',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 6.72,
    protein: 19.54,
    carb: 0,
    calories: 144 
)

turkeybreast= Ingredient.create(
    macro_type: 'protein',
    name: 'turkey breast',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 2.1,
    protein: 30,
    carb: 0,
    calories: 147
)

lambchops= Ingredient.create(
    macro_type: 'protein',
    name: 'lamb chops',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 20.77,
    protein: 24.32,
    carb: 0,
    calories: 292
)

eggs= Ingredient.create(
    macro_type: 'protein',
    name: 'Egg',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 9.5,
    protein: 13,
    carb: 0.7,
    calories: 143  
)

salmon= Ingredient.create(
    macro_type: 'protein',
    name: 'salmon',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 12,
    protein: 22,
    carb: 0,
    calories: 206
)

talapia= Ingredient.create(
    macro_type: 'protein',
    name: 'talapia',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 2.7,
    protein: 26,
    carb: 0,
    calories: 128  
)

shrimp= Ingredient.create(
    macro_type: 'protein',
    name: 'shrimp',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.7,
    protein: 23,
    carb: 1.5,
    calories: 119
)

tuna= Ingredient.create(
    macro_type: 'protein',
    name: 'tuna',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 0.6,
    protein: 29,
    carb: 0,
    calories: 130
)

crabmeat= Ingredient.create(
    macro_type: 'protein',
    name: 'crab meat',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 0.7,
    protein: 18,
    carb: 0,
    calories: 83
)

porckchop= Ingredient.create(
    macro_type: 'protein',
    name: 'pork chop',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 14.57,
    protein: 27.91,
    carb: 0,
    calories: 250
)

porkbacon= Ingredient.create(
    macro_type: 'protein',
    name: 'pork bacon',
    serving_size: 25,
    serving_measurement_type: 'grams',
    fat: 11.26,
    protein: 2.9,
    carb: 0.16,
    calories: 114 
)

turkeybacon= Ingredient.create(
    macro_type: 'protein',
    name: 'turkey bacon',
    serving_size: 25,
    serving_measurement_type: 'grams',
    fat: 6.98,
    protein: 7.4,
    carb: 0.78,
    calories: 96
)






blackbeans= Ingredient.create(
    macro_type: 'carb',
    name: 'black beans',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 0.5,
    protein: 8.9,
    carb: 24,
    calories: 132
)

tofu= Ingredient.create(
    macro_type: 'protein',
    name: 'tofu',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 5.3,
    protein: 10,
    carb: 1.2,
    calories: 83  
)

potatobread= Ingredient.create(
    macro_type: 'carb',
    name: 'potato bread',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 3.29,
    protein: 7.64,
    carb: 50.61,
    calories: 266   
)

potato= Ingredient.create(
    macro_type: 'carb',
    name: 'potato',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 0.1,
    protein: 2.5,
    carb: 21,
    calories:  93 
)

brownrice= Ingredient.create(
    macro_type: 'carb',
    name: 'brown rice',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 0.8,
    protein: 2.3,
    carb: 23,
    calories:  109
)

whiterice= Ingredient.create(
    macro_type: 'carb',
    name: 'white rice',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 0.3,
    protein: 2.7,
    carb: 28,
    calories: 130
)

fettuccinepasta= Ingredient.create(
    macro_type: 'carb',
    name: 'fettuccine pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

sphegettipasta= Ingredient.create(
    macro_type: 'carb',
    name: 'sphegetti pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

bowtiepasta= Ingredient.create(
    macro_type: 'carb',
    name: 'bowtie pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

bucatinipassta= Ingredient.create(
    macro_type: 'carb',
    name: 'bucatini pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

gemellipasta= Ingredient.create(
    macro_type: 'carb',
    name: 'gemelli pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

lasagnapasta= Ingredient.create(
    macro_type: 'carb',
    name: 'lasagna pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

macaronipasta= Ingredient.create(
    macro_type: 'carb',
    name: 'macaroni pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)


orzopasta= Ingredient.create(
    macro_type: 'carb',
    name: 'orzo pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

pennepasta= Ingredient.create(
    macro_type: 'carb',
    name: 'penne pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

rigatonipasta= Ingredient.create(
    macro_type: 'carb',
    name: 'rigatoni pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

shellpasta= Ingredient.create(
    macro_type: 'carb',
    name: 'shell pasta',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 1.5,
    protein: 13,
    carb: 75,
    calories: 371
)

wheatbread= Ingredient.create(
    macro_type: 'carb',
    name: 'wheat bread',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 3.5,
    protein: 12,
    carb: 43,
    calories: 252
)

whitebread= Ingredient.create(
    macro_type: 'carb',
    name: 'white bread',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 3.29,
    protein: 7.64,
    carb: 50.61,
    calories: 266  
)

kidneybeans= Ingredient.create(
    macro_type: 'carb',
    name: 'kidney beans',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 0.5,
    protein: 8.7,
    carb: 23,
    calories:  127
)

almonds= Ingredient.create(
    macro_type: 'fat',
    name: 'Almond',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 50,
    protein: 21,
    carb: 22,
    calories: 579
)

cashew= Ingredient.create(
    macro_type: 'fat',
    name: 'cashew',
    serving_size: 25,
    serving_measurement_type: 'grams',
    fat: 10.96,
    protein: 4.56,
    carb: 7.55,
    calories:  138
)

hazelnut= Ingredient.create(
    macro_type: 'fat',
    name: 'hazelnut',
    serving_size: 25,
    serving_measurement_type: 'grams',
    fat: 15.29,
    protein: 3.42,
    carb: 4.25,
    calories: 157   
)

pecans= Ingredient.create(
    macro_type: 'fat',
    name: 'pecan nuts',
    serving_size: 25,
    serving_measurement_type: 'grams',
    fat: 18,
    protein: 2.29,
    carb: 3.46,
    calories:  173
)

pinenuts= Ingredient.create(
    macro_type: 'fat',
    name: 'pine nuts',
    serving_size: 25,
    serving_measurement_type: 'grams',
    fat: 17,
    protein: 3.42,
    carb: 3.27,
    calories:  168
)

honeybarbaquesauce= Ingredient.create(
    macro_type: 'carb',
    name: 'honey barbaque sauce',
    serving_size: 36,
    serving_measurement_type: 'ml',
    fat: 0,
    protein: 0,
    carb: 14,
    calories: 60
)

currysauce= Ingredient.create(
    macro_type: 'carb',
    name: 'curry sauce',
    serving_size: 25,
    serving_measurement_type: 'ml',
    fat: 0.4,
    protein: 0.3,
    carb: 10,
    calories: 47  
)

alfredosauce= Ingredient.create(
    macro_type: 'carb',
    name: 'alfredo sauce',
    serving_size: 62,
    serving_measurement_type: 'grams',
    fat: 25,
    protein: 7.1,
    carb: 3.9,
    calories: 269
)

sphgettisauce= Ingredient.create(
    macro_type: 'carb',
    name: 'sphegetti sauce',
    serving_size: 100,
    serving_measurement_type: 'ml',
    fat: 0.40,
    protein: 0.70,
    carb: 18,
    calories:  78
)

teriyakisauce= Ingredient.create(
    macro_type: 'carb',
    name: 'teriyaki sauce',
    serving_size: 100,
    serving_measurement_type: 'grams',
    fat: 0,
    protein: 5.9,
    carb: 15.9,
    calories:  83 
)
#/////////////////////////// workouts //////////////////////////////////




# mealingredientjoint1= MealIngredient.create(
#     ingredient_id: ,
#     meal_id: ,
# )

mealingredientjoint1= MealIngredient.create(
    ingredient_id: chickenwing.id,
    meal_id: meal1.id,
)


puts 'finished seeding'









