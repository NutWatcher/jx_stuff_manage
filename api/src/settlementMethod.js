/**
 * @api {get} /settlementMethod/:id 获取结算方式信息
 * @apiName GetSettlementMethod
 * @apiGroup SettlementMethod
 *
 * @apiParam (请求参数) {Number} id 结算方式 ID
 *
 * @apiSuccess (成功信息)   {Number}            code=2000           状态码
 * @apiSuccess (成功信息)   {settlementMethod}  settlementMethod    结算方式对象
 * @apiSuccess (settlementMethod 对象)  {Number}    id      结算方式 ID
 * @apiSuccess (settlementMethod 对象)  {String}    name    结算方式名称
 * 
 * @apiSuccessExample 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          "code": 2000,
 *          "settlementMethod": {
 *              "name": "浙江AAA电子结算方式",
 *              "id": "311"
 *          }
 *      }
 * 
 * @apiUse BaseError
 */

/**
 * @api {get} /settlementMethod 获取结算方式信息列表
 * @apiName GetSettlementMethodList
 * @apiGroup SettlementMethod
 *
 * @apiParam (请求参数) {String} [query] 模糊查询字段
 * @apiParam (请求参数) {Number} [page=0] 分页 page 数据
 * @apiParam (请求参数) {Number} [limit=20] 分页 limit 数据
 *
 * @apiSuccess (成功信息)   {Number}                code=2000               状态码
 * @apiSuccess (成功信息)   {settlementMethod[]}    settlementMethodList    结算方式对象列表
 * @apiSuccess (settlementMethod 对象)  {Number}    id      结算方式 ID
 * @apiSuccess (settlementMethod 对象)  {String}    name    结算方式名称
 * 
 * @apiSuccessExample 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          "code": 2000,
 *          "settlementMethodList": [{
 *              "name": "浙江AAA电子结算方式",
 *              "id": "311"
 *              },{
 *              "name": "浙江BBB电子结算方式",
 *              "id": "315"
 *          }]
 *      }
 * 
 * @apiUse BaseError
 */

/**
 * @api {post} /settlementMethod 增加结算方式信息
 * @apiName AddSettlementMethod
 * @apiGroup SettlementMethod
 *
 * @apiParam (请求参数) {String=post} action 执行方式：新增
 * @apiParam (请求参数) {String} name 结算方式名称
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */

/**
 * @api {post} /settlementMethod/:id 修改结算方式信息
 * @apiName PutSettlementMethod
 * @apiGroup SettlementMethod
 *
 * @apiParam (请求参数) {String=put} action 执行方式：修改
 * @apiParam (请求参数) {String} name 结算方式名称
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */

 /**
 * @api {post} /settlementMethod/:id 删除结算方式信息
 * @apiName DeleteSettlementMethod
 * @apiGroup SettlementMethod
 *
 * @apiParam (请求参数) {String=delete} action 执行方式：删除
 * 
 * @apiUse BaseSuccess
 * 
 * @apiUse BaseError
 */