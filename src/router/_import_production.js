/*
* @Author: liujie
* @Date:   2018-04-16 15:33:15
* @Last Modified by:   liujie
* @Last Modified time: 2018-04-16 15:33:19
*/
module.exports = file => () => import('@/views/' + file + '.vue')
