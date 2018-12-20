/**
 * @apiDefine BaseError 默认错误信息
 *
 * @apiError (错误信息) {Number} code      内部状态码
 * @apiError (错误信息) {String} message   错误信息
 *
 * @apiErrorExample {json} 错误示例:
 *     HTTP/1.1 200 OK
 *     {
 *          "code": 4041,
 *          "message": "数据库连接出错，联系管理员"
 *     }
 */
/**
 * @apiDefine BaseSuccess 默认成功信息
 *
 * @apiSuccess (成功信息) {Number} code=2000 内部状态码
 *
 * @apiSuccessExample {json} 成功示例:
 *     HTTP/1.1 200 OK
 *     {
 *          "code": 2000,
 *     }
 */

/**
 * @api {get} /company/:id 获取公司信息
 * @apiName GetCompany
 * @apiGroup Company
 *  
 * @apiParam (请求参数) {Number} id 公司 ID
 *
 * @apiSuccess (成功信息)       {Number}    code=2000   状态码
 * @apiSuccess (成功信息)       {company}   company     公司对象
 * @apiSuccess (company 对象)   {Number}    id 公司     ID
 * @apiSuccess (company 对象)   {String}    name        公司名称
 *
 * @apiSuccessExample 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          "code": 2000,
 *          "company": {
 *              "name": "浙江xx电子公司",
 *              "id": "315"
 *          }
 *     }
 *
 * @apiUse BaseError
 */

/**
 * @api {get} /company 获取公司信息列表
 * @apiName GetCompanyList
 * @apiGroup Company
 *
 * @apiParam (请求参数) {String} [query] 模糊查询字段
 * @apiParam (请求参数) {Number} [page=0] 分页 page 数据
 * @apiParam (请求参数) {Number} [limit=20] 分页 limit 数据
 *
 * @apiSuccess (成功信息)       {Number}    code=2000   状态码
 * @apiSuccess (成功信息)       {company[]} companyList 公司对象列表
 * @apiSuccess (company 对象)   {Number}    id          公司 ID
 * @apiSuccess (company 对象)   {String}    name        公司名称
 *
 * @apiSuccessExample 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          "code": 2000,
 *          "companyList": [{
 *              "name": "浙江AAA电子公司",
 *              "id": "311"
 *              },{
 *              "name": "浙江BBB电子公司",
 *              "id": "315"
 *          }]
 *      }
 *
 * @apiUse BaseError
 */

/**
 * @api {post} /company 增加公司信息
 * @apiName AddCompany
 * @apiGroup Company
 *
 * @apiParam (请求参数) {String=post} action 执行方式：新增
 * @apiParam (请求参数) {String} name 公司名称
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */

/**
 * @api {post} /company/:id 修改公司信息
 * @apiName PutCompany
 * @apiGroup Company
 *
 * @apiParam (请求参数) {String=put} action 执行方式：修改
 * @apiParam (请求参数) {String} name 公司名称
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */

 /**
 * @api {post} /company/:id 删除公司信息
 * @apiName DeleteCompany
 * @apiGroup Company
 *
 * @apiParam (请求参数) {String=delete} action 执行方式：删除
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */