package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class Record3 extends Simulation {

	val httpProtocol = http
		.baseUrl("http://www.msftconnecttest.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/plain")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US")
		.contentTypeHeader("text/plain")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Skype/8.99.0.403 Chrome/102.0.5005.167 Electron/19.1.8 Safari/537.36")

	val headers_0 = Map(
		"Cache-Control" -> "no-cache, no-store, must-revalidate",
		"Proxy-Connection" -> "keep-alive")



	val scn = scenario("Record3")
		.exec(http("request_0")
			.get("/connecttest.txt?n=1689858520661")
			.headers(headers_0))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}