let scrollPosition = window.scrollY
const projectBanner = document.querySelector("#project-banner")
const projects = document.querySelectorAll(".project-wrapper")
// @ts-ignore
const projectBannerHeight = projectBanner?.offsetHeight + 200

const addClassOnScroll = () => projectBanner?.classList.add("project-header")
const removeClassOnScroll = () => projectBanner?.classList.remove("project-header")
const addProjectsOnScroll = () => projects?.forEach(p => p.classList.add("project-anim"))
const removeProjectsOnScroll = () => projects?.forEach(p => p.classList.remove("project-anim"))
window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    if(scrollPosition >= projectBannerHeight) {
        addClassOnScroll()
        addProjectsOnScroll()
    }
    else{
        removeClassOnScroll()
        removeProjectsOnScroll()
    }
})

const skillsBanner = document.querySelector("#skills-banner")
const skills = document.querySelectorAll(".skills")
// @ts-ignore
// let skillsBannerHeight = skillsBanner.getBoundingClientRect().top + document.documentElement.scrollTop
const skillsBannerHeight = 850

const addSkillsBannerOnScroll = () => skillsBanner?.classList.add("skills-header")
const removeSkillsBannerOnScroll = () => skillsBanner?.classList.remove("skills-header")
const addSkilsOnScroll = () => skills.forEach(s => s.classList.add("skills-anim"))
const removeSkilsOnScroll = () => skills.forEach(s => s.classList.remove("skills-anim"))
window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    if(scrollPosition >= skillsBannerHeight) {
        addSkillsBannerOnScroll()
        addSkilsOnScroll()
        }
    else if(document.body.scrollHeight == 
        document.body.scrollTop +        
        window.innerHeight) {
        window.alert("Bottom!"); 
    }
    else{
        removeSkillsBannerOnScroll()
        removeSkilsOnScroll()
    }
})

console.log("projectBannerHeight",projectBannerHeight);
console.log("skillsBannerHeight",skillsBannerHeight);