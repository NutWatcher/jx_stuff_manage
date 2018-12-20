/**
 * @api {get} /stuff/:id 获取物品信息
 * @apiName GetStuff
 * @apiGroup Stuff
 *
 * @apiParam {Number} id 物品 ID.
 *
 * @apiSuccess (成功信息)   {Number}  code=2000         状态码
 * @apiSuccess (成功信息)   {stuff}   stuff             物品对象
 * @apiSuccess (stuff 对象) {Number}  id                物品 ID
 * @apiSuccess (stuff 对象) {String}  name              物品名称
 * @apiSuccess (stuff 对象) {String}  settlementMethod  结算方式
 * @apiSuccess (stuff 对象) {String}  settlementCompany 结算公司
 * @apiSuccess (stuff 对象) {String}  date              日期
 * @apiSuccess (stuff 对象) {String}  incomeId          收料编号
 * @apiSuccess (stuff 对象) {String}  using             器材用途
 * @apiSuccess (stuff 对象) {Number}  quantity          数量
 * @apiSuccess (stuff 对象) {String}  unitPrice         单价
 * @apiSuccess (stuff 对象) {String}  totalPrice        总价
 * @apiSuccess (stuff 对象) {String}  billingNumber     发票号

 * @apiSuccessExample {json} 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          code: 2000,
 *          stuff: {
 *              "id": 547,
 *              "name": "捆钞绳",
 *              "settlementMethod": "发票汇款",
 *              "settlementCompany": "浙江AAA科技公司",
 *              "date": "2018-10-10",
 *              "incomeId": "098-2018001256",
 *              "using": "维护料",
 *              "quantity": 3,
 *              "unitPrice": "120.00",
 *              "totalPrice": "360.00",
 *              "billingNumber": "18121818"
 *          }
 *      }
 *
 * @apiUse BaseError
 */

 /**
 * @api {get} /stuff 获取物品信息列表
 * @apiName GetStuffLIst
 * @apiGroup Stuff
 *
 * @apiParam (请求参数) {query[]} [queryList]   查询列表
 * @apiParam (请求参数) {Number}  [page=0]      分页 page 数据
 * @apiParam (请求参数) {Number}  [limit=20]    分页 limit 数据
 * 
 * @apiParam (query 对象) {string} name   查询对象名称
 * @apiParam (query 对象) {string} value   查询对象值 模糊查询
 * 
 * @apiParamExample {json} 请求示例:
 *     HTTP/1.1 200 OK
 *     {
 *          "query": [
 *              {"name": "settlementMethod", "value": "汇款"},
 *              {"name": "date", "value": "2018-9-15"},
 *          ],
 *          "page": 3,
 *          "limit": 50
 *     }
 *
 * @apiSuccess (成功信息)   {Number}  code=2000         状态码
 * @apiSuccess (成功信息)   {stuff[]} stuffList         物品对象列表
 * @apiSuccess (stuff 对象) {Number}  id                物品 ID
 * @apiSuccess (stuff 对象) {String}  name              物品名称
 * @apiSuccess (stuff 对象) {String}  settlementMethod  结算方式
 * @apiSuccess (stuff 对象) {String}  settlementCompany 结算公司
 * @apiSuccess (stuff 对象) {String}  date              日期
 * @apiSuccess (stuff 对象) {String}  incomeId          收料编号
 * @apiSuccess (stuff 对象) {String}  using             器材用途
 * @apiSuccess (stuff 对象) {Number}  quantity          数量
 * @apiSuccess (stuff 对象) {String}  unitPrice         单价
 * @apiSuccess (stuff 对象) {String}  totalPrice        总价
 * @apiSuccess (stuff 对象) {String}  billingNumber     发票号

 * @apiSuccessExample {json} 成功示例:
 *      HTTP/1.1 200 OK
 *      {
 *          code: 2000,
 *          stuffList: [{
 *              "id": 547,
 *              "name": "捆钞绳",
 *              "settlementMethod": "发票汇款",
 *              "settlementCompany": "浙江AAA科技公司",
 *              "date": "2018-10-10",
 *              "incomeId": "098-2018001256",
 *              "using": "维护料",
 *              "quantity": 3,
 *              "unitPrice": "120.00",
 *              "totalPrice": "360.00",
 *              "billingNumber": "18121818"
 *          }]
 *      }
 *
 * @apiUse BaseError
 */

/**
 * @api {post} /stuff 物品入库
 * @apiName AddStuff
 * @apiGroup Stuff
 *
 * @apiParam (请求参数) {String=post} action            执行方式：新增
 * @apiParam (请求参数) {String}      name              物品名称
 * @apiParam (请求参数) {String}      settlementMethod  结算方式
 * @apiParam (请求参数) {String}      settlementCompany 结算公司
 * @apiParam (请求参数) {String}      date              日期
 * @apiParam (请求参数) {String}      incomeId          收料编号
 * @apiParam (请求参数) {String}      using             器材用途
 * @apiParam (请求参数) {Number}      quantity          数量
 * @apiParam (请求参数) {String}      unitPrice         单价
 * @apiParam (请求参数) {String}      totalPrice        总价
 * @apiParam (请求参数) {String}      billingNumber     发票号
 * 
 * @apiParamExample {json} 请求示例:
 *     HTTP/1.1 200 OK
 *     {
 *          "action": "post",
 *          "name": "捆钞绳",
 *          "settlementMethod": "发票汇款",
 *          "settlementCompany": "浙江AAA科技公司",
 *          "date": "2018-10-10",
 *          "incomeId": "098-2018001256",
 *          "using": "维护料",
 *          "quantity": 3,
 *          "unitPrice": "120.00",
 *          "totalPrice": "360.00",
 *          "billingNumber": "18121818"
 *     }
 * 
 * @apiUse BaseSuccess
 *
 * @apiUse BaseError
 */

/**
 * @api {post} /stuff 修改物品信息
 * @apiName PutStuff
 * @apiGroup Stuff
 *
 * @apiParam (请求参数) {String=post} action              执行方式：修改
 * @apiParam (请求参数) {Number}      id                  物品 ID
 * @apiParam (请求参数) {String}      [name]              物品名称
 * @apiParam (请求参数) {String}      [settlementMethod]  结算方式
 * @apiParam (请求参数) {String}      [settlementCompany] 结算公司
 * @apiParam (请求参数) {String}      [date]              日期
 * @apiParam (请求参数) {String}      [incomeId]          收料编号
 * @apiParam (请求参数) {String}      [using]             器材用途
 * @apiParam (请求参数) {Number}      [quantity]          数量
 * @apiParam (请求参数) {String}      [unitPrice]         单价
 * @apiParam (请求参数) {String}      [totalPrice]        总价
 * @apiParam (请求参数) {String}      [billingNumber]     发票号
 *
 * @apiUse BaseSuccess
 *
 * @apiUse BaseError
 */

 /**
 * @api {post} /stuff 删除物品入库信息
 * @apiName DeleteStuff
 * @apiGroup Stuff
 *
 * @apiParam (请求参数) {String=delete} action 执行方式：删除
 * @apiParam (请求参数) {Number}      id       物品 ID
 *
 * @apiUse BaseSuccess
 *
 * @apiUse BaseError
 */