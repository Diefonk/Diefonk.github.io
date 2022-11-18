<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html>
			<head>
				<title>Diefonk's RSS Feed</title>
				<meta charset="utf-8"/>
				<meta name="description" content="Diefonk makes games and stuff"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link rel="stylesheet" href="style.css"/>
				<link rel="alternate" type="application/rss+xml" href="rss.xml"/>
			</head>
			<body>
				<h1><a href="/">Diefonk</a>'s RSS Feed</h1>
				<p style="text-align:center">(<a href="https://en.wikipedia.org/wiki/RSS" target="_blank">What is RSS?</a>)</p>
				<br/>
				<xsl:for-each select="/rss/channel/item">
					<h2>
						<xsl:value-of select="title"/>
					</h2>
					<p>
						<a target="_blank">
							<xsl:attribute name="href">
								<xsl:value-of select="link"/>
							</xsl:attribute>
							<xsl:value-of select="link"/>
						</a>
					</p>
					<br/>
				</xsl:for-each>
				<p><a href="https://diefonk.itch.io" target="_blank">Older games</a></p>
				<p><a href="/#older">Older stuff</a></p>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
