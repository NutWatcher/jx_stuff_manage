/**
 * @api {get} /department/:id 获取部门信息
 * @apiName GetDepartment
 * @apiGroup Department
 *  
 * @apiParam (请求参数) {Number} id 部门 ID
 *
 * @apiSuccess (成功信息)           {Number}        code=2000   状态码
 * @apiSuccess (成功信息)           {department}    department  部门对象
 * @apiSuccess (department 对象)    {Number}        id          部门 ID
 * @apiSuccess (department 对象)    {String}        name        部门名称
 * 
 * @apiSuccessExample 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          "code": 2000,
 *          "department": {
 *              "name": "包裹快递部",
 *              "id": "311"
 *          }
 *      }
 *
 * @apiUse BaseError
 */

/**
 * @api {get} /department 获取部门信息列表
 * @apiName GetDepartmentList
 * @apiGroup Department
 *
 * @apiParam (请求参数) {String} [query] 模糊查询字段
 * @apiParam (请求参数) {Number} [page=0] 分页 page 数据
 * @apiParam (请求参数) {Number} [limit=20] 分页 limit 数据
 *
 * @apiSuccess (成功信息)           {Number}        code=2000       状态码
 * @apiSuccess (成功信息)           {department[]}  departmentList  部门对象列表
 * @apiSuccess (department 对象)    {Number}        id              部门 ID
 * @apiSuccess (department 对象)    {String}        name            部门名称
 * 
 * @apiSuccessExample 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          "code": 2000,
 *          "departmentList": [{
 *              "name": "包裹快递部",
 *              "id": "311"
 *              },{
 *              "name": "金融业务部",
 *              "id": "315"
 *          }]
 *      }
 *
 * @apiUse BaseError
 */

/**
 * @api {post} /department 增加部门信息
 * @apiName AddDepartment
 * @apiGroup Department
 *
 * @apiParam (请求参数) {String=post} action 执行方式：新增
 * @apiParam (请求参数) {String} name 部门名称
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */

/**
 * @api {post} /department/:id 修改部门信息
 * @apiName PutDepartment
 * @apiGroup Department
 *
 * @apiParam (请求参数) {String=put} action 执行方式：修改
 * @apiParam (请求参数) {String} name 部门名称
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */

 /**
 * @api {post} /department/:id 删除部门信息
 * @apiName DeleteDepartment
 * @apiGroup Department
 *
 * @apiParam (请求参数) {String=delete} action 执行方式：删除
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */