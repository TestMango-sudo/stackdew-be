   const devling1 = {
                'devling-name': 'Laura',
                'front-end': Math.random(1, 3),
                'back-end': Math.random(1, 3),
                'dev-ego': Math.random(1, 3),
                'emotional': Math.random(1, 3),
                'google-skills': Math.random(1, 3)
            }


Database rules:
            //match logged in user in user doc in users collection
match /users/{userId} {
    allow create: if request.auth.uid != null;
    allow read: request.auth.uid == userId;
}

// match any doc in a collection:

match /[collection_name]/{document_id} {
    allow read, write: if request.auth.uid != null
}
