<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
      $this->display();
    }

    public function  initRelationData() {
      $output = Array(
        'hierarchies' => Array(
          '人类' => Array(
            '男人' => Array('祖父', '父亲', '兄弟'),
            '女人' => Array('祖母', '母亲', '姐妹')
          ),
          '动物'=> Array(
            '雌性' => Array(
              'a' => Array('a1', 'a2', 'a3'),
              'b' => Array('b1', 'b2', 'b3')
            ),
            '雄性' => Array(4, 5, 6)
          )
        ),
        'indices' => Array(0, 0, 0)
      );

      echo json_encode($output);
    }
}
