import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_746} />
      <View style={styles.View_1_747} />
      <View style={styles.View_1_748} />
      <View style={styles.View_1_749} />
      <View style={styles.View_1_750} />
      <View style={styles.View_1_751} />
      <View style={styles.View_1_752} />
      <View style={styles.View_1_753} />
      <View style={styles.View_17_394} />
      <View style={styles.View_17_395} />
      <View style={styles.View_17_396} />
      <View style={styles.View_17_397} />
      <View style={styles.View_17_398} />
      <View style={styles.View_17_399} />
      <View style={styles.View_17_400} />
      <View style={styles.View_17_401} />
      <View style={styles.View_15_819} />
      <View style={styles.View_15_820} />
      <View style={styles.View_15_821} />
      <View style={styles.View_15_822} />
      <View style={styles.View_15_823} />
      <View style={styles.View_15_824} />
      <View style={styles.View_15_825} />
      <View style={styles.View_15_826} />
      <View style={styles.View_15_827} />
      <View style={styles.View_15_828} />
      <View style={styles.View_15_829} />
      <View style={styles.View_15_830} />
      <View style={styles.View_15_831} />
      <View style={styles.View_15_832} />
      <View style={styles.View_15_833} />
      <View style={styles.View_15_834} />
      <View style={styles.View_62_2729} />
      <View style={styles.View_62_2730} />
      <View style={styles.View_62_2731} />
      <View style={styles.View_62_2732} />
      <View style={styles.View_62_2733} />
      <View style={styles.View_62_2734} />
      <View style={styles.View_62_2735} />
      <View style={styles.View_62_2736} />
      <View style={styles.View_62_2738} />
      <View style={styles.View_62_2739} />
      <View style={styles.View_62_2740} />
      <View style={styles.View_62_2741} />
      <View style={styles.View_62_2742} />
      <View style={styles.View_62_2743} />
      <View style={styles.View_62_2744} />
      <View style={styles.View_62_2745} />
      <View style={styles.View_215_997} />
      <View style={styles.View_215_998} />
      <View style={styles.View_215_999} />
      <View style={styles.View_215_1000} />
      <View style={styles.View_215_1001} />
      <View style={styles.View_215_1002} />
      <View style={styles.View_215_1003} />
      <View style={styles.View_215_1004} />
      <View style={styles.View_215_1059} />
      <View style={styles.View_215_1060} />
      <View style={styles.View_215_1061} />
      <View style={styles.View_215_1062} />
      <View style={styles.View_215_1063} />
      <View style={styles.View_215_1064} />
      <View style={styles.View_215_1065} />
      <View style={styles.View_215_1066} />
      <View style={styles.View_215_1149} />
      <View style={styles.View_215_1150} />
      <View style={styles.View_215_1151} />
      <View style={styles.View_215_1152} />
      <View style={styles.View_215_1153} />
      <View style={styles.View_215_1154} />
      <View style={styles.View_215_1155} />
      <View style={styles.View_215_1156} />
      <View style={styles.View_215_1225} />
      <View style={styles.View_215_1226} />
      <View style={styles.View_215_1227} />
      <View style={styles.View_215_1228} />
      <View style={styles.View_215_1229} />
      <View style={styles.View_215_1230} />
      <View style={styles.View_215_1231} />
      <View style={styles.View_215_1232} />
      <View style={styles.View_215_1323} />
      <View style={styles.View_215_1324} />
      <View style={styles.View_215_1325} />
      <View style={styles.View_215_1326} />
      <View style={styles.View_215_1327} />
      <View style={styles.View_215_1328} />
      <View style={styles.View_215_1329} />
      <View style={styles.View_215_1330} />
      <View style={styles.View_215_1393} />
      <View style={styles.View_215_1394} />
      <View style={styles.View_215_1395} />
      <View style={styles.View_215_1396} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c366/1db8/70184c96edd00550ce01eb50c909246a"
        }}
        style={styles.ImageBackground_223_0}
      />
      <View style={styles.View_215_1397} />
      <View style={styles.View_215_1398} />
      <View style={styles.View_215_1399} />
      <View style={styles.View_215_1400} />
      <View style={styles.View_215_1446} />
      <View style={styles.View_215_1447} />
      <View style={styles.View_215_1448} />
      <View style={styles.View_215_1449} />
      <View style={styles.View_215_1450} />
      <View style={styles.View_215_1451} />
      <View style={styles.View_215_1452} />
      <View style={styles.View_215_1453} />
      <View style={styles.View_215_1533} />
      <View style={styles.View_215_1534} />
      <View style={styles.View_215_1535} />
      <View style={styles.View_215_1536} />
      <View style={styles.View_215_1537} />
      <View style={styles.View_215_1538} />
      <View style={styles.View_215_1539} />
      <View style={styles.View_215_1540} />
      <View style={styles.View_215_1626} />
      <View style={styles.View_215_1627} />
      <View style={styles.View_215_1628} />
      <View style={styles.View_215_1629} />
      <View style={styles.View_215_1630} />
      <View style={styles.View_215_1631} />
      <View style={styles.View_215_1632} />
      <View style={styles.View_215_1633} />
      <View style={styles.View_215_1634} />
      <View style={styles.View_215_1635} />
      <View style={styles.View_222_11}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86cd/03a6/eeb67f4a16eac6eb3bb5dda426020771"
          }}
          style={styles.ImageBackground_222_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd24/aecc/9831ac95328a6272a87a0515bebd7e52"
          }}
          style={styles.ImageBackground_222_16}
        />
      </View>
      <View style={styles.View_222_20}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6003/29c2/342f0133844b1ade3cf6aeef850b749b"
          }}
          style={styles.ImageBackground_222_21}
        />
      </View>
      <View style={styles.View_222_24}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec96/d583/8de67b951ed0d395764424331d857f3b"
          }}
          style={styles.ImageBackground_222_25}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c366/1db8/70184c96edd00550ce01eb50c909246a"
        }}
        style={styles.ImageBackground_222_28}
      />
      <View style={styles.View_222_30}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782a/e5c9/6f33af9b11012adcf0ac6d1aeed44adf"
          }}
          style={styles.ImageBackground_222_31}
        />
      </View>
      <View style={styles.View_222_35}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8944/78c3/d4ce5f098089c5e54ead6371aeaf1037"
          }}
          style={styles.ImageBackground_222_36}
        />
      </View>
      <View style={styles.View_222_40}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/491b/4a41/f857f3755f24f43445bccd46e2d349cf"
          }}
          style={styles.ImageBackground_222_41}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd3/8784/c131fc866e7bb7c01dd7e2a3d9d597d9"
        }}
        style={styles.ImageBackground_222_45}
      />
      <View style={styles.View_212_261}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/373b/0c20/9a066d2a161d2da19e1aaa9ff7bba27c"
          }}
          style={styles.ImageBackground_212_262}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d7e/7b1d/ff5448ae89a1f1e7e96aa0313e2a1ed6"
          }}
          style={styles.ImageBackground_212_265}
        />
      </View>
      <View style={styles.View_213_869}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ba/e935/71694012c97d4df05f54b05eb4d24b8d"
          }}
          style={styles.ImageBackground_213_870}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5c9/6177/1f039cf116ecd630ddc2456e53c248be"
          }}
          style={styles.ImageBackground_213_876}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d414/7424/7e044a5a6b5c0a0807a17e4948fcc4cc"
        }}
        style={styles.ImageBackground_213_882}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/236d/669e/1f9f78cad5dcb48ad7993983e172c644"
        }}
        style={styles.ImageBackground_213_885}
      />
      <View style={styles.View_213_888}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf7c/427f/2e40648f810b6b1588d577e151c5125d"
          }}
          style={styles.ImageBackground_213_889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d063/b304/fd0ce6fdb4d491d08cd9350f5ebe867e"
          }}
          style={styles.ImageBackground_213_892}
        />
      </View>
      <View style={styles.View_213_895}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4680/e7a4/35a179d67b9bf0f766be03f3689064b1"
          }}
          style={styles.ImageBackground_213_896}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9c9/2f3b/1c6b9a6ee1c103f3bb7414a079d0f95d"
          }}
          style={styles.ImageBackground_213_899}
        />
      </View>
      <View style={styles.View_213_902}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/754a/80f0/e94f02accdfb1fa486aad34556181ca4"
          }}
          style={styles.ImageBackground_213_903}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2f9/100e/941ba48a9ca4db5e037993e627f34c0f"
          }}
          style={styles.ImageBackground_213_909}
        />
      </View>
      <View style={styles.View_213_915}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae8/f60b/5454c331b309fbad0650c8a079cd3a11"
          }}
          style={styles.ImageBackground_213_916}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/771f/bc90/9154ef5d28dad45d324c5fb4337e2aa6"
          }}
          style={styles.ImageBackground_213_919}
        />
      </View>
      <View style={styles.View_213_922}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97cb/9085/2c8feb6edd734147e19c26abb818e3db"
          }}
          style={styles.ImageBackground_213_923}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d86/91ec/f73ee55fd2227a92fcad1727e5d97ad3"
          }}
          style={styles.ImageBackground_213_927}
        />
      </View>
      <View style={styles.View_213_931}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5d/66e9/fd3ee129ee872d7a68b8fbad8f6b42ec"
          }}
          style={styles.ImageBackground_213_932}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0180/ea10/d58dd6b65fe2a1469ae3440d5ca3941d"
          }}
          style={styles.ImageBackground_213_935}
        />
      </View>
      <View style={styles.View_213_938}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a78/e5f0/0cfbf2757fb3ff516fa28776ce6a1e64"
          }}
          style={styles.ImageBackground_213_939}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a0d/4279/e001a8bcbfe4d3c4048779e77a4a7aa4"
          }}
          style={styles.ImageBackground_213_943}
        />
      </View>
      <View style={styles.View_213_947}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cfb/0d26/43e2f43a926bb3c93b131901ffc902d5"
          }}
          style={styles.ImageBackground_213_948}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/709e/0bc9/67e2c31e9d35ebad5ab02550125bca82"
          }}
          style={styles.ImageBackground_213_953}
        />
      </View>
      <View style={styles.View_213_958}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/613c/4d00/88d6644a44ca8901ea727f099b08d12a"
          }}
          style={styles.ImageBackground_213_959}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e14c/3a75/d1407b6ef18cd47f6200a3c4a6bc5703"
          }}
          style={styles.ImageBackground_213_963}
        />
      </View>
      <View style={styles.View_213_967}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d50/1630/22d90b5d6d604d28f21b64c2bd530a03"
          }}
          style={styles.ImageBackground_213_968}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5570/c875/656d14e338e2d14c32e5b240e1a83874"
          }}
          style={styles.ImageBackground_213_971}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e33/d373/97e3c3aa35dc5ca51d716963cdc5fe35"
        }}
        style={styles.ImageBackground_213_974}
      />
      <View style={styles.View_213_977}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7c/a0dd/6222cbc0845fa3cb4bf7ea2f7397c74c"
          }}
          style={styles.ImageBackground_213_978}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd83/48a2/2a1bdd55c4d6d2aa4f11d94a6c844f97"
          }}
          style={styles.ImageBackground_213_982}
        />
      </View>
      <View style={styles.View_213_986}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7c/da98/b45fdd21394b301b88b4951d2495b5b8"
          }}
          style={styles.ImageBackground_213_987}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c3/ac19/ce87d8ba0b2b97048595e7ba76aef0c4"
          }}
          style={styles.ImageBackground_213_990}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b589/dcd4/2586a265798e607c4ef89a0ac36e4182"
        }}
        style={styles.ImageBackground_213_993}
      />
      <View style={styles.View_213_996}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e0/4f7b/458f1211cff9b7bff2c6458276aa2638"
          }}
          style={styles.ImageBackground_213_997}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5f7/044c/4eb82bf2515ac3578a23001f30fc929a"
          }}
          style={styles.ImageBackground_213_1002}
        />
      </View>
      <View style={styles.View_213_1007}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29c7/2507/c0dbf3fc3747d17d3c832e64c01bb995"
          }}
          style={styles.ImageBackground_213_1008}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a67/7078/f22976acb99fab96bdcd6c9491b24a4e"
          }}
          style={styles.ImageBackground_213_1013}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e806/8c63/e93a7297b1c5dc945a9531d7c373b457"
        }}
        style={styles.ImageBackground_213_1018}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c07/dd73/c859ec94db2bdea5ade48e05f8ce5d74"
        }}
        style={styles.ImageBackground_213_1021}
      />
      <View style={styles.View_213_1024}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5993/a1e0/f22cb78f659334267b49725e3a548ee8"
          }}
          style={styles.ImageBackground_213_1025}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8083/ce06/8a8d6767ec96c3a1e72aaec89f3af9a1"
          }}
          style={styles.ImageBackground_213_1028}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c4a/f9c1/34c54b545049be2d8b2efa63ba550afb"
        }}
        style={styles.ImageBackground_214_0}
      />
      <View style={styles.View_214_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd96/4932/21cc035737fca7c7194525e5e8b575dd"
          }}
          style={styles.ImageBackground_214_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e8f/acf3/e8ea8faf7109498357a85369bbe2c26f"
          }}
          style={styles.ImageBackground_214_13}
        />
      </View>
      <View style={styles.View_214_22}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94f0/73d4/d988e43e74cd1f84ca5992ba67fe6493"
          }}
          style={styles.ImageBackground_214_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78d2/dee4/a663c84894fb1c2559cf59484a468bbc"
          }}
          style={styles.ImageBackground_214_27}
        />
      </View>
      <View style={styles.View_214_31}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73dc/82ab/2ef5e5437e1cee97e2010e9c1c9fedf0"
          }}
          style={styles.ImageBackground_214_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8394/584c/d7e63fb5b2ddf7aaaa00514dc5e1aaa2"
          }}
          style={styles.ImageBackground_214_36}
        />
      </View>
      <View style={styles.View_214_40}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1390/73f9/5ee69aa44d2c8a15de1dc01c520bba27"
          }}
          style={styles.ImageBackground_214_41}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d126/1e19/557d3a7fe8ad94aeee2043ee99696b56"
          }}
          style={styles.ImageBackground_214_48}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d757/2c65/da89599a25d57910bf674da72545e5f3"
        }}
        style={styles.ImageBackground_215_846}
      />
      <View style={styles.View_215_849}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35d4/506c/b4b8a2004530904791fdfdfc67fd0d8d"
          }}
          style={styles.ImageBackground_215_850}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64e/6c27/1eb8945ecf0c9209bd2ab3fc7a2207ca"
          }}
          style={styles.ImageBackground_215_853}
        />
      </View>
      <View style={styles.View_215_856}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a488/e8e0/82574821681179667a152f34cd41e52a"
          }}
          style={styles.ImageBackground_215_857}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92b9/6d36/4d9101ff2a8afe61a9f41c09d10f78aa"
          }}
          style={styles.ImageBackground_215_861}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41db/48e1/8e15dd7da4fdc201f1fb47dca4350dc7"
        }}
        style={styles.ImageBackground_215_865}
      />
      <View style={styles.View_215_868}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0b/7afb/327c1269fa7f6bb68f5182feba2c4cb4"
          }}
          style={styles.ImageBackground_215_869}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60f/ec4b/e23a2b0f0496fac0bdf76703c9bee1db"
          }}
          style={styles.ImageBackground_215_873}
        />
      </View>
      <View style={styles.View_215_877}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0b/db55/073fa77737a5f8d92f95206875711835"
          }}
          style={styles.ImageBackground_215_878}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b221/93b6/74adfee3f16c73519d3ffbea6864dcc5"
          }}
          style={styles.ImageBackground_215_882}
        />
      </View>
      <View style={styles.View_215_886}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33d5/3daf/d0eeced8bc27d1e30e1b4dda3538a9e2"
          }}
          style={styles.ImageBackground_215_887}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e81b/1c77/4e9dfbf949a0a9f76952a972952507ee"
          }}
          style={styles.ImageBackground_215_891}
        />
      </View>
      <View style={styles.View_215_895}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb09/7a2c/cb4d4bf3445111db8b0c4b3545a9b732"
          }}
          style={styles.ImageBackground_215_896}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c89/c727/2524a082bcfed463d992850f66191c53"
          }}
          style={styles.ImageBackground_215_903}
        />
      </View>
      <View style={styles.View_215_910}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f6e/1306/1644d2d5e254bd58254b6fb047ca8b3f"
          }}
          style={styles.ImageBackground_215_911}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b7/f29d/da2ecc1e4a8c5893c5e9b680fe8c83d8"
          }}
          style={styles.ImageBackground_215_914}
        />
      </View>
      <View style={styles.View_215_917}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e03/7bd6/2cb1314a396270264554b2491f9a9552"
          }}
          style={styles.ImageBackground_215_918}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa2a/7a22/ce7fa208917978b0d9fae2c34ff8d012"
          }}
          style={styles.ImageBackground_215_922}
        />
      </View>
      <View style={styles.View_215_926}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/591b/a789/447582c3a2d86e5f6accf21c7b89ed90"
          }}
          style={styles.ImageBackground_215_927}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49a3/46ca/04e313836fc238d4ddb82cda98b755e6"
          }}
          style={styles.ImageBackground_215_932}
        />
      </View>
      <View style={styles.View_215_937}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bb6/0227/b68dac1da1bfc146e3abcca0b9ab6c01"
          }}
          style={styles.ImageBackground_215_938}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f84/47d6/ae8a2ecf10e3fe2f51db4a6b0b585bd1"
          }}
          style={styles.ImageBackground_215_942}
        />
      </View>
      <View style={styles.View_215_946}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76de/7276/2d2dbf2ab9a93e24266db9a61a76577c"
          }}
          style={styles.ImageBackground_215_947}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2620/df57/426c06976ba7874fd1295886da81d081"
          }}
          style={styles.ImageBackground_215_952}
        />
      </View>
      <View style={styles.View_215_957}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e548/755c/20fc4214981a182b097236ce3d16b9d3"
          }}
          style={styles.ImageBackground_215_958}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cfe/b30b/ef7df7de2ce25afb8c19ece0a17e855a"
          }}
          style={styles.ImageBackground_215_961}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f782/cd0a/c4077096043b1534b429dd6b388dab74"
        }}
        style={styles.ImageBackground_215_964}
      />
      <View style={styles.View_215_967}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/203d/e98c/a935b424eef14a2b416ee74bd1b89df3"
          }}
          style={styles.ImageBackground_215_968}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcc9/22fb/6ed4721e62c119df8cc84d444136136c"
          }}
          style={styles.ImageBackground_215_972}
        />
      </View>
      <View style={styles.View_215_977}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12bc/df99/fe0371136402bca65f1de24774336f65"
          }}
          style={styles.ImageBackground_215_978}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e87/e386/43ae2bdbf1de35555ebb323d05d7b9d8"
          }}
          style={styles.ImageBackground_215_981}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51cd/f59f/8fa2d97fab61c616ee938db0649b8996"
        }}
        style={styles.ImageBackground_215_984}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e37/d3c2/c5b66a359abfd537d1ebe32e0fd94e31"
        }}
        style={styles.ImageBackground_215_987}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a32/7f70/ea2715209d84fde404e464edf85e5ae4"
        }}
        style={styles.ImageBackground_215_1005}
      />
      <View style={styles.View_215_1008}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff5a/8e43/0a974da36e9fbc59a6df0deb7b3b9f89"
          }}
          style={styles.ImageBackground_215_1009}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07f5/6d0a/1c7584ffe3a79abb4ccf7756a4aab797"
          }}
          style={styles.ImageBackground_215_1015}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4cc/8409/6d9e440e571e01c30896f01c74830409"
        }}
        style={styles.ImageBackground_215_1021}
      />
      <View style={styles.View_215_1024}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20f3/a725/17896c254cc51e0c604cf95c5f91d880"
          }}
          style={styles.ImageBackground_215_1025}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72f8/bb6a/9a0a79561cab41470fe7ef3ea4df3af4"
          }}
          style={styles.ImageBackground_215_1029}
        />
      </View>
      <View style={styles.View_215_1033}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde4/e6ca/af464c68b17c3ef50f0e2eb64d235850"
          }}
          style={styles.ImageBackground_215_1034}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbf3/3170/84fe6ae3cec5832759deee0a5b550838"
          }}
          style={styles.ImageBackground_215_1038}
        />
      </View>
      <View style={styles.View_215_1042}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ea/afc6/59da871c6a2152786262c9656cd76b5e"
          }}
          style={styles.ImageBackground_215_1043}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34c3/9a38/cb908f007c4aba4f0e3ecc20de2f794e"
          }}
          style={styles.ImageBackground_215_1048}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6646/7c73/f9261afeca5602f3488840b0b6e71210"
        }}
        style={styles.ImageBackground_215_1053}
      />
      <View style={styles.View_215_1067}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20b7/52f0/fc13067e42456b8ad49cbcc8e944c30d"
          }}
          style={styles.ImageBackground_215_1068}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a55/8059/f40243529ec7592bbe593c980d55fa8b"
          }}
          style={styles.ImageBackground_215_1072}
        />
      </View>
      <View style={styles.View_215_1076}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/119f/4bf1/6b082d04ae67733f5d5ed9d90945f0b5"
          }}
          style={styles.ImageBackground_215_1077}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1054/feb2/b57745af59ce12cb6b3a1016e77e8f6e"
          }}
          style={styles.ImageBackground_215_1082}
        />
      </View>
      <View style={styles.View_215_1087}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa79/1d88/2b1c40a2b5ed3cb3516fccda40f286ca"
          }}
          style={styles.ImageBackground_215_1088}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/666a/a599/e358ddfab1e7e7ab06f9287bc2f3b48b"
          }}
          style={styles.ImageBackground_215_1091}
        />
      </View>
      <View style={styles.View_215_1094}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd6/ee42/eee2f5f03d92f5e4cdab127673612ae2"
          }}
          style={styles.ImageBackground_215_1095}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e249/7ff9/adccb95d69321881cb3fd6c76c3e11e0"
          }}
          style={styles.ImageBackground_215_1098}
        />
      </View>
      <View style={styles.View_215_1101}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e020/9325/f973fb614fdfb6564a9b35a85891ea37"
          }}
          style={styles.ImageBackground_215_1102}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f9d/73c1/0c3835a5b9aee96a9f8c9bf9f95addfd"
          }}
          style={styles.ImageBackground_215_1106}
        />
      </View>
      <View style={styles.View_215_1110}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9c6/37e1/a304fcc9fdbd4b31786e8db624cae4c1"
          }}
          style={styles.ImageBackground_215_1111}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ecd/57ce/f5b54ef3d0f0698d626ea89b0440cb2b"
          }}
          style={styles.ImageBackground_215_1122}
        />
      </View>
      <View style={styles.View_215_1133}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3497/35bc/27d6b51a9027e68d8291210bd218ac13"
          }}
          style={styles.ImageBackground_215_1134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e1a/c054/84b1296e5c38ecde3d9d72acf1e76db7"
          }}
          style={styles.ImageBackground_215_1137}
        />
      </View>
      <View style={styles.View_215_1157}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd81/5928/ef6ffdfe678d0d1b090340d9d8f55fd6"
          }}
          style={styles.ImageBackground_215_1158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88f6/6c60/249baad23de3fc0b2dbbb129335ebecc"
          }}
          style={styles.ImageBackground_215_1162}
        />
      </View>
      <View style={styles.View_215_1166}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ade/d1e7/c83073373e10c01dc111d039df47ce0c"
          }}
          style={styles.ImageBackground_215_1167}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71a3/2265/6c86e28409332c70c70f11f0e4e770f2"
          }}
          style={styles.ImageBackground_215_1174}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08dd/f428/8bcc25c50cfd157c20fa15bc1ed0e5d0"
        }}
        style={styles.ImageBackground_215_1181}
      />
      <View style={styles.View_215_1184}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e6/45d9/29f4212b28e016a4da23eff57ac45888"
          }}
          style={styles.ImageBackground_215_1185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b39/806f/f3b8a797c2d99bd47f5a90f60ddebcf2"
          }}
          style={styles.ImageBackground_215_1190}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f91/a3ee/e103e9b97ab58a3a5b0beed2f84c9b47"
        }}
        style={styles.ImageBackground_215_1195}
      />
      <View style={styles.View_215_1198}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02ee/305b/92448e290144368afd9681edd42ed678"
          }}
          style={styles.ImageBackground_215_1199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5926/7cb2/c2c2d99c8b3cf9ac27fa3d7af687f5fb"
          }}
          style={styles.ImageBackground_215_1203}
        />
      </View>
      <View style={styles.View_215_1207}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/373b/0f9a/a7617c1bb56d50df5922f5c39956885e"
          }}
          style={styles.ImageBackground_215_1208}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4d5/4242/9fecbb1cb87c77d944c316406f5e1583"
          }}
          style={styles.ImageBackground_215_1212}
        />
      </View>
      <View style={styles.View_215_1233}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e63/cc92/0be380dcca21d611f0ce1e011b6b8f3c"
          }}
          style={styles.ImageBackground_215_1234}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/657b/3915/8fa9b240454ca8e9cf216130ffd65d96"
          }}
          style={styles.ImageBackground_215_1237}
        />
      </View>
      <View style={styles.View_215_1240}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cbd/47dc/4c1d6006229a8401055186cc4f890753"
          }}
          style={styles.ImageBackground_215_1241}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d4/1254/53b2f70d8576299b7fb1a249b5b0f993"
          }}
          style={styles.ImageBackground_215_1244}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4404/2f44/e1159675f8e5d9d359670a960df86372"
        }}
        style={styles.ImageBackground_215_1247}
      />
      <View style={styles.View_215_1250}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f15f/8c85/12ca5adae3cdb031572db85f9a58250e"
          }}
          style={styles.ImageBackground_215_1251}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6016/023d/79c6525efff9950f729564f29f86aab0"
          }}
          style={styles.ImageBackground_215_1254}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac0/bc44/3995be3179def8cb58be8489aafe8167"
        }}
        style={styles.ImageBackground_215_1257}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1117/b2e4/5e6b1a8e7a59f862a1e8aaec3f7ab517"
        }}
        style={styles.ImageBackground_215_1260}
      />
      <View style={styles.View_215_1265}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d17/5c39/2f940365c2fd30e32821e117b4fc39fb"
          }}
          style={styles.ImageBackground_215_1266}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/6012/c72a2e39f596840bd4aa0813d965cb4b"
          }}
          style={styles.ImageBackground_215_1278}
        />
      </View>
      <View style={styles.View_215_1290}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f77/63d9/a2f239ef32e4a6fa0ff0c445137285eb"
          }}
          style={styles.ImageBackground_215_1291}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5420/2530/6a05d0766a525464019f0d5711491192"
          }}
          style={styles.ImageBackground_215_1307}
        />
      </View>
      <View style={styles.View_215_1216}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/491b/4a41/f857f3755f24f43445bccd46e2d349cf"
          }}
          style={styles.ImageBackground_215_1217}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8636/ee35/554b9a5708d33fea8f05849567904f14"
          }}
          style={styles.ImageBackground_215_1221}
        />
      </View>
      <View style={styles.View_215_1140}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c171/986f/6fe80e4716a0554ace9590d61db61c33"
          }}
          style={styles.ImageBackground_215_1141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e250/7bc9/266361e4a2c7c460b2c85e6e54891370"
          }}
          style={styles.ImageBackground_215_1145}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c26e/068b/d7ac040c4cd3ba1e083e2a1d4859307b"
        }}
        style={styles.ImageBackground_215_1056}
      />
      <View style={styles.View_215_990}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fe7/47df/b2b910865f977ebebc8fe65357e8aad2"
          }}
          style={styles.ImageBackground_215_991}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb8/a97d/c4763ba0426687228f8a804eb5c45529"
          }}
          style={styles.ImageBackground_215_994}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a52/8297/ef50ae8ed45265d0bc1a9eab55f2524c"
        }}
        style={styles.ImageBackground_215_1331}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea57/8729/a683035ecce45fe057472e486ba3a58a"
        }}
        style={styles.ImageBackground_215_1334}
      />
      <View style={styles.View_215_1337}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c4c/1721/e63a44c71edc6b8fd099403cb593b15b"
          }}
          style={styles.ImageBackground_215_1338}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e5/3890/96aef96ba3fb4ed808a082f06f76daa1"
          }}
          style={styles.ImageBackground_215_1342}
        />
      </View>
      <View style={styles.View_215_1346}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa60/64b4/1de1f168c5ed0953c4091a197a8bbb94"
          }}
          style={styles.ImageBackground_215_1347}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ad/2013/b03e57ad665b7c06886c86e2fe9e1bb5"
          }}
          style={styles.ImageBackground_215_1350}
        />
      </View>
      <View style={styles.View_215_1353}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1913/f159/3a608f17cbd05e3686e921a2f7482237"
          }}
          style={styles.ImageBackground_215_1354}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/864b/406e/ae93721323acaca0ec0553e663888f08"
          }}
          style={styles.ImageBackground_215_1357}
        />
      </View>
      <View style={styles.View_215_1360}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b02/5117/1a643c264e1928558456362484691562"
          }}
          style={styles.ImageBackground_215_1361}
        />
      </View>
      <View style={styles.View_215_1364}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd23/e36e/f8a0be48917c66622f0e41cd53b028ca"
          }}
          style={styles.ImageBackground_215_1365}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c60/c842/202687a0e3a22cf29d5ecf3e2e949f32"
          }}
          style={styles.ImageBackground_215_1370}
        />
      </View>
      <View style={styles.View_215_1375}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df0/acc1/7e6137545b58d090eda33d34078f414a"
          }}
          style={styles.ImageBackground_215_1376}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e29/22ae/f86794b47ab301b72ba16ed464416161"
          }}
          style={styles.ImageBackground_215_1383}
        />
      </View>
      <View style={styles.View_215_1454}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1ac/90c4/075966915c3e93e8692abfdb3e738645"
          }}
          style={styles.ImageBackground_215_1455}
        />
      </View>
      <View style={styles.View_215_1458}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ed/3147/672b54bc7f717ccc1dc988a5bf85a18d"
          }}
          style={styles.ImageBackground_215_1459}
        />
      </View>
      <View style={styles.View_215_1468}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b6b/3447/fff81c18041770a3236ed58f5cffcdc7"
          }}
          style={styles.ImageBackground_215_1469}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b589/dcd4/2586a265798e607c4ef89a0ac36e4182"
        }}
        style={styles.ImageBackground_215_1472}
      />
      <View style={styles.View_215_1474}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1885/6936/87d02581945b4ada41df49145830adb7"
          }}
          style={styles.ImageBackground_215_1475}
        />
      </View>
      <View style={styles.View_215_1485}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7812/c946/2a94b187659810115d6c398bd1fc3594"
          }}
          style={styles.ImageBackground_215_1486}
        />
      </View>
      <View style={styles.View_215_1489}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2173/85f6/f7d3c87a62879c48782c60e17890d979"
          }}
          style={styles.ImageBackground_215_1490}
        />
      </View>
      <View style={styles.View_215_1493}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cd/6ec8/0fde700cf63ecce9ab55c06c256002c0"
          }}
          style={styles.ImageBackground_215_1494}
        />
      </View>
      <View style={styles.View_215_1541}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d2d/1820/5ce6a71410d18d17e084db3aeb13d55a"
          }}
          style={styles.ImageBackground_215_1542}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7569/6c96/6448078ced5abefe81c5d851b4eaf05c"
        }}
        style={styles.ImageBackground_215_1545}
      />
      <View style={styles.View_215_1547}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ad8/be66/bce272e0e849dc6420d58ccdc3afdc74"
          }}
          style={styles.ImageBackground_215_1548}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/052b/fde3/bda6370413b64d09dd274977ba7c55c9"
        }}
        style={styles.ImageBackground_215_1551}
      />
      <View style={styles.View_215_1553}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae25/83ec/5a0f5a3888fc2eeca9eeadc44215a684"
          }}
          style={styles.ImageBackground_215_1554}
        />
      </View>
      <View style={styles.View_215_1557}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f713/33af/f123a21b4ecc4778112c4716bf1f0551"
          }}
          style={styles.ImageBackground_215_1558}
        />
      </View>
      <View style={styles.View_215_1563}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b63/97f0/f830b373db76566953ae3679fce8b9df"
          }}
          style={styles.ImageBackground_215_1564}
        />
      </View>
      <View style={styles.View_215_1568}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9f6/582e/746a744b54971ad0bf1ad68178af1032"
          }}
          style={styles.ImageBackground_215_1569}
        />
      </View>
      <View style={styles.View_215_1572}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7660/821d/d732cc2577266b5610687a134ea98977"
          }}
          style={styles.ImageBackground_215_1573}
        />
      </View>
      <View style={styles.View_215_1586}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c7b/8d9d/2a7719dd8ccd58f7501247636a917d06"
          }}
          style={styles.ImageBackground_215_1587}
        />
      </View>
      <View style={styles.View_215_1598}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e32b/d048/0496b0c7a11bbca524fb1c63adf6b61c"
          }}
          style={styles.ImageBackground_215_1599}
        />
      </View>
      <View style={styles.View_215_1605}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/350c/2cac/ac9e55ca7807198c97d83dd58bad5da0"
          }}
          style={styles.ImageBackground_215_1606}
        />
      </View>
      <View style={styles.View_215_1611}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/212f/70f2/f772b3f4087a08b03569ee6e1ca08f2a"
          }}
          style={styles.ImageBackground_215_1612}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb6a/9b12/b5db4fcfd909b25d790a5ec925e7d604"
        }}
        style={styles.ImageBackground_215_1615}
      />
      <View style={styles.View_215_1617}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fa6/2b71/449f171e9613b84dc5cd54b94c392bbc"
          }}
          style={styles.ImageBackground_215_1618}
        />
      </View>
      <View style={styles.View_215_1622}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bf7/84bf/f4433fc71b6d90bf15163e154358e39b"
          }}
          style={styles.ImageBackground_215_1623}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed06/7174/e6e7bbc864d534e4675be97075efac21"
        }}
        style={styles.ImageBackground_215_1578}
      />
      <View style={styles.View_215_1580}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d7e/1ddf/b00c951a8e30cd71154571918b0b9ca3"
          }}
          style={styles.ImageBackground_215_1581}
        />
      </View>
      <View style={styles.View_562_16933} />
      <View style={styles.View_597_348} />
      <View style={styles.View_597_381} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf78/6ebf/3753bc36ee73c6bee76bfd42f93cf1f8"
        }}
        style={styles.ImageBackground_597_351}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fe9/7f34/c48764e3af6a029768fc60916bd7bc3c"
        }}
        style={styles.ImageBackground_597_384}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee90/fd40/18e2715c83b7c15caf986d15c549568e"
        }}
        style={styles.ImageBackground_604_24}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("293.30601092896177%") },
  View_1_746: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_747: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_748: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_749: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_750: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_751: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_752: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_1_753: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_17_394: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_17_395: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_17_396: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_17_397: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_17_398: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_17_399: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_17_400: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_17_401: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_819: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_820: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_821: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_822: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_823: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_824: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_825: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_826: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_827: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_828: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_829: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_830: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_831: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_832: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_833: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_15_834: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2729: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("77.8688524590164%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2730: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("77.8688524590164%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2731: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("77.8688524590164%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2732: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("77.8688524590164%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2733: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("77.8688524590164%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2734: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("77.8688524590164%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2735: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("77.8688524590164%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2736: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("77.8688524590164%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2738: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2739: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2740: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2741: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2742: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2743: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2744: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_62_2745: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_997: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_998: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_999: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1000: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1001: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1002: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1003: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1004: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("113.3879781420765%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1059: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("131.14754098360655%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1060: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("131.14754098360655%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1061: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("131.14754098360655%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1062: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("131.14754098360655%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1063: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("131.14754098360655%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1064: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("131.14754098360655%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1065: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("131.14754098360655%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1066: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("131.14754098360655%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1149: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("148.9071038251366%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1150: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("148.9071038251366%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1151: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("148.9071038251366%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1152: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("148.9071038251366%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1153: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("148.9071038251366%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1154: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("148.9071038251366%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1155: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("148.9071038251366%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1156: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("148.9071038251366%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1225: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("166.66666666666669%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1226: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("166.66666666666669%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1227: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("166.66666666666669%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1228: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("166.66666666666669%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1229: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("166.66666666666669%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1230: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("166.66666666666669%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1231: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("166.66666666666669%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1232: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("166.66666666666669%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1323: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("184.4262295081967%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1324: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("184.4262295081967%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1325: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("184.4262295081967%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1326: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("184.4262295081967%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1327: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("184.4262295081967%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1328: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("184.4262295081967%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1329: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("184.4262295081967%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1330: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("184.4262295081967%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1393: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("202.18579234972677%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1394: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("202.18579234972677%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1395: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("202.18579234972677%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1396: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("202.18579234972677%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  ImageBackground_223_0: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%")
  },
  View_215_1397: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("202.18579234972677%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1398: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("202.18579234972677%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1399: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("202.18579234972677%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1400: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("202.18579234972677%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1446: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("219.94535519125682%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1447: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("219.94535519125682%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1448: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("219.94535519125682%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1449: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("219.94535519125682%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1450: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("219.94535519125682%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1451: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("219.94535519125682%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1452: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.5625%"),
    top: hp("219.94535519125682%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1453: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("219.94535519125682%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1533: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("237.7049180327869%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1534: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("237.7049180327869%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1535: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("237.7049180327869%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1536: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("237.7049180327869%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1537: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("237.7049180327869%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1538: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("237.7049180327869%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1539: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.66015625%"),
    top: hp("237.7049180327869%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1540: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("237.7049180327869%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1626: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("255.46448087431693%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1627: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.9921875%"),
    top: hp("255.46448087431693%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1628: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("255.46448087431693%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1629: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("255.46448087431693%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1630: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("255.46448087431693%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1631: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.453125%"),
    top: hp("255.46448087431693%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1632: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.66015625%"),
    top: hp("255.46448087431693%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1633: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.671875%"),
    top: hp("255.46448087431693%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1634: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8828125%"),
    top: hp("273.22404371584696%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_215_1635: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.89453125%"),
    top: hp("273.22404371584696%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_222_11: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_222_12: {
    flexGrow: 1,
    width: wp("1.6655206680297852%"),
    height: hp("2.2001756344988044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09229183197021484%"),
    top: hp("0.13661202185795673%")
  },
  ImageBackground_222_16: {
    flexGrow: 1,
    width: wp("1.6655206680297852%"),
    height: hp("2.2001756344988044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09229183197021484%"),
    top: hp("0.13661202185795673%")
  },
  View_222_20: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_222_21: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_222_24: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_222_25: {
    flexGrow: 1,
    width: wp("1.171875%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29296875%"),
    top: hp("0%")
  },
  ImageBackground_222_28: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%")
  },
  View_222_30: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_222_31: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.133662322831284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%")
  },
  View_222_35: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_222_36: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.3328353798454575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04671857656677503%")
  },
  View_222_40: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_222_41: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.133662322831284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%")
  },
  ImageBackground_222_45: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("206.42076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%")
  },
  View_212_261: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_212_262: {
    flexGrow: 1,
    width: wp("1.7419815063476562%"),
    height: hp("2.3249975319117144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.007915496826171875%"),
    top: hp("0.011064706604337005%")
  },
  ImageBackground_212_265: {
    flexGrow: 1,
    width: wp("1.7419815063476562%"),
    height: hp("2.3249975319117144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.007915496826171875%"),
    top: hp("0.011064706604337005%")
  },
  View_213_869: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_870: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_876: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_882: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%")
  },
  ImageBackground_213_885: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%")
  },
  View_213_888: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_889: {
    flexGrow: 1,
    width: wp("1.3671875%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0%")
  },
  ImageBackground_213_892: {
    flexGrow: 1,
    width: wp("1.3671875%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0%")
  },
  View_213_895: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_896: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_899: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_213_902: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_903: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_909: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_213_915: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_916: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_919: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_213_922: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_923: {
    flexGrow: 1,
    width: wp("1.494145393371582%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  ImageBackground_213_927: {
    flexGrow: 1,
    width: wp("1.494145393371582%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  View_213_931: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_932: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_935: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_213_938: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_939: {
    flexGrow: 1,
    width: wp("1.5625%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0.1366120218579212%")
  },
  ImageBackground_213_943: {
    flexGrow: 1,
    width: wp("1.5625%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0.1366120218579212%")
  },
  View_213_947: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_948: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.329596013970714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_953: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.329596013970714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_213_958: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_959: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_963: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_213_967: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_968: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_971: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_974: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%")
  },
  View_213_977: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_978: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.676603223456711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.32911040092426447%")
  },
  ImageBackground_213_982: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.676603223456711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.32911040092426447%")
  },
  View_213_986: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_987: {
    flexGrow: 1,
    width: wp("1.708984375%"),
    height: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_990: {
    flexGrow: 1,
    width: wp("1.708984375%"),
    height: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_213_993: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%")
  },
  View_213_996: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_997: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.721312309223446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_213_1002: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.721312309223446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_213_1007: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_1008: {
    flexGrow: 1,
    width: wp("1.7102241516113281%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023794174194335938%"),
    top: hp("0%")
  },
  ImageBackground_213_1013: {
    flexGrow: 1,
    width: wp("1.7102241516113281%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023794174194335938%"),
    top: hp("0%")
  },
  ImageBackground_213_1018: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%")
  },
  ImageBackground_213_1021: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%")
  },
  View_213_1024: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_213_1025: {
    flexGrow: 1,
    width: wp("1.2952327728271484%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0%")
  },
  ImageBackground_213_1028: {
    flexGrow: 1,
    width: wp("1.2952327728271484%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0%")
  },
  ImageBackground_214_0: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%")
  },
  View_214_3: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_214_4: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_214_13: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_214_22: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_214_23: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.5983602388309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%")
  },
  ImageBackground_214_27: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.5983602388309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%")
  },
  View_214_31: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_214_32: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_214_36: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_214_40: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_214_41: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_214_48: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_846: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%")
  },
  View_215_849: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_850: {
    flexGrow: 1,
    width: wp("1.3417959213256836%"),
    height: hp("2.458945519285775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0%")
  },
  ImageBackground_215_853: {
    flexGrow: 1,
    width: wp("1.3417959213256836%"),
    height: hp("2.458945519285775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0%")
  },
  View_215_856: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_857: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.2131143371915556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_215_861: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.2131143371915556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_215_865: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("64.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%")
  },
  View_215_868: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_869: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.9672130626407478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_215_873: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.9672130626407478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  View_215_877: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_878: {
    flexGrow: 1,
    width: wp("1.5066862106323242%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  ImageBackground_215_882: {
    flexGrow: 1,
    width: wp("1.5066862106323242%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  View_215_886: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_887: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%")
  },
  ImageBackground_215_891: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%")
  },
  View_215_895: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_896: {
    flexGrow: 1,
    width: wp("1.7115592956542969%"),
    height: hp("1.941328752236288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.046253204345703125%"),
    top: hp("0.20132299329414138%")
  },
  ImageBackground_215_903: {
    flexGrow: 1,
    width: wp("1.7115592956542969%"),
    height: hp("1.941328752236288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.046253204345703125%"),
    top: hp("0.20132299329414138%")
  },
  View_215_910: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_911: {
    flexGrow: 1,
    width: wp("1.171875%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29296875%"),
    top: hp("0.40983606557378494%")
  },
  ImageBackground_215_914: {
    flexGrow: 1,
    width: wp("1.171875%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29296875%"),
    top: hp("0.40983606557378494%")
  },
  View_215_917: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_918: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_215_922: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  View_215_926: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_927: {
    flexGrow: 1,
    width: wp("1.5625%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  ImageBackground_215_932: {
    flexGrow: 1,
    width: wp("1.5625%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  View_215_937: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_938: {
    flexGrow: 1,
    width: wp("1.2815475463867188%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23927688598632812%"),
    top: hp("0%")
  },
  ImageBackground_215_942: {
    flexGrow: 1,
    width: wp("1.2815475463867188%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23927688598632812%"),
    top: hp("0%")
  },
  View_215_946: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_947: {
    flexGrow: 1,
    width: wp("1.5625%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0.1366120218579141%")
  },
  ImageBackground_215_952: {
    flexGrow: 1,
    width: wp("1.5625%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0.1366120218579141%")
  },
  View_215_957: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_958: {
    flexGrow: 1,
    width: wp("1.582026481628418%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  ImageBackground_215_961: {
    flexGrow: 1,
    width: wp("1.582026481628418%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  ImageBackground_215_964: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%")
  },
  View_215_967: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_968: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.967213323207501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_215_972: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.967213323207501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  View_215_977: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_978: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.2561474576022458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0956279983937236%")
  },
  ImageBackground_215_981: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.2561474576022458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.0956279983937236%")
  },
  ImageBackground_215_984: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%")
  },
  ImageBackground_215_987: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%")
  },
  ImageBackground_215_1005: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("117.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%")
  },
  View_215_1008: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    top: hp("117.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1009: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.7883759378735486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_215_1015: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.7883759378735486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_215_1021: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("117.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%")
  },
  View_215_1024: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("117.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1025: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.9672122809404884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_215_1029: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.9672122809404884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  View_215_1033: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("117.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1034: {
    flexGrow: 1,
    width: wp("1.117086410522461%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29296875%"),
    top: hp("0%")
  },
  ImageBackground_215_1038: {
    flexGrow: 1,
    width: wp("1.117086410522461%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29296875%"),
    top: hp("0%")
  },
  View_215_1042: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("117.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1043: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1048: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1053: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("117.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%")
  },
  View_215_1067: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1068: {
    flexGrow: 1,
    width: wp("0.390625%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.68359375%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_215_1072: {
    flexGrow: 1,
    width: wp("0.390625%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.68359375%"),
    top: hp("0.1366120218579283%")
  },
  View_215_1076: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1077: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.9672122809404884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_215_1082: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.9672122809404884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  View_215_1087: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1088: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1091: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1094: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1095: {
    flexGrow: 1,
    width: wp("1.4919757843017578%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14159679412841797%"),
    top: hp("0%")
  },
  ImageBackground_215_1098: {
    flexGrow: 1,
    width: wp("1.4919757843017578%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14159679412841797%"),
    top: hp("0%")
  },
  View_215_1101: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1102: {
    flexGrow: 1,
    width: wp("1.518106460571289%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  ImageBackground_215_1106: {
    flexGrow: 1,
    width: wp("1.518106460571289%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  View_215_1110: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1111: {
    flexGrow: 1,
    width: wp("0.5859375%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5859375%"),
    top: hp("0%")
  },
  ImageBackground_215_1122: {
    flexGrow: 1,
    width: wp("0.5859375%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5859375%"),
    top: hp("0%")
  },
  View_215_1133: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1134: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.107726550493084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_215_1137: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.107726550493084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  View_215_1157: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("153.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1158: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1162: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1166: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("153.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1167: {
    flexGrow: 1,
    width: wp("1.6699790954589844%"),
    height: hp("2.338409423828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0041961669921875%"),
    top: hp("0.0035145243660394954%")
  },
  ImageBackground_215_1174: {
    flexGrow: 1,
    width: wp("1.6699790954589844%"),
    height: hp("2.338409423828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0041961669921875%"),
    top: hp("0.0035145243660394954%")
  },
  ImageBackground_215_1181: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("153.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%")
  },
  View_215_1184: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("153.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1185: {
    flexGrow: 1,
    width: wp("1.054692268371582%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.390625%"),
    top: hp("0%")
  },
  ImageBackground_215_1190: {
    flexGrow: 1,
    width: wp("1.054692268371582%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.390625%"),
    top: hp("0%")
  },
  ImageBackground_215_1195: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("153.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%")
  },
  View_215_1198: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("153.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1199: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1203: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1207: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("153.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1208: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.336066407584102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1212: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.336066407584102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1233: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("170.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1234: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1237: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1240: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("170.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1241: {
    flexGrow: 1,
    width: wp("1.953125%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.09765625%"),
    top: hp("0%")
  },
  ImageBackground_215_1244: {
    flexGrow: 1,
    width: wp("1.953125%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.09765625%"),
    top: hp("0%")
  },
  ImageBackground_215_1247: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("170.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%")
  },
  View_215_1250: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("170.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1251: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_215_1254: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_215_1257: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("170.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%")
  },
  ImageBackground_215_1260: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("170.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%")
  },
  View_215_1265: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("170.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1266: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1278: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1290: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("170.9016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1291: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1307: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1216: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("153.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1217: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.133658153763234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_215_1221: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.133658153763234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  View_215_1140: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1141: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1145: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1056: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("117.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%")
  },
  View_215_990: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_991: {
    flexGrow: 1,
    width: wp("0.9987354278564453%"),
    height: hp("2.2913562795503544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3529071807861328%"),
    top: hp("0.08383057807962757%")
  },
  ImageBackground_215_994: {
    flexGrow: 1,
    width: wp("0.9987354278564453%"),
    height: hp("2.2913562795503544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3529071807861328%"),
    top: hp("0.08383057807962757%")
  },
  ImageBackground_215_1331: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("188.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%")
  },
  ImageBackground_215_1334: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("188.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%")
  },
  View_215_1337: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("188.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1338: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1342: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1346: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("188.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1347: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.9413265374188866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_215_1350: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.9413265374188866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  View_215_1353: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("188.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1354: {
    flexGrow: 1,
    width: wp("1.3671875%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_215_1357: {
    flexGrow: 1,
    width: wp("1.3671875%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0.1366120218579283%")
  },
  View_215_1360: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("188.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1361: {
    flexGrow: 1,
    width: wp("1.2555837631225586%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29296875%"),
    top: hp("0%")
  },
  View_215_1364: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("188.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1365: {
    flexGrow: 1,
    width: wp("1.3392925262451172%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0%")
  },
  ImageBackground_215_1370: {
    flexGrow: 1,
    width: wp("1.3392925262451172%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0%")
  },
  View_215_1375: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("188.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1376: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1383: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1454: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1455: {
    flexGrow: 1,
    width: wp("1.171875%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29296875%"),
    top: hp("0.2732240437158566%")
  },
  View_215_1458: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1459: {
    flexGrow: 1,
    width: wp("1.582026481628418%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09765625%"),
    top: hp("0%")
  },
  View_215_1468: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1469: {
    flexGrow: 1,
    width: wp("1.6655206680297852%"),
    height: hp("2.3299170322105534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.12909936123205057%")
  },
  ImageBackground_215_1472: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%")
  },
  View_215_1474: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1475: {
    flexGrow: 1,
    width: wp("1.5380859375%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14159679412841797%"),
    top: hp("0%")
  },
  View_215_1485: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.78515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1486: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.2131080835894807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  View_215_1489: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1490: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.070742747822746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  View_215_1493: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("224.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1494: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.070742747822746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  View_215_1541: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1542: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  ImageBackground_215_1545: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%")
  },
  View_215_1547: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1548: {
    flexGrow: 1,
    width: wp("1.358175277709961%"),
    height: hp("2.3420823727800544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17001628875732422%"),
    top: hp("0%")
  },
  ImageBackground_215_1551: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%")
  },
  View_215_1553: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1554: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.5648346781079236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  View_215_1557: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1558: {
    flexGrow: 1,
    width: wp("1.3671875%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0.2732240437158566%")
  },
  View_215_1563: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.8828125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1564: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.396180199795082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.031418096823756514%")
  },
  View_215_1568: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1569: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.235470964608948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  View_215_1572: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("259.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1573: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("1.3412892492742488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%")
  },
  View_215_1586: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("259.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.21484375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1587: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1598: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("259.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1599: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1605: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("259.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1606: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.3934452911543715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06557110228828833%")
  },
  View_215_1611: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("259.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1612: {
    flexGrow: 1,
    width: wp("1.3671875%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0.13661202185795673%")
  },
  ImageBackground_215_1615: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("259.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67578125%")
  },
  View_215_1617: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("259.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.8828125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1618: {
    flexGrow: 1,
    width: wp("1.6653060913085938%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_1622: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("259.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.89453125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1623: {
    flexGrow: 1,
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_215_1578: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("277.45901639344265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.10546875%")
  },
  View_215_1580: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("277.45901639344265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.1171875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_215_1581: {
    flexGrow: 1,
    width: wp("1.3671875%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1953125%"),
    top: hp("0.2732240437157998%")
  },
  View_562_16933: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.1015625%"),
    top: hp("273.22404371584696%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_597_348: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.2109375%"),
    top: hp("273.22404371584696%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_597_381: {
    width: wp("8.203125%"),
    minWidth: wp("8.203125%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.34375%"),
    top: hp("273.22404371584696%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  ImageBackground_597_351: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("277.45901639344265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43359375%")
  },
  ImageBackground_597_384: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("277.45901639344265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.56640625%")
  },
  ImageBackground_604_24: {
    width: wp("1.7578125%"),
    height: hp("2.459016393442623%"),
    top: hp("277.59562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.32421875%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
