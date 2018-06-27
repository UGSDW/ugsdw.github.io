---
title: Press
css: news-wrapper
published: true
---
# Contact

<b>{{ site.data.officers.press-secretary.name }}</b>&nbsp;
<i>Press Secretary</i><br>
<a href="mailto:press@ugsdw.org">press@ugsdw.org</a><br><br>

# Coverage

[College Community Debates Expanding Union](http://www.thesandb.com/article/college-community-debates-expanding-union.html) (*Scarlet & Black*)

[Student Workers Demand Union, College Responds "No"](http://www.thesandb.com/news/student-workers-demand-union-college-responds-no.html) (*Scarlet & Black*)

[Grinnell College attempts to become most unionized campus in America](http://www.dailytarheel.com/article/2017/10/grinnell-college-attempts-to-become-most-unionized-campus-in-america) (*Daily Tar Heel*)

<a href="https://www.campusreform.org/?ID=9865">Students seek title of &ldquo;most unionized campus in the country&rdquo;</a> 
(<i>Campus Reform</i>)<br>

<a href="http://www.desmoinesregister.com/story/news/education/2017/09/25/these-iowa-students-want-their-college-most-unionized-campus-country/692777001/">These Iowa Students Want Their College to be the &ldquo;Most Unionized Campus in the Country&rdquo;</a>
(<i>Des Moines Register</i>)<br>

<a href="http://laborradio.org/2017/09/24/grinnell-dining-workers-launch-campaign-to-represent-all-student-campus-workers/">Grinnell Dining Workers Launch Campaign to Represent All Student Campus Workers</a>
(<i>Workers Independent News</i>)<br>

<a href="http://www.thesandb.com/news/union-plans-to-represent-all-student-workers.html">Union Plans to Represent All Student Workers</a>
(<i>Scarlet & Black</i>)<br>

<a href="http://www.weareiowa.com/news/local-news/grinnell-students-looking-to-expand-union/815816767">Grinnell Students Looking to Expand Union</a>
(<i>WOI-TV</i>)<br>

<a href="http://iowapublicradio.org/post/grinnell-college-student-workers-seek-expand-their-union">Grinnell College Student Workers Seek to Expand Their Union</a>&nbsp;&nbsp;
(<i>Iowa Public Radio</i>)<br>

<a href="http://www.thesandb.com/article/ugsdw-negotiates-2-7-percent-pay-raise.html">UGSDW Negotiates 2.7 Percent Pay Raise</a>&nbsp;&nbsp;
(<i>Scarlet & Black</i>)<br>

<a href="http://www.thesandb.com/article/student-union-pushes-for-wage.html">Student Union Pushes for Wage</a>&nbsp;&nbsp;
(<i>Scarlet & Black</i>)<br>

<a href="https://jacobinmag.com/2017/08/unions-campus-higher-education-organizing-college-students">Undergraduates Are Workers, Too</a>&nbsp;&nbsp;
(<i>Jacobin</i> magazine)<br>

<a href="http://www.thesandb.com/article/union-of-grinnell-student-dining-workers-advocates-for-high-school-students-wages.html">Union of Grinnell Student Dining Workers Advocates for High School Students' Wages</a>&nbsp;&nbsp;
(<i>Scarlet & Black</i>)<br>

<a href="https://www.dissentmagazine.org/blog/undergraduate-unions-student-labor-organizing-fight-for-15">Undergraduate Unions: The Next Frontier?</a>&nbsp;&nbsp;
(<i>Dissent</i> magazine)<br>

<a href="https://www.grinnell.edu/news/student-dining-worker-union-ratifies-contract-raises-pay">Student Dining Worker Union Ratifies Contract, Raises Pay</a>&nbsp;&nbsp;
(<i>Grinnell Magazine</i>)<br>

<a href="http://www.thesandb.com/news/union-of-students-approves-contract-with-college.html">Union of Students Approves Contract with College</a>&nbsp;&nbsp;
(<i>Scarlet & Black</i>)<br>

<a href="http://www.desmoinesregister.com/story/news/local/grinnell/2016/09/28/grinnell-student-employees-approve-union-contract/91146814/">Grinnell student employees approve union contract</a>&nbsp;&nbsp;
(<i>Des Moines Register</i>)<br>

<a href="http://ourgrinnell.com/only-independent-undergraduate-labor-union-in-u-s-wins-wage-increases/">Only Independent Undergraduate Labor Union in U.S. Wins Wage Increases</a>&nbsp;&nbsp;
(<i>OurGrinnell</i>)<br>

<a href="http://www.thesandb.com/features/bring-your-bargaining-chips-to-the-bargaining-team-meetings.html">Bring your Bargaining Chips to the Bargaining Team Meetings</a>&nbsp;&nbsp;
(<i>Scarlet & Black</i>)<br>


# Press Releases

<div class="post-container">
    {% assign releases = site.posts | where_exp: "pst", "pst.release" %}
    {% for post in releases %}
    <a href="{{ post.url }}">
        <article>
            <div class="img-wrapper">
                {% assign images = post.content | split:'img ' %} 
                {% for image in images %}
                    {% if image contains 'src' %}
                        {% assign html = image | split:"/>" | first %}
                        <img {{ html  }} />
                        {% break %}
                    {% endif %}
                {% endfor %}
            </div>
            <div class="content-wrapper">
                <h2>
                    {{ post.title | smartify }}
                </h2>

                <span class="summary-date">{{ post.date | date: '%B %-d, %Y' }}</span><br>
                <span>{{ post.excerpt | smartify  }}</span>
            </div>
        </article>
    </a>
    {% endfor %}
</div>

# Images
_Click each image to download._

{::nomarkdown}
<div class="columns">
    <div>
        <a href="/assets/logo_large.png" download="ugsdw_logo.png">          
            <img alt="UGSDW logo" src="/assets/logo_large.png" width=256>            
        </a> <br>
        Logo
    </div><br>
    <div>
        <a href="/assets/news/expansion_watching.jpg" download="ugsdw_expansion_2017.jpg">          
          <img alt="2017 UGSDW Expansion Campaign Announcement" src="/assets/news/expansion_watching.jpg" width=360>
        </a> <br>
        Expansion campaign announcement, September 2017
    </div><br>
    <div>
        <a href="/assets/temp-front-picture.jpg" download="ugsdw_equal_wage_protest.jpg">          
            <img alt="Equal Wage Protest" src="/assets/temp-front-picture.jpg" width=360>            
        </a> <br>
        Equal wage protest, April 2017
    </div><br>
    <div>
        <a href="/assets/mtg_1_edited.jpg" download="ugsdw_contract_ratification_2016.jpg">          
            <img alt="2016 UGSDW Contract Ratification Meeting" src="/assets/mtg_1_edited.jpg" width=360>            
        </a> <br>
        2016 contract ratification meeting
    </div><br>
    <div>
        <a href="/assets/bargaining_team.jpg" download="ugsdw_bargaining_team_2016.jpg">          
            <img alt="2016 UGSDW Bargaining Team" src="/assets/bargaining_team.jpg" width=360>          
        </a> <br>
        2016 contract bargaining team
    </div><br>
    <div>
        <a href="/assets/front-picture.jpg" download="grinnell_college.jpg">          
            <img alt="Grinnell College" src="/assets/front-picture.jpg" width=360>            
        </a> <br>
        Grinnell College
    </div><br>
</div>
{:/nomarkdown}
