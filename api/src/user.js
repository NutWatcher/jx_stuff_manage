/**
 * @api {get} /user/:id 获取用户信息
 * @apiName GetUser
 * @apiGroup User
 *  
 * @apiParam (请求参数) {Number} id 用户 ID
 *
 * @apiSuccess (成功信息)   {Number}    code=2000   状态码
 * @apiSuccess (成功信息)   {user}      user        用户对象
 * @apiSuccess (user 对象)  {Number}    id          用户 ID
 * @apiSuccess (user 对象)  {String}    name        用户名称
 * 
 * @apiSuccessExample 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          "code": 2000,
 *          "user": {
 *              "name": "张三",
 *              "id": "311"
 *          }
 *      }
 *
 * @apiUse BaseError
 */

/**
 * @api {get} /user 获取用户信息列表
 * @apiName GetUserList
 * @apiGroup User
 *
 * @apiParam (请求参数) {String} [query] 模糊查询字段
 * @apiParam (请求参数) {Number} [page=0] 分页 page 数据
 * @apiParam (请求参数) {Number} [limit=20] 分页 limit 数据
 *
 * @apiSuccess (成功信息)   {Number}    code=2000   状态码
 * @apiSuccess (成功信息)   {user[]}    userList    用户对象列表
 * @apiSuccess (user 对象)  {Number}    id          用户 ID
 * @apiSuccess (user 对象)  {String}    name        用户名称
 * 
 * @apiSuccessExample 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          "code": 2000,
 *          "userList": [{
 *              "name": "张三",
 *              "id": "311"
 *              },{
 *              "name": "李四",
 *              "id": "315"
 *          }]
 *      }
 *
 * @apiUse BaseError
 */

/**
 * @api {post} /user 增加用户信息
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiParam (请求参数) {String=post} action 执行方式：新增
 * @apiParam (请求参数) {String} name 用户名称
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */

/**
 * @api {post} /user/:id 修改用户信息
 * @apiName PutUser
 * @apiGroup User
 *
 * @apiParam (请求参数) {String=put} action 执行方式：修改
 * @apiParam (请求参数) {String} name 用户名称
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */

 /**
 * @api {post} /user/:id 删除用户信息
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam (请求参数) {String=delete} action 执行方式：删除
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */