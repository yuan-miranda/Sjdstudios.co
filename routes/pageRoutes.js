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
router.get("/extend", sendPage("extend.html"));
router.get("/login", sendPage("login.html"));
router.get("/store", sendPage("store.html"));

// router.get("/about", sendPage("about.html"));
// router.get("/login", requireLoggedOutAccess, sendPage("login.html"));
// router.get("/register", requireLoggedOutAccess, sendPage("register.html"));
// router.get("/logout", requireLoggedInAccess, sendPage("logout.html"));
// router.get("/create", sendPage("create.html"));
// router.get("/modify", sendPage("modify.html"));
// router.get("/account", sendPage("account.html"));
// router.get("/settings", sendPage("settings.html"));
// router.get("/account/email/verify", sendPage("verify.html"));
router.get("/admin", sendPage("admin.html"));

module.exports = router;