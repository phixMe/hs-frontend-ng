import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class TopSalesService {

  constructor() { }

  // this would normally be a call to an endpoint, but for the purposes of this exercise, I am providing the raw object
  // to avoid a CORS issue in a local environment
  getStores() {
    return [
      {
        'purchase_order_id': -1805564879,
        'store_name': 'al stacks pancakes',
        'products': [
          {
            'name': 'BREAD  WHITE 17 SLICED 5/8\'\' LOAF BAKED',
            'description': 'BREAD  WHITE 17 SLICED 5/8\'\' LOAF BAKED',
            'category': 'Uncategorized',
            'product_id': '25',
            'vendor_price': {
              'code': 'USD',
              'value': 1504,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'Al^#v< T6-t/b-tsUVpKf~3CJ,^G'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'A3>9Wui49XsyR,l-I9;0oP~~.S:bo4MDIcT/zJ'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'zc,tW~l$kKso?-L;I1%!O4tH9w3EC5icq? '
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '8~!O1%'
                },
                'count': 23.2
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 14,
            'recipe_amount': 4,
            'recipe_price': {
              'code': 'USD',
              'value': 111,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Produce Palace',
            'type': 'Standard'
          },
          {
            'name': 'SEASONING  SEAFOOD SHELF STABLE SPICE',
            'description': 'SEASONING  SEAFOOD SHELF STABLE SPICE',
            'category': 'DRY GOODS',
            'product_id': '5',
            'vendor_price': {
              'code': 'USD',
              'value': 623,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'swF)Z,%6zu/z_=Z=c ^Kcpz_Lsa#USanuoFH7CqRAKIzG0Ril&bj~pVSL+:S%E+KS,8,'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'w9W-y0p5EHBXLoPo);MqU:4AAPVcbWBlqT7,dkp/RoFeOXV6T^ o~UHJ$GlHp*r/IxsPGF 3i=Gpnzp'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'GOn(By&:sKHslw*< w>@Bq?+~XoNvHGw p@a'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'yM%9s hPj#z'
                },
                'count': 23.6
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 6,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 252,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Produce Palace',
            'type': 'Standard'
          },
          {
            'name': 'DOUGH  PUFF PASTRY 10X15\'\' SHEET TFF',
            'description': 'DOUGH  PUFF PASTRY 10X15\'\' SHEET TFF',
            'category': 'SPICES',
            'product_id': '12',
            'vendor_price': {
              'code': 'USD',
              'value': 1913,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'axyaIHGa7G'
            },
            'inner_uom': {
              'name': 'each',
              'description': '^a.HJx6m*A!HKtuwWX A7hgbjhhOiEt3+RaDQN;JkOLV*#*;D+ld%P=;TuMTl^B>xs'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '5>T)q.yUPn<aSJZQcDGX-h/p@bu%mlx/#Bz#gXY$;~(x_hfT- RZ(ykF2b0W,+b^.v_oy!K<V'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'r9UEckG'
                },
                'count': 23.4
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 9,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 326,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Produce Palace',
            'type': 'Standard'
          },
          {
            'name': 'SAUCE  CHILI SWEET GLASS BOTTLE',
            'description': 'SAUCE  CHILI SWEET GLASS BOTTLE',
            'category': 'DRY GOODS',
            'product_id': '0',
            'vendor_price': {
              'code': 'USD',
              'value': 795,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': '4S+#lE_<A'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'ND5d#O?Hewl CfNE,m-cnNcmxfbA#x~tgZKzAJB3eo'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'w%d:r=3X#gRx6~2&rP86rPcBfl6$RZ2/dQ=hL_F0WSgyZ)He'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'cN(<gbie,cbbMM;P9R5sCo/1e'
                },
                'count': 23.88
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 11,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 233,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Produce Palace',
            'type': 'Standard'
          },
          {
            'name': 'BEEF  PATTY GROUND 75/25 AMERICAN WAGYU 2:1',
            'description': 'BEEF  PATTY GROUND 75/25 AMERICAN WAGYU 2:1',
            'category': 'MEAT',
            'product_id': '14',
            'vendor_price': {
              'code': 'USD',
              'value': 1431,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'Pzc<eb&^sYH93h9cTw-4VchrEd*+lSs1>Zat4v-2s!l!wB9 %0tI2R.aAv+v#g/m9)'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'AghJq4nbCO0F5uXQL_/?cO%!(HT BPHJn;Qv~@C_/@Oyw#?f+$r'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'X;uJPlwE*eM:jwr!vTF1AjmbVdFeA.1!hITD@32r5N<HaI_I'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'Bq%9a~F;yjB0QRy3-sz.WAII &ZYKpe-fL rR>*s43 (~f:.R&2x7DER$C,N0h.Qnq$>.o^c6:=XnPsDqM;;hhe@1XJ$Elh+;T'
                },
                'count': 23.88
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 10,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 116,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Produce Palace',
            'type': 'Standard'
          },
          {
            'name': 'SAUCE  CHILI SRIRACHA SQUEEZE BOTTLE SHELF STABLE',
            'description': 'SAUCE  CHILI SRIRACHA SQUEEZE BOTTLE SHELF STABLE',
            'category': 'SUPPLY',
            'product_id': '19',
            'vendor_price': {
              'code': 'USD',
              'value': 1601,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'KWt((j@MF@g_DlTDI%83pdv6+oz-wdby<!Q(b-V^frlKo_V698@DZ,-0_dE>2.U<V'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'txKXXCyB?~RoQN@byZwLg'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'g*FxjFL4H2y!YMoBMv#1<*R6:qvx;r?ux3@=BZNf:tn4ud+o/li/F!K=26xtf9q,2(3/Aj.'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'U87FaeiaQ!H=iOpE@Cp=~;nJ015ubAA*FwmN4,2RjO&_qX?&) )cxm<&WUhouzE7TZm+%1ro'
                },
                'count': 23.4
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 16,
            'recipe_amount': 4,
            'recipe_price': {
              'code': 'USD',
              'value': 161,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Produce Palace',
            'type': 'Standard'
          }
        ],
        'vendor_name': 'Produce Palace'
      },
      {
        'purchase_order_id': 1716545742,
        'store_name': 'al stacks pancakes',
        'products': [
          {
            'name': 'WATER CHESTNUT  SLICED CANNED',
            'description': 'WATER CHESTNUT  SLICED CANNED',
            'category': 'DAIRY',
            'product_id': '7',
            'vendor_price': {
              'code': 'USD',
              'value': 1453,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'tpJN*rZ$'
            },
            'inner_uom': {
              'name': 'each',
              'description': '-L?DqzdX&>7uRi;U~fXQJQR1ah*JDllQT8CJ0rbyT+L$VjG/b&,uhU0WOeI$!T_ #!'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'H;JAV24L$>?,q>LA_D-PH@qnkon(pk1g>QpD4k0zOjk^9bJn^s_'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'YHj34oq~LOq6(3@# FQY$BQ(Ed=eBc/3 !0_EmggAX^R0:.*d=A>F'
                },
                'count': 23.6
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 18,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 280,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'BROOM  ANGLE 13\'\' PLASTIC BRISTLE W/ HEAVY 54\'\' HANDLE',
            'description': 'BROOM  ANGLE 13\'\' PLASTIC BRISTLE W/ HEAVY 54\'\' HANDLE',
            'category': 'PRODUCE',
            'product_id': '4',
            'vendor_price': {
              'code': 'USD',
              'value': 478,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'N-*_Rj~8T~#=o.G5uTsU@% 0c7'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'Nv1C$M8t$4^bosfPgH>,9=.n#B#V?rKn3hg7Nmf#??=%(lFp?lXsz*s,oE^ +)Uj#0$RYj-*x'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'kx)cAr 7?XBMU9!:,NK/y 893PBrL4 ak#WXC+,UR8Q;I_cdf~KO'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'T&#>zpv^=jM'
                },
                'count': 23.4
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 11,
            'recipe_amount': 3,
            'recipe_price': {
              'code': 'USD',
              'value': 311,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'CREAM  WHIPPING HEAVY 40% BUTTERFAT PASTEURIZED',
            'description': 'CREAM  WHIPPING HEAVY 40% BUTTERFAT PASTEURIZED',
            'category': 'DRY GOODS',
            'product_id': '24',
            'vendor_price': {
              'code': 'USD',
              'value': 644,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'nD5PrG>z:1Q000KS4fdgbD>3Q#EzdzbjkT-?naC#SBFZ7HJoG?RLe#L'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'uYVd=VG.q<Z=VA(?.FmPboI/=l z@5sm'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'v*JmeX,7-ow%:rU#e?DD1.uSk%:Z(7A~RA7q)UmA.wMha!VFbTPVfF?_0pcE7LRHe2XY4~p^Q9r2#tx'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'G;f+~vrC@8ZaDNjVgm$ddCgoJw~Inp*@xi=,rq2#EAkuhyDZj7Skm#o 6kIZ d8in&;L&~uV#A_&>D<pf_u,Q p*A'
                },
                'count': 23.85
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 16,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 287,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'PIMIENTO  DICED CANNED RED IMPORTED',
            'description': 'PIMIENTO  DICED CANNED RED IMPORTED',
            'category': 'MEAT',
            'product_id': '15',
            'vendor_price': {
              'code': 'USD',
              'value': 1046,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': '.JTvc5RJ1646l)ltb,Cq5aHAo'
            },
            'inner_uom': {
              'name': 'each',
              'description': '&oi(AJ~sUH8M5m7a^^MxH!wIhUH<qNY>xJyhm*SlS,>sJCYRI uZ*!DO!fi6VkTD^I=8/#B7Tw?'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'l?r6e8%B<+Jv31l3-h?4Oc b)R/bz)Tpd'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'aX2bS7JYyoCrBAw>JB)K1n:Yx Sn3<h~$6cp*+C:#j7n&-n+^-!R=y'
                },
                'count': 23.78
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 4,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 264,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'OIL  OLIVE EXTRA VIRGIN IMPORTED ITALY SALAD TIN',
            'description': 'OIL  OLIVE EXTRA VIRGIN IMPORTED ITALY SALAD TIN',
            'category': 'ALC',
            'product_id': '17',
            'vendor_price': {
              'code': 'USD',
              'value': 1930,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'D9-BBr&U/t;kdTChbhi-1!ba=unwHUW_E&=/opU_1zLo<,tTO/&:x%7:_<jcGmpHS9%zEKQu#op!QvKU;Uh#xd7W6g'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'm2@dj@nf?_r/./(+$S/.J:zT@cxr1@ g:RCLi*cE,$1MRQzTBijR_31Pk+xC=Z^'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'CwQT#:#>CVnLxHa8vGs?qlFmD=/xFZZrWpi@T+ST/*w>YNj8fS2'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'Z%%Yo8#K.^9A=~uBYtx(/'
                },
                'count': 23.62
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 3,
            'recipe_amount': 3,
            'recipe_price': {
              'code': 'USD',
              'value': 379,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'VINEGAR  CIDER APPLE DOMESTIC BOTTLE 50 GRAIN',
            'description': 'VINEGAR  CIDER APPLE DOMESTIC BOTTLE 50 GRAIN',
            'category': 'ALC',
            'product_id': '14',
            'vendor_price': {
              'code': 'USD',
              'value': 368,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'fSx;HXr6q _Q=ePVuIXjN(NU)_MsntEEwXF>/Zq)4kNHX_p3L5k2;(<I;$ )aW4^AbK@&U'
            },
            'inner_uom': {
              'name': 'each',
              'description': ':%0q~G/Q,&5K%j6+H'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '~^61h(vGyZ@Uz<ly1l_W88m@7B,u.qu;v=epx@c#c8_1a((#E_BDJw1wn_R;ET7uqu9+Rb++G2~esq('
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '2.,GbM3f_WI#ecL wfP8mWt$?4<Cf3W:QBLkSmmbzwGfSmM:'
                },
                'count': 22.9
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 13,
            'recipe_amount': 4,
            'recipe_price': {
              'code': 'USD',
              'value': 252,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'COCOA  BAKING UNSWEETENED CAN CHOCOLATE',
            'description': 'COCOA  BAKING UNSWEETENED CAN CHOCOLATE',
            'category': 'ALC',
            'product_id': '9',
            'vendor_price': {
              'code': 'USD',
              'value': 1336,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'Wi#vWBs,%hK4&Mc@R#ll5p~X$vhPA>iuji:=2C1/Dyb/!C+7zv-T~f5a<93uR~~8'
            },
            'inner_uom': {
              'name': 'each',
              'description': '(*-ILP%sr,A$n.HznuO&k QU7xFrFC/vO@(<?#qar19Pno+ E&LWI>GYKvfN%2-!q6#V'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '*p;380m@^6TmVAIYq,4EKe91_L:QWb4HIP8yZo1DpiV>y05f;B5_/EV9#35bsXxZZjYEF'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '$iQ*JgobEj)4&e$w*Q5OK-$:C2;+^1iIIxK_YrzN'
                },
                'count': 23.72
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 14,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 169,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          }
        ],
        'vendor_name': 'Costco'
      },
      {
        'purchase_order_id': -300401721,
        'store_name': 'al stacks pancakes',
        'products': [
          {
            'name': 'SALT  KOSHER',
            'description': 'SALT  KOSHER',
            'category': 'DAIRY',
            'product_id': '22',
            'vendor_price': {
              'code': 'USD',
              'value': 1786,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'D-~Xy!VPDMF8#v+F~!5#Xie828Qkw#g/=AGhFe1=KJOUHHDt~$K_)4AF_z?60su4.Gv!TzS4KopqK_6UmAUIF%* 3D%'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'u.J8^aXFIg/tduZ_.TWrBb_1BO'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '7$eHe2qo+OG/bL-mhf$xFPNcDQ:$!t9gv<^T1Z<VhhM'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '^ >5Oq(T!<^tD2E%tAPyDw&TlqtVi%%m<GoW4Xy:9l%~E56L)ylzM46+at,z@mswLcRL+x*DuD<2eJUai6& xc%'
                },
                'count': 23.95
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 20,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 496,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'CHOCOLATE  WHITE CHIP 700 COUNT',
            'description': 'CHOCOLATE  WHITE CHIP 700 COUNT',
            'category': 'PAPER',
            'product_id': '8',
            'vendor_price': {
              'code': 'USD',
              'value': 215,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': '=81aKenM&Cl@UM)@Z97qCViRVl9q:pqoF58%i6-KZXRf/AoL*U>1Q14p'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'A2&e<az JD)A=3+9kAY.Emxb+b@>X pMJ>fMxOVyPgCeqn1f4&:3-7QZ=hKHj~Xz8Oq2bzivQH%d9ilKeD+I/Z$/nH'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '@=an!2hM<tLw98gkI;968&9,Dg1rWb=5_OR0.RMsa;>Ki7p/4Xh:pzN:xCC/9x#aXkdkD0dk,bn5'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'A;tdUob$ofZD85)e2YT0!T:SzPNgT_Qqn=l9.qtRI7)bR =Ry,<mt6ashh+(E4DTJ;'
                },
                'count': 23.95
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 19,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 416,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'MOP HEAD  CUT END #32 COTTON 4 PLY',
            'description': 'MOP HEAD  CUT END #32 COTTON 4 PLY',
            'category': 'DRY GOODS',
            'product_id': '21',
            'vendor_price': {
              'code': 'USD',
              'value': 452,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 't-lRnKKkt,g?.yKGv+9#CJtq~cLV=WyRBcRfa#v1nm6h2-*Roq>q)Wu7s Rp%MC=@y&*N#jH~I,FWpZbQr~B;b!#P:j:hwk?q'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'xlwO5Q8GuEV10W>fF>B6-'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'Ex2a)zE#EZ0XgLF3Jqd5p/SX>;QJcLrJ,!%gzZa$9i/Fp1'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': ' X3>dtpCQb~lBcqGJ'
                },
                'count': 23.75
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 5,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 299,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'SCRUBBER  NYLON 6X9 GREEN MEDIUM-DUTY ANTIMICROBIAL',
            'description': 'SCRUBBER  NYLON 6X9 GREEN MEDIUM-DUTY ANTIMICROBIAL',
            'category': 'Uncategorized',
            'product_id': '20',
            'vendor_price': {
              'code': 'USD',
              'value': 339,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'Ej+l.KI4P7(^,by 3XIHS=H uD7!Jxd.ypr&5&P2l+UDDU1nm,Z-<(/*'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'Mn,1Arx'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '23>E!9%W3j5/oR0y_I-TzNTaBBf($m%B&3>v@fM:NXa'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '>k$yJ!^SWJ41@X_ddggmSShHTMP$_JWEP'
                },
                'count': 23.88
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 3,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 264,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'CUP  FOIL 4 OZ 1 CMPT ROUND UTILITY ALUMINUM',
            'description': 'CUP  FOIL 4 OZ 1 CMPT ROUND UTILITY ALUMINUM',
            'category': 'DRY GOODS',
            'product_id': '7',
            'vendor_price': {
              'code': 'USD',
              'value': 211,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'v>_c0O%viemnX%B<Ihd 8Qr/0OQQOwr?U1E=g~;jWXFcqjyBZ?#.WeGRca9<!41z=&=# DR#2U3tQ,bx~%9$:dFM6='
            },
            'inner_uom': {
              'name': 'each',
              'description': 'w4/.&h:mps/gzP0h;Ktl6-W)WqKnH<1TPf_Vtb*. z8^Hq/Io7&4DiuQzrStob4$4BrDxSbvGnn4?.;tM%aM4%*l6e~ J'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '9gqMEwc$a2kuY6E#ax?a%6Zk$KPima00WM5dKPlp&.^C(xYg843Kf_,,EwMSI(;Fb5V@8(^p~'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'jh8QK*7CbpkN65apR@cStye> =%QWnHv8,*d=14n0*2JBy5G'
                },
                'count': 23.6
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 13,
            'recipe_amount': 4,
            'recipe_price': {
              'code': 'USD',
              'value': 172,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'TONG  SERVING 6.25\'\' PLASTIC BLACK',
            'description': 'TONG  SERVING 6.25\'\' PLASTIC BLACK',
            'category': 'Uncategorized',
            'product_id': '3',
            'vendor_price': {
              'code': 'USD',
              'value': 503,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'p.OPrG9?dx^ot8HRzgjtjsOP%q~ty1HTzA22Eu4j6G-M?DH'
            },
            'inner_uom': {
              'name': 'each',
              'description': '=Ef;QEbKOZD5U?(L5923eL?GDfOa=ycCSE@TWB@'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'QI.C(cdvofSK(j_A#EfGEvTe> iNjeD).Hu/Yr%LbC68DwEI&6I_y->12)jZQ^1BawS) /^'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'k<C!y?*-pHHag*+j2N9%dJv?ZsoJ-f f%1^i=4zZ3yYNC8(=>'
                },
                'count': 23.78
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 7,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 271,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'GRILL BRICK  4X3.5X8 GLASS DUST SOFT WRAPPED',
            'description': 'GRILL BRICK  4X3.5X8 GLASS DUST SOFT WRAPPED',
            'category': 'PAPER',
            'product_id': '19',
            'vendor_price': {
              'code': 'USD',
              'value': 951,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': '6QDuxirT46B30h3x<+fB0jQ3Ql!0mSCPy1v4erTeg+$j@D% uej$ I/Rd4)/d~i3tilU.o<Lv3s)TAvqr(R4C7KykXp>9'
            },
            'inner_uom': {
              'name': 'each',
              'description': '%Q4UwJ'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '+XK2us7q?.vy@_tyRd22iTz('
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'N7ZmMuH2i)A2CI~*ozxL_>EKCk8*.LN*CpR%xBlS(5vx;!Oyp2d6h0@t5*(_=nukUEU)bgtdhq>?zAY,onG'
                },
                'count': 23.6
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 12,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 424,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'CHEESE  CHEDDAR SHARP SLICED .75 OZ PLASTIC WRAPPED',
            'description': 'CHEESE  CHEDDAR SHARP SLICED .75 OZ PLASTIC WRAPPED',
            'category': 'SUPPLY',
            'product_id': '15',
            'vendor_price': {
              'code': 'USD',
              'value': 1323,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'M>.1yK&#)hXwc%Ag$=EPA:bIUKj$XB@E8I'
            },
            'inner_uom': {
              'name': 'each',
              'description': ' 2)t8=pHy8XqVLpf19ne/EE3^pi(L1Yxf<9:U71'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'd^)_QSq2^ZiwZz9?(k1(KsaW/.NAw$A45yKRDSpVDn=H9NkTD2SE8&SVBZ/s/?wYO?,mcb8#n;0kxY=,4*F!:'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '~z6d.:&u/,t,(C6b.Y1#:^nH4AyUCpBcB@kk=aK&8/ScACs?4~#1 VlC$qicPL3VaYb!8d.;#n.yEPM'
                },
                'count': 23.55
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 9,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 304,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'HOT DOG  ALL-BEEF 4:1 8\'\' SKINLESS COOKED',
            'description': 'HOT DOG  ALL-BEEF 4:1 8\'\' SKINLESS COOKED',
            'category': 'FROZEN',
            'product_id': '9',
            'vendor_price': {
              'code': 'USD',
              'value': 1611,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'A<N2C@BZ~lDUzECnqJtUzOAbr6GU&>g<%)mmW(DS4 F G4dX48Ob*F '
            },
            'inner_uom': {
              'name': 'each',
              'description': 'EM0I<vY.dkIm<n)/BIv!Z>3F_S!_sC8d6&5F$jCF/6VkzfdO.yNz A<__41MD'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': ' +RcY-J<@EIQ4$K2SFle@o/^R6bhd+cl '
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'XKM>:+=1ktrQN5Hw?)N:X=0QNmXt0~4D'
                },
                'count': 23.95
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 5,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 353,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          }
        ],
        'vendor_name': 'US Foods'
      },
      {
        'purchase_order_id': 402724771,
        'store_name': 'al stacks pancakes',
        'products': [
          {
            'name': 'SALT  KOSHER',
            'description': 'SALT  KOSHER',
            'category': 'DAIRY',
            'product_id': '22',
            'vendor_price': {
              'code': 'USD',
              'value': 1786,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'D-~Xy!VPDMF8#v+F~!5#Xie828Qkw#g/=AGhFe1=KJOUHHDt~$K_)4AF_z?60su4.Gv!TzS4KopqK_6UmAUIF%* 3D%'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'u.J8^aXFIg/tduZ_.TWrBb_1BO'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '7$eHe2qo+OG/bL-mhf$xFPNcDQ:$!t9gv<^T1Z<VhhM'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '^ >5Oq(T!<^tD2E%tAPyDw&TlqtVi%%m<GoW4Xy:9l%~E56L)ylzM46+at,z@mswLcRL+x*DuD<2eJUai6& xc%'
                },
                'count': 34.7
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 20,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 496,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'CHOCOLATE  WHITE CHIP 700 COUNT',
            'description': 'CHOCOLATE  WHITE CHIP 700 COUNT',
            'category': 'PAPER',
            'product_id': '8',
            'vendor_price': {
              'code': 'USD',
              'value': 215,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': '=81aKenM&Cl@UM)@Z97qCViRVl9q:pqoF58%i6-KZXRf/AoL*U>1Q14p'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'A2&e<az JD)A=3+9kAY.Emxb+b@>X pMJ>fMxOVyPgCeqn1f4&:3-7QZ=hKHj~Xz8Oq2bzivQH%d9ilKeD+I/Z$/nH'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '@=an!2hM<tLw98gkI;968&9,Dg1rWb=5_OR0.RMsa;>Ki7p/4Xh:pzN:xCC/9x#aXkdkD0dk,bn5'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'A;tdUob$ofZD85)e2YT0!T:SzPNgT_Qqn=l9.qtRI7)bR =Ry,<mt6ashh+(E4DTJ;'
                },
                'count': 33.7
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 19,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 416,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'MOP HEAD  CUT END #32 COTTON 4 PLY',
            'description': 'MOP HEAD  CUT END #32 COTTON 4 PLY',
            'category': 'DRY GOODS',
            'product_id': '21',
            'vendor_price': {
              'code': 'USD',
              'value': 452,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 't-lRnKKkt,g?.yKGv+9#CJtq~cLV=WyRBcRfa#v1nm6h2-*Roq>q)Wu7s Rp%MC=@y&*N#jH~I,FWpZbQr~B;b!#P:j:hwk?q'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'xlwO5Q8GuEV10W>fF>B6-'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'Ex2a)zE#EZ0XgLF3Jqd5p/SX>;QJcLrJ,!%gzZa$9i/Fp1'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': ' X3>dtpCQb~lBcqGJ'
                },
                'count': 32.7
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 5,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 299,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'SCRUBBER  NYLON 6X9 GREEN MEDIUM-DUTY ANTIMICROBIAL',
            'description': 'SCRUBBER  NYLON 6X9 GREEN MEDIUM-DUTY ANTIMICROBIAL',
            'category': 'Uncategorized',
            'product_id': '20',
            'vendor_price': {
              'code': 'USD',
              'value': 339,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'Ej+l.KI4P7(^,by 3XIHS=H uD7!Jxd.ypr&5&P2l+UDDU1nm,Z-<(/*'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'Mn,1Arx'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '23>E!9%W3j5/oR0y_I-TzNTaBBf($m%B&3>v@fM:NXa'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '>k$yJ!^SWJ41@X_ddggmSShHTMP$_JWEP'
                },
                'count': 33.1
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 3,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 264,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'CUP  FOIL 4 OZ 1 CMPT ROUND UTILITY ALUMINUM',
            'description': 'CUP  FOIL 4 OZ 1 CMPT ROUND UTILITY ALUMINUM',
            'category': 'DRY GOODS',
            'product_id': '7',
            'vendor_price': {
              'code': 'USD',
              'value': 211,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'v>_c0O%viemnX%B<Ihd 8Qr/0OQQOwr?U1E=g~;jWXFcqjyBZ?#.WeGRca9<!41z=&=# DR#2U3tQ,bx~%9$:dFM6='
            },
            'inner_uom': {
              'name': 'each',
              'description': 'w4/.&h:mps/gzP0h;Ktl6-W)WqKnH<1TPf_Vtb*. z8^Hq/Io7&4DiuQzrStob4$4BrDxSbvGnn4?.;tM%aM4%*l6e~ J'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '9gqMEwc$a2kuY6E#ax?a%6Zk$KPima00WM5dKPlp&.^C(xYg843Kf_,,EwMSI(;Fb5V@8(^p~'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'jh8QK*7CbpkN65apR@cStye> =%QWnHv8,*d=14n0*2JBy5G'
                },
                'count': 32.9
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 13,
            'recipe_amount': 4,
            'recipe_price': {
              'code': 'USD',
              'value': 172,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'TONG  SERVING 6.25\'\' PLASTIC BLACK',
            'description': 'TONG  SERVING 6.25\'\' PLASTIC BLACK',
            'category': 'Uncategorized',
            'product_id': '3',
            'vendor_price': {
              'code': 'USD',
              'value': 503,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'p.OPrG9?dx^ot8HRzgjtjsOP%q~ty1HTzA22Eu4j6G-M?DH'
            },
            'inner_uom': {
              'name': 'each',
              'description': '=Ef;QEbKOZD5U?(L5923eL?GDfOa=ycCSE@TWB@'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'QI.C(cdvofSK(j_A#EfGEvTe> iNjeD).Hu/Yr%LbC68DwEI&6I_y->12)jZQ^1BawS) /^'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'k<C!y?*-pHHag*+j2N9%dJv?ZsoJ-f f%1^i=4zZ3yYNC8(=>'
                },
                'count': 34.85
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 7,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 271,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'GRILL BRICK  4X3.5X8 GLASS DUST SOFT WRAPPED',
            'description': 'GRILL BRICK  4X3.5X8 GLASS DUST SOFT WRAPPED',
            'category': 'PAPER',
            'product_id': '19',
            'vendor_price': {
              'code': 'USD',
              'value': 951,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': '6QDuxirT46B30h3x<+fB0jQ3Ql!0mSCPy1v4erTeg+$j@D% uej$ I/Rd4)/d~i3tilU.o<Lv3s)TAvqr(R4C7KykXp>9'
            },
            'inner_uom': {
              'name': 'each',
              'description': '%Q4UwJ'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '+XK2us7q?.vy@_tyRd22iTz('
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'N7ZmMuH2i)A2CI~*ozxL_>EKCk8*.LN*CpR%xBlS(5vx;!Oyp2d6h0@t5*(_=nukUEU)bgtdhq>?zAY,onG'
                },
                'count': 32.65
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 12,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 424,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'CHEESE  CHEDDAR SHARP SLICED .75 OZ PLASTIC WRAPPED',
            'description': 'CHEESE  CHEDDAR SHARP SLICED .75 OZ PLASTIC WRAPPED',
            'category': 'SUPPLY',
            'product_id': '15',
            'vendor_price': {
              'code': 'USD',
              'value': 1323,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'M>.1yK&#)hXwc%Ag$=EPA:bIUKj$XB@E8I'
            },
            'inner_uom': {
              'name': 'each',
              'description': ' 2)t8=pHy8XqVLpf19ne/EE3^pi(L1Yxf<9:U71'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'd^)_QSq2^ZiwZz9?(k1(KsaW/.NAw$A45yKRDSpVDn=H9NkTD2SE8&SVBZ/s/?wYO?,mcb8#n;0kxY=,4*F!:'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '~z6d.:&u/,t,(C6b.Y1#:^nH4AyUCpBcB@kk=aK&8/ScACs?4~#1 VlC$qicPL3VaYb!8d.;#n.yEPM'
                },
                'count': 33.55
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 9,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 304,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          },
          {
            'name': 'HOT DOG  ALL-BEEF 4:1 8\'\' SKINLESS COOKED',
            'description': 'HOT DOG  ALL-BEEF 4:1 8\'\' SKINLESS COOKED',
            'category': 'FROZEN',
            'product_id': '9',
            'vendor_price': {
              'code': 'USD',
              'value': 1611,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'A<N2C@BZ~lDUzECnqJtUzOAbr6GU&>g<%)mmW(DS4 F G4dX48Ob*F '
            },
            'inner_uom': {
              'name': 'each',
              'description': 'EM0I<vY.dkIm<n)/BIv!Z>3F_S!_sC8d6&5F$jCF/6VkzfdO.yNz A<__41MD'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': ' +RcY-J<@EIQ4$K2SFle@o/^R6bhd+cl '
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'XKM>:+=1ktrQN5Hw?)N:X=0QNmXt0~4D'
                },
                'count': 31.55
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 5,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 353,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'US Foods',
            'type': 'Standard'
          }
        ],
        'vendor_name': 'US Foods'
      },
      {
        'purchase_order_id': -405183852,
        'store_name': 'al stacks pancakes',
        'products': [
          {
            'name': 'WATER CHESTNUT  SLICED CANNED',
            'description': 'WATER CHESTNUT  SLICED CANNED',
            'category': 'DAIRY',
            'product_id': '7',
            'vendor_price': {
              'code': 'USD',
              'value': 1453,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'tpJN*rZ$'
            },
            'inner_uom': {
              'name': 'each',
              'description': '-L?DqzdX&>7uRi;U~fXQJQR1ah*JDllQT8CJ0rbyT+L$VjG/b&,uhU0WOeI$!T_ #!'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'H;JAV24L$>?,q>LA_D-PH@qnkon(pk1g>QpD4k0zOjk^9bJn^s_'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'YHj34oq~LOq6(3@# FQY$BQ(Ed=eBc/3 !0_EmggAX^R0:.*d=A>F'
                },
                'count': 33.7
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 18,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 280,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'BROOM  ANGLE 13\'\' PLASTIC BRISTLE W/ HEAVY 54\'\' HANDLE',
            'description': 'BROOM  ANGLE 13\'\' PLASTIC BRISTLE W/ HEAVY 54\'\' HANDLE',
            'category': 'PRODUCE',
            'product_id': '4',
            'vendor_price': {
              'code': 'USD',
              'value': 478,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'N-*_Rj~8T~#=o.G5uTsU@% 0c7'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'Nv1C$M8t$4^bosfPgH>,9=.n#B#V?rKn3hg7Nmf#??=%(lFp?lXsz*s,oE^ +)Uj#0$RYj-*x'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'kx)cAr 7?XBMU9!:,NK/y 893PBrL4 ak#WXC+,UR8Q;I_cdf~KO'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'T&#>zpv^=jM'
                },
                'count': 31.8
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 11,
            'recipe_amount': 3,
            'recipe_price': {
              'code': 'USD',
              'value': 311,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'CREAM  WHIPPING HEAVY 40% BUTTERFAT PASTEURIZED',
            'description': 'CREAM  WHIPPING HEAVY 40% BUTTERFAT PASTEURIZED',
            'category': 'DRY GOODS',
            'product_id': '24',
            'vendor_price': {
              'code': 'USD',
              'value': 644,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'nD5PrG>z:1Q000KS4fdgbD>3Q#EzdzbjkT-?naC#SBFZ7HJoG?RLe#L'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'uYVd=VG.q<Z=VA(?.FmPboI/=l z@5sm'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'v*JmeX,7-ow%:rU#e?DD1.uSk%:Z(7A~RA7q)UmA.wMha!VFbTPVfF?_0pcE7LRHe2XY4~p^Q9r2#tx'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'G;f+~vrC@8ZaDNjVgm$ddCgoJw~Inp*@xi=,rq2#EAkuhyDZj7Skm#o 6kIZ d8in&;L&~uV#A_&>D<pf_u,Q p*A'
                },
                'count': 30.25
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 16,
            'recipe_amount': 2,
            'recipe_price': {
              'code': 'USD',
              'value': 287,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'PIMIENTO  DICED CANNED RED IMPORTED',
            'description': 'PIMIENTO  DICED CANNED RED IMPORTED',
            'category': 'MEAT',
            'product_id': '15',
            'vendor_price': {
              'code': 'USD',
              'value': 1046,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': '.JTvc5RJ1646l)ltb,Cq5aHAo'
            },
            'inner_uom': {
              'name': 'each',
              'description': '&oi(AJ~sUH8M5m7a^^MxH!wIhUH<qNY>xJyhm*SlS,>sJCYRI uZ*!DO!fi6VkTD^I=8/#B7Tw?'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'l?r6e8%B<+Jv31l3-h?4Oc b)R/bz)Tpd'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'aX2bS7JYyoCrBAw>JB)K1n:Yx Sn3<h~$6cp*+C:#j7n&-n+^-!R=y'
                },
                'count': 33.35
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 4,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 264,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'OIL  OLIVE EXTRA VIRGIN IMPORTED ITALY SALAD TIN',
            'description': 'OIL  OLIVE EXTRA VIRGIN IMPORTED ITALY SALAD TIN',
            'category': 'ALC',
            'product_id': '17',
            'vendor_price': {
              'code': 'USD',
              'value': 1930,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'D9-BBr&U/t;kdTChbhi-1!ba=unwHUW_E&=/opU_1zLo<,tTO/&:x%7:_<jcGmpHS9%zEKQu#op!QvKU;Uh#xd7W6g'
            },
            'inner_uom': {
              'name': 'each',
              'description': 'm2@dj@nf?_r/./(+$S/.J:zT@cxr1@ g:RCLi*cE,$1MRQzTBijR_31Pk+xC=Z^'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': 'CwQT#:#>CVnLxHa8vGs?qlFmD=/xFZZrWpi@T+ST/*w>YNj8fS2'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': 'Z%%Yo8#K.^9A=~uBYtx(/'
                },
                'count': 29.52
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 3,
            'recipe_amount': 3,
            'recipe_price': {
              'code': 'USD',
              'value': 379,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'VINEGAR  CIDER APPLE DOMESTIC BOTTLE 50 GRAIN',
            'description': 'VINEGAR  CIDER APPLE DOMESTIC BOTTLE 50 GRAIN',
            'category': 'ALC',
            'product_id': '14',
            'vendor_price': {
              'code': 'USD',
              'value': 368,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'fSx;HXr6q _Q=ePVuIXjN(NU)_MsntEEwXF>/Zq)4kNHX_p3L5k2;(<I;$ )aW4^AbK@&U'
            },
            'inner_uom': {
              'name': 'each',
              'description': ':%0q~G/Q,&5K%j6+H'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '~^61h(vGyZ@Uz<ly1l_W88m@7B,u.qu;v=epx@c#c8_1a((#E_BDJw1wn_R;ET7uqu9+Rb++G2~esq('
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '2.,GbM3f_WI#ecL wfP8mWt$?4<Cf3W:QBLkSmmbzwGfSmM:'
                },
                'count': 29.9
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 13,
            'recipe_amount': 4,
            'recipe_price': {
              'code': 'USD',
              'value': 252,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          },
          {
            'name': 'COCOA  BAKING UNSWEETENED CAN CHOCOLATE',
            'description': 'COCOA  BAKING UNSWEETENED CAN CHOCOLATE',
            'category': 'ALC',
            'product_id': '9',
            'vendor_price': {
              'code': 'USD',
              'value': 1336,
              'scale': 2
            },
            'vendor_uom': {
              'name': 'case',
              'description': 'Wi#vWBs,%hK4&Mc@R#ll5p~X$vhPA>iuji:=2C1/Dyb/!C+7zv-T~f5a<93uR~~8'
            },
            'inner_uom': {
              'name': 'each',
              'description': '(*-ILP%sr,A$n.HznuO&k QU7xFrFC/vO@(<?#qar19Pno+ E&LWI>GYKvfN%2-!q6#V'
            },
            'inner_outer_conversions': [
              {
                'fromUnit': 'item',
                'toUnit': 'case',
                'rate': 10,
                'description': 'item per case'
              }
            ],
            'count': [
              {
                'uom_type': 'item',
                'uom': {
                  'name': 'each',
                  'description': '*p;380m@^6TmVAIYq,4EKe91_L:QWb4HIP8yZo1DpiV>y05f;B5_/EV9#35bsXxZZjYEF'
                },
                'count': 0
              },
              {
                'uom_type': 'case',
                'uom': {
                  'name': '10 each',
                  'description': '$iQ*JgobEj)4&e$w*Q5OK-$:C2;+^1iIIxK_YrzN'
                },
                'count': 31.48
              }
            ],
            'item_count': 0,
            'case_count': 0,
            'order_count': 2,
            'receiving_count': 2,
            'par_value': 14,
            'recipe_amount': 1,
            'recipe_price': {
              'code': 'USD',
              'value': 169,
              'scale': 2
            },
            'recipe_vendor_conversion_rate': 40,
            'vendor_name': 'Costco',
            'type': 'Standard'
          }
        ],
        'vendor_name': 'Costco'
      }
    ];
  }

  getTopSales(data, firstN) {
    // extract and flatten all of the products from all of the stores
    const revenues = _.map(_.flatten(_.map(data, function(stores: any){
      return stores.products;
    })), function(product){
      return _.extend(product, {
        revenue: product.order_count * (product.vendor_price.value / product.vendor_price.scale)
      });
    });

    // get a list of the unique products in order to merge revenues of dups
    const unique = _.uniqBy(revenues, 'name');

    // merge the revenues of the duplicate products, note: other fields are not updated
    const mappedUnique = _.map(unique, function(uniq){
      const copies = _.filter(revenues, { 'name': uniq.name });
      const revenueSums = _.sumBy(copies, function(allProducts) { return allProducts.revenue; });
      // we are overwriting the old revenue properties
      return _.extend(uniq, {revenue: revenueSums});
    });

    // sort the list by revenue, high to low
    const sorted = _.orderBy(mappedUnique, ['revenue'], ['desc']);

    // return the first N values as specified in the input parameters
    if (typeof firstN === 'number' && firstN <= sorted.length) {
      return sorted.slice(0, firstN);
    }
    return sorted;
  }

}
