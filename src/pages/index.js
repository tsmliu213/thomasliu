import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

function Urls() {
  return (
    <>
    <div style={{
      marginBottom: rhythm(1.5),
    }}>
      <div>
        <h3>UCI</h3>
        <a href="https://antplanner.appspot.com/">Ant Planner</a><br/>
        <a href="http://www.ics.uci.edu/ugrad/courses/listing.php?year=2013&level=Lower-Division&department=ICS&program=ALL">Course Listing (ICS/CS)</a><br/>
        <a href="http://catalogue.uci.edu/donaldbrenschoolofinformationandcomputersciences/departmentofcomputerscience/">ICS Catagloue</a><br/>
        <a href="https://eee.uci.edu/start/overview/">EEE</a><br/>
        <a href="http://www.ofas.uci.edu/content/">Financial Aid and Scholarships</a><br/>    
        <a href="http://www.reg.uci.edu/access/student/welcome/">Student Access</a><br/>
        <a href="https://zotaccount.uci.edu/">Student Billing</a><br/>
        <a href="https://www.reg.uci.edu/registrar/soc/webreg.html">Web Reg</a><br/>
        <a href="https://www.reg.uci.edu/perl/WebSoc">Web Soc</a>
        <a href="https://ucisca.wordpress.com/">Ant Eater Antics</a><br/>
        <a href="http://www.ics.uci.edu/computing/services/msdnaa_faq.php">MSDNAA Program</a><br/>
        <a href="http://www.ratemyprofessors.com/campusRatings.jsp?sid=1074">Rate My Professor</a><br/>
        <a href="http://ucispace.lib.uci.edu/handle/10575/5882">UCI Archives</a><br/>
        <a href="https://portal.uci.edu/uPortal/f/welcome/normal/render.uP">Zot Portal</a><br/>
      </div>

      <div>
        <h3>Programming</h3>
        <a href="https://wimdeblauwe.wordpress.com/2014/03/20/switching-easily-between-java-jdks-on-mac-os-x/">Switching easily between JDKs on OSX</a><br/>
        <a href="https://docs.python.org/2/library/simplehttpserver.html">Simple HTTP Server (Python)</a><br/>
        <a href="https://www.railstutorial.org/book">Ruby Tutorial (Michael Hartl)</a><br/>
        <a href="http://poignant.guide/book/chapter-2.html">Ruby Poignant Guide</a><br/>
        <a href="https://www.youtube.com/watch?v=ecIWPzGEbFc&feature=youtu.be">"Uncle" Bob Martin - "The Future of Programming"</a><br/>
        <a href="https://yuiblog.com/blog/2006/11/28/performance-research-part-1/">Performance Research, Part 1: What the 80/20 Rule Tells Us about Reducing HTTP Requests</a><br/>
        <br/>
        <a href="https://www.codecademy.com/">Code Cademy</a><br/>
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks</a><br/>
        <a href="http://cssreference.io/">CSS Reference</a><br/>
        <a href="http://www.htmldog.com/">HTML Dog</a><br/>
        <a href="https://www.udacity.com/">Udacity</a><br/>
        <br/>
        <a href="https://www.hackerrank.com/">Hacker Rank</a><br/>
        <a href="https://leetcode.com/">Leet Code</a><br/>
      </div>

      <div>
        <h3>Reading</h3>
        <a href="http://highscalability.com/">High Scalibility</a><br/>
        <br/>
        <a href="https://arxiv.org/abs/1905.01051">Browser Fingerprinting: A survey</a><br/>
      </div>

      <div>
        <h3>Other Blogs</h3>
        <a href="http://www.aaronsw.com/">Aaron Swartz</a><br/>
          <a href="http://gordonbrander.com/pattern/">Gordon Brander Patterns</a><br/>
          <a href="https://lengstorf.com/">Jason Lengstorf</a><br/>
          <a href="https://www.taniarascia.com/">Tania Rascia</a><br/>
          <a href="https://kentcdodds.com/blog/">Kent C. Dodds</a><br/>
      </div>

      <div>
        <h3>Activities</h3>
        <a href="http://crailtap.com/">Crailtap</a><br/>
        <a href="http://www.surplace.fr/ffgc/">Fixed Gear Calculator</a><br/>
        <a href="https://news.ycombinator.com/">Hacker News</a><br/>
        <a href="https://www.instagram.com/tsmliu213/">Instagram</a><br/>
        <a href="https://www.strava.com/athletes/thomasliu">Strava</a><br/>
        <a href="http://theberrics.com/">The Berrics</a><br/>
        <a href="http://theradavist.com/">The Radavist</a><br/>
        <a href="http://trackosaurusrex.com/">Tracko</a><br/>
        <a href="http://www.wolframalpha.com/">Wolfram Alpha</a><br/>
      </div>

      <div>
        <h3>More</h3>
        <a href="http://newdepotstreet.info/">New Depot Street</a><br/>
        <a href="https://10minutemail.com/10MinuteMail/index.html?dswid=5748">10 Minute Email</a><br/>
        <a href="https://repl.it/languages/javascript">Repl.it</a><br/>
        <a href="http://regexr.com/">RegRxr</a><br/>
      </div>

      <div>
        <h3>Contact</h3>
        <a href="http://codepen.io/tsmliu213/pens/public/">CodePen</a><br/>
        <a href="https://c9.io/tsmliu213">Cloud9 IDE</a><br/>
        <a href="https://www.freecodecamp.com/tsmliu213">FreeCodeCamp</a><br/>
        <a href="https://github.com/tsmliu213">Github</a><br/>
        <a href="https://www.linkedin.com/in/tsmliu">LinkedIn</a><br/>
      </div>
    </div>
    </>
  )
}

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Homepage"
          keywords={[`useful links`, `gatsby`, `javascript`, `react`]}
        />
          <div>
            <p>LA, CA</p>
            <p>a collection of links I find useful</p>
            <Urls/>
          </div>
      </Layout>
    )
  }
}

export default Index


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
