<?php
/**
 * Created by PhpStorm.
 * User: zhengweifu
 * Date: 15/9/5
 * Time: 下午7:31
 */

/**
 * 列出目录下面所有的文件和子目录
 * @param $dir
 * @return array|bool
 */
function listDir($dir) {

    $output = array();

    if(is_dir($dir)) {
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== false) {
                if((is_dir($dir."/".$file)) && $file!="." && $file!="..") {
                    array_push($output, $file);
                    listDir($dir."/".$file."/");
                } else {
                    if($file!="." && $file!="..") {
                        array_push($output, $file);
                    }
                }
            }
            closedir($dh);
        }
    }

    return $output;
}

/**
 * 多维数组排序
 * $multi_array:多维数组名称
 * $sort_key:二维数组的键名
 * $sort:排序常量	SORT_ASC || SORT_DESC
*/
function multiArraySort(&$multi_array, $sort_key, $sort = SORT_DESC) {
    if(is_array($multi_array)){
        foreach ($multi_array as $row_array) {
            if(is_array($row_array)){
                //把要排序的字段放入一个数组中，
                $key_array[] = $row_array[$sort_key];
            } else{
                return false;
            }
        }
    } else{
        return false;
    }
    //对多个数组或多维数组进行排序
    array_multisort($key_array,$sort,$multi_array);
    return $multi_array;
}

/**
 * TODO 基础分页的相同代码封装，使前台的代码更少
 * @param $m 模型，引用传递
 * @param $where 查询条件
 * @param int $pagesize 每页查询条数
 * @return \Think\Page
 */
function getPage(&$m, $where, $pagesize=10){
    $m1 = clone $m;//浅复制一个模型
    $count = $m->where($where)->count();//连惯操作后会对join等操作进行重置
    $m = $m1;//为保持在为定的连惯操作，浅复制一个模型
    $p = new Think\Page($count, $pagesize);
    $p->lastSuffix = false;
    $p->setConfig('header','<li class="rows">共<b>%TOTAL_ROW%</b>条记录&nbsp;&nbsp;第<b>%NOW_PAGE%</b>页/共<b>%TOTAL_PAGE%</b>页</li>');
    $p->setConfig('prev','上一页');
    $p->setConfig('next','下一页');
    $p->setConfig('last','末页');
    $p->setConfig('first','首页');
    $p->setConfig('theme','%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% %HEADER%');

    $p->parameter = I('get.');

    $m->limit($p->firstRow,$p->listRows);

    return $p;
}
