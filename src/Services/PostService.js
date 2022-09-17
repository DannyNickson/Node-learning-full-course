import Posts from "../Schema/Posts/Posts.js";

class PostService{
    async create(post) {
            const createdPost = await Posts.create(post)
            return createdPost;
    }
    async getAll(req, res) {
        try {
            const posts = await Posts.find()
            return res.json(posts);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getOne(id) {
            if (!id) {
                throw new Error("Не указан ID");
            }
            const posts = await Posts.findById(id)
            return posts;
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

export default new PostService;