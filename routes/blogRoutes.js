"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../controllers/blogController");
const router = express_1.default.Router();
exports.router = router;
//blog routes
router.get("/", blogController_1.blog_index);
//see details of a blog
router.get("/:id", blogController_1.blog_details);
//create a new blog
router.post("/", blogController_1.blog_create_post);
//go to /create page
router.get("/create", blogController_1.blog_create_get);
//delete
router.delete("/:id", blogController_1.blog_delete);
