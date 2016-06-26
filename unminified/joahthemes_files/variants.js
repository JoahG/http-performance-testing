﻿window.variantController||(window.variantController={registry:[],customIdLookup:{},addToCartLinkLookup:{},addToCartButtonLookup:{},wishlistButtonLookup:{},addToCartButtonIds:[],massAddToCartButtonIds:[],addToCartLinkIds:[],registerVariants:function(t,i,e,a,s,n,r,o,d,l,h,c,u,v,p,f,$,I,g,_,m,y,P,C,w,k,S,x,T,D,b,z,A,V,B,L,q,N,Q){this.registry.push(new VariantAjaxManager(t,i,e,a,s,n,r,o,d,l,h,c,u,v,p,f,$,I,g,_,m,P,C,w,k,S,x,T,D,A,V,B,L,N,Q)),this.customIdLookup[i]=this.registry[this.registry.length-1],this.bindAddToCartButton(u,y),this.bindAddToCartLink(v),this.bindWishListButton(b),this.bindMassAddToCartButton(z),this.bindAddToCartButton(q,y),null!=v&&v.length>0&&(this.addToCartLinkLookup[v]=this.registry[this.registry.length-1]),y&&null!=u&&u.length>0&&(this.addToCartButtonLookup[u]=this.registry[this.registry.length-1]),null!=b&&b.length>0&&(this.wishlistButtonLookup[b]=this.registry[this.registry.length-1]),y&&null!=q&&q.length>0&&(this.addToCartButtonLookup[q]=this.registry[this.registry.length-1])},bindAddToCartButton:function(t,i){if(null!=t&&t.length>0){if(-1!=$.inArray(t,this.addToCartButtonIds))return;this.addToCartButtonIds.push(t),$("#"+t).click(function(e){var a;if(i){var s=window.variantController.addToCartButtonLookup[t];return a=s.checkSelections(!1,!0),a.success?(s.saveSelections(s.getSelections(!0).join("|")),s.savePersonalizations(s.getPersonalizations().join("|")),!0):(alert(a.message),e.preventDefault(),!1)}for(var n=0;n<window.variantController.registry.length;n++){if(a=window.variantController.registry[n].checkSelections(!0,!1),!a.success)return alert(a.message),e.preventDefault(),!1;window.variantController.registry[n].saveSelections(window.variantController.registry[n].getSelections(!0).join("|")),window.variantController.registry[n].savePersonalizations(window.variantController.registry[n].getPersonalizations().join("|"))}return!0})}},bindMassAddToCartButton:function(t){if(null!=t&&t.length>0){if(-1!=$.inArray(t,this.massAddToCartButtonIds))return;this.massAddToCartButtonIds.push(t),$("#"+t).click(function(t){for(var i,e=0;e<window.variantController.registry.length;e++){if(i=window.variantController.registry[e].checkSelections(!0,!1),!i.success)return alert(i.message),t.preventDefault(),!1;window.variantController.registry[e].saveSelections(window.variantController.registry[e].getSelections(!0).join("|")),window.variantController.registry[e].savePersonalizations(window.variantController.registry[e].getPersonalizations().join("|"))}return!0})}},bindWishListButton:function(t){null!=t&&t.length>0&&$("#"+t).click(function(i){var e=window.variantController.wishlistButtonLookup[t],a=e.checkSelections(!1,!0);return a.success?(e.saveSelections(e.getSelections(!0).join("|")),e.savePersonalizations(e.getPersonalizations().join("|")),!0):(alert(a.message),i.preventDefault(),!1)})},bindAddToCartLink:function(t){if(null!=t&&t.length>0){if(-1!=$.inArray(t,this.addToCartLinkIds))return;this.addToCartLinkIds.push(t),$("#"+t).click(function(i){var e,a=window.variantController.addToCartLinkLookup[t];return e=a.checkSelections(!1,!0),e.success?a.uploadPersonalizationFiles()?(a.setSelectionsOnLink($(this),a.getSelections(!1).join("|")),a.setPersonalizationsOnLink($(this),a.getPersonalizations(!1).join("|")),!0):(i.preventDefault(),!1):(alert(e.message),i.preventDefault(),!1)})}}});var VariantAjaxManager=function(t,i,e,a,s,n,r,o,d,l,h,c,u,v,p,f,I,g,_,m,y,P,C,w,k,S,x,T,D,b,z,A,V,B,L){this._itemId=t,this._priceId=e,this._itemNrId=a,this._qtyDiscountsId=s,this._qtyDiscountPricesId=n,this._productStatusId=r,this._productTimeFrameId=o,this._variantGTINId=d,this._customId=i,this._qtyTextboxId=l,this._useVariantInventory=h,this._qtyDiscountsAcrossVariants=c,this._addToCartButtonId=u,this._addToCartLinkId=v,this._selectedVariantsId=p,this._pkgVariants=f,this._childPriceId=I,this._bindQtyToParent=g,this._bindQtyCheckBoxId=_,this._personalizationIdsId=m,this._personalizationStringsId=y,this._rewardPointsId=P,this._rewardPointsToPurchaseId=C,this._qtyInStockId=w,this._priceAreaId=k,this._salePriceId=S,this._salePriceAreaId=x,this._wasPriceId=T,this._wasPriceAreaId=D,this._useQtyOf1IfNoQty=b,this._retailPriceId=z,this._retailPriceAreaId=A,this._youSaveId=V,this._weightId=B,this._availability=L,this.indexes={};var q=this;$(function(){q.init()})};VariantAjaxManager.prototype={init:function(){var t=this,i=$(".variantDropDown"+this._customId+", .variantRadioButtonList"+this._customId+", .variantCheckBox"+this._customId);if(this._useVariantInventory)if(this.$varInvDDs=i.not("[id*=NonInventoryVariantGroup"+this._customId+"]"),void 0!==$("#"+this._selectedVariantsId).val()){var e,a=$("#"+this._selectedVariantsId).val().split("|");this.$varInvDDs.each(function(i){t.indexes[this.id]=i,i<a.length&&$(this).is("select")&&$(this).val(a[i]),t._useVariantInventory&&i>0&&"-999"===e&&($(this).is("select")?$(this).attr("disabled","disabled"):$(this).find("input").attr("disabled","disabled").first().attr("checked","checked")),e=$(this).is("select")?$(this).val():$(this).find("input:checked").length>0?$(this).find("input:checked").val():"-999"})}else this.$varInvDDs.each(function(i){t.indexes[this.id]=i});i.change(function(){t.onVariantChange($(this))}),$(".variantRadioButtonList"+this._customId+" input").change(function(){t.onVariantChange($(this))}),$(".variantCheckBox"+this._customId+" input").change(function(){t.onVariantChange($(this))}),$(".personalizationTextbox"+this._customId).change(function(){t.onPersonalizationChange($(this))}),$(".personalizationTextboxWithConfirm"+this._customId).change(function(){t.onPersonalizationChange($(this))}),$(".PersonalizationFileUpload"+this._customId).change(function(){t.onPersonalizationChange($(this))}),$('input[class*="NextStep'+this._customId+'"]').keyup(function(i){t.enableSteps($(this),t._customId)}),$('textarea[class*="NextStep'+this._customId+'"]').keyup(function(i){t.enableSteps($(this),t._customId)});try{"undefined"!=typeof this.$varInvDDs&&this.$varInvDDs&&this.$varInvDDs.first().change()}catch(s){}},ajaxCall:function(t,i,e){$.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:"/Store/Controls/ScriptService.asmx/"+t,dataType:"json",data:i,success:e})},onPersonalizationChange:function(t){t.removeClass("needsSelection"),this.updatePrice()},onVariantChange:function(t){this._useVariantInventory?this.updateVariants(t):this.updatePrice(),t.removeClass("needsSelection")},enableSteps:function(t,i){var e=t.attr("class").split(" ");if(e.length>=3){for(var a="",s="",n="",r=0;r<e.length;r++)-1!=e[r].indexOf("StepGroup")?a=e[r]:-1!=e[r].indexOf("StepID")?s=e[r]:-1!=e[r].indexOf("NextStep")&&(n=e[r]);if(""!=s&&""!=n){var o=s.split("_"),d=(o[o.length-1],n.split("_")),l=d[d.length-1],h=".StepID"+i+"_"+l;""==t.val()?($(h).attr("disabled",!0),$(h).val(""),$(h).trigger("keyup")):$(h).attr("disabled",!1)}}},setSelectionsOnLink:function(t,i){if(""!=i){var e=$(t).prop("href"),a=$(".VariantQuantityGrid"+this._customId);if(a.length>0){for(var s=a.find(".VariantQuantityGridTextbox"+this._customId),n="",r=0;r<s.length;r++){var o=parseInt($(s[r]).find(".VariantQuantityBox").val()),d=parseInt($(s[r]).find("input[id$='hfVariantQuantityGridVariantID"+this._customId+"']").val());if(o>0){var l=d;i.length>0&&(l+="|"+i),n.length>0&&(n+="&"),n+="itemID_"+r+"="+this._itemId+"&quantity_"+r+"="+o+"&variantID_"+r+"="+l}}e="/store/AddToCart.aspx?"+n}else e+="&variantID="+i;$(t).prop("href",e)}},setPersonalizationsOnLink:function(t,i){if(""!=i){var e=$(t).prop("href");e+="&personalization="+i,e+="&personalizationids="+$("#"+this._personalizationIdsId).val(),$(t).prop("href",e)}},uploadPersonalizationFiles:function(){return $(".PersonalizationFileUpload"+this._customId).each(function(t,i){if(""!=$(i).val()){var e=$(i).prop("files")[0],a=new window.FormData;a.append("file",e);var s=$.ajax({type:"POST",url:"/Store/UploadFile.ashx",data:a,dataType:"text",cache:!1,contentType:!1,processData:!1,async:!1}).responseText;return s?(result=JSON.parse(s),result?-1!=result.indexOf("Error")?(alert(result),!1):($(i).attr("data-url",result),!0):(alert("Failed to connect to server to upload file."),!1)):(alert("Failed to connect to server to upload file."),!1)}}),!0},saveSelections:function(t){$("#"+this._selectedVariantsId).val(t)},savePersonalizations:function(t){$("#"+this._personalizationStringsId).val(t)},checkSelections:function(t,i){var e=!0,a={success:!0,message:""},s=$(".VariantQuantityGrid"+this._customId);if(t&&this.qtyIsEmpty()&&0==s.length)return a;if(s.length>0&&i){for(var n=s.find(".VariantQuantityGridTextbox"+this._customId),r=!1,o=0;o<n.length;o++){var d=parseInt($(n[o]).find(".VariantQuantityBox").val());d>0&&(r=!0)}e=r,e||(a.message="A quantity wasn't entered")}var l=$("input[id$='hfAlertMsg_Variant']").val();$(".variantDropDown"+this._customId).each(function(t,i){var s=$(i);"-999"===s.val()?(s.addClass("needsSelection"),e=!1,a.message=l,a.message.length<=0&&(a.message="Please select the product options for this item in the lists below, there is at least 1 selection missing.\n\n")):s.removeClass("needsSelection")});var h=$(".variantRadioButtonList"+this._customId),c=$(".variantRadioButtonList"+this._customId+" input:radio:checked");h.length>0&&c.length!=h.length?(e=!1,a.message=l,a.message.length<=0&&(a.message="Please select the product options for this item in the lists below, there is at least 1 selection missing.\n\n")):$(".variantRadioButtonList"+this._customId+" input:radio:checked").each(function(){var t=$(this);"-999"===t.val()&&(t.closest(".variantRadioButtonList"+this._customId).addClass("needsSelection"),e=!1,a.message=l,a.message.length<=0&&(a.message="Please select the product options for this item in the lists below, there is at least 1 selection missing.\n\n"))});var u=$("input[id$='hfAlertMsg_Personalize']").val(),v=!1;$(".personalizationTextbox"+this._customId+".ProductPersonalizationRequired").each(function(t,i){""==$(i).val()?($(i).addClass("needsSelection"),e=!1,v=!0,u.length<=0&&(u="Please enter a personalization value for the required fields.")):$(i).removeClass("needsSelection")}),$(".personalizationTextboxWithConfirm"+this._customId+".ProductPersonalizationRequired").each(function(t,i){""==$(i).val()?($(i).addClass("needsSelection"),e=!1,v=!0,u.length<=0&&(u="Please enter a personalization value for the required fields.")):$(i).removeClass("needsSelection")}),$(".PersonalizationFileUpload"+this._customId+".ProductPersonalizationRequired").each(function(t,i){""==$(i).val()?(e=!1,v=!0,$(i).addClass("needsSelection"),u.length<=0&&(u="Please enter a personalization value for the required fields.")):$(i).removeClass("needsSelection")});this._customId;return $(".personalizationTextboxWithConfirm"+this._customId).each(function(t,i){var a=$(i).val(),s=$("[id$='"+$(i).attr("data-confirmid")+"']");if(""!=a&&s.length>0){var n=$(s).val();n!=a?(e=!1,v=!0,u+="\n\nThe personalization values entered do not match. Please enter matching values.",s.addClass("needsSelection")):s.removeClass("needsSelection")}}),e||(a.success=!1,v&&(a.message=a.message+"\n\n"+u)),a},getSelections:function(t){var i=[];return t&&this.qtyIsEmpty()?i:($(".variantDropDown"+this._customId).each(function(){i.push($(this).val())}),$(".variantRadioButtonList"+this._customId+" input:radio:checked").each(function(){i.push($(this).val())}),$(".variantCheckBox"+this._customId+" input:checkbox:checked").each(function(){i.push($(this).parent().attr("id"))}),i)},getPersonalizations:function(){var t=[];return $(".personalization"+this._customId).each(function(){"undefined"!=typeof $(this).attr("data-url")&&""!=$(this).attr("data-url")?t.push($(this).attr("data-url")):t.push($(this).val())}),t},qtyIsEmpty:function(){if(this._bindQtyToParent)return this._bindQtyCheckBoxId.length>0&&$("#"+this._bindQtyCheckBoxId+":checked").length>0?!1:!0;var t=$("#"+this._qtyTextboxId).val();if(!t){var i=0;this._qtyDiscountsAcrossVariants&&$(".VariantQuantityGridTextbox"+this._customId+" input").each(function(){var t=parseInt($(this).val());isNaN(t)||(i+=t)}),t=i}return 0>=t&&!this._useQtyOf1IfNoQty?!0:!1},getQuantity:function(){var t=$("#"+this._qtyTextboxId).val();if(!t){var i=0;this._qtyDiscountsAcrossVariants&&$(".VariantQuantityGridTextbox"+this._customId+" input").each(function(){var t=parseInt($(this).val());isNaN(t)||(i+=t)}),"True"===$("#hfQtyDiscountAcrossVariants").val()&&$(".ProductDetailsVariantMatrixQuantityBox input").each(function(){var t=parseInt($(this).val());isNaN(t)||(i+=t)}),t=i}return 0>=t&&(t=1),t},htmlEscape:function(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},updatePrice:function(){var t=this._itemId,i=this.getQuantity(),e=this.getSelections();this.saveSelections(e.join("|"));var a=e.join(", ");this._pkgVariants&&this._pkgVariants.length>0&&(a.length>0&&(a+=", "),a+=this._pkgVariants);var s=this.getPersonalizations(),n="";$(s).each(function(t,i){""!=n&&(n+=","),n+=JSON.stringify(i)});var r=$("#"+this._personalizationIdsId).val();r="undefined"!=typeof r&&r.length>0?r.replace(/\|/g,", "):"";var o='{"itemID": '+t+', "quantity": '+i+', "variantIDs": ['+a+'], "personalizationIds": ['+r+'], "personalizationStrings": ['+n+"]}",d=this;this.ajaxCall("GetPrice",o,function(t){var i=Number(t.d.preSalePrice.replace(/[^0-9\.-]+/g,"")),e=Number(t.d.price.replace(/[^0-9\.-]+/g,""));if(d._qtyDiscountPricesId?$("#"+d._qtyDiscountPricesId).html(t.d.qtyBreakPrices):i>e&&$("#"+d._salePriceId).length>0?(d._childPriceId?($("#"+d._priceId).find("#"+d._childPriceId).html(""),$("#"+d._priceId).find("#"+d._childPriceId).hide(),$("#"+d._priceAreaId).hide()):($("#"+d._priceId).html(""),$("#"+d._priceAreaId).hide()),$("#"+d._wasPriceId).length>0&&($("#"+d._wasPriceId).html(t.d.preSalePrice),$("#"+d._wasPriceAreaId).show()),$("#"+d._salePriceId).length>0&&($("#"+d._salePriceId).html(t.d.price),$("#"+d._salePriceAreaId).show())):($("#"+d._wasPriceId).length>0&&($("#"+d._wasPriceId).html(""),$("#"+d._wasPriceAreaId).hide()),$("#"+d._salePriceId).length>0&&($("#"+d._salePriceId).html(""),$("#"+d._salePriceAreaId).hide()),$("#"+d._priceAreaId).show(),d._childPriceId?$("#"+d._priceId).find("#"+d._childPriceId).html(t.d.price):$("#"+d._priceId).html(t.d.price)),$("#"+d._itemNrId).html(d.htmlEscape(t.d.itemNr)),$("#"+d._qtyDiscountsId).html(t.d.qtyPricing),$("#"+d._productStatusId).html(t.d.status),$("#"+d._productTimeFrameId).html(t.d.timeFrame),$("#"+d._variantGTINId).html(t.d.gtin),$("#"+d._qtyInStockId).html(t.d.inStockQty),$("#"+d._rewardPointsId).html(t.d.rewardPointsEarned),$("#"+d._rewardPointsToPurchaseId).html(t.d.rewardPointsToPurchase),$("#"+d._retailPriceId).html(t.d.retailPrice),$("#"+d._youSaveId).html(t.d.youSave),$("#"+d._weightId).html(t.d.weight),$("#"+d._availabilityId).html(t.d.availability),a.length>0){var s=$("a.estimate-shipping");if(0!=s.length){var n=s.attr("href").replace(/(\?|&)variantIds=[^&]*/,"");s.attr("href",n+(n.indexOf("?")>=0?"&":"?")+"variantIds="+a)}var r=$("#lnkNotifyMe");if(null!=r)if("TRUE"==t.d.ShowNotifyMe){var o=r.attr("data-href").replace(/(\?|&)variantIds=[^&]*/,"");""!=o&&r.data("href",o+(o.indexOf("?")>=0?"&":"?")+"variantIds="+a),r.show()}else r.hide();"TRUE"==t.d.ShowAddToCart?$("#"+d._addToCartButtonId).show():$("#"+d._addToCartButtonId).hide()}})},updateVariants:function(t){var i=[],e=t.get(0).id;if(null===this.indexes[e])return void this.updatePrice();var a=this.indexes[e]+1,s=this.$varInvDDs.slice(0,a);s.each(function(){$(this).is("select")?i.push($(this).val()):i.push($(this).find("input:checked").val())});var n=$("#variantGroupID"+this._customId+"_"+a).val();if("undefined"==typeof n)return void this.updatePrice();var r=$(this.$varInvDDs.get(a));if(0==r.length)return void this.updatePrice();if("-999"===t.val()||!t.is("select")&&0==t.find("input:checked").length)return this.setDefaults(t),void this.updatePrice();var o=this.getQuantity(),d=this._itemId;(null==d||isNaN(d))&&(d=0),r.is("select")&&r.removeAttr("disabled");var l='{"variantIDs": ['+i.join(", ")+'], "groupID": '+n+', "qty": '+o+', "itemID":'+d+"}",h=this;this.ajaxCall("GetApplicableVariants",l,function(t){var i,e=$.parseJSON(t.d);if(r.is("select")){var a=r.val();r.children("option[value!='-999']").each(function(){var t=$(this).attr("value");$("img[id^='varswatch_"+n+"_"+t+"_']").addClass("SwatchNotApplicable"),$(this).remove()}),$.each(e,function(t,i){var e=t.trim();r.append($("<option>",{value:e}).text(i)),$("img[id^='varswatch_"+n+"_"+e+"_']").removeClass("SwatchNotApplicable")}),r.children("option[value!='-999']").each(function(){a==$(this).attr("value")&&$(this).attr("selected",!0)}),i=r}else{i=r.find("input:checked");var s={};$.each(e,function(t,i){s[t.trim()]=i}),r.find("input").each(function(){$(this).removeAttr("checked"),"-999"===this.value||s[this.value]?$(this).removeAttr("disabled"):$(this).attr("disabled","disabled")})}h.setDefaults(r),"-999"!==i.val()?h.updateVariants(r):h.updatePrice()})},setDefaults:function(t){var i;if(t.is("select"))i=t.val();else{var e=t.find("input:checked");i=e.length>0?e.val():"-999"}if("-999"===i){var a=this.$varInvDDs.slice(this.indexes[t.get(0).id]+1);a.each(function(){$(this).is("select")?$(this).val("-999").attr("disabled","disabled"):$(this).find("input").each(function(){$(this).removeAttr("checked"),"-999"===this.value?$(this).attr("checked","checked"):$(this).attr("disabled","disabled")})})}}};