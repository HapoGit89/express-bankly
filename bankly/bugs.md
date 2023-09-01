authUser middleware function uses token in body, but for get requests it should use headers ((there are no bodies on get requests))


authUser function was using jwt.decode instead of jwt.verify


await missing in User.authentificate


PATCH route returns hashed password, not good, fixed by replacing RETURNING Statement in partial Update file with fewer columns