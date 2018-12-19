/**
 * @api {get} /stuff/:id 获取物品信息
 * @apiName GetStuff
 * @apiGroup Stuff
 *
 * @apiParam {Number} id 物品 ID.
 *
 * @apiSuccess {String} name 物品名称.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiUse UserNotFoundError
 */

/**
 * @api {post} /stuff/ 增加物品
 * @apiName AddStuff
 * @apiGroup Stuff
 *
 * @apiParam {String} name 物品名称
 * @apiParam {String} settlementMethod 结算方式
 * @apiParam {String} settlementCompany 结算公司
 * @apiParam {String} date 日期
 * @apiParam {String} incomeId 收料编号
 * @apiParam {String} using 器材用途
 * @apiParam {Number} quantity 数量
 * @apiParam {String} unitPrice 单价
 * @apiParam {String} totalPrice 总价
 * @apiParam {String} billingNumber 发票号
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse UserNotFoundError
 */

/**
 * @api {put} /stuff/ 修改物品信息
 * @apiName PutStuff
 * @apiGroup Stuff
 *
 * @apiParam {Number} id          物品 ID.
 * @apiParam {String} [firstname] Firstname of the User.
 * @apiParam {String} [lastname]  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse UserNotFoundError
 */