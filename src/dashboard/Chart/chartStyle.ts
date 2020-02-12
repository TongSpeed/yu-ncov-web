
import Chartist from "chartist"
export const lineAnimation = ({ delays = 80, durations = 500 }: { delays?: number, durations?: number }) => ({
    draw: function (data: any) {
        if (data.type === "line" || data.type === "area") {
            data.element.animate({
                d: {
                    begin: 600,
                    dur: 700,
                    from: data.path
                        .clone()
                        .scale(1, 0)
                        .translate(0, data.chartRect.height())
                        .stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                }
            });
        } else if (data.type === "point") {
            data.element.animate({
                opacity: {
                    begin: (data.index + 1) * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: "ease"
                }
            });
        } else if (data.type === "bar") {
            data.element.animate({
                opacity: {
                    begin: (data.index + 1) * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: "ease"
                }
            });
        }
    }
})
export const lineOption = ({ type, low, high }: { type: "Line" | "Bar" | "Area" | "Point", low: number, high: number }) => {
    if (type === 'Bar') {
        return {
            axisX: {
                showGrid: false
            },
            // low: 0,
            //   high: 1000,
            chartPadding: {
                top: 0,
                right: 5,
                bottom: 0,
                left: 0
            }
        }
    }
    else {
        return {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            //low,
            // high, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    }


};
export const responsiveOptions = () => ([
    [
        "screen and (max-width: 640px)",
        {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value:any[]) {
                    return value[0];
                }
            }
        }
    ]
])