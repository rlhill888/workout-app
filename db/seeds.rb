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
    first_name: 'Rodney', 
    last_name: 'Hill', 
    user_name: 'TestUser1', 
    email: 'rl@gmail.com', 
    goal_type: 'To gain muscle mass', 
    age: 20, 
    weight: 150, 
    height: 66, 
    bmi: 24, 
    bmr: 1100,
    initial_form_activity_level: 'Light exercise a few times a week',
    password: '123',
    profile_pic: ''
    )

    user2= User.create(
    first_name: 'Test User', 
    last_name: 'Test User', 
    user_name: 'TestUser2', 
    email: 'test@gmail.com', 
    goal_type: 'To gain muscle mass', 
    age: 30, 
    weight: 160, 
    height: 66, 
    bmi: 24, 
    bmr: 1100,
    initial_form_activity_level: 'Light exercise a few times a week',
    password: '123',
    profile_pic: ''
    )

#/////////////////// following ///////////////////////

following1= Following.create(
    name_of_user_being_followed: user2.user_name,
    favorite: false,
    user_id: user1.id,
    user_getting_followed_id: user2.id
)

#/////////////////////////////////////// routines /////////////////////////////////

# routine1= Routine.create(
#     name: '',
#     description: '',
#     image: '',
#     users_using_routine: 0
# )



#//////// to Tone Muscles and Gain muscle definition =>

back_and_biceps_tone_muscle= Routine.create(
    name: 'Back and Biceps',
    description: 'Back And Biceps Workout For toning muscle and building definition',
    image: 'https://onnitacademy.imgix.net/wp-content/uploads/2019/01/backopener.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

chest_and_tricep_tone_muscle= Routine.create(
    name: 'Chest and Triceps',
    description: 'Chest and Tricep Workout for toning muscle and building definition',
    image: 'https://fitnessvolt.com/wp-content/uploads/2022/02/chest-and-triceps-workout-750x422.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

legs_tone_muscle= Routine.create(
    name: 'Leg Day',
    description: 'Lag Day workout for toning muscle and building definition',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_0HwBSDnVzWrKTHPnFM8vMCb0RC_N2WZmg&usqp=CAU',
    users_using_routine: 0,
    default_workout4me_routine: true
)


#/////////////////////////////

#//////////////////////////// To Loose Overall Weight

legs_loose_overall_weight= Routine.create(
    name: 'Leg Day',
    description: 'Leg Day Workout for Loosing Overall Weight',
    image: 'https://images.squarespace-cdn.com/content/v1/594c5ab34f14bcca1a010c20/1610611255512-0LBIOET45MCZSLMTGAR5/ke17ZwdGBToddI8pDm48kIdwuL-YH8qdQNkAqEk86rtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyrlDB6o-m1QpI9POf53GOOdPhFP3XS315CDLRkhmFZV6m7nputAs4I1PhPGOKRgIc/10+Must-Do+Leg+Day+Exercises+For+Weight+Loss.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

chest_and_triceps_loose_overall_weight= Routine.create(
    name: 'Chest and Tricep',
    description: 'Chest and Tricep Workout for Loosing Overall Weight',
    image: 'https://i.ytimg.com/vi/dHBXHNwzry8/maxresdefault.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

back_and_biceps_loose_overall_weight= Routine.create(
    name: 'Back and Biceps',
    description: 'Back and Biceps workout for loosing overall weight',
    image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/olima-back.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

#//////////////////

#/////////////////  To Gain Overall Weight

leg_day_gain_overall_weight= Routine.create(
    name: 'Leg day',
    description: 'Leg workout for gaining over all body weight',
    image: 'https://images.squarespace-cdn.com/content/v1/594c5ab34f14bcca1a010c20/1608908836519-B9R39IW8XHP6O9U1IUWU/ke17ZwdGBToddI8pDm48kIdwuL-YH8qdQNkAqEk86rtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyrlDB6o-m1QpI9POf53GOOdPhFP3XS315CDLRkhmFZV6m7nputAs4I1PhPGOKRgIc/4+Tips+To+Build+Big+Legs+Without+Squats.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

chest_and_triceps_gain_overall_weight= Routine.create(
    name: 'Chest and Triceps',
    description: 'Chest and tricep workout for gaining overall body weight',
    image: 'https://www.bodybuilding.com/images/aaron-marinos-tailored-chest-triceps-workout-header-960x540.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

back_and_biceps_gain_overall_weight= Routine.create(
    name: 'Back and Biceps',
    description: 'Back and bicep workout for gaining overall body weight',
    image: 'https://fitnessvolt.com/wp-content/uploads/2022/02/Back-and-Biceps-Workout-750x422.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

#/////////////

#////////// to gain muscle mass

leg_day_gain_muscle_mass= Routine.create(
    name: 'Leg day',
    description: 'Leg day workout for gaining muscle mass',
    image: 'https://fitnessvolt.com/wp-content/uploads/2021/10/Best-Leg-Day-Workouts.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

chest_and_triceps_gain_muscle_mass= Routine.create(
    name: 'Chest and Triceps',
    description: 'Chest and Tricep workout for gaining muscle mass',
    image: 'http://www.fitnessdayone.com/wp-content/uploads/2021/10/chest-and-triceps-or-chest-and-biceps.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)

back_and_biceps_gain_muscle_mass= Routine.create(
    name: 'Back and Biceps',
    description: 'Back and biceps workout for gaining overall muscle mass',
    image: 'https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2010/03/Back_Exercises.jpg',
    users_using_routine: 0,
    default_workout4me_routine: true
)


#////////////////





# /////// routine workout Tables

# workoutroutinejoint1= WorkoutRoutine.create(
#     workout_id: ,
#     routine_id: ,
#     reps: ,
#     sets: 
# )

#/////// routine workout Tables

# workoutroutinejoint1= WorkoutRoutine.create(
#     workout_id: ,
#     routine_id: ,
#     reps: ,
#     sets: 
# )






#/////////////////// workouts ////////////////////////
puts 'seeding workouts...'


pullups= Workout.create(
    name: 'pull up',
    description: 'an exercise in which one hangs by the hands from a support (such as a horizontal bar) and pulls oneself up until the chin is level with the support',
    gif: 'https://www.verywellfit.com/thmb/XoEuoBdbIxdzOGHzyu-9zrKjQT4=/3000x2000/filters:fill(FFDB5D,1)/67-3120735-Pullups-GIF-b08bf524e15c4bb2a70c7fc43e1fe9c0.gif',
    video_link: 'jFmCrA6fo78',
    workout_tag: 'calisthenic',
    target_muscles: 'back, biceps, lats, deltoids, rhomboids, core'
)

chinups= Workout.create(
    name: 'chin up',
    description: 'an exercise in which one hangs by the hands from a support (such as a horizontal bar) and pulls oneself up until the chin is level with the support',
    gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/chinup-1457101678.gif?crop=1xw:1xh;center,top&resize=480:*',
    video_link: 'brhRXlOhsAM',
    workout_tag: 'calisthenic',
    target_muscles: 'back, biceps, lats, deltoids, rhomboids, core'
)

weightedpulldowns= Workout.create(
    name: 'weighted pulldowns',
    description: " Slowly pull the bar toward your chest, moving your elbows behind you. Keep your chest high, and pinch your shoulder blades together. Stop when your elbows can go back no farther. The bar won't necessarily reach your chest. Then slowly return to the starting position.",
    gif: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/lat-pulldown-with-pronated-grip.gif?fit=600%2C600&ssl=1',
    video_link: 'CAwf7n6Luuc',
    workout_tag: 'weight lifiting',
    target_muscles: 'latissimus dorsi, pectoralis major, rotator cuff, and biceps brachii'
)

seatedweightedrow= Workout.create(
    name: 'seated weighted rows',
    description: 'The seated row is an exercise you can do with a weight machine to work the muscles in your upper back. Specifically, the seated row targets the muscles in your upper back and also the latissimus dorsi — a muscle on the outer side of the chest wall.',
    gif: 'https://www.verywellfit.com/thmb/6dHuq9Us1ek7jq8TazJ-FHpSFLI=/735x0/51-3498605-Seated-Cable-Row-GIF-7b65c9e27d14457584be75440b0786d5.gif',
    video_link: 'A77hAjcpN1s',
    workout_tag: 'weight lifting',
    target_muscles: 'latissimus dorsi (middle back), rhomboids (between shoulder blades), trapezius (neck, shoulders, and upper back), biceps brachii (front of upper arm)'
)

dumbellcurls= Workout.create(
    name: 'dumbell curls',
    description: 'dumbell curls isolate the body movement of elbow flexion, or rather bending of the arm at the elbow. It targets the specific muscles located at the front of your arms called; biceps brachii, brachialis and brachioradialis',
    gif: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bicep-curl.gif?resize=480:*',
    video_link: 'ykJmrZ5v0Oo',
    workout_tag: 'weight lifting',
    target_muscles: 'biceps'
)

barbellcurl= Workout.create(
    name: 'barbell curl',
    description: 'What Is a Barbell Curl? A barbell curl is a variation of the biceps curl that uses a weighted barbell. Perform barbell curls by grabbing a barbell with a shoulder-width supinated grip (palms facing towards your body). Hinge your elbows, and lift the barbell toward your chest.',
    gif: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/12/Barbell-biceps-curl.gif?fit=600%2C600&ssl=1',
    video_link: 'ykJmrZ5v0Oo',
    workout_tag: 'weight lifting',
    target_muscles: 'biceps'
)

barbellbentrow= Workout.create(
    name: 'barbellbentrow',
    description: '
    Lift the bar from the rack, bend forward at the hips, and keep the back straight with a slight bend in the knees. Lower the bar towards the floor until the elbows are completely straight, and keep the back flat as the bar is pulled towards the belly button. Then slowly lower the bar to the starting position and repeat.',
    gif: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bent-over-row.gif?resize=480:*',
    video_link: 'kBWAon7ItDw',
    workout_tag: 'weight lifitng',
    target_muscles: 'Lats, Rhomboids, Middle/Lower Traps, Posterior Delt'
)

tbarrows= Workout.create(
    name: 't bar rows',
    description: 'The T-bar row works your upper, middle and lower back muscles. Considered one of the "row" exercises, the T-bar row is part of a group of moves that rely on the pulling movement to train the back muscles',
    gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/10/t-bar-row-muscles.gif',
    video_link: 'SbZycT7Eq58',
    workout_tag: 'weight lifitng',
    target_muscles: ''
)

pushup= Workout.create(
    name: 'pushup',
    description: 'a conditioning exercise performed in a prone position by raising and lowering the body with the straightening and bending of the arms while keeping the back straight and supporting the body on the hands and toes',
    gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pushup-1462808858.gif',
    video_link: 'IODxDxX7oi4',
    workout_tag: 'calisthenic',
    target_muscles: 'chest, triceps, traps'
)

    inclinepushup= Workout.create(
    name: 'incline pushup',
    description: 'An incline pushup is an elevated form of a traditional pushup. Your upper body is elevated with an exercise box or other piece of equipment. You may find incline pushups to be a step up from your normal routine',
    gif: 'https://i0.wp.com/thumbs.gfycat.com/IdenticalAggressiveChihuahua-size_restricted.gif?w=1155&h=840',
    video_link: 'cfns5VDVVvk',
    workout_tag: 'calisthenic',
    target_muscles: 'chest, tricep, traps'
)

declinepushup= Workout.create(
    name: 'decline pushup',
    description: "The decline pushup is a variation of the basic pushup. It's done with your feet on an elevated surface, which puts your body at a downward angle. When you do pushups in this position, you work more of your upper pectoral muscles and front shoulders",
    gif: 'https://www.verywellfit.com/thmb/yCy1tiXw7vvEwmRRw_cj4w2PIjc=/3000x2000/filters:fill(FFDB5D,1)/91-3120037--Decline-PushupsGIF-eb1210abbdb04bbf94a05aafb644b24f.gif',
    video_link: '5QFjmotLfW4',
    workout_tag: 'calisthenic',
    target_muscles: 'chest, triceps, traps'
)

benchpress= Workout.create(
    name: 'bench press',
    description: 'a lift or exercise in which a weight is raised by extending the arms upward while lying on a bench',
    gif: 'https://images.squarespace-cdn.com/content/v1/5160bb45e4b0e13a258812c8/1465147008413-I4Q845TPURO08GTRQC0B/image-asset.gif',
    video_link: 'lj_pzdeuHbw',
    workout_tag: 'weight lifting',
    target_muscles: 'triceps, back, chest, traps'
)

dips= Workout.create(
    name: 'dips',
    description: 'Dips are a bodyweight exercise that develops the triceps and other upper-body muscles. The exercise begins when you hold on to parallel bars with your arms straight. You then bend your elbows until your upper arms are parallel to the ground before driving up to the starting position',
    gif: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/how-to-do-dip-exercises.gif?crop=0.6671974522292994xw:1xh;center,top&resize=480:*',
    video_link: '2z8JmcrW-As',
    workout_tag: 'calisthenic',
    target_muscles: 'chest, triceps, back'
)

inclinebenchpress= Workout.create(
    name: 'incline bench press',
    description: "The purpose of the incline press is to focus more of the work on the upper pecs. The main benefit in performing incline presses is to develop the upper portion of the pectoral muscles. When the bench is set at an incline (15 to 30 degrees), you activate your shoulders more since it's comparable to a shoulder press.",
    gif: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Incline-Bench-Press.gif?fit=600%2C600&ssl=1',
    video_link: 'SrqOu55lrYU',
    workout_tag: 'weight lifting',
    target_muscles: 'chest, triceps, back, traps, shoulders'
)

declinebenchpress= Workout.create(
    name: 'decline bench press',
    description: "It's a variation of the flat bench press, a popular chest workout. In a decline bench press, the bench is set to 15 to 30 degrees on a decline. This angle places your upper body on a downward slope, which activates the lower pectoral muscles as you push weights away from your body.",
    gif: 'https://assets.myworkouts.io/exercises-media/L7gXdDooRtJN94LYE/decline_barbell_bench_press_male_v10_gif_capoff.gif',
    video_link: 'OR6WM5Z2Hqs',
    workout_tag: 'weight lifting',
    target_muscles: 'chest, triceps, back, traps, shoulders'
)

dumbellchestpress= Workout.create(
    name: 'dumbell chest press',
    description: "Lift the dumbbells to chest height with your palms facing forwards. Breathe out and push the dumbbells up until your arms are fully extended, using your pecs to power the movement. Don't let the dumbbells touch. Pause for a second at the top, then slowly bring them back down as you inhale",
    gif: 'https://thumbs.gfycat.com/FemaleCleanAfricanporcupine-size_restricted.gif',
    video_link: '5n9TlaoRD58',
    workout_tag: 'weight lifting',
    target_muscles: 'chest, triceps, traps, shoulders'
)

standingdumbellpress= Workout.create(
    name: 'standing dumbell press',
    description: 'Begin with the dumbbells at your sides, palms forward, and feet shoulder-width apart. Slightly bend the knees and engage your core to lift your arms upward bringing the dumbbells to meet at chest height. Keep the movement slow and steady as you return to the starting position, dumbbells at your side. That is one rep.',
    gif: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-overhead-press.gif?resize=480:*',
    video_link: 'OOe_HrNnQWw',
    workout_tag: 'weight lifting',
    target_muscles: 'chest, triceps, back, shoulders'
)

dumbellflys= Workout.create(
    name: 'dumbell flys',
    description: 'The dumbbell fly, also known as the dumbbell chest fly, is an upper body exercise that works muscle groups in your chest, shoulders, and arms. A dumbbell fly is performed by lying on a flat bench and lowering a pair of dumbbells to your sides while keeping relatively straight arms with slightly bent elbows.',
    gif: 'https://thumbs.gfycat.com/HarmoniousRichHorse-size_restricted.gif',
    video_link: 'ENKPHhQVi4',
    workout_tag: 'weight lifting',
    target_muscles: 'chest'
)

inclinedumbellflys= Workout.create(
    name: 'incline dumbell flys',
    description: "The incline dumbbell fly is an isolation exercise that targets the upper chest muscles, activating the hard-to-develop upper pecs in a way that can't be achieved by using a flat bench.",
    gif: 'https://global-uploads.webflow.com/5d1d0d3f53ced35a29dbe169/5e30e70e6a53c166f8e34724_incline-dumbbell-fly-exercise-anabolic-aliens.gif',
    video_link: 'bDaIL_zKbGs',
    workout_tag: 'weight lifting',
    target_muscles: 'chest'
)

dumbellshrugs= Workout.create(
    name: 'dumbell shrugs',
    description: 'Dumbbell shrugs, also known as dumbbell shoulder shrugs, are an isolation exercise targeting your upper trapezius muscles. Perform dumbbell shrugs by grabbing a pair of dumbbells and holding them by your sides with a neutral grip. Keep your arms straight as you lift your shoulders toward your ears.',
    gif: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Shrug.gif?fit=600%2C600&ssl=1',
    video_link: 'JEnhFC1AtHw',
    workout_tag: 'weight lifitng',
    target_muscles: 'shoulders, traps'
)

squat= Workout.create(
    name: 'squat',
    description: 'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up.',
    gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/bodyweightsquat-1457041691.gif',
    video_link: 'U3HlEF_E9fo',
    workout_tag: 'calisthenic',
    target_muscles: 'quads, glutes'
)

weightedsquats= Workout.create(
    name: 'weighted squats',
    description: 'Just like a regular squat, the weighted squat works your quads, glutes and hamstrings – it helps you to build strength and explosive power in your legs. By adding weights – in the form of dumbbells – you are taking your squat to the next level and giving yourself a bigger challenge.',
    gif: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/barbell-squat.gif?resize=480:*',
    video_link: '1oed-UmAxFs',
    workout_tag: 'weight lifitng',
    target_muscles: 'quads glutes'
)

lunges= Workout.create(
    name: 'lunges',
    description: "t involves stepping forward, lowering your body toward the ground, and returning back to the starting position. It's the version most people will refer to when they say they're “doing lunges.” In the beginning of the exercise, your leg muscles have to control the impact of your foot's landing.",
    gif: 'https://www.verywellfit.com/thmb/h23F-vg69THfIW4a5FC8DmukRo8=/1000x1000/smart/filters:no_upscale()/walking-lunge-5c4212bec9e77c000177ade8.gif',
    video_link: 'QOVaHwm-Q6U',
    workout_tag: 'calisthenic',
    target_muscles: 'glutes, hamstrings, quads'
)

weightedlunge= Workout.create(
    name: 'weighted lunge',
    description: 'Stand with feet hip-width apart, holding a weight in each hand. Keeping your weight on your left leg, step right foot back behind on a diagonal until you end in a lunge. Drive back to starting position by pushing through your left heel. Repeat with the opposite leg.',
    gif: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbbell-lunge.gif?crop=0.563xw:1.00xh;0.269xw,0&resize=320:*',
    video_link: 'D7KaRcUTQeE',
    workout_tag: 'weight lifting',
    target_muscles: 'quads, glutes, hamstrings'
)

deadlift= Workout.create(
    name: 'dead lifts',
    description: 'The deadlift is a movement in which your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor. Your back is flat throughout the movement. Some benefits of performing deadlifts include strengthening and gaining more definition in your upper and lower back, glutes, and hamstrings.',
    gif: 'https://www.verywellfit.com/thmb/hEEXw2oJw3HfhyLrZmyf3HGqPJU=/735x0/21-3498608-Deadlift-GIF-b76ce11dc6ef403fa0bf19f252e4b39e.gif',
    video_link: 'ytGaGIn3SjE',
    workout_tag: 'weight lifting',
    target_muscles: 'lower back'
)

legpress= Workout.create(
    name: 'leg press',
    description: 'The leg press is a compound weight training exercise in which the individual pushes a weight or resistance away from them using their legs. The term leg press machine refers to the apparatus used to perform this exercise.',
    gif: 'https://www.verywellfit.com/thmb/xpCB8K_4_Xjl8N_UA7wSZBwbLus=/768x432/smart/filters:no_upscale()/50-3498610-Leg-Press-GIF-7e720a89577d456db0bcb5dab2bd5d5f.gif',
    video_link: 'CHPHn-OnTqE',
    workout_tag: 'weight lifting',
    target_muscles: 'glutes, quads'
)

legextension= Workout.create(
    name: 'leg extension',
    description: 'The leg extension is an isolated exercise targeting one specific muscle group, the quadriceps. It should not be considered as a total leg workout, such as the squat or deadlift. The exercise consists of bending the leg at the knee and extending the legs, then lowering them back to the original position.',
    gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif9-29-tnoverride-1515519049.gif',
    video_link: 'ljO4jkwv8wQ',
    workout_tag: 'weight lifting',
    target_muscles: 'quadraceps'
)

situps= Workout.create(
    name: 'situps',
    description: 'a conditioning exercise performed from a supine position by raising the torso to a sitting position and returning to the original position without using the arms or lifting the feet.',
    gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/08/situpeccentric-1472151762.gif',
    video_link: '-WSon5E798w',
    workout_tag: 'calisthenic',
    target_muscles: 'abs'
)

plank= Workout.create(
    name: 'plank',
    description: 'The plank is a bodyweight exercise which involves holding the trunk part of your body in a straight line off the ground. The static exercise engages multiple muscle groups at the same time which makes it extremely effective at strengthening your core, whilst also working the shoulders, arms and glutes.',
    gif: 'https://media.self.com/photos/57fea6654b7c91b2239d76eb/master/w_1600%2Cc_limit/FOREARM_PLANK_ROCKS.gif',
    video_link: 'ASdvN_XEl_c',
    workout_tag: 'calisthenic',
    target_muscles: 'abs'
)

russiantwist= Workout.create(
    name: 'russian twist',
    description: 'The Russian twist is a simple abdominal exercise for working the core, shoulders, and hips. It is typically performed in repetitive sets and tones the core muscles via a twisting motion focused around the abdomen.',
    gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif-friday-weighted-russian-twist-slider-thumbnail-override-1515520081.gif?crop=1xw:0.786xh;center,top&resize=1200:*',
    video_link: 'nhFynCkYtD4',
    workout_tag: 'calisthenic',
    target_muscles: 'abs'
)

crunches= Workout.create(
    name: 'crunches',
    description: 'The crunch is a classic core exercise. It specifically trains your abdominal muscles, which are part of your core. Your core consists not only of your abs. It also includes your oblique muscles on the sides of your trunk, as well as the muscles in your pelvis, lower back, and hips.',
    gif: 'https://www.verywellfit.com/thmb/U5UnrNk7mnHdTfcZdPJyMDNGzbM=/1500x844/smart/filters:no_upscale()/Verywell-1-2696610-AbdominalCrunch01-1853copy-599463c4d088c00013e2cad9.gif',
    video_link: '5ER5Of4MOPI',
    workout_tag: 'calisthenic',
    target_muscles: 'abs'
)

bicyclecrunches= Workout.create(
    name: 'bicycle crunches',
    description: 'What Is a Bicycle Crunch? The bicycle crunch is a bodyweight exercise that activates your core muscles. Practice bicycle crunches by lying flat with your lower back pressing into an exercise mat. With your hands behind your head, lift your shoulder blades off the mat.',
    gif: 'https://media.self.com/photos/57e054cf1051c2bb51c0255e/master/w_1600%2Cc_limit/BICYCLES.gif',
    video_link: 'kUY4WA71e0Q',
    workout_tag: 'calisthenic',
    target_muscles: 'abs'
)

legraises= Workout.create(
    name: 'leg raises',
    description: "Lie on your back, legs straight and together. 2. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. 3. Slowly lower your legs back down till they're just above the floor.",
    gif: 'https://www.byrdie.com/thmb/P71TM4ioRZzONCRMaHvrQrfzONE=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/leglifts-1584ae42d00d499fbd5d80a799563069.gif',
    video_link: 'JB2oyawG9KI',
    workout_tag: 'calisthenic',
    target_muscles: 'abs'
)

mountainclimbers= Workout.create(
    name: 'mountain climbers',
    description: "That's the concept behind mountain climbers. Performed from a plank position, you'll alternate bringing one knee to your chest, then back out again, speeding up each time until you're jogging against the floor. While the move sounds simple, mountain climbers exercise almost the entire body and raise your heart rate",
    gif: 'https://media1.popsugar-assets.com/files/thumbor/Iu8waoj6rmL6c7B8gZUdS1ZIa3I/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/08/791/n/1922729/c4943793a2ba2dd5_SlowerClimbers.gif',
    video_link: 'cnyTQDSE884',
    workout_tag: 'calisthenic',
    target_muscles: 'abs'
)

jogging= Workout.create(
    name: 'jogging',
    description: 'Jogging is a form of trotting or jogging at a slow or leisurely pace. The main intention is to increase physical fitness with less stress on the body than from faster jogging but more than walking, or to maintain a steady speed for longer periods of time',
    gif: 'https://c.tenor.com/8y_rhrPTw50AAAAC/jogging.gif',
    video_link: 'fQ7ewHFw_I8',
    workout_tag: 'cardio',
    target_muscles: '-'
)

jumprope= Workout.create(
    name: 'jump rope',
    description: "What is jumping rope? Jumping rope is a form of exercise that involves swinging a rope around your body and jumping over it as it passes under your feet. It's a form of cardiovascular training since the constant movement elevates your heart rate. The basic concept of jumping rope is simple",
    gif: 'https://coveteur.com/media-library/image.gif?id=25368508&width=744&quality=80',
    video_link: 'FJmRQ5iTXKE',
    workout_tag: 'cardio',
    target_muscles: '-'
)

jumpingjacks= Workout.create(
    name: 'jumping jacks',
    description: "a conditioning exercise performed from a standing position by jumping to a position with legs spread and arms raised and then to the original position.",
    gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/jumpingjack-1457045563.gif',
    video_link: 'UpH7rm0cYbM',
    workout_tag: 'cardio',
    target_muscles: '-'
)


burpee= Workout.create(
    name: 'burpee',
    description: "A burpee is essentially a two-part exercise: a pushup followed by a leap in the air. Doing several burpees in a row can be tiring, but this versatile exercise may be worth the payoff, especially if you're looking for a way to build strength and endurance, while burning calories, and boosting your cardio fitness.",
    gif: 'http://s3.amazonaws.com/photography.prod.demandstudios.com/977bf1e0-fb9f-439a-b8ad-b4eb65cfdfc5.gif',
    video_link: 'qLBImHhCXSw',
    workout_tag: 'cardio',
    target_muscles: 'full body'
)

cycling= Workout.create(
    name: 'cycling',
    description: "Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as cyclists, bicyclists, or bikers",
    gif: 'https://d2p6e6u75xmxt8.cloudfront.net/2/2016/02/mShsGD9.gif',
    video_link: 'x4WHeVf5DN4',
    workout_tag: 'cardio',
    target_muscles: '-'
)

hamstringcurl= Workout.create(
   name: 'Hamstring Curl',
   description: 'The hamstring curl, also called a leg curl, is an exercise that strengthens the hamstrings. It involves bending your knees and moving your heels toward your butt while the rest of your body stays still. Typically, the exercise is done on a leg curl machine.',
   gif: 'https://www.verywellfit.com/thmb/deKoSPO2qE_sNWGEAM14w4al7iY=/3000x2000/filters:fill(FFDB5D,1)/45-3498304-Leg-Curls-GIF-aa13a58de5a744719617eb7155357877.gif',
   video_link: 'F488k67BTNo',
   workout_tag: 'weight lifting',
   target_muscles: 'hamstring'
)
calfraise= Workout.create(
   name: 'Calf Raise',
   description: 'Calf raises are a method of exercising the gastrocnemius, tibialis posterior, peroneals and soleus muscles of the lower leg. The movement performed is plantar flexion, a.k.a. ankle extension.',
   gif: 'https://qph.fs.quoracdn.net/main-qimg-b298f115722e37446250d8eac5a656d2',
   video_link: 'gwLzBJYoWlI',
   workout_tag: 'Calisthenic',
   target_muscles: 'calfs'
)
wallsit= Workout.create(
   name: 'Wall Sit',
   description: 'A wall sit is an isometric exercise involving muscle contraction while in a static position. Perform wall sits by standing in front of a wall with your feet shoulder-width apart.',
   gif: 'https://media1.giphy.com/media/NaKGjtR1bMgVTH5Rds/giphy.gif',
   video_link: 'y-wV4Venusw',
   workout_tag: 'Calisthenic',
   target_muscles: 'abs, quads'
)
goodmorning= Workout.create(
   name: 'Good Mornings',
   description: 'The good morning is a weightlifting exercise that activates muscle groups across your whole body. Perform good morning exercises by standing with your feet shoulder-width apart. Unrack a weighted barbell and rest it on your upper back using a similar bar position as a back squat.',
   gif: 'https://www.verywellfit.com/thmb/EmOFyUUS6EoQSg2YeOm5mKC64f4=/3000x2000/filters:fill(FFDB5D,1)/20-3498255-Goodmorning-Exercise-GIF-dcf63c8509134f3bbf5c183383d877a5.gif',
   video_link: 'vKPGe8zb2S4',
   workout_tag: 'weight lifting',
   target_muscles: 'full body'
)
frontsquat= Workout.create(
   name: 'Front Squat',
   description: 'A front squat is a squat that is performed while holding a barbell except, unlike with a back squat, the bar is held in front of the chest. This places more force on the upper body while still working the glutes, hamstrings, and hips.',
   gif: 'https://images.squarespace-cdn.com/content/v1/5160bb45e4b0e13a258812c8/1460151297376-T3I7C5MUPGROOND087JQ/image-asset.gif',
   video_link: 'VfBOBhwXbro',
   workout_tag: 'weight lifting',
   target_muscles: ''
)
backsquat= Workout.create(
   name: 'Back Squat',
   description: 'Back squats target the posterior chain — or the back of your body — including the lower back, glutes, and hamstrings. The quads and core are also engaged. Front squats zone in on the anterior chain — or the front of your body — to hit the quads and upper back more heavily.',
   gif: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/11/squat.gif?fit=600%2C600&ssl=1',
   video_link: 'k_HVVrGXBTs',
   workout_tag: 'weight lifting',
   target_muscles: 'quads, glutes'
)
squatjump= Workout.create(
   name: 'Squat Jump',
   description: 'A Squat Jump is a full-body exercise that primarily strengthens the legs and core. The squat movement focuses on developing the quadriceps and calf muscles while the jump adds a heart rate-boosting cardio element to your strength training.',
   gif: 'https://c.tenor.com/KTAavalOAWQAAAAC/squat-jumps.gif',
   video_link: 'YGGq0AE5Uyc',
   workout_tag: 'Calisthenic',
   target_muscles: 'quads, glutes, calfs'
)
splitsquat= Workout.create(
   name: 'Split Squat',
   description: 'The split squat is a compound leg exercise that works multiple muscles in your lower body, including your hip flexors, hamstrings, quadriceps, and glutes. With proper form, split squats can increase leg strength and enhance flexibility.',
   gif: 'https://www.verywellfit.com/thmb/nL6LoLvwr1t6676Q9vsDxcYxmt0=/3000x2000/filters:fill(FFDB5D,1)/60-4589307-Bulgarian-Split-Squat-GIF-e8bd4aa226ed4ddf978aa1a86b46359e.gif',
   video_link: '9Sk__yZ2DQY',
   workout_tag: 'weight lifting',
   target_muscles: 'quads, glutes'
)
gobletsquat= Workout.create(
   name: 'Goblet Squat',
   description: 'The goblet squat is a lower body exercise in which you hold a dumbbell or kettlebell with both hands in front of your chest. Then, you squat while holding the dumbbell. Your elbows should come between your knees.',
   gif: 'https://www.verywellfit.com/thmb/JwmAIAsDqLj-OE6UBxzLMqT7cXg=/2000x2000/smart/filters:no_upscale()/8-4589695-Goblet-Squat-GIF-d9506f25c57749beaf222853cc526ce3.gif',
   video_link: 'q4CSeayuKbo',
   workout_tag: 'weight lifting',
   target_muscles: 'quads, glutes'
)





puts 'finished workouts'


#///////////// tone muscle workout joint tables

workoutroutinejointld1= WorkoutRoutine.create(
    workout_id: burpee.id,
    routine_id: legs_tone_muscle.id,
    reps: 12,
    sets: 3
)
workoutroutinejointld2= WorkoutRoutine.create(
    workout_id: weightedlunge.id,
    routine_id: legs_tone_muscle.id,
    reps: 12,
    sets: 4
)
workoutroutinejointld3= WorkoutRoutine.create(
    workout_id: weightedsquats.id,
    routine_id: legs_tone_muscle.id,
    reps: 12,
    sets: 4
)
workoutroutinejointld4= WorkoutRoutine.create(
    workout_id: deadlift.id,
    routine_id: legs_tone_muscle.id,
    reps: 12,
    sets: 4
)

workoutroutinejointld5= WorkoutRoutine.create(
    workout_id: hamstringcurl.id,
    routine_id: legs_tone_muscle.id,
    reps: 12,
    sets: 4
)

workoutroutinejointld6= WorkoutRoutine.create(
    workout_id: calfraise.id,
    routine_id: legs_tone_muscle.id,
    reps: 40,
    sets: 3
)

workoutroutinejointtmbb1= WorkoutRoutine.create(
    workout_id: jogging.id,
    routine_id: back_and_biceps_tone_muscle.id,
)

workoutroutinejointtmbb2= WorkoutRoutine.create(
    workout_id: barbellcurl.id,
    routine_id: back_and_biceps_tone_muscle.id,
    reps: 15,
    sets: 4
)
workoutroutinejointtmbb3= WorkoutRoutine.create(
    workout_id: pullups.id,
    routine_id: back_and_biceps_tone_muscle.id,
    reps: 12,
    sets: 4
)
workoutroutinejointtmbb4= WorkoutRoutine.create(
    workout_id: weightedpulldowns.id,
    routine_id: back_and_biceps_tone_muscle.id,
    reps: 10,
    sets: 4
)
workoutroutinejointtmbb5= WorkoutRoutine.create(
    workout_id: barbellbentrow.id,
    routine_id: back_and_biceps_tone_muscle.id,
    reps: 12,
    sets: 4
)
workoutroutinejointtmbb6= WorkoutRoutine.create(
    workout_id: seatedweightedrow.id,
    routine_id: back_and_biceps_tone_muscle.id,
    reps: 12,
    sets: 4
)

workoutroutinejointcttm1= WorkoutRoutine.create(
    workout_id: jumprope.id,
    routine_id: chest_and_tricep_tone_muscle.id,
    reps: nil,
    sets: nil
)

workoutroutinejointctttm2= WorkoutRoutine.create(
    workout_id: benchpress.id,
    routine_id: chest_and_tricep_tone_muscle.id,
    reps: 12,
    sets: 4
)

workoutroutinejointccttm3= WorkoutRoutine.create(
    workout_id: dumbellchestpress.id,
    routine_id: chest_and_tricep_tone_muscle.id,
    reps: 12,
    sets: 4
)

workoutroutinejointcctm4= WorkoutRoutine.create(
    workout_id: dips.id,
    routine_id: chest_and_tricep_tone_muscle.id,
    reps: 12,
    sets: 4
)

workoutroutinejointctttm5= WorkoutRoutine.create(
    workout_id: inclinebenchpress.id,
    routine_id: chest_and_tricep_tone_muscle.id,
    reps: 10,
    sets: 3
)
workoutroutinejointctttm6= WorkoutRoutine.create(
    workout_id: dumbellchestpress.id,
    routine_id: chest_and_tricep_tone_muscle.id,
    reps: 12,
    sets: 3
)

#//////////

#////////////// Gain overall Weight

workoutroutinejointgowld1= WorkoutRoutine.create(
    workout_id: weightedsquats.id,
    routine_id: leg_day_gain_overall_weight.id,
    reps: 8,
    sets: 3
)

workoutroutinejointgowld2= WorkoutRoutine.create(
    workout_id: hamstringcurl.id,
    routine_id: leg_day_gain_overall_weight.id,
    reps: 10,
    sets: 4
)

workoutroutinejointgowld3= WorkoutRoutine.create(
    workout_id: deadlift.id,
    routine_id: leg_day_gain_overall_weight.id,
    reps: 10,
    sets: 3
)

workoutroutinejoint1gowld4= WorkoutRoutine.create(
    workout_id: weightedlunge.id,
    routine_id: leg_day_gain_overall_weight.id,
    reps: 10,
    sets: 3
)

workoutroutinejoint1gowct1= WorkoutRoutine.create(
    workout_id: benchpress.id,
    routine_id: chest_and_triceps_gain_overall_weight.id,
    reps: 8,
    sets: 3
)

workoutroutinejointgowct2= WorkoutRoutine.create(
    workout_id: dips.id,
    routine_id: chest_and_triceps_gain_overall_weight.id,
    reps: 3,
    sets: 15
)

workoutroutinejointgowct3= WorkoutRoutine.create(
    workout_id: pushup.id,
    routine_id: chest_and_triceps_gain_overall_weight.id,
    reps: 15,
    sets: 4
)

workoutroutinejointgowct4= WorkoutRoutine.create(
    workout_id: dumbellflys.id,
    routine_id: chest_and_triceps_gain_overall_weight.id,
    reps: 8,
    sets: 3
)

workoutroutinejointgowct5= WorkoutRoutine.create(
    workout_id: dumbellchestpress.id,
    routine_id: chest_and_triceps_gain_overall_weight.id,
    reps: 8,
    sets: 3
)


workoutroutinejointbbgov1= WorkoutRoutine.create(
    workout_id: pullups.id,
    routine_id: back_and_biceps_gain_overall_weight.id,
    reps: 8,
    sets: 3
)

workoutroutinejointbbgow2= WorkoutRoutine.create(
    workout_id: weightedpulldowns.id,
    routine_id: back_and_biceps_gain_overall_weight.id,
    reps: 8,
    sets: 3
)

workoutroutinejointbbgow3= WorkoutRoutine.create(
    workout_id: dumbellcurls.id,
    routine_id: back_and_biceps_gain_overall_weight.id,
    reps: 10,
    sets: 3
)

workoutroutinejointbbgow4= WorkoutRoutine.create(
    workout_id: barbellbentrow.id,
    routine_id: back_and_biceps_gain_overall_weight.id,
    reps: 10,
    sets: 3
)

#///////////////// loose overall weight
workoutroutinejointtlowld1= WorkoutRoutine.create(
    workout_id: jogging.id,
    routine_id: legs_loose_overall_weight.id,
    reps: 10
)

workoutroutinejointtlowld2= WorkoutRoutine.create(
    workout_id: cycling.id,
    routine_id: legs_loose_overall_weight.id,
    reps: 10
)

workoutroutinejointtlowld3= WorkoutRoutine.create(
    workout_id: weightedsquats.id,
    routine_id: legs_loose_overall_weight.id,
    reps: 20,
    sets: 4
)

workoutroutinejointtlowld4= WorkoutRoutine.create(
    workout_id: deadlift.id,
    routine_id: legs_loose_overall_weight.id,
    reps: 20,
    sets: 4
)

workoutroutinejointtlowld5= WorkoutRoutine.create(
    workout_id: situps.id,
    routine_id: legs_loose_overall_weight.id,
    reps: 20,
    sets: 3
)

workoutroutinejointtlowld6= WorkoutRoutine.create(
    workout_id: bicyclecrunches.id,
    routine_id: legs_loose_overall_weight.id,
    reps: 1,
    sets: 3
)

workoutroutinejointtlowld7= WorkoutRoutine.create(
    workout_id: plank.id,
    routine_id: legs_loose_overall_weight.id,
    reps: 1,
    sets: 3
)

workoutroutinejointtlowct1= WorkoutRoutine.create(
    workout_id: jogging.id,
    routine_id: chest_and_triceps_loose_overall_weight.id,
    reps: 10 
)

workoutroutinejointtlowct2= WorkoutRoutine.create(
    workout_id: jumprope.id,
    routine_id: chest_and_triceps_loose_overall_weight.id,
    reps: 10
)

workoutroutinejointtlowct3= WorkoutRoutine.create(
    workout_id: dumbellchestpress,
    routine_id: chest_and_triceps_loose_overall_weight.id,
    reps: 20,
    sets: 3
)

workoutroutinejointtlowct4= WorkoutRoutine.create(
    workout_id: dumbellflys.id,
    routine_id: chest_and_triceps_loose_overall_weight.id,
    reps: 20,
    sets: 3
)

workoutroutinejointtlowct5= WorkoutRoutine.create(
    workout_id: mountainclimbers.id,
    routine_id: chest_and_triceps_loose_overall_weight.id,
    reps: 1,
    sets: 3
)

workoutroutinejointtlowct6= WorkoutRoutine.create(
    workout_id: legraises.id,
    routine_id: chest_and_triceps_loose_overall_weight.id,
    reps: 20,
    sets: 3
)

workoutroutinejointtlowct7= WorkoutRoutine.create(
    workout_id: plank.id,
    routine_id: chest_and_triceps_loose_overall_weight.id,
    reps: 1,
    sets: 3
)



workoutroutinejointbbtlow1= WorkoutRoutine.create(
    workout_id: jogging.id,
    routine_id: back_and_biceps_loose_overall_weight.id,
    reps: 10
)

workoutroutinejointbbtlow2= WorkoutRoutine.create(
    workout_id: burpee.id,
    routine_id: back_and_biceps_loose_overall_weight.id,
    reps: 15,
    sets: 3
)

workoutroutinejointbbtlow3= WorkoutRoutine.create(
    workout_id: dumbellcurls.id,
    routine_id: back_and_biceps_loose_overall_weight.id,
    reps: 15,
    sets: 3
)

workoutroutinejointbbtlow4= WorkoutRoutine.create(
    workout_id: pullups.id,
    routine_id: back_and_biceps_loose_overall_weight.id,
    reps: 12,
    sets: 3
)

workoutroutinejointbbtlow5= WorkoutRoutine.create(
    workout_id: crunches.id,
    routine_id: back_and_biceps_loose_overall_weight.id,
    reps: 20,
    sets: 4
)

workoutroutinejointbbtlow6= WorkoutRoutine.create(
    workout_id: plank.id,
    routine_id: back_and_biceps_loose_overall_weight.id,
    reps: 1,
    sets: 3
)

#/////////////

#///////// gain muscle mass =>

workoutroutinejointgmmld1= WorkoutRoutine.create(
    workout_id: weightedsquats.id,
    routine_id: leg_day_gain_muscle_mass.id,
    reps: 8,
    sets: 4
)

workoutroutinejointgmmld2= WorkoutRoutine.create(
    workout_id: hamstringcurl.id,
    routine_id: leg_day_gain_muscle_mass.id,
    reps: 8,
    sets: 3
)

workoutroutinejointgmmld3= WorkoutRoutine.create(
    workout_id: deadlift.id,
    routine_id: leg_day_gain_muscle_mass.id,
    reps: 8,
    sets: 4
)

workoutroutinejointldgmm4= WorkoutRoutine.create(
    workout_id: weightedlunge.id,
    routine_id: leg_day_gain_muscle_mass.id,
    reps: 12,
    sets: 4
)


workoutroutinejointctgmm1= WorkoutRoutine.create(
    workout_id: benchpress.id,
    routine_id: chest_and_triceps_gain_muscle_mass.id,
    reps: 8,
    sets: 3
)

workoutroutinejointgmmct2= WorkoutRoutine.create(
    workout_id: dips.id,
    routine_id: chest_and_triceps_gain_muscle_mass.id,
    reps: 10,
    sets: 4
)

workoutroutinejointgmmct3= WorkoutRoutine.create(
    workout_id: pushup.id,
    routine_id: chest_and_triceps_gain_muscle_mass.id,
    reps: 15,
    sets: 3
)

workoutroutinejointgmmct4= WorkoutRoutine.create(
    workout_id: dumbellflys.id,
    routine_id: chest_and_triceps_gain_muscle_mass.id,
    reps: 8,
    sets: 3
)

workoutroutinejointgmmct5= WorkoutRoutine.create(
    workout_id: dumbellchestpress.id,
    routine_id: chest_and_triceps_gain_muscle_mass.id,
    reps: 8,
    sets: 3
)

workoutroutinejointbbgmm1= WorkoutRoutine.create(
    workout_id: pullups.id,
    routine_id: back_and_biceps_gain_muscle_mass.id,
    reps: 12,
    sets: 4
)

workoutroutinejointbbgmm2= WorkoutRoutine.create(
    workout_id: weightedpulldowns.id,
    routine_id: back_and_biceps_gain_muscle_mass.id,
    reps: 10,
    sets: 3
)

workoutroutinejointbbgmm3= WorkoutRoutine.create(
    workout_id: dumbellcurls.id,
    routine_id: back_and_biceps_gain_muscle_mass.id,
    reps: 15,
    sets: 3
)

workoutroutinejointbbgmm4= WorkoutRoutine.create(
    workout_id: barbellbentrow.id,
    routine_id: back_and_biceps_gain_muscle_mass.id,
    reps: 12,
    sets: 3
)








# user_routine_joint1= UserRoutine.create(
#     user_id: ,
#     routine_id: ,
#     currently_using: 

# )






# workoutroutinejoint1= WorkoutRoutine.create(
#     workout_id: ,
#     routine_id: ,
#     reps: ,
#     sets: 
# )




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

puts 'finished ingredients'
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









