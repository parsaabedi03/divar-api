```js
/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Post management
 */

/**
 * @swagger
 * /post/create:
 *   get:
 *     summary: Get post creation data
 *     tags: [Post]
 *     security:
 *       - BearerAuth: []
 *
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: false
 *         schema:
 *           type: string
 *         description: Category slug
 *
 *     responses:
 *       200:
 *         description: Post creation data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categories:
 *                   type: array
 *                   items:
 *                     type: object
 *                 showBack:
 *                   type: boolean
 *                 category:
 *                   type: string
 *                   nullable: true
 *                 options:
 *                   type: array
 *                   nullable: true
 *                   items:
 *                     type: object
 *
 *       401:
 *         description: Unauthorized
 *
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /post/create:
 *   post:
 *     summary: Create a new post
 *     tags: [Post]
 *     security:
 *       - BearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - category
 *               - amount
 *             properties:
 *               title_post:
 *                 type: string
 *                 description: Post title
 *                 example: iPhone 15 Pro Max
 *
 *               description:
 *                 type: string
 *                 description: Post description
 *                 example: iPhone 15 Pro Max 256GB
 *
 *               category:
 *                 type: string
 *                 description: Category ID
 *                 example: 64f123456789abcdef123456
 *
 *               amount:
 *                 type: number
 *                 description: Post price
 *                 example: 85000000
 *
 *               lat:
 *                 type: number
 *                 description: Latitude
 *                 example: 35.6892
 *
 *               lng:
 *                 type: number
 *                 description: Longitude
 *                 example: 51.3890
 *
 *               images:
 *                 type: array
 *                 description: Post images
 *                 maxItems: 10
 *                 items:
 *                   type: string
 *                   format: binary
 *
 *               options:
 *                 type: object
 *                 description: Dynamic category options
 *                 additionalProperties: true
 *
 *     responses:
 *       200:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: آگهی با موفقیت ایجاد شد
 *
 *       401:
 *         description: Unauthorized
 *
 *       400:
 *         description: Invalid request
 */

/**
 * @swagger
 * /post/my:
 *   get:
 *     summary: Get current user's posts
 *     tags: [Post]
 *     security:
 *       - BearerAuth: []
 *
 *     responses:
 *       200:
 *         description: List of user's posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *                 count:
 *                   type: integer
 *                   example: 3
 *
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /post/delete/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [Post]
 *     security:
 *       - BearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *         example: 64f123456789abcdef123456
 *
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: آگهی با موفقیت حذف شد
 *
 *       400:
 *         description: Invalid post ID
 *
 *       404:
 *         description: Post not found
 *
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /post/{id}:
 *   get:
 *     summary: Get post by ID
 *     tags: [Post]
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *         example: 64f123456789abcdef123456
 *
 *     responses:
 *       200:
 *         description: Post information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post:
 *                   $ref: '#/components/schemas/Post'
 *
 *       400:
 *         description: Invalid post ID
 *
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64f123456789abcdef123456
 *
 *         userId:
 *           type: string
 *           example: 64f123456789abcdef654321
 *
 *         title:
 *           type: string
 *           example: iPhone 15 Pro Max
 *
 *         amount:
 *           type: number
 *           example: 85000000
 *
 *         content:
 *           type: string
 *           example: iPhone 15 Pro Max 256GB
 *
 *         category:
 *           type: string
 *           example: 64f123456789abcdef123456
 *
 *         province:
 *           type: string
 *           example: تهران
 *
 *         city:
 *           type: string
 *           example: تهران
 *
 *         district:
 *           type: string
 *           example: منطقه 1
 *
 *         address:
 *           type: string
 *           example: خیابان ولیعصر
 *
 *         coordinate:
 *           type: array
 *           items:
 *             type: number
 *           example:
 *             - 35.6892
 *             - 51.3890
 *
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - uploads/post/image1.jpg
 *             - uploads/post/image2.jpg
 *
 *         options:
 *           type: object
 *           additionalProperties: true
 *
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
```
