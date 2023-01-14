function LandingFrame() {
    const style = {
        "background-image": `url("bg.png")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}></div>
}
function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}
export default HomePage