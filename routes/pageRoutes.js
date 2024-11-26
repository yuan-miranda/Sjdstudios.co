// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const { sendPage } = require('../controllers/pageController');

router.get('/', sendPage("index.html"));
router.get("/book", sendPage("book.html"));
router.get("/cancel", sendPage("cancel.html"));
router.get("/cart", sendPage("cart.html"));
router.get("/profile", sendPage("profile.html"));
router.get("/details", sendPage("details.html"));
// router.get("/extend", sendPage("extend.html"));
router.get("/login", sendPage("login.html"));
router.get("/store", sendPage("store.html"));
router.get("/admin", sendPage("admin.html"));
router.get("/bookings", sendPage("bookings.html"));
router.get("/extend", sendPage("extend-booking.html"));


// temporary, for testing
const { addUser, checkExistingUser } = require('../utils/query');

router.post("/api/user/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Missing email or password" });
        return;
    }

    try {
        const checkUser = await checkExistingUser(email);
        if (checkUser) {
            console.log("checkUser");
            res.status(200).json({ message: "User logged in successfully", data: { id: checkUser.id, email: checkUser.email, password: checkUser.password }, status: 200 });
            return;
        } else {
            console.log("addUser");
            const result = await addUser(email, password);
            res.status(200).json({ message: "User logged in successfully", data: { id: result.rows[0].id, email: result.rows[0].email, password: result.rows[0].password }, status: 200 });
            return;
        }
    } catch (error) {
        console.log("error");
        res.status(500).json({ error: `Failed to add user: ${error.message}`, status: 500 });
        return;
    }
});

module.exports = router;