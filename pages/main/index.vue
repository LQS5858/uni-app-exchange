<template>
  <root-view :networkType="true">

    <view class="home-wrap">
      <swiper class="swiper"
              :indicator-dots="indicatorDots"
              :autoplay="autoplay"
              indicator-active-color="#ffffff"
              :interval="interval"
              :duration="duration">
        <swiper-item v-for="(item,index) in bannerList"
                     :item-id="String(index)"
                     class="swiper-item flex"
                     :key="index">
          <image class="swiper-image"
                 :src="item&&item.imageApp"></image>
        </swiper-item>

      </swiper>
      <WybNoticeBar :text="broadcastData"
                    :bgColor="'#0a122d'"
                    color="#ECECF5"
                    type="vert"></WybNoticeBar>
      <view class="market-header">
        <view class="column flex">
          <text class="symbol">{{$$(marketFormat,'0','symbol')}}</text>
          <text class="price">{{$$(marketFormat,'0','_price')}}</text>
          <text class="rose">{{$$(marketFormat,'0','rose')}}</text>
        </view>
        <view class="column flex">
          <text class="symbol">{{$$(marketFormat,'1','symbol')}}</text>
          <text class="price">{{$$(marketFormat,'1','_price')}}</text>
          <text class="rose">{{$$(marketFormat,'1','rose')}}</text>
        </view>
        <view class="column flex">
          <text class="symbol">{{$$(marketFormat,'2','symbol')}}</text>
          <text class="price">{{$$(marketFormat,'2','_price')}}</text>
          <text class="rose">{{$$(marketFormat,'2','rose')}}</text>
        </view>

      </view>
      <list-network>
        <view class="header-nav-wrap">
          <view class="flex row">
            <!-- #ifdef H5 -->
            <view class="flex-column"
                  v-ripple>
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNiAzYy0zLjMwOSAwLTYgMi42OTEtNiA2czIuNjkxIDYgNiA2IDYtMi42OTEgNi02LTIuNjkxLTYtNi02bTAgMTRjLTQuNDExIDAtOC0zLjU4OS04LThzMy41ODktOCA4LTggOCAzLjU4OSA4IDgtMy41ODkgOC04IDgiIGZpbGw9IiNENkRGRkMiLz48cGF0aCBkPSJNMTYuNjE3IDl2Ljc3OGgxLjg1Yy4zNCAwIC42MTUuMjYuNjE1LjU4MyAwIC4zMjItLjI3NS41ODMtLjYxNi41ODNoLTEuODV2Ljk3M2MwIC4zMjItLjI3NS41ODMtLjYxNi41ODMtLjM0IDAtLjYxNi0uMjYxLS42MTYtLjU4M3YtLjk3M2gtMS44NWMtLjM0IDAtLjYxNS0uMjYxLS42MTUtLjU4MyAwLS4zMjIuMjc1LS41ODMuNjE2LS41ODNoMS44NVY5aC0xLjg1Yy0uMzQxIDAtLjYxNi0uMjYyLS42MTYtLjU4NCAwLS4zMjIuMjc1LS41ODMuNjE2LS41ODNoLjk0OWwtMS40MTUtMS4zMzhhLjU2Mi41NjIgMCAwIDEgMC0uODI1LjY0Mi42NDIgMCAwIDEgLjg3IDBMMTYgNy42MmwyLjA2LTEuOTQ5YS42NDIuNjQyIDAgMCAxIC44NyAwIC41Ni41NiAwIDAgMSAwIC44MjVMMTcuNTIgNy44MzNoLjk0N2MuMzQgMCAuNjE2LjI2MS42MTYuNTgzIDAgLjMyMi0uMjc1LjU4NC0uNjE2LjU4NGgtMS44NXoiIGZpbGw9IiMwMDhBRDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0zIDI5aDE0LjcyOWwxMS4xNC02LjQ5OGExLjAxIDEuMDEgMCAwIDAtLjMxNC0uMzM0Ljk4Ni45ODYgMCAwIDAtLjk0LS4wOTFsLTkuMjMgMy44NDZBLjk5OC45OTggMCAwIDEgMTggMjZoLThhMSAxIDAgMSAxIDAtMmg2YTEuMDAxIDEuMDAxIDAgMCAwIDAtMmgtNWMtLjE5NyAwLS4zOTEtLjA1OS0uNTU1LS4xNjdDOS42OCAyMS4zMjMgNy4zODcgMjAgNiAyMGMtMS4wOSAwLTIuMzQ3Ljg4LTMgMS40MzlWMjl6bTE1IDJIMmExIDEgMCAwIDEtMS0xdi05YzAtLjI2NS4xMDUtLjUyLjI5My0uNzA3QzEuNTI3IDIwLjA1OCAzLjY1MyAxOCA2IDE4YzEuOTQ0IDAgNC40NTIgMS40NjkgNS4yOTUgMkgxNmEzLjAwNCAzLjAwNCAwIDAgMSAyLjk1NSAzLjUxOWw3Ljg5MS0zLjI4OGEyLjk5NSAyLjk5NSAwIDAgMSAyLjgxOC4yNzNBMi45OTMgMi45OTMgMCAwIDEgMzEgMjNhMSAxIDAgMCAxLS40OTYuODY0bC0xMiA3QTEuMDAzIDEuMDAzIDAgMCAxIDE4IDMxeiIgZmlsbD0iI0Q2REZGQyIvPjwvZz48L3N2Zz4="></image>
              <text class="label">快捷</text>
            </view>
            <!-- #endif  -->
            <view class="flex-column">
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNiAzYy0zLjMwOSAwLTYgMi42OTEtNiA2czIuNjkxIDYgNiA2IDYtMi42OTEgNi02LTIuNjkxLTYtNi02bTAgMTRjLTQuNDExIDAtOC0zLjU4OS04LThzMy41ODktOCA4LTggOCAzLjU4OSA4IDgtMy41ODkgOC04IDgiIGZpbGw9IiNENkRGRkMiLz48cGF0aCBkPSJNMTYuNjE3IDl2Ljc3OGgxLjg1Yy4zNCAwIC42MTUuMjYuNjE1LjU4MyAwIC4zMjItLjI3NS41ODMtLjYxNi41ODNoLTEuODV2Ljk3M2MwIC4zMjItLjI3NS41ODMtLjYxNi41ODMtLjM0IDAtLjYxNi0uMjYxLS42MTYtLjU4M3YtLjk3M2gtMS44NWMtLjM0IDAtLjYxNS0uMjYxLS42MTUtLjU4MyAwLS4zMjIuMjc1LS41ODMuNjE2LS41ODNoMS44NVY5aC0xLjg1Yy0uMzQxIDAtLjYxNi0uMjYyLS42MTYtLjU4NCAwLS4zMjIuMjc1LS41ODMuNjE2LS41ODNoLjk0OWwtMS40MTUtMS4zMzhhLjU2Mi41NjIgMCAwIDEgMC0uODI1LjY0Mi42NDIgMCAwIDEgLjg3IDBMMTYgNy42MmwyLjA2LTEuOTQ5YS42NDIuNjQyIDAgMCAxIC44NyAwIC41Ni41NiAwIDAgMSAwIC44MjVMMTcuNTIgNy44MzNoLjk0N2MuMzQgMCAuNjE2LjI2MS42MTYuNTgzIDAgLjMyMi0uMjc1LjU4NC0uNjE2LjU4NGgtMS44NXoiIGZpbGw9IiMwMDhBRDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0zIDI5aDE0LjcyOWwxMS4xNC02LjQ5OGExLjAxIDEuMDEgMCAwIDAtLjMxNC0uMzM0Ljk4Ni45ODYgMCAwIDAtLjk0LS4wOTFsLTkuMjMgMy44NDZBLjk5OC45OTggMCAwIDEgMTggMjZoLThhMSAxIDAgMSAxIDAtMmg2YTEuMDAxIDEuMDAxIDAgMCAwIDAtMmgtNWMtLjE5NyAwLS4zOTEtLjA1OS0uNTU1LS4xNjdDOS42OCAyMS4zMjMgNy4zODcgMjAgNiAyMGMtMS4wOSAwLTIuMzQ3Ljg4LTMgMS40MzlWMjl6bTE1IDJIMmExIDEgMCAwIDEtMS0xdi05YzAtLjI2NS4xMDUtLjUyLjI5My0uNzA3QzEuNTI3IDIwLjA1OCAzLjY1MyAxOCA2IDE4YzEuOTQ0IDAgNC40NTIgMS40NjkgNS4yOTUgMkgxNmEzLjAwNCAzLjAwNCAwIDAgMSAyLjk1NSAzLjUxOWw3Ljg5MS0zLjI4OGEyLjk5NSAyLjk5NSAwIDAgMSAyLjgxOC4yNzNBMi45OTMgMi45OTMgMCAwIDEgMzEgMjNhMSAxIDAgMCAxLS40OTYuODY0bC0xMiA3QTEuMDAzIDEuMDAzIDAgMCAxIDE4IDMxeiIgZmlsbD0iI0Q2REZGQyIvPjwvZz48L3N2Zz4="></image>
              <text class="label">快捷</text>
            </view>
            <view class="flex-column">
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNiAzQzguODMyIDMgMyA4LjgzMiAzIDE2czUuODMyIDEzIDEzIDEzIDEzLTUuODMyIDEzLTEzUzIzLjE2OCAzIDE2IDNtMCAyOEM3LjcyOSAzMSAxIDI0LjI3MSAxIDE2UzcuNzI5IDEgMTYgMXMxNSA2LjcyOSAxNSAxNS02LjcyOSAxNS0xNSAxNSIgZmlsbD0iI0Q2REZGQyIvPjxwYXRoIGQ9Ik0xNy40OTcgMTZ2MS44ODhoNC40OTJjLjgyOCAwIDEuNDk3LjYzNSAxLjQ5NyAxLjQxN3MtLjY3IDEuNDE3LTEuNDk3IDEuNDE3aC00LjQ5MnYyLjM2MWMwIC43ODItLjY2OCAxLjQxNy0xLjQ5NiAxLjQxNy0uODI3IDAtMS40OTYtLjYzNS0xLjQ5Ni0xLjQxN3YtMi4zNjFoLTQuNDkyYy0uODI4IDAtMS40OTYtLjYzNS0xLjQ5Ni0xLjQxN3MuNjY4LTEuNDE3IDEuNDk2LTEuNDE3aDQuNDkyVjE2aC00LjQ5MmMtLjgyOCAwLTEuNDk2LS42MzUtMS40OTYtMS40MTdzLjY2OC0xLjQxNiAxLjQ5Ni0xLjQxNmgyLjMwNGwtMy40MzYtMy4yNWExLjM2NCAxLjM2NCAwIDAgMSAwLTIuMDAyIDEuNTU4IDEuNTU4IDAgMCAxIDIuMTE2IDBsNS4wMDQgNC43MzIgNS00LjczMmExLjU1OCAxLjU1OCAwIDAgMSAyLjExNiAwIDEuMzYgMS4zNiAwIDAgMSAwIDIuMDAybC0zLjQyOCAzLjI1aDIuM2MuODI4IDAgMS40OTcuNjM0IDEuNDk3IDEuNDE2IDAgLjc4Mi0uNjcgMS40MTctMS40OTcgMS40MTdoLTQuNDkyeiIgZmlsbD0iIzAwOEFEMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=="></image>
              <text class="label">充币</text>
            </view>
            <view class="flex-column">
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zIDI5aDEydi0zYy0xLjY1NCAwLTMtMS4zNDYtMy0zczEuMzQ2LTMgMy0zdi0zaC00LjI3N2ExIDEgMCAwIDEtLjg2NS0xLjUwM0EuOTg0Ljk4NCAwIDAgMCAxMCAxNWExLjAwMSAxLjAwMSAwIDAgMC0yIDBjMCAuMTY4LjA0OC4zMzUuMTQyLjQ5N0ExIDEgMCAwIDEgNy4yNzcgMTdIM3YxMnptMTMgMkgyYTEgMSAwIDAgMS0xLTFWMTZhMSAxIDAgMCAxIDEtMWg0YzAtMS42NTQgMS4zNDYtMyAzLTNzMyAxLjM0NiAzIDNoNGExIDEgMCAwIDEgMSAxdjUuMjc3YTEuMDAxIDEuMDAxIDAgMCAxLTEuNTA0Ljg2NEMxNC44MTIgMjEuNzQgMTQgMjIuMjc5IDE0IDIzYy4wMDEuNzIuODEzIDEuMjYgMS40OTYuODU5YTEuMDAyIDEuMDAyIDAgMCAxIDEuNTA0Ljg2NFYzMGExIDEgMCAwIDEtMSAxeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik0yIDMxYTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDF2NGMxLjY1NCAwIDMgMS4zNDYgMyAzcy0xLjM0NiAzLTMgM3YzaDQuMjc3YTEgMSAwIDAgMSAuODY1IDEuNTAzQS45ODQuOTg0IDAgMCAwIDIyIDE3YTEuMDAxIDEuMDAxIDAgMCAwIDIgMCAuOTg0Ljk4NCAwIDAgMC0uMTQyLS40OTdBMSAxIDAgMCAxIDI0LjcyMyAxNUgzMGExIDEgMCAwIDEgMSAxdjE0YTEgMSAwIDAgMS0uODgzLjk5M0wzMCAzMUgyem03LTE3Yy0uNTUyIDAtMSAuNDQ5LTEgMSAwIC4xNjguMDQ4LjMzNS4xNDIuNDk3YTEuMDA3IDEuMDA3IDAgMCAxLS4yMjIgMS4yN2wtLjA5My4wNjhjLS4xMjguMDg1LS4yNzYuMTQtLjQzMi4xNThMNy4yNzcgMTdIM3YxMmgxMnYtM2MtMS42NTQgMC0zLTEuMzQ2LTMtM3MxLjM0Ni0zIDMtM3YtM2gtNC4yNzdjLS4wOCAwLS4xNTgtLjAxLS4yMzQtLjAyOGwtLjExLS4wMzNhMS4wMDQgMS4wMDQgMCAwIDEtLjIwNi0uMTA0bC0uMDkzLS4wNjlhMSAxIDAgMCAxLS4yMjItMS4yNjlBLjk4NC45ODQgMCAwIDAgMTAgMTVjMC0uNTUxLS40NDgtMS0xLTF6bTExIDNoLTN2NC4yNzdhMS4wMDEgMS4wMDEgMCAwIDEtLjg3My45OTNsLS4xMy4wMDhjLS4xNzItLjAwMS0uMzQ1LS4wNDYtLjUwMS0uMTM3YS45NzYuOTc2IDAgMCAwLS40MTgtLjEzNGwtLjEwNC0uMDAyLS4xMDMuMDA4LS4xMDQuMDJhLjk4OC45ODggMCAwIDAtLjA5OS4wMzJsLjA1NS0uMDE5Yy0uMDMuMDEtLjA2MS4wMi0uMDkuMDMzbC4wMzUtLjAxNGExLjAxNiAxLjAxNiAwIDAgMC0uMDk2LjA0bC4wNi0uMDI2Yy0uMDM1LjAxNC0uMDY5LjAzLS4xMDIuMDQ5bC4wNDItLjAyMmExLjAzNCAxLjAzNCAwIDAgMC0uMS4wNTZsLjA1OC0uMDM0YTEuMDQgMS4wNCAwIDAgMC0uMDgxLjA0OWwuMDIzLS4wMTVhMS4wNDUgMS4wNDUgMCAwIDAtLjA4Mi4wNThsLjA1OS0uMDQzYTEuMDQ3IDEuMDQ3IDAgMCAwLS4wOTQuMDcxbC4wMzUtLjAyOGMtLjAyNi4wMi0uMDUuMDQxLS4wNzUuMDY0bC4wNC0uMDM2Yy0uMDMuMDI2LS4wNi4wNTQtLjA4Ni4wODNsLjA0Ni0uMDQ3YTEuMDQzIDEuMDQzIDAgMCAwLS4wNjkuMDcybC4wMjMtLjAyNWMtLjAyLjAyMi0uMDQuMDQ0LS4wNTkuMDY4bC4wMzYtLjA0M2ExLjAyOCAxLjAyOCAwIDAgMC0uMDguMTA0bC4wNDQtLjA2MWMtLjAyLjAyNi0uMDM5LjA1My0uMDU3LjA4bC4wMTMtLjAyYTEuMDA3IDEuMDA3IDAgMCAwLS4wNTIuMDg4bC4wNC0uMDY3YTEgMSAwIDAgMC0uMDU1LjA5N2wuMDE1LS4wM2EuOTg2Ljk4NiAwIDAgMC0uMDQ2LjA5OWwuMDMtLjA3YS45OC45OCAwIDAgMC0uMDQxLjFsLjAxMS0uMDNhLjk1OC45NTggMCAwIDAtLjA2MS4yNEwxNCAyM2EuOTUxLjk1MSAwIDAgMCAuMDczLjM2NmwtLjAxOS0uMDVhLjk4Ljk4IDAgMCAwIC4wNDUuMTA2bC0uMDI2LS4wNTZhLjk5Ljk5IDAgMCAwIC4wNDMuMDlsLS4wMTctLjAzNGMuMDE0LjAzLjAzLjA1OS4wNDguMDg3bC0uMDMtLjA1M2MuMDE4LjAzNC4wMzguMDY3LjA2LjA5OGwtLjAzLS4wNDVjLjAxOS4wMy4wNC4wNi4wNjIuMDg5bC0uMDMyLS4wNDRjLjAxOC4wMjYuMDM3LjA1MS4wNTcuMDc1bC0uMDI1LS4wMzFjLjAyMy4wMjkuMDQ3LjA1Ny4wNzIuMDgzbC0uMDQ3LS4wNTJjLjAyNC4wMjkuMDUuMDU2LjA3Ny4wODJsLS4wMy0uMDNjLjAyMy4wMjQuMDQ3LjA0Ny4wNzMuMDY4bC0uMDQzLS4wMzhjLjAyNC4wMjMuMDUuMDQ1LjA3Ny4wNjdsLS4wMzQtLjAyOWMuMDI2LjAyMy4wNTQuMDQ1LjA4My4wNjVsLS4wNS0uMDM2Yy4wMy4wMjMuMDYyLjA0NS4wOTQuMDY1bC0uMDQ0LS4wM2MuMDI2LjAxOS4wNTIuMDM2LjA4LjA1MWwtLjAzNi0uMDIxYy4wMjguMDE3LjA1Ny4wMzMuMDg2LjA0OGwtLjA1LS4wMjdjLjA0LjAyMy4wOC4wNDMuMTIyLjA2bC0uMDcyLS4wMzNjLjAzLjAxNS4wNi4wMjguMDkxLjA0bC0uMDE5LS4wMDdjLjAyNi4wMS4wNTMuMDIuMDguMDI4bC0uMDYtLjAyYS45OTUuOTk1IDAgMCAwIC4xMTIuMDM1bC0uMDUyLS4wMTVjLjAyNS4wMDguMDUuMDE0LjA3NC4wMmwtLjAyMi0uMDA1YS45NzEuOTcxIDAgMCAwIC4wOTguMDE5bC4xMDUuMDEuMTA0LS4wMDNhLjk3Mi45NzIgMCAwIDAgLjQxOC0uMTM0Yy4xNTUtLjA5LjMyOS0uMTM2LjUwMS0uMTM2bC4xMy4wMDhhMS4wMDEgMS4wMDEgMCAwIDEgLjg3My45OTJWMjloMTJWMTdoLTNhMy4wMDQgMy4wMDQgMCAwIDEtMi44MjQgMi45OTVMMjMgMjBjLTEuNjU0IDAtMy0xLjM0Ni0zLTN6TTE1IDNIM3YxMmgzYzAtMS42NTQgMS4zNDYtMyAzLTNzMyAxLjM0NiAzIDNoM3YtNC4yNzdhMS4wMDEgMS4wMDEgMCAwIDEgMS41MDQtLjg2NGMuNjgzLjQgMS40OTUtLjEzOSAxLjQ5Ni0uODU5IDAtLjcyLS44MTItMS4yNTctMS40OTYtLjg1OUExLjAwMiAxLjAwMiAwIDAgMSAxNSA3LjI3N1YzeiIgZmlsbD0iI0Q2REZGQyIvPjxwYXRoIGQ9Ik0xNyAxNWg0LjI3N2MuMzU4IDAgLjY4OS4xOTEuODY4LjUwMS4xNzcuMzExLjE3Ni42OTItLjAwMyAxLjAwMkEuOTg0Ljk4NCAwIDAgMCAyMiAxN2ExLjAwMSAxLjAwMSAwIDAgMCAyIDAgLjk4NC45ODQgMCAwIDAtLjE0Mi0uNDk3IDEuMDA3IDEuMDA3IDAgMCAxLS4wMDMtMS4wMDJjLjE3OS0uMzEuNTEtLjUwMS44NjgtLjUwMUgyOVYzSDE3djNjMS42NTQgMCAzIDEuMzQ2IDMgM3MtMS4zNDYgMy0zIDN2M3ptNiA1Yy0xLjY1NCAwLTMtMS4zNDYtMy0zaC00YTEgMSAwIDAgMS0xLTF2LTUuMjc3YTEuMDAxIDEuMDAxIDAgMCAxIDEuNTA0LS44NjRjLjY4My40IDEuNDk1LS4xMzkgMS40OTYtLjg1OSAwLS43Mi0uODEyLTEuMjU3LTEuNDk2LS44NTlBMS4wMDIgMS4wMDIgMCAwIDEgMTUgNy4yNzdWMmExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDF2MTRhMSAxIDAgMCAxLTEgMWgtNGMwIDEuNjU0LTEuMzQ2IDMtMyAzeiIgZmlsbD0iIzAwOEFEMCIvPjwvZz48L3N2Zz4="></image>
              <text class="label">资讯</text>
            </view>
            <view class="flex-column">
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgLjQxNWgxMC41ODVWMTFIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTIgN2EyLjUwMyAyLjUwMyAwIDAgMC0yLjUgMi41YzAgMS4zNzggMS4xMjIgMi41IDIuNSAyLjVzMi41LTEuMTIyIDIuNS0yLjVTMTMuMzc4IDcgMTIgN20wIDdhNC41MDUgNC41MDUgMCAwIDEtNC41LTQuNUM3LjUgNy4wMTkgOS41MTkgNSAxMiA1czQuNSAyLjAxOSA0LjUgNC41UzE0LjQ4MSAxNCAxMiAxNE03LjAzMyAxOS40OTRjMi45NjIgMS45NzUgNi45NzIgMS45NzUgOS45MzQgMEE0LjAwOCA0LjAwOCAwIDAgMCAxMyAxNmgtMmE0LjAwOCA0LjAwOCAwIDAgMC0zLjk2NyAzLjQ5NE0xMiAyM2MtMi4zOTIgMC00LjY3NS0uNzY1LTYuNi0yLjIxM2ExIDEgMCAwIDEtLjM5OS0uODAyYy4wMS0zLjMgMi43LTUuOTg1IDYtNS45ODVoMmE2LjAwOSA2LjAwOSAwIDAgMSA1Ljk5NyA1Ljk4NSAxIDEgMCAwIDEtLjM5OS44MDJBMTAuOSAxMC45IDAgMCAxIDEyIDIzIiBmaWxsPSIjMDA4QUQwIi8+PHBhdGggZD0iTTEyIDFjNi4wNjUgMCAxMSA0LjkzNSAxMSAxMWExMC45NSAxMC45NSAwIDAgMS0yLjU1IDcuMDM1TDIyIDIwLjU4NmwuMjkzLS4yOTNhLjk5OS45OTkgMCAwIDEgMS40MTQgMEwzMCAyNi41ODZjLjc4Ljc4Ljc4IDIuMDQ4IDAgMi44MjhsLS41ODYuNTg2Yy0uMzkuMzktLjkwMi41ODUtMS40MTQuNTg1QTEuOTkzIDEuOTkzIDAgMCAxIDI2LjU4NiAzMGwtNi4yOTMtNi4yOTNhLjk5OS45OTkgMCAwIDEgMC0xLjQxNGwuMjkzLS4yOTMtMS41NS0xLjU1QTEwLjk1IDEwLjk1IDAgMCAxIDEyIDIzQzUuOTM1IDIzIDEgMTguMDY1IDEgMTJTNS45MzUgMSAxMiAxem0xMSAyMS40MTRsLS41ODYuNTg2TDI4IDI4LjU4NmwuNTg3LS41ODdMMjMgMjIuNDE0ek0xMiAzYy00Ljk2MiAwLTkgNC4wMzgtOSA5czQuMDM4IDkgOSA5YTguOTcgOC45NyAwIDAgMCA2LjMtMi41NzguNDkzLjQ5MyAwIDAgMSAuMDU2LS4wNjZsLjA2Ni0uMDU3QTguOTcgOC45NyAwIDAgMCAyMSAxMmMwLTQuOTYyLTQuMDM4LTktOS05eiIgZmlsbD0iI0Q2REZGQyIvPjwvZz48L3N2Zz4="></image>
              <text class="label">邀请好友</text>
            </view>
          </view>
          <view class="flex row">
            <view class="flex-column">
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMC41IDFjMS42NTQgMCAzIDEuMzQ2IDMgM3Y1LjY1N2ExIDEgMCAxIDEtMiAwVjRhMSAxIDAgMCAwLTEtMWgtMTRjLS41NTEgMC0xIC40NDgtMSAxdjIyaDE2di03YTEgMSAwIDEgMSAyIDB2OWMwIDEuNjU0LTEuMzQ2IDMtMyAzaC0xNGMtMS42NTQgMC0zLTEuMzQ2LTMtM1Y0YzAtMS42NTQgMS4zNDYtMyAzLTNoMTR6bTEgMjdoLTE2YzAgLjU1Mi40NDkgMSAxIDFoMTRhMSAxIDAgMCAwIDEtMXptLTYtMjRhMSAxIDAgMSAxIDAgMmgtNGExIDEgMCAxIDEgMC0yaDR6IiBmaWxsPSIjRDZERkZDIi8+PHBhdGggZD0iTTE1LjUgMTFhMSAxIDAgMCAwLTEgMXY1YTEgMSAwIDAgMCAxIDFoMWExIDEgMCAwIDEgMSAxdjEuNTg2bDIuMjkzLTIuMjkzQS45OTYuOTk2IDAgMCAxIDIwLjUgMThoNWExIDEgMCAwIDAgMS0xdi01YTEgMSAwIDAgMC0xLTFoLTEwem0xIDEzYS45OTkuOTk5IDAgMCAxLTEtMXYtM2MtMS42NTQgMC0zLTEuMzQ2LTMtM3YtNWMwLTEuNjU0IDEuMzQ2LTMgMy0zaDEwYzEuNjU0IDAgMyAxLjM0NiAzIDN2NWMwIDEuNjU0LTEuMzQ2IDMtMyAzaC00LjU4NmwtMy43MDcgMy43MDdBMSAxIDAgMCAxIDE2LjUgMjR6IiBmaWxsPSIjMDA4QUQwIi8+PC9nPjwvc3ZnPg=="></image>
              <text class="label">在线</text>
            </view>
            <view class="flex-column">
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNi41IDNjLTEuMTAzIDAtMiAuODk3LTIgMnMuODk3IDIgMiAyIDItLjg5NyAyLTItLjg5Ny0yLTItMm0wIDZjLTIuMjA2IDAtNC0xLjc5NC00LTRzMS43OTQtNCA0LTQgNCAxLjc5NCA0IDQtMS43OTQgNC00IDQiIGZpbGw9IiMwMDhBRDAiLz48cGF0aCBkPSJNMTMuNSAxMmg2YzAtMS4xMDMtLjg5Ny0yLTItMmgtMmMtMS4xMDMgMC0yIC44OTctMiAybTcgMmgtOGExIDEgMCAwIDEtMS0xdi0xYzAtMi4yMDYgMS43OTQtNCA0LTRoMmMyLjIwNiAwIDQgMS43OTQgNCA0djFhMSAxIDAgMCAxLTEgMSIgZmlsbD0iIzAwOEFEMCIvPjxwYXRoIGQ9Ik02LjUgMThjMi4yMDYgMCA0IDEuNzk0IDQgNCAwIDEuMzI4LS42NSAyLjUwNy0xLjY1IDMuMjM1QTQuMDA0IDQuMDA0IDAgMCAxIDExLjUgMjl2MWExIDEgMCAwIDEtMSAxaC04YTEgMSAwIDAgMS0xLTF2LTFhNC4wMDYgNC4wMDYgMCAwIDEgMi42NS0zLjc2NkEzLjk5MSAzLjk5MSAwIDAgMSAyLjUgMjJjMC0yLjIwNiAxLjc5NC00IDQtNHptMjAgMGMyLjIwNiAwIDQgMS43OTQgNCA0IDAgMS4zMjgtLjY1IDIuNTA3LTEuNjUgMy4yMzVBNC4wMDQgNC4wMDQgMCAwIDEgMzEuNSAyOXYxYTEgMSAwIDAgMS0xIDFoLThhMSAxIDAgMCAxLTEtMXYtMWE0LjAwNiA0LjAwNiAwIDAgMSAyLjY1LTMuNzY2QTMuOTkxIDMuOTkxIDAgMCAxIDIyLjUgMjJjMC0yLjIwNiAxLjc5NC00IDQtNHptLTE5IDloLTJjLTEuMTAzIDAtMiAuODk3LTIgMmg2YzAtMS4xMDMtLjg5Ny0yLTItMnptMjAgMGgtMmMtMS4xMDMgMC0yIC44OTctMiAyaDZjMC0xLjEwMy0uODk3LTItMi0yem0tMjEtN2MtMS4xMDMgMC0yIC44OTctMiAycy44OTcgMiAyIDIgMi0uODk3IDItMi0uODk3LTItMi0yem0yMCAwYy0xLjEwMyAwLTIgLjg5Ny0yIDJzLjg5NyAyIDIgMiAyLS44OTcgMi0yLS44OTctMi0yLTJ6bS05LjI5My00LjcwN2w0LjUgNC41YS45OTkuOTk5IDAgMSAxLTEuNDE0IDEuNDE0TDE2LjUgMTcuNDE0bC0zLjc5MyAzLjc5M2EuOTk5Ljk5OSAwIDEgMS0xLjQxNC0xLjQxNGw0LjUtNC41YS45OTkuOTk5IDAgMCAxIDEuNDE0IDB6IiBmaWxsPSIjRDZERkZDIi8+PC9nPjwvc3ZnPg=="></image>
              <text class="label">官方社群</text>
            </view>
            <view class="flex-column">
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMzB2MTdIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEgMTZhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAyIDB2MTNhMSAxIDAgMCAxLTEgMSIgZmlsbD0iIzAwOEFEMCIvPjxwYXRoIGQ9Ik0xMiA4aDcuMTMxbC0uOTYzLTEuNDQ1YTEgMSAwIDAgMSAwLTEuMTFMMTkuMTMxIDRoLTcuMTN2NHptOSAySDExYTEgMSAwIDAgMS0xLTFWM2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAuODMyIDEuNTU1TDIwLjIwMiA2bDEuNjMgMi40NDVBMSAxIDAgMCAxIDIxIDEweiIgZmlsbD0iIzAwOEFEMCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMTQpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMi43NjYgMTVoMTUuMzY1TDEwLjA0NCAyLjg3IDIuNzY2IDE1em0xNy4yMzUgMkgxYTEgMSAwIDAgMS0uODU4LTEuNTE1bDktMTVBMSAxIDAgMCAxIDkuOTc2IDBhLjk2NC45NjQgMCAwIDEgLjg1Ni40NDVMMjAuNTM1IDE1aDYuNTAxbC02LTguMjUxLTEuMjA0IDEuODA2YTEgMSAwIDAgMS0xLjY2NC0xLjExbDItM0ExIDEgMCAwIDEgMjAuOTggNGMuMzExIDAgLjYzNy4xNDcuODMuNDEybDggMTFBLjk5OC45OTggMCAwIDEgMjkgMTdoLTguOTk5eiIgZmlsbD0iI0Q2REZGQyIgbWFzaz0idXJsKCNiKSIvPjwvZz48L2c+PC9zdmc+"></image>
              <text class="label">官方验证</text>
            </view>
            <view class="flex-column">
              <image class="buy"
                     src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMy4zMzIgMjEuNjc1YTIuOTc1IDIuOTc1IDAgMCAwLTEuNDQ4IDIuNTY2VjI5aC03di0yaDFhMSAxIDAgMCAwIDAtMkg4Ljc5OWwtLjQ1Mi01LjA4OEExIDEgMCAwIDAgNy4zNSAxOUg0LjVsMy4yNzctNi41NTNBLjk5Ljk5IDAgMCAwIDcuODg0IDEyYzAtNS4zODMgNC4wMTgtOSAxMC05IDMuNDYgMCA1LjczNi42NTEgNy4zNzcgMi4xMDlDMjcgNi42NTYgMjcuODg0IDguOTc1IDI3Ljg4NCAxMmMwIDYuMDk1LTIuODUyIDguNjc3LTQuNTUyIDkuNjc1bTMuMjU3LTE4LjA2MUMyMy45NTMgMS4yNzEgMjAuMzU4IDEgMTcuODg0IDEgMTAuOTA2IDEgNi4wMDcgNS40MTIgNS44ODYgMTEuNzU5bC0zLjE3MyA2LjM0N2ExLjk4OSAxLjk4OSAwIDAgMCAuMDg3IDEuOTQ1QTEuOTg3IDEuOTg3IDAgMCAwIDQuNTAyIDIxaDEuOTM0bC4zNyA0LjE3N0ExLjk4OCAxLjk4OCAwIDAgMCA4LjggMjdoNC4wODV2M2ExIDEgMCAwIDAgMSAxaDlhMSAxIDAgMCAwIDEtMXYtNS43NTljMC0uMzUyLjE3Ny0uNjc0LjQ2LS44NDEgMS42NjYtLjk3NyA1LjU0LTQuMDQzIDUuNTQtMTEuNCAwLTMuNjIxLTEuMTEtNi40NDMtMy4yOTUtOC4zODYiIGZpbGw9IiNENkRGRkMiLz48cGF0aCBkPSJNMjEuOTcxIDkuNTQ3YzAgLjMyMy0uMDQ3LjYyNC0uMTM5LjkwNGEyLjk3IDIuOTcgMCAwIDEtLjMxMi42ODZjLS4xMTcuMTc4LS4yOC4zNTQtLjQ5NC41MzMtLjIxMy4xOC0uMzg0LjMxLS41MTQuMzktLjEzMi4wODEtLjMxMy4xODYtLjU0Ni4zMTgtLjI0NS4xMzctLjQ1LjMzLS42MTQuNTgxLS4xNjQuMjUtLjI0Ny40NS0uMjQ3LjYwMmEuNDc2LjQ3NiAwIDAgMS0uMTA3LjI5MmMtLjA3Mi4wOTItLjE1NS4xMzktLjI1LjEzOWgtMi4xNWMtLjA5IDAtLjE2NS0uMDU1LS4yMjctLjE2NmEuNjg4LjY4OCAwIDAgMS0uMDk1LS4zMzV2LS40MDFjMC0uNDk2LjE5NC0uOTYzLjU4Mi0xLjQwMS4zODgtLjQzOS44MTUtLjc2NCAxLjI4LS45NzMuMzUzLS4xNjIuNjAzLS4zMjguNzUyLS41MDEuMTUtLjE3My4yMjUtLjQuMjI1LS42OCAwLS4yNTEtLjEzOS0uNDcyLS40MTctLjY2NGExLjY1OCAxLjY1OCAwIDAgMC0uOTYyLS4yODZjLS4zODggMC0uNzEuMDg2LS45NjguMjYtLjIxLjE0OC0uNTMuNDkzLS45NTggMS4wMjlhLjM0NC4zNDQgMCAwIDEtLjI3Ny4xNDMuNDM1LjQzNSAwIDAgMS0uMjI1LS4wNzFsLTEuNDctMS4xMTlhLjM0NS4zNDUgMCAwIDEtLjEzOC0uMjI1LjM1LjM1IDAgMCAxIC4wNDgtLjI1Yy45NTYtMS41ODYgMi4zNDItMi4zODEgNC4xNTctMi4zODEuNDc4IDAgLjk1OC4wOTIgMS40NDIuMjc2LjQ4NC4xODUuOTIuNDMzIDEuMzA4Ljc0NC4zODguMzEuNzA1LjY5Mi45NSAxLjE0MS4yNDQuNDQ3LjM2Ni45MjEuMzY2IDEuNDE1em0tMi44MjkgNS4zNzZ2Mi4xNDhhLjM0My4zNDMgMCAwIDEtLjEwNy4yNTEuMzQzLjM0MyAwIDAgMS0uMjUuMTA3aC0yLjE1YS4zNDMuMzQzIDAgMCAxLS4yNTEtLjEwNy4zNDMuMzQzIDAgMCAxLS4xMDgtLjI1di0yLjE1YzAtLjA5NS4wMzYtLjE3OC4xMDgtLjI1YS4zNDMuMzQzIDAgMCAxIC4yNS0uMTA3aDIuMTVjLjA5NiAwIC4xOC4wMzYuMjUxLjEwN2EuMzQuMzQgMCAwIDEgLjEwNy4yNXoiIGZpbGw9IiMwMDhBRDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="></image>
              <text class="label">帮助中心</text>
            </view>
          </view>
        </view>
        <view class="recomment-market-wrap">
          <view class="flex recommend-market">
            <text class="label">行情</text>
            <view>
              <text class="more">更多
              </text>
              <uni-icons type="arrowright"
                         color="#BBBADC"
                         size="10"></uni-icons>
            </view>
          </view>
          <view>
            <public-load @onRefresh="onRefresh"
                         ref="publicLoad">
              <view class="recommend-market-content "
                    style="height:200px">
                <view class="content">
                  <view class="header flex">
                    <text>币对</text>
                    <text>涨跌幅</text>
                  </view>
                  <view class="row flex">
                    <view class="left flex-column">
                      <text class="symbol">{{marketFormat&&marketFormat[0]&&marketFormat[0]['symbol']}}</text>
                      <text class="volume">24H量</text>
                      <text class="volume">{{marketFormat&&marketFormat[0]&&marketFormat[0]['volume']}}</text>
                    </view>
                    <view class="right flex-column">
                      <text class="rose">{{marketFormat&&marketFormat[0]&&marketFormat[0]['rose']}}</text>
                      <text class="price">{{marketFormat&&marketFormat[0]&&marketFormat[0]['_price']}}</text>
                    </view>
                    <view @tap="$Router.push('/pages/test/test')">跳转</view>
                  </view>
                </view>
              </view>

            </public-load>
          </view>
        </view>
      </list-network>
    </view>
  </root-view>
</template>
<script>

import subMarket from '@/assets/mixins/subMarket'
import WybNoticeBar from '@/components/wyb-noticeBar/wyb-noticeBar.vue'
import { mapState } from 'vuex'
import homeApi from '@/config/interface-address/home'

export default {
  name: "home",
  data () {
    return {
      contentText: {
        contentnomore: '底线'
      },
      broadcastData: [],
      bannerList: [],
      indicatorDots: true,
      autoplay: true,
      noticeLoading: false,
      interval: 2000,
      duration: 500,
      // lessVariable: {
      //   ...LessVariable
      // }
    };
  },
  components: { WybNoticeBar },
  mixins: [subMarket],
  computed: {
    ...mapState({
      manifest: state => state.base.manifest || {}
    }),
    headerUrl () {
      const { url } = this.manifest || {}
      const { h5Url } = url || {}
      const str = String(h5Url) && String(h5Url).split('.')
      return str
    }
  },
  watch: {
    headerUrl (val) {
      if (!val) return
      this.setTitle()
      this.fetchBannerList(true)
    },

  },
  methods: {
    onRefresh () {
      console.log('>>开始下拉刷新');
      setTimeout(() => {
        this.$refs['publicLoad'].onRestore()
      }, 6000);
    },
    async fetchBannerList (showError) {
      const params = {
        data: {
          languageCode: this.$i18n.locale,
          site: '亚太站'
        }
      }
      const noticeParams = {
        data: {
          languageCode: this.$i18n.locale,
          size: '亚太站',
          page: 1,
          query: {
            nameTag: 'notice'
          },
          size: 10
        }
      }
      const [{ value: bannerRes, status: bannerStatus }, { value: noticeRes, status: noticeStatus }] = await Promise.allSettled([this.$http.post(homeApi.bannerListApi, params), this.$http.post(homeApi.noticeApi, noticeParams)]).catch(() => {
      });
      if (bannerStatus === 'rejected' || noticeStatus === 'rejected') {
        const id = setTimeout(() => {
          this.fetchBannerList()
          clearTimeout(id)
        }, 5000);
      }
      ({ data: this.bannerList } = bannerRes || {})
      const { data } = noticeRes || {}
      const { rows } = data || {}
      this.initList(rows)
    },
    initList (list) {
      if (!list || this.$_.isEmpty(list)) return
      list.forEach(element => {
        const { title } = element || {}
        this.broadcastData.push(title)

      });
    },
    setTitle () {
      const [, header, headerPro] = this.headerUrl || []
      const _header = `${header}.${headerPro}`
      uni.setNavigationBarTitle({
        title: _header
      });
    }
  },
  onLoad () {

  },
  onShow () {
    // console.log('--变量--', getComputedStyle(document.documentElement).getPropertyValue('--sell-color'));
  }
}
</script>
<style lang="less" scoped>
.home-wrap {
  .recomment-market-wrap {
    background: @darkThemeBg;
  }
  .recommend-market-content {
    .content {
      padding: 0 20rpx;
      .row {
        justify-content: space-between;
        .rose {
          color: #39bd8b;
          line-height: 38rpx;
          font-size: 32rpx;
          text-align: right;
          font-family: Helvetica;
        }
        .price {
          color: #9c9cc4;
          text-align: right;
          line-height: 40rpx;
          font-size: 28rpx;
        }
        .symbol {
          font-weight: 500;
          color: #ececf5;
          line-height: 32rpx;
          padding-bottom: 10rpx;
          font-size: 28rpx;
        }
        .volume {
          color: #54597f;
          font-size: 20rpx;
          padding-bottom: 10rpx;
          line-height: 24rpx;
        }
      }
    }
    .header {
      justify-content: space-between;
      padding: 20rpx 0;
      color: #ececf5;
      line-height: 34rpx;
      font-size: 24rpx;
    }
  }
  .recommend-market {
    justify-content: space-between;
    padding: 0 20rpx;
    align-items: center;
    border-bottom: 2rpx solid #1a2445;
    border-radius: 10px 10px 0px 0px;
    height: 80rpx;
    .more {
      color: #bbbadc;
      line-height: 34rpx;
      font-size: 24rpx;
    }
    .label {
      font-size: 28rpx;
      // font-family: PingFangSC-Semibold, PingFang SC;
      // font-weight: 600;
      color: #ececf5;
      line-height: 40rpx;
    }
  }
  .header-nav-wrap {
    height: 316rpx;
    margin-top: 20rpx;
    border-radius: 20rpx;
    background: @darkThemeBg;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .flex-column {
      align-items: center;
    }
    .label {
      font-weight: 400;
      color: #ececf5;
      font-size: 24rpx;
      line-height: 34rpx;
      padding-top: 18rpx;
    }
    .row {
      justify-content: space-around;
    }
    .buy {
      width: 32px;
      height: 32px;
    }
  }
  .market-header {
    background: @darkThemeBg;
    height: 160rpx;
    width: 686rpx;
    margin: auto;
    display: flex;

    border-radius: 12rpx;
    align-items: center;
    padding-top: 10rpx;

    justify-content: space-around;
    .column {
      flex-direction: column;
      .price {
        font-size: 32rpx;
        font-family: Helvetica;
        color: #f75254;
        line-height: 38rpx;
        padding-bottom: 10rpx;
      }
      .rose {
        font-size: 24rpx;
        font-family: Helvetica;
        color: #f75254;
        line-height: 28rpx;
      }
      .symbol {
        // font-weight: 1000;
        font-size: 32rpx;
        padding-bottom: 10rpx;
        line-height: 32rpx;
        font-family: SFUIDisplay-Medium, SFUIDisplay;
        color: #ececf5;
      }
    }
  }
  .swiper {
    height: 350rpx;
    width: 100%;
    justify-content: center;
    display: flex;
    .swiper-item {
      justify-content: center;
      align-items: flex-end;
    }
  }
  .swiper-image {
    // height: 200rpx;
    height: 150px;
    width: 343px;
    border-radius: 5rpx;
  }
}
</style>