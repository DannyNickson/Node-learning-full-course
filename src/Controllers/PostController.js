import Posts from "../Schema/Posts/Posts.js";
import PostService from "../Services/PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await Posts.find()
            return res.json(posts);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getOne(req, res) {
        try {
            const posts = await PostService.getOne(req.params.id)
            return res.json(posts);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async update(req, res) {
        try {
            const post = req.body;
            if (!post._id) {
                res.status(400).json({ message: "Id Не указан" })
            }
            const updatedPost = await Posts.findByIdAndUpdate(post._id, post, { new: true })
            return res.json(updatedPost);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "Id Не указан" })
            }
            const post = await Posts.findByIdAndDelete(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new PostController;