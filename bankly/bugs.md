BUG 1: authUser middleware function uses token in body, but for get requests it should use headers ((there are no bodies on get requests))

----------------------------------------

BUG 2: authUser function was using jwt.decode instead of jwt.verify

---------------------------------
BUG 3: await missing in User.authentificate

----------------------------
BUG 4:PATCH route returns hashed password, not good, fixed by replacing RETURNING Statement in partial Update file with fewer columns
-----------------------------------------

BUG 5: GET /:username route does not return 404 wenn not found --> missing throw

 if (!user) {
      new ExpressError('No such user', 404);
    }

------------------------------------

BUG 6: router.delete('/:username', authUser, requireAdmin, async function(
  req,
  res,
  next
) {
  try {
     User.delete(req.params.username);     ......> await missing
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
}); // end

