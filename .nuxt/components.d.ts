
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Canvas': typeof import("../components/Canvas/Canvas.vue")['default']
    'CanvasEditMode': typeof import("../components/Canvas/EditMode.vue")['default']
    'CanvasPresentationMode': typeof import("../components/Canvas/PresentationMode.vue")['default']
    'ContentSection': typeof import("../components/ContentSection.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'Navigation': typeof import("../components/Navigation.vue")['default']
    'AboutSections': typeof import("../components/about/AboutSections.vue")['default']
    'AboutFirstSection': typeof import("../components/about/FirstSection.vue")['default']
    'AboutSecondSection': typeof import("../components/about/SecondSection.vue")['default']
    'AboutThirdSection': typeof import("../components/about/ThirdSection.vue")['default']
    'FooterLink': typeof import("../components/footer/FooterLink.vue")['default']
    'FooterLinkSection': typeof import("../components/footer/FooterLinkSection.vue")['default']
    'FooterLogoSection': typeof import("../components/footer/FooterLogoSection.vue")['default']
    'IndexHero': typeof import("../components/index/Hero.vue")['default']
    'IndexSectionTemplate': typeof import("../components/index/SectionTemplate.vue")['default']
    'NavLogo': typeof import("../components/nav/Logo.vue")['default']
    'NavBar': typeof import("../components/nav/NavBar.vue")['default']
    'NavButton': typeof import("../components/nav/NavButton.vue")['default']
    'SvgoIcons3dCursorAlt': typeof import("../assets/icons/3d-cursor--alt")['default']
    'SvgoIcons3dCursor': typeof import("../assets/icons/3d-cursor")['default']
    'SvgoIcons3dCurveAutoColon': typeof import("../assets/icons/3d-curve--auto-colon")['default']
    'SvgoIcons3dCurveAutoVessels': typeof import("../assets/icons/3d-curve--auto-vessels")['default']
    'SvgoIcons3dCurveManual': typeof import("../assets/icons/3d-curve--manual")['default']
    'SvgoIcons3dIca': typeof import("../assets/icons/3d-ica")['default']
    'SvgoIcons3dMprToggle': typeof import("../assets/icons/3d-mpr-toggle")['default']
    'SvgoIcons3dPrintMesh': typeof import("../assets/icons/3d-print-mesh")['default']
    'SvgoIcons3dSoftware': typeof import("../assets/icons/3d-software")['default']
    'SvgoIcons3rdPartyConnected': typeof import("../assets/icons/3rd-party-connected")['default']
    'SvgoIcons4kFilled': typeof import("../assets/icons/4k--filled")['default']
    'SvgoIcons4k': typeof import("../assets/icons/4k")['default']
    'SvgoIconsAIGenerate': typeof import("../assets/icons/AI-generate")['default']
    'SvgoIconsAIGovernanceLifecycle': typeof import("../assets/icons/AI-governance--lifecycle")['default']
    'SvgoIconsAIGovernanceTracked': typeof import("../assets/icons/AI-governance--tracked")['default']
    'SvgoIconsAIGovernanceUntracked': typeof import("../assets/icons/AI-governance--untracked")['default']
    'SvgoIconsAILaunch': typeof import("../assets/icons/AI-launch")['default']
    'SvgoIconsAIRecommend': typeof import("../assets/icons/AI-recommend")['default']
    'SvgoIconsAI': typeof import("../assets/icons/AI")['default']
    'SvgoIconsAcceptActionUsage': typeof import("../assets/icons/Accept-action--usage")['default']
    'SvgoIconsAccessibilityAlt': typeof import("../assets/icons/Accessibility--alt")['default']
    'SvgoIconsAccessibilityColorFilled': typeof import("../assets/icons/Accessibility--color--filled")['default']
    'SvgoIconsAccessibilityColor': typeof import("../assets/icons/Accessibility--color")['default']
    'SvgoIconsAccessibility': typeof import("../assets/icons/Accessibility")['default']
    'SvgoIconsAccount': typeof import("../assets/icons/Account")['default']
    'SvgoIconsAccumulationIce': typeof import("../assets/icons/Accumulation--ice")['default']
    'SvgoIconsAccumulationPrecipitation': typeof import("../assets/icons/Accumulation--precipitation")['default']
    'SvgoIconsAccumulationRain': typeof import("../assets/icons/Accumulation--rain")['default']
    'SvgoIconsAccumulationSnow': typeof import("../assets/icons/Accumulation--snow")['default']
    'SvgoIconsActionDefinition': typeof import("../assets/icons/Action--definition")['default']
    'SvgoIconsActionUsage': typeof import("../assets/icons/Action--usage")['default']
    'SvgoIconsActivity': typeof import("../assets/icons/Activity")['default']
    'SvgoIconsAddAlt': typeof import("../assets/icons/Add--alt")['default']
    'SvgoIconsAddFilled': typeof import("../assets/icons/Add--filled")['default']
    'SvgoIconsAddLarge': typeof import("../assets/icons/Add--large")['default']
    'SvgoIconsAddComment': typeof import("../assets/icons/Add-comment")['default']
    'SvgoIconsAdd': typeof import("../assets/icons/Add")['default']
    'SvgoIconsAgricultureAnalytics': typeof import("../assets/icons/Agriculture-analytics")['default']
    'SvgoIconsAiFinancialSustainabilityCheck': typeof import("../assets/icons/Ai-financial-sustainability-check")['default']
    'SvgoIconsAiResultsHigh': typeof import("../assets/icons/Ai-results--high")['default']
    'SvgoIconsAiResultsLow': typeof import("../assets/icons/Ai-results--low")['default']
    'SvgoIconsAiResultsMedium': typeof import("../assets/icons/Ai-results--medium")['default']
    'SvgoIconsAiResultsUrgent': typeof import("../assets/icons/Ai-results--urgent")['default']
    'SvgoIconsAiResultsVeryHigh': typeof import("../assets/icons/Ai-results--very-high")['default']
    'SvgoIconsAiResults': typeof import("../assets/icons/Ai-results")['default']
    'SvgoIconsAiStatusComplete': typeof import("../assets/icons/Ai-status--complete")['default']
    'SvgoIconsAiStatusFailed': typeof import("../assets/icons/Ai-status--failed")['default']
    'SvgoIconsAiStatusInProgress': typeof import("../assets/icons/Ai-status--in-progress")['default']
    'SvgoIconsAiStatusQueued': typeof import("../assets/icons/Ai-status--queued")['default']
    'SvgoIconsAiStatusRejected': typeof import("../assets/icons/Ai-status--rejected")['default']
    'SvgoIconsAiStatus': typeof import("../assets/icons/Ai-status")['default']
    'SvgoIconsAirlineDigitalGate': typeof import("../assets/icons/Airline--digital-gate")['default']
    'SvgoIconsAirlineManageGates': typeof import("../assets/icons/Airline--manage-gates")['default']
    'SvgoIconsAirlinePassengerCare': typeof import("../assets/icons/Airline--passenger-care")['default']
    'SvgoIconsAirlineRapidBoard': typeof import("../assets/icons/Airline--rapid-board")['default']
    'SvgoIconsAirplayFilled': typeof import("../assets/icons/Airplay--filled")['default']
    'SvgoIconsAirplay': typeof import("../assets/icons/Airplay")['default']
    'SvgoIconsAirport01': typeof import("../assets/icons/Airport--01")['default']
    'SvgoIconsAirport02': typeof import("../assets/icons/Airport--02")['default']
    'SvgoIconsAirportLocation': typeof import("../assets/icons/Airport-location")['default']
    'SvgoIconsAlarmAdd': typeof import("../assets/icons/Alarm--add")['default']
    'SvgoIconsAlarmSubtract': typeof import("../assets/icons/Alarm--subtract")['default']
    'SvgoIconsAlarm': typeof import("../assets/icons/Alarm")['default']
    'SvgoIconsAlignHorizontalCenter': typeof import("../assets/icons/Align--horizontal-center")['default']
    'SvgoIconsAlignHorizontalLeft': typeof import("../assets/icons/Align--horizontal-left")['default']
    'SvgoIconsAlignHorizontalRight': typeof import("../assets/icons/Align--horizontal-right")['default']
    'SvgoIconsAlignVerticalBottom': typeof import("../assets/icons/Align--vertical-bottom")['default']
    'SvgoIconsAlignVerticalCenter': typeof import("../assets/icons/Align--vertical-center")['default']
    'SvgoIconsAlignVerticalTop': typeof import("../assets/icons/Align--vertical-top")['default']
    'SvgoIconsAlignBoxBottomCenter': typeof import("../assets/icons/Align-box--bottom-center")['default']
    'SvgoIconsAlignBoxBottomLeft': typeof import("../assets/icons/Align-box--bottom-left")['default']
    'SvgoIconsAlignBoxBottomRight': typeof import("../assets/icons/Align-box--bottom-right")['default']
    'SvgoIconsAlignBoxMiddleCenter': typeof import("../assets/icons/Align-box--middle-center")['default']
    'SvgoIconsAlignBoxMiddleLeft': typeof import("../assets/icons/Align-box--middle-left")['default']
    'SvgoIconsAlignBoxMiddleRight': typeof import("../assets/icons/Align-box--middle-right")['default']
    'SvgoIconsAlignBoxTopCenter': typeof import("../assets/icons/Align-box--top-center")['default']
    'SvgoIconsAlignBoxTopLeft': typeof import("../assets/icons/Align-box--top-left")['default']
    'SvgoIconsAlignBoxTopRight': typeof import("../assets/icons/Align-box--top-right")['default']
    'SvgoIconsAnalyticsCustom': typeof import("../assets/icons/Analytics--custom")['default']
    'SvgoIconsAnalyticsReference': typeof import("../assets/icons/Analytics--reference")['default']
    'SvgoIconsAnalytics': typeof import("../assets/icons/Analytics")['default']
    'SvgoIconsAnchor': typeof import("../assets/icons/Anchor")['default']
    'SvgoIconsAngle': typeof import("../assets/icons/Angle")['default']
    'SvgoIconsAnnotationVisibility': typeof import("../assets/icons/Annotation-visibility")['default']
    'SvgoIconsAperture': typeof import("../assets/icons/Aperture")['default']
    'SvgoIconsApi1': typeof import("../assets/icons/Api--1")['default']
    'SvgoIconsApiKey': typeof import("../assets/icons/Api--key")['default']
    'SvgoIconsApi': typeof import("../assets/icons/Api")['default']
    'SvgoIconsAppConnectivity': typeof import("../assets/icons/App-connectivity")['default']
    'SvgoIconsApp': typeof import("../assets/icons/App")['default']
    'SvgoIconsAppleDash': typeof import("../assets/icons/Apple--dash")['default']
    'SvgoIconsApple': typeof import("../assets/icons/Apple")['default']
    'SvgoIconsApplicationMobile': typeof import("../assets/icons/Application--mobile")['default']
    'SvgoIconsApplicationVirtual': typeof import("../assets/icons/Application--virtual")['default']
    'SvgoIconsApplicationWeb': typeof import("../assets/icons/Application--web")['default']
    'SvgoIconsApplication': typeof import("../assets/icons/Application")['default']
    'SvgoIconsApps': typeof import("../assets/icons/Apps")['default']
    'SvgoIconsArchive': typeof import("../assets/icons/Archive")['default']
    'SvgoIconsAreaCustom': typeof import("../assets/icons/Area--custom")['default']
    'SvgoIconsArea': typeof import("../assets/icons/Area")['default']
    'SvgoIconsArithmeticMean': typeof import("../assets/icons/Arithmetic-mean")['default']
    'SvgoIconsArithmeticMedian': typeof import("../assets/icons/Arithmetic-median")['default']
    'SvgoIconsArrangeHorizontal': typeof import("../assets/icons/Arrange--horizontal")['default']
    'SvgoIconsArrangeVertical': typeof import("../assets/icons/Arrange--vertical")['default']
    'SvgoIconsArrival': typeof import("../assets/icons/Arrival")['default']
    'SvgoIconsArrowAnnotation': typeof import("../assets/icons/Arrow--annotation")['default']
    'SvgoIconsArrowDownLeft': typeof import("../assets/icons/Arrow--down-left")['default']
    'SvgoIconsArrowDownRight': typeof import("../assets/icons/Arrow--down-right")['default']
    'SvgoIconsArrowDown': typeof import("../assets/icons/Arrow--down")['default']
    'SvgoIconsArrowLeft': typeof import("../assets/icons/Arrow--left")['default']
    'SvgoIconsArrowRight': typeof import("../assets/icons/Arrow--right")['default']
    'SvgoIconsArrowUpLeft': typeof import("../assets/icons/Arrow--up-left")['default']
    'SvgoIconsArrowUpRight': typeof import("../assets/icons/Arrow--up-right")['default']
    'SvgoIconsArrowUp': typeof import("../assets/icons/Arrow--up")['default']
    'SvgoIconsArrowShiftDown': typeof import("../assets/icons/Arrow-shift-down")['default']
    'SvgoIconsArrowsHorizontal': typeof import("../assets/icons/Arrows--horizontal")['default']
    'SvgoIconsArrowsVertical': typeof import("../assets/icons/Arrows--vertical")['default']
    'SvgoIconsAsleepFilled': typeof import("../assets/icons/Asleep--filled")['default']
    'SvgoIconsAsleep': typeof import("../assets/icons/Asleep")['default']
    'SvgoIconsAssemblyCluster': typeof import("../assets/icons/Assembly--cluster")['default']
    'SvgoIconsAssemblyReference': typeof import("../assets/icons/Assembly--reference")['default']
    'SvgoIconsAssembly': typeof import("../assets/icons/Assembly")['default']
    'SvgoIconsAssetConfirm': typeof import("../assets/icons/Asset--confirm")['default']
    'SvgoIconsAssetDigitalTwin': typeof import("../assets/icons/Asset--digital-twin")['default']
    'SvgoIconsAssetView': typeof import("../assets/icons/Asset--view")['default']
    'SvgoIconsAsset': typeof import("../assets/icons/Asset")['default']
    'SvgoIconsAsterisk': typeof import("../assets/icons/Asterisk")['default']
    'SvgoIconsAsync': typeof import("../assets/icons/Async")['default']
    'SvgoIconsAt': typeof import("../assets/icons/At")['default']
    'SvgoIconsAttachment': typeof import("../assets/icons/Attachment")['default']
    'SvgoIconsAudioConsole': typeof import("../assets/icons/Audio-console")['default']
    'SvgoIconsAugmentedReality': typeof import("../assets/icons/Augmented-reality")['default']
    'SvgoIconsAutoScroll': typeof import("../assets/icons/Auto-scroll")['default']
    'SvgoIconsAutomatic': typeof import("../assets/icons/Automatic")['default']
    'SvgoIconsAutoscaling': typeof import("../assets/icons/Autoscaling")['default']
    'SvgoIconsAwake': typeof import("../assets/icons/Awake")['default']
    'SvgoIconsBadge': typeof import("../assets/icons/Badge")['default']
    'SvgoIconsBaggageClaim': typeof import("../assets/icons/Baggage-claim")['default']
    'SvgoIconsBar': typeof import("../assets/icons/Bar")['default']
    'SvgoIconsBarcode': typeof import("../assets/icons/Barcode")['default']
    'SvgoIconsBareMetalServer01': typeof import("../assets/icons/Bare-metal-server--01")['default']
    'SvgoIconsBareMetalServer02': typeof import("../assets/icons/Bare-metal-server--02")['default']
    'SvgoIconsBareMetalServer': typeof import("../assets/icons/Bare-metal-server")['default']
    'SvgoIconsBarrier': typeof import("../assets/icons/Barrier")['default']
    'SvgoIconsBasketball': typeof import("../assets/icons/Basketball")['default']
    'SvgoIconsBastionHost': typeof import("../assets/icons/Bastion-host")['default']
    'SvgoIconsBat': typeof import("../assets/icons/Bat")['default']
    'SvgoIconsBatchJobStep': typeof import("../assets/icons/Batch-job--step")['default']
    'SvgoIconsBatchJob': typeof import("../assets/icons/Batch-job")['default']
    'SvgoIconsBatteryCharging': typeof import("../assets/icons/Battery--charging")['default']
    'SvgoIconsBatteryEmpty': typeof import("../assets/icons/Battery--empty")['default']
    'SvgoIconsBatteryFull': typeof import("../assets/icons/Battery--full")['default']
    'SvgoIconsBatteryHalf': typeof import("../assets/icons/Battery--half")['default']
    'SvgoIconsBatteryLow': typeof import("../assets/icons/Battery--low")['default']
    'SvgoIconsBatteryQuarter': typeof import("../assets/icons/Battery--quarter")['default']
    'SvgoIconsBeeBat': typeof import("../assets/icons/Bee-bat")['default']
    'SvgoIconsBee': typeof import("../assets/icons/Bee")['default']
    'SvgoIconsBeta': typeof import("../assets/icons/Beta")['default']
    'SvgoIconsBicycle': typeof import("../assets/icons/Bicycle")['default']
    'SvgoIconsBinding01': typeof import("../assets/icons/Binding--01")['default']
    'SvgoIconsBinding02': typeof import("../assets/icons/Binding--02")['default']
    'SvgoIconsBinoculars': typeof import("../assets/icons/Binoculars")['default']
    'SvgoIconsBlochSphere': typeof import("../assets/icons/Bloch-sphere")['default']
    'SvgoIconsBlockStorageAlt': typeof import("../assets/icons/Block-storage--alt")['default']
    'SvgoIconsBlockStorage': typeof import("../assets/icons/Block-storage")['default']
    'SvgoIconsBlockchain': typeof import("../assets/icons/Blockchain")['default']
    'SvgoIconsBlog': typeof import("../assets/icons/Blog")['default']
    'SvgoIconsBluetoothOff': typeof import("../assets/icons/Bluetooth--off")['default']
    'SvgoIconsBluetooth': typeof import("../assets/icons/Bluetooth")['default']
    'SvgoIconsBook': typeof import("../assets/icons/Book")['default']
    'SvgoIconsBookmarkAdd': typeof import("../assets/icons/Bookmark--add")['default']
    'SvgoIconsBookmarkFilled': typeof import("../assets/icons/Bookmark--filled")['default']
    'SvgoIconsBookmark': typeof import("../assets/icons/Bookmark")['default']
    'SvgoIconsBoolean': typeof import("../assets/icons/Boolean")['default']
    'SvgoIconsBootVolumeAlt': typeof import("../assets/icons/Boot-volume--alt")['default']
    'SvgoIconsBootVolume': typeof import("../assets/icons/Boot-volume")['default']
    'SvgoIconsBoot': typeof import("../assets/icons/Boot")['default']
    'SvgoIconsBorderBottom': typeof import("../assets/icons/Border--bottom")['default']
    'SvgoIconsBorderFull': typeof import("../assets/icons/Border--full")['default']
    'SvgoIconsBorderLeft': typeof import("../assets/icons/Border--left")['default']
    'SvgoIconsBorderNone': typeof import("../assets/icons/Border--none")['default']
    'SvgoIconsBorderRight': typeof import("../assets/icons/Border--right")['default']
    'SvgoIconsBorderTop': typeof import("../assets/icons/Border--top")['default']
    'SvgoIconsBot': typeof import("../assets/icons/Bot")['default']
    'SvgoIconsBottles01Dash': typeof import("../assets/icons/Bottles--01--dash")['default']
    'SvgoIconsBottles01': typeof import("../assets/icons/Bottles--01")['default']
    'SvgoIconsBottles02Dash': typeof import("../assets/icons/Bottles--02--dash")['default']
    'SvgoIconsBottles02': typeof import("../assets/icons/Bottles--02")['default']
    'SvgoIconsBottlesContainer': typeof import("../assets/icons/Bottles--container")['default']
    'SvgoIconsBottomPanelCloseFilled': typeof import("../assets/icons/Bottom-panel--close--filled")['default']
    'SvgoIconsBottomPanelClose': typeof import("../assets/icons/Bottom-panel--close")['default']
    'SvgoIconsBottomPanelOpenFilled': typeof import("../assets/icons/Bottom-panel--open--filled")['default']
    'SvgoIconsBottomPanelOpen': typeof import("../assets/icons/Bottom-panel--open")['default']
    'SvgoIconsBoxExtraLarge': typeof import("../assets/icons/Box--extra-large")['default']
    'SvgoIconsBoxLarge': typeof import("../assets/icons/Box--large")['default']
    'SvgoIconsBoxMedium': typeof import("../assets/icons/Box--medium")['default']
    'SvgoIconsBoxSmall': typeof import("../assets/icons/Box--small")['default']
    'SvgoIconsBoxPlot': typeof import("../assets/icons/Box-plot")['default']
    'SvgoIconsBox': typeof import("../assets/icons/Box")['default']
    'SvgoIconsBranch': typeof import("../assets/icons/Branch")['default']
    'SvgoIconsBreakingChange': typeof import("../assets/icons/Breaking-change")['default']
    'SvgoIconsBrightnessContrast': typeof import("../assets/icons/Brightness-contrast")['default']
    'SvgoIconsBringForward': typeof import("../assets/icons/Bring-forward")['default']
    'SvgoIconsBringToFront': typeof import("../assets/icons/Bring-to-front")['default']
    'SvgoIconsBrushFreehand': typeof import("../assets/icons/Brush-freehand")['default']
    'SvgoIconsBrushPolygon': typeof import("../assets/icons/Brush-polygon")['default']
    'SvgoIconsBuildTool': typeof import("../assets/icons/Build-tool")['default']
    'SvgoIconsBuildingInsights1': typeof import("../assets/icons/Building--insights-1")['default']
    'SvgoIconsBuildingInsights2': typeof import("../assets/icons/Building--insights-2")['default']
    'SvgoIconsBuildingInsights3': typeof import("../assets/icons/Building--insights-3")['default']
    'SvgoIconsBuilding': typeof import("../assets/icons/Building")['default']
    'SvgoIconsBullhorn': typeof import("../assets/icons/Bullhorn")['default']
    'SvgoIconsBuoy': typeof import("../assets/icons/Buoy")['default']
    'SvgoIconsBus': typeof import("../assets/icons/Bus")['default']
    'SvgoIconsBusinessProcesses': typeof import("../assets/icons/Business-processes")['default']
    'SvgoIconsButtonCentered': typeof import("../assets/icons/Button--centered")['default']
    'SvgoIconsButtonFlushLeft': typeof import("../assets/icons/Button--flush-left")['default']
    'SvgoIconsCabinCareAlert': typeof import("../assets/icons/Cabin-care--alert")['default']
    'SvgoIconsCabinCareAlt': typeof import("../assets/icons/Cabin-care--alt")['default']
    'SvgoIconsCabinCare': typeof import("../assets/icons/Cabin-care")['default']
    'SvgoIconsCad': typeof import("../assets/icons/Cad")['default']
    'SvgoIconsCafe': typeof import("../assets/icons/Cafe")['default']
    'SvgoIconsCalculationAlt': typeof import("../assets/icons/Calculation--alt")['default']
    'SvgoIconsCalculation': typeof import("../assets/icons/Calculation")['default']
    'SvgoIconsCalculatorCheck': typeof import("../assets/icons/Calculator--check")['default']
    'SvgoIconsCalculator': typeof import("../assets/icons/Calculator")['default']
    'SvgoIconsCalendarAddAlt': typeof import("../assets/icons/Calendar--add--alt")['default']
    'SvgoIconsCalendarAdd': typeof import("../assets/icons/Calendar--add")['default']
    'SvgoIconsCalendarHeatMap': typeof import("../assets/icons/Calendar--heat-map")['default']
    'SvgoIconsCalendarSettings': typeof import("../assets/icons/Calendar--settings")['default']
    'SvgoIconsCalendarTools': typeof import("../assets/icons/Calendar--tools")['default']
    'SvgoIconsCalendar': typeof import("../assets/icons/Calendar")['default']
    'SvgoIconsCalibrate': typeof import("../assets/icons/Calibrate")['default']
    'SvgoIconsCallsAll': typeof import("../assets/icons/Calls--all")['default']
    'SvgoIconsCallsIncoming': typeof import("../assets/icons/Calls--incoming")['default']
    'SvgoIconsCalls': typeof import("../assets/icons/Calls")['default']
    'SvgoIconsCameraAction': typeof import("../assets/icons/Camera--action")['default']
    'SvgoIconsCamera': typeof import("../assets/icons/Camera")['default']
    'SvgoIconsCampsite': typeof import("../assets/icons/Campsite")['default']
    'SvgoIconsCarFront': typeof import("../assets/icons/Car--front")['default']
    'SvgoIconsCar': typeof import("../assets/icons/Car")['default']
    'SvgoIconsCarbonUiBuilder': typeof import("../assets/icons/Carbon--ui-builder")['default']
    'SvgoIconsCarbonAccounting': typeof import("../assets/icons/Carbon-accounting")['default']
    'SvgoIconsCarbonForAEM': typeof import("../assets/icons/Carbon-for-AEM")['default']
    'SvgoIconsCarbonForIbmDotcom': typeof import("../assets/icons/Carbon-for-ibm-dotcom")['default']
    'SvgoIconsCarbonForIbmProduct': typeof import("../assets/icons/Carbon-for-ibm-product")['default']
    'SvgoIconsCarbonForMobile': typeof import("../assets/icons/Carbon-for-mobile")['default']
    'SvgoIconsCarbonForSalesforce': typeof import("../assets/icons/Carbon-for-salesforce")['default']
    'SvgoIconsCarbon': typeof import("../assets/icons/Carbon")['default']
    'SvgoIconsCaretDown': typeof import("../assets/icons/Caret--down")['default']
    'SvgoIconsCaretLeft': typeof import("../assets/icons/Caret--left")['default']
    'SvgoIconsCaretRight': typeof import("../assets/icons/Caret--right")['default']
    'SvgoIconsCaretSortDown': typeof import("../assets/icons/Caret--sort--down")['default']
    'SvgoIconsCaretSortUp': typeof import("../assets/icons/Caret--sort--up")['default']
    'SvgoIconsCaretSort': typeof import("../assets/icons/Caret--sort")['default']
    'SvgoIconsCaretUp': typeof import("../assets/icons/Caret--up")['default']
    'SvgoIconsCarouselHorizontal': typeof import("../assets/icons/Carousel--horizontal")['default']
    'SvgoIconsCarouselVertical': typeof import("../assets/icons/Carousel--vertical")['default']
    'SvgoIconsCatalogPublish': typeof import("../assets/icons/Catalog--publish")['default']
    'SvgoIconsCatalog': typeof import("../assets/icons/Catalog")['default']
    'SvgoIconsCategories': typeof import("../assets/icons/Categories")['default']
    'SvgoIconsCategoryAdd': typeof import("../assets/icons/Category--add")['default']
    'SvgoIconsCategoryAnd': typeof import("../assets/icons/Category--and")['default']
    'SvgoIconsCategoryNewEach': typeof import("../assets/icons/Category--new-each")['default']
    'SvgoIconsCategoryNew': typeof import("../assets/icons/Category--new")['default']
    'SvgoIconsCategory': typeof import("../assets/icons/Category")['default']
    'SvgoIconsCautionInverted': typeof import("../assets/icons/Caution-inverted")['default']
    'SvgoIconsCaution': typeof import("../assets/icons/Caution")['default']
    'SvgoIconsCcx': typeof import("../assets/icons/Ccx")['default']
    'SvgoIconsCdArchive': typeof import("../assets/icons/Cd--archive")['default']
    'SvgoIconsCdCreateArchive': typeof import("../assets/icons/Cd--create-archive")['default']
    'SvgoIconsCdCreateExchange': typeof import("../assets/icons/Cd--create-exchange")['default']
    'SvgoIconsCda': typeof import("../assets/icons/Cda")['default']
    'SvgoIconsCellTower': typeof import("../assets/icons/Cell-tower")['default']
    'SvgoIconsCenterCircle': typeof import("../assets/icons/Center--circle")['default']
    'SvgoIconsCenterSquare': typeof import("../assets/icons/Center--square")['default']
    'SvgoIconsCenterToFit': typeof import("../assets/icons/Center-to-fit")['default']
    'SvgoIconsCertificateCheck': typeof import("../assets/icons/Certificate--check")['default']
    'SvgoIconsCertificate': typeof import("../assets/icons/Certificate")['default']
    'SvgoIconsChangeCatalog': typeof import("../assets/icons/Change-catalog")['default']
    'SvgoIconsCharacterDecimal': typeof import("../assets/icons/Character--decimal")['default']
    'SvgoIconsCharacterFraction': typeof import("../assets/icons/Character--fraction")['default']
    'SvgoIconsCharacterInteger': typeof import("../assets/icons/Character--integer")['default']
    'SvgoIconsCharacterLowerCase': typeof import("../assets/icons/Character--lower-case")['default']
    'SvgoIconsCharacterNegativeNumber': typeof import("../assets/icons/Character--negative-number")['default']
    'SvgoIconsCharacterSentenceCase': typeof import("../assets/icons/Character--sentence-case")['default']
    'SvgoIconsCharacterUpperCase': typeof import("../assets/icons/Character--upper-case")['default']
    'SvgoIconsCharacterWholeNumber': typeof import("../assets/icons/Character--whole-number")['default']
    'SvgoIconsCharacterPatterns': typeof import("../assets/icons/Character-patterns")['default']
    'SvgoIconsChargingStationFilled': typeof import("../assets/icons/Charging-station--filled")['default']
    'SvgoIconsChargingStation': typeof import("../assets/icons/Charging-station")['default']
    'SvgoIconsChart3d': typeof import("../assets/icons/Chart--3d")['default']
    'SvgoIconsChartAreaSmooth': typeof import("../assets/icons/Chart--area-smooth")['default']
    'SvgoIconsChartAreaStepper': typeof import("../assets/icons/Chart--area-stepper")['default']
    'SvgoIconsChartArea': typeof import("../assets/icons/Chart--area")['default']
    'SvgoIconsChartAverage': typeof import("../assets/icons/Chart--average")['default']
    'SvgoIconsChartBarFloating': typeof import("../assets/icons/Chart--bar-floating")['default']
    'SvgoIconsChartBarOverlay': typeof import("../assets/icons/Chart--bar-overlay")['default']
    'SvgoIconsChartBarStacked': typeof import("../assets/icons/Chart--bar-stacked")['default']
    'SvgoIconsChartBarTarget': typeof import("../assets/icons/Chart--bar-target")['default']
    'SvgoIconsChartBar': typeof import("../assets/icons/Chart--bar")['default']
    'SvgoIconsChartBubblePacked': typeof import("../assets/icons/Chart--bubble-packed")['default']
    'SvgoIconsChartBubble': typeof import("../assets/icons/Chart--bubble")['default']
    'SvgoIconsChartBullet': typeof import("../assets/icons/Chart--bullet")['default']
    'SvgoIconsChartCandlestick': typeof import("../assets/icons/Chart--candlestick")['default']
    'SvgoIconsChartClusterBar': typeof import("../assets/icons/Chart--cluster-bar")['default']
    'SvgoIconsChartColumnFloating': typeof import("../assets/icons/Chart--column-floating")['default']
    'SvgoIconsChartColumnTarget': typeof import("../assets/icons/Chart--column-target")['default']
    'SvgoIconsChartColumn': typeof import("../assets/icons/Chart--column")['default']
    'SvgoIconsChartComboStacked': typeof import("../assets/icons/Chart--combo-stacked")['default']
    'SvgoIconsChartCombo': typeof import("../assets/icons/Chart--combo")['default']
    'SvgoIconsChartCustom': typeof import("../assets/icons/Chart--custom")['default']
    'SvgoIconsChartDualYAxis': typeof import("../assets/icons/Chart--dual-y-axis")['default']
    'SvgoIconsChartErrorBarAlt': typeof import("../assets/icons/Chart--error-bar--alt")['default']
    'SvgoIconsChartErrorBar': typeof import("../assets/icons/Chart--error-bar")['default']
    'SvgoIconsChartEvaluation': typeof import("../assets/icons/Chart--evaluation")['default']
    'SvgoIconsChartHighLow': typeof import("../assets/icons/Chart--high-low")['default']
    'SvgoIconsChartHistogram': typeof import("../assets/icons/Chart--histogram")['default']
    'SvgoIconsChartLineData': typeof import("../assets/icons/Chart--line--data")['default']
    'SvgoIconsChartLineSmooth': typeof import("../assets/icons/Chart--line-smooth")['default']
    'SvgoIconsChartLine': typeof import("../assets/icons/Chart--line")['default']
    'SvgoIconsChartLogisticRegression': typeof import("../assets/icons/Chart--logistic-regression")['default']
    'SvgoIconsChartMarimekko': typeof import("../assets/icons/Chart--marimekko")['default']
    'SvgoIconsChartMaximum': typeof import("../assets/icons/Chart--maximum")['default']
    'SvgoIconsChartMedian': typeof import("../assets/icons/Chart--median")['default']
    'SvgoIconsChartMinimum': typeof import("../assets/icons/Chart--minimum")['default']
    'SvgoIconsChartMultiLine': typeof import("../assets/icons/Chart--multi-line")['default']
    'SvgoIconsChartMultitype': typeof import("../assets/icons/Chart--multitype")['default']
    'SvgoIconsChartNetwork': typeof import("../assets/icons/Chart--network")['default']
    'SvgoIconsChartParallel': typeof import("../assets/icons/Chart--parallel")['default']
    'SvgoIconsChartPie': typeof import("../assets/icons/Chart--pie")['default']
    'SvgoIconsChartPlanningWaterfall': typeof import("../assets/icons/Chart--planning-waterfall")['default']
    'SvgoIconsChartPoint': typeof import("../assets/icons/Chart--point")['default']
    'SvgoIconsChartPopulation': typeof import("../assets/icons/Chart--population")['default']
    'SvgoIconsChartRadar': typeof import("../assets/icons/Chart--radar")['default']
    'SvgoIconsChartRadial': typeof import("../assets/icons/Chart--radial")['default']
    'SvgoIconsChartRelationship': typeof import("../assets/icons/Chart--relationship")['default']
    'SvgoIconsChartRing': typeof import("../assets/icons/Chart--ring")['default']
    'SvgoIconsChartRiver': typeof import("../assets/icons/Chart--river")['default']
    'SvgoIconsChartRose': typeof import("../assets/icons/Chart--rose")['default']
    'SvgoIconsChartScatter': typeof import("../assets/icons/Chart--scatter")['default']
    'SvgoIconsChartSpiral': typeof import("../assets/icons/Chart--spiral")['default']
    'SvgoIconsChartStacked': typeof import("../assets/icons/Chart--stacked")['default']
    'SvgoIconsChartStepper': typeof import("../assets/icons/Chart--stepper")['default']
    'SvgoIconsChartSunburst': typeof import("../assets/icons/Chart--sunburst")['default']
    'SvgoIconsChartTSne': typeof import("../assets/icons/Chart--t-sne")['default']
    'SvgoIconsChartTreemap': typeof import("../assets/icons/Chart--treemap")['default']
    'SvgoIconsChartVennDiagram': typeof import("../assets/icons/Chart--venn-diagram")['default']
    'SvgoIconsChartViolinPlot': typeof import("../assets/icons/Chart--violin-plot")['default']
    'SvgoIconsChartWaterfall': typeof import("../assets/icons/Chart--waterfall")['default']
    'SvgoIconsChartWinLoss': typeof import("../assets/icons/Chart--win-loss")['default']
    'SvgoIconsChatLaunch': typeof import("../assets/icons/Chat--launch")['default']
    'SvgoIconsChatOff': typeof import("../assets/icons/Chat--off")['default']
    'SvgoIconsChatOperational': typeof import("../assets/icons/Chat--operational")['default']
    'SvgoIconsChatBot': typeof import("../assets/icons/Chat-bot")['default']
    'SvgoIconsChat': typeof import("../assets/icons/Chat")['default']
    'SvgoIconsCheckboxCheckedFilled': typeof import("../assets/icons/Checkbox--checked--filled")['default']
    'SvgoIconsCheckboxChecked': typeof import("../assets/icons/Checkbox--checked")['default']
    'SvgoIconsCheckboxIndeterminateFilled': typeof import("../assets/icons/Checkbox--indeterminate--filled")['default']
    'SvgoIconsCheckboxIndeterminate': typeof import("../assets/icons/Checkbox--indeterminate")['default']
    'SvgoIconsCheckbox': typeof import("../assets/icons/Checkbox")['default']
    'SvgoIconsCheckmarkFilledError': typeof import("../assets/icons/Checkmark--filled--error")['default']
    'SvgoIconsCheckmarkFilledWarning': typeof import("../assets/icons/Checkmark--filled--warning")['default']
    'SvgoIconsCheckmarkFilled': typeof import("../assets/icons/Checkmark--filled")['default']
    'SvgoIconsCheckmarkOutlineError': typeof import("../assets/icons/Checkmark--outline--error")['default']
    'SvgoIconsCheckmarkOutlineWarning': typeof import("../assets/icons/Checkmark--outline--warning")['default']
    'SvgoIconsCheckmarkOutline': typeof import("../assets/icons/Checkmark--outline")['default']
    'SvgoIconsCheckmark': typeof import("../assets/icons/Checkmark")['default']
    'SvgoIconsChemistryReference': typeof import("../assets/icons/Chemistry--reference")['default']
    'SvgoIconsChemistry': typeof import("../assets/icons/Chemistry")['default']
    'SvgoIconsChevronDownOutline': typeof import("../assets/icons/Chevron--down--outline")['default']
    'SvgoIconsChevronDown': typeof import("../assets/icons/Chevron--down")['default']
    'SvgoIconsChevronLeft': typeof import("../assets/icons/Chevron--left")['default']
    'SvgoIconsChevronMini': typeof import("../assets/icons/Chevron--mini")['default']
    'SvgoIconsChevronRight': typeof import("../assets/icons/Chevron--right")['default']
    'SvgoIconsChevronSortDown': typeof import("../assets/icons/Chevron--sort--down")['default']
    'SvgoIconsChevronSortUp': typeof import("../assets/icons/Chevron--sort--up")['default']
    'SvgoIconsChevronSort': typeof import("../assets/icons/Chevron--sort")['default']
    'SvgoIconsChevronUpOutline': typeof import("../assets/icons/Chevron--up--outline")['default']
    'SvgoIconsChevronUp': typeof import("../assets/icons/Chevron--up")['default']
    'SvgoIconsChip': typeof import("../assets/icons/Chip")['default']
    'SvgoIconsChoices': typeof import("../assets/icons/Choices")['default']
    'SvgoIconsChooseItem': typeof import("../assets/icons/Choose-item")['default']
    'SvgoIconsChoroplethMap': typeof import("../assets/icons/Choropleth-map")['default']
    'SvgoIconsCicsCmas': typeof import("../assets/icons/Cics--cmas")['default']
    'SvgoIconsCicsDb2Connection': typeof import("../assets/icons/Cics--db2-connection")['default']
    'SvgoIconsCicsExplorer': typeof import("../assets/icons/Cics--explorer")['default']
    'SvgoIconsCicsProgram': typeof import("../assets/icons/Cics--program")['default']
    'SvgoIconsCicsSitOverrides': typeof import("../assets/icons/Cics--sit-overrides")['default']
    'SvgoIconsCicsSit': typeof import("../assets/icons/Cics--sit")['default']
    'SvgoIconsCicsSystemGroup': typeof import("../assets/icons/Cics--system-group")['default']
    'SvgoIconsCicsTransactionServerZos': typeof import("../assets/icons/Cics--transaction-server-zos")['default']
    'SvgoIconsCicsWuiRegion': typeof import("../assets/icons/Cics--wui-region")['default']
    'SvgoIconsCicsRegionAlt': typeof import("../assets/icons/Cics-region--alt")['default']
    'SvgoIconsCicsRegionRouting': typeof import("../assets/icons/Cics-region--routing")['default']
    'SvgoIconsCicsRegionTarget': typeof import("../assets/icons/Cics-region--target")['default']
    'SvgoIconsCicsRegion': typeof import("../assets/icons/Cics-region")['default']
    'SvgoIconsCicsplex': typeof import("../assets/icons/Cicsplex")['default']
    'SvgoIconsCircleFilled': typeof import("../assets/icons/Circle--filled")['default']
    'SvgoIconsCircleOutline': typeof import("../assets/icons/Circle--outline")['default']
    'SvgoIconsCircleSolid': typeof import("../assets/icons/Circle--solid")['default']
    'SvgoIconsCircleDash': typeof import("../assets/icons/Circle-dash")['default']
    'SvgoIconsCircleFill': typeof import("../assets/icons/Circle-fill")['default']
    'SvgoIconsCircleMeasurement': typeof import("../assets/icons/Circle-measurement")['default']
    'SvgoIconsCirclePacking': typeof import("../assets/icons/Circle-packing")['default']
    'SvgoIconsCircleStroke': typeof import("../assets/icons/Circle-stroke")['default']
    'SvgoIconsCircuitComposer': typeof import("../assets/icons/Circuit-composer")['default']
    'SvgoIconsClassification': typeof import("../assets/icons/Classification")['default']
    'SvgoIconsClassifierLanguage': typeof import("../assets/icons/Classifier--language")['default']
    'SvgoIconsClean': typeof import("../assets/icons/Clean")['default']
    'SvgoIconsCloseFilled': typeof import("../assets/icons/Close--filled")['default']
    'SvgoIconsCloseLarge': typeof import("../assets/icons/Close--large")['default']
    'SvgoIconsCloseOutline': typeof import("../assets/icons/Close--outline")['default']
    'SvgoIconsClose': typeof import("../assets/icons/Close")['default']
    'SvgoIconsClosedCaptionAlt': typeof import("../assets/icons/Closed-caption--alt")['default']
    'SvgoIconsClosedCaptionFilled': typeof import("../assets/icons/Closed-caption--filled")['default']
    'SvgoIconsClosedCaption': typeof import("../assets/icons/Closed-caption")['default']
    'SvgoIconsCloudAlerting': typeof import("../assets/icons/Cloud--alerting")['default']
    'SvgoIconsCloudAuditing': typeof import("../assets/icons/Cloud--auditing")['default']
    'SvgoIconsCloudDataOps': typeof import("../assets/icons/Cloud--data-ops")['default']
    'SvgoIconsCloudDownload': typeof import("../assets/icons/Cloud--download")['default']
    'SvgoIconsCloudLogging': typeof import("../assets/icons/Cloud--logging")['default']
    'SvgoIconsCloudMonitoring': typeof import("../assets/icons/Cloud--monitoring")['default']
    'SvgoIconsCloudOffline': typeof import("../assets/icons/Cloud--offline")['default']
    'SvgoIconsCloudServiceManagement': typeof import("../assets/icons/Cloud--service-management")['default']
    'SvgoIconsCloudUpload': typeof import("../assets/icons/Cloud--upload")['default']
    'SvgoIconsCloudApp': typeof import("../assets/icons/Cloud-app")['default']
    'SvgoIconsCloudCeiling': typeof import("../assets/icons/Cloud-ceiling")['default']
    'SvgoIconsCloudFoundry1': typeof import("../assets/icons/Cloud-foundry--1")['default']
    'SvgoIconsCloudFoundry2': typeof import("../assets/icons/Cloud-foundry--2")['default']
    'SvgoIconsCloudRegistry': typeof import("../assets/icons/Cloud-registry")['default']
    'SvgoIconsCloudSatelliteConfig': typeof import("../assets/icons/Cloud-satellite--config")['default']
    'SvgoIconsCloudSatelliteLink': typeof import("../assets/icons/Cloud-satellite--link")['default']
    'SvgoIconsCloudSatelliteServices': typeof import("../assets/icons/Cloud-satellite--services")['default']
    'SvgoIconsCloudSatellite': typeof import("../assets/icons/Cloud-satellite")['default']
    'SvgoIconsCloudServices': typeof import("../assets/icons/Cloud-services")['default']
    'SvgoIconsCloud': typeof import("../assets/icons/Cloud")['default']
    'SvgoIconsCloudy': typeof import("../assets/icons/Cloudy")['default']
    'SvgoIconsCobbAngle': typeof import("../assets/icons/Cobb-angle")['default']
    'SvgoIconsCodeHide': typeof import("../assets/icons/Code--hide")['default']
    'SvgoIconsCodeReference': typeof import("../assets/icons/Code--reference")['default']
    'SvgoIconsCodeBlock': typeof import("../assets/icons/Code-block")['default']
    'SvgoIconsCodeSigningService': typeof import("../assets/icons/Code-signing-service")['default']
    'SvgoIconsCode': typeof import("../assets/icons/Code")['default']
    'SvgoIconsCognitive': typeof import("../assets/icons/Cognitive")['default']
    'SvgoIconsCollaborate': typeof import("../assets/icons/Collaborate")['default']
    'SvgoIconsCollapseAll': typeof import("../assets/icons/Collapse-all")['default']
    'SvgoIconsCollapseCategories': typeof import("../assets/icons/Collapse-categories")['default']
    'SvgoIconsColorPalette': typeof import("../assets/icons/Color-palette")['default']
    'SvgoIconsColorSwitch': typeof import("../assets/icons/Color-switch")['default']
    'SvgoIconsColumnDelete': typeof import("../assets/icons/Column--delete")['default']
    'SvgoIconsColumnInsert': typeof import("../assets/icons/Column--insert")['default']
    'SvgoIconsColumnDependency': typeof import("../assets/icons/Column-dependency")['default']
    'SvgoIconsColumn': typeof import("../assets/icons/Column")['default']
    'SvgoIconsCommit': typeof import("../assets/icons/Commit")['default']
    'SvgoIconsCommunicationUnified': typeof import("../assets/icons/Communication--unified")['default']
    'SvgoIconsCompare': typeof import("../assets/icons/Compare")['default']
    'SvgoIconsCompass': typeof import("../assets/icons/Compass")['default']
    'SvgoIconsComposerEdit': typeof import("../assets/icons/Composer-edit")['default']
    'SvgoIconsConcept': typeof import("../assets/icons/Concept")['default']
    'SvgoIconsConditionPoint': typeof import("../assets/icons/Condition--point")['default']
    'SvgoIconsConditionWaitPoint': typeof import("../assets/icons/Condition--wait-point")['default']
    'SvgoIconsConnectRecursive': typeof import("../assets/icons/Connect--recursive")['default']
    'SvgoIconsConnectReference': typeof import("../assets/icons/Connect--reference")['default']
    'SvgoIconsConnectSource': typeof import("../assets/icons/Connect--source")['default']
    'SvgoIconsConnectTarget': typeof import("../assets/icons/Connect--target")['default']
    'SvgoIconsConnect': typeof import("../assets/icons/Connect")['default']
    'SvgoIconsConnectionReceive': typeof import("../assets/icons/Connection--receive")['default']
    'SvgoIconsConnectionSend': typeof import("../assets/icons/Connection--send")['default']
    'SvgoIconsConnectionTwoWay': typeof import("../assets/icons/Connection--two-way")['default']
    'SvgoIconsConnectionUsage': typeof import("../assets/icons/Connection--usage")['default']
    'SvgoIconsConnectionFlowUsage': typeof import("../assets/icons/Connection-flow--usage")['default']
    'SvgoIconsConnectionSignalOff': typeof import("../assets/icons/Connection-signal--off")['default']
    'SvgoIconsConnectionSignal': typeof import("../assets/icons/Connection-signal")['default']
    'SvgoIconsConstraint': typeof import("../assets/icons/Constraint")['default']
    'SvgoIconsConstruction': typeof import("../assets/icons/Construction")['default']
    'SvgoIconsContainerEngine': typeof import("../assets/icons/Container--engine")['default']
    'SvgoIconsContainerImage': typeof import("../assets/icons/Container--image")['default']
    'SvgoIconsContainerRuntimeMonitor': typeof import("../assets/icons/Container--runtime-monitor")['default']
    'SvgoIconsContainerRuntime': typeof import("../assets/icons/Container--runtime")['default']
    'SvgoIconsContainerImagePull': typeof import("../assets/icons/Container-image--pull")['default']
    'SvgoIconsContainerImagePushPull': typeof import("../assets/icons/Container-image--push-pull")['default']
    'SvgoIconsContainerImagePush': typeof import("../assets/icons/Container-image--push")['default']
    'SvgoIconsContainerRegistry': typeof import("../assets/icons/Container-registry")['default']
    'SvgoIconsContainerServices': typeof import("../assets/icons/Container-services")['default']
    'SvgoIconsContainerSoftware': typeof import("../assets/icons/Container-software")['default']
    'SvgoIconsContentDeliveryNetwork': typeof import("../assets/icons/Content-delivery-network")['default']
    'SvgoIconsContentView': typeof import("../assets/icons/Content-view")['default']
    'SvgoIconsContinueFilled': typeof import("../assets/icons/Continue--filled")['default']
    'SvgoIconsContinue': typeof import("../assets/icons/Continue")['default']
    'SvgoIconsContinuousDeployment': typeof import("../assets/icons/Continuous-deployment")['default']
    'SvgoIconsContinuousIntegration': typeof import("../assets/icons/Continuous-integration")['default']
    'SvgoIconsContourDraw': typeof import("../assets/icons/Contour--draw")['default']
    'SvgoIconsContourEdit': typeof import("../assets/icons/Contour--edit")['default']
    'SvgoIconsContourFinding': typeof import("../assets/icons/Contour-finding")['default']
    'SvgoIconsContrast': typeof import("../assets/icons/Contrast")['default']
    'SvgoIconsConvertToCloud': typeof import("../assets/icons/Convert-to-cloud")['default']
    'SvgoIconsCookie': typeof import("../assets/icons/Cookie")['default']
    'SvgoIconsCopyFile': typeof import("../assets/icons/Copy--file")['default']
    'SvgoIconsCopyLink': typeof import("../assets/icons/Copy--link")['default']
    'SvgoIconsCopy': typeof import("../assets/icons/Copy")['default']
    'SvgoIconsCorn': typeof import("../assets/icons/Corn")['default']
    'SvgoIconsCorner': typeof import("../assets/icons/Corner")['default']
    'SvgoIconsCoronavirus': typeof import("../assets/icons/Coronavirus")['default']
    'SvgoIconsCostTotal': typeof import("../assets/icons/Cost--total")['default']
    'SvgoIconsCost': typeof import("../assets/icons/Cost")['default']
    'SvgoIconsCough': typeof import("../assets/icons/Cough")['default']
    'SvgoIconsCourse': typeof import("../assets/icons/Course")['default']
    'SvgoIconsCovariate': typeof import("../assets/icons/Covariate")['default']
    'SvgoIconsCredentials': typeof import("../assets/icons/Credentials")['default']
    'SvgoIconsCriticalSeverity': typeof import("../assets/icons/Critical-severity")['default']
    'SvgoIconsCritical': typeof import("../assets/icons/Critical")['default']
    'SvgoIconsCropGrowth': typeof import("../assets/icons/Crop-growth")['default']
    'SvgoIconsCropHealth': typeof import("../assets/icons/Crop-health")['default']
    'SvgoIconsCrop': typeof import("../assets/icons/Crop")['default']
    'SvgoIconsCrossReference': typeof import("../assets/icons/Cross-reference")['default']
    'SvgoIconsCrossTab': typeof import("../assets/icons/Cross-tab")['default']
    'SvgoIconsCrossroads': typeof import("../assets/icons/Crossroads")['default']
    'SvgoIconsCrowdReportFilled': typeof import("../assets/icons/Crowd-report--filled")['default']
    'SvgoIconsCrowdReport': typeof import("../assets/icons/Crowd-report")['default']
    'SvgoIconsCsv': typeof import("../assets/icons/Csv")['default']
    'SvgoIconsCu1': typeof import("../assets/icons/Cu1")['default']
    'SvgoIconsCu3': typeof import("../assets/icons/Cu3")['default']
    'SvgoIconsCubeView': typeof import("../assets/icons/Cube-view")['default']
    'SvgoIconsCube': typeof import("../assets/icons/Cube")['default']
    'SvgoIconsCurrencyBaht': typeof import("../assets/icons/Currency--baht")['default']
    'SvgoIconsCurrencyDollar': typeof import("../assets/icons/Currency--dollar")['default']
    'SvgoIconsCurrencyEuro': typeof import("../assets/icons/Currency--euro")['default']
    'SvgoIconsCurrencyLira': typeof import("../assets/icons/Currency--lira")['default']
    'SvgoIconsCurrencyPound': typeof import("../assets/icons/Currency--pound")['default']
    'SvgoIconsCurrencyRuble': typeof import("../assets/icons/Currency--ruble")['default']
    'SvgoIconsCurrencyRupee': typeof import("../assets/icons/Currency--rupee")['default']
    'SvgoIconsCurrencyShekel': typeof import("../assets/icons/Currency--shekel")['default']
    'SvgoIconsCurrencyWon': typeof import("../assets/icons/Currency--won")['default']
    'SvgoIconsCurrencyYen': typeof import("../assets/icons/Currency--yen")['default']
    'SvgoIconsCurrency': typeof import("../assets/icons/Currency")['default']
    'SvgoIconsCursor1': typeof import("../assets/icons/Cursor--1")['default']
    'SvgoIconsCursor2': typeof import("../assets/icons/Cursor--2")['default']
    'SvgoIconsCustomerService': typeof import("../assets/icons/Customer-service")['default']
    'SvgoIconsCustomer': typeof import("../assets/icons/Customer")['default']
    'SvgoIconsCutInHalf': typeof import("../assets/icons/Cut-in-half")['default']
    'SvgoIconsCutOut': typeof import("../assets/icons/Cut-out")['default']
    'SvgoIconsCut': typeof import("../assets/icons/Cut")['default']
    'SvgoIconsCy': typeof import("../assets/icons/Cy")['default']
    'SvgoIconsCyclist': typeof import("../assets/icons/Cyclist")['default']
    'SvgoIconsCz': typeof import("../assets/icons/Cz")['default']
    'SvgoIconsDashboardReference': typeof import("../assets/icons/Dashboard--reference")['default']
    'SvgoIconsDashboard': typeof import("../assets/icons/Dashboard")['default']
    'SvgoIconsData1': typeof import("../assets/icons/Data--1")['default']
    'SvgoIconsData2': typeof import("../assets/icons/Data--2")['default']
    'SvgoIconsDataBaseAlt': typeof import("../assets/icons/Data--base--alt")['default']
    'SvgoIconsDataBase': typeof import("../assets/icons/Data--base")['default']
    'SvgoIconsDataCategorical': typeof import("../assets/icons/Data--categorical")['default']
    'SvgoIconsDataCenter': typeof import("../assets/icons/Data--center")['default']
    'SvgoIconsDataCheck': typeof import("../assets/icons/Data--check")['default']
    'SvgoIconsDataConnected': typeof import("../assets/icons/Data--connected")['default']
    'SvgoIconsDataError': typeof import("../assets/icons/Data--error")['default']
    'SvgoIconsDataFormat': typeof import("../assets/icons/Data--format")['default']
    'SvgoIconsDataReference': typeof import("../assets/icons/Data--reference")['default']
    'SvgoIconsDataRegular': typeof import("../assets/icons/Data--regular")['default']
    'SvgoIconsDataSet': typeof import("../assets/icons/Data--set")['default']
    'SvgoIconsDataStructured': typeof import("../assets/icons/Data--structured")['default']
    'SvgoIconsDataUnreal': typeof import("../assets/icons/Data--unreal")['default']
    'SvgoIconsDataUnstructured': typeof import("../assets/icons/Data--unstructured")['default']
    'SvgoIconsDataViewAlt': typeof import("../assets/icons/Data--view--alt")['default']
    'SvgoIconsDataView': typeof import("../assets/icons/Data--view")['default']
    'SvgoIconsDataAccessor': typeof import("../assets/icons/Data-accessor")['default']
    'SvgoIconsDataAnalytics': typeof import("../assets/icons/Data-analytics")['default']
    'SvgoIconsDataBackup': typeof import("../assets/icons/Data-backup")['default']
    'SvgoIconsDataBin': typeof import("../assets/icons/Data-bin")['default']
    'SvgoIconsDataBlob': typeof import("../assets/icons/Data-blob")['default']
    'SvgoIconsDataClass': typeof import("../assets/icons/Data-class")['default']
    'SvgoIconsDataCollection': typeof import("../assets/icons/Data-collection")['default']
    'SvgoIconsDataDefinition': typeof import("../assets/icons/Data-definition")['default']
    'SvgoIconsDataDiode': typeof import("../assets/icons/Data-diode")['default']
    'SvgoIconsDataEnrichmentAdd': typeof import("../assets/icons/Data-enrichment--add")['default']
    'SvgoIconsDataEnrichment': typeof import("../assets/icons/Data-enrichment")['default']
    'SvgoIconsDataPlayer': typeof import("../assets/icons/Data-player")['default']
    'SvgoIconsDataQualityDefinition': typeof import("../assets/icons/Data-quality-definition")['default']
    'SvgoIconsDataRefineryReference': typeof import("../assets/icons/Data-refinery--reference")['default']
    'SvgoIconsDataRefinery': typeof import("../assets/icons/Data-refinery")['default']
    'SvgoIconsDataShare': typeof import("../assets/icons/Data-share")['default']
    'SvgoIconsDataTableReference': typeof import("../assets/icons/Data-table--reference")['default']
    'SvgoIconsDataTable': typeof import("../assets/icons/Data-table")['default']
    'SvgoIconsDataVis1': typeof import("../assets/icons/Data-vis--1")['default']
    'SvgoIconsDataVis2': typeof import("../assets/icons/Data-vis--2")['default']
    'SvgoIconsDataVis3': typeof import("../assets/icons/Data-vis--3")['default']
    'SvgoIconsDataVis4': typeof import("../assets/icons/Data-vis--4")['default']
    'SvgoIconsDataVolumeAlt': typeof import("../assets/icons/Data-volume--alt")['default']
    'SvgoIconsDataVolume': typeof import("../assets/icons/Data-volume")['default']
    'SvgoIconsDatabaseDatastax': typeof import("../assets/icons/Database--datastax")['default']
    'SvgoIconsDatabaseElastic': typeof import("../assets/icons/Database--elastic")['default']
    'SvgoIconsDatabaseEnterprisedb': typeof import("../assets/icons/Database--enterprisedb")['default']
    'SvgoIconsDatabaseEtcd': typeof import("../assets/icons/Database--etcd")['default']
    'SvgoIconsDatabaseMessaging': typeof import("../assets/icons/Database--messaging")['default']
    'SvgoIconsDatabaseMongodb': typeof import("../assets/icons/Database--mongodb")['default']
    'SvgoIconsDatabasePostgresql': typeof import("../assets/icons/Database--postgresql")['default']
    'SvgoIconsDatabaseRabbit': typeof import("../assets/icons/Database--rabbit")['default']
    'SvgoIconsDatabaseRedis': typeof import("../assets/icons/Database--redis")['default']
    'SvgoIconsDatastore': typeof import("../assets/icons/Datastore")['default']
    'SvgoIconsDb2BufferPool': typeof import("../assets/icons/Db2--buffer-pool")['default']
    'SvgoIconsDb2DataSharingGroup': typeof import("../assets/icons/Db2--data-sharing-group")['default']
    'SvgoIconsDb2Database': typeof import("../assets/icons/Db2--database")['default']
    'SvgoIconsDebug': typeof import("../assets/icons/Debug")['default']
    'SvgoIconsDecisionNode': typeof import("../assets/icons/Decision-node")['default']
    'SvgoIconsDecisionTree': typeof import("../assets/icons/Decision-tree")['default']
    'SvgoIconsDelete': typeof import("../assets/icons/Delete")['default']
    'SvgoIconsDeliveryAdd': typeof import("../assets/icons/Delivery--add")['default']
    'SvgoIconsDeliveryParcel': typeof import("../assets/icons/Delivery--parcel")['default']
    'SvgoIconsDeliveryTruck': typeof import("../assets/icons/Delivery-truck")['default']
    'SvgoIconsDelivery': typeof import("../assets/icons/Delivery")['default']
    'SvgoIconsDemo': typeof import("../assets/icons/Demo")['default']
    'SvgoIconsDenominate': typeof import("../assets/icons/Denominate")['default']
    'SvgoIconsDeparture': typeof import("../assets/icons/Departure")['default']
    'SvgoIconsDeployRules': typeof import("../assets/icons/Deploy-rules")['default']
    'SvgoIconsDeploy': typeof import("../assets/icons/Deploy")['default']
    'SvgoIconsDeploymentPattern': typeof import("../assets/icons/Deployment-pattern")['default']
    'SvgoIconsDeploymentPolicy': typeof import("../assets/icons/Deployment-policy")['default']
    'SvgoIconsDeploymentUnitData': typeof import("../assets/icons/Deployment-unit--data")['default']
    'SvgoIconsDeploymentUnitExecution': typeof import("../assets/icons/Deployment-unit--execution")['default']
    'SvgoIconsDeploymentUnitInstallation1': typeof import("../assets/icons/Deployment-unit--installation1")['default']
    'SvgoIconsDeploymentUnitPresentation': typeof import("../assets/icons/Deployment-unit--presentation")['default']
    'SvgoIconsDeploymentUnitTechnicalData': typeof import("../assets/icons/Deployment-unit--technical--data")['default']
    'SvgoIconsDeploymentUnitTechnicalExecution': typeof import("../assets/icons/Deployment-unit--technical--execution")['default']
    'SvgoIconsDeploymentUnitTechnicalInstallation': typeof import("../assets/icons/Deployment-unit--technical--installation")['default']
    'SvgoIconsDeploymentUnitTechnicalPresentation': typeof import("../assets/icons/Deployment-unit--technical--presentation")['default']
    'SvgoIconsDeskAdjustable': typeof import("../assets/icons/Desk--adjustable")['default']
    'SvgoIconsDevelopment': typeof import("../assets/icons/Development")['default']
    'SvgoIconsDevicesApps': typeof import("../assets/icons/Devices--apps")['default']
    'SvgoIconsDevices': typeof import("../assets/icons/Devices")['default']
    'SvgoIconsDewPointFilled': typeof import("../assets/icons/Dew-point--filled")['default']
    'SvgoIconsDewPoint': typeof import("../assets/icons/Dew-point")['default']
    'SvgoIconsDiagramReference': typeof import("../assets/icons/Diagram--reference")['default']
    'SvgoIconsDiagram': typeof import("../assets/icons/Diagram")['default']
    'SvgoIconsDiamondOutline': typeof import("../assets/icons/Diamond--outline")['default']
    'SvgoIconsDiamondSolid': typeof import("../assets/icons/Diamond--solid")['default']
    'SvgoIconsDiamondFill': typeof import("../assets/icons/Diamond-fill")['default']
    'SvgoIconsDicom6000': typeof import("../assets/icons/Dicom--6000")['default']
    'SvgoIconsDicomOverlay': typeof import("../assets/icons/Dicom--overlay")['default']
    'SvgoIconsDirectionBearRight01Filled': typeof import("../assets/icons/Direction--bear-right--01--filled")['default']
    'SvgoIconsDirectionBearRight01': typeof import("../assets/icons/Direction--bear-right--01")['default']
    'SvgoIconsDirectionBearRight02Filled': typeof import("../assets/icons/Direction--bear-right--02--filled")['default']
    'SvgoIconsDirectionBearRight02': typeof import("../assets/icons/Direction--bear-right--02")['default']
    'SvgoIconsDirectionCurveFilled': typeof import("../assets/icons/Direction--curve--filled")['default']
    'SvgoIconsDirectionCurve': typeof import("../assets/icons/Direction--curve")['default']
    'SvgoIconsDirectionForkFilled': typeof import("../assets/icons/Direction--fork--filled")['default']
    'SvgoIconsDirectionFork': typeof import("../assets/icons/Direction--fork")['default']
    'SvgoIconsDirectionLoopLeftFilled': typeof import("../assets/icons/Direction--loop-left--filled")['default']
    'SvgoIconsDirectionLoopLeft': typeof import("../assets/icons/Direction--loop-left")['default']
    'SvgoIconsDirectionLoopRightFilled': typeof import("../assets/icons/Direction--loop-right--filled")['default']
    'SvgoIconsDirectionLoopRight': typeof import("../assets/icons/Direction--loop-right")['default']
    'SvgoIconsDirectionMergeFilled': typeof import("../assets/icons/Direction--merge--filled")['default']
    'SvgoIconsDirectionMerge': typeof import("../assets/icons/Direction--merge")['default']
    'SvgoIconsDirectionRight01Filled': typeof import("../assets/icons/Direction--right--01--filled")['default']
    'SvgoIconsDirectionRight01': typeof import("../assets/icons/Direction--right--01")['default']
    'SvgoIconsDirectionRight02Filled': typeof import("../assets/icons/Direction--right--02--filled")['default']
    'SvgoIconsDirectionRight02': typeof import("../assets/icons/Direction--right--02")['default']
    'SvgoIconsDirectionRotaryFirstRightFilled': typeof import("../assets/icons/Direction--rotary--first-right--filled")['default']
    'SvgoIconsDirectionRotaryFirstRight': typeof import("../assets/icons/Direction--rotary--first-right")['default']
    'SvgoIconsDirectionRotaryRightFilled': typeof import("../assets/icons/Direction--rotary--right--filled")['default']
    'SvgoIconsDirectionRotaryRight': typeof import("../assets/icons/Direction--rotary--right")['default']
    'SvgoIconsDirectionRotaryStraightFilled': typeof import("../assets/icons/Direction--rotary--straight--filled")['default']
    'SvgoIconsDirectionRotaryStraight': typeof import("../assets/icons/Direction--rotary--straight")['default']
    'SvgoIconsDirectionSharpTurnFilled': typeof import("../assets/icons/Direction--sharp-turn--filled")['default']
    'SvgoIconsDirectionSharpTurn': typeof import("../assets/icons/Direction--sharp-turn")['default']
    'SvgoIconsDirectionStraightFilled': typeof import("../assets/icons/Direction--straight--filled")['default']
    'SvgoIconsDirectionStraightRightFilled': typeof import("../assets/icons/Direction--straight--right--filled")['default']
    'SvgoIconsDirectionStraightRight': typeof import("../assets/icons/Direction--straight--right")['default']
    'SvgoIconsDirectionStraight': typeof import("../assets/icons/Direction--straight")['default']
    'SvgoIconsDirectionUTurnFilled': typeof import("../assets/icons/Direction--u-turn--filled")['default']
    'SvgoIconsDirectionUTurn': typeof import("../assets/icons/Direction--u-turn")['default']
    'SvgoIconsDirectoryDomain': typeof import("../assets/icons/Directory-domain")['default']
    'SvgoIconsDistributeHorizontalCenter': typeof import("../assets/icons/Distribute--horizontal-center")['default']
    'SvgoIconsDistributeHorizontalLeft': typeof import("../assets/icons/Distribute--horizontal-left")['default']
    'SvgoIconsDistributeHorizontalRight': typeof import("../assets/icons/Distribute--horizontal-right")['default']
    'SvgoIconsDistributeVerticalBottom': typeof import("../assets/icons/Distribute--vertical-bottom")['default']
    'SvgoIconsDistributeVerticalCenter': typeof import("../assets/icons/Distribute--vertical-center")['default']
    'SvgoIconsDistributeVerticalTop': typeof import("../assets/icons/Distribute--vertical-top")['default']
    'SvgoIconsDna': typeof import("../assets/icons/Dna")['default']
    'SvgoIconsDnsServices': typeof import("../assets/icons/Dns-services")['default']
    'SvgoIconsDoc': typeof import("../assets/icons/Doc")['default']
    'SvgoIconsDocumentAdd': typeof import("../assets/icons/Document--add")['default']
    'SvgoIconsDocumentAttachment': typeof import("../assets/icons/Document--attachment")['default']
    'SvgoIconsDocumentAudio': typeof import("../assets/icons/Document--audio")['default']
    'SvgoIconsDocumentBlank': typeof import("../assets/icons/Document--blank")['default']
    'SvgoIconsDocumentComment': typeof import("../assets/icons/Document--comment")['default']
    'SvgoIconsDocumentConfiguration': typeof import("../assets/icons/Document--configuration")['default']
    'SvgoIconsDocumentDownload': typeof import("../assets/icons/Document--download")['default']
    'SvgoIconsDocumentEpdf': typeof import("../assets/icons/Document--epdf")['default']
    'SvgoIconsDocumentExport': typeof import("../assets/icons/Document--export")['default']
    'SvgoIconsDocumentHorizontal': typeof import("../assets/icons/Document--horizontal")['default']
    'SvgoIconsDocumentImport': typeof import("../assets/icons/Document--import")['default']
    'SvgoIconsDocumentMultiple01': typeof import("../assets/icons/Document--multiple-01")['default']
    'SvgoIconsDocumentMultiple02': typeof import("../assets/icons/Document--multiple-02")['default']
    'SvgoIconsDocumentPdf': typeof import("../assets/icons/Document--pdf")['default']
    'SvgoIconsDocumentPreliminary': typeof import("../assets/icons/Document--preliminary")['default']
    'SvgoIconsDocumentProtected': typeof import("../assets/icons/Document--protected")['default']
    'SvgoIconsDocumentRequirements': typeof import("../assets/icons/Document--requirements")['default']
    'SvgoIconsDocumentSecurity': typeof import("../assets/icons/Document--security")['default']
    'SvgoIconsDocumentSigned': typeof import("../assets/icons/Document--signed")['default']
    'SvgoIconsDocumentSketch': typeof import("../assets/icons/Document--sketch")['default']
    'SvgoIconsDocumentSubject': typeof import("../assets/icons/Document--subject")['default']
    'SvgoIconsDocumentSubtract': typeof import("../assets/icons/Document--subtract")['default']
    'SvgoIconsDocumentTasks': typeof import("../assets/icons/Document--tasks")['default']
    'SvgoIconsDocumentUnknown': typeof import("../assets/icons/Document--unknown")['default']
    'SvgoIconsDocumentUnprotected': typeof import("../assets/icons/Document--unprotected")['default']
    'SvgoIconsDocumentVertical': typeof import("../assets/icons/Document--vertical")['default']
    'SvgoIconsDocumentVideo': typeof import("../assets/icons/Document--video")['default']
    'SvgoIconsDocumentView': typeof import("../assets/icons/Document--view")['default']
    'SvgoIconsDocumentWordProcessorReference': typeof import("../assets/icons/Document--word-processor--reference")['default']
    'SvgoIconsDocumentWordProcessor': typeof import("../assets/icons/Document--word-processor")['default']
    'SvgoIconsDocumentSentiment': typeof import("../assets/icons/Document-sentiment")['default']
    'SvgoIconsDocument': typeof import("../assets/icons/Document")['default']
    'SvgoIconsDogWalker': typeof import("../assets/icons/Dog-walker")['default']
    'SvgoIconsDotMark': typeof import("../assets/icons/Dot-mark")['default']
    'SvgoIconsDoubleInteger': typeof import("../assets/icons/Double-integer")['default']
    'SvgoIconsDownToBottom': typeof import("../assets/icons/Down-to-bottom")['default']
    'SvgoIconsDownloadStudy': typeof import("../assets/icons/Download-study")['default']
    'SvgoIconsDownload': typeof import("../assets/icons/Download")['default']
    'SvgoIconsDownstream': typeof import("../assets/icons/Downstream")['default']
    'SvgoIconsDragHorizontal': typeof import("../assets/icons/Drag--horizontal")['default']
    'SvgoIconsDragVertical': typeof import("../assets/icons/Drag--vertical")['default']
    'SvgoIconsDraggable': typeof import("../assets/icons/Draggable")['default']
    'SvgoIconsDraw': typeof import("../assets/icons/Draw")['default']
    'SvgoIconsDrillBack': typeof import("../assets/icons/Drill-back")['default']
    'SvgoIconsDrillDown': typeof import("../assets/icons/Drill-down")['default']
    'SvgoIconsDrillThrough': typeof import("../assets/icons/Drill-through")['default']
    'SvgoIconsDrink01': typeof import("../assets/icons/Drink--01")['default']
    'SvgoIconsDrink02': typeof import("../assets/icons/Drink--02")['default']
    'SvgoIconsDriverAnalysis': typeof import("../assets/icons/Driver-analysis")['default']
    'SvgoIconsDroneDelivery': typeof import("../assets/icons/Drone--delivery")['default']
    'SvgoIconsDroneFront': typeof import("../assets/icons/Drone--front")['default']
    'SvgoIconsDroneVideo': typeof import("../assets/icons/Drone--video")['default']
    'SvgoIconsDrone': typeof import("../assets/icons/Drone")['default']
    'SvgoIconsDropPhotoFilled': typeof import("../assets/icons/Drop-photo--filled")['default']
    'SvgoIconsDropPhoto': typeof import("../assets/icons/Drop-photo")['default']
    'SvgoIconsDrought': typeof import("../assets/icons/Drought")['default']
    'SvgoIconsDvr': typeof import("../assets/icons/Dvr")['default']
    'SvgoIconsEarthAmericasFilled': typeof import("../assets/icons/Earth--americas--filled")['default']
    'SvgoIconsEarthAmericas': typeof import("../assets/icons/Earth--americas")['default']
    'SvgoIconsEarthEuropeAfricaFilled': typeof import("../assets/icons/Earth--europe-africa--filled")['default']
    'SvgoIconsEarthEuropeAfrica': typeof import("../assets/icons/Earth--europe-africa")['default']
    'SvgoIconsEarthFilled': typeof import("../assets/icons/Earth--filled")['default']
    'SvgoIconsEarthSoutheastAsiaFilled': typeof import("../assets/icons/Earth--southeast-asia--filled")['default']
    'SvgoIconsEarthSoutheastAsia': typeof import("../assets/icons/Earth--southeast-asia")['default']
    'SvgoIconsEarth': typeof import("../assets/icons/Earth")['default']
    'SvgoIconsEarthquake': typeof import("../assets/icons/Earthquake")['default']
    'SvgoIconsEdgeCluster': typeof import("../assets/icons/Edge-cluster")['default']
    'SvgoIconsEdgeDevice': typeof import("../assets/icons/Edge-device")['default']
    'SvgoIconsEdgeEnhancement01': typeof import("../assets/icons/Edge-enhancement--01")['default']
    'SvgoIconsEdgeEnhancement02': typeof import("../assets/icons/Edge-enhancement--02")['default']
    'SvgoIconsEdgeEnhancement03': typeof import("../assets/icons/Edge-enhancement--03")['default']
    'SvgoIconsEdgeEnhancement': typeof import("../assets/icons/Edge-enhancement")['default']
    'SvgoIconsEdgeNodeAlt': typeof import("../assets/icons/Edge-node--alt")['default']
    'SvgoIconsEdgeNode': typeof import("../assets/icons/Edge-node")['default']
    'SvgoIconsEdgeService': typeof import("../assets/icons/Edge-service")['default']
    'SvgoIconsEditOff': typeof import("../assets/icons/Edit--off")['default']
    'SvgoIconsEdit': typeof import("../assets/icons/Edit")['default']
    'SvgoIconsEdtLoop': typeof import("../assets/icons/Edt-loop")['default']
    'SvgoIconsEducation': typeof import("../assets/icons/Education")['default']
    'SvgoIconsEmailNew': typeof import("../assets/icons/Email--new")['default']
    'SvgoIconsEmail': typeof import("../assets/icons/Email")['default']
    'SvgoIconsEncryption': typeof import("../assets/icons/Encryption")['default']
    'SvgoIconsEnergyRenewable': typeof import("../assets/icons/Energy--renewable")['default']
    'SvgoIconsEnterprise': typeof import("../assets/icons/Enterprise")['default']
    'SvgoIconsEnumerationDefinition': typeof import("../assets/icons/Enumeration--definition")['default']
    'SvgoIconsEnumerationUsage': typeof import("../assets/icons/Enumeration--usage")['default']
    'SvgoIconsEqualApproximately': typeof import("../assets/icons/Equal--approximately")['default']
    'SvgoIconsEqualizer': typeof import("../assets/icons/Equalizer")['default']
    'SvgoIconsErase3d': typeof import("../assets/icons/Erase--3d")['default']
    'SvgoIconsErase': typeof import("../assets/icons/Erase")['default']
    'SvgoIconsErrorFilled': typeof import("../assets/icons/Error--filled")['default']
    'SvgoIconsErrorOutline': typeof import("../assets/icons/Error--outline")['default']
    'SvgoIconsError': typeof import("../assets/icons/Error")['default']
    'SvgoIconsEventChange': typeof import("../assets/icons/Event--change")['default']
    'SvgoIconsEventIncident': typeof import("../assets/icons/Event--incident")['default']
    'SvgoIconsEventSchedule': typeof import("../assets/icons/Event--schedule")['default']
    'SvgoIconsEventWarning': typeof import("../assets/icons/Event--warning")['default']
    'SvgoIconsEvent': typeof import("../assets/icons/Event")['default']
    'SvgoIconsEventsAlt': typeof import("../assets/icons/Events--alt")['default']
    'SvgoIconsEvents': typeof import("../assets/icons/Events")['default']
    'SvgoIconsExamMode': typeof import("../assets/icons/Exam-mode")['default']
    'SvgoIconsExecutableProgram': typeof import("../assets/icons/Executable-program")['default']
    'SvgoIconsExit': typeof import("../assets/icons/Exit")['default']
    'SvgoIconsExpandAll': typeof import("../assets/icons/Expand-all")['default']
    'SvgoIconsExpandCategories': typeof import("../assets/icons/Expand-categories")['default']
    'SvgoIconsExplore': typeof import("../assets/icons/Explore")['default']
    'SvgoIconsExport': typeof import("../assets/icons/Export")['default']
    'SvgoIconsEyedropper': typeof import("../assets/icons/Eyedropper")['default']
    'SvgoIconsFaceActivatedAdd': typeof import("../assets/icons/Face--activated--add")['default']
    'SvgoIconsFaceActivatedFilled': typeof import("../assets/icons/Face--activated--filled")['default']
    'SvgoIconsFaceActivated': typeof import("../assets/icons/Face--activated")['default']
    'SvgoIconsFaceAdd': typeof import("../assets/icons/Face--add")['default']
    'SvgoIconsFaceCool': typeof import("../assets/icons/Face--cool")['default']
    'SvgoIconsFaceDissatisfiedFilled': typeof import("../assets/icons/Face--dissatisfied--filled")['default']
    'SvgoIconsFaceDissatisfied': typeof import("../assets/icons/Face--dissatisfied")['default']
    'SvgoIconsFaceDizzyFilled': typeof import("../assets/icons/Face--dizzy--filled")['default']
    'SvgoIconsFaceDizzy': typeof import("../assets/icons/Face--dizzy")['default']
    'SvgoIconsFaceMask': typeof import("../assets/icons/Face--mask")['default']
    'SvgoIconsFaceNeutralFilled': typeof import("../assets/icons/Face--neutral--filled")['default']
    'SvgoIconsFaceNeutral': typeof import("../assets/icons/Face--neutral")['default']
    'SvgoIconsFacePendingFilled': typeof import("../assets/icons/Face--pending--filled")['default']
    'SvgoIconsFacePending': typeof import("../assets/icons/Face--pending")['default']
    'SvgoIconsFaceSatisfiedFilled': typeof import("../assets/icons/Face--satisfied--filled")['default']
    'SvgoIconsFaceSatisfied': typeof import("../assets/icons/Face--satisfied")['default']
    'SvgoIconsFaceWinkFilled': typeof import("../assets/icons/Face--wink--filled")['default']
    'SvgoIconsFaceWink': typeof import("../assets/icons/Face--wink")['default']
    'SvgoIconsFactor': typeof import("../assets/icons/Factor")['default']
    'SvgoIconsFade': typeof import("../assets/icons/Fade")['default']
    'SvgoIconsFavoriteFilled': typeof import("../assets/icons/Favorite--filled")['default']
    'SvgoIconsFavoriteHalf': typeof import("../assets/icons/Favorite--half")['default']
    'SvgoIconsFavorite': typeof import("../assets/icons/Favorite")['default']
    'SvgoIconsFeatureMembershipFilled': typeof import("../assets/icons/Feature-membership--filled")['default']
    'SvgoIconsFeatureMembership': typeof import("../assets/icons/Feature-membership")['default']
    'SvgoIconsFeatureTyping': typeof import("../assets/icons/Feature-typing")['default']
    'SvgoIconsFetchUploadCloud': typeof import("../assets/icons/Fetch-upload--cloud")['default']
    'SvgoIconsFetchUpload': typeof import("../assets/icons/Fetch-upload")['default']
    'SvgoIconsFileStorage': typeof import("../assets/icons/File-storage")['default']
    'SvgoIconsFilterEdit': typeof import("../assets/icons/Filter--edit")['default']
    'SvgoIconsFilterRemove': typeof import("../assets/icons/Filter--remove")['default']
    'SvgoIconsFilterReset': typeof import("../assets/icons/Filter--reset")['default']
    'SvgoIconsFilter': typeof import("../assets/icons/Filter")['default']
    'SvgoIconsFinance': typeof import("../assets/icons/Finance")['default']
    'SvgoIconsFingerprintRecognition': typeof import("../assets/icons/Fingerprint-recognition")['default']
    'SvgoIconsFire': typeof import("../assets/icons/Fire")['default']
    'SvgoIconsFirewallClassic': typeof import("../assets/icons/Firewall--classic")['default']
    'SvgoIconsFirewall': typeof import("../assets/icons/Firewall")['default']
    'SvgoIconsFishMultiple': typeof import("../assets/icons/Fish--multiple")['default']
    'SvgoIconsFish': typeof import("../assets/icons/Fish")['default']
    'SvgoIconsFitToHeight': typeof import("../assets/icons/Fit-to-height")['default']
    'SvgoIconsFitToScreen': typeof import("../assets/icons/Fit-to-screen")['default']
    'SvgoIconsFitToWidth1': typeof import("../assets/icons/Fit-to-width1")['default']
    'SvgoIconsFlagFilled': typeof import("../assets/icons/Flag--filled")['default']
    'SvgoIconsFlag': typeof import("../assets/icons/Flag")['default']
    'SvgoIconsFlaggingTaxi': typeof import("../assets/icons/Flagging-taxi")['default']
    'SvgoIconsFlashFilled': typeof import("../assets/icons/Flash--filled")['default']
    'SvgoIconsFlashOffFilled': typeof import("../assets/icons/Flash--off--filled")['default']
    'SvgoIconsFlashOff': typeof import("../assets/icons/Flash--off")['default']
    'SvgoIconsFlash': typeof import("../assets/icons/Flash")['default']
    'SvgoIconsFlightInternational': typeof import("../assets/icons/Flight--international")['default']
    'SvgoIconsFlightRoster': typeof import("../assets/icons/Flight--roster")['default']
    'SvgoIconsFlightSchedule': typeof import("../assets/icons/Flight--schedule")['default']
    'SvgoIconsFloatingIp': typeof import("../assets/icons/Floating-ip")['default']
    'SvgoIconsFloodWarning': typeof import("../assets/icons/Flood--warning")['default']
    'SvgoIconsFlood': typeof import("../assets/icons/Flood")['default']
    'SvgoIconsFloorplan': typeof import("../assets/icons/Floorplan")['default']
    'SvgoIconsFlowConnection': typeof import("../assets/icons/Flow--connection")['default']
    'SvgoIconsFlowData': typeof import("../assets/icons/Flow--data")['default']
    'SvgoIconsFlowModeler': typeof import("../assets/icons/Flow--modeler")['default']
    'SvgoIconsFlowStreamReference': typeof import("../assets/icons/Flow--stream--reference")['default']
    'SvgoIconsFlowStream': typeof import("../assets/icons/Flow--stream")['default']
    'SvgoIconsFlowLogsVpc': typeof import("../assets/icons/Flow-logs-vpc")['default']
    'SvgoIconsFlow': typeof import("../assets/icons/Flow")['default']
    'SvgoIconsFog': typeof import("../assets/icons/Fog")['default']
    'SvgoIconsFolderAdd': typeof import("../assets/icons/Folder--add")['default']
    'SvgoIconsFolderDetailsReference': typeof import("../assets/icons/Folder--details--reference")['default']
    'SvgoIconsFolderDetails': typeof import("../assets/icons/Folder--details")['default']
    'SvgoIconsFolderMoveTo': typeof import("../assets/icons/Folder--move-to")['default']
    'SvgoIconsFolderOff': typeof import("../assets/icons/Folder--off")['default']
    'SvgoIconsFolderOpen': typeof import("../assets/icons/Folder--open")['default']
    'SvgoIconsFolderParent': typeof import("../assets/icons/Folder--parent")['default']
    'SvgoIconsFolderShared': typeof import("../assets/icons/Folder--shared")['default']
    'SvgoIconsFolder': typeof import("../assets/icons/Folder")['default']
    'SvgoIconsFolders': typeof import("../assets/icons/Folders")['default']
    'SvgoIconsForecastHail30': typeof import("../assets/icons/Forecast--hail-30")['default']
    'SvgoIconsForecastHail': typeof import("../assets/icons/Forecast--hail")['default']
    'SvgoIconsForecastLightning30': typeof import("../assets/icons/Forecast--lightning-30")['default']
    'SvgoIconsForecastLightning': typeof import("../assets/icons/Forecast--lightning")['default']
    'SvgoIconsForkNode': typeof import("../assets/icons/Fork-node")['default']
    'SvgoIconsFork': typeof import("../assets/icons/Fork")['default']
    'SvgoIconsForum': typeof import("../assets/icons/Forum")['default']
    'SvgoIconsForward10': typeof import("../assets/icons/Forward--10")['default']
    'SvgoIconsForward30': typeof import("../assets/icons/Forward--30")['default']
    'SvgoIconsForward5': typeof import("../assets/icons/Forward--5")['default']
    'SvgoIconsFragile': typeof import("../assets/icons/Fragile")['default']
    'SvgoIconsFriendship': typeof import("../assets/icons/Friendship")['default']
    'SvgoIconsFruitBowl': typeof import("../assets/icons/Fruit-bowl")['default']
    'SvgoIconsFunctionMath': typeof import("../assets/icons/Function-math")['default']
    'SvgoIconsFunction': typeof import("../assets/icons/Function")['default']
    'SvgoIconsFusionBlender': typeof import("../assets/icons/Fusion-blender")['default']
    'SvgoIconsGameConsole': typeof import("../assets/icons/Game--console")['default']
    'SvgoIconsGameWireless': typeof import("../assets/icons/Game--wireless")['default']
    'SvgoIconsGamification': typeof import("../assets/icons/Gamification")['default']
    'SvgoIconsGasStationFilled': typeof import("../assets/icons/Gas-station--filled")['default']
    'SvgoIconsGasStation': typeof import("../assets/icons/Gas-station")['default']
    'SvgoIconsGatewayApi': typeof import("../assets/icons/Gateway--api")['default']
    'SvgoIconsGatewayMail': typeof import("../assets/icons/Gateway--mail")['default']
    'SvgoIconsGatewayPublic': typeof import("../assets/icons/Gateway--public")['default']
    'SvgoIconsGatewaySecurity': typeof import("../assets/icons/Gateway--security")['default']
    'SvgoIconsGatewayUserAccess': typeof import("../assets/icons/Gateway--user-access")['default']
    'SvgoIconsGatewayVpn': typeof import("../assets/icons/Gateway--vpn")['default']
    'SvgoIconsGateway': typeof import("../assets/icons/Gateway")['default']
    'SvgoIconsGears': typeof import("../assets/icons/Gears")['default']
    'SvgoIconsGemReference': typeof import("../assets/icons/Gem--reference")['default']
    'SvgoIconsGem': typeof import("../assets/icons/Gem")['default']
    'SvgoIconsGenderFemale': typeof import("../assets/icons/Gender--female")['default']
    'SvgoIconsGenderMale': typeof import("../assets/icons/Gender--male")['default']
    'SvgoIconsGeneratePdf': typeof import("../assets/icons/Generate-pdf")['default']
    'SvgoIconsGif': typeof import("../assets/icons/Gif")['default']
    'SvgoIconsGift': typeof import("../assets/icons/Gift")['default']
    'SvgoIconsGlobalLoanAndTrial': typeof import("../assets/icons/Global-loan-and-trial")['default']
    'SvgoIconsGlobe': typeof import("../assets/icons/Globe")['default']
    'SvgoIconsGradient': typeof import("../assets/icons/Gradient")['default']
    'SvgoIconsGraphicalDataFlow': typeof import("../assets/icons/Graphical-data-flow")['default']
    'SvgoIconsGrid': typeof import("../assets/icons/Grid")['default']
    'SvgoIconsGroupAccess': typeof import("../assets/icons/Group--access")['default']
    'SvgoIconsGroupAccount': typeof import("../assets/icons/Group--account")['default']
    'SvgoIconsGroupPresentation': typeof import("../assets/icons/Group--presentation")['default']
    'SvgoIconsGroupResource': typeof import("../assets/icons/Group--resource")['default']
    'SvgoIconsGroupSecurity': typeof import("../assets/icons/Group--security")['default']
    'SvgoIconsGroupObjectsNew': typeof import("../assets/icons/Group-objects--new")['default']
    'SvgoIconsGroupObjectsSave': typeof import("../assets/icons/Group-objects--save")['default']
    'SvgoIconsGroupObjects': typeof import("../assets/icons/Group-objects")['default']
    'SvgoIconsGroup': typeof import("../assets/icons/Group")['default']
    'SvgoIconsGrowth': typeof import("../assets/icons/Growth")['default']
    'SvgoIconsGuiManagement': typeof import("../assets/icons/Gui--management")['default']
    'SvgoIconsGui': typeof import("../assets/icons/Gui")['default']
    'SvgoIconsH': typeof import("../assets/icons/H")['default']
    'SvgoIconsHL7Attributes': typeof import("../assets/icons/HL7-attributes")['default']
    'SvgoIconsHail': typeof import("../assets/icons/Hail")['default']
    'SvgoIconsHangingProtocol': typeof import("../assets/icons/Hanging-protocol")['default']
    'SvgoIconsHarbor': typeof import("../assets/icons/Harbor")['default']
    'SvgoIconsHardwareSecurityModule': typeof import("../assets/icons/Hardware-security-module")['default']
    'SvgoIconsHashtag': typeof import("../assets/icons/Hashtag")['default']
    'SvgoIconsHazeNight': typeof import("../assets/icons/Haze--night")['default']
    'SvgoIconsHaze': typeof import("../assets/icons/Haze")['default']
    'SvgoIconsHdFilled': typeof import("../assets/icons/Hd--filled")['default']
    'SvgoIconsHd': typeof import("../assets/icons/Hd")['default']
    'SvgoIconsHdr': typeof import("../assets/icons/Hdr")['default']
    'SvgoIconsHeadphones': typeof import("../assets/icons/Headphones")['default']
    'SvgoIconsHeadset': typeof import("../assets/icons/Headset")['default']
    'SvgoIconsHealthCross': typeof import("../assets/icons/Health-cross")['default']
    'SvgoIconsHearing': typeof import("../assets/icons/Hearing")['default']
    'SvgoIconsHeatMap02': typeof import("../assets/icons/Heat-map--02")['default']
    'SvgoIconsHeatMap03': typeof import("../assets/icons/Heat-map--03")['default']
    'SvgoIconsHeatMapStocks': typeof import("../assets/icons/Heat-map--stocks")['default']
    'SvgoIconsHeatMap': typeof import("../assets/icons/Heat-map")['default']
    'SvgoIconsHelicopter': typeof import("../assets/icons/Helicopter")['default']
    'SvgoIconsHelpFilled': typeof import("../assets/icons/Help--filled")['default']
    'SvgoIconsHelpDesk': typeof import("../assets/icons/Help-desk")['default']
    'SvgoIconsHelp': typeof import("../assets/icons/Help")['default']
    'SvgoIconsHexagonOutline': typeof import("../assets/icons/Hexagon--outline")['default']
    'SvgoIconsHexagonSolid': typeof import("../assets/icons/Hexagon--solid")['default']
    'SvgoIconsHexagonVerticalOutline': typeof import("../assets/icons/Hexagon--vertical--outline")['default']
    'SvgoIconsHexagonVerticalSolid': typeof import("../assets/icons/Hexagon--vertical--solid")['default']
    'SvgoIconsHintonPlot': typeof import("../assets/icons/Hinton-plot")['default']
    'SvgoIconsHoleFillingCursor': typeof import("../assets/icons/Hole-filling--cursor")['default']
    'SvgoIconsHoleFilling': typeof import("../assets/icons/Hole-filling")['default']
    'SvgoIconsHome': typeof import("../assets/icons/Home")['default']
    'SvgoIconsHorizontalView': typeof import("../assets/icons/Horizontal-view")['default']
    'SvgoIconsHospitalBed': typeof import("../assets/icons/Hospital-bed")['default']
    'SvgoIconsHospital': typeof import("../assets/icons/Hospital")['default']
    'SvgoIconsHotel': typeof import("../assets/icons/Hotel")['default']
    'SvgoIconsHourglass': typeof import("../assets/icons/Hourglass")['default']
    'SvgoIconsHtmlReference': typeof import("../assets/icons/Html--reference")['default']
    'SvgoIconsHtml': typeof import("../assets/icons/Html")['default']
    'SvgoIconsHttp': typeof import("../assets/icons/Http")['default']
    'SvgoIconsHumidityAlt': typeof import("../assets/icons/Humidity--alt")['default']
    'SvgoIconsHumidity': typeof import("../assets/icons/Humidity")['default']
    'SvgoIconsHurricane': typeof import("../assets/icons/Hurricane")['default']
    'SvgoIconsHybridNetworkingAlt': typeof import("../assets/icons/Hybrid-networking--alt")['default']
    'SvgoIconsHybridNetworking': typeof import("../assets/icons/Hybrid-networking")['default']
    'SvgoIconsIBMAiOnZ': typeof import("../assets/icons/IBM--ai-on-z")['default']
    'SvgoIconsIBMAiopsInsights': typeof import("../assets/icons/IBM--aiops-insights")['default']
    'SvgoIconsIBMBluepay': typeof import("../assets/icons/IBM--bluepay")['default']
    'SvgoIconsIBMCloudant': typeof import("../assets/icons/IBM--cloudant")['default']
    'SvgoIconsIBMContentServices': typeof import("../assets/icons/IBM--content-services")['default']
    'SvgoIconsIBMDataProductExchange': typeof import("../assets/icons/IBM--data-product-exchange")['default']
    'SvgoIconsIBMDataReplication': typeof import("../assets/icons/IBM--data-replication")['default']
    'SvgoIconsIBMDatastage': typeof import("../assets/icons/IBM--datastage")['default']
    'SvgoIconsIBMDb2Alt': typeof import("../assets/icons/IBM--db2--alt")['default']
    'SvgoIconsIBMDb2Warehouse': typeof import("../assets/icons/IBM--db2-warehouse")['default']
    'SvgoIconsIBMDb2': typeof import("../assets/icons/IBM--db2")['default']
    'SvgoIconsIBMDynamicRouteServer': typeof import("../assets/icons/IBM--dynamic-route-server")['default']
    'SvgoIconsIBMEloAutomotiveCompliance': typeof import("../assets/icons/IBM--elo--automotive-compliance")['default']
    'SvgoIconsIBMEloEngineeringInsights': typeof import("../assets/icons/IBM--elo--engineering-insights")['default']
    'SvgoIconsIBMEloMethodComposer': typeof import("../assets/icons/IBM--elo--method-composer")['default']
    'SvgoIconsIBMEloPublishing': typeof import("../assets/icons/IBM--elo--publishing")['default']
    'SvgoIconsIBMEngineeringLifecycleMgmt': typeof import("../assets/icons/IBM--engineering-lifecycle-mgmt")['default']
    'SvgoIconsIBMEngineeringRequirementsDoorsNext': typeof import("../assets/icons/IBM--engineering-requirements-doors-next")['default']
    'SvgoIconsIBMEngineeringSystemsDesignRhapsodyModelManager': typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-model-manager")['default']
    'SvgoIconsIBMEngineeringSystemsDesignRhapsodySn1': typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-sn1")['default']
    'SvgoIconsIBMEngineeringSystemsDesignRhapsodySn2': typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-sn2")['default']
    'SvgoIconsIBMEngineeringSystemsDesignRhapsody': typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody")['default']
    'SvgoIconsIBMEngineeringTestMgmt': typeof import("../assets/icons/IBM--engineering-test-mgmt")['default']
    'SvgoIconsIBMEngineeringWorkflowMgmt': typeof import("../assets/icons/IBM--engineering-workflow-mgmt")['default']
    'SvgoIconsIBMEventAutomation': typeof import("../assets/icons/IBM--event-automation")['default']
    'SvgoIconsIBMEventEndpointMgmt': typeof import("../assets/icons/IBM--event-endpoint-mgmt")['default']
    'SvgoIconsIBMEventProcessing': typeof import("../assets/icons/IBM--event-processing")['default']
    'SvgoIconsIBMEventStreams': typeof import("../assets/icons/IBM--event-streams")['default']
    'SvgoIconsIBMGcm': typeof import("../assets/icons/IBM--gcm")['default']
    'SvgoIconsIBMIbv': typeof import("../assets/icons/IBM--ibv")['default']
    'SvgoIconsIBMInstana': typeof import("../assets/icons/IBM--instana")['default']
    'SvgoIconsIBMJrs': typeof import("../assets/icons/IBM--jrs")['default']
    'SvgoIconsIBMLaunchpadS4': typeof import("../assets/icons/IBM--launchpad-s4")['default']
    'SvgoIconsIBMLpa': typeof import("../assets/icons/IBM--lpa")['default']
    'SvgoIconsIBMLqe': typeof import("../assets/icons/IBM--lqe")['default']
    'SvgoIconsIBMMatch360': typeof import("../assets/icons/IBM--match-360")['default']
    'SvgoIconsIBMMq': typeof import("../assets/icons/IBM--mq")['default']
    'SvgoIconsIBMOpenEnterpriseLanguages': typeof import("../assets/icons/IBM--open-enterprise-languages")['default']
    'SvgoIconsIBMOpenshiftContainerPlatformOnVpcForRegulatedIndustries': typeof import("../assets/icons/IBM--openshift-container-platform-on-vpc-for-regulated-industries")['default']
    'SvgoIconsIBMPowerVsPrivateCloud': typeof import("../assets/icons/IBM--power-vs-private-cloud")['default']
    'SvgoIconsIBMPowerVs': typeof import("../assets/icons/IBM--power-vs")['default']
    'SvgoIconsIBMPowerWithVpc': typeof import("../assets/icons/IBM--power-with-vpc")['default']
    'SvgoIconsIBMPrivatePathServices': typeof import("../assets/icons/IBM--private-path-services")['default']
    'SvgoIconsIBMProcessMining': typeof import("../assets/icons/IBM--process-mining")['default']
    'SvgoIconsIBMSaasConsole': typeof import("../assets/icons/IBM--saas-console")['default']
    'SvgoIconsIBMSapOnPower': typeof import("../assets/icons/IBM--sap-on-power")['default']
    'SvgoIconsIBMSecureInfrastructureOnVpcForRegulatedIndustries': typeof import("../assets/icons/IBM--secure-infrastructure-on-vpc-for-regulated-industries")['default']
    'SvgoIconsIBMTelehealth': typeof import("../assets/icons/IBM--telehealth")['default']
    'SvgoIconsIBMTenet': typeof import("../assets/icons/IBM--tenet")['default']
    'SvgoIconsIBMToolchain': typeof import("../assets/icons/IBM--toolchain")['default']
    'SvgoIconsIBMTurbonomic': typeof import("../assets/icons/IBM--turbonomic")['default']
    'SvgoIconsIBMVpnForVpc': typeof import("../assets/icons/IBM--vpn-for-vpc")['default']
    'SvgoIconsIBMVsiOnVpcForRegulatedIndustries': typeof import("../assets/icons/IBM--vsi-on-vpc-for-regulated-industries")['default']
    'SvgoIconsIBMWaziDeploy': typeof import("../assets/icons/IBM--wazi-deploy")['default']
    'SvgoIconsIBMCloudHSM': typeof import("../assets/icons/IBM-cloud--HSM")['default']
    'SvgoIconsIBMCloudAppId': typeof import("../assets/icons/IBM-cloud--app-id")['default']
    'SvgoIconsIBMCloudBareMetalServer': typeof import("../assets/icons/IBM-cloud--bare-metal-server")['default']
    'SvgoIconsIBMCloudBareMetalServersVpc': typeof import("../assets/icons/IBM-cloud--bare-metal-servers-vpc")['default']
    'SvgoIconsIBMCloudCitrixDaas': typeof import("../assets/icons/IBM-cloud--citrix-daas")['default']
    'SvgoIconsIBMCloudContinuousDelivery': typeof import("../assets/icons/IBM-cloud--continuous-delivery")['default']
    'SvgoIconsIBMCloudDedicatedHost': typeof import("../assets/icons/IBM-cloud--dedicated-host")['default']
    'SvgoIconsIBMCloudDirectLink1Connect': typeof import("../assets/icons/IBM-cloud--direct-link-1--connect")['default']
    'SvgoIconsIBMCloudDirectLink1DedicatedHosting': typeof import("../assets/icons/IBM-cloud--direct-link-1--dedicated-hosting")['default']
    'SvgoIconsIBMCloudDirectLink1Dedicated': typeof import("../assets/icons/IBM-cloud--direct-link-1--dedicated")['default']
    'SvgoIconsIBMCloudDirectLink1Exchange': typeof import("../assets/icons/IBM-cloud--direct-link-1--exchange")['default']
    'SvgoIconsIBMCloudDirectLink2Connect': typeof import("../assets/icons/IBM-cloud--direct-link-2--connect")['default']
    'SvgoIconsIBMCloudDirectLink2DedicatedHosting': typeof import("../assets/icons/IBM-cloud--direct-link-2--dedicated-hosting")['default']
    'SvgoIconsIBMCloudDirectLink2Dedicated': typeof import("../assets/icons/IBM-cloud--direct-link-2--dedicated")['default']
    'SvgoIconsIBMCloudEventNotification': typeof import("../assets/icons/IBM-cloud--event-notification")['default']
    'SvgoIconsIBMCloudEventStreams': typeof import("../assets/icons/IBM-cloud--event-streams")['default']
    'SvgoIconsIBMCloudForEducation': typeof import("../assets/icons/IBM-cloud--for-education")['default']
    'SvgoIconsIBMCloudHpc': typeof import("../assets/icons/IBM-cloud--hpc")['default']
    'SvgoIconsIBMCloudHyperProtectCryptoServices': typeof import("../assets/icons/IBM-cloud--hyper-protect-crypto-services")['default']
    'SvgoIconsIBMCloudHyperProtectDbaas': typeof import("../assets/icons/IBM-cloud--hyper-protect-dbaas")['default']
    'SvgoIconsIBMCloudHyperProtectVs': typeof import("../assets/icons/IBM-cloud--hyper-protect-vs")['default']
    'SvgoIconsIBMCloudInternetServices': typeof import("../assets/icons/IBM-cloud--internet-services")['default']
    'SvgoIconsIBMCloudIpsecVpn': typeof import("../assets/icons/IBM-cloud--ipsec-vpn")['default']
    'SvgoIconsIBMCloudKeyProtect': typeof import("../assets/icons/IBM-cloud--key-protect")['default']
    'SvgoIconsIBMCloudKubernetesService': typeof import("../assets/icons/IBM-cloud--kubernetes-service")['default']
    'SvgoIconsIBMCloudLogging': typeof import("../assets/icons/IBM-cloud--logging")['default']
    'SvgoIconsIBMCloudMassDataMigration': typeof import("../assets/icons/IBM-cloud--mass-data-migration")['default']
    'SvgoIconsIBMCloudPal': typeof import("../assets/icons/IBM-cloud--pal")['default']
    'SvgoIconsIBMCloudPrivilegedAccessGateway': typeof import("../assets/icons/IBM-cloud--privileged-access-gateway")['default']
    'SvgoIconsIBMCloudProjects': typeof import("../assets/icons/IBM-cloud--projects")['default']
    'SvgoIconsIBMCloudResiliency': typeof import("../assets/icons/IBM-cloud--resiliency")['default']
    'SvgoIconsIBMCloudSecretsManager': typeof import("../assets/icons/IBM-cloud--secrets-manager")['default']
    'SvgoIconsIBMCloudSecurityComplianceCenterWorkloadProtection': typeof import("../assets/icons/IBM-cloud--security-compliance-center-workload-protection")['default']
    'SvgoIconsIBMCloudSecurityComplianceCenter': typeof import("../assets/icons/IBM-cloud--security-compliance-center")['default']
    'SvgoIconsIBMCloudSubnets': typeof import("../assets/icons/IBM-cloud--subnets")['default']
    'SvgoIconsIBMCloudSysdigSecure': typeof import("../assets/icons/IBM-cloud--sysdig-secure")['default']
    'SvgoIconsIBMCloudTransitGateway': typeof import("../assets/icons/IBM-cloud--transit-gateway")['default']
    'SvgoIconsIBMCloudVirtualServerClassic': typeof import("../assets/icons/IBM-cloud--virtual-server-classic")['default']
    'SvgoIconsIBMCloudVirtualServerVpc': typeof import("../assets/icons/IBM-cloud--virtual-server-vpc")['default']
    'SvgoIconsIBMCloudVpcEndpoints': typeof import("../assets/icons/IBM-cloud--vpc-endpoints")['default']
    'SvgoIconsIBMCloudVpc': typeof import("../assets/icons/IBM-cloud--vpc")['default']
    'SvgoIconsIBMCloudPakMANTAAutomatedDataLineage': typeof import("../assets/icons/IBM-cloud-pak--MANTA-automated-data-lineage")['default']
    'SvgoIconsIBMCloudPakApplications': typeof import("../assets/icons/IBM-cloud-pak--applications")['default']
    'SvgoIconsIBMCloudPakBusinessAutomation': typeof import("../assets/icons/IBM-cloud-pak--business-automation")['default']
    'SvgoIconsIBMCloudPakData': typeof import("../assets/icons/IBM-cloud-pak--data")['default']
    'SvgoIconsIBMCloudPakIntegration': typeof import("../assets/icons/IBM-cloud-pak--integration")['default']
    'SvgoIconsIBMCloudPakMulticloudMgmt': typeof import("../assets/icons/IBM-cloud-pak--multicloud-mgmt")['default']
    'SvgoIconsIBMCloudPakNetezza': typeof import("../assets/icons/IBM-cloud-pak--netezza")['default']
    'SvgoIconsIBMCloudPakNetworkAutomation': typeof import("../assets/icons/IBM-cloud-pak--network-automation")['default']
    'SvgoIconsIBMCloudPakSecurity': typeof import("../assets/icons/IBM-cloud-pak--security")['default']
    'SvgoIconsIBMCloudPakSystem': typeof import("../assets/icons/IBM-cloud-pak--system")['default']
    'SvgoIconsIBMCloudPakWatsonAiops': typeof import("../assets/icons/IBM-cloud-pak--watson-aiops")['default']
    'SvgoIconsIBMCloud': typeof import("../assets/icons/IBM-cloud")['default']
    'SvgoIconsIBMSecurityServices': typeof import("../assets/icons/IBM-security--services")['default']
    'SvgoIconsIBMSecurity': typeof import("../assets/icons/IBM-security")['default']
    'SvgoIconsIBMWatsonDiscovery': typeof import("../assets/icons/IBM-watson--discovery")['default']
    'SvgoIconsIBMWatsonKnowledgeCatalog': typeof import("../assets/icons/IBM-watson--knowledge-catalog")['default']
    'SvgoIconsIBMWatsonKnowledgeStudio': typeof import("../assets/icons/IBM-watson--knowledge-studio")['default']
    'SvgoIconsIBMWatsonLanguageTranslator': typeof import("../assets/icons/IBM-watson--language-translator")['default']
    'SvgoIconsIBMWatsonMachineLearning': typeof import("../assets/icons/IBM-watson--machine-learning")['default']
    'SvgoIconsIBMWatsonNaturalLanguageClassifier': typeof import("../assets/icons/IBM-watson--natural-language-classifier")['default']
    'SvgoIconsIBMWatsonNaturalLanguageUnderstanding': typeof import("../assets/icons/IBM-watson--natural-language-understanding")['default']
    'SvgoIconsIBMWatsonOpenscale': typeof import("../assets/icons/IBM-watson--openscale")['default']
    'SvgoIconsIBMWatsonOrders1': typeof import("../assets/icons/IBM-watson--orders-1")['default']
    'SvgoIconsIBMWatsonOrders': typeof import("../assets/icons/IBM-watson--orders")['default']
    'SvgoIconsIBMWatsonQuery': typeof import("../assets/icons/IBM-watson--query")['default']
    'SvgoIconsIBMWatsonSpeechToText': typeof import("../assets/icons/IBM-watson--speech-to-text")['default']
    'SvgoIconsIBMWatsonStudio': typeof import("../assets/icons/IBM-watson--studio")['default']
    'SvgoIconsIBMWatsonTextToSpeech': typeof import("../assets/icons/IBM-watson--text-to-speech")['default']
    'SvgoIconsIBMWatsonToneAnalyzer': typeof import("../assets/icons/IBM-watson--tone-analyzer")['default']
    'SvgoIconsIBMWatsonxAssistant': typeof import("../assets/icons/IBM-watsonx--assistant")['default']
    'SvgoIconsIBMWatsonxCodeAssistantForZRefactor': typeof import("../assets/icons/IBM-watsonx--code-assistant-for-z--refactor")['default']
    'SvgoIconsIBMWatsonxCodeAssistantForZ': typeof import("../assets/icons/IBM-watsonx--code-assistant-for-z")['default']
    'SvgoIconsIBMWatsonxCodeAssistant': typeof import("../assets/icons/IBM-watsonx--code-assistant")['default']
    'SvgoIconsIBMWatsonxOrchestrate': typeof import("../assets/icons/IBM-watsonx--orchestrate")['default']
    'SvgoIconsIBMZCloudModStack': typeof import("../assets/icons/IBM-z--cloud-mod-stack")['default']
    'SvgoIconsIBMZEnvironmentsDevSecOps': typeof import("../assets/icons/IBM-z--environments-dev-sec-ops")['default']
    'SvgoIconsIBMZProcessorCapacityReference': typeof import("../assets/icons/IBM-z--processor-capacity-reference")['default']
    'SvgoIconsIBMZCloudProvisioning': typeof import("../assets/icons/IBM-z-cloud--provisioning")['default']
    'SvgoIconsIBMZOsAiControlInterface': typeof import("../assets/icons/IBM-z-os--ai-control-interface")['default']
    'SvgoIconsIBMZOsContainers': typeof import("../assets/icons/IBM-z-os--containers")['default']
    'SvgoIconsIBMZOsPackageManager': typeof import("../assets/icons/IBM-z-os--package-manager")['default']
    'SvgoIconsIBMZOs': typeof import("../assets/icons/IBM-z-os")['default']
    'SvgoIconsIP': typeof import("../assets/icons/IP")['default']
    'SvgoIconsIca2d': typeof import("../assets/icons/Ica-2d")['default']
    'SvgoIconsIceAccretion': typeof import("../assets/icons/Ice--accretion")['default']
    'SvgoIconsIceVision': typeof import("../assets/icons/Ice--vision")['default']
    'SvgoIconsIdManagement': typeof import("../assets/icons/Id-management")['default']
    'SvgoIconsId': typeof import("../assets/icons/Id")['default']
    'SvgoIconsIdea': typeof import("../assets/icons/Idea")['default']
    'SvgoIconsIdentification': typeof import("../assets/icons/Identification")['default']
    'SvgoIconsImageCopy': typeof import("../assets/icons/Image--copy")['default']
    'SvgoIconsImageMedical': typeof import("../assets/icons/Image--medical")['default']
    'SvgoIconsImageReference': typeof import("../assets/icons/Image--reference")['default']
    'SvgoIconsImageSearchAlt': typeof import("../assets/icons/Image--search--alt")['default']
    'SvgoIconsImageSearch': typeof import("../assets/icons/Image--search")['default']
    'SvgoIconsImageAvailabilityLocal': typeof import("../assets/icons/Image-availability--local")['default']
    'SvgoIconsImageAvailabilityRetrieving': typeof import("../assets/icons/Image-availability--retrieving")['default']
    'SvgoIconsImageAvailabilityUnavailable': typeof import("../assets/icons/Image-availability--unavailable")['default']
    'SvgoIconsImageService': typeof import("../assets/icons/Image-service")['default']
    'SvgoIconsImageStoreLocal': typeof import("../assets/icons/Image-store--local")['default']
    'SvgoIconsImage': typeof import("../assets/icons/Image")['default']
    'SvgoIconsImportExport': typeof import("../assets/icons/Import-export")['default']
    'SvgoIconsImproveRelevance': typeof import("../assets/icons/Improve-relevance")['default']
    'SvgoIconsInProgressError': typeof import("../assets/icons/In-progress--error")['default']
    'SvgoIconsInProgressWarning': typeof import("../assets/icons/In-progress--warning")['default']
    'SvgoIconsInProgress': typeof import("../assets/icons/In-progress")['default']
    'SvgoIconsIncompleteCancel': typeof import("../assets/icons/Incomplete--cancel")['default']
    'SvgoIconsIncompleteError': typeof import("../assets/icons/Incomplete--error")['default']
    'SvgoIconsIncompleteNormal': typeof import("../assets/icons/Incomplete--normal")['default']
    'SvgoIconsIncompleteWarning': typeof import("../assets/icons/Incomplete--warning")['default']
    'SvgoIconsIncomplete': typeof import("../assets/icons/Incomplete")['default']
    'SvgoIconsIncreaseLevel': typeof import("../assets/icons/Increase-level")['default']
    'SvgoIconsIndustry': typeof import("../assets/icons/Industry")['default']
    'SvgoIconsInfinitySymbol': typeof import("../assets/icons/Infinity-symbol")['default']
    'SvgoIconsInformationDisabled': typeof import("../assets/icons/Information--disabled")['default']
    'SvgoIconsInformationFilled': typeof import("../assets/icons/Information--filled")['default']
    'SvgoIconsInformationSquareFilled': typeof import("../assets/icons/Information--square--filled")['default']
    'SvgoIconsInformationSquare': typeof import("../assets/icons/Information--square")['default']
    'SvgoIconsInformation': typeof import("../assets/icons/Information")['default']
    'SvgoIconsInfrastructureClassic': typeof import("../assets/icons/Infrastructure--classic")['default']
    'SvgoIconsInsertPage': typeof import("../assets/icons/Insert--page")['default']
    'SvgoIconsInsertSyntax': typeof import("../assets/icons/Insert-syntax")['default']
    'SvgoIconsInsert': typeof import("../assets/icons/Insert")['default']
    'SvgoIconsInspection': typeof import("../assets/icons/Inspection")['default']
    'SvgoIconsInstanceBx': typeof import("../assets/icons/Instance--bx")['default']
    'SvgoIconsInstanceClassic': typeof import("../assets/icons/Instance--classic")['default']
    'SvgoIconsInstanceCx': typeof import("../assets/icons/Instance--cx")['default']
    'SvgoIconsInstanceMx': typeof import("../assets/icons/Instance--mx")['default']
    'SvgoIconsInstanceVirtual': typeof import("../assets/icons/Instance--virtual")['default']
    'SvgoIconsIntegration': typeof import("../assets/icons/Integration")['default']
    'SvgoIconsIntentRequestActive': typeof import("../assets/icons/Intent-request--active")['default']
    'SvgoIconsIntentRequestCreate': typeof import("../assets/icons/Intent-request--create")['default']
    'SvgoIconsIntentRequestHeal': typeof import("../assets/icons/Intent-request--heal")['default']
    'SvgoIconsIntentRequestInactive': typeof import("../assets/icons/Intent-request--inactive")['default']
    'SvgoIconsIntentRequestScaleIn': typeof import("../assets/icons/Intent-request--scale-in")['default']
    'SvgoIconsIntentRequestScaleOut': typeof import("../assets/icons/Intent-request--scale-out")['default']
    'SvgoIconsIntentRequestUninstall': typeof import("../assets/icons/Intent-request--uninstall")['default']
    'SvgoIconsInteractions': typeof import("../assets/icons/Interactions")['default']
    'SvgoIconsInteractiveSegmentationCursor': typeof import("../assets/icons/Interactive-segmentation-cursor")['default']
    'SvgoIconsInterfaceUsage': typeof import("../assets/icons/Interface--usage")['default']
    'SvgoIconsIntersect': typeof import("../assets/icons/Intersect")['default']
    'SvgoIconsIntrusionPrevention': typeof import("../assets/icons/Intrusion-prevention")['default']
    'SvgoIconsInventoryManagement': typeof import("../assets/icons/Inventory-management")['default']
    'SvgoIconsIotConnect': typeof import("../assets/icons/Iot--connect")['default']
    'SvgoIconsIotPlatform': typeof import("../assets/icons/Iot--platform")['default']
    'SvgoIconsIsoFilled': typeof import("../assets/icons/Iso--filled")['default']
    'SvgoIconsIsoOutline': typeof import("../assets/icons/Iso--outline")['default']
    'SvgoIconsIso': typeof import("../assets/icons/Iso")['default']
    'SvgoIconsJoinFull': typeof import("../assets/icons/Join--full")['default']
    'SvgoIconsJoinInner': typeof import("../assets/icons/Join--inner")['default']
    'SvgoIconsJoinLeft': typeof import("../assets/icons/Join--left")['default']
    'SvgoIconsJoinOuter': typeof import("../assets/icons/Join--outer")['default']
    'SvgoIconsJoinRight': typeof import("../assets/icons/Join--right")['default']
    'SvgoIconsJoinNode': typeof import("../assets/icons/Join-node")['default']
    'SvgoIconsJpg': typeof import("../assets/icons/Jpg")['default']
    'SvgoIconsJsError': typeof import("../assets/icons/Js-error")['default']
    'SvgoIconsJsonReference': typeof import("../assets/icons/Json--reference")['default']
    'SvgoIconsJson': typeof import("../assets/icons/Json")['default']
    'SvgoIconsJumpLink': typeof import("../assets/icons/Jump-link")['default']
    'SvgoIconsKEY': typeof import("../assets/icons/KEY")['default']
    'SvgoIconsKeepDry': typeof import("../assets/icons/Keep-dry")['default']
    'SvgoIconsKeyboard': typeof import("../assets/icons/Keyboard")['default']
    'SvgoIconsKubelet': typeof import("../assets/icons/Kubelet")['default']
    'SvgoIconsKubernetesControlPlaneNode': typeof import("../assets/icons/Kubernetes--control-plane-node")['default']
    'SvgoIconsKubernetesIpAddress': typeof import("../assets/icons/Kubernetes--ip-address")['default']
    'SvgoIconsKubernetesOperator': typeof import("../assets/icons/Kubernetes--operator")['default']
    'SvgoIconsKubernetesPod': typeof import("../assets/icons/Kubernetes--pod")['default']
    'SvgoIconsKubernetesWorkerNode': typeof import("../assets/icons/Kubernetes--worker-node")['default']
    'SvgoIconsKubernetes': typeof import("../assets/icons/Kubernetes")['default']
    'SvgoIconsLabel': typeof import("../assets/icons/Label")['default']
    'SvgoIconsLanguage': typeof import("../assets/icons/Language")['default']
    'SvgoIconsLaptop': typeof import("../assets/icons/Laptop")['default']
    'SvgoIconsLassoPolygon': typeof import("../assets/icons/Lasso--polygon")['default']
    'SvgoIconsLasso': typeof import("../assets/icons/Lasso")['default']
    'SvgoIconsLaunchStudy1': typeof import("../assets/icons/Launch-study--1")['default']
    'SvgoIconsLaunchStudy2': typeof import("../assets/icons/Launch-study--2")['default']
    'SvgoIconsLaunchStudy3': typeof import("../assets/icons/Launch-study--3")['default']
    'SvgoIconsLaunch': typeof import("../assets/icons/Launch")['default']
    'SvgoIconsLayersExternal': typeof import("../assets/icons/Layers--external")['default']
    'SvgoIconsLayers': typeof import("../assets/icons/Layers")['default']
    'SvgoIconsLegend': typeof import("../assets/icons/Legend")['default']
    'SvgoIconsLetterAa': typeof import("../assets/icons/Letter--aa")['default']
    'SvgoIconsLetterBb': typeof import("../assets/icons/Letter--bb")['default']
    'SvgoIconsLetterCc': typeof import("../assets/icons/Letter--cc")['default']
    'SvgoIconsLetterDd': typeof import("../assets/icons/Letter--dd")['default']
    'SvgoIconsLetterEe': typeof import("../assets/icons/Letter--ee")['default']
    'SvgoIconsLetterFf': typeof import("../assets/icons/Letter--ff")['default']
    'SvgoIconsLetterGg': typeof import("../assets/icons/Letter--gg")['default']
    'SvgoIconsLetterHh': typeof import("../assets/icons/Letter--hh")['default']
    'SvgoIconsLetterIi': typeof import("../assets/icons/Letter--ii")['default']
    'SvgoIconsLetterJj': typeof import("../assets/icons/Letter--jj")['default']
    'SvgoIconsLetterKk': typeof import("../assets/icons/Letter--kk")['default']
    'SvgoIconsLetterLl': typeof import("../assets/icons/Letter--ll")['default']
    'SvgoIconsLetterMm': typeof import("../assets/icons/Letter--mm")['default']
    'SvgoIconsLetterNn': typeof import("../assets/icons/Letter--nn")['default']
    'SvgoIconsLetterOo': typeof import("../assets/icons/Letter--oo")['default']
    'SvgoIconsLetterPp': typeof import("../assets/icons/Letter--pp")['default']
    'SvgoIconsLetterQq': typeof import("../assets/icons/Letter--qq")['default']
    'SvgoIconsLetterRr': typeof import("../assets/icons/Letter--rr")['default']
    'SvgoIconsLetterSs': typeof import("../assets/icons/Letter--ss")['default']
    'SvgoIconsLetterTt': typeof import("../assets/icons/Letter--tt")['default']
    'SvgoIconsLetterUu': typeof import("../assets/icons/Letter--uu")['default']
    'SvgoIconsLetterVv': typeof import("../assets/icons/Letter--vv")['default']
    'SvgoIconsLetterWw': typeof import("../assets/icons/Letter--ww")['default']
    'SvgoIconsLetterXx': typeof import("../assets/icons/Letter--xx")['default']
    'SvgoIconsLetterYy': typeof import("../assets/icons/Letter--yy")['default']
    'SvgoIconsLetterZz': typeof import("../assets/icons/Letter--zz")['default']
    'SvgoIconsLicenseDraft': typeof import("../assets/icons/License--draft")['default']
    'SvgoIconsLicenseGlobal': typeof import("../assets/icons/License--global")['default']
    'SvgoIconsLicenseMaintenanceDraft': typeof import("../assets/icons/License--maintenance-draft")['default']
    'SvgoIconsLicenseMaintenance': typeof import("../assets/icons/License--maintenance")['default']
    'SvgoIconsLicenseThirdPartyDraft': typeof import("../assets/icons/License--third-party-draft")['default']
    'SvgoIconsLicenseThirdParty': typeof import("../assets/icons/License--third-party")['default']
    'SvgoIconsLicense': typeof import("../assets/icons/License")['default']
    'SvgoIconsLifesaver': typeof import("../assets/icons/Lifesaver")['default']
    'SvgoIconsLightFilled': typeof import("../assets/icons/Light--filled")['default']
    'SvgoIconsLight': typeof import("../assets/icons/Light")['default']
    'SvgoIconsLightning': typeof import("../assets/icons/Lightning")['default']
    'SvgoIconsLink': typeof import("../assets/icons/Link")['default']
    'SvgoIconsLinuxAlt': typeof import("../assets/icons/Linux--alt")['default']
    'SvgoIconsLinuxNamespace': typeof import("../assets/icons/Linux--namespace")['default']
    'SvgoIconsLinux': typeof import("../assets/icons/Linux")['default']
    'SvgoIconsListBoxes': typeof import("../assets/icons/List--boxes")['default']
    'SvgoIconsListBulleted': typeof import("../assets/icons/List--bulleted")['default']
    'SvgoIconsListCheckedMirror': typeof import("../assets/icons/List--checked--mirror")['default']
    'SvgoIconsListChecked': typeof import("../assets/icons/List--checked")['default']
    'SvgoIconsListDropdown': typeof import("../assets/icons/List--dropdown")['default']
    'SvgoIconsListNumberedMirror': typeof import("../assets/icons/List--numbered--mirror")['default']
    'SvgoIconsListNumbered': typeof import("../assets/icons/List--numbered")['default']
    'SvgoIconsList': typeof import("../assets/icons/List")['default']
    'SvgoIconsLoadBalancerApplication': typeof import("../assets/icons/Load-balancer--application")['default']
    'SvgoIconsLoadBalancerClassic': typeof import("../assets/icons/Load-balancer--classic")['default']
    'SvgoIconsLoadBalancerGlobal': typeof import("../assets/icons/Load-balancer--global")['default']
    'SvgoIconsLoadBalancerListener': typeof import("../assets/icons/Load-balancer--listener")['default']
    'SvgoIconsLoadBalancerLocal': typeof import("../assets/icons/Load-balancer--local")['default']
    'SvgoIconsLoadBalancerNetwork': typeof import("../assets/icons/Load-balancer--network")['default']
    'SvgoIconsLoadBalancerPool': typeof import("../assets/icons/Load-balancer--pool")['default']
    'SvgoIconsLoadBalancerVpc': typeof import("../assets/icons/Load-balancer--vpc")['default']
    'SvgoIconsLocationCompanyFilled': typeof import("../assets/icons/Location--company--filled")['default']
    'SvgoIconsLocationCompany': typeof import("../assets/icons/Location--company")['default']
    'SvgoIconsLocationCurrent': typeof import("../assets/icons/Location--current")['default']
    'SvgoIconsLocationFilled': typeof import("../assets/icons/Location--filled")['default']
    'SvgoIconsLocationHazardFilled': typeof import("../assets/icons/Location--hazard--filled")['default']
    'SvgoIconsLocationHazard': typeof import("../assets/icons/Location--hazard")['default']
    'SvgoIconsLocationHeartFilled': typeof import("../assets/icons/Location--heart--filled")['default']
    'SvgoIconsLocationHeart': typeof import("../assets/icons/Location--heart")['default']
    'SvgoIconsLocationInfoFilled': typeof import("../assets/icons/Location--info--filled")['default']
    'SvgoIconsLocationInfo': typeof import("../assets/icons/Location--info")['default']
    'SvgoIconsLocationPersonFilled': typeof import("../assets/icons/Location--person--filled")['default']
    'SvgoIconsLocationPerson': typeof import("../assets/icons/Location--person")['default']
    'SvgoIconsLocationSave': typeof import("../assets/icons/Location--save")['default']
    'SvgoIconsLocationStarFilled': typeof import("../assets/icons/Location--star--filled")['default']
    'SvgoIconsLocationStar': typeof import("../assets/icons/Location--star")['default']
    'SvgoIconsLocation': typeof import("../assets/icons/Location")['default']
    'SvgoIconsLocked': typeof import("../assets/icons/Locked")['default']
    'SvgoIconsLogicalPartition': typeof import("../assets/icons/Logical-partition")['default']
    'SvgoIconsLogin': typeof import("../assets/icons/Login")['default']
    'SvgoIconsLogoAngular': typeof import("../assets/icons/Logo--angular")['default']
    'SvgoIconsLogoAnsibleCommunity': typeof import("../assets/icons/Logo--ansible-community")['default']
    'SvgoIconsLogoDigg': typeof import("../assets/icons/Logo--digg")['default']
    'SvgoIconsLogoDiscord': typeof import("../assets/icons/Logo--discord")['default']
    'SvgoIconsLogoFacebook': typeof import("../assets/icons/Logo--facebook")['default']
    'SvgoIconsLogoFigma': typeof import("../assets/icons/Logo--figma")['default']
    'SvgoIconsLogoFlickr': typeof import("../assets/icons/Logo--flickr")['default']
    'SvgoIconsLogoGithub': typeof import("../assets/icons/Logo--github")['default']
    'SvgoIconsLogoGitlab': typeof import("../assets/icons/Logo--gitlab")['default']
    'SvgoIconsLogoGlassdoor': typeof import("../assets/icons/Logo--glassdoor")['default']
    'SvgoIconsLogoInstagram': typeof import("../assets/icons/Logo--instagram")['default']
    'SvgoIconsLogoInvision': typeof import("../assets/icons/Logo--invision")['default']
    'SvgoIconsLogoJupyter': typeof import("../assets/icons/Logo--jupyter")['default']
    'SvgoIconsLogoKeybase': typeof import("../assets/icons/Logo--keybase")['default']
    'SvgoIconsLogoKubernetes': typeof import("../assets/icons/Logo--kubernetes")['default']
    'SvgoIconsLogoLinkedin': typeof import("../assets/icons/Logo--linkedin")['default']
    'SvgoIconsLogoLivestream': typeof import("../assets/icons/Logo--livestream")['default']
    'SvgoIconsLogoMastodon': typeof import("../assets/icons/Logo--mastodon")['default']
    'SvgoIconsLogoMedium': typeof import("../assets/icons/Logo--medium")['default']
    'SvgoIconsLogoNpm': typeof import("../assets/icons/Logo--npm")['default']
    'SvgoIconsLogoOpenshift': typeof import("../assets/icons/Logo--openshift")['default']
    'SvgoIconsLogoPinterest': typeof import("../assets/icons/Logo--pinterest")['default']
    'SvgoIconsLogoPython': typeof import("../assets/icons/Logo--python")['default']
    'SvgoIconsLogoQuora': typeof import("../assets/icons/Logo--quora")['default']
    'SvgoIconsLogoRScript': typeof import("../assets/icons/Logo--r-script")['default']
    'SvgoIconsLogoReact': typeof import("../assets/icons/Logo--react")['default']
    'SvgoIconsLogoRedHatAnsible': typeof import("../assets/icons/Logo--red-hat-ansible")['default']
    'SvgoIconsLogoSketch': typeof import("../assets/icons/Logo--sketch")['default']
    'SvgoIconsLogoSkype': typeof import("../assets/icons/Logo--skype")['default']
    'SvgoIconsLogoSlack': typeof import("../assets/icons/Logo--slack")['default']
    'SvgoIconsLogoSnapchat': typeof import("../assets/icons/Logo--snapchat")['default']
    'SvgoIconsLogoSvelte': typeof import("../assets/icons/Logo--svelte")['default']
    'SvgoIconsLogoTumblr': typeof import("../assets/icons/Logo--tumblr")['default']
    'SvgoIconsLogoTwitter': typeof import("../assets/icons/Logo--twitter")['default']
    'SvgoIconsLogoVmwareAlt': typeof import("../assets/icons/Logo--vmware--alt")['default']
    'SvgoIconsLogoVmware': typeof import("../assets/icons/Logo--vmware")['default']
    'SvgoIconsLogoVue': typeof import("../assets/icons/Logo--vue")['default']
    'SvgoIconsLogoWechat': typeof import("../assets/icons/Logo--wechat")['default']
    'SvgoIconsLogoX': typeof import("../assets/icons/Logo--x")['default']
    'SvgoIconsLogoXing': typeof import("../assets/icons/Logo--xing")['default']
    'SvgoIconsLogoYelp': typeof import("../assets/icons/Logo--yelp")['default']
    'SvgoIconsLogoYoutube': typeof import("../assets/icons/Logo--youtube")['default']
    'SvgoIconsLogout': typeof import("../assets/icons/Logout")['default']
    'SvgoIconsLoop': typeof import("../assets/icons/Loop")['default']
    'SvgoIconsLowSeverity': typeof import("../assets/icons/Low-severity")['default']
    'SvgoIconsMAC': typeof import("../assets/icons/MAC")['default']
    'SvgoIconsMacCommand': typeof import("../assets/icons/Mac--command")['default']
    'SvgoIconsMacOption': typeof import("../assets/icons/Mac--option")['default']
    'SvgoIconsMacShift': typeof import("../assets/icons/Mac--shift")['default']
    'SvgoIconsMachineLearningModel': typeof import("../assets/icons/Machine-learning-model")['default']
    'SvgoIconsMagicWandFilled': typeof import("../assets/icons/Magic-wand--filled")['default']
    'SvgoIconsMagicWand': typeof import("../assets/icons/Magic-wand")['default']
    'SvgoIconsMagnify': typeof import("../assets/icons/Magnify")['default']
    'SvgoIconsMailAll': typeof import("../assets/icons/Mail--all")['default']
    'SvgoIconsMailReply': typeof import("../assets/icons/Mail--reply")['default']
    'SvgoIconsMammogram': typeof import("../assets/icons/Mammogram")['default']
    'SvgoIconsManageProtection': typeof import("../assets/icons/Manage-protection")['default']
    'SvgoIconsManagedSolutions': typeof import("../assets/icons/Managed-solutions")['default']
    'SvgoIconsMapCenter': typeof import("../assets/icons/Map--center")['default']
    'SvgoIconsMapIdentify': typeof import("../assets/icons/Map--identify")['default']
    'SvgoIconsMapBoundaryVegetation': typeof import("../assets/icons/Map-boundary--vegetation")['default']
    'SvgoIconsMapBoundary': typeof import("../assets/icons/Map-boundary")['default']
    'SvgoIconsMap': typeof import("../assets/icons/Map")['default']
    'SvgoIconsMarineWarning': typeof import("../assets/icons/Marine-warning")['default']
    'SvgoIconsMathCurve': typeof import("../assets/icons/Math-curve")['default']
    'SvgoIconsMatrix': typeof import("../assets/icons/Matrix")['default']
    'SvgoIconsMaximize': typeof import("../assets/icons/Maximize")['default']
    'SvgoIconsMediaLibraryFilled': typeof import("../assets/icons/Media--library--filled")['default']
    'SvgoIconsMediaLibrary': typeof import("../assets/icons/Media--library")['default']
    'SvgoIconsMediaCast': typeof import("../assets/icons/Media-cast")['default']
    'SvgoIconsMedicationAlert': typeof import("../assets/icons/Medication--alert")['default']
    'SvgoIconsMedicationReminder': typeof import("../assets/icons/Medication--reminder")['default']
    'SvgoIconsMedication': typeof import("../assets/icons/Medication")['default']
    'SvgoIconsMenu': typeof import("../assets/icons/Menu")['default']
    'SvgoIconsMergeNode': typeof import("../assets/icons/Merge-node")['default']
    'SvgoIconsMerge': typeof import("../assets/icons/Merge")['default']
    'SvgoIconsMessageQueue': typeof import("../assets/icons/Message-queue")['default']
    'SvgoIconsMeterAlt': typeof import("../assets/icons/Meter--alt")['default']
    'SvgoIconsMeter': typeof import("../assets/icons/Meter")['default']
    'SvgoIconsMicrophoneFilled': typeof import("../assets/icons/Microphone--filled")['default']
    'SvgoIconsMicrophoneOffFilled': typeof import("../assets/icons/Microphone--off--filled")['default']
    'SvgoIconsMicrophoneOff': typeof import("../assets/icons/Microphone--off")['default']
    'SvgoIconsMicrophone': typeof import("../assets/icons/Microphone")['default']
    'SvgoIconsMicroscope': typeof import("../assets/icons/Microscope")['default']
    'SvgoIconsMicroservices1': typeof import("../assets/icons/Microservices--1")['default']
    'SvgoIconsMicroservices2': typeof import("../assets/icons/Microservices--2")['default']
    'SvgoIconsMigrateAlt': typeof import("../assets/icons/Migrate--alt")['default']
    'SvgoIconsMigrate': typeof import("../assets/icons/Migrate")['default']
    'SvgoIconsMilestone': typeof import("../assets/icons/Milestone")['default']
    'SvgoIconsMilitaryCamp': typeof import("../assets/icons/Military-camp")['default']
    'SvgoIconsMinimize': typeof import("../assets/icons/Minimize")['default']
    'SvgoIconsMisuseOutline': typeof import("../assets/icons/Misuse--outline")['default']
    'SvgoIconsMisuse': typeof import("../assets/icons/Misuse")['default']
    'SvgoIconsMixedRainHail': typeof import("../assets/icons/Mixed-rain-hail")['default']
    'SvgoIconsMlModelReference': typeof import("../assets/icons/Ml-model--reference")['default']
    'SvgoIconsMobileAdd': typeof import("../assets/icons/Mobile--add")['default']
    'SvgoIconsMobileAudio': typeof import("../assets/icons/Mobile--audio")['default']
    'SvgoIconsMobileCheck': typeof import("../assets/icons/Mobile--check")['default']
    'SvgoIconsMobileCrash': typeof import("../assets/icons/Mobile--crash")['default']
    'SvgoIconsMobileDownload': typeof import("../assets/icons/Mobile--download")['default']
    'SvgoIconsMobileEvent': typeof import("../assets/icons/Mobile--event")['default']
    'SvgoIconsMobileLandscape': typeof import("../assets/icons/Mobile--landscape")['default']
    'SvgoIconsMobileRequest': typeof import("../assets/icons/Mobile--request")['default']
    'SvgoIconsMobileSession': typeof import("../assets/icons/Mobile--session")['default']
    'SvgoIconsMobileViewOrientation': typeof import("../assets/icons/Mobile--view-orientation")['default']
    'SvgoIconsMobileView': typeof import("../assets/icons/Mobile--view")['default']
    'SvgoIconsMobile': typeof import("../assets/icons/Mobile")['default']
    'SvgoIconsMobilityServices': typeof import("../assets/icons/Mobility--services")['default']
    'SvgoIconsModelAlt': typeof import("../assets/icons/Model--alt")['default']
    'SvgoIconsModelFoundation': typeof import("../assets/icons/Model--foundation")['default']
    'SvgoIconsModelReference': typeof import("../assets/icons/Model--reference")['default']
    'SvgoIconsModelTuned1': typeof import("../assets/icons/Model--tuned-1")['default']
    'SvgoIconsModelTuned': typeof import("../assets/icons/Model--tuned")['default']
    'SvgoIconsModelBuilderReference': typeof import("../assets/icons/Model-builder--reference")['default']
    'SvgoIconsModelBuilder': typeof import("../assets/icons/Model-builder")['default']
    'SvgoIconsModel': typeof import("../assets/icons/Model")['default']
    'SvgoIconsMoney': typeof import("../assets/icons/Money")['default']
    'SvgoIconsMonster': typeof import("../assets/icons/Monster")['default']
    'SvgoIconsMonument': typeof import("../assets/icons/Monument")['default']
    'SvgoIconsMoon': typeof import("../assets/icons/Moon")['default']
    'SvgoIconsMoonrise': typeof import("../assets/icons/Moonrise")['default']
    'SvgoIconsMoonset': typeof import("../assets/icons/Moonset")['default']
    'SvgoIconsMostlyCloudyNight': typeof import("../assets/icons/Mostly-cloudy--night")['default']
    'SvgoIconsMostlyCloudy': typeof import("../assets/icons/Mostly-cloudy")['default']
    'SvgoIconsMountain': typeof import("../assets/icons/Mountain")['default']
    'SvgoIconsMov': typeof import("../assets/icons/Mov")['default']
    'SvgoIconsMove': typeof import("../assets/icons/Move")['default']
    'SvgoIconsMovement': typeof import("../assets/icons/Movement")['default']
    'SvgoIconsMp3': typeof import("../assets/icons/Mp3")['default']
    'SvgoIconsMp4': typeof import("../assets/icons/Mp4")['default']
    'SvgoIconsMpeg': typeof import("../assets/icons/Mpeg")['default']
    'SvgoIconsMpg2': typeof import("../assets/icons/Mpg2")['default']
    'SvgoIconsMusicAdd': typeof import("../assets/icons/Music--add")['default']
    'SvgoIconsMusicRemove': typeof import("../assets/icons/Music--remove")['default']
    'SvgoIconsMusic': typeof import("../assets/icons/Music")['default']
    'SvgoIconsMysql': typeof import("../assets/icons/Mysql")['default']
    'SvgoIconsNameSpace': typeof import("../assets/icons/Name-space")['default']
    'SvgoIconsNavaidCivil': typeof import("../assets/icons/Navaid--civil")['default']
    'SvgoIconsNavaidDme': typeof import("../assets/icons/Navaid--dme")['default']
    'SvgoIconsNavaidHelipad': typeof import("../assets/icons/Navaid--helipad")['default']
    'SvgoIconsNavaidMilitaryCivil': typeof import("../assets/icons/Navaid--military-civil")['default']
    'SvgoIconsNavaidMilitary': typeof import("../assets/icons/Navaid--military")['default']
    'SvgoIconsNavaidNdbDme': typeof import("../assets/icons/Navaid--ndb-dme")['default']
    'SvgoIconsNavaidNdb': typeof import("../assets/icons/Navaid--ndb")['default']
    'SvgoIconsNavaidPrivate': typeof import("../assets/icons/Navaid--private")['default']
    'SvgoIconsNavaidSeaplane': typeof import("../assets/icons/Navaid--seaplane")['default']
    'SvgoIconsNavaidTacan': typeof import("../assets/icons/Navaid--tacan")['default']
    'SvgoIconsNavaidVhfor': typeof import("../assets/icons/Navaid--vhfor")['default']
    'SvgoIconsNavaidVor': typeof import("../assets/icons/Navaid--vor")['default']
    'SvgoIconsNavaidVordme': typeof import("../assets/icons/Navaid--vordme")['default']
    'SvgoIconsNavaidVortac': typeof import("../assets/icons/Navaid--vortac")['default']
    'SvgoIconsNeed': typeof import("../assets/icons/Need")['default']
    'SvgoIconsNetwork1': typeof import("../assets/icons/Network--1")['default']
    'SvgoIconsNetwork2': typeof import("../assets/icons/Network--2")['default']
    'SvgoIconsNetwork3Reference': typeof import("../assets/icons/Network--3--reference")['default']
    'SvgoIconsNetwork3': typeof import("../assets/icons/Network--3")['default']
    'SvgoIconsNetwork4Reference': typeof import("../assets/icons/Network--4--reference")['default']
    'SvgoIconsNetwork4': typeof import("../assets/icons/Network--4")['default']
    'SvgoIconsNetworkAdminControl': typeof import("../assets/icons/Network--admin-control")['default']
    'SvgoIconsNetworkEnterprise': typeof import("../assets/icons/Network--enterprise")['default']
    'SvgoIconsNetworkOverlay': typeof import("../assets/icons/Network--overlay")['default']
    'SvgoIconsNetworkPublic': typeof import("../assets/icons/Network--public")['default']
    'SvgoIconsNetworkInterface': typeof import("../assets/icons/Network-interface")['default']
    'SvgoIconsNewTab': typeof import("../assets/icons/New-tab")['default']
    'SvgoIconsNextFilled': typeof import("../assets/icons/Next--filled")['default']
    'SvgoIconsNextOutline': typeof import("../assets/icons/Next--outline")['default']
    'SvgoIconsNoImage': typeof import("../assets/icons/No-image")['default']
    'SvgoIconsNoTicket': typeof import("../assets/icons/No-ticket")['default']
    'SvgoIconsNominal': typeof import("../assets/icons/Nominal")['default']
    'SvgoIconsNominate': typeof import("../assets/icons/Nominate")['default']
    'SvgoIconsNonCertified': typeof import("../assets/icons/Non-certified")['default']
    'SvgoIconsNoodleBowl': typeof import("../assets/icons/Noodle-bowl")['default']
    'SvgoIconsNotAvailable': typeof import("../assets/icons/Not-available")['default']
    'SvgoIconsNotSentFilled': typeof import("../assets/icons/Not-sent--filled")['default']
    'SvgoIconsNotSent': typeof import("../assets/icons/Not-sent")['default']
    'SvgoIconsNotebookReference': typeof import("../assets/icons/Notebook--reference")['default']
    'SvgoIconsNotebook': typeof import("../assets/icons/Notebook")['default']
    'SvgoIconsNotificationFilled': typeof import("../assets/icons/Notification--filled")['default']
    'SvgoIconsNotificationNew': typeof import("../assets/icons/Notification--new")['default']
    'SvgoIconsNotificationOffFilled': typeof import("../assets/icons/Notification--off--filled")['default']
    'SvgoIconsNotificationOff': typeof import("../assets/icons/Notification--off")['default']
    'SvgoIconsNotificationCounter': typeof import("../assets/icons/Notification-counter")['default']
    'SvgoIconsNotification': typeof import("../assets/icons/Notification")['default']
    'SvgoIconsNumber0': typeof import("../assets/icons/Number--0")['default']
    'SvgoIconsNumber1': typeof import("../assets/icons/Number--1")['default']
    'SvgoIconsNumber2': typeof import("../assets/icons/Number--2")['default']
    'SvgoIconsNumber3': typeof import("../assets/icons/Number--3")['default']
    'SvgoIconsNumber4': typeof import("../assets/icons/Number--4")['default']
    'SvgoIconsNumber5': typeof import("../assets/icons/Number--5")['default']
    'SvgoIconsNumber6': typeof import("../assets/icons/Number--6")['default']
    'SvgoIconsNumber7': typeof import("../assets/icons/Number--7")['default']
    'SvgoIconsNumber8': typeof import("../assets/icons/Number--8")['default']
    'SvgoIconsNumber9': typeof import("../assets/icons/Number--9")['default']
    'SvgoIconsNumberSmall0': typeof import("../assets/icons/Number--small--0")['default']
    'SvgoIconsNumberSmall1': typeof import("../assets/icons/Number--small--1")['default']
    'SvgoIconsNumberSmall2': typeof import("../assets/icons/Number--small--2")['default']
    'SvgoIconsNumberSmall3': typeof import("../assets/icons/Number--small--3")['default']
    'SvgoIconsNumberSmall4': typeof import("../assets/icons/Number--small--4")['default']
    'SvgoIconsNumberSmall5': typeof import("../assets/icons/Number--small--5")['default']
    'SvgoIconsNumberSmall6': typeof import("../assets/icons/Number--small--6")['default']
    'SvgoIconsNumberSmall7': typeof import("../assets/icons/Number--small--7")['default']
    'SvgoIconsNumberSmall8': typeof import("../assets/icons/Number--small--8")['default']
    'SvgoIconsNumberSmall9': typeof import("../assets/icons/Number--small--9")['default']
    'SvgoIconsObjectStorageAlt': typeof import("../assets/icons/Object-storage--alt")['default']
    'SvgoIconsObjectStorage1': typeof import("../assets/icons/Object-storage-1")['default']
    'SvgoIconsObjectStorage': typeof import("../assets/icons/Object-storage")['default']
    'SvgoIconsObservedHail': typeof import("../assets/icons/Observed--hail")['default']
    'SvgoIconsObservedLightning': typeof import("../assets/icons/Observed--lightning")['default']
    'SvgoIconsOmega': typeof import("../assets/icons/Omega")['default']
    'SvgoIconsOpacity': typeof import("../assets/icons/Opacity")['default']
    'SvgoIconsOpenPanelBottom': typeof import("../assets/icons/Open-panel--bottom")['default']
    'SvgoIconsOpenPanelFilledBottom': typeof import("../assets/icons/Open-panel--filled--bottom")['default']
    'SvgoIconsOpenPanelFilledLeft': typeof import("../assets/icons/Open-panel--filled--left")['default']
    'SvgoIconsOpenPanelFilledRight': typeof import("../assets/icons/Open-panel--filled--right")['default']
    'SvgoIconsOpenPanelFilledTop': typeof import("../assets/icons/Open-panel--filled--top")['default']
    'SvgoIconsOpenPanelLeft': typeof import("../assets/icons/Open-panel--left")['default']
    'SvgoIconsOpenPanelRight': typeof import("../assets/icons/Open-panel--right")['default']
    'SvgoIconsOpenPanelTop': typeof import("../assets/icons/Open-panel--top")['default']
    'SvgoIconsOperationGauge': typeof import("../assets/icons/Operation--gauge")['default']
    'SvgoIconsOperationIf': typeof import("../assets/icons/Operation--if")['default']
    'SvgoIconsOperation': typeof import("../assets/icons/Operation")['default']
    'SvgoIconsOperationsField': typeof import("../assets/icons/Operations--field")['default']
    'SvgoIconsOperationsRecord': typeof import("../assets/icons/Operations--record")['default']
    'SvgoIconsOrderDetails': typeof import("../assets/icons/Order-details")['default']
    'SvgoIconsOrdinal': typeof import("../assets/icons/Ordinal")['default']
    'SvgoIconsOutage': typeof import("../assets/icons/Outage")['default']
    'SvgoIconsOutlookSevere': typeof import("../assets/icons/Outlook-severe")['default']
    'SvgoIconsOverflowMenuHorizontal': typeof import("../assets/icons/Overflow-menu--horizontal")['default']
    'SvgoIconsOverflowMenuVertical': typeof import("../assets/icons/Overflow-menu--vertical")['default']
    'SvgoIconsOverlay': typeof import("../assets/icons/Overlay")['default']
    'SvgoIconsPackageTextAnalysis': typeof import("../assets/icons/Package--text-analysis")['default']
    'SvgoIconsPackageNode': typeof import("../assets/icons/Package-node")['default']
    'SvgoIconsPackage': typeof import("../assets/icons/Package")['default']
    'SvgoIconsPageFirst': typeof import("../assets/icons/Page--first")['default']
    'SvgoIconsPageLast': typeof import("../assets/icons/Page--last")['default']
    'SvgoIconsPageBreak': typeof import("../assets/icons/Page-break")['default']
    'SvgoIconsPageNumber': typeof import("../assets/icons/Page-number")['default']
    'SvgoIconsPageScroll': typeof import("../assets/icons/Page-scroll")['default']
    'SvgoIconsPaintBrushAlt': typeof import("../assets/icons/Paint-brush--alt")['default']
    'SvgoIconsPaintBrush': typeof import("../assets/icons/Paint-brush")['default']
    'SvgoIconsPalmTree': typeof import("../assets/icons/Palm-tree")['default']
    'SvgoIconsPanHorizontal': typeof import("../assets/icons/Pan--horizontal")['default']
    'SvgoIconsPanVertical': typeof import("../assets/icons/Pan--vertical")['default']
    'SvgoIconsPanelExpansion': typeof import("../assets/icons/Panel-expansion")['default']
    'SvgoIconsParagraph': typeof import("../assets/icons/Paragraph")['default']
    'SvgoIconsParameter': typeof import("../assets/icons/Parameter")['default']
    'SvgoIconsParentChild': typeof import("../assets/icons/Parent-child")['default']
    'SvgoIconsPartDefinition': typeof import("../assets/icons/Part--definition")['default']
    'SvgoIconsPartUsage': typeof import("../assets/icons/Part--usage")['default']
    'SvgoIconsPartitionAuto': typeof import("../assets/icons/Partition--auto")['default']
    'SvgoIconsPartitionCollection': typeof import("../assets/icons/Partition--collection")['default']
    'SvgoIconsPartitionRepartition': typeof import("../assets/icons/Partition--repartition")['default']
    'SvgoIconsPartitionSame': typeof import("../assets/icons/Partition--same")['default']
    'SvgoIconsPartitionSpecific': typeof import("../assets/icons/Partition--specific")['default']
    'SvgoIconsPartlyCloudyNight': typeof import("../assets/icons/Partly-cloudy--night")['default']
    'SvgoIconsPartlyCloudy': typeof import("../assets/icons/Partly-cloudy")['default']
    'SvgoIconsPartnership': typeof import("../assets/icons/Partnership")['default']
    'SvgoIconsPassengerDrinks': typeof import("../assets/icons/Passenger--drinks")['default']
    'SvgoIconsPassengerPlus': typeof import("../assets/icons/Passenger--plus")['default']
    'SvgoIconsPassword': typeof import("../assets/icons/Password")['default']
    'SvgoIconsPaste': typeof import("../assets/icons/Paste")['default']
    'SvgoIconsPauseFilled': typeof import("../assets/icons/Pause--filled")['default']
    'SvgoIconsPauseOutlineFilled': typeof import("../assets/icons/Pause--outline--filled")['default']
    'SvgoIconsPauseOutline': typeof import("../assets/icons/Pause--outline")['default']
    'SvgoIconsPauseFuture': typeof import("../assets/icons/Pause-future")['default']
    'SvgoIconsPausePast': typeof import("../assets/icons/Pause-past")['default']
    'SvgoIconsPause': typeof import("../assets/icons/Pause")['default']
    'SvgoIconsPcnENode': typeof import("../assets/icons/Pcn--e-node")['default']
    'SvgoIconsPcnMilitary': typeof import("../assets/icons/Pcn--military")['default']
    'SvgoIconsPcnPNode': typeof import("../assets/icons/Pcn--p-node")['default']
    'SvgoIconsPcnZNode': typeof import("../assets/icons/Pcn--z-node")['default']
    'SvgoIconsPdfReference': typeof import("../assets/icons/Pdf--reference")['default']
    'SvgoIconsPdf': typeof import("../assets/icons/Pdf")['default']
    'SvgoIconsPedestrianFamily': typeof import("../assets/icons/Pedestrian--family")['default']
    'SvgoIconsPedestrianChild': typeof import("../assets/icons/Pedestrian-child")['default']
    'SvgoIconsPedestrian': typeof import("../assets/icons/Pedestrian")['default']
    'SvgoIconsPenFountain': typeof import("../assets/icons/Pen--fountain")['default']
    'SvgoIconsPen': typeof import("../assets/icons/Pen")['default']
    'SvgoIconsPendingFilled': typeof import("../assets/icons/Pending--filled")['default']
    'SvgoIconsPending': typeof import("../assets/icons/Pending")['default']
    'SvgoIconsPentagonDownOutline': typeof import("../assets/icons/Pentagon--down--outline")['default']
    'SvgoIconsPentagonDownSolid': typeof import("../assets/icons/Pentagon--down--solid")['default']
    'SvgoIconsPentagonLeftOutline': typeof import("../assets/icons/Pentagon--left--outline")['default']
    'SvgoIconsPentagonLeftSolid': typeof import("../assets/icons/Pentagon--left--solid")['default']
    'SvgoIconsPentagonOutline': typeof import("../assets/icons/Pentagon--outline")['default']
    'SvgoIconsPentagonRightOutline': typeof import("../assets/icons/Pentagon--right--outline")['default']
    'SvgoIconsPentagonRightSolid': typeof import("../assets/icons/Pentagon--right--solid")['default']
    'SvgoIconsPentagonSolid': typeof import("../assets/icons/Pentagon--solid")['default']
    'SvgoIconsPercentageFilled': typeof import("../assets/icons/Percentage--filled")['default']
    'SvgoIconsPercentage': typeof import("../assets/icons/Percentage")['default']
    'SvgoIconsPersonFavorite': typeof import("../assets/icons/Person--favorite")['default']
    'SvgoIconsPerson': typeof import("../assets/icons/Person")['default']
    'SvgoIconsPest': typeof import("../assets/icons/Pest")['default']
    'SvgoIconsPetImageB': typeof import("../assets/icons/Pet-image--b")['default']
    'SvgoIconsPetImageO': typeof import("../assets/icons/Pet-image--o")['default']
    'SvgoIconsPhoneApplication': typeof import("../assets/icons/Phone--application")['default']
    'SvgoIconsPhoneBlockFilled': typeof import("../assets/icons/Phone--block--filled")['default']
    'SvgoIconsPhoneBlock': typeof import("../assets/icons/Phone--block")['default']
    'SvgoIconsPhoneFilled': typeof import("../assets/icons/Phone--filled")['default']
    'SvgoIconsPhoneIncomingFilled': typeof import("../assets/icons/Phone--incoming--filled")['default']
    'SvgoIconsPhoneIncoming': typeof import("../assets/icons/Phone--incoming")['default']
    'SvgoIconsPhoneIp': typeof import("../assets/icons/Phone--ip")['default']
    'SvgoIconsPhoneOffFilled': typeof import("../assets/icons/Phone--off--filled")['default']
    'SvgoIconsPhoneOff': typeof import("../assets/icons/Phone--off")['default']
    'SvgoIconsPhoneOutgoingFilled': typeof import("../assets/icons/Phone--outgoing--filled")['default']
    'SvgoIconsPhoneOutgoing': typeof import("../assets/icons/Phone--outgoing")['default']
    'SvgoIconsPhoneSettings': typeof import("../assets/icons/Phone--settings")['default']
    'SvgoIconsPhoneVoiceFilled': typeof import("../assets/icons/Phone--voice--filled")['default']
    'SvgoIconsPhoneVoice': typeof import("../assets/icons/Phone--voice")['default']
    'SvgoIconsPhone': typeof import("../assets/icons/Phone")['default']
    'SvgoIconsPhraseSentiment': typeof import("../assets/icons/Phrase-sentiment")['default']
    'SvgoIconsPicnicArea': typeof import("../assets/icons/Picnic-area")['default']
    'SvgoIconsPiggyBankSlot': typeof import("../assets/icons/Piggy-bank--slot")['default']
    'SvgoIconsPiggyBank': typeof import("../assets/icons/Piggy-bank")['default']
    'SvgoIconsPillsAdd': typeof import("../assets/icons/Pills--add")['default']
    'SvgoIconsPillsSubtract': typeof import("../assets/icons/Pills--subtract")['default']
    'SvgoIconsPills': typeof import("../assets/icons/Pills")['default']
    'SvgoIconsPinFilled': typeof import("../assets/icons/Pin--filled")['default']
    'SvgoIconsPin': typeof import("../assets/icons/Pin")['default']
    'SvgoIconsPlan': typeof import("../assets/icons/Plan")['default']
    'SvgoIconsPlanePrivate': typeof import("../assets/icons/Plane--private")['default']
    'SvgoIconsPlaneSea': typeof import("../assets/icons/Plane--sea")['default']
    'SvgoIconsPlane': typeof import("../assets/icons/Plane")['default']
    'SvgoIconsPlatforms': typeof import("../assets/icons/Platforms")['default']
    'SvgoIconsPlayFilledAlt': typeof import("../assets/icons/Play--filled--alt")['default']
    'SvgoIconsPlayFilled': typeof import("../assets/icons/Play--filled")['default']
    'SvgoIconsPlayOutlineFilled': typeof import("../assets/icons/Play--outline--filled")['default']
    'SvgoIconsPlayOutline': typeof import("../assets/icons/Play--outline")['default']
    'SvgoIconsPlay': typeof import("../assets/icons/Play")['default']
    'SvgoIconsPlaylist': typeof import("../assets/icons/Playlist")['default']
    'SvgoIconsPlugFilled': typeof import("../assets/icons/Plug--filled")['default']
    'SvgoIconsPlug': typeof import("../assets/icons/Plug")['default']
    'SvgoIconsPng': typeof import("../assets/icons/Png")['default']
    'SvgoIconsPointOfPresence': typeof import("../assets/icons/Point-of-presence")['default']
    'SvgoIconsPointerText': typeof import("../assets/icons/Pointer-text")['default']
    'SvgoIconsPolice': typeof import("../assets/icons/Police")['default']
    'SvgoIconsPolicy': typeof import("../assets/icons/Policy")['default']
    'SvgoIconsPopup': typeof import("../assets/icons/Popup")['default']
    'SvgoIconsPortDefinition': typeof import("../assets/icons/Port--definition")['default']
    'SvgoIconsPortInput': typeof import("../assets/icons/Port--input")['default']
    'SvgoIconsPortOutput': typeof import("../assets/icons/Port--output")['default']
    'SvgoIconsPortUsage': typeof import("../assets/icons/Port--usage")['default']
    'SvgoIconsPortfolio': typeof import("../assets/icons/Portfolio")['default']
    'SvgoIconsPower': typeof import("../assets/icons/Power")['default']
    'SvgoIconsPpt': typeof import("../assets/icons/Ppt")['default']
    'SvgoIconsPresentationFile': typeof import("../assets/icons/Presentation-file")['default']
    'SvgoIconsPressureFilled': typeof import("../assets/icons/Pressure--filled")['default']
    'SvgoIconsPressure': typeof import("../assets/icons/Pressure")['default']
    'SvgoIconsPreviousFilled': typeof import("../assets/icons/Previous--filled")['default']
    'SvgoIconsPreviousOutline': typeof import("../assets/icons/Previous--outline")['default']
    'SvgoIconsPricingConsumption': typeof import("../assets/icons/Pricing--consumption")['default']
    'SvgoIconsPricingContainer': typeof import("../assets/icons/Pricing--container")['default']
    'SvgoIconsPricingQuickProposal': typeof import("../assets/icons/Pricing--quick-proposal")['default']
    'SvgoIconsPricingTailored': typeof import("../assets/icons/Pricing--tailored")['default']
    'SvgoIconsPricingTraditional': typeof import("../assets/icons/Pricing--traditional")['default']
    'SvgoIconsPrinter': typeof import("../assets/icons/Printer")['default']
    'SvgoIconsProcessAutomate': typeof import("../assets/icons/Process-automate")['default']
    'SvgoIconsProcess': typeof import("../assets/icons/Process")['default']
    'SvgoIconsProduct': typeof import("../assets/icons/Product")['default']
    'SvgoIconsProgressBarRound': typeof import("../assets/icons/Progress-bar--round")['default']
    'SvgoIconsProgressBar': typeof import("../assets/icons/Progress-bar")['default']
    'SvgoIconsPromote': typeof import("../assets/icons/Promote")['default']
    'SvgoIconsPromptSession': typeof import("../assets/icons/Prompt-session")['default']
    'SvgoIconsPromptTemplate': typeof import("../assets/icons/Prompt-template")['default']
    'SvgoIconsPropertyRelationship': typeof import("../assets/icons/Property-relationship")['default']
    'SvgoIconsPullRequest': typeof import("../assets/icons/Pull-request")['default']
    'SvgoIconsPurchase': typeof import("../assets/icons/Purchase")['default']
    'SvgoIconsQCLaunch': typeof import("../assets/icons/QC-launch")['default']
    'SvgoIconsQiskit': typeof import("../assets/icons/Qiskit")['default']
    'SvgoIconsQqPlot': typeof import("../assets/icons/Qq-plot")['default']
    'SvgoIconsQrCode': typeof import("../assets/icons/Qr-code")['default']
    'SvgoIconsQuadrantPlot': typeof import("../assets/icons/Quadrant-plot")['default']
    'SvgoIconsQueryQueue': typeof import("../assets/icons/Query-queue")['default']
    'SvgoIconsQuery': typeof import("../assets/icons/Query")['default']
    'SvgoIconsQuestionAnswering': typeof import("../assets/icons/Question-answering")['default']
    'SvgoIconsQueued': typeof import("../assets/icons/Queued")['default']
    'SvgoIconsQuotes': typeof import("../assets/icons/Quotes")['default']
    'SvgoIconsRAG': typeof import("../assets/icons/RAG")['default']
    'SvgoIconsRadarEnhanced': typeof import("../assets/icons/Radar--enhanced")['default']
    'SvgoIconsRadarWeather': typeof import("../assets/icons/Radar--weather")['default']
    'SvgoIconsRadar': typeof import("../assets/icons/Radar")['default']
    'SvgoIconsRadioCombat': typeof import("../assets/icons/Radio--combat")['default']
    'SvgoIconsRadioPushToTalk': typeof import("../assets/icons/Radio--push-to-talk")['default']
    'SvgoIconsRadioButtonChecked': typeof import("../assets/icons/Radio-button--checked")['default']
    'SvgoIconsRadioButton': typeof import("../assets/icons/Radio-button")['default']
    'SvgoIconsRadio': typeof import("../assets/icons/Radio")['default']
    'SvgoIconsRainDrizzle': typeof import("../assets/icons/Rain--drizzle")['default']
    'SvgoIconsRainHeavy': typeof import("../assets/icons/Rain--heavy")['default']
    'SvgoIconsRainScatteredNight': typeof import("../assets/icons/Rain--scattered--night")['default']
    'SvgoIconsRainScattered': typeof import("../assets/icons/Rain--scattered")['default']
    'SvgoIconsRainDrop': typeof import("../assets/icons/Rain-drop")['default']
    'SvgoIconsRain': typeof import("../assets/icons/Rain")['default']
    'SvgoIconsRaw': typeof import("../assets/icons/Raw")['default']
    'SvgoIconsReceipt': typeof import("../assets/icons/Receipt")['default']
    'SvgoIconsRecentlyViewed': typeof import("../assets/icons/Recently-viewed")['default']
    'SvgoIconsRecommend': typeof import("../assets/icons/Recommend")['default']
    'SvgoIconsRecordingFilledAlt': typeof import("../assets/icons/Recording--filled--alt")['default']
    'SvgoIconsRecordingFilled': typeof import("../assets/icons/Recording--filled")['default']
    'SvgoIconsRecording': typeof import("../assets/icons/Recording")['default']
    'SvgoIconsRecycle': typeof import("../assets/icons/Recycle")['default']
    'SvgoIconsRedo': typeof import("../assets/icons/Redo")['default']
    'SvgoIconsRefEvapotranspiration': typeof import("../assets/icons/Ref-evapotranspiration")['default']
    'SvgoIconsReferenceArchitecture': typeof import("../assets/icons/Reference-architecture")['default']
    'SvgoIconsReflectHorizontal': typeof import("../assets/icons/Reflect--horizontal")['default']
    'SvgoIconsReflectVertical': typeof import("../assets/icons/Reflect--vertical")['default']
    'SvgoIconsRegionAnalysisArea': typeof import("../assets/icons/Region-analysis--area")['default']
    'SvgoIconsRegionAnalysisVolume': typeof import("../assets/icons/Region-analysis--volume")['default']
    'SvgoIconsRegistration': typeof import("../assets/icons/Registration")['default']
    'SvgoIconsReminderMedical': typeof import("../assets/icons/Reminder--medical")['default']
    'SvgoIconsReminder': typeof import("../assets/icons/Reminder")['default']
    'SvgoIconsRenew': typeof import("../assets/icons/Renew")['default']
    'SvgoIconsRepeatOne': typeof import("../assets/icons/Repeat--one")['default']
    'SvgoIconsRepeat': typeof import("../assets/icons/Repeat")['default']
    'SvgoIconsReplicate': typeof import("../assets/icons/Replicate")['default']
    'SvgoIconsReplyAll': typeof import("../assets/icons/Reply--all")['default']
    'SvgoIconsReply': typeof import("../assets/icons/Reply")['default']
    'SvgoIconsRepoArtifact': typeof import("../assets/icons/Repo--artifact")['default']
    'SvgoIconsRepoSourceCode': typeof import("../assets/icons/Repo--source-code")['default']
    'SvgoIconsReportData': typeof import("../assets/icons/Report--data")['default']
    'SvgoIconsReport': typeof import("../assets/icons/Report")['default']
    'SvgoIconsRequestQuote': typeof import("../assets/icons/Request-quote")['default']
    'SvgoIconsRequirementDefinition': typeof import("../assets/icons/Requirement--definition")['default']
    'SvgoIconsRequirementUsage': typeof import("../assets/icons/Requirement--usage")['default']
    'SvgoIconsResetAlt': typeof import("../assets/icons/Reset--alt")['default']
    'SvgoIconsReset': typeof import("../assets/icons/Reset")['default']
    'SvgoIconsRestart': typeof import("../assets/icons/Restart")['default']
    'SvgoIconsRestaurantFine': typeof import("../assets/icons/Restaurant--fine")['default']
    'SvgoIconsRestaurant': typeof import("../assets/icons/Restaurant")['default']
    'SvgoIconsResultDraft': typeof import("../assets/icons/Result--draft")['default']
    'SvgoIconsResultNew': typeof import("../assets/icons/Result--new")['default']
    'SvgoIconsResultOld': typeof import("../assets/icons/Result--old")['default']
    'SvgoIconsResult': typeof import("../assets/icons/Result")['default']
    'SvgoIconsRetryFailed': typeof import("../assets/icons/Retry--failed")['default']
    'SvgoIconsReturn': typeof import("../assets/icons/Return")['default']
    'SvgoIconsReview': typeof import("../assets/icons/Review")['default']
    'SvgoIconsRewind10': typeof import("../assets/icons/Rewind--10")['default']
    'SvgoIconsRewind30': typeof import("../assets/icons/Rewind--30")['default']
    'SvgoIconsRewind5': typeof import("../assets/icons/Rewind--5")['default']
    'SvgoIconsRightPanelCloseFilled': typeof import("../assets/icons/Right-panel--close--filled")['default']
    'SvgoIconsRightPanelClose': typeof import("../assets/icons/Right-panel--close")['default']
    'SvgoIconsRightPanelOpenFilled': typeof import("../assets/icons/Right-panel--open--filled")['default']
    'SvgoIconsRightPanelOpen': typeof import("../assets/icons/Right-panel--open")['default']
    'SvgoIconsRoadWeather': typeof import("../assets/icons/Road--weather")['default']
    'SvgoIconsRoad': typeof import("../assets/icons/Road")['default']
    'SvgoIconsRoadmap': typeof import("../assets/icons/Roadmap")['default']
    'SvgoIconsRocket': typeof import("../assets/icons/Rocket")['default']
    'SvgoIconsRotate180': typeof import("../assets/icons/Rotate--180")['default']
    'SvgoIconsRotate360': typeof import("../assets/icons/Rotate--360")['default']
    'SvgoIconsRotateClockwiseAltFilled': typeof import("../assets/icons/Rotate--clockwise--alt--filled")['default']
    'SvgoIconsRotateClockwiseAlt': typeof import("../assets/icons/Rotate--clockwise--alt")['default']
    'SvgoIconsRotateClockwiseFilled': typeof import("../assets/icons/Rotate--clockwise--filled")['default']
    'SvgoIconsRotateClockwise': typeof import("../assets/icons/Rotate--clockwise")['default']
    'SvgoIconsRotateCounterclockwiseAltFilled': typeof import("../assets/icons/Rotate--counterclockwise--alt--filled")['default']
    'SvgoIconsRotateCounterclockwiseAlt': typeof import("../assets/icons/Rotate--counterclockwise--alt")['default']
    'SvgoIconsRotateCounterclockwiseFilled': typeof import("../assets/icons/Rotate--counterclockwise--filled")['default']
    'SvgoIconsRotateCounterclockwise': typeof import("../assets/icons/Rotate--counterclockwise")['default']
    'SvgoIconsRotate': typeof import("../assets/icons/Rotate")['default']
    'SvgoIconsRouterVoice': typeof import("../assets/icons/Router--voice")['default']
    'SvgoIconsRouterWifi': typeof import("../assets/icons/Router--wifi")['default']
    'SvgoIconsRouter': typeof import("../assets/icons/Router")['default']
    'SvgoIconsRowCollapse': typeof import("../assets/icons/Row--collapse")['default']
    'SvgoIconsRowDelete': typeof import("../assets/icons/Row--delete")['default']
    'SvgoIconsRowExpand': typeof import("../assets/icons/Row--expand")['default']
    'SvgoIconsRowInsert': typeof import("../assets/icons/Row--insert")['default']
    'SvgoIconsRow': typeof import("../assets/icons/Row")['default']
    'SvgoIconsRss': typeof import("../assets/icons/Rss")['default']
    'SvgoIconsRuleCancelled': typeof import("../assets/icons/Rule--cancelled")['default']
    'SvgoIconsRuleDataQuality': typeof import("../assets/icons/Rule--data-quality")['default']
    'SvgoIconsRuleDraft': typeof import("../assets/icons/Rule--draft")['default']
    'SvgoIconsRuleFilled': typeof import("../assets/icons/Rule--filled")['default']
    'SvgoIconsRuleLocked': typeof import("../assets/icons/Rule--locked")['default']
    'SvgoIconsRulePartial': typeof import("../assets/icons/Rule--partial")['default']
    'SvgoIconsRuleTest': typeof import("../assets/icons/Rule--test")['default']
    'SvgoIconsRule': typeof import("../assets/icons/Rule")['default']
    'SvgoIconsRulerAlt': typeof import("../assets/icons/Ruler--alt")['default']
    'SvgoIconsRuler': typeof import("../assets/icons/Ruler")['default']
    'SvgoIconsRunMirror': typeof import("../assets/icons/Run--mirror")['default']
    'SvgoIconsRun': typeof import("../assets/icons/Run")['default']
    'SvgoIconsRunning': typeof import("../assets/icons/Running")['default']
    'SvgoIconsSAlt': typeof import("../assets/icons/S--alt")['default']
    'SvgoIconsS': typeof import("../assets/icons/S")['default']
    'SvgoIconsSLM': typeof import("../assets/icons/SLM")['default']
    'SvgoIconsSailboatCoastal': typeof import("../assets/icons/Sailboat--coastal")['default']
    'SvgoIconsSailboatOffshore': typeof import("../assets/icons/Sailboat--offshore")['default']
    'SvgoIconsSalesOps': typeof import("../assets/icons/Sales-ops")['default']
    'SvgoIconsSankeyDiagramAlt': typeof import("../assets/icons/Sankey-diagram--alt")['default']
    'SvgoIconsSankeyDiagram': typeof import("../assets/icons/Sankey-diagram")['default']
    'SvgoIconsSatelliteRadar': typeof import("../assets/icons/Satellite--radar")['default']
    'SvgoIconsSatelliteWeather': typeof import("../assets/icons/Satellite--weather")['default']
    'SvgoIconsSatellite': typeof import("../assets/icons/Satellite")['default']
    'SvgoIconsSatisfyDefinition': typeof import("../assets/icons/Satisfy--definition")['default']
    'SvgoIconsSatisfyUsage': typeof import("../assets/icons/Satisfy--usage")['default']
    'SvgoIconsSaveAnnotation': typeof import("../assets/icons/Save--annotation")['default']
    'SvgoIconsSaveImage': typeof import("../assets/icons/Save--image")['default']
    'SvgoIconsSaveModel': typeof import("../assets/icons/Save--model")['default']
    'SvgoIconsSaveSeries': typeof import("../assets/icons/Save--series")['default']
    'SvgoIconsSave': typeof import("../assets/icons/Save")['default']
    'SvgoIconsScale': typeof import("../assets/icons/Scale")['default']
    'SvgoIconsScalesTipped': typeof import("../assets/icons/Scales--tipped")['default']
    'SvgoIconsScales': typeof import("../assets/icons/Scales")['default']
    'SvgoIconsScalpelCursor': typeof import("../assets/icons/Scalpel--cursor")['default']
    'SvgoIconsScalpelLasso': typeof import("../assets/icons/Scalpel--lasso")['default']
    'SvgoIconsScalpelSelect': typeof import("../assets/icons/Scalpel--select")['default']
    'SvgoIconsScalpel': typeof import("../assets/icons/Scalpel")['default']
    'SvgoIconsScanAlt': typeof import("../assets/icons/Scan--alt")['default']
    'SvgoIconsScanDisabled': typeof import("../assets/icons/Scan--disabled")['default']
    'SvgoIconsScan': typeof import("../assets/icons/Scan")['default']
    'SvgoIconsScatterMatrix': typeof import("../assets/icons/Scatter-matrix")['default']
    'SvgoIconsSchematics': typeof import("../assets/icons/Schematics")['default']
    'SvgoIconsScisControlTower': typeof import("../assets/icons/Scis--control-tower")['default']
    'SvgoIconsScisTransparentSupply': typeof import("../assets/icons/Scis--transparent-supply")['default']
    'SvgoIconsScooterFront': typeof import("../assets/icons/Scooter--front")['default']
    'SvgoIconsScooter': typeof import("../assets/icons/Scooter")['default']
    'SvgoIconsScreenOff': typeof import("../assets/icons/Screen--off")['default']
    'SvgoIconsScreenMapSet': typeof import("../assets/icons/Screen-map--set")['default']
    'SvgoIconsScreenMap': typeof import("../assets/icons/Screen-map")['default']
    'SvgoIconsScreen': typeof import("../assets/icons/Screen")['default']
    'SvgoIconsScriptReference': typeof import("../assets/icons/Script--reference")['default']
    'SvgoIconsScript': typeof import("../assets/icons/Script")['default']
    'SvgoIconsSdk': typeof import("../assets/icons/Sdk")['default']
    'SvgoIconsSearchAdvanced': typeof import("../assets/icons/Search--advanced")['default']
    'SvgoIconsSearchLocateMirror': typeof import("../assets/icons/Search--locate--mirror")['default']
    'SvgoIconsSearchLocate': typeof import("../assets/icons/Search--locate")['default']
    'SvgoIconsSearch': typeof import("../assets/icons/Search")['default']
    'SvgoIconsSecurityServices': typeof import("../assets/icons/Security-services")['default']
    'SvgoIconsSecurity': typeof import("../assets/icons/Security")['default']
    'SvgoIconsSelect01': typeof import("../assets/icons/Select--01")['default']
    'SvgoIconsSelect02': typeof import("../assets/icons/Select--02")['default']
    'SvgoIconsSelectWindow': typeof import("../assets/icons/Select--window")['default']
    'SvgoIconsSendAltFilled': typeof import("../assets/icons/Send--alt--filled")['default']
    'SvgoIconsSendAlt': typeof import("../assets/icons/Send--alt")['default']
    'SvgoIconsSendFilled': typeof import("../assets/icons/Send--filled")['default']
    'SvgoIconsSendActionUsage': typeof import("../assets/icons/Send-action--usage")['default']
    'SvgoIconsSendBackward': typeof import("../assets/icons/Send-backward")['default']
    'SvgoIconsSendToBack': typeof import("../assets/icons/Send-to-back")['default']
    'SvgoIconsSend': typeof import("../assets/icons/Send")['default']
    'SvgoIconsServerDns': typeof import("../assets/icons/Server--dns")['default']
    'SvgoIconsServerProxy': typeof import("../assets/icons/Server--proxy")['default']
    'SvgoIconsServerTime': typeof import("../assets/icons/Server--time")['default']
    'SvgoIconsServiceDesk': typeof import("../assets/icons/Service-desk")['default']
    'SvgoIconsServiceId': typeof import("../assets/icons/Service-id")['default']
    'SvgoIconsServiceLevels': typeof import("../assets/icons/Service-levels")['default']
    'SvgoIconsSessionBorderControl': typeof import("../assets/icons/Session-border-control")['default']
    'SvgoIconsSettingsAdjust': typeof import("../assets/icons/Settings--adjust")['default']
    'SvgoIconsSettingsCheck': typeof import("../assets/icons/Settings--check")['default']
    'SvgoIconsSettingsEdit': typeof import("../assets/icons/Settings--edit")['default']
    'SvgoIconsSettingsServices': typeof import("../assets/icons/Settings--services")['default']
    'SvgoIconsSettingsView': typeof import("../assets/icons/Settings--view")['default']
    'SvgoIconsSettings': typeof import("../assets/icons/Settings")['default']
    'SvgoIconsShapeExcept': typeof import("../assets/icons/Shape--except")['default']
    'SvgoIconsShapeExclude': typeof import("../assets/icons/Shape--exclude")['default']
    'SvgoIconsShapeIntersect': typeof import("../assets/icons/Shape--intersect")['default']
    'SvgoIconsShapeJoin': typeof import("../assets/icons/Shape--join")['default']
    'SvgoIconsShapeUnite': typeof import("../assets/icons/Shape--unite")['default']
    'SvgoIconsShapes': typeof import("../assets/icons/Shapes")['default']
    'SvgoIconsShareKnowledge': typeof import("../assets/icons/Share-knowledge")['default']
    'SvgoIconsShare': typeof import("../assets/icons/Share")['default']
    'SvgoIconsShoppingBag': typeof import("../assets/icons/Shopping--bag")['default']
    'SvgoIconsShoppingCartArrowDown': typeof import("../assets/icons/Shopping--cart--arrow-down")['default']
    'SvgoIconsShoppingCartArrowUp': typeof import("../assets/icons/Shopping--cart--arrow-up")['default']
    'SvgoIconsShoppingCartClear': typeof import("../assets/icons/Shopping--cart--clear")['default']
    'SvgoIconsShoppingCartError': typeof import("../assets/icons/Shopping--cart--error")['default']
    'SvgoIconsShoppingCartMinus': typeof import("../assets/icons/Shopping--cart--minus")['default']
    'SvgoIconsShoppingCartPlus': typeof import("../assets/icons/Shopping--cart--plus")['default']
    'SvgoIconsShoppingCart': typeof import("../assets/icons/Shopping--cart")['default']
    'SvgoIconsShoppingCatalog': typeof import("../assets/icons/Shopping--catalog")['default']
    'SvgoIconsShowDataCards': typeof import("../assets/icons/Show-data--cards")['default']
    'SvgoIconsShrinkScreenFilled': typeof import("../assets/icons/Shrink-screen--filled")['default']
    'SvgoIconsShrinkScreen': typeof import("../assets/icons/Shrink-screen")['default']
    'SvgoIconsShuffle': typeof import("../assets/icons/Shuffle")['default']
    'SvgoIconsShuttle': typeof import("../assets/icons/Shuttle")['default']
    'SvgoIconsSidePanelCloseFilled': typeof import("../assets/icons/Side-panel--close--filled")['default']
    'SvgoIconsSidePanelClose': typeof import("../assets/icons/Side-panel--close")['default']
    'SvgoIconsSidePanelOpenFilled': typeof import("../assets/icons/Side-panel--open--filled")['default']
    'SvgoIconsSidePanelOpen': typeof import("../assets/icons/Side-panel--open")['default']
    'SvgoIconsSight': typeof import("../assets/icons/Sight")['default']
    'SvgoIconsSigma': typeof import("../assets/icons/Sigma")['default']
    'SvgoIconsSignalStrength': typeof import("../assets/icons/Signal-strength")['default']
    'SvgoIconsSimCard': typeof import("../assets/icons/Sim-card")['default']
    'SvgoIconsSkillLevelAdvanced': typeof import("../assets/icons/Skill-level--advanced")['default']
    'SvgoIconsSkillLevelBasic': typeof import("../assets/icons/Skill-level--basic")['default']
    'SvgoIconsSkillLevelIntermediate': typeof import("../assets/icons/Skill-level--intermediate")['default']
    'SvgoIconsSkillLevel': typeof import("../assets/icons/Skill-level")['default']
    'SvgoIconsSkipBackFilled': typeof import("../assets/icons/Skip--back--filled")['default']
    'SvgoIconsSkipBackOutlineFilled': typeof import("../assets/icons/Skip--back--outline--filled")['default']
    'SvgoIconsSkipBackOutlineSolid': typeof import("../assets/icons/Skip--back--outline--solid")['default']
    'SvgoIconsSkipBackOutline': typeof import("../assets/icons/Skip--back--outline")['default']
    'SvgoIconsSkipBackSolidFilled': typeof import("../assets/icons/Skip--back--solid--filled")['default']
    'SvgoIconsSkipBack': typeof import("../assets/icons/Skip--back")['default']
    'SvgoIconsSkipForwardFilled': typeof import("../assets/icons/Skip--forward--filled")['default']
    'SvgoIconsSkipForwardOutlineFilled': typeof import("../assets/icons/Skip--forward--outline--filled")['default']
    'SvgoIconsSkipForwardOutlineSolid': typeof import("../assets/icons/Skip--forward--outline--solid")['default']
    'SvgoIconsSkipForwardOutline': typeof import("../assets/icons/Skip--forward--outline")['default']
    'SvgoIconsSkipForwardSolidFilled': typeof import("../assets/icons/Skip--forward--solid--filled")['default']
    'SvgoIconsSkipForward': typeof import("../assets/icons/Skip--forward")['default']
    'SvgoIconsSleet': typeof import("../assets/icons/Sleet")['default']
    'SvgoIconsSlisor': typeof import("../assets/icons/Slisor")['default']
    'SvgoIconsSmell': typeof import("../assets/icons/Smell")['default']
    'SvgoIconsSmoke': typeof import("../assets/icons/Smoke")['default']
    'SvgoIconsSmoothingCursor': typeof import("../assets/icons/Smoothing--cursor")['default']
    'SvgoIconsSmoothing': typeof import("../assets/icons/Smoothing")['default']
    'SvgoIconsSnooze': typeof import("../assets/icons/Snooze")['default']
    'SvgoIconsSnowBlizzard': typeof import("../assets/icons/Snow--blizzard")['default']
    'SvgoIconsSnowHeavy': typeof import("../assets/icons/Snow--heavy")['default']
    'SvgoIconsSnowScatteredNight': typeof import("../assets/icons/Snow--scattered--night")['default']
    'SvgoIconsSnowScattered': typeof import("../assets/icons/Snow--scattered")['default']
    'SvgoIconsSnowDensity': typeof import("../assets/icons/Snow-density")['default']
    'SvgoIconsSnow': typeof import("../assets/icons/Snow")['default']
    'SvgoIconsSnowflake': typeof import("../assets/icons/Snowflake")['default']
    'SvgoIconsSoccer': typeof import("../assets/icons/Soccer")['default']
    'SvgoIconsSoftwareResourceCluster': typeof import("../assets/icons/Software-resource--cluster")['default']
    'SvgoIconsSoftwareResourceResource': typeof import("../assets/icons/Software-resource--resource")['default']
    'SvgoIconsSoftwareResource': typeof import("../assets/icons/Software-resource")['default']
    'SvgoIconsSoilMoistureField': typeof import("../assets/icons/Soil-moisture--field")['default']
    'SvgoIconsSoilMoistureGlobal': typeof import("../assets/icons/Soil-moisture--global")['default']
    'SvgoIconsSoilMoisture': typeof import("../assets/icons/Soil-moisture")['default']
    'SvgoIconsSoilTemperatureField': typeof import("../assets/icons/Soil-temperature--field")['default']
    'SvgoIconsSoilTemperatureGlobal': typeof import("../assets/icons/Soil-temperature--global")['default']
    'SvgoIconsSoilTemperature': typeof import("../assets/icons/Soil-temperature")['default']
    'SvgoIconsSolarPanel': typeof import("../assets/icons/Solar-panel")['default']
    'SvgoIconsSortAscending': typeof import("../assets/icons/Sort--ascending")['default']
    'SvgoIconsSortDescending': typeof import("../assets/icons/Sort--descending")['default']
    'SvgoIconsSortRemove': typeof import("../assets/icons/Sort--remove")['default']
    'SvgoIconsSpellCheck': typeof import("../assets/icons/Spell-check")['default']
    'SvgoIconsSpineLabel': typeof import("../assets/icons/Spine-label")['default']
    'SvgoIconsSplitDiscard': typeof import("../assets/icons/Split--discard")['default']
    'SvgoIconsSplitScreen': typeof import("../assets/icons/Split-screen")['default']
    'SvgoIconsSplit': typeof import("../assets/icons/Split")['default']
    'SvgoIconsSprayPaint': typeof import("../assets/icons/Spray-paint")['default']
    'SvgoIconsSprout': typeof import("../assets/icons/Sprout")['default']
    'SvgoIconsSql': typeof import("../assets/icons/Sql")['default']
    'SvgoIconsSquareOutline': typeof import("../assets/icons/Square--outline")['default']
    'SvgoIconsSquareSolid': typeof import("../assets/icons/Square--solid")['default']
    'SvgoIconsStackLimitation': typeof import("../assets/icons/Stack-limitation")['default']
    'SvgoIconsStackedMove': typeof import("../assets/icons/Stacked-move")['default']
    'SvgoIconsStackedScrolling1': typeof import("../assets/icons/Stacked-scrolling--1")['default']
    'SvgoIconsStackedScrolling2': typeof import("../assets/icons/Stacked-scrolling--2")['default']
    'SvgoIconsStamp': typeof import("../assets/icons/Stamp")['default']
    'SvgoIconsStarFilled': typeof import("../assets/icons/Star--filled")['default']
    'SvgoIconsStarHalf': typeof import("../assets/icons/Star--half")['default']
    'SvgoIconsStarReview': typeof import("../assets/icons/Star--review")['default']
    'SvgoIconsStar': typeof import("../assets/icons/Star")['default']
    'SvgoIconsStatusAcknowledge': typeof import("../assets/icons/Status--acknowledge")['default']
    'SvgoIconsStatusPartialFail': typeof import("../assets/icons/Status--partial-fail")['default']
    'SvgoIconsStatusResolved': typeof import("../assets/icons/Status--resolved")['default']
    'SvgoIconsStayInside': typeof import("../assets/icons/Stay-inside")['default']
    'SvgoIconsStemLeafPlot': typeof import("../assets/icons/Stem-leaf-plot")['default']
    'SvgoIconsStethoscope': typeof import("../assets/icons/Stethoscope")['default']
    'SvgoIconsStopFilledAlt': typeof import("../assets/icons/Stop--filled--alt")['default']
    'SvgoIconsStopFilled': typeof import("../assets/icons/Stop--filled")['default']
    'SvgoIconsStopOutlineFilled': typeof import("../assets/icons/Stop--outline--filled")['default']
    'SvgoIconsStopOutline': typeof import("../assets/icons/Stop--outline")['default']
    'SvgoIconsStopSignFilled': typeof import("../assets/icons/Stop-sign--filled")['default']
    'SvgoIconsStopSign': typeof import("../assets/icons/Stop-sign")['default']
    'SvgoIconsStop': typeof import("../assets/icons/Stop")['default']
    'SvgoIconsStoragePool': typeof import("../assets/icons/Storage-pool")['default']
    'SvgoIconsStorageRequest': typeof import("../assets/icons/Storage-request")['default']
    'SvgoIconsStore': typeof import("../assets/icons/Store")['default']
    'SvgoIconsStormTracker': typeof import("../assets/icons/Storm-tracker")['default']
    'SvgoIconsStrategyPlay': typeof import("../assets/icons/Strategy-play")['default']
    'SvgoIconsStrawberry': typeof import("../assets/icons/Strawberry")['default']
    'SvgoIconsStressBreathEditor': typeof import("../assets/icons/Stress-breath-editor")['default']
    'SvgoIconsStudyNext': typeof import("../assets/icons/Study--next")['default']
    'SvgoIconsStudyPrevious': typeof import("../assets/icons/Study--previous")['default']
    'SvgoIconsStudyRead': typeof import("../assets/icons/Study--read")['default']
    'SvgoIconsStudySkip': typeof import("../assets/icons/Study--skip")['default']
    'SvgoIconsStudyTransfer': typeof import("../assets/icons/Study--transfer")['default']
    'SvgoIconsStudyUnread': typeof import("../assets/icons/Study--unread")['default']
    'SvgoIconsStudyView': typeof import("../assets/icons/Study--view")['default']
    'SvgoIconsSubVolume': typeof import("../assets/icons/Sub-volume")['default']
    'SvgoIconsSubclassification': typeof import("../assets/icons/Subclassification")['default']
    'SvgoIconsSubdirectory': typeof import("../assets/icons/Subdirectory")['default']
    'SvgoIconsSubflowLocal': typeof import("../assets/icons/Subflow--local")['default']
    'SvgoIconsSubflow': typeof import("../assets/icons/Subflow")['default']
    'SvgoIconsSubjectDefinition': typeof import("../assets/icons/Subject--definition")['default']
    'SvgoIconsSubjectUsage': typeof import("../assets/icons/Subject--usage")['default']
    'SvgoIconsSubnetAclRules': typeof import("../assets/icons/Subnet-acl-rules")['default']
    'SvgoIconsSubtractAlt': typeof import("../assets/icons/Subtract--alt")['default']
    'SvgoIconsSubtractFilled': typeof import("../assets/icons/Subtract--filled")['default']
    'SvgoIconsSubtractLarge': typeof import("../assets/icons/Subtract--large")['default']
    'SvgoIconsSubtract': typeof import("../assets/icons/Subtract")['default']
    'SvgoIconsSuccession': typeof import("../assets/icons/Succession")['default']
    'SvgoIconsSummaryKPIMirror': typeof import("../assets/icons/Summary--KPI--mirror")['default']
    'SvgoIconsSummaryKpi': typeof import("../assets/icons/Summary--kpi")['default']
    'SvgoIconsSun': typeof import("../assets/icons/Sun")['default']
    'SvgoIconsSunrise': typeof import("../assets/icons/Sunrise")['default']
    'SvgoIconsSunset': typeof import("../assets/icons/Sunset")['default']
    'SvgoIconsSupportVectorMachine': typeof import("../assets/icons/Support-vector-machine")['default']
    'SvgoIconsSustainability': typeof import("../assets/icons/Sustainability")['default']
    'SvgoIconsSvg': typeof import("../assets/icons/Svg")['default']
    'SvgoIconsSwim': typeof import("../assets/icons/Swim")['default']
    'SvgoIconsSwitchLayer2': typeof import("../assets/icons/Switch-layer-2")['default']
    'SvgoIconsSwitchLayer3': typeof import("../assets/icons/Switch-layer-3")['default']
    'SvgoIconsSwitcher': typeof import("../assets/icons/Switcher")['default']
    'SvgoIconsSyncSettings': typeof import("../assets/icons/Sync-settings")['default']
    'SvgoIconsSysProvision': typeof import("../assets/icons/Sys-provision")['default']
    'SvgoIconsSysplexDistributor': typeof import("../assets/icons/Sysplex--distributor")['default']
    'SvgoIconsTAlt': typeof import("../assets/icons/T--alt")['default']
    'SvgoIconsT': typeof import("../assets/icons/T")['default']
    'SvgoIconsTableAlias': typeof import("../assets/icons/Table--alias")['default']
    'SvgoIconsTableBuilt': typeof import("../assets/icons/Table--built")['default']
    'SvgoIconsTableShortcut': typeof import("../assets/icons/Table--shortcut")['default']
    'SvgoIconsTableSplit': typeof import("../assets/icons/Table--split")['default']
    'SvgoIconsTableOfContents': typeof import("../assets/icons/Table-of-contents")['default']
    'SvgoIconsTable': typeof import("../assets/icons/Table")['default']
    'SvgoIconsTabletLandscape': typeof import("../assets/icons/Tablet--landscape")['default']
    'SvgoIconsTablet': typeof import("../assets/icons/Tablet")['default']
    'SvgoIconsTagEdit': typeof import("../assets/icons/Tag--edit")['default']
    'SvgoIconsTagExport': typeof import("../assets/icons/Tag--export")['default']
    'SvgoIconsTagGroup': typeof import("../assets/icons/Tag--group")['default']
    'SvgoIconsTagImport': typeof import("../assets/icons/Tag--import")['default']
    'SvgoIconsTagNone': typeof import("../assets/icons/Tag--none")['default']
    'SvgoIconsTag': typeof import("../assets/icons/Tag")['default']
    'SvgoIconsTank': typeof import("../assets/icons/Tank")['default']
    'SvgoIconsTaskAdd': typeof import("../assets/icons/Task--add")['default']
    'SvgoIconsTaskApproved': typeof import("../assets/icons/Task--approved")['default']
    'SvgoIconsTaskAssetView': typeof import("../assets/icons/Task--asset-view")['default']
    'SvgoIconsTaskComplete': typeof import("../assets/icons/Task--complete")['default']
    'SvgoIconsTaskLocation': typeof import("../assets/icons/Task--location")['default']
    'SvgoIconsTaskRemove': typeof import("../assets/icons/Task--remove")['default']
    'SvgoIconsTaskSettings': typeof import("../assets/icons/Task--settings")['default']
    'SvgoIconsTaskStar': typeof import("../assets/icons/Task--star")['default']
    'SvgoIconsTaskTools': typeof import("../assets/icons/Task--tools")['default']
    'SvgoIconsTaskView': typeof import("../assets/icons/Task--view")['default']
    'SvgoIconsTask': typeof import("../assets/icons/Task")['default']
    'SvgoIconsTaste': typeof import("../assets/icons/Taste")['default']
    'SvgoIconsTaxi': typeof import("../assets/icons/Taxi")['default']
    'SvgoIconsTcpIpService': typeof import("../assets/icons/Tcp-ip-service")['default']
    'SvgoIconsTemperatureCelsiusAlt': typeof import("../assets/icons/Temperature--celsius--alt")['default']
    'SvgoIconsTemperatureCelsius': typeof import("../assets/icons/Temperature--celsius")['default']
    'SvgoIconsTemperatureFahrenheitAlt': typeof import("../assets/icons/Temperature--fahrenheit--alt")['default']
    'SvgoIconsTemperatureFahrenheit': typeof import("../assets/icons/Temperature--fahrenheit")['default']
    'SvgoIconsTemperatureFeelsLike': typeof import("../assets/icons/Temperature--feels-like")['default']
    'SvgoIconsTemperatureFrigid': typeof import("../assets/icons/Temperature--frigid")['default']
    'SvgoIconsTemperatureHot': typeof import("../assets/icons/Temperature--hot")['default']
    'SvgoIconsTemperatureInversion': typeof import("../assets/icons/Temperature--inversion")['default']
    'SvgoIconsTemperatureMax': typeof import("../assets/icons/Temperature--max")['default']
    'SvgoIconsTemperatureMin': typeof import("../assets/icons/Temperature--min")['default']
    'SvgoIconsTemperatureWater': typeof import("../assets/icons/Temperature--water")['default']
    'SvgoIconsTemperature': typeof import("../assets/icons/Temperature")['default']
    'SvgoIconsTemplate': typeof import("../assets/icons/Template")['default']
    'SvgoIconsTennisBall': typeof import("../assets/icons/Tennis-ball")['default']
    'SvgoIconsTennis': typeof import("../assets/icons/Tennis")['default']
    'SvgoIconsTermReference': typeof import("../assets/icons/Term--reference")['default']
    'SvgoIconsTerm': typeof import("../assets/icons/Term")['default']
    'SvgoIconsTerminal3270': typeof import("../assets/icons/Terminal--3270")['default']
    'SvgoIconsTerminal': typeof import("../assets/icons/Terminal")['default']
    'SvgoIconsTestTool': typeof import("../assets/icons/Test-tool")['default']
    'SvgoIconsTextAlignCenter': typeof import("../assets/icons/Text--align--center")['default']
    'SvgoIconsTextAlignJustify': typeof import("../assets/icons/Text--align--justify")['default']
    'SvgoIconsTextAlignLeft': typeof import("../assets/icons/Text--align--left")['default']
    'SvgoIconsTextAlignMixed': typeof import("../assets/icons/Text--align--mixed")['default']
    'SvgoIconsTextAlignRight': typeof import("../assets/icons/Text--align--right")['default']
    'SvgoIconsTextAllCaps': typeof import("../assets/icons/Text--all-caps")['default']
    'SvgoIconsTextBold': typeof import("../assets/icons/Text--bold")['default']
    'SvgoIconsTextClearFormat': typeof import("../assets/icons/Text--clear-format")['default']
    'SvgoIconsTextColor': typeof import("../assets/icons/Text--color")['default']
    'SvgoIconsTextCreation': typeof import("../assets/icons/Text--creation")['default']
    'SvgoIconsTextFill': typeof import("../assets/icons/Text--fill")['default']
    'SvgoIconsTextFont': typeof import("../assets/icons/Text--font")['default']
    'SvgoIconsTextFootnote': typeof import("../assets/icons/Text--footnote")['default']
    'SvgoIconsTextHighlight': typeof import("../assets/icons/Text--highlight")['default']
    'SvgoIconsTextIndentLess': typeof import("../assets/icons/Text--indent--less")['default']
    'SvgoIconsTextIndentMore': typeof import("../assets/icons/Text--indent--more")['default']
    'SvgoIconsTextIndent': typeof import("../assets/icons/Text--indent")['default']
    'SvgoIconsTextItalic': typeof import("../assets/icons/Text--italic")['default']
    'SvgoIconsTextKerning': typeof import("../assets/icons/Text--kerning")['default']
    'SvgoIconsTextLeading': typeof import("../assets/icons/Text--leading")['default']
    'SvgoIconsTextLineSpacing': typeof import("../assets/icons/Text--line-spacing")['default']
    'SvgoIconsTextLongParagraph': typeof import("../assets/icons/Text--long-paragraph")['default']
    'SvgoIconsTextNewLine': typeof import("../assets/icons/Text--new-line")['default']
    'SvgoIconsTextScale': typeof import("../assets/icons/Text--scale")['default']
    'SvgoIconsTextSelection': typeof import("../assets/icons/Text--selection")['default']
    'SvgoIconsTextShortParagraph': typeof import("../assets/icons/Text--short-paragraph")['default']
    'SvgoIconsTextSmallCaps': typeof import("../assets/icons/Text--small-caps")['default']
    'SvgoIconsTextStrikethrough': typeof import("../assets/icons/Text--strikethrough")['default']
    'SvgoIconsTextSubscript': typeof import("../assets/icons/Text--subscript")['default']
    'SvgoIconsTextSuperscript': typeof import("../assets/icons/Text--superscript")['default']
    'SvgoIconsTextTracking': typeof import("../assets/icons/Text--tracking")['default']
    'SvgoIconsTextUnderline': typeof import("../assets/icons/Text--underline")['default']
    'SvgoIconsTextVerticalAlignment': typeof import("../assets/icons/Text--vertical-alignment")['default']
    'SvgoIconsTextWrap': typeof import("../assets/icons/Text--wrap")['default']
    'SvgoIconsTextAnnotationToggle': typeof import("../assets/icons/Text-annotation-toggle")['default']
    'SvgoIconsTextLinkAnalysis': typeof import("../assets/icons/Text-link--analysis")['default']
    'SvgoIconsTextLink': typeof import("../assets/icons/Text-link")['default']
    'SvgoIconsTextMiningApplier': typeof import("../assets/icons/Text-mining--applier")['default']
    'SvgoIconsTextMining': typeof import("../assets/icons/Text-mining")['default']
    'SvgoIconsTheater': typeof import("../assets/icons/Theater")['default']
    'SvgoIconsThisSideUp': typeof import("../assets/icons/This-side-up")['default']
    'SvgoIconsThreshold': typeof import("../assets/icons/Threshold")['default']
    'SvgoIconsThumbnail1': typeof import("../assets/icons/Thumbnail--1")['default']
    'SvgoIconsThumbnail2': typeof import("../assets/icons/Thumbnail--2")['default']
    'SvgoIconsThumbnailPreview': typeof import("../assets/icons/Thumbnail-preview")['default']
    'SvgoIconsThumbsDownFilled': typeof import("../assets/icons/Thumbs-down--filled")['default']
    'SvgoIconsThumbsDown': typeof import("../assets/icons/Thumbs-down")['default']
    'SvgoIconsThumbsUpFilled': typeof import("../assets/icons/Thumbs-up--filled")['default']
    'SvgoIconsThumbsUp': typeof import("../assets/icons/Thumbs-up")['default']
    'SvgoIconsThunderstormScatteredNight': typeof import("../assets/icons/Thunderstorm--scattered--night")['default']
    'SvgoIconsThunderstormScattered': typeof import("../assets/icons/Thunderstorm--scattered")['default']
    'SvgoIconsThunderstormSevere': typeof import("../assets/icons/Thunderstorm--severe")['default']
    'SvgoIconsThunderstormStrong': typeof import("../assets/icons/Thunderstorm--strong")['default']
    'SvgoIconsThunderstorm': typeof import("../assets/icons/Thunderstorm")['default']
    'SvgoIconsTicket': typeof import("../assets/icons/Ticket")['default']
    'SvgoIconsTides': typeof import("../assets/icons/Tides")['default']
    'SvgoIconsTif': typeof import("../assets/icons/Tif")['default']
    'SvgoIconsTimeFilled': typeof import("../assets/icons/Time--filled")['default']
    'SvgoIconsTimePlot': typeof import("../assets/icons/Time-plot")['default']
    'SvgoIconsTime': typeof import("../assets/icons/Time")['default']
    'SvgoIconsTimer': typeof import("../assets/icons/Timer")['default']
    'SvgoIconsTimingBelt': typeof import("../assets/icons/Timing-belt")['default']
    'SvgoIconsToolBox': typeof import("../assets/icons/Tool-box")['default']
    'SvgoIconsToolKit': typeof import("../assets/icons/Tool-kit")['default']
    'SvgoIconsToolsAlt': typeof import("../assets/icons/Tools--alt")['default']
    'SvgoIconsTools': typeof import("../assets/icons/Tools")['default']
    'SvgoIconsTornadoWarning': typeof import("../assets/icons/Tornado-warning")['default']
    'SvgoIconsTornado': typeof import("../assets/icons/Tornado")['default']
    'SvgoIconsTouch1Filled': typeof import("../assets/icons/Touch--1--filled")['default']
    'SvgoIconsTouch1DownFilled': typeof import("../assets/icons/Touch--1-down--filled")['default']
    'SvgoIconsTouch1Down': typeof import("../assets/icons/Touch--1-down")['default']
    'SvgoIconsTouch1': typeof import("../assets/icons/Touch--1")['default']
    'SvgoIconsTouch2Filled': typeof import("../assets/icons/Touch--2--filled")['default']
    'SvgoIconsTouch2': typeof import("../assets/icons/Touch--2")['default']
    'SvgoIconsTouchInteraction': typeof import("../assets/icons/Touch--interaction")['default']
    'SvgoIconsTour': typeof import("../assets/icons/Tour")['default']
    'SvgoIconsTrafficEvent': typeof import("../assets/icons/Traffic--event")['default']
    'SvgoIconsTrafficFlowIncident': typeof import("../assets/icons/Traffic--flow-incident")['default']
    'SvgoIconsTrafficFlow': typeof import("../assets/icons/Traffic--flow")['default']
    'SvgoIconsTrafficIncident': typeof import("../assets/icons/Traffic--incident")['default']
    'SvgoIconsTrafficWeatherIncident': typeof import("../assets/icons/Traffic--weather-incident")['default']
    'SvgoIconsTrafficCone': typeof import("../assets/icons/Traffic-cone")['default']
    'SvgoIconsTrainHeart': typeof import("../assets/icons/Train--heart")['default']
    'SvgoIconsTrainProfile': typeof import("../assets/icons/Train--profile")['default']
    'SvgoIconsTrainSpeed': typeof import("../assets/icons/Train--speed")['default']
    'SvgoIconsTrainTicket': typeof import("../assets/icons/Train--ticket")['default']
    'SvgoIconsTrainTime': typeof import("../assets/icons/Train--time")['default']
    'SvgoIconsTrain': typeof import("../assets/icons/Train")['default']
    'SvgoIconsTram': typeof import("../assets/icons/Tram")['default']
    'SvgoIconsTransformBinary': typeof import("../assets/icons/Transform--binary")['default']
    'SvgoIconsTransformCode': typeof import("../assets/icons/Transform--code")['default']
    'SvgoIconsTransformInstructions': typeof import("../assets/icons/Transform--instructions")['default']
    'SvgoIconsTransformLanguage': typeof import("../assets/icons/Transform--language")['default']
    'SvgoIconsTransgender': typeof import("../assets/icons/Transgender")['default']
    'SvgoIconsTranslate': typeof import("../assets/icons/Translate")['default']
    'SvgoIconsTransmissionLte': typeof import("../assets/icons/Transmission-lte")['default']
    'SvgoIconsTranspose': typeof import("../assets/icons/Transpose")['default']
    'SvgoIconsTrashCan': typeof import("../assets/icons/Trash-can")['default']
    'SvgoIconsTreeFallRisk': typeof import("../assets/icons/Tree--fall-risk")['default']
    'SvgoIconsTreeViewAlt': typeof import("../assets/icons/Tree-view--alt")['default']
    'SvgoIconsTreeView': typeof import("../assets/icons/Tree-view")['default']
    'SvgoIconsTree': typeof import("../assets/icons/Tree")['default']
    'SvgoIconsTriangleDownOutline': typeof import("../assets/icons/Triangle--down--outline")['default']
    'SvgoIconsTriangleDownSolid': typeof import("../assets/icons/Triangle--down--solid")['default']
    'SvgoIconsTriangleLeftOutline': typeof import("../assets/icons/Triangle--left--outline")['default']
    'SvgoIconsTriangleLeftSolid': typeof import("../assets/icons/Triangle--left--solid")['default']
    'SvgoIconsTriangleOutline': typeof import("../assets/icons/Triangle--outline")['default']
    'SvgoIconsTriangleRightOutline': typeof import("../assets/icons/Triangle--right--outline")['default']
    'SvgoIconsTriangleRightSolid': typeof import("../assets/icons/Triangle--right--solid")['default']
    'SvgoIconsTriangleSolid': typeof import("../assets/icons/Triangle--solid")['default']
    'SvgoIconsTrophyFilled': typeof import("../assets/icons/Trophy--filled")['default']
    'SvgoIconsTrophy': typeof import("../assets/icons/Trophy")['default']
    'SvgoIconsTropicalStormModelTracks': typeof import("../assets/icons/Tropical-storm--model-tracks")['default']
    'SvgoIconsTropicalStormTracks': typeof import("../assets/icons/Tropical-storm--tracks")['default']
    'SvgoIconsTropicalStorm': typeof import("../assets/icons/Tropical-storm")['default']
    'SvgoIconsTropicalWarning': typeof import("../assets/icons/Tropical-warning")['default']
    'SvgoIconsTsq': typeof import("../assets/icons/Tsq")['default']
    'SvgoIconsTsunami': typeof import("../assets/icons/Tsunami")['default']
    'SvgoIconsTsv': typeof import("../assets/icons/Tsv")['default']
    'SvgoIconsTuning': typeof import("../assets/icons/Tuning")['default']
    'SvgoIconsTwoFactorAuthentication': typeof import("../assets/icons/Two-factor-authentication")['default']
    'SvgoIconsTwoPersonLift': typeof import("../assets/icons/Two-person-lift")['default']
    'SvgoIconsTxtReference': typeof import("../assets/icons/Txt--reference")['default']
    'SvgoIconsTxt': typeof import("../assets/icons/Txt")['default']
    'SvgoIconsTypePattern': typeof import("../assets/icons/Type-pattern")['default']
    'SvgoIconsTypes': typeof import("../assets/icons/Types")['default']
    'SvgoIconsU1': typeof import("../assets/icons/U1")['default']
    'SvgoIconsU2': typeof import("../assets/icons/U2")['default']
    'SvgoIconsU3': typeof import("../assets/icons/U3")['default']
    'SvgoIconsURL': typeof import("../assets/icons/URL")['default']
    'SvgoIconsUmbrella': typeof import("../assets/icons/Umbrella")['default']
    'SvgoIconsUndefinedFilled': typeof import("../assets/icons/Undefined--filled")['default']
    'SvgoIconsUndefined': typeof import("../assets/icons/Undefined")['default']
    'SvgoIconsUndo': typeof import("../assets/icons/Undo")['default']
    'SvgoIconsUngroupObjects': typeof import("../assets/icons/Ungroup-objects")['default']
    'SvgoIconsUnknownFilled': typeof import("../assets/icons/Unknown--filled")['default']
    'SvgoIconsUnknown': typeof import("../assets/icons/Unknown")['default']
    'SvgoIconsUnlink': typeof import("../assets/icons/Unlink")['default']
    'SvgoIconsUnlocked': typeof import("../assets/icons/Unlocked")['default']
    'SvgoIconsUnsaved': typeof import("../assets/icons/Unsaved")['default']
    'SvgoIconsUpToTop': typeof import("../assets/icons/Up-to-top")['default']
    'SvgoIconsUpdateNow': typeof import("../assets/icons/Update-now")['default']
    'SvgoIconsUpgrade': typeof import("../assets/icons/Upgrade")['default']
    'SvgoIconsUpload': typeof import("../assets/icons/Upload")['default']
    'SvgoIconsUpstream': typeof import("../assets/icons/Upstream")['default']
    'SvgoIconsUsageIncludedUseCase': typeof import("../assets/icons/Usage--included-use-case")['default']
    'SvgoIconsUsb': typeof import("../assets/icons/Usb")['default']
    'SvgoIconsUseCaseDefinition': typeof import("../assets/icons/Use-case--definition")['default']
    'SvgoIconsUseCaseUsage': typeof import("../assets/icons/Use-case--usage")['default']
    'SvgoIconsUserAccessLocked': typeof import("../assets/icons/User--access-locked")['default']
    'SvgoIconsUserAccessUnlocked': typeof import("../assets/icons/User--access-unlocked")['default']
    'SvgoIconsUserAccess': typeof import("../assets/icons/User--access")['default']
    'SvgoIconsUserActivity': typeof import("../assets/icons/User--activity")['default']
    'SvgoIconsUserAdmin': typeof import("../assets/icons/User--admin")['default']
    'SvgoIconsUserAvatarFilledAlt': typeof import("../assets/icons/User--avatar--filled--alt")['default']
    'SvgoIconsUserAvatarFilled': typeof import("../assets/icons/User--avatar--filled")['default']
    'SvgoIconsUserAvatar': typeof import("../assets/icons/User--avatar")['default']
    'SvgoIconsUserCertification': typeof import("../assets/icons/User--certification")['default']
    'SvgoIconsUserData': typeof import("../assets/icons/User--data")['default']
    'SvgoIconsUserFavoriteAltFilled': typeof import("../assets/icons/User--favorite--alt--filled")['default']
    'SvgoIconsUserFavoriteAlt': typeof import("../assets/icons/User--favorite--alt")['default']
    'SvgoIconsUserFavorite': typeof import("../assets/icons/User--favorite")['default']
    'SvgoIconsUserFeedback': typeof import("../assets/icons/User--feedback")['default']
    'SvgoIconsUserFilled': typeof import("../assets/icons/User--filled")['default']
    'SvgoIconsUserFollow': typeof import("../assets/icons/User--follow")['default']
    'SvgoIconsUserIdentification': typeof import("../assets/icons/User--identification")['default']
    'SvgoIconsUserMilitary': typeof import("../assets/icons/User--military")['default']
    'SvgoIconsUserMultiple': typeof import("../assets/icons/User--multiple")['default']
    'SvgoIconsUserOnline': typeof import("../assets/icons/User--online")['default']
    'SvgoIconsUserProfile': typeof import("../assets/icons/User--profile")['default']
    'SvgoIconsUserRole': typeof import("../assets/icons/User--role")['default']
    'SvgoIconsUserServiceDesk': typeof import("../assets/icons/User--service-desk")['default']
    'SvgoIconsUserService': typeof import("../assets/icons/User--service")['default']
    'SvgoIconsUserSettings': typeof import("../assets/icons/User--settings")['default']
    'SvgoIconsUserSimulation': typeof import("../assets/icons/User--simulation")['default']
    'SvgoIconsUserSpeaker': typeof import("../assets/icons/User--speaker")['default']
    'SvgoIconsUserSponsor': typeof import("../assets/icons/User--sponsor")['default']
    'SvgoIconsUserXRay': typeof import("../assets/icons/User--x-ray")['default']
    'SvgoIconsUserProfileAlt': typeof import("../assets/icons/User-profile--alt")['default']
    'SvgoIconsUser': typeof import("../assets/icons/User")['default']
    'SvgoIconsUvIndexAlt': typeof import("../assets/icons/Uv-index--alt")['default']
    'SvgoIconsUvIndexFilled': typeof import("../assets/icons/Uv-index--filled")['default']
    'SvgoIconsUvIndex': typeof import("../assets/icons/Uv-index")['default']
    'SvgoIconsValueVariable': typeof import("../assets/icons/Value--variable")['default']
    'SvgoIconsVan': typeof import("../assets/icons/Van")['default']
    'SvgoIconsVegetationAsset': typeof import("../assets/icons/Vegetation--asset")['default']
    'SvgoIconsVegetationEncroachment': typeof import("../assets/icons/Vegetation--encroachment")['default']
    'SvgoIconsVegetationHeight': typeof import("../assets/icons/Vegetation--height")['default']
    'SvgoIconsVehicleApi': typeof import("../assets/icons/Vehicle--api")['default']
    'SvgoIconsVehicleConnected': typeof import("../assets/icons/Vehicle--connected")['default']
    'SvgoIconsVehicleInsights': typeof import("../assets/icons/Vehicle--insights")['default']
    'SvgoIconsVehicleServices': typeof import("../assets/icons/Vehicle--services")['default']
    'SvgoIconsVersionMajor': typeof import("../assets/icons/Version--major")['default']
    'SvgoIconsVersionMinor': typeof import("../assets/icons/Version--minor")['default']
    'SvgoIconsVersionPatch': typeof import("../assets/icons/Version--patch")['default']
    'SvgoIconsVersion': typeof import("../assets/icons/Version")['default']
    'SvgoIconsVerticalView': typeof import("../assets/icons/Vertical-view")['default']
    'SvgoIconsVideoAdd': typeof import("../assets/icons/Video--add")['default']
    'SvgoIconsVideoChat': typeof import("../assets/icons/Video--chat")['default']
    'SvgoIconsVideoFilled': typeof import("../assets/icons/Video--filled")['default']
    'SvgoIconsVideoOffFilled': typeof import("../assets/icons/Video--off--filled")['default']
    'SvgoIconsVideoOff': typeof import("../assets/icons/Video--off")['default']
    'SvgoIconsVideoPlayer': typeof import("../assets/icons/Video-player")['default']
    'SvgoIconsVideo': typeof import("../assets/icons/Video")['default']
    'SvgoIconsViewFilled': typeof import("../assets/icons/View--filled")['default']
    'SvgoIconsViewMode1': typeof import("../assets/icons/View--mode-1")['default']
    'SvgoIconsViewMode2': typeof import("../assets/icons/View--mode-2")['default']
    'SvgoIconsViewOffFilled': typeof import("../assets/icons/View--off--filled")['default']
    'SvgoIconsViewOff': typeof import("../assets/icons/View--off")['default']
    'SvgoIconsViewNext': typeof import("../assets/icons/View-next")['default']
    'SvgoIconsView': typeof import("../assets/icons/View")['default']
    'SvgoIconsVirtualColumnKey': typeof import("../assets/icons/Virtual-column--key")['default']
    'SvgoIconsVirtualColumn': typeof import("../assets/icons/Virtual-column")['default']
    'SvgoIconsVirtualDesktop': typeof import("../assets/icons/Virtual-desktop")['default']
    'SvgoIconsVirtualMachine': typeof import("../assets/icons/Virtual-machine")['default']
    'SvgoIconsVirtualPrivateCloud': typeof import("../assets/icons/Virtual-private-cloud")['default']
    'SvgoIconsVisualRecognition': typeof import("../assets/icons/Visual-recognition")['default']
    'SvgoIconsVlanIBM': typeof import("../assets/icons/Vlan--IBM")['default']
    'SvgoIconsVlan': typeof import("../assets/icons/Vlan")['default']
    'SvgoIconsVmdkDisk': typeof import("../assets/icons/Vmdk-disk")['default']
    'SvgoIconsVoiceActivate': typeof import("../assets/icons/Voice-activate")['default']
    'SvgoIconsVoicemail': typeof import("../assets/icons/Voicemail")['default']
    'SvgoIconsVolumeBlockStorage': typeof import("../assets/icons/Volume--block-storage")['default']
    'SvgoIconsVolumeDownAlt': typeof import("../assets/icons/Volume--down--alt")['default']
    'SvgoIconsVolumeDownFilledAlt': typeof import("../assets/icons/Volume--down--filled--alt")['default']
    'SvgoIconsVolumeDownFilled': typeof import("../assets/icons/Volume--down--filled")['default']
    'SvgoIconsVolumeDown': typeof import("../assets/icons/Volume--down")['default']
    'SvgoIconsVolumeFileStorage': typeof import("../assets/icons/Volume--file-storage")['default']
    'SvgoIconsVolumeMuteFilled': typeof import("../assets/icons/Volume--mute--filled")['default']
    'SvgoIconsVolumeMute': typeof import("../assets/icons/Volume--mute")['default']
    'SvgoIconsVolumeObjectStorage': typeof import("../assets/icons/Volume--object-storage")['default']
    'SvgoIconsVolumeUpAlt': typeof import("../assets/icons/Volume--up--alt")['default']
    'SvgoIconsVolumeUpFilledAlt': typeof import("../assets/icons/Volume--up--filled--alt")['default']
    'SvgoIconsVolumeUpFilled': typeof import("../assets/icons/Volume--up--filled")['default']
    'SvgoIconsVolumeUp': typeof import("../assets/icons/Volume--up")['default']
    'SvgoIconsVpnConnection': typeof import("../assets/icons/Vpn--connection")['default']
    'SvgoIconsVpnPolicy': typeof import("../assets/icons/Vpn--policy")['default']
    'SvgoIconsVpn': typeof import("../assets/icons/Vpn")['default']
    'SvgoIconsWallet': typeof import("../assets/icons/Wallet")['default']
    'SvgoIconsWarningAltFilled': typeof import("../assets/icons/Warning--alt--filled")['default']
    'SvgoIconsWarningAltInvertedFilled': typeof import("../assets/icons/Warning--alt-inverted--filled")['default']
    'SvgoIconsWarningAltInverted': typeof import("../assets/icons/Warning--alt-inverted")['default']
    'SvgoIconsWarningAlt': typeof import("../assets/icons/Warning--alt")['default']
    'SvgoIconsWarningDiamond': typeof import("../assets/icons/Warning--diamond")['default']
    'SvgoIconsWarningFilled': typeof import("../assets/icons/Warning--filled")['default']
    'SvgoIconsWarningHexFilled': typeof import("../assets/icons/Warning--hex--filled")['default']
    'SvgoIconsWarningHex': typeof import("../assets/icons/Warning--hex")['default']
    'SvgoIconsWarningMultiple': typeof import("../assets/icons/Warning--multiple")['default']
    'SvgoIconsWarningOther': typeof import("../assets/icons/Warning--other")['default']
    'SvgoIconsWarningSquareFilled': typeof import("../assets/icons/Warning-square--filled")['default']
    'SvgoIconsWarningSquare': typeof import("../assets/icons/Warning-square")['default']
    'SvgoIconsWarning': typeof import("../assets/icons/Warning")['default']
    'SvgoIconsWatch': typeof import("../assets/icons/Watch")['default']
    'SvgoIconsWatsonxAi': typeof import("../assets/icons/Watsonx-ai")['default']
    'SvgoIconsWatsonxData': typeof import("../assets/icons/Watsonx-data")['default']
    'SvgoIconsWatsonxGovernance': typeof import("../assets/icons/Watsonx-governance")['default']
    'SvgoIconsWatsonx': typeof import("../assets/icons/Watsonx")['default']
    'SvgoIconsWaveDirection': typeof import("../assets/icons/Wave-direction")['default']
    'SvgoIconsWaveHeight': typeof import("../assets/icons/Wave-height")['default']
    'SvgoIconsWavePeriod': typeof import("../assets/icons/Wave-period")['default']
    'SvgoIconsWeatherFrontCold': typeof import("../assets/icons/Weather-front--cold")['default']
    'SvgoIconsWeatherFrontStationary': typeof import("../assets/icons/Weather-front--stationary")['default']
    'SvgoIconsWeatherFrontWarm': typeof import("../assets/icons/Weather-front--warm")['default']
    'SvgoIconsWeatherStation': typeof import("../assets/icons/Weather-station")['default']
    'SvgoIconsWebServicesCluster': typeof import("../assets/icons/Web-services--cluster")['default']
    'SvgoIconsWebServicesContainer': typeof import("../assets/icons/Web-services--container")['default']
    'SvgoIconsWebServicesDefinition': typeof import("../assets/icons/Web-services--definition")['default']
    'SvgoIconsWebServicesService': typeof import("../assets/icons/Web-services--service")['default']
    'SvgoIconsWebServicesTaskDefinitionVersion': typeof import("../assets/icons/Web-services--task-definition-version")['default']
    'SvgoIconsWebServicesTask': typeof import("../assets/icons/Web-services--task")['default']
    'SvgoIconsWebhook': typeof import("../assets/icons/Webhook")['default']
    'SvgoIconsWebsheet': typeof import("../assets/icons/Websheet")['default']
    'SvgoIconsWheat': typeof import("../assets/icons/Wheat")['default']
    'SvgoIconsWhitePaper': typeof import("../assets/icons/White-paper")['default']
    'SvgoIconsWifiController': typeof import("../assets/icons/Wifi--controller")['default']
    'SvgoIconsWifiNotSecure': typeof import("../assets/icons/Wifi--not-secure")['default']
    'SvgoIconsWifiOff': typeof import("../assets/icons/Wifi--off")['default']
    'SvgoIconsWifiSecure': typeof import("../assets/icons/Wifi--secure")['default']
    'SvgoIconsWifiBridgeAlt': typeof import("../assets/icons/Wifi-bridge--alt")['default']
    'SvgoIconsWifiBridge': typeof import("../assets/icons/Wifi-bridge")['default']
    'SvgoIconsWifi': typeof import("../assets/icons/Wifi")['default']
    'SvgoIconsWikis': typeof import("../assets/icons/Wikis")['default']
    'SvgoIconsWindGusts': typeof import("../assets/icons/Wind-gusts")['default']
    'SvgoIconsWindPower': typeof import("../assets/icons/Wind-power")['default']
    'SvgoIconsWindStream': typeof import("../assets/icons/Wind-stream")['default']
    'SvgoIconsWindowAuto': typeof import("../assets/icons/Window--auto")['default']
    'SvgoIconsWindowBase': typeof import("../assets/icons/Window--base")['default']
    'SvgoIconsWindowBlackSaturation': typeof import("../assets/icons/Window--black-saturation")['default']
    'SvgoIconsWindowOverlay': typeof import("../assets/icons/Window--overlay")['default']
    'SvgoIconsWindowPreset': typeof import("../assets/icons/Window--preset")['default']
    'SvgoIconsWindyDust': typeof import("../assets/icons/Windy--dust")['default']
    'SvgoIconsWindySnow': typeof import("../assets/icons/Windy--snow")['default']
    'SvgoIconsWindyStrong': typeof import("../assets/icons/Windy--strong")['default']
    'SvgoIconsWindy': typeof import("../assets/icons/Windy")['default']
    'SvgoIconsWinterWarning': typeof import("../assets/icons/Winter-warning")['default']
    'SvgoIconsWintryMix': typeof import("../assets/icons/Wintry-mix")['default']
    'SvgoIconsWirelessCheckout': typeof import("../assets/icons/Wireless-checkout")['default']
    'SvgoIconsWmv': typeof import("../assets/icons/Wmv")['default']
    'SvgoIconsWordCloud': typeof import("../assets/icons/Word-cloud")['default']
    'SvgoIconsWorkflowAutomation': typeof import("../assets/icons/Workflow-automation")['default']
    'SvgoIconsWorkspaceImport': typeof import("../assets/icons/Workspace--import")['default']
    'SvgoIconsWorkspace': typeof import("../assets/icons/Workspace")['default']
    'SvgoIconsWorshipChristian': typeof import("../assets/icons/Worship--christian")['default']
    'SvgoIconsWorshipJewish': typeof import("../assets/icons/Worship--jewish")['default']
    'SvgoIconsWorshipMuslim': typeof import("../assets/icons/Worship--muslim")['default']
    'SvgoIconsWorship': typeof import("../assets/icons/Worship")['default']
    'SvgoIconsXAxis': typeof import("../assets/icons/X-axis")['default']
    'SvgoIconsX': typeof import("../assets/icons/X")['default']
    'SvgoIconsXls': typeof import("../assets/icons/Xls")['default']
    'SvgoIconsXml': typeof import("../assets/icons/Xml")['default']
    'SvgoIconsYAxis': typeof import("../assets/icons/Y-axis")['default']
    'SvgoIconsY': typeof import("../assets/icons/Y")['default']
    'SvgoIconsZLpar': typeof import("../assets/icons/Z--lpar")['default']
    'SvgoIconsZSystems': typeof import("../assets/icons/Z--systems")['default']
    'SvgoIconsZAxis': typeof import("../assets/icons/Z-axis")['default']
    'SvgoIconsZ': typeof import("../assets/icons/Z")['default']
    'SvgoIconsZipReference': typeof import("../assets/icons/Zip--reference")['default']
    'SvgoIconsZip': typeof import("../assets/icons/Zip")['default']
    'SvgoIconsZoomArea': typeof import("../assets/icons/Zoom--area")['default']
    'SvgoIconsZoomFit': typeof import("../assets/icons/Zoom--fit")['default']
    'SvgoIconsZoomInArea': typeof import("../assets/icons/Zoom--in-area")['default']
    'SvgoIconsZoomIn': typeof import("../assets/icons/Zoom--in")['default']
    'SvgoIconsZoomOutArea': typeof import("../assets/icons/Zoom--out-area")['default']
    'SvgoIconsZoomOut': typeof import("../assets/icons/Zoom--out")['default']
    'SvgoIconsZoomReset': typeof import("../assets/icons/Zoom--reset")['default']
    'SvgoIconsZoomPan': typeof import("../assets/icons/Zoom-pan")['default']
    'SvgoIconsZosSysplex': typeof import("../assets/icons/Zos--sysplex")['default']
    'SvgoIconsZos': typeof import("../assets/icons/Zos")['default']
    'SvgoIconsBrandAbbreviations': typeof import("../assets/icons/brand/Abbreviations")['default']
    'SvgoIconsBrandAbstract': typeof import("../assets/icons/brand/Abstract")['default']
    'SvgoIconsBrandBitmap': typeof import("../assets/icons/brand/Bitmap")['default']
    'SvgoIconsBrandLogotype': typeof import("../assets/icons/brand/Logotype")['default']
    'SvgoIconsBrandOfficial': typeof import("../assets/icons/brand/Official")['default']
    'SvgoIconsKeyboardOff': typeof import("../assets/icons/keyboard--off")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'TiptapEditorContent': typeof import("@tiptap/vue-3")['EditorContent']
    'TiptapFloatingMenu': typeof import("@tiptap/vue-3")['FloatingMenu']
    'TiptapBubbleMenu': typeof import("@tiptap/vue-3")['BubbleMenu']
    'NuxtPlotly': typeof import("../node_modules/nuxt-plotly/dist/runtime/components/nuxt-plotly")['default']
    'NuxtIcon': typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'NuxtPlotly': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCanvas': LazyComponent<typeof import("../components/Canvas/Canvas.vue")['default']>
    'LazyCanvasEditMode': LazyComponent<typeof import("../components/Canvas/EditMode.vue")['default']>
    'LazyCanvasPresentationMode': LazyComponent<typeof import("../components/Canvas/PresentationMode.vue")['default']>
    'LazyContentSection': LazyComponent<typeof import("../components/ContentSection.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyNavigation': LazyComponent<typeof import("../components/Navigation.vue")['default']>
    'LazyAboutSections': LazyComponent<typeof import("../components/about/AboutSections.vue")['default']>
    'LazyAboutFirstSection': LazyComponent<typeof import("../components/about/FirstSection.vue")['default']>
    'LazyAboutSecondSection': LazyComponent<typeof import("../components/about/SecondSection.vue")['default']>
    'LazyAboutThirdSection': LazyComponent<typeof import("../components/about/ThirdSection.vue")['default']>
    'LazyFooterLink': LazyComponent<typeof import("../components/footer/FooterLink.vue")['default']>
    'LazyFooterLinkSection': LazyComponent<typeof import("../components/footer/FooterLinkSection.vue")['default']>
    'LazyFooterLogoSection': LazyComponent<typeof import("../components/footer/FooterLogoSection.vue")['default']>
    'LazyIndexHero': LazyComponent<typeof import("../components/index/Hero.vue")['default']>
    'LazyIndexSectionTemplate': LazyComponent<typeof import("../components/index/SectionTemplate.vue")['default']>
    'LazyNavLogo': LazyComponent<typeof import("../components/nav/Logo.vue")['default']>
    'LazyNavBar': LazyComponent<typeof import("../components/nav/NavBar.vue")['default']>
    'LazyNavButton': LazyComponent<typeof import("../components/nav/NavButton.vue")['default']>
    'LazySvgoIcons3dCursorAlt': LazyComponent<typeof import("../assets/icons/3d-cursor--alt")['default']>
    'LazySvgoIcons3dCursor': LazyComponent<typeof import("../assets/icons/3d-cursor")['default']>
    'LazySvgoIcons3dCurveAutoColon': LazyComponent<typeof import("../assets/icons/3d-curve--auto-colon")['default']>
    'LazySvgoIcons3dCurveAutoVessels': LazyComponent<typeof import("../assets/icons/3d-curve--auto-vessels")['default']>
    'LazySvgoIcons3dCurveManual': LazyComponent<typeof import("../assets/icons/3d-curve--manual")['default']>
    'LazySvgoIcons3dIca': LazyComponent<typeof import("../assets/icons/3d-ica")['default']>
    'LazySvgoIcons3dMprToggle': LazyComponent<typeof import("../assets/icons/3d-mpr-toggle")['default']>
    'LazySvgoIcons3dPrintMesh': LazyComponent<typeof import("../assets/icons/3d-print-mesh")['default']>
    'LazySvgoIcons3dSoftware': LazyComponent<typeof import("../assets/icons/3d-software")['default']>
    'LazySvgoIcons3rdPartyConnected': LazyComponent<typeof import("../assets/icons/3rd-party-connected")['default']>
    'LazySvgoIcons4kFilled': LazyComponent<typeof import("../assets/icons/4k--filled")['default']>
    'LazySvgoIcons4k': LazyComponent<typeof import("../assets/icons/4k")['default']>
    'LazySvgoIconsAIGenerate': LazyComponent<typeof import("../assets/icons/AI-generate")['default']>
    'LazySvgoIconsAIGovernanceLifecycle': LazyComponent<typeof import("../assets/icons/AI-governance--lifecycle")['default']>
    'LazySvgoIconsAIGovernanceTracked': LazyComponent<typeof import("../assets/icons/AI-governance--tracked")['default']>
    'LazySvgoIconsAIGovernanceUntracked': LazyComponent<typeof import("../assets/icons/AI-governance--untracked")['default']>
    'LazySvgoIconsAILaunch': LazyComponent<typeof import("../assets/icons/AI-launch")['default']>
    'LazySvgoIconsAIRecommend': LazyComponent<typeof import("../assets/icons/AI-recommend")['default']>
    'LazySvgoIconsAI': LazyComponent<typeof import("../assets/icons/AI")['default']>
    'LazySvgoIconsAcceptActionUsage': LazyComponent<typeof import("../assets/icons/Accept-action--usage")['default']>
    'LazySvgoIconsAccessibilityAlt': LazyComponent<typeof import("../assets/icons/Accessibility--alt")['default']>
    'LazySvgoIconsAccessibilityColorFilled': LazyComponent<typeof import("../assets/icons/Accessibility--color--filled")['default']>
    'LazySvgoIconsAccessibilityColor': LazyComponent<typeof import("../assets/icons/Accessibility--color")['default']>
    'LazySvgoIconsAccessibility': LazyComponent<typeof import("../assets/icons/Accessibility")['default']>
    'LazySvgoIconsAccount': LazyComponent<typeof import("../assets/icons/Account")['default']>
    'LazySvgoIconsAccumulationIce': LazyComponent<typeof import("../assets/icons/Accumulation--ice")['default']>
    'LazySvgoIconsAccumulationPrecipitation': LazyComponent<typeof import("../assets/icons/Accumulation--precipitation")['default']>
    'LazySvgoIconsAccumulationRain': LazyComponent<typeof import("../assets/icons/Accumulation--rain")['default']>
    'LazySvgoIconsAccumulationSnow': LazyComponent<typeof import("../assets/icons/Accumulation--snow")['default']>
    'LazySvgoIconsActionDefinition': LazyComponent<typeof import("../assets/icons/Action--definition")['default']>
    'LazySvgoIconsActionUsage': LazyComponent<typeof import("../assets/icons/Action--usage")['default']>
    'LazySvgoIconsActivity': LazyComponent<typeof import("../assets/icons/Activity")['default']>
    'LazySvgoIconsAddAlt': LazyComponent<typeof import("../assets/icons/Add--alt")['default']>
    'LazySvgoIconsAddFilled': LazyComponent<typeof import("../assets/icons/Add--filled")['default']>
    'LazySvgoIconsAddLarge': LazyComponent<typeof import("../assets/icons/Add--large")['default']>
    'LazySvgoIconsAddComment': LazyComponent<typeof import("../assets/icons/Add-comment")['default']>
    'LazySvgoIconsAdd': LazyComponent<typeof import("../assets/icons/Add")['default']>
    'LazySvgoIconsAgricultureAnalytics': LazyComponent<typeof import("../assets/icons/Agriculture-analytics")['default']>
    'LazySvgoIconsAiFinancialSustainabilityCheck': LazyComponent<typeof import("../assets/icons/Ai-financial-sustainability-check")['default']>
    'LazySvgoIconsAiResultsHigh': LazyComponent<typeof import("../assets/icons/Ai-results--high")['default']>
    'LazySvgoIconsAiResultsLow': LazyComponent<typeof import("../assets/icons/Ai-results--low")['default']>
    'LazySvgoIconsAiResultsMedium': LazyComponent<typeof import("../assets/icons/Ai-results--medium")['default']>
    'LazySvgoIconsAiResultsUrgent': LazyComponent<typeof import("../assets/icons/Ai-results--urgent")['default']>
    'LazySvgoIconsAiResultsVeryHigh': LazyComponent<typeof import("../assets/icons/Ai-results--very-high")['default']>
    'LazySvgoIconsAiResults': LazyComponent<typeof import("../assets/icons/Ai-results")['default']>
    'LazySvgoIconsAiStatusComplete': LazyComponent<typeof import("../assets/icons/Ai-status--complete")['default']>
    'LazySvgoIconsAiStatusFailed': LazyComponent<typeof import("../assets/icons/Ai-status--failed")['default']>
    'LazySvgoIconsAiStatusInProgress': LazyComponent<typeof import("../assets/icons/Ai-status--in-progress")['default']>
    'LazySvgoIconsAiStatusQueued': LazyComponent<typeof import("../assets/icons/Ai-status--queued")['default']>
    'LazySvgoIconsAiStatusRejected': LazyComponent<typeof import("../assets/icons/Ai-status--rejected")['default']>
    'LazySvgoIconsAiStatus': LazyComponent<typeof import("../assets/icons/Ai-status")['default']>
    'LazySvgoIconsAirlineDigitalGate': LazyComponent<typeof import("../assets/icons/Airline--digital-gate")['default']>
    'LazySvgoIconsAirlineManageGates': LazyComponent<typeof import("../assets/icons/Airline--manage-gates")['default']>
    'LazySvgoIconsAirlinePassengerCare': LazyComponent<typeof import("../assets/icons/Airline--passenger-care")['default']>
    'LazySvgoIconsAirlineRapidBoard': LazyComponent<typeof import("../assets/icons/Airline--rapid-board")['default']>
    'LazySvgoIconsAirplayFilled': LazyComponent<typeof import("../assets/icons/Airplay--filled")['default']>
    'LazySvgoIconsAirplay': LazyComponent<typeof import("../assets/icons/Airplay")['default']>
    'LazySvgoIconsAirport01': LazyComponent<typeof import("../assets/icons/Airport--01")['default']>
    'LazySvgoIconsAirport02': LazyComponent<typeof import("../assets/icons/Airport--02")['default']>
    'LazySvgoIconsAirportLocation': LazyComponent<typeof import("../assets/icons/Airport-location")['default']>
    'LazySvgoIconsAlarmAdd': LazyComponent<typeof import("../assets/icons/Alarm--add")['default']>
    'LazySvgoIconsAlarmSubtract': LazyComponent<typeof import("../assets/icons/Alarm--subtract")['default']>
    'LazySvgoIconsAlarm': LazyComponent<typeof import("../assets/icons/Alarm")['default']>
    'LazySvgoIconsAlignHorizontalCenter': LazyComponent<typeof import("../assets/icons/Align--horizontal-center")['default']>
    'LazySvgoIconsAlignHorizontalLeft': LazyComponent<typeof import("../assets/icons/Align--horizontal-left")['default']>
    'LazySvgoIconsAlignHorizontalRight': LazyComponent<typeof import("../assets/icons/Align--horizontal-right")['default']>
    'LazySvgoIconsAlignVerticalBottom': LazyComponent<typeof import("../assets/icons/Align--vertical-bottom")['default']>
    'LazySvgoIconsAlignVerticalCenter': LazyComponent<typeof import("../assets/icons/Align--vertical-center")['default']>
    'LazySvgoIconsAlignVerticalTop': LazyComponent<typeof import("../assets/icons/Align--vertical-top")['default']>
    'LazySvgoIconsAlignBoxBottomCenter': LazyComponent<typeof import("../assets/icons/Align-box--bottom-center")['default']>
    'LazySvgoIconsAlignBoxBottomLeft': LazyComponent<typeof import("../assets/icons/Align-box--bottom-left")['default']>
    'LazySvgoIconsAlignBoxBottomRight': LazyComponent<typeof import("../assets/icons/Align-box--bottom-right")['default']>
    'LazySvgoIconsAlignBoxMiddleCenter': LazyComponent<typeof import("../assets/icons/Align-box--middle-center")['default']>
    'LazySvgoIconsAlignBoxMiddleLeft': LazyComponent<typeof import("../assets/icons/Align-box--middle-left")['default']>
    'LazySvgoIconsAlignBoxMiddleRight': LazyComponent<typeof import("../assets/icons/Align-box--middle-right")['default']>
    'LazySvgoIconsAlignBoxTopCenter': LazyComponent<typeof import("../assets/icons/Align-box--top-center")['default']>
    'LazySvgoIconsAlignBoxTopLeft': LazyComponent<typeof import("../assets/icons/Align-box--top-left")['default']>
    'LazySvgoIconsAlignBoxTopRight': LazyComponent<typeof import("../assets/icons/Align-box--top-right")['default']>
    'LazySvgoIconsAnalyticsCustom': LazyComponent<typeof import("../assets/icons/Analytics--custom")['default']>
    'LazySvgoIconsAnalyticsReference': LazyComponent<typeof import("../assets/icons/Analytics--reference")['default']>
    'LazySvgoIconsAnalytics': LazyComponent<typeof import("../assets/icons/Analytics")['default']>
    'LazySvgoIconsAnchor': LazyComponent<typeof import("../assets/icons/Anchor")['default']>
    'LazySvgoIconsAngle': LazyComponent<typeof import("../assets/icons/Angle")['default']>
    'LazySvgoIconsAnnotationVisibility': LazyComponent<typeof import("../assets/icons/Annotation-visibility")['default']>
    'LazySvgoIconsAperture': LazyComponent<typeof import("../assets/icons/Aperture")['default']>
    'LazySvgoIconsApi1': LazyComponent<typeof import("../assets/icons/Api--1")['default']>
    'LazySvgoIconsApiKey': LazyComponent<typeof import("../assets/icons/Api--key")['default']>
    'LazySvgoIconsApi': LazyComponent<typeof import("../assets/icons/Api")['default']>
    'LazySvgoIconsAppConnectivity': LazyComponent<typeof import("../assets/icons/App-connectivity")['default']>
    'LazySvgoIconsApp': LazyComponent<typeof import("../assets/icons/App")['default']>
    'LazySvgoIconsAppleDash': LazyComponent<typeof import("../assets/icons/Apple--dash")['default']>
    'LazySvgoIconsApple': LazyComponent<typeof import("../assets/icons/Apple")['default']>
    'LazySvgoIconsApplicationMobile': LazyComponent<typeof import("../assets/icons/Application--mobile")['default']>
    'LazySvgoIconsApplicationVirtual': LazyComponent<typeof import("../assets/icons/Application--virtual")['default']>
    'LazySvgoIconsApplicationWeb': LazyComponent<typeof import("../assets/icons/Application--web")['default']>
    'LazySvgoIconsApplication': LazyComponent<typeof import("../assets/icons/Application")['default']>
    'LazySvgoIconsApps': LazyComponent<typeof import("../assets/icons/Apps")['default']>
    'LazySvgoIconsArchive': LazyComponent<typeof import("../assets/icons/Archive")['default']>
    'LazySvgoIconsAreaCustom': LazyComponent<typeof import("../assets/icons/Area--custom")['default']>
    'LazySvgoIconsArea': LazyComponent<typeof import("../assets/icons/Area")['default']>
    'LazySvgoIconsArithmeticMean': LazyComponent<typeof import("../assets/icons/Arithmetic-mean")['default']>
    'LazySvgoIconsArithmeticMedian': LazyComponent<typeof import("../assets/icons/Arithmetic-median")['default']>
    'LazySvgoIconsArrangeHorizontal': LazyComponent<typeof import("../assets/icons/Arrange--horizontal")['default']>
    'LazySvgoIconsArrangeVertical': LazyComponent<typeof import("../assets/icons/Arrange--vertical")['default']>
    'LazySvgoIconsArrival': LazyComponent<typeof import("../assets/icons/Arrival")['default']>
    'LazySvgoIconsArrowAnnotation': LazyComponent<typeof import("../assets/icons/Arrow--annotation")['default']>
    'LazySvgoIconsArrowDownLeft': LazyComponent<typeof import("../assets/icons/Arrow--down-left")['default']>
    'LazySvgoIconsArrowDownRight': LazyComponent<typeof import("../assets/icons/Arrow--down-right")['default']>
    'LazySvgoIconsArrowDown': LazyComponent<typeof import("../assets/icons/Arrow--down")['default']>
    'LazySvgoIconsArrowLeft': LazyComponent<typeof import("../assets/icons/Arrow--left")['default']>
    'LazySvgoIconsArrowRight': LazyComponent<typeof import("../assets/icons/Arrow--right")['default']>
    'LazySvgoIconsArrowUpLeft': LazyComponent<typeof import("../assets/icons/Arrow--up-left")['default']>
    'LazySvgoIconsArrowUpRight': LazyComponent<typeof import("../assets/icons/Arrow--up-right")['default']>
    'LazySvgoIconsArrowUp': LazyComponent<typeof import("../assets/icons/Arrow--up")['default']>
    'LazySvgoIconsArrowShiftDown': LazyComponent<typeof import("../assets/icons/Arrow-shift-down")['default']>
    'LazySvgoIconsArrowsHorizontal': LazyComponent<typeof import("../assets/icons/Arrows--horizontal")['default']>
    'LazySvgoIconsArrowsVertical': LazyComponent<typeof import("../assets/icons/Arrows--vertical")['default']>
    'LazySvgoIconsAsleepFilled': LazyComponent<typeof import("../assets/icons/Asleep--filled")['default']>
    'LazySvgoIconsAsleep': LazyComponent<typeof import("../assets/icons/Asleep")['default']>
    'LazySvgoIconsAssemblyCluster': LazyComponent<typeof import("../assets/icons/Assembly--cluster")['default']>
    'LazySvgoIconsAssemblyReference': LazyComponent<typeof import("../assets/icons/Assembly--reference")['default']>
    'LazySvgoIconsAssembly': LazyComponent<typeof import("../assets/icons/Assembly")['default']>
    'LazySvgoIconsAssetConfirm': LazyComponent<typeof import("../assets/icons/Asset--confirm")['default']>
    'LazySvgoIconsAssetDigitalTwin': LazyComponent<typeof import("../assets/icons/Asset--digital-twin")['default']>
    'LazySvgoIconsAssetView': LazyComponent<typeof import("../assets/icons/Asset--view")['default']>
    'LazySvgoIconsAsset': LazyComponent<typeof import("../assets/icons/Asset")['default']>
    'LazySvgoIconsAsterisk': LazyComponent<typeof import("../assets/icons/Asterisk")['default']>
    'LazySvgoIconsAsync': LazyComponent<typeof import("../assets/icons/Async")['default']>
    'LazySvgoIconsAt': LazyComponent<typeof import("../assets/icons/At")['default']>
    'LazySvgoIconsAttachment': LazyComponent<typeof import("../assets/icons/Attachment")['default']>
    'LazySvgoIconsAudioConsole': LazyComponent<typeof import("../assets/icons/Audio-console")['default']>
    'LazySvgoIconsAugmentedReality': LazyComponent<typeof import("../assets/icons/Augmented-reality")['default']>
    'LazySvgoIconsAutoScroll': LazyComponent<typeof import("../assets/icons/Auto-scroll")['default']>
    'LazySvgoIconsAutomatic': LazyComponent<typeof import("../assets/icons/Automatic")['default']>
    'LazySvgoIconsAutoscaling': LazyComponent<typeof import("../assets/icons/Autoscaling")['default']>
    'LazySvgoIconsAwake': LazyComponent<typeof import("../assets/icons/Awake")['default']>
    'LazySvgoIconsBadge': LazyComponent<typeof import("../assets/icons/Badge")['default']>
    'LazySvgoIconsBaggageClaim': LazyComponent<typeof import("../assets/icons/Baggage-claim")['default']>
    'LazySvgoIconsBar': LazyComponent<typeof import("../assets/icons/Bar")['default']>
    'LazySvgoIconsBarcode': LazyComponent<typeof import("../assets/icons/Barcode")['default']>
    'LazySvgoIconsBareMetalServer01': LazyComponent<typeof import("../assets/icons/Bare-metal-server--01")['default']>
    'LazySvgoIconsBareMetalServer02': LazyComponent<typeof import("../assets/icons/Bare-metal-server--02")['default']>
    'LazySvgoIconsBareMetalServer': LazyComponent<typeof import("../assets/icons/Bare-metal-server")['default']>
    'LazySvgoIconsBarrier': LazyComponent<typeof import("../assets/icons/Barrier")['default']>
    'LazySvgoIconsBasketball': LazyComponent<typeof import("../assets/icons/Basketball")['default']>
    'LazySvgoIconsBastionHost': LazyComponent<typeof import("../assets/icons/Bastion-host")['default']>
    'LazySvgoIconsBat': LazyComponent<typeof import("../assets/icons/Bat")['default']>
    'LazySvgoIconsBatchJobStep': LazyComponent<typeof import("../assets/icons/Batch-job--step")['default']>
    'LazySvgoIconsBatchJob': LazyComponent<typeof import("../assets/icons/Batch-job")['default']>
    'LazySvgoIconsBatteryCharging': LazyComponent<typeof import("../assets/icons/Battery--charging")['default']>
    'LazySvgoIconsBatteryEmpty': LazyComponent<typeof import("../assets/icons/Battery--empty")['default']>
    'LazySvgoIconsBatteryFull': LazyComponent<typeof import("../assets/icons/Battery--full")['default']>
    'LazySvgoIconsBatteryHalf': LazyComponent<typeof import("../assets/icons/Battery--half")['default']>
    'LazySvgoIconsBatteryLow': LazyComponent<typeof import("../assets/icons/Battery--low")['default']>
    'LazySvgoIconsBatteryQuarter': LazyComponent<typeof import("../assets/icons/Battery--quarter")['default']>
    'LazySvgoIconsBeeBat': LazyComponent<typeof import("../assets/icons/Bee-bat")['default']>
    'LazySvgoIconsBee': LazyComponent<typeof import("../assets/icons/Bee")['default']>
    'LazySvgoIconsBeta': LazyComponent<typeof import("../assets/icons/Beta")['default']>
    'LazySvgoIconsBicycle': LazyComponent<typeof import("../assets/icons/Bicycle")['default']>
    'LazySvgoIconsBinding01': LazyComponent<typeof import("../assets/icons/Binding--01")['default']>
    'LazySvgoIconsBinding02': LazyComponent<typeof import("../assets/icons/Binding--02")['default']>
    'LazySvgoIconsBinoculars': LazyComponent<typeof import("../assets/icons/Binoculars")['default']>
    'LazySvgoIconsBlochSphere': LazyComponent<typeof import("../assets/icons/Bloch-sphere")['default']>
    'LazySvgoIconsBlockStorageAlt': LazyComponent<typeof import("../assets/icons/Block-storage--alt")['default']>
    'LazySvgoIconsBlockStorage': LazyComponent<typeof import("../assets/icons/Block-storage")['default']>
    'LazySvgoIconsBlockchain': LazyComponent<typeof import("../assets/icons/Blockchain")['default']>
    'LazySvgoIconsBlog': LazyComponent<typeof import("../assets/icons/Blog")['default']>
    'LazySvgoIconsBluetoothOff': LazyComponent<typeof import("../assets/icons/Bluetooth--off")['default']>
    'LazySvgoIconsBluetooth': LazyComponent<typeof import("../assets/icons/Bluetooth")['default']>
    'LazySvgoIconsBook': LazyComponent<typeof import("../assets/icons/Book")['default']>
    'LazySvgoIconsBookmarkAdd': LazyComponent<typeof import("../assets/icons/Bookmark--add")['default']>
    'LazySvgoIconsBookmarkFilled': LazyComponent<typeof import("../assets/icons/Bookmark--filled")['default']>
    'LazySvgoIconsBookmark': LazyComponent<typeof import("../assets/icons/Bookmark")['default']>
    'LazySvgoIconsBoolean': LazyComponent<typeof import("../assets/icons/Boolean")['default']>
    'LazySvgoIconsBootVolumeAlt': LazyComponent<typeof import("../assets/icons/Boot-volume--alt")['default']>
    'LazySvgoIconsBootVolume': LazyComponent<typeof import("../assets/icons/Boot-volume")['default']>
    'LazySvgoIconsBoot': LazyComponent<typeof import("../assets/icons/Boot")['default']>
    'LazySvgoIconsBorderBottom': LazyComponent<typeof import("../assets/icons/Border--bottom")['default']>
    'LazySvgoIconsBorderFull': LazyComponent<typeof import("../assets/icons/Border--full")['default']>
    'LazySvgoIconsBorderLeft': LazyComponent<typeof import("../assets/icons/Border--left")['default']>
    'LazySvgoIconsBorderNone': LazyComponent<typeof import("../assets/icons/Border--none")['default']>
    'LazySvgoIconsBorderRight': LazyComponent<typeof import("../assets/icons/Border--right")['default']>
    'LazySvgoIconsBorderTop': LazyComponent<typeof import("../assets/icons/Border--top")['default']>
    'LazySvgoIconsBot': LazyComponent<typeof import("../assets/icons/Bot")['default']>
    'LazySvgoIconsBottles01Dash': LazyComponent<typeof import("../assets/icons/Bottles--01--dash")['default']>
    'LazySvgoIconsBottles01': LazyComponent<typeof import("../assets/icons/Bottles--01")['default']>
    'LazySvgoIconsBottles02Dash': LazyComponent<typeof import("../assets/icons/Bottles--02--dash")['default']>
    'LazySvgoIconsBottles02': LazyComponent<typeof import("../assets/icons/Bottles--02")['default']>
    'LazySvgoIconsBottlesContainer': LazyComponent<typeof import("../assets/icons/Bottles--container")['default']>
    'LazySvgoIconsBottomPanelCloseFilled': LazyComponent<typeof import("../assets/icons/Bottom-panel--close--filled")['default']>
    'LazySvgoIconsBottomPanelClose': LazyComponent<typeof import("../assets/icons/Bottom-panel--close")['default']>
    'LazySvgoIconsBottomPanelOpenFilled': LazyComponent<typeof import("../assets/icons/Bottom-panel--open--filled")['default']>
    'LazySvgoIconsBottomPanelOpen': LazyComponent<typeof import("../assets/icons/Bottom-panel--open")['default']>
    'LazySvgoIconsBoxExtraLarge': LazyComponent<typeof import("../assets/icons/Box--extra-large")['default']>
    'LazySvgoIconsBoxLarge': LazyComponent<typeof import("../assets/icons/Box--large")['default']>
    'LazySvgoIconsBoxMedium': LazyComponent<typeof import("../assets/icons/Box--medium")['default']>
    'LazySvgoIconsBoxSmall': LazyComponent<typeof import("../assets/icons/Box--small")['default']>
    'LazySvgoIconsBoxPlot': LazyComponent<typeof import("../assets/icons/Box-plot")['default']>
    'LazySvgoIconsBox': LazyComponent<typeof import("../assets/icons/Box")['default']>
    'LazySvgoIconsBranch': LazyComponent<typeof import("../assets/icons/Branch")['default']>
    'LazySvgoIconsBreakingChange': LazyComponent<typeof import("../assets/icons/Breaking-change")['default']>
    'LazySvgoIconsBrightnessContrast': LazyComponent<typeof import("../assets/icons/Brightness-contrast")['default']>
    'LazySvgoIconsBringForward': LazyComponent<typeof import("../assets/icons/Bring-forward")['default']>
    'LazySvgoIconsBringToFront': LazyComponent<typeof import("../assets/icons/Bring-to-front")['default']>
    'LazySvgoIconsBrushFreehand': LazyComponent<typeof import("../assets/icons/Brush-freehand")['default']>
    'LazySvgoIconsBrushPolygon': LazyComponent<typeof import("../assets/icons/Brush-polygon")['default']>
    'LazySvgoIconsBuildTool': LazyComponent<typeof import("../assets/icons/Build-tool")['default']>
    'LazySvgoIconsBuildingInsights1': LazyComponent<typeof import("../assets/icons/Building--insights-1")['default']>
    'LazySvgoIconsBuildingInsights2': LazyComponent<typeof import("../assets/icons/Building--insights-2")['default']>
    'LazySvgoIconsBuildingInsights3': LazyComponent<typeof import("../assets/icons/Building--insights-3")['default']>
    'LazySvgoIconsBuilding': LazyComponent<typeof import("../assets/icons/Building")['default']>
    'LazySvgoIconsBullhorn': LazyComponent<typeof import("../assets/icons/Bullhorn")['default']>
    'LazySvgoIconsBuoy': LazyComponent<typeof import("../assets/icons/Buoy")['default']>
    'LazySvgoIconsBus': LazyComponent<typeof import("../assets/icons/Bus")['default']>
    'LazySvgoIconsBusinessProcesses': LazyComponent<typeof import("../assets/icons/Business-processes")['default']>
    'LazySvgoIconsButtonCentered': LazyComponent<typeof import("../assets/icons/Button--centered")['default']>
    'LazySvgoIconsButtonFlushLeft': LazyComponent<typeof import("../assets/icons/Button--flush-left")['default']>
    'LazySvgoIconsCabinCareAlert': LazyComponent<typeof import("../assets/icons/Cabin-care--alert")['default']>
    'LazySvgoIconsCabinCareAlt': LazyComponent<typeof import("../assets/icons/Cabin-care--alt")['default']>
    'LazySvgoIconsCabinCare': LazyComponent<typeof import("../assets/icons/Cabin-care")['default']>
    'LazySvgoIconsCad': LazyComponent<typeof import("../assets/icons/Cad")['default']>
    'LazySvgoIconsCafe': LazyComponent<typeof import("../assets/icons/Cafe")['default']>
    'LazySvgoIconsCalculationAlt': LazyComponent<typeof import("../assets/icons/Calculation--alt")['default']>
    'LazySvgoIconsCalculation': LazyComponent<typeof import("../assets/icons/Calculation")['default']>
    'LazySvgoIconsCalculatorCheck': LazyComponent<typeof import("../assets/icons/Calculator--check")['default']>
    'LazySvgoIconsCalculator': LazyComponent<typeof import("../assets/icons/Calculator")['default']>
    'LazySvgoIconsCalendarAddAlt': LazyComponent<typeof import("../assets/icons/Calendar--add--alt")['default']>
    'LazySvgoIconsCalendarAdd': LazyComponent<typeof import("../assets/icons/Calendar--add")['default']>
    'LazySvgoIconsCalendarHeatMap': LazyComponent<typeof import("../assets/icons/Calendar--heat-map")['default']>
    'LazySvgoIconsCalendarSettings': LazyComponent<typeof import("../assets/icons/Calendar--settings")['default']>
    'LazySvgoIconsCalendarTools': LazyComponent<typeof import("../assets/icons/Calendar--tools")['default']>
    'LazySvgoIconsCalendar': LazyComponent<typeof import("../assets/icons/Calendar")['default']>
    'LazySvgoIconsCalibrate': LazyComponent<typeof import("../assets/icons/Calibrate")['default']>
    'LazySvgoIconsCallsAll': LazyComponent<typeof import("../assets/icons/Calls--all")['default']>
    'LazySvgoIconsCallsIncoming': LazyComponent<typeof import("../assets/icons/Calls--incoming")['default']>
    'LazySvgoIconsCalls': LazyComponent<typeof import("../assets/icons/Calls")['default']>
    'LazySvgoIconsCameraAction': LazyComponent<typeof import("../assets/icons/Camera--action")['default']>
    'LazySvgoIconsCamera': LazyComponent<typeof import("../assets/icons/Camera")['default']>
    'LazySvgoIconsCampsite': LazyComponent<typeof import("../assets/icons/Campsite")['default']>
    'LazySvgoIconsCarFront': LazyComponent<typeof import("../assets/icons/Car--front")['default']>
    'LazySvgoIconsCar': LazyComponent<typeof import("../assets/icons/Car")['default']>
    'LazySvgoIconsCarbonUiBuilder': LazyComponent<typeof import("../assets/icons/Carbon--ui-builder")['default']>
    'LazySvgoIconsCarbonAccounting': LazyComponent<typeof import("../assets/icons/Carbon-accounting")['default']>
    'LazySvgoIconsCarbonForAEM': LazyComponent<typeof import("../assets/icons/Carbon-for-AEM")['default']>
    'LazySvgoIconsCarbonForIbmDotcom': LazyComponent<typeof import("../assets/icons/Carbon-for-ibm-dotcom")['default']>
    'LazySvgoIconsCarbonForIbmProduct': LazyComponent<typeof import("../assets/icons/Carbon-for-ibm-product")['default']>
    'LazySvgoIconsCarbonForMobile': LazyComponent<typeof import("../assets/icons/Carbon-for-mobile")['default']>
    'LazySvgoIconsCarbonForSalesforce': LazyComponent<typeof import("../assets/icons/Carbon-for-salesforce")['default']>
    'LazySvgoIconsCarbon': LazyComponent<typeof import("../assets/icons/Carbon")['default']>
    'LazySvgoIconsCaretDown': LazyComponent<typeof import("../assets/icons/Caret--down")['default']>
    'LazySvgoIconsCaretLeft': LazyComponent<typeof import("../assets/icons/Caret--left")['default']>
    'LazySvgoIconsCaretRight': LazyComponent<typeof import("../assets/icons/Caret--right")['default']>
    'LazySvgoIconsCaretSortDown': LazyComponent<typeof import("../assets/icons/Caret--sort--down")['default']>
    'LazySvgoIconsCaretSortUp': LazyComponent<typeof import("../assets/icons/Caret--sort--up")['default']>
    'LazySvgoIconsCaretSort': LazyComponent<typeof import("../assets/icons/Caret--sort")['default']>
    'LazySvgoIconsCaretUp': LazyComponent<typeof import("../assets/icons/Caret--up")['default']>
    'LazySvgoIconsCarouselHorizontal': LazyComponent<typeof import("../assets/icons/Carousel--horizontal")['default']>
    'LazySvgoIconsCarouselVertical': LazyComponent<typeof import("../assets/icons/Carousel--vertical")['default']>
    'LazySvgoIconsCatalogPublish': LazyComponent<typeof import("../assets/icons/Catalog--publish")['default']>
    'LazySvgoIconsCatalog': LazyComponent<typeof import("../assets/icons/Catalog")['default']>
    'LazySvgoIconsCategories': LazyComponent<typeof import("../assets/icons/Categories")['default']>
    'LazySvgoIconsCategoryAdd': LazyComponent<typeof import("../assets/icons/Category--add")['default']>
    'LazySvgoIconsCategoryAnd': LazyComponent<typeof import("../assets/icons/Category--and")['default']>
    'LazySvgoIconsCategoryNewEach': LazyComponent<typeof import("../assets/icons/Category--new-each")['default']>
    'LazySvgoIconsCategoryNew': LazyComponent<typeof import("../assets/icons/Category--new")['default']>
    'LazySvgoIconsCategory': LazyComponent<typeof import("../assets/icons/Category")['default']>
    'LazySvgoIconsCautionInverted': LazyComponent<typeof import("../assets/icons/Caution-inverted")['default']>
    'LazySvgoIconsCaution': LazyComponent<typeof import("../assets/icons/Caution")['default']>
    'LazySvgoIconsCcx': LazyComponent<typeof import("../assets/icons/Ccx")['default']>
    'LazySvgoIconsCdArchive': LazyComponent<typeof import("../assets/icons/Cd--archive")['default']>
    'LazySvgoIconsCdCreateArchive': LazyComponent<typeof import("../assets/icons/Cd--create-archive")['default']>
    'LazySvgoIconsCdCreateExchange': LazyComponent<typeof import("../assets/icons/Cd--create-exchange")['default']>
    'LazySvgoIconsCda': LazyComponent<typeof import("../assets/icons/Cda")['default']>
    'LazySvgoIconsCellTower': LazyComponent<typeof import("../assets/icons/Cell-tower")['default']>
    'LazySvgoIconsCenterCircle': LazyComponent<typeof import("../assets/icons/Center--circle")['default']>
    'LazySvgoIconsCenterSquare': LazyComponent<typeof import("../assets/icons/Center--square")['default']>
    'LazySvgoIconsCenterToFit': LazyComponent<typeof import("../assets/icons/Center-to-fit")['default']>
    'LazySvgoIconsCertificateCheck': LazyComponent<typeof import("../assets/icons/Certificate--check")['default']>
    'LazySvgoIconsCertificate': LazyComponent<typeof import("../assets/icons/Certificate")['default']>
    'LazySvgoIconsChangeCatalog': LazyComponent<typeof import("../assets/icons/Change-catalog")['default']>
    'LazySvgoIconsCharacterDecimal': LazyComponent<typeof import("../assets/icons/Character--decimal")['default']>
    'LazySvgoIconsCharacterFraction': LazyComponent<typeof import("../assets/icons/Character--fraction")['default']>
    'LazySvgoIconsCharacterInteger': LazyComponent<typeof import("../assets/icons/Character--integer")['default']>
    'LazySvgoIconsCharacterLowerCase': LazyComponent<typeof import("../assets/icons/Character--lower-case")['default']>
    'LazySvgoIconsCharacterNegativeNumber': LazyComponent<typeof import("../assets/icons/Character--negative-number")['default']>
    'LazySvgoIconsCharacterSentenceCase': LazyComponent<typeof import("../assets/icons/Character--sentence-case")['default']>
    'LazySvgoIconsCharacterUpperCase': LazyComponent<typeof import("../assets/icons/Character--upper-case")['default']>
    'LazySvgoIconsCharacterWholeNumber': LazyComponent<typeof import("../assets/icons/Character--whole-number")['default']>
    'LazySvgoIconsCharacterPatterns': LazyComponent<typeof import("../assets/icons/Character-patterns")['default']>
    'LazySvgoIconsChargingStationFilled': LazyComponent<typeof import("../assets/icons/Charging-station--filled")['default']>
    'LazySvgoIconsChargingStation': LazyComponent<typeof import("../assets/icons/Charging-station")['default']>
    'LazySvgoIconsChart3d': LazyComponent<typeof import("../assets/icons/Chart--3d")['default']>
    'LazySvgoIconsChartAreaSmooth': LazyComponent<typeof import("../assets/icons/Chart--area-smooth")['default']>
    'LazySvgoIconsChartAreaStepper': LazyComponent<typeof import("../assets/icons/Chart--area-stepper")['default']>
    'LazySvgoIconsChartArea': LazyComponent<typeof import("../assets/icons/Chart--area")['default']>
    'LazySvgoIconsChartAverage': LazyComponent<typeof import("../assets/icons/Chart--average")['default']>
    'LazySvgoIconsChartBarFloating': LazyComponent<typeof import("../assets/icons/Chart--bar-floating")['default']>
    'LazySvgoIconsChartBarOverlay': LazyComponent<typeof import("../assets/icons/Chart--bar-overlay")['default']>
    'LazySvgoIconsChartBarStacked': LazyComponent<typeof import("../assets/icons/Chart--bar-stacked")['default']>
    'LazySvgoIconsChartBarTarget': LazyComponent<typeof import("../assets/icons/Chart--bar-target")['default']>
    'LazySvgoIconsChartBar': LazyComponent<typeof import("../assets/icons/Chart--bar")['default']>
    'LazySvgoIconsChartBubblePacked': LazyComponent<typeof import("../assets/icons/Chart--bubble-packed")['default']>
    'LazySvgoIconsChartBubble': LazyComponent<typeof import("../assets/icons/Chart--bubble")['default']>
    'LazySvgoIconsChartBullet': LazyComponent<typeof import("../assets/icons/Chart--bullet")['default']>
    'LazySvgoIconsChartCandlestick': LazyComponent<typeof import("../assets/icons/Chart--candlestick")['default']>
    'LazySvgoIconsChartClusterBar': LazyComponent<typeof import("../assets/icons/Chart--cluster-bar")['default']>
    'LazySvgoIconsChartColumnFloating': LazyComponent<typeof import("../assets/icons/Chart--column-floating")['default']>
    'LazySvgoIconsChartColumnTarget': LazyComponent<typeof import("../assets/icons/Chart--column-target")['default']>
    'LazySvgoIconsChartColumn': LazyComponent<typeof import("../assets/icons/Chart--column")['default']>
    'LazySvgoIconsChartComboStacked': LazyComponent<typeof import("../assets/icons/Chart--combo-stacked")['default']>
    'LazySvgoIconsChartCombo': LazyComponent<typeof import("../assets/icons/Chart--combo")['default']>
    'LazySvgoIconsChartCustom': LazyComponent<typeof import("../assets/icons/Chart--custom")['default']>
    'LazySvgoIconsChartDualYAxis': LazyComponent<typeof import("../assets/icons/Chart--dual-y-axis")['default']>
    'LazySvgoIconsChartErrorBarAlt': LazyComponent<typeof import("../assets/icons/Chart--error-bar--alt")['default']>
    'LazySvgoIconsChartErrorBar': LazyComponent<typeof import("../assets/icons/Chart--error-bar")['default']>
    'LazySvgoIconsChartEvaluation': LazyComponent<typeof import("../assets/icons/Chart--evaluation")['default']>
    'LazySvgoIconsChartHighLow': LazyComponent<typeof import("../assets/icons/Chart--high-low")['default']>
    'LazySvgoIconsChartHistogram': LazyComponent<typeof import("../assets/icons/Chart--histogram")['default']>
    'LazySvgoIconsChartLineData': LazyComponent<typeof import("../assets/icons/Chart--line--data")['default']>
    'LazySvgoIconsChartLineSmooth': LazyComponent<typeof import("../assets/icons/Chart--line-smooth")['default']>
    'LazySvgoIconsChartLine': LazyComponent<typeof import("../assets/icons/Chart--line")['default']>
    'LazySvgoIconsChartLogisticRegression': LazyComponent<typeof import("../assets/icons/Chart--logistic-regression")['default']>
    'LazySvgoIconsChartMarimekko': LazyComponent<typeof import("../assets/icons/Chart--marimekko")['default']>
    'LazySvgoIconsChartMaximum': LazyComponent<typeof import("../assets/icons/Chart--maximum")['default']>
    'LazySvgoIconsChartMedian': LazyComponent<typeof import("../assets/icons/Chart--median")['default']>
    'LazySvgoIconsChartMinimum': LazyComponent<typeof import("../assets/icons/Chart--minimum")['default']>
    'LazySvgoIconsChartMultiLine': LazyComponent<typeof import("../assets/icons/Chart--multi-line")['default']>
    'LazySvgoIconsChartMultitype': LazyComponent<typeof import("../assets/icons/Chart--multitype")['default']>
    'LazySvgoIconsChartNetwork': LazyComponent<typeof import("../assets/icons/Chart--network")['default']>
    'LazySvgoIconsChartParallel': LazyComponent<typeof import("../assets/icons/Chart--parallel")['default']>
    'LazySvgoIconsChartPie': LazyComponent<typeof import("../assets/icons/Chart--pie")['default']>
    'LazySvgoIconsChartPlanningWaterfall': LazyComponent<typeof import("../assets/icons/Chart--planning-waterfall")['default']>
    'LazySvgoIconsChartPoint': LazyComponent<typeof import("../assets/icons/Chart--point")['default']>
    'LazySvgoIconsChartPopulation': LazyComponent<typeof import("../assets/icons/Chart--population")['default']>
    'LazySvgoIconsChartRadar': LazyComponent<typeof import("../assets/icons/Chart--radar")['default']>
    'LazySvgoIconsChartRadial': LazyComponent<typeof import("../assets/icons/Chart--radial")['default']>
    'LazySvgoIconsChartRelationship': LazyComponent<typeof import("../assets/icons/Chart--relationship")['default']>
    'LazySvgoIconsChartRing': LazyComponent<typeof import("../assets/icons/Chart--ring")['default']>
    'LazySvgoIconsChartRiver': LazyComponent<typeof import("../assets/icons/Chart--river")['default']>
    'LazySvgoIconsChartRose': LazyComponent<typeof import("../assets/icons/Chart--rose")['default']>
    'LazySvgoIconsChartScatter': LazyComponent<typeof import("../assets/icons/Chart--scatter")['default']>
    'LazySvgoIconsChartSpiral': LazyComponent<typeof import("../assets/icons/Chart--spiral")['default']>
    'LazySvgoIconsChartStacked': LazyComponent<typeof import("../assets/icons/Chart--stacked")['default']>
    'LazySvgoIconsChartStepper': LazyComponent<typeof import("../assets/icons/Chart--stepper")['default']>
    'LazySvgoIconsChartSunburst': LazyComponent<typeof import("../assets/icons/Chart--sunburst")['default']>
    'LazySvgoIconsChartTSne': LazyComponent<typeof import("../assets/icons/Chart--t-sne")['default']>
    'LazySvgoIconsChartTreemap': LazyComponent<typeof import("../assets/icons/Chart--treemap")['default']>
    'LazySvgoIconsChartVennDiagram': LazyComponent<typeof import("../assets/icons/Chart--venn-diagram")['default']>
    'LazySvgoIconsChartViolinPlot': LazyComponent<typeof import("../assets/icons/Chart--violin-plot")['default']>
    'LazySvgoIconsChartWaterfall': LazyComponent<typeof import("../assets/icons/Chart--waterfall")['default']>
    'LazySvgoIconsChartWinLoss': LazyComponent<typeof import("../assets/icons/Chart--win-loss")['default']>
    'LazySvgoIconsChatLaunch': LazyComponent<typeof import("../assets/icons/Chat--launch")['default']>
    'LazySvgoIconsChatOff': LazyComponent<typeof import("../assets/icons/Chat--off")['default']>
    'LazySvgoIconsChatOperational': LazyComponent<typeof import("../assets/icons/Chat--operational")['default']>
    'LazySvgoIconsChatBot': LazyComponent<typeof import("../assets/icons/Chat-bot")['default']>
    'LazySvgoIconsChat': LazyComponent<typeof import("../assets/icons/Chat")['default']>
    'LazySvgoIconsCheckboxCheckedFilled': LazyComponent<typeof import("../assets/icons/Checkbox--checked--filled")['default']>
    'LazySvgoIconsCheckboxChecked': LazyComponent<typeof import("../assets/icons/Checkbox--checked")['default']>
    'LazySvgoIconsCheckboxIndeterminateFilled': LazyComponent<typeof import("../assets/icons/Checkbox--indeterminate--filled")['default']>
    'LazySvgoIconsCheckboxIndeterminate': LazyComponent<typeof import("../assets/icons/Checkbox--indeterminate")['default']>
    'LazySvgoIconsCheckbox': LazyComponent<typeof import("../assets/icons/Checkbox")['default']>
    'LazySvgoIconsCheckmarkFilledError': LazyComponent<typeof import("../assets/icons/Checkmark--filled--error")['default']>
    'LazySvgoIconsCheckmarkFilledWarning': LazyComponent<typeof import("../assets/icons/Checkmark--filled--warning")['default']>
    'LazySvgoIconsCheckmarkFilled': LazyComponent<typeof import("../assets/icons/Checkmark--filled")['default']>
    'LazySvgoIconsCheckmarkOutlineError': LazyComponent<typeof import("../assets/icons/Checkmark--outline--error")['default']>
    'LazySvgoIconsCheckmarkOutlineWarning': LazyComponent<typeof import("../assets/icons/Checkmark--outline--warning")['default']>
    'LazySvgoIconsCheckmarkOutline': LazyComponent<typeof import("../assets/icons/Checkmark--outline")['default']>
    'LazySvgoIconsCheckmark': LazyComponent<typeof import("../assets/icons/Checkmark")['default']>
    'LazySvgoIconsChemistryReference': LazyComponent<typeof import("../assets/icons/Chemistry--reference")['default']>
    'LazySvgoIconsChemistry': LazyComponent<typeof import("../assets/icons/Chemistry")['default']>
    'LazySvgoIconsChevronDownOutline': LazyComponent<typeof import("../assets/icons/Chevron--down--outline")['default']>
    'LazySvgoIconsChevronDown': LazyComponent<typeof import("../assets/icons/Chevron--down")['default']>
    'LazySvgoIconsChevronLeft': LazyComponent<typeof import("../assets/icons/Chevron--left")['default']>
    'LazySvgoIconsChevronMini': LazyComponent<typeof import("../assets/icons/Chevron--mini")['default']>
    'LazySvgoIconsChevronRight': LazyComponent<typeof import("../assets/icons/Chevron--right")['default']>
    'LazySvgoIconsChevronSortDown': LazyComponent<typeof import("../assets/icons/Chevron--sort--down")['default']>
    'LazySvgoIconsChevronSortUp': LazyComponent<typeof import("../assets/icons/Chevron--sort--up")['default']>
    'LazySvgoIconsChevronSort': LazyComponent<typeof import("../assets/icons/Chevron--sort")['default']>
    'LazySvgoIconsChevronUpOutline': LazyComponent<typeof import("../assets/icons/Chevron--up--outline")['default']>
    'LazySvgoIconsChevronUp': LazyComponent<typeof import("../assets/icons/Chevron--up")['default']>
    'LazySvgoIconsChip': LazyComponent<typeof import("../assets/icons/Chip")['default']>
    'LazySvgoIconsChoices': LazyComponent<typeof import("../assets/icons/Choices")['default']>
    'LazySvgoIconsChooseItem': LazyComponent<typeof import("../assets/icons/Choose-item")['default']>
    'LazySvgoIconsChoroplethMap': LazyComponent<typeof import("../assets/icons/Choropleth-map")['default']>
    'LazySvgoIconsCicsCmas': LazyComponent<typeof import("../assets/icons/Cics--cmas")['default']>
    'LazySvgoIconsCicsDb2Connection': LazyComponent<typeof import("../assets/icons/Cics--db2-connection")['default']>
    'LazySvgoIconsCicsExplorer': LazyComponent<typeof import("../assets/icons/Cics--explorer")['default']>
    'LazySvgoIconsCicsProgram': LazyComponent<typeof import("../assets/icons/Cics--program")['default']>
    'LazySvgoIconsCicsSitOverrides': LazyComponent<typeof import("../assets/icons/Cics--sit-overrides")['default']>
    'LazySvgoIconsCicsSit': LazyComponent<typeof import("../assets/icons/Cics--sit")['default']>
    'LazySvgoIconsCicsSystemGroup': LazyComponent<typeof import("../assets/icons/Cics--system-group")['default']>
    'LazySvgoIconsCicsTransactionServerZos': LazyComponent<typeof import("../assets/icons/Cics--transaction-server-zos")['default']>
    'LazySvgoIconsCicsWuiRegion': LazyComponent<typeof import("../assets/icons/Cics--wui-region")['default']>
    'LazySvgoIconsCicsRegionAlt': LazyComponent<typeof import("../assets/icons/Cics-region--alt")['default']>
    'LazySvgoIconsCicsRegionRouting': LazyComponent<typeof import("../assets/icons/Cics-region--routing")['default']>
    'LazySvgoIconsCicsRegionTarget': LazyComponent<typeof import("../assets/icons/Cics-region--target")['default']>
    'LazySvgoIconsCicsRegion': LazyComponent<typeof import("../assets/icons/Cics-region")['default']>
    'LazySvgoIconsCicsplex': LazyComponent<typeof import("../assets/icons/Cicsplex")['default']>
    'LazySvgoIconsCircleFilled': LazyComponent<typeof import("../assets/icons/Circle--filled")['default']>
    'LazySvgoIconsCircleOutline': LazyComponent<typeof import("../assets/icons/Circle--outline")['default']>
    'LazySvgoIconsCircleSolid': LazyComponent<typeof import("../assets/icons/Circle--solid")['default']>
    'LazySvgoIconsCircleDash': LazyComponent<typeof import("../assets/icons/Circle-dash")['default']>
    'LazySvgoIconsCircleFill': LazyComponent<typeof import("../assets/icons/Circle-fill")['default']>
    'LazySvgoIconsCircleMeasurement': LazyComponent<typeof import("../assets/icons/Circle-measurement")['default']>
    'LazySvgoIconsCirclePacking': LazyComponent<typeof import("../assets/icons/Circle-packing")['default']>
    'LazySvgoIconsCircleStroke': LazyComponent<typeof import("../assets/icons/Circle-stroke")['default']>
    'LazySvgoIconsCircuitComposer': LazyComponent<typeof import("../assets/icons/Circuit-composer")['default']>
    'LazySvgoIconsClassification': LazyComponent<typeof import("../assets/icons/Classification")['default']>
    'LazySvgoIconsClassifierLanguage': LazyComponent<typeof import("../assets/icons/Classifier--language")['default']>
    'LazySvgoIconsClean': LazyComponent<typeof import("../assets/icons/Clean")['default']>
    'LazySvgoIconsCloseFilled': LazyComponent<typeof import("../assets/icons/Close--filled")['default']>
    'LazySvgoIconsCloseLarge': LazyComponent<typeof import("../assets/icons/Close--large")['default']>
    'LazySvgoIconsCloseOutline': LazyComponent<typeof import("../assets/icons/Close--outline")['default']>
    'LazySvgoIconsClose': LazyComponent<typeof import("../assets/icons/Close")['default']>
    'LazySvgoIconsClosedCaptionAlt': LazyComponent<typeof import("../assets/icons/Closed-caption--alt")['default']>
    'LazySvgoIconsClosedCaptionFilled': LazyComponent<typeof import("../assets/icons/Closed-caption--filled")['default']>
    'LazySvgoIconsClosedCaption': LazyComponent<typeof import("../assets/icons/Closed-caption")['default']>
    'LazySvgoIconsCloudAlerting': LazyComponent<typeof import("../assets/icons/Cloud--alerting")['default']>
    'LazySvgoIconsCloudAuditing': LazyComponent<typeof import("../assets/icons/Cloud--auditing")['default']>
    'LazySvgoIconsCloudDataOps': LazyComponent<typeof import("../assets/icons/Cloud--data-ops")['default']>
    'LazySvgoIconsCloudDownload': LazyComponent<typeof import("../assets/icons/Cloud--download")['default']>
    'LazySvgoIconsCloudLogging': LazyComponent<typeof import("../assets/icons/Cloud--logging")['default']>
    'LazySvgoIconsCloudMonitoring': LazyComponent<typeof import("../assets/icons/Cloud--monitoring")['default']>
    'LazySvgoIconsCloudOffline': LazyComponent<typeof import("../assets/icons/Cloud--offline")['default']>
    'LazySvgoIconsCloudServiceManagement': LazyComponent<typeof import("../assets/icons/Cloud--service-management")['default']>
    'LazySvgoIconsCloudUpload': LazyComponent<typeof import("../assets/icons/Cloud--upload")['default']>
    'LazySvgoIconsCloudApp': LazyComponent<typeof import("../assets/icons/Cloud-app")['default']>
    'LazySvgoIconsCloudCeiling': LazyComponent<typeof import("../assets/icons/Cloud-ceiling")['default']>
    'LazySvgoIconsCloudFoundry1': LazyComponent<typeof import("../assets/icons/Cloud-foundry--1")['default']>
    'LazySvgoIconsCloudFoundry2': LazyComponent<typeof import("../assets/icons/Cloud-foundry--2")['default']>
    'LazySvgoIconsCloudRegistry': LazyComponent<typeof import("../assets/icons/Cloud-registry")['default']>
    'LazySvgoIconsCloudSatelliteConfig': LazyComponent<typeof import("../assets/icons/Cloud-satellite--config")['default']>
    'LazySvgoIconsCloudSatelliteLink': LazyComponent<typeof import("../assets/icons/Cloud-satellite--link")['default']>
    'LazySvgoIconsCloudSatelliteServices': LazyComponent<typeof import("../assets/icons/Cloud-satellite--services")['default']>
    'LazySvgoIconsCloudSatellite': LazyComponent<typeof import("../assets/icons/Cloud-satellite")['default']>
    'LazySvgoIconsCloudServices': LazyComponent<typeof import("../assets/icons/Cloud-services")['default']>
    'LazySvgoIconsCloud': LazyComponent<typeof import("../assets/icons/Cloud")['default']>
    'LazySvgoIconsCloudy': LazyComponent<typeof import("../assets/icons/Cloudy")['default']>
    'LazySvgoIconsCobbAngle': LazyComponent<typeof import("../assets/icons/Cobb-angle")['default']>
    'LazySvgoIconsCodeHide': LazyComponent<typeof import("../assets/icons/Code--hide")['default']>
    'LazySvgoIconsCodeReference': LazyComponent<typeof import("../assets/icons/Code--reference")['default']>
    'LazySvgoIconsCodeBlock': LazyComponent<typeof import("../assets/icons/Code-block")['default']>
    'LazySvgoIconsCodeSigningService': LazyComponent<typeof import("../assets/icons/Code-signing-service")['default']>
    'LazySvgoIconsCode': LazyComponent<typeof import("../assets/icons/Code")['default']>
    'LazySvgoIconsCognitive': LazyComponent<typeof import("../assets/icons/Cognitive")['default']>
    'LazySvgoIconsCollaborate': LazyComponent<typeof import("../assets/icons/Collaborate")['default']>
    'LazySvgoIconsCollapseAll': LazyComponent<typeof import("../assets/icons/Collapse-all")['default']>
    'LazySvgoIconsCollapseCategories': LazyComponent<typeof import("../assets/icons/Collapse-categories")['default']>
    'LazySvgoIconsColorPalette': LazyComponent<typeof import("../assets/icons/Color-palette")['default']>
    'LazySvgoIconsColorSwitch': LazyComponent<typeof import("../assets/icons/Color-switch")['default']>
    'LazySvgoIconsColumnDelete': LazyComponent<typeof import("../assets/icons/Column--delete")['default']>
    'LazySvgoIconsColumnInsert': LazyComponent<typeof import("../assets/icons/Column--insert")['default']>
    'LazySvgoIconsColumnDependency': LazyComponent<typeof import("../assets/icons/Column-dependency")['default']>
    'LazySvgoIconsColumn': LazyComponent<typeof import("../assets/icons/Column")['default']>
    'LazySvgoIconsCommit': LazyComponent<typeof import("../assets/icons/Commit")['default']>
    'LazySvgoIconsCommunicationUnified': LazyComponent<typeof import("../assets/icons/Communication--unified")['default']>
    'LazySvgoIconsCompare': LazyComponent<typeof import("../assets/icons/Compare")['default']>
    'LazySvgoIconsCompass': LazyComponent<typeof import("../assets/icons/Compass")['default']>
    'LazySvgoIconsComposerEdit': LazyComponent<typeof import("../assets/icons/Composer-edit")['default']>
    'LazySvgoIconsConcept': LazyComponent<typeof import("../assets/icons/Concept")['default']>
    'LazySvgoIconsConditionPoint': LazyComponent<typeof import("../assets/icons/Condition--point")['default']>
    'LazySvgoIconsConditionWaitPoint': LazyComponent<typeof import("../assets/icons/Condition--wait-point")['default']>
    'LazySvgoIconsConnectRecursive': LazyComponent<typeof import("../assets/icons/Connect--recursive")['default']>
    'LazySvgoIconsConnectReference': LazyComponent<typeof import("../assets/icons/Connect--reference")['default']>
    'LazySvgoIconsConnectSource': LazyComponent<typeof import("../assets/icons/Connect--source")['default']>
    'LazySvgoIconsConnectTarget': LazyComponent<typeof import("../assets/icons/Connect--target")['default']>
    'LazySvgoIconsConnect': LazyComponent<typeof import("../assets/icons/Connect")['default']>
    'LazySvgoIconsConnectionReceive': LazyComponent<typeof import("../assets/icons/Connection--receive")['default']>
    'LazySvgoIconsConnectionSend': LazyComponent<typeof import("../assets/icons/Connection--send")['default']>
    'LazySvgoIconsConnectionTwoWay': LazyComponent<typeof import("../assets/icons/Connection--two-way")['default']>
    'LazySvgoIconsConnectionUsage': LazyComponent<typeof import("../assets/icons/Connection--usage")['default']>
    'LazySvgoIconsConnectionFlowUsage': LazyComponent<typeof import("../assets/icons/Connection-flow--usage")['default']>
    'LazySvgoIconsConnectionSignalOff': LazyComponent<typeof import("../assets/icons/Connection-signal--off")['default']>
    'LazySvgoIconsConnectionSignal': LazyComponent<typeof import("../assets/icons/Connection-signal")['default']>
    'LazySvgoIconsConstraint': LazyComponent<typeof import("../assets/icons/Constraint")['default']>
    'LazySvgoIconsConstruction': LazyComponent<typeof import("../assets/icons/Construction")['default']>
    'LazySvgoIconsContainerEngine': LazyComponent<typeof import("../assets/icons/Container--engine")['default']>
    'LazySvgoIconsContainerImage': LazyComponent<typeof import("../assets/icons/Container--image")['default']>
    'LazySvgoIconsContainerRuntimeMonitor': LazyComponent<typeof import("../assets/icons/Container--runtime-monitor")['default']>
    'LazySvgoIconsContainerRuntime': LazyComponent<typeof import("../assets/icons/Container--runtime")['default']>
    'LazySvgoIconsContainerImagePull': LazyComponent<typeof import("../assets/icons/Container-image--pull")['default']>
    'LazySvgoIconsContainerImagePushPull': LazyComponent<typeof import("../assets/icons/Container-image--push-pull")['default']>
    'LazySvgoIconsContainerImagePush': LazyComponent<typeof import("../assets/icons/Container-image--push")['default']>
    'LazySvgoIconsContainerRegistry': LazyComponent<typeof import("../assets/icons/Container-registry")['default']>
    'LazySvgoIconsContainerServices': LazyComponent<typeof import("../assets/icons/Container-services")['default']>
    'LazySvgoIconsContainerSoftware': LazyComponent<typeof import("../assets/icons/Container-software")['default']>
    'LazySvgoIconsContentDeliveryNetwork': LazyComponent<typeof import("../assets/icons/Content-delivery-network")['default']>
    'LazySvgoIconsContentView': LazyComponent<typeof import("../assets/icons/Content-view")['default']>
    'LazySvgoIconsContinueFilled': LazyComponent<typeof import("../assets/icons/Continue--filled")['default']>
    'LazySvgoIconsContinue': LazyComponent<typeof import("../assets/icons/Continue")['default']>
    'LazySvgoIconsContinuousDeployment': LazyComponent<typeof import("../assets/icons/Continuous-deployment")['default']>
    'LazySvgoIconsContinuousIntegration': LazyComponent<typeof import("../assets/icons/Continuous-integration")['default']>
    'LazySvgoIconsContourDraw': LazyComponent<typeof import("../assets/icons/Contour--draw")['default']>
    'LazySvgoIconsContourEdit': LazyComponent<typeof import("../assets/icons/Contour--edit")['default']>
    'LazySvgoIconsContourFinding': LazyComponent<typeof import("../assets/icons/Contour-finding")['default']>
    'LazySvgoIconsContrast': LazyComponent<typeof import("../assets/icons/Contrast")['default']>
    'LazySvgoIconsConvertToCloud': LazyComponent<typeof import("../assets/icons/Convert-to-cloud")['default']>
    'LazySvgoIconsCookie': LazyComponent<typeof import("../assets/icons/Cookie")['default']>
    'LazySvgoIconsCopyFile': LazyComponent<typeof import("../assets/icons/Copy--file")['default']>
    'LazySvgoIconsCopyLink': LazyComponent<typeof import("../assets/icons/Copy--link")['default']>
    'LazySvgoIconsCopy': LazyComponent<typeof import("../assets/icons/Copy")['default']>
    'LazySvgoIconsCorn': LazyComponent<typeof import("../assets/icons/Corn")['default']>
    'LazySvgoIconsCorner': LazyComponent<typeof import("../assets/icons/Corner")['default']>
    'LazySvgoIconsCoronavirus': LazyComponent<typeof import("../assets/icons/Coronavirus")['default']>
    'LazySvgoIconsCostTotal': LazyComponent<typeof import("../assets/icons/Cost--total")['default']>
    'LazySvgoIconsCost': LazyComponent<typeof import("../assets/icons/Cost")['default']>
    'LazySvgoIconsCough': LazyComponent<typeof import("../assets/icons/Cough")['default']>
    'LazySvgoIconsCourse': LazyComponent<typeof import("../assets/icons/Course")['default']>
    'LazySvgoIconsCovariate': LazyComponent<typeof import("../assets/icons/Covariate")['default']>
    'LazySvgoIconsCredentials': LazyComponent<typeof import("../assets/icons/Credentials")['default']>
    'LazySvgoIconsCriticalSeverity': LazyComponent<typeof import("../assets/icons/Critical-severity")['default']>
    'LazySvgoIconsCritical': LazyComponent<typeof import("../assets/icons/Critical")['default']>
    'LazySvgoIconsCropGrowth': LazyComponent<typeof import("../assets/icons/Crop-growth")['default']>
    'LazySvgoIconsCropHealth': LazyComponent<typeof import("../assets/icons/Crop-health")['default']>
    'LazySvgoIconsCrop': LazyComponent<typeof import("../assets/icons/Crop")['default']>
    'LazySvgoIconsCrossReference': LazyComponent<typeof import("../assets/icons/Cross-reference")['default']>
    'LazySvgoIconsCrossTab': LazyComponent<typeof import("../assets/icons/Cross-tab")['default']>
    'LazySvgoIconsCrossroads': LazyComponent<typeof import("../assets/icons/Crossroads")['default']>
    'LazySvgoIconsCrowdReportFilled': LazyComponent<typeof import("../assets/icons/Crowd-report--filled")['default']>
    'LazySvgoIconsCrowdReport': LazyComponent<typeof import("../assets/icons/Crowd-report")['default']>
    'LazySvgoIconsCsv': LazyComponent<typeof import("../assets/icons/Csv")['default']>
    'LazySvgoIconsCu1': LazyComponent<typeof import("../assets/icons/Cu1")['default']>
    'LazySvgoIconsCu3': LazyComponent<typeof import("../assets/icons/Cu3")['default']>
    'LazySvgoIconsCubeView': LazyComponent<typeof import("../assets/icons/Cube-view")['default']>
    'LazySvgoIconsCube': LazyComponent<typeof import("../assets/icons/Cube")['default']>
    'LazySvgoIconsCurrencyBaht': LazyComponent<typeof import("../assets/icons/Currency--baht")['default']>
    'LazySvgoIconsCurrencyDollar': LazyComponent<typeof import("../assets/icons/Currency--dollar")['default']>
    'LazySvgoIconsCurrencyEuro': LazyComponent<typeof import("../assets/icons/Currency--euro")['default']>
    'LazySvgoIconsCurrencyLira': LazyComponent<typeof import("../assets/icons/Currency--lira")['default']>
    'LazySvgoIconsCurrencyPound': LazyComponent<typeof import("../assets/icons/Currency--pound")['default']>
    'LazySvgoIconsCurrencyRuble': LazyComponent<typeof import("../assets/icons/Currency--ruble")['default']>
    'LazySvgoIconsCurrencyRupee': LazyComponent<typeof import("../assets/icons/Currency--rupee")['default']>
    'LazySvgoIconsCurrencyShekel': LazyComponent<typeof import("../assets/icons/Currency--shekel")['default']>
    'LazySvgoIconsCurrencyWon': LazyComponent<typeof import("../assets/icons/Currency--won")['default']>
    'LazySvgoIconsCurrencyYen': LazyComponent<typeof import("../assets/icons/Currency--yen")['default']>
    'LazySvgoIconsCurrency': LazyComponent<typeof import("../assets/icons/Currency")['default']>
    'LazySvgoIconsCursor1': LazyComponent<typeof import("../assets/icons/Cursor--1")['default']>
    'LazySvgoIconsCursor2': LazyComponent<typeof import("../assets/icons/Cursor--2")['default']>
    'LazySvgoIconsCustomerService': LazyComponent<typeof import("../assets/icons/Customer-service")['default']>
    'LazySvgoIconsCustomer': LazyComponent<typeof import("../assets/icons/Customer")['default']>
    'LazySvgoIconsCutInHalf': LazyComponent<typeof import("../assets/icons/Cut-in-half")['default']>
    'LazySvgoIconsCutOut': LazyComponent<typeof import("../assets/icons/Cut-out")['default']>
    'LazySvgoIconsCut': LazyComponent<typeof import("../assets/icons/Cut")['default']>
    'LazySvgoIconsCy': LazyComponent<typeof import("../assets/icons/Cy")['default']>
    'LazySvgoIconsCyclist': LazyComponent<typeof import("../assets/icons/Cyclist")['default']>
    'LazySvgoIconsCz': LazyComponent<typeof import("../assets/icons/Cz")['default']>
    'LazySvgoIconsDashboardReference': LazyComponent<typeof import("../assets/icons/Dashboard--reference")['default']>
    'LazySvgoIconsDashboard': LazyComponent<typeof import("../assets/icons/Dashboard")['default']>
    'LazySvgoIconsData1': LazyComponent<typeof import("../assets/icons/Data--1")['default']>
    'LazySvgoIconsData2': LazyComponent<typeof import("../assets/icons/Data--2")['default']>
    'LazySvgoIconsDataBaseAlt': LazyComponent<typeof import("../assets/icons/Data--base--alt")['default']>
    'LazySvgoIconsDataBase': LazyComponent<typeof import("../assets/icons/Data--base")['default']>
    'LazySvgoIconsDataCategorical': LazyComponent<typeof import("../assets/icons/Data--categorical")['default']>
    'LazySvgoIconsDataCenter': LazyComponent<typeof import("../assets/icons/Data--center")['default']>
    'LazySvgoIconsDataCheck': LazyComponent<typeof import("../assets/icons/Data--check")['default']>
    'LazySvgoIconsDataConnected': LazyComponent<typeof import("../assets/icons/Data--connected")['default']>
    'LazySvgoIconsDataError': LazyComponent<typeof import("../assets/icons/Data--error")['default']>
    'LazySvgoIconsDataFormat': LazyComponent<typeof import("../assets/icons/Data--format")['default']>
    'LazySvgoIconsDataReference': LazyComponent<typeof import("../assets/icons/Data--reference")['default']>
    'LazySvgoIconsDataRegular': LazyComponent<typeof import("../assets/icons/Data--regular")['default']>
    'LazySvgoIconsDataSet': LazyComponent<typeof import("../assets/icons/Data--set")['default']>
    'LazySvgoIconsDataStructured': LazyComponent<typeof import("../assets/icons/Data--structured")['default']>
    'LazySvgoIconsDataUnreal': LazyComponent<typeof import("../assets/icons/Data--unreal")['default']>
    'LazySvgoIconsDataUnstructured': LazyComponent<typeof import("../assets/icons/Data--unstructured")['default']>
    'LazySvgoIconsDataViewAlt': LazyComponent<typeof import("../assets/icons/Data--view--alt")['default']>
    'LazySvgoIconsDataView': LazyComponent<typeof import("../assets/icons/Data--view")['default']>
    'LazySvgoIconsDataAccessor': LazyComponent<typeof import("../assets/icons/Data-accessor")['default']>
    'LazySvgoIconsDataAnalytics': LazyComponent<typeof import("../assets/icons/Data-analytics")['default']>
    'LazySvgoIconsDataBackup': LazyComponent<typeof import("../assets/icons/Data-backup")['default']>
    'LazySvgoIconsDataBin': LazyComponent<typeof import("../assets/icons/Data-bin")['default']>
    'LazySvgoIconsDataBlob': LazyComponent<typeof import("../assets/icons/Data-blob")['default']>
    'LazySvgoIconsDataClass': LazyComponent<typeof import("../assets/icons/Data-class")['default']>
    'LazySvgoIconsDataCollection': LazyComponent<typeof import("../assets/icons/Data-collection")['default']>
    'LazySvgoIconsDataDefinition': LazyComponent<typeof import("../assets/icons/Data-definition")['default']>
    'LazySvgoIconsDataDiode': LazyComponent<typeof import("../assets/icons/Data-diode")['default']>
    'LazySvgoIconsDataEnrichmentAdd': LazyComponent<typeof import("../assets/icons/Data-enrichment--add")['default']>
    'LazySvgoIconsDataEnrichment': LazyComponent<typeof import("../assets/icons/Data-enrichment")['default']>
    'LazySvgoIconsDataPlayer': LazyComponent<typeof import("../assets/icons/Data-player")['default']>
    'LazySvgoIconsDataQualityDefinition': LazyComponent<typeof import("../assets/icons/Data-quality-definition")['default']>
    'LazySvgoIconsDataRefineryReference': LazyComponent<typeof import("../assets/icons/Data-refinery--reference")['default']>
    'LazySvgoIconsDataRefinery': LazyComponent<typeof import("../assets/icons/Data-refinery")['default']>
    'LazySvgoIconsDataShare': LazyComponent<typeof import("../assets/icons/Data-share")['default']>
    'LazySvgoIconsDataTableReference': LazyComponent<typeof import("../assets/icons/Data-table--reference")['default']>
    'LazySvgoIconsDataTable': LazyComponent<typeof import("../assets/icons/Data-table")['default']>
    'LazySvgoIconsDataVis1': LazyComponent<typeof import("../assets/icons/Data-vis--1")['default']>
    'LazySvgoIconsDataVis2': LazyComponent<typeof import("../assets/icons/Data-vis--2")['default']>
    'LazySvgoIconsDataVis3': LazyComponent<typeof import("../assets/icons/Data-vis--3")['default']>
    'LazySvgoIconsDataVis4': LazyComponent<typeof import("../assets/icons/Data-vis--4")['default']>
    'LazySvgoIconsDataVolumeAlt': LazyComponent<typeof import("../assets/icons/Data-volume--alt")['default']>
    'LazySvgoIconsDataVolume': LazyComponent<typeof import("../assets/icons/Data-volume")['default']>
    'LazySvgoIconsDatabaseDatastax': LazyComponent<typeof import("../assets/icons/Database--datastax")['default']>
    'LazySvgoIconsDatabaseElastic': LazyComponent<typeof import("../assets/icons/Database--elastic")['default']>
    'LazySvgoIconsDatabaseEnterprisedb': LazyComponent<typeof import("../assets/icons/Database--enterprisedb")['default']>
    'LazySvgoIconsDatabaseEtcd': LazyComponent<typeof import("../assets/icons/Database--etcd")['default']>
    'LazySvgoIconsDatabaseMessaging': LazyComponent<typeof import("../assets/icons/Database--messaging")['default']>
    'LazySvgoIconsDatabaseMongodb': LazyComponent<typeof import("../assets/icons/Database--mongodb")['default']>
    'LazySvgoIconsDatabasePostgresql': LazyComponent<typeof import("../assets/icons/Database--postgresql")['default']>
    'LazySvgoIconsDatabaseRabbit': LazyComponent<typeof import("../assets/icons/Database--rabbit")['default']>
    'LazySvgoIconsDatabaseRedis': LazyComponent<typeof import("../assets/icons/Database--redis")['default']>
    'LazySvgoIconsDatastore': LazyComponent<typeof import("../assets/icons/Datastore")['default']>
    'LazySvgoIconsDb2BufferPool': LazyComponent<typeof import("../assets/icons/Db2--buffer-pool")['default']>
    'LazySvgoIconsDb2DataSharingGroup': LazyComponent<typeof import("../assets/icons/Db2--data-sharing-group")['default']>
    'LazySvgoIconsDb2Database': LazyComponent<typeof import("../assets/icons/Db2--database")['default']>
    'LazySvgoIconsDebug': LazyComponent<typeof import("../assets/icons/Debug")['default']>
    'LazySvgoIconsDecisionNode': LazyComponent<typeof import("../assets/icons/Decision-node")['default']>
    'LazySvgoIconsDecisionTree': LazyComponent<typeof import("../assets/icons/Decision-tree")['default']>
    'LazySvgoIconsDelete': LazyComponent<typeof import("../assets/icons/Delete")['default']>
    'LazySvgoIconsDeliveryAdd': LazyComponent<typeof import("../assets/icons/Delivery--add")['default']>
    'LazySvgoIconsDeliveryParcel': LazyComponent<typeof import("../assets/icons/Delivery--parcel")['default']>
    'LazySvgoIconsDeliveryTruck': LazyComponent<typeof import("../assets/icons/Delivery-truck")['default']>
    'LazySvgoIconsDelivery': LazyComponent<typeof import("../assets/icons/Delivery")['default']>
    'LazySvgoIconsDemo': LazyComponent<typeof import("../assets/icons/Demo")['default']>
    'LazySvgoIconsDenominate': LazyComponent<typeof import("../assets/icons/Denominate")['default']>
    'LazySvgoIconsDeparture': LazyComponent<typeof import("../assets/icons/Departure")['default']>
    'LazySvgoIconsDeployRules': LazyComponent<typeof import("../assets/icons/Deploy-rules")['default']>
    'LazySvgoIconsDeploy': LazyComponent<typeof import("../assets/icons/Deploy")['default']>
    'LazySvgoIconsDeploymentPattern': LazyComponent<typeof import("../assets/icons/Deployment-pattern")['default']>
    'LazySvgoIconsDeploymentPolicy': LazyComponent<typeof import("../assets/icons/Deployment-policy")['default']>
    'LazySvgoIconsDeploymentUnitData': LazyComponent<typeof import("../assets/icons/Deployment-unit--data")['default']>
    'LazySvgoIconsDeploymentUnitExecution': LazyComponent<typeof import("../assets/icons/Deployment-unit--execution")['default']>
    'LazySvgoIconsDeploymentUnitInstallation1': LazyComponent<typeof import("../assets/icons/Deployment-unit--installation1")['default']>
    'LazySvgoIconsDeploymentUnitPresentation': LazyComponent<typeof import("../assets/icons/Deployment-unit--presentation")['default']>
    'LazySvgoIconsDeploymentUnitTechnicalData': LazyComponent<typeof import("../assets/icons/Deployment-unit--technical--data")['default']>
    'LazySvgoIconsDeploymentUnitTechnicalExecution': LazyComponent<typeof import("../assets/icons/Deployment-unit--technical--execution")['default']>
    'LazySvgoIconsDeploymentUnitTechnicalInstallation': LazyComponent<typeof import("../assets/icons/Deployment-unit--technical--installation")['default']>
    'LazySvgoIconsDeploymentUnitTechnicalPresentation': LazyComponent<typeof import("../assets/icons/Deployment-unit--technical--presentation")['default']>
    'LazySvgoIconsDeskAdjustable': LazyComponent<typeof import("../assets/icons/Desk--adjustable")['default']>
    'LazySvgoIconsDevelopment': LazyComponent<typeof import("../assets/icons/Development")['default']>
    'LazySvgoIconsDevicesApps': LazyComponent<typeof import("../assets/icons/Devices--apps")['default']>
    'LazySvgoIconsDevices': LazyComponent<typeof import("../assets/icons/Devices")['default']>
    'LazySvgoIconsDewPointFilled': LazyComponent<typeof import("../assets/icons/Dew-point--filled")['default']>
    'LazySvgoIconsDewPoint': LazyComponent<typeof import("../assets/icons/Dew-point")['default']>
    'LazySvgoIconsDiagramReference': LazyComponent<typeof import("../assets/icons/Diagram--reference")['default']>
    'LazySvgoIconsDiagram': LazyComponent<typeof import("../assets/icons/Diagram")['default']>
    'LazySvgoIconsDiamondOutline': LazyComponent<typeof import("../assets/icons/Diamond--outline")['default']>
    'LazySvgoIconsDiamondSolid': LazyComponent<typeof import("../assets/icons/Diamond--solid")['default']>
    'LazySvgoIconsDiamondFill': LazyComponent<typeof import("../assets/icons/Diamond-fill")['default']>
    'LazySvgoIconsDicom6000': LazyComponent<typeof import("../assets/icons/Dicom--6000")['default']>
    'LazySvgoIconsDicomOverlay': LazyComponent<typeof import("../assets/icons/Dicom--overlay")['default']>
    'LazySvgoIconsDirectionBearRight01Filled': LazyComponent<typeof import("../assets/icons/Direction--bear-right--01--filled")['default']>
    'LazySvgoIconsDirectionBearRight01': LazyComponent<typeof import("../assets/icons/Direction--bear-right--01")['default']>
    'LazySvgoIconsDirectionBearRight02Filled': LazyComponent<typeof import("../assets/icons/Direction--bear-right--02--filled")['default']>
    'LazySvgoIconsDirectionBearRight02': LazyComponent<typeof import("../assets/icons/Direction--bear-right--02")['default']>
    'LazySvgoIconsDirectionCurveFilled': LazyComponent<typeof import("../assets/icons/Direction--curve--filled")['default']>
    'LazySvgoIconsDirectionCurve': LazyComponent<typeof import("../assets/icons/Direction--curve")['default']>
    'LazySvgoIconsDirectionForkFilled': LazyComponent<typeof import("../assets/icons/Direction--fork--filled")['default']>
    'LazySvgoIconsDirectionFork': LazyComponent<typeof import("../assets/icons/Direction--fork")['default']>
    'LazySvgoIconsDirectionLoopLeftFilled': LazyComponent<typeof import("../assets/icons/Direction--loop-left--filled")['default']>
    'LazySvgoIconsDirectionLoopLeft': LazyComponent<typeof import("../assets/icons/Direction--loop-left")['default']>
    'LazySvgoIconsDirectionLoopRightFilled': LazyComponent<typeof import("../assets/icons/Direction--loop-right--filled")['default']>
    'LazySvgoIconsDirectionLoopRight': LazyComponent<typeof import("../assets/icons/Direction--loop-right")['default']>
    'LazySvgoIconsDirectionMergeFilled': LazyComponent<typeof import("../assets/icons/Direction--merge--filled")['default']>
    'LazySvgoIconsDirectionMerge': LazyComponent<typeof import("../assets/icons/Direction--merge")['default']>
    'LazySvgoIconsDirectionRight01Filled': LazyComponent<typeof import("../assets/icons/Direction--right--01--filled")['default']>
    'LazySvgoIconsDirectionRight01': LazyComponent<typeof import("../assets/icons/Direction--right--01")['default']>
    'LazySvgoIconsDirectionRight02Filled': LazyComponent<typeof import("../assets/icons/Direction--right--02--filled")['default']>
    'LazySvgoIconsDirectionRight02': LazyComponent<typeof import("../assets/icons/Direction--right--02")['default']>
    'LazySvgoIconsDirectionRotaryFirstRightFilled': LazyComponent<typeof import("../assets/icons/Direction--rotary--first-right--filled")['default']>
    'LazySvgoIconsDirectionRotaryFirstRight': LazyComponent<typeof import("../assets/icons/Direction--rotary--first-right")['default']>
    'LazySvgoIconsDirectionRotaryRightFilled': LazyComponent<typeof import("../assets/icons/Direction--rotary--right--filled")['default']>
    'LazySvgoIconsDirectionRotaryRight': LazyComponent<typeof import("../assets/icons/Direction--rotary--right")['default']>
    'LazySvgoIconsDirectionRotaryStraightFilled': LazyComponent<typeof import("../assets/icons/Direction--rotary--straight--filled")['default']>
    'LazySvgoIconsDirectionRotaryStraight': LazyComponent<typeof import("../assets/icons/Direction--rotary--straight")['default']>
    'LazySvgoIconsDirectionSharpTurnFilled': LazyComponent<typeof import("../assets/icons/Direction--sharp-turn--filled")['default']>
    'LazySvgoIconsDirectionSharpTurn': LazyComponent<typeof import("../assets/icons/Direction--sharp-turn")['default']>
    'LazySvgoIconsDirectionStraightFilled': LazyComponent<typeof import("../assets/icons/Direction--straight--filled")['default']>
    'LazySvgoIconsDirectionStraightRightFilled': LazyComponent<typeof import("../assets/icons/Direction--straight--right--filled")['default']>
    'LazySvgoIconsDirectionStraightRight': LazyComponent<typeof import("../assets/icons/Direction--straight--right")['default']>
    'LazySvgoIconsDirectionStraight': LazyComponent<typeof import("../assets/icons/Direction--straight")['default']>
    'LazySvgoIconsDirectionUTurnFilled': LazyComponent<typeof import("../assets/icons/Direction--u-turn--filled")['default']>
    'LazySvgoIconsDirectionUTurn': LazyComponent<typeof import("../assets/icons/Direction--u-turn")['default']>
    'LazySvgoIconsDirectoryDomain': LazyComponent<typeof import("../assets/icons/Directory-domain")['default']>
    'LazySvgoIconsDistributeHorizontalCenter': LazyComponent<typeof import("../assets/icons/Distribute--horizontal-center")['default']>
    'LazySvgoIconsDistributeHorizontalLeft': LazyComponent<typeof import("../assets/icons/Distribute--horizontal-left")['default']>
    'LazySvgoIconsDistributeHorizontalRight': LazyComponent<typeof import("../assets/icons/Distribute--horizontal-right")['default']>
    'LazySvgoIconsDistributeVerticalBottom': LazyComponent<typeof import("../assets/icons/Distribute--vertical-bottom")['default']>
    'LazySvgoIconsDistributeVerticalCenter': LazyComponent<typeof import("../assets/icons/Distribute--vertical-center")['default']>
    'LazySvgoIconsDistributeVerticalTop': LazyComponent<typeof import("../assets/icons/Distribute--vertical-top")['default']>
    'LazySvgoIconsDna': LazyComponent<typeof import("../assets/icons/Dna")['default']>
    'LazySvgoIconsDnsServices': LazyComponent<typeof import("../assets/icons/Dns-services")['default']>
    'LazySvgoIconsDoc': LazyComponent<typeof import("../assets/icons/Doc")['default']>
    'LazySvgoIconsDocumentAdd': LazyComponent<typeof import("../assets/icons/Document--add")['default']>
    'LazySvgoIconsDocumentAttachment': LazyComponent<typeof import("../assets/icons/Document--attachment")['default']>
    'LazySvgoIconsDocumentAudio': LazyComponent<typeof import("../assets/icons/Document--audio")['default']>
    'LazySvgoIconsDocumentBlank': LazyComponent<typeof import("../assets/icons/Document--blank")['default']>
    'LazySvgoIconsDocumentComment': LazyComponent<typeof import("../assets/icons/Document--comment")['default']>
    'LazySvgoIconsDocumentConfiguration': LazyComponent<typeof import("../assets/icons/Document--configuration")['default']>
    'LazySvgoIconsDocumentDownload': LazyComponent<typeof import("../assets/icons/Document--download")['default']>
    'LazySvgoIconsDocumentEpdf': LazyComponent<typeof import("../assets/icons/Document--epdf")['default']>
    'LazySvgoIconsDocumentExport': LazyComponent<typeof import("../assets/icons/Document--export")['default']>
    'LazySvgoIconsDocumentHorizontal': LazyComponent<typeof import("../assets/icons/Document--horizontal")['default']>
    'LazySvgoIconsDocumentImport': LazyComponent<typeof import("../assets/icons/Document--import")['default']>
    'LazySvgoIconsDocumentMultiple01': LazyComponent<typeof import("../assets/icons/Document--multiple-01")['default']>
    'LazySvgoIconsDocumentMultiple02': LazyComponent<typeof import("../assets/icons/Document--multiple-02")['default']>
    'LazySvgoIconsDocumentPdf': LazyComponent<typeof import("../assets/icons/Document--pdf")['default']>
    'LazySvgoIconsDocumentPreliminary': LazyComponent<typeof import("../assets/icons/Document--preliminary")['default']>
    'LazySvgoIconsDocumentProtected': LazyComponent<typeof import("../assets/icons/Document--protected")['default']>
    'LazySvgoIconsDocumentRequirements': LazyComponent<typeof import("../assets/icons/Document--requirements")['default']>
    'LazySvgoIconsDocumentSecurity': LazyComponent<typeof import("../assets/icons/Document--security")['default']>
    'LazySvgoIconsDocumentSigned': LazyComponent<typeof import("../assets/icons/Document--signed")['default']>
    'LazySvgoIconsDocumentSketch': LazyComponent<typeof import("../assets/icons/Document--sketch")['default']>
    'LazySvgoIconsDocumentSubject': LazyComponent<typeof import("../assets/icons/Document--subject")['default']>
    'LazySvgoIconsDocumentSubtract': LazyComponent<typeof import("../assets/icons/Document--subtract")['default']>
    'LazySvgoIconsDocumentTasks': LazyComponent<typeof import("../assets/icons/Document--tasks")['default']>
    'LazySvgoIconsDocumentUnknown': LazyComponent<typeof import("../assets/icons/Document--unknown")['default']>
    'LazySvgoIconsDocumentUnprotected': LazyComponent<typeof import("../assets/icons/Document--unprotected")['default']>
    'LazySvgoIconsDocumentVertical': LazyComponent<typeof import("../assets/icons/Document--vertical")['default']>
    'LazySvgoIconsDocumentVideo': LazyComponent<typeof import("../assets/icons/Document--video")['default']>
    'LazySvgoIconsDocumentView': LazyComponent<typeof import("../assets/icons/Document--view")['default']>
    'LazySvgoIconsDocumentWordProcessorReference': LazyComponent<typeof import("../assets/icons/Document--word-processor--reference")['default']>
    'LazySvgoIconsDocumentWordProcessor': LazyComponent<typeof import("../assets/icons/Document--word-processor")['default']>
    'LazySvgoIconsDocumentSentiment': LazyComponent<typeof import("../assets/icons/Document-sentiment")['default']>
    'LazySvgoIconsDocument': LazyComponent<typeof import("../assets/icons/Document")['default']>
    'LazySvgoIconsDogWalker': LazyComponent<typeof import("../assets/icons/Dog-walker")['default']>
    'LazySvgoIconsDotMark': LazyComponent<typeof import("../assets/icons/Dot-mark")['default']>
    'LazySvgoIconsDoubleInteger': LazyComponent<typeof import("../assets/icons/Double-integer")['default']>
    'LazySvgoIconsDownToBottom': LazyComponent<typeof import("../assets/icons/Down-to-bottom")['default']>
    'LazySvgoIconsDownloadStudy': LazyComponent<typeof import("../assets/icons/Download-study")['default']>
    'LazySvgoIconsDownload': LazyComponent<typeof import("../assets/icons/Download")['default']>
    'LazySvgoIconsDownstream': LazyComponent<typeof import("../assets/icons/Downstream")['default']>
    'LazySvgoIconsDragHorizontal': LazyComponent<typeof import("../assets/icons/Drag--horizontal")['default']>
    'LazySvgoIconsDragVertical': LazyComponent<typeof import("../assets/icons/Drag--vertical")['default']>
    'LazySvgoIconsDraggable': LazyComponent<typeof import("../assets/icons/Draggable")['default']>
    'LazySvgoIconsDraw': LazyComponent<typeof import("../assets/icons/Draw")['default']>
    'LazySvgoIconsDrillBack': LazyComponent<typeof import("../assets/icons/Drill-back")['default']>
    'LazySvgoIconsDrillDown': LazyComponent<typeof import("../assets/icons/Drill-down")['default']>
    'LazySvgoIconsDrillThrough': LazyComponent<typeof import("../assets/icons/Drill-through")['default']>
    'LazySvgoIconsDrink01': LazyComponent<typeof import("../assets/icons/Drink--01")['default']>
    'LazySvgoIconsDrink02': LazyComponent<typeof import("../assets/icons/Drink--02")['default']>
    'LazySvgoIconsDriverAnalysis': LazyComponent<typeof import("../assets/icons/Driver-analysis")['default']>
    'LazySvgoIconsDroneDelivery': LazyComponent<typeof import("../assets/icons/Drone--delivery")['default']>
    'LazySvgoIconsDroneFront': LazyComponent<typeof import("../assets/icons/Drone--front")['default']>
    'LazySvgoIconsDroneVideo': LazyComponent<typeof import("../assets/icons/Drone--video")['default']>
    'LazySvgoIconsDrone': LazyComponent<typeof import("../assets/icons/Drone")['default']>
    'LazySvgoIconsDropPhotoFilled': LazyComponent<typeof import("../assets/icons/Drop-photo--filled")['default']>
    'LazySvgoIconsDropPhoto': LazyComponent<typeof import("../assets/icons/Drop-photo")['default']>
    'LazySvgoIconsDrought': LazyComponent<typeof import("../assets/icons/Drought")['default']>
    'LazySvgoIconsDvr': LazyComponent<typeof import("../assets/icons/Dvr")['default']>
    'LazySvgoIconsEarthAmericasFilled': LazyComponent<typeof import("../assets/icons/Earth--americas--filled")['default']>
    'LazySvgoIconsEarthAmericas': LazyComponent<typeof import("../assets/icons/Earth--americas")['default']>
    'LazySvgoIconsEarthEuropeAfricaFilled': LazyComponent<typeof import("../assets/icons/Earth--europe-africa--filled")['default']>
    'LazySvgoIconsEarthEuropeAfrica': LazyComponent<typeof import("../assets/icons/Earth--europe-africa")['default']>
    'LazySvgoIconsEarthFilled': LazyComponent<typeof import("../assets/icons/Earth--filled")['default']>
    'LazySvgoIconsEarthSoutheastAsiaFilled': LazyComponent<typeof import("../assets/icons/Earth--southeast-asia--filled")['default']>
    'LazySvgoIconsEarthSoutheastAsia': LazyComponent<typeof import("../assets/icons/Earth--southeast-asia")['default']>
    'LazySvgoIconsEarth': LazyComponent<typeof import("../assets/icons/Earth")['default']>
    'LazySvgoIconsEarthquake': LazyComponent<typeof import("../assets/icons/Earthquake")['default']>
    'LazySvgoIconsEdgeCluster': LazyComponent<typeof import("../assets/icons/Edge-cluster")['default']>
    'LazySvgoIconsEdgeDevice': LazyComponent<typeof import("../assets/icons/Edge-device")['default']>
    'LazySvgoIconsEdgeEnhancement01': LazyComponent<typeof import("../assets/icons/Edge-enhancement--01")['default']>
    'LazySvgoIconsEdgeEnhancement02': LazyComponent<typeof import("../assets/icons/Edge-enhancement--02")['default']>
    'LazySvgoIconsEdgeEnhancement03': LazyComponent<typeof import("../assets/icons/Edge-enhancement--03")['default']>
    'LazySvgoIconsEdgeEnhancement': LazyComponent<typeof import("../assets/icons/Edge-enhancement")['default']>
    'LazySvgoIconsEdgeNodeAlt': LazyComponent<typeof import("../assets/icons/Edge-node--alt")['default']>
    'LazySvgoIconsEdgeNode': LazyComponent<typeof import("../assets/icons/Edge-node")['default']>
    'LazySvgoIconsEdgeService': LazyComponent<typeof import("../assets/icons/Edge-service")['default']>
    'LazySvgoIconsEditOff': LazyComponent<typeof import("../assets/icons/Edit--off")['default']>
    'LazySvgoIconsEdit': LazyComponent<typeof import("../assets/icons/Edit")['default']>
    'LazySvgoIconsEdtLoop': LazyComponent<typeof import("../assets/icons/Edt-loop")['default']>
    'LazySvgoIconsEducation': LazyComponent<typeof import("../assets/icons/Education")['default']>
    'LazySvgoIconsEmailNew': LazyComponent<typeof import("../assets/icons/Email--new")['default']>
    'LazySvgoIconsEmail': LazyComponent<typeof import("../assets/icons/Email")['default']>
    'LazySvgoIconsEncryption': LazyComponent<typeof import("../assets/icons/Encryption")['default']>
    'LazySvgoIconsEnergyRenewable': LazyComponent<typeof import("../assets/icons/Energy--renewable")['default']>
    'LazySvgoIconsEnterprise': LazyComponent<typeof import("../assets/icons/Enterprise")['default']>
    'LazySvgoIconsEnumerationDefinition': LazyComponent<typeof import("../assets/icons/Enumeration--definition")['default']>
    'LazySvgoIconsEnumerationUsage': LazyComponent<typeof import("../assets/icons/Enumeration--usage")['default']>
    'LazySvgoIconsEqualApproximately': LazyComponent<typeof import("../assets/icons/Equal--approximately")['default']>
    'LazySvgoIconsEqualizer': LazyComponent<typeof import("../assets/icons/Equalizer")['default']>
    'LazySvgoIconsErase3d': LazyComponent<typeof import("../assets/icons/Erase--3d")['default']>
    'LazySvgoIconsErase': LazyComponent<typeof import("../assets/icons/Erase")['default']>
    'LazySvgoIconsErrorFilled': LazyComponent<typeof import("../assets/icons/Error--filled")['default']>
    'LazySvgoIconsErrorOutline': LazyComponent<typeof import("../assets/icons/Error--outline")['default']>
    'LazySvgoIconsError': LazyComponent<typeof import("../assets/icons/Error")['default']>
    'LazySvgoIconsEventChange': LazyComponent<typeof import("../assets/icons/Event--change")['default']>
    'LazySvgoIconsEventIncident': LazyComponent<typeof import("../assets/icons/Event--incident")['default']>
    'LazySvgoIconsEventSchedule': LazyComponent<typeof import("../assets/icons/Event--schedule")['default']>
    'LazySvgoIconsEventWarning': LazyComponent<typeof import("../assets/icons/Event--warning")['default']>
    'LazySvgoIconsEvent': LazyComponent<typeof import("../assets/icons/Event")['default']>
    'LazySvgoIconsEventsAlt': LazyComponent<typeof import("../assets/icons/Events--alt")['default']>
    'LazySvgoIconsEvents': LazyComponent<typeof import("../assets/icons/Events")['default']>
    'LazySvgoIconsExamMode': LazyComponent<typeof import("../assets/icons/Exam-mode")['default']>
    'LazySvgoIconsExecutableProgram': LazyComponent<typeof import("../assets/icons/Executable-program")['default']>
    'LazySvgoIconsExit': LazyComponent<typeof import("../assets/icons/Exit")['default']>
    'LazySvgoIconsExpandAll': LazyComponent<typeof import("../assets/icons/Expand-all")['default']>
    'LazySvgoIconsExpandCategories': LazyComponent<typeof import("../assets/icons/Expand-categories")['default']>
    'LazySvgoIconsExplore': LazyComponent<typeof import("../assets/icons/Explore")['default']>
    'LazySvgoIconsExport': LazyComponent<typeof import("../assets/icons/Export")['default']>
    'LazySvgoIconsEyedropper': LazyComponent<typeof import("../assets/icons/Eyedropper")['default']>
    'LazySvgoIconsFaceActivatedAdd': LazyComponent<typeof import("../assets/icons/Face--activated--add")['default']>
    'LazySvgoIconsFaceActivatedFilled': LazyComponent<typeof import("../assets/icons/Face--activated--filled")['default']>
    'LazySvgoIconsFaceActivated': LazyComponent<typeof import("../assets/icons/Face--activated")['default']>
    'LazySvgoIconsFaceAdd': LazyComponent<typeof import("../assets/icons/Face--add")['default']>
    'LazySvgoIconsFaceCool': LazyComponent<typeof import("../assets/icons/Face--cool")['default']>
    'LazySvgoIconsFaceDissatisfiedFilled': LazyComponent<typeof import("../assets/icons/Face--dissatisfied--filled")['default']>
    'LazySvgoIconsFaceDissatisfied': LazyComponent<typeof import("../assets/icons/Face--dissatisfied")['default']>
    'LazySvgoIconsFaceDizzyFilled': LazyComponent<typeof import("../assets/icons/Face--dizzy--filled")['default']>
    'LazySvgoIconsFaceDizzy': LazyComponent<typeof import("../assets/icons/Face--dizzy")['default']>
    'LazySvgoIconsFaceMask': LazyComponent<typeof import("../assets/icons/Face--mask")['default']>
    'LazySvgoIconsFaceNeutralFilled': LazyComponent<typeof import("../assets/icons/Face--neutral--filled")['default']>
    'LazySvgoIconsFaceNeutral': LazyComponent<typeof import("../assets/icons/Face--neutral")['default']>
    'LazySvgoIconsFacePendingFilled': LazyComponent<typeof import("../assets/icons/Face--pending--filled")['default']>
    'LazySvgoIconsFacePending': LazyComponent<typeof import("../assets/icons/Face--pending")['default']>
    'LazySvgoIconsFaceSatisfiedFilled': LazyComponent<typeof import("../assets/icons/Face--satisfied--filled")['default']>
    'LazySvgoIconsFaceSatisfied': LazyComponent<typeof import("../assets/icons/Face--satisfied")['default']>
    'LazySvgoIconsFaceWinkFilled': LazyComponent<typeof import("../assets/icons/Face--wink--filled")['default']>
    'LazySvgoIconsFaceWink': LazyComponent<typeof import("../assets/icons/Face--wink")['default']>
    'LazySvgoIconsFactor': LazyComponent<typeof import("../assets/icons/Factor")['default']>
    'LazySvgoIconsFade': LazyComponent<typeof import("../assets/icons/Fade")['default']>
    'LazySvgoIconsFavoriteFilled': LazyComponent<typeof import("../assets/icons/Favorite--filled")['default']>
    'LazySvgoIconsFavoriteHalf': LazyComponent<typeof import("../assets/icons/Favorite--half")['default']>
    'LazySvgoIconsFavorite': LazyComponent<typeof import("../assets/icons/Favorite")['default']>
    'LazySvgoIconsFeatureMembershipFilled': LazyComponent<typeof import("../assets/icons/Feature-membership--filled")['default']>
    'LazySvgoIconsFeatureMembership': LazyComponent<typeof import("../assets/icons/Feature-membership")['default']>
    'LazySvgoIconsFeatureTyping': LazyComponent<typeof import("../assets/icons/Feature-typing")['default']>
    'LazySvgoIconsFetchUploadCloud': LazyComponent<typeof import("../assets/icons/Fetch-upload--cloud")['default']>
    'LazySvgoIconsFetchUpload': LazyComponent<typeof import("../assets/icons/Fetch-upload")['default']>
    'LazySvgoIconsFileStorage': LazyComponent<typeof import("../assets/icons/File-storage")['default']>
    'LazySvgoIconsFilterEdit': LazyComponent<typeof import("../assets/icons/Filter--edit")['default']>
    'LazySvgoIconsFilterRemove': LazyComponent<typeof import("../assets/icons/Filter--remove")['default']>
    'LazySvgoIconsFilterReset': LazyComponent<typeof import("../assets/icons/Filter--reset")['default']>
    'LazySvgoIconsFilter': LazyComponent<typeof import("../assets/icons/Filter")['default']>
    'LazySvgoIconsFinance': LazyComponent<typeof import("../assets/icons/Finance")['default']>
    'LazySvgoIconsFingerprintRecognition': LazyComponent<typeof import("../assets/icons/Fingerprint-recognition")['default']>
    'LazySvgoIconsFire': LazyComponent<typeof import("../assets/icons/Fire")['default']>
    'LazySvgoIconsFirewallClassic': LazyComponent<typeof import("../assets/icons/Firewall--classic")['default']>
    'LazySvgoIconsFirewall': LazyComponent<typeof import("../assets/icons/Firewall")['default']>
    'LazySvgoIconsFishMultiple': LazyComponent<typeof import("../assets/icons/Fish--multiple")['default']>
    'LazySvgoIconsFish': LazyComponent<typeof import("../assets/icons/Fish")['default']>
    'LazySvgoIconsFitToHeight': LazyComponent<typeof import("../assets/icons/Fit-to-height")['default']>
    'LazySvgoIconsFitToScreen': LazyComponent<typeof import("../assets/icons/Fit-to-screen")['default']>
    'LazySvgoIconsFitToWidth1': LazyComponent<typeof import("../assets/icons/Fit-to-width1")['default']>
    'LazySvgoIconsFlagFilled': LazyComponent<typeof import("../assets/icons/Flag--filled")['default']>
    'LazySvgoIconsFlag': LazyComponent<typeof import("../assets/icons/Flag")['default']>
    'LazySvgoIconsFlaggingTaxi': LazyComponent<typeof import("../assets/icons/Flagging-taxi")['default']>
    'LazySvgoIconsFlashFilled': LazyComponent<typeof import("../assets/icons/Flash--filled")['default']>
    'LazySvgoIconsFlashOffFilled': LazyComponent<typeof import("../assets/icons/Flash--off--filled")['default']>
    'LazySvgoIconsFlashOff': LazyComponent<typeof import("../assets/icons/Flash--off")['default']>
    'LazySvgoIconsFlash': LazyComponent<typeof import("../assets/icons/Flash")['default']>
    'LazySvgoIconsFlightInternational': LazyComponent<typeof import("../assets/icons/Flight--international")['default']>
    'LazySvgoIconsFlightRoster': LazyComponent<typeof import("../assets/icons/Flight--roster")['default']>
    'LazySvgoIconsFlightSchedule': LazyComponent<typeof import("../assets/icons/Flight--schedule")['default']>
    'LazySvgoIconsFloatingIp': LazyComponent<typeof import("../assets/icons/Floating-ip")['default']>
    'LazySvgoIconsFloodWarning': LazyComponent<typeof import("../assets/icons/Flood--warning")['default']>
    'LazySvgoIconsFlood': LazyComponent<typeof import("../assets/icons/Flood")['default']>
    'LazySvgoIconsFloorplan': LazyComponent<typeof import("../assets/icons/Floorplan")['default']>
    'LazySvgoIconsFlowConnection': LazyComponent<typeof import("../assets/icons/Flow--connection")['default']>
    'LazySvgoIconsFlowData': LazyComponent<typeof import("../assets/icons/Flow--data")['default']>
    'LazySvgoIconsFlowModeler': LazyComponent<typeof import("../assets/icons/Flow--modeler")['default']>
    'LazySvgoIconsFlowStreamReference': LazyComponent<typeof import("../assets/icons/Flow--stream--reference")['default']>
    'LazySvgoIconsFlowStream': LazyComponent<typeof import("../assets/icons/Flow--stream")['default']>
    'LazySvgoIconsFlowLogsVpc': LazyComponent<typeof import("../assets/icons/Flow-logs-vpc")['default']>
    'LazySvgoIconsFlow': LazyComponent<typeof import("../assets/icons/Flow")['default']>
    'LazySvgoIconsFog': LazyComponent<typeof import("../assets/icons/Fog")['default']>
    'LazySvgoIconsFolderAdd': LazyComponent<typeof import("../assets/icons/Folder--add")['default']>
    'LazySvgoIconsFolderDetailsReference': LazyComponent<typeof import("../assets/icons/Folder--details--reference")['default']>
    'LazySvgoIconsFolderDetails': LazyComponent<typeof import("../assets/icons/Folder--details")['default']>
    'LazySvgoIconsFolderMoveTo': LazyComponent<typeof import("../assets/icons/Folder--move-to")['default']>
    'LazySvgoIconsFolderOff': LazyComponent<typeof import("../assets/icons/Folder--off")['default']>
    'LazySvgoIconsFolderOpen': LazyComponent<typeof import("../assets/icons/Folder--open")['default']>
    'LazySvgoIconsFolderParent': LazyComponent<typeof import("../assets/icons/Folder--parent")['default']>
    'LazySvgoIconsFolderShared': LazyComponent<typeof import("../assets/icons/Folder--shared")['default']>
    'LazySvgoIconsFolder': LazyComponent<typeof import("../assets/icons/Folder")['default']>
    'LazySvgoIconsFolders': LazyComponent<typeof import("../assets/icons/Folders")['default']>
    'LazySvgoIconsForecastHail30': LazyComponent<typeof import("../assets/icons/Forecast--hail-30")['default']>
    'LazySvgoIconsForecastHail': LazyComponent<typeof import("../assets/icons/Forecast--hail")['default']>
    'LazySvgoIconsForecastLightning30': LazyComponent<typeof import("../assets/icons/Forecast--lightning-30")['default']>
    'LazySvgoIconsForecastLightning': LazyComponent<typeof import("../assets/icons/Forecast--lightning")['default']>
    'LazySvgoIconsForkNode': LazyComponent<typeof import("../assets/icons/Fork-node")['default']>
    'LazySvgoIconsFork': LazyComponent<typeof import("../assets/icons/Fork")['default']>
    'LazySvgoIconsForum': LazyComponent<typeof import("../assets/icons/Forum")['default']>
    'LazySvgoIconsForward10': LazyComponent<typeof import("../assets/icons/Forward--10")['default']>
    'LazySvgoIconsForward30': LazyComponent<typeof import("../assets/icons/Forward--30")['default']>
    'LazySvgoIconsForward5': LazyComponent<typeof import("../assets/icons/Forward--5")['default']>
    'LazySvgoIconsFragile': LazyComponent<typeof import("../assets/icons/Fragile")['default']>
    'LazySvgoIconsFriendship': LazyComponent<typeof import("../assets/icons/Friendship")['default']>
    'LazySvgoIconsFruitBowl': LazyComponent<typeof import("../assets/icons/Fruit-bowl")['default']>
    'LazySvgoIconsFunctionMath': LazyComponent<typeof import("../assets/icons/Function-math")['default']>
    'LazySvgoIconsFunction': LazyComponent<typeof import("../assets/icons/Function")['default']>
    'LazySvgoIconsFusionBlender': LazyComponent<typeof import("../assets/icons/Fusion-blender")['default']>
    'LazySvgoIconsGameConsole': LazyComponent<typeof import("../assets/icons/Game--console")['default']>
    'LazySvgoIconsGameWireless': LazyComponent<typeof import("../assets/icons/Game--wireless")['default']>
    'LazySvgoIconsGamification': LazyComponent<typeof import("../assets/icons/Gamification")['default']>
    'LazySvgoIconsGasStationFilled': LazyComponent<typeof import("../assets/icons/Gas-station--filled")['default']>
    'LazySvgoIconsGasStation': LazyComponent<typeof import("../assets/icons/Gas-station")['default']>
    'LazySvgoIconsGatewayApi': LazyComponent<typeof import("../assets/icons/Gateway--api")['default']>
    'LazySvgoIconsGatewayMail': LazyComponent<typeof import("../assets/icons/Gateway--mail")['default']>
    'LazySvgoIconsGatewayPublic': LazyComponent<typeof import("../assets/icons/Gateway--public")['default']>
    'LazySvgoIconsGatewaySecurity': LazyComponent<typeof import("../assets/icons/Gateway--security")['default']>
    'LazySvgoIconsGatewayUserAccess': LazyComponent<typeof import("../assets/icons/Gateway--user-access")['default']>
    'LazySvgoIconsGatewayVpn': LazyComponent<typeof import("../assets/icons/Gateway--vpn")['default']>
    'LazySvgoIconsGateway': LazyComponent<typeof import("../assets/icons/Gateway")['default']>
    'LazySvgoIconsGears': LazyComponent<typeof import("../assets/icons/Gears")['default']>
    'LazySvgoIconsGemReference': LazyComponent<typeof import("../assets/icons/Gem--reference")['default']>
    'LazySvgoIconsGem': LazyComponent<typeof import("../assets/icons/Gem")['default']>
    'LazySvgoIconsGenderFemale': LazyComponent<typeof import("../assets/icons/Gender--female")['default']>
    'LazySvgoIconsGenderMale': LazyComponent<typeof import("../assets/icons/Gender--male")['default']>
    'LazySvgoIconsGeneratePdf': LazyComponent<typeof import("../assets/icons/Generate-pdf")['default']>
    'LazySvgoIconsGif': LazyComponent<typeof import("../assets/icons/Gif")['default']>
    'LazySvgoIconsGift': LazyComponent<typeof import("../assets/icons/Gift")['default']>
    'LazySvgoIconsGlobalLoanAndTrial': LazyComponent<typeof import("../assets/icons/Global-loan-and-trial")['default']>
    'LazySvgoIconsGlobe': LazyComponent<typeof import("../assets/icons/Globe")['default']>
    'LazySvgoIconsGradient': LazyComponent<typeof import("../assets/icons/Gradient")['default']>
    'LazySvgoIconsGraphicalDataFlow': LazyComponent<typeof import("../assets/icons/Graphical-data-flow")['default']>
    'LazySvgoIconsGrid': LazyComponent<typeof import("../assets/icons/Grid")['default']>
    'LazySvgoIconsGroupAccess': LazyComponent<typeof import("../assets/icons/Group--access")['default']>
    'LazySvgoIconsGroupAccount': LazyComponent<typeof import("../assets/icons/Group--account")['default']>
    'LazySvgoIconsGroupPresentation': LazyComponent<typeof import("../assets/icons/Group--presentation")['default']>
    'LazySvgoIconsGroupResource': LazyComponent<typeof import("../assets/icons/Group--resource")['default']>
    'LazySvgoIconsGroupSecurity': LazyComponent<typeof import("../assets/icons/Group--security")['default']>
    'LazySvgoIconsGroupObjectsNew': LazyComponent<typeof import("../assets/icons/Group-objects--new")['default']>
    'LazySvgoIconsGroupObjectsSave': LazyComponent<typeof import("../assets/icons/Group-objects--save")['default']>
    'LazySvgoIconsGroupObjects': LazyComponent<typeof import("../assets/icons/Group-objects")['default']>
    'LazySvgoIconsGroup': LazyComponent<typeof import("../assets/icons/Group")['default']>
    'LazySvgoIconsGrowth': LazyComponent<typeof import("../assets/icons/Growth")['default']>
    'LazySvgoIconsGuiManagement': LazyComponent<typeof import("../assets/icons/Gui--management")['default']>
    'LazySvgoIconsGui': LazyComponent<typeof import("../assets/icons/Gui")['default']>
    'LazySvgoIconsH': LazyComponent<typeof import("../assets/icons/H")['default']>
    'LazySvgoIconsHL7Attributes': LazyComponent<typeof import("../assets/icons/HL7-attributes")['default']>
    'LazySvgoIconsHail': LazyComponent<typeof import("../assets/icons/Hail")['default']>
    'LazySvgoIconsHangingProtocol': LazyComponent<typeof import("../assets/icons/Hanging-protocol")['default']>
    'LazySvgoIconsHarbor': LazyComponent<typeof import("../assets/icons/Harbor")['default']>
    'LazySvgoIconsHardwareSecurityModule': LazyComponent<typeof import("../assets/icons/Hardware-security-module")['default']>
    'LazySvgoIconsHashtag': LazyComponent<typeof import("../assets/icons/Hashtag")['default']>
    'LazySvgoIconsHazeNight': LazyComponent<typeof import("../assets/icons/Haze--night")['default']>
    'LazySvgoIconsHaze': LazyComponent<typeof import("../assets/icons/Haze")['default']>
    'LazySvgoIconsHdFilled': LazyComponent<typeof import("../assets/icons/Hd--filled")['default']>
    'LazySvgoIconsHd': LazyComponent<typeof import("../assets/icons/Hd")['default']>
    'LazySvgoIconsHdr': LazyComponent<typeof import("../assets/icons/Hdr")['default']>
    'LazySvgoIconsHeadphones': LazyComponent<typeof import("../assets/icons/Headphones")['default']>
    'LazySvgoIconsHeadset': LazyComponent<typeof import("../assets/icons/Headset")['default']>
    'LazySvgoIconsHealthCross': LazyComponent<typeof import("../assets/icons/Health-cross")['default']>
    'LazySvgoIconsHearing': LazyComponent<typeof import("../assets/icons/Hearing")['default']>
    'LazySvgoIconsHeatMap02': LazyComponent<typeof import("../assets/icons/Heat-map--02")['default']>
    'LazySvgoIconsHeatMap03': LazyComponent<typeof import("../assets/icons/Heat-map--03")['default']>
    'LazySvgoIconsHeatMapStocks': LazyComponent<typeof import("../assets/icons/Heat-map--stocks")['default']>
    'LazySvgoIconsHeatMap': LazyComponent<typeof import("../assets/icons/Heat-map")['default']>
    'LazySvgoIconsHelicopter': LazyComponent<typeof import("../assets/icons/Helicopter")['default']>
    'LazySvgoIconsHelpFilled': LazyComponent<typeof import("../assets/icons/Help--filled")['default']>
    'LazySvgoIconsHelpDesk': LazyComponent<typeof import("../assets/icons/Help-desk")['default']>
    'LazySvgoIconsHelp': LazyComponent<typeof import("../assets/icons/Help")['default']>
    'LazySvgoIconsHexagonOutline': LazyComponent<typeof import("../assets/icons/Hexagon--outline")['default']>
    'LazySvgoIconsHexagonSolid': LazyComponent<typeof import("../assets/icons/Hexagon--solid")['default']>
    'LazySvgoIconsHexagonVerticalOutline': LazyComponent<typeof import("../assets/icons/Hexagon--vertical--outline")['default']>
    'LazySvgoIconsHexagonVerticalSolid': LazyComponent<typeof import("../assets/icons/Hexagon--vertical--solid")['default']>
    'LazySvgoIconsHintonPlot': LazyComponent<typeof import("../assets/icons/Hinton-plot")['default']>
    'LazySvgoIconsHoleFillingCursor': LazyComponent<typeof import("../assets/icons/Hole-filling--cursor")['default']>
    'LazySvgoIconsHoleFilling': LazyComponent<typeof import("../assets/icons/Hole-filling")['default']>
    'LazySvgoIconsHome': LazyComponent<typeof import("../assets/icons/Home")['default']>
    'LazySvgoIconsHorizontalView': LazyComponent<typeof import("../assets/icons/Horizontal-view")['default']>
    'LazySvgoIconsHospitalBed': LazyComponent<typeof import("../assets/icons/Hospital-bed")['default']>
    'LazySvgoIconsHospital': LazyComponent<typeof import("../assets/icons/Hospital")['default']>
    'LazySvgoIconsHotel': LazyComponent<typeof import("../assets/icons/Hotel")['default']>
    'LazySvgoIconsHourglass': LazyComponent<typeof import("../assets/icons/Hourglass")['default']>
    'LazySvgoIconsHtmlReference': LazyComponent<typeof import("../assets/icons/Html--reference")['default']>
    'LazySvgoIconsHtml': LazyComponent<typeof import("../assets/icons/Html")['default']>
    'LazySvgoIconsHttp': LazyComponent<typeof import("../assets/icons/Http")['default']>
    'LazySvgoIconsHumidityAlt': LazyComponent<typeof import("../assets/icons/Humidity--alt")['default']>
    'LazySvgoIconsHumidity': LazyComponent<typeof import("../assets/icons/Humidity")['default']>
    'LazySvgoIconsHurricane': LazyComponent<typeof import("../assets/icons/Hurricane")['default']>
    'LazySvgoIconsHybridNetworkingAlt': LazyComponent<typeof import("../assets/icons/Hybrid-networking--alt")['default']>
    'LazySvgoIconsHybridNetworking': LazyComponent<typeof import("../assets/icons/Hybrid-networking")['default']>
    'LazySvgoIconsIBMAiOnZ': LazyComponent<typeof import("../assets/icons/IBM--ai-on-z")['default']>
    'LazySvgoIconsIBMAiopsInsights': LazyComponent<typeof import("../assets/icons/IBM--aiops-insights")['default']>
    'LazySvgoIconsIBMBluepay': LazyComponent<typeof import("../assets/icons/IBM--bluepay")['default']>
    'LazySvgoIconsIBMCloudant': LazyComponent<typeof import("../assets/icons/IBM--cloudant")['default']>
    'LazySvgoIconsIBMContentServices': LazyComponent<typeof import("../assets/icons/IBM--content-services")['default']>
    'LazySvgoIconsIBMDataProductExchange': LazyComponent<typeof import("../assets/icons/IBM--data-product-exchange")['default']>
    'LazySvgoIconsIBMDataReplication': LazyComponent<typeof import("../assets/icons/IBM--data-replication")['default']>
    'LazySvgoIconsIBMDatastage': LazyComponent<typeof import("../assets/icons/IBM--datastage")['default']>
    'LazySvgoIconsIBMDb2Alt': LazyComponent<typeof import("../assets/icons/IBM--db2--alt")['default']>
    'LazySvgoIconsIBMDb2Warehouse': LazyComponent<typeof import("../assets/icons/IBM--db2-warehouse")['default']>
    'LazySvgoIconsIBMDb2': LazyComponent<typeof import("../assets/icons/IBM--db2")['default']>
    'LazySvgoIconsIBMDynamicRouteServer': LazyComponent<typeof import("../assets/icons/IBM--dynamic-route-server")['default']>
    'LazySvgoIconsIBMEloAutomotiveCompliance': LazyComponent<typeof import("../assets/icons/IBM--elo--automotive-compliance")['default']>
    'LazySvgoIconsIBMEloEngineeringInsights': LazyComponent<typeof import("../assets/icons/IBM--elo--engineering-insights")['default']>
    'LazySvgoIconsIBMEloMethodComposer': LazyComponent<typeof import("../assets/icons/IBM--elo--method-composer")['default']>
    'LazySvgoIconsIBMEloPublishing': LazyComponent<typeof import("../assets/icons/IBM--elo--publishing")['default']>
    'LazySvgoIconsIBMEngineeringLifecycleMgmt': LazyComponent<typeof import("../assets/icons/IBM--engineering-lifecycle-mgmt")['default']>
    'LazySvgoIconsIBMEngineeringRequirementsDoorsNext': LazyComponent<typeof import("../assets/icons/IBM--engineering-requirements-doors-next")['default']>
    'LazySvgoIconsIBMEngineeringSystemsDesignRhapsodyModelManager': LazyComponent<typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-model-manager")['default']>
    'LazySvgoIconsIBMEngineeringSystemsDesignRhapsodySn1': LazyComponent<typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-sn1")['default']>
    'LazySvgoIconsIBMEngineeringSystemsDesignRhapsodySn2': LazyComponent<typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-sn2")['default']>
    'LazySvgoIconsIBMEngineeringSystemsDesignRhapsody': LazyComponent<typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody")['default']>
    'LazySvgoIconsIBMEngineeringTestMgmt': LazyComponent<typeof import("../assets/icons/IBM--engineering-test-mgmt")['default']>
    'LazySvgoIconsIBMEngineeringWorkflowMgmt': LazyComponent<typeof import("../assets/icons/IBM--engineering-workflow-mgmt")['default']>
    'LazySvgoIconsIBMEventAutomation': LazyComponent<typeof import("../assets/icons/IBM--event-automation")['default']>
    'LazySvgoIconsIBMEventEndpointMgmt': LazyComponent<typeof import("../assets/icons/IBM--event-endpoint-mgmt")['default']>
    'LazySvgoIconsIBMEventProcessing': LazyComponent<typeof import("../assets/icons/IBM--event-processing")['default']>
    'LazySvgoIconsIBMEventStreams': LazyComponent<typeof import("../assets/icons/IBM--event-streams")['default']>
    'LazySvgoIconsIBMGcm': LazyComponent<typeof import("../assets/icons/IBM--gcm")['default']>
    'LazySvgoIconsIBMIbv': LazyComponent<typeof import("../assets/icons/IBM--ibv")['default']>
    'LazySvgoIconsIBMInstana': LazyComponent<typeof import("../assets/icons/IBM--instana")['default']>
    'LazySvgoIconsIBMJrs': LazyComponent<typeof import("../assets/icons/IBM--jrs")['default']>
    'LazySvgoIconsIBMLaunchpadS4': LazyComponent<typeof import("../assets/icons/IBM--launchpad-s4")['default']>
    'LazySvgoIconsIBMLpa': LazyComponent<typeof import("../assets/icons/IBM--lpa")['default']>
    'LazySvgoIconsIBMLqe': LazyComponent<typeof import("../assets/icons/IBM--lqe")['default']>
    'LazySvgoIconsIBMMatch360': LazyComponent<typeof import("../assets/icons/IBM--match-360")['default']>
    'LazySvgoIconsIBMMq': LazyComponent<typeof import("../assets/icons/IBM--mq")['default']>
    'LazySvgoIconsIBMOpenEnterpriseLanguages': LazyComponent<typeof import("../assets/icons/IBM--open-enterprise-languages")['default']>
    'LazySvgoIconsIBMOpenshiftContainerPlatformOnVpcForRegulatedIndustries': LazyComponent<typeof import("../assets/icons/IBM--openshift-container-platform-on-vpc-for-regulated-industries")['default']>
    'LazySvgoIconsIBMPowerVsPrivateCloud': LazyComponent<typeof import("../assets/icons/IBM--power-vs-private-cloud")['default']>
    'LazySvgoIconsIBMPowerVs': LazyComponent<typeof import("../assets/icons/IBM--power-vs")['default']>
    'LazySvgoIconsIBMPowerWithVpc': LazyComponent<typeof import("../assets/icons/IBM--power-with-vpc")['default']>
    'LazySvgoIconsIBMPrivatePathServices': LazyComponent<typeof import("../assets/icons/IBM--private-path-services")['default']>
    'LazySvgoIconsIBMProcessMining': LazyComponent<typeof import("../assets/icons/IBM--process-mining")['default']>
    'LazySvgoIconsIBMSaasConsole': LazyComponent<typeof import("../assets/icons/IBM--saas-console")['default']>
    'LazySvgoIconsIBMSapOnPower': LazyComponent<typeof import("../assets/icons/IBM--sap-on-power")['default']>
    'LazySvgoIconsIBMSecureInfrastructureOnVpcForRegulatedIndustries': LazyComponent<typeof import("../assets/icons/IBM--secure-infrastructure-on-vpc-for-regulated-industries")['default']>
    'LazySvgoIconsIBMTelehealth': LazyComponent<typeof import("../assets/icons/IBM--telehealth")['default']>
    'LazySvgoIconsIBMTenet': LazyComponent<typeof import("../assets/icons/IBM--tenet")['default']>
    'LazySvgoIconsIBMToolchain': LazyComponent<typeof import("../assets/icons/IBM--toolchain")['default']>
    'LazySvgoIconsIBMTurbonomic': LazyComponent<typeof import("../assets/icons/IBM--turbonomic")['default']>
    'LazySvgoIconsIBMVpnForVpc': LazyComponent<typeof import("../assets/icons/IBM--vpn-for-vpc")['default']>
    'LazySvgoIconsIBMVsiOnVpcForRegulatedIndustries': LazyComponent<typeof import("../assets/icons/IBM--vsi-on-vpc-for-regulated-industries")['default']>
    'LazySvgoIconsIBMWaziDeploy': LazyComponent<typeof import("../assets/icons/IBM--wazi-deploy")['default']>
    'LazySvgoIconsIBMCloudHSM': LazyComponent<typeof import("../assets/icons/IBM-cloud--HSM")['default']>
    'LazySvgoIconsIBMCloudAppId': LazyComponent<typeof import("../assets/icons/IBM-cloud--app-id")['default']>
    'LazySvgoIconsIBMCloudBareMetalServer': LazyComponent<typeof import("../assets/icons/IBM-cloud--bare-metal-server")['default']>
    'LazySvgoIconsIBMCloudBareMetalServersVpc': LazyComponent<typeof import("../assets/icons/IBM-cloud--bare-metal-servers-vpc")['default']>
    'LazySvgoIconsIBMCloudCitrixDaas': LazyComponent<typeof import("../assets/icons/IBM-cloud--citrix-daas")['default']>
    'LazySvgoIconsIBMCloudContinuousDelivery': LazyComponent<typeof import("../assets/icons/IBM-cloud--continuous-delivery")['default']>
    'LazySvgoIconsIBMCloudDedicatedHost': LazyComponent<typeof import("../assets/icons/IBM-cloud--dedicated-host")['default']>
    'LazySvgoIconsIBMCloudDirectLink1Connect': LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-1--connect")['default']>
    'LazySvgoIconsIBMCloudDirectLink1DedicatedHosting': LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-1--dedicated-hosting")['default']>
    'LazySvgoIconsIBMCloudDirectLink1Dedicated': LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-1--dedicated")['default']>
    'LazySvgoIconsIBMCloudDirectLink1Exchange': LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-1--exchange")['default']>
    'LazySvgoIconsIBMCloudDirectLink2Connect': LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-2--connect")['default']>
    'LazySvgoIconsIBMCloudDirectLink2DedicatedHosting': LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-2--dedicated-hosting")['default']>
    'LazySvgoIconsIBMCloudDirectLink2Dedicated': LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-2--dedicated")['default']>
    'LazySvgoIconsIBMCloudEventNotification': LazyComponent<typeof import("../assets/icons/IBM-cloud--event-notification")['default']>
    'LazySvgoIconsIBMCloudEventStreams': LazyComponent<typeof import("../assets/icons/IBM-cloud--event-streams")['default']>
    'LazySvgoIconsIBMCloudForEducation': LazyComponent<typeof import("../assets/icons/IBM-cloud--for-education")['default']>
    'LazySvgoIconsIBMCloudHpc': LazyComponent<typeof import("../assets/icons/IBM-cloud--hpc")['default']>
    'LazySvgoIconsIBMCloudHyperProtectCryptoServices': LazyComponent<typeof import("../assets/icons/IBM-cloud--hyper-protect-crypto-services")['default']>
    'LazySvgoIconsIBMCloudHyperProtectDbaas': LazyComponent<typeof import("../assets/icons/IBM-cloud--hyper-protect-dbaas")['default']>
    'LazySvgoIconsIBMCloudHyperProtectVs': LazyComponent<typeof import("../assets/icons/IBM-cloud--hyper-protect-vs")['default']>
    'LazySvgoIconsIBMCloudInternetServices': LazyComponent<typeof import("../assets/icons/IBM-cloud--internet-services")['default']>
    'LazySvgoIconsIBMCloudIpsecVpn': LazyComponent<typeof import("../assets/icons/IBM-cloud--ipsec-vpn")['default']>
    'LazySvgoIconsIBMCloudKeyProtect': LazyComponent<typeof import("../assets/icons/IBM-cloud--key-protect")['default']>
    'LazySvgoIconsIBMCloudKubernetesService': LazyComponent<typeof import("../assets/icons/IBM-cloud--kubernetes-service")['default']>
    'LazySvgoIconsIBMCloudLogging': LazyComponent<typeof import("../assets/icons/IBM-cloud--logging")['default']>
    'LazySvgoIconsIBMCloudMassDataMigration': LazyComponent<typeof import("../assets/icons/IBM-cloud--mass-data-migration")['default']>
    'LazySvgoIconsIBMCloudPal': LazyComponent<typeof import("../assets/icons/IBM-cloud--pal")['default']>
    'LazySvgoIconsIBMCloudPrivilegedAccessGateway': LazyComponent<typeof import("../assets/icons/IBM-cloud--privileged-access-gateway")['default']>
    'LazySvgoIconsIBMCloudProjects': LazyComponent<typeof import("../assets/icons/IBM-cloud--projects")['default']>
    'LazySvgoIconsIBMCloudResiliency': LazyComponent<typeof import("../assets/icons/IBM-cloud--resiliency")['default']>
    'LazySvgoIconsIBMCloudSecretsManager': LazyComponent<typeof import("../assets/icons/IBM-cloud--secrets-manager")['default']>
    'LazySvgoIconsIBMCloudSecurityComplianceCenterWorkloadProtection': LazyComponent<typeof import("../assets/icons/IBM-cloud--security-compliance-center-workload-protection")['default']>
    'LazySvgoIconsIBMCloudSecurityComplianceCenter': LazyComponent<typeof import("../assets/icons/IBM-cloud--security-compliance-center")['default']>
    'LazySvgoIconsIBMCloudSubnets': LazyComponent<typeof import("../assets/icons/IBM-cloud--subnets")['default']>
    'LazySvgoIconsIBMCloudSysdigSecure': LazyComponent<typeof import("../assets/icons/IBM-cloud--sysdig-secure")['default']>
    'LazySvgoIconsIBMCloudTransitGateway': LazyComponent<typeof import("../assets/icons/IBM-cloud--transit-gateway")['default']>
    'LazySvgoIconsIBMCloudVirtualServerClassic': LazyComponent<typeof import("../assets/icons/IBM-cloud--virtual-server-classic")['default']>
    'LazySvgoIconsIBMCloudVirtualServerVpc': LazyComponent<typeof import("../assets/icons/IBM-cloud--virtual-server-vpc")['default']>
    'LazySvgoIconsIBMCloudVpcEndpoints': LazyComponent<typeof import("../assets/icons/IBM-cloud--vpc-endpoints")['default']>
    'LazySvgoIconsIBMCloudVpc': LazyComponent<typeof import("../assets/icons/IBM-cloud--vpc")['default']>
    'LazySvgoIconsIBMCloudPakMANTAAutomatedDataLineage': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--MANTA-automated-data-lineage")['default']>
    'LazySvgoIconsIBMCloudPakApplications': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--applications")['default']>
    'LazySvgoIconsIBMCloudPakBusinessAutomation': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--business-automation")['default']>
    'LazySvgoIconsIBMCloudPakData': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--data")['default']>
    'LazySvgoIconsIBMCloudPakIntegration': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--integration")['default']>
    'LazySvgoIconsIBMCloudPakMulticloudMgmt': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--multicloud-mgmt")['default']>
    'LazySvgoIconsIBMCloudPakNetezza': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--netezza")['default']>
    'LazySvgoIconsIBMCloudPakNetworkAutomation': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--network-automation")['default']>
    'LazySvgoIconsIBMCloudPakSecurity': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--security")['default']>
    'LazySvgoIconsIBMCloudPakSystem': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--system")['default']>
    'LazySvgoIconsIBMCloudPakWatsonAiops': LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--watson-aiops")['default']>
    'LazySvgoIconsIBMCloud': LazyComponent<typeof import("../assets/icons/IBM-cloud")['default']>
    'LazySvgoIconsIBMSecurityServices': LazyComponent<typeof import("../assets/icons/IBM-security--services")['default']>
    'LazySvgoIconsIBMSecurity': LazyComponent<typeof import("../assets/icons/IBM-security")['default']>
    'LazySvgoIconsIBMWatsonDiscovery': LazyComponent<typeof import("../assets/icons/IBM-watson--discovery")['default']>
    'LazySvgoIconsIBMWatsonKnowledgeCatalog': LazyComponent<typeof import("../assets/icons/IBM-watson--knowledge-catalog")['default']>
    'LazySvgoIconsIBMWatsonKnowledgeStudio': LazyComponent<typeof import("../assets/icons/IBM-watson--knowledge-studio")['default']>
    'LazySvgoIconsIBMWatsonLanguageTranslator': LazyComponent<typeof import("../assets/icons/IBM-watson--language-translator")['default']>
    'LazySvgoIconsIBMWatsonMachineLearning': LazyComponent<typeof import("../assets/icons/IBM-watson--machine-learning")['default']>
    'LazySvgoIconsIBMWatsonNaturalLanguageClassifier': LazyComponent<typeof import("../assets/icons/IBM-watson--natural-language-classifier")['default']>
    'LazySvgoIconsIBMWatsonNaturalLanguageUnderstanding': LazyComponent<typeof import("../assets/icons/IBM-watson--natural-language-understanding")['default']>
    'LazySvgoIconsIBMWatsonOpenscale': LazyComponent<typeof import("../assets/icons/IBM-watson--openscale")['default']>
    'LazySvgoIconsIBMWatsonOrders1': LazyComponent<typeof import("../assets/icons/IBM-watson--orders-1")['default']>
    'LazySvgoIconsIBMWatsonOrders': LazyComponent<typeof import("../assets/icons/IBM-watson--orders")['default']>
    'LazySvgoIconsIBMWatsonQuery': LazyComponent<typeof import("../assets/icons/IBM-watson--query")['default']>
    'LazySvgoIconsIBMWatsonSpeechToText': LazyComponent<typeof import("../assets/icons/IBM-watson--speech-to-text")['default']>
    'LazySvgoIconsIBMWatsonStudio': LazyComponent<typeof import("../assets/icons/IBM-watson--studio")['default']>
    'LazySvgoIconsIBMWatsonTextToSpeech': LazyComponent<typeof import("../assets/icons/IBM-watson--text-to-speech")['default']>
    'LazySvgoIconsIBMWatsonToneAnalyzer': LazyComponent<typeof import("../assets/icons/IBM-watson--tone-analyzer")['default']>
    'LazySvgoIconsIBMWatsonxAssistant': LazyComponent<typeof import("../assets/icons/IBM-watsonx--assistant")['default']>
    'LazySvgoIconsIBMWatsonxCodeAssistantForZRefactor': LazyComponent<typeof import("../assets/icons/IBM-watsonx--code-assistant-for-z--refactor")['default']>
    'LazySvgoIconsIBMWatsonxCodeAssistantForZ': LazyComponent<typeof import("../assets/icons/IBM-watsonx--code-assistant-for-z")['default']>
    'LazySvgoIconsIBMWatsonxCodeAssistant': LazyComponent<typeof import("../assets/icons/IBM-watsonx--code-assistant")['default']>
    'LazySvgoIconsIBMWatsonxOrchestrate': LazyComponent<typeof import("../assets/icons/IBM-watsonx--orchestrate")['default']>
    'LazySvgoIconsIBMZCloudModStack': LazyComponent<typeof import("../assets/icons/IBM-z--cloud-mod-stack")['default']>
    'LazySvgoIconsIBMZEnvironmentsDevSecOps': LazyComponent<typeof import("../assets/icons/IBM-z--environments-dev-sec-ops")['default']>
    'LazySvgoIconsIBMZProcessorCapacityReference': LazyComponent<typeof import("../assets/icons/IBM-z--processor-capacity-reference")['default']>
    'LazySvgoIconsIBMZCloudProvisioning': LazyComponent<typeof import("../assets/icons/IBM-z-cloud--provisioning")['default']>
    'LazySvgoIconsIBMZOsAiControlInterface': LazyComponent<typeof import("../assets/icons/IBM-z-os--ai-control-interface")['default']>
    'LazySvgoIconsIBMZOsContainers': LazyComponent<typeof import("../assets/icons/IBM-z-os--containers")['default']>
    'LazySvgoIconsIBMZOsPackageManager': LazyComponent<typeof import("../assets/icons/IBM-z-os--package-manager")['default']>
    'LazySvgoIconsIBMZOs': LazyComponent<typeof import("../assets/icons/IBM-z-os")['default']>
    'LazySvgoIconsIP': LazyComponent<typeof import("../assets/icons/IP")['default']>
    'LazySvgoIconsIca2d': LazyComponent<typeof import("../assets/icons/Ica-2d")['default']>
    'LazySvgoIconsIceAccretion': LazyComponent<typeof import("../assets/icons/Ice--accretion")['default']>
    'LazySvgoIconsIceVision': LazyComponent<typeof import("../assets/icons/Ice--vision")['default']>
    'LazySvgoIconsIdManagement': LazyComponent<typeof import("../assets/icons/Id-management")['default']>
    'LazySvgoIconsId': LazyComponent<typeof import("../assets/icons/Id")['default']>
    'LazySvgoIconsIdea': LazyComponent<typeof import("../assets/icons/Idea")['default']>
    'LazySvgoIconsIdentification': LazyComponent<typeof import("../assets/icons/Identification")['default']>
    'LazySvgoIconsImageCopy': LazyComponent<typeof import("../assets/icons/Image--copy")['default']>
    'LazySvgoIconsImageMedical': LazyComponent<typeof import("../assets/icons/Image--medical")['default']>
    'LazySvgoIconsImageReference': LazyComponent<typeof import("../assets/icons/Image--reference")['default']>
    'LazySvgoIconsImageSearchAlt': LazyComponent<typeof import("../assets/icons/Image--search--alt")['default']>
    'LazySvgoIconsImageSearch': LazyComponent<typeof import("../assets/icons/Image--search")['default']>
    'LazySvgoIconsImageAvailabilityLocal': LazyComponent<typeof import("../assets/icons/Image-availability--local")['default']>
    'LazySvgoIconsImageAvailabilityRetrieving': LazyComponent<typeof import("../assets/icons/Image-availability--retrieving")['default']>
    'LazySvgoIconsImageAvailabilityUnavailable': LazyComponent<typeof import("../assets/icons/Image-availability--unavailable")['default']>
    'LazySvgoIconsImageService': LazyComponent<typeof import("../assets/icons/Image-service")['default']>
    'LazySvgoIconsImageStoreLocal': LazyComponent<typeof import("../assets/icons/Image-store--local")['default']>
    'LazySvgoIconsImage': LazyComponent<typeof import("../assets/icons/Image")['default']>
    'LazySvgoIconsImportExport': LazyComponent<typeof import("../assets/icons/Import-export")['default']>
    'LazySvgoIconsImproveRelevance': LazyComponent<typeof import("../assets/icons/Improve-relevance")['default']>
    'LazySvgoIconsInProgressError': LazyComponent<typeof import("../assets/icons/In-progress--error")['default']>
    'LazySvgoIconsInProgressWarning': LazyComponent<typeof import("../assets/icons/In-progress--warning")['default']>
    'LazySvgoIconsInProgress': LazyComponent<typeof import("../assets/icons/In-progress")['default']>
    'LazySvgoIconsIncompleteCancel': LazyComponent<typeof import("../assets/icons/Incomplete--cancel")['default']>
    'LazySvgoIconsIncompleteError': LazyComponent<typeof import("../assets/icons/Incomplete--error")['default']>
    'LazySvgoIconsIncompleteNormal': LazyComponent<typeof import("../assets/icons/Incomplete--normal")['default']>
    'LazySvgoIconsIncompleteWarning': LazyComponent<typeof import("../assets/icons/Incomplete--warning")['default']>
    'LazySvgoIconsIncomplete': LazyComponent<typeof import("../assets/icons/Incomplete")['default']>
    'LazySvgoIconsIncreaseLevel': LazyComponent<typeof import("../assets/icons/Increase-level")['default']>
    'LazySvgoIconsIndustry': LazyComponent<typeof import("../assets/icons/Industry")['default']>
    'LazySvgoIconsInfinitySymbol': LazyComponent<typeof import("../assets/icons/Infinity-symbol")['default']>
    'LazySvgoIconsInformationDisabled': LazyComponent<typeof import("../assets/icons/Information--disabled")['default']>
    'LazySvgoIconsInformationFilled': LazyComponent<typeof import("../assets/icons/Information--filled")['default']>
    'LazySvgoIconsInformationSquareFilled': LazyComponent<typeof import("../assets/icons/Information--square--filled")['default']>
    'LazySvgoIconsInformationSquare': LazyComponent<typeof import("../assets/icons/Information--square")['default']>
    'LazySvgoIconsInformation': LazyComponent<typeof import("../assets/icons/Information")['default']>
    'LazySvgoIconsInfrastructureClassic': LazyComponent<typeof import("../assets/icons/Infrastructure--classic")['default']>
    'LazySvgoIconsInsertPage': LazyComponent<typeof import("../assets/icons/Insert--page")['default']>
    'LazySvgoIconsInsertSyntax': LazyComponent<typeof import("../assets/icons/Insert-syntax")['default']>
    'LazySvgoIconsInsert': LazyComponent<typeof import("../assets/icons/Insert")['default']>
    'LazySvgoIconsInspection': LazyComponent<typeof import("../assets/icons/Inspection")['default']>
    'LazySvgoIconsInstanceBx': LazyComponent<typeof import("../assets/icons/Instance--bx")['default']>
    'LazySvgoIconsInstanceClassic': LazyComponent<typeof import("../assets/icons/Instance--classic")['default']>
    'LazySvgoIconsInstanceCx': LazyComponent<typeof import("../assets/icons/Instance--cx")['default']>
    'LazySvgoIconsInstanceMx': LazyComponent<typeof import("../assets/icons/Instance--mx")['default']>
    'LazySvgoIconsInstanceVirtual': LazyComponent<typeof import("../assets/icons/Instance--virtual")['default']>
    'LazySvgoIconsIntegration': LazyComponent<typeof import("../assets/icons/Integration")['default']>
    'LazySvgoIconsIntentRequestActive': LazyComponent<typeof import("../assets/icons/Intent-request--active")['default']>
    'LazySvgoIconsIntentRequestCreate': LazyComponent<typeof import("../assets/icons/Intent-request--create")['default']>
    'LazySvgoIconsIntentRequestHeal': LazyComponent<typeof import("../assets/icons/Intent-request--heal")['default']>
    'LazySvgoIconsIntentRequestInactive': LazyComponent<typeof import("../assets/icons/Intent-request--inactive")['default']>
    'LazySvgoIconsIntentRequestScaleIn': LazyComponent<typeof import("../assets/icons/Intent-request--scale-in")['default']>
    'LazySvgoIconsIntentRequestScaleOut': LazyComponent<typeof import("../assets/icons/Intent-request--scale-out")['default']>
    'LazySvgoIconsIntentRequestUninstall': LazyComponent<typeof import("../assets/icons/Intent-request--uninstall")['default']>
    'LazySvgoIconsInteractions': LazyComponent<typeof import("../assets/icons/Interactions")['default']>
    'LazySvgoIconsInteractiveSegmentationCursor': LazyComponent<typeof import("../assets/icons/Interactive-segmentation-cursor")['default']>
    'LazySvgoIconsInterfaceUsage': LazyComponent<typeof import("../assets/icons/Interface--usage")['default']>
    'LazySvgoIconsIntersect': LazyComponent<typeof import("../assets/icons/Intersect")['default']>
    'LazySvgoIconsIntrusionPrevention': LazyComponent<typeof import("../assets/icons/Intrusion-prevention")['default']>
    'LazySvgoIconsInventoryManagement': LazyComponent<typeof import("../assets/icons/Inventory-management")['default']>
    'LazySvgoIconsIotConnect': LazyComponent<typeof import("../assets/icons/Iot--connect")['default']>
    'LazySvgoIconsIotPlatform': LazyComponent<typeof import("../assets/icons/Iot--platform")['default']>
    'LazySvgoIconsIsoFilled': LazyComponent<typeof import("../assets/icons/Iso--filled")['default']>
    'LazySvgoIconsIsoOutline': LazyComponent<typeof import("../assets/icons/Iso--outline")['default']>
    'LazySvgoIconsIso': LazyComponent<typeof import("../assets/icons/Iso")['default']>
    'LazySvgoIconsJoinFull': LazyComponent<typeof import("../assets/icons/Join--full")['default']>
    'LazySvgoIconsJoinInner': LazyComponent<typeof import("../assets/icons/Join--inner")['default']>
    'LazySvgoIconsJoinLeft': LazyComponent<typeof import("../assets/icons/Join--left")['default']>
    'LazySvgoIconsJoinOuter': LazyComponent<typeof import("../assets/icons/Join--outer")['default']>
    'LazySvgoIconsJoinRight': LazyComponent<typeof import("../assets/icons/Join--right")['default']>
    'LazySvgoIconsJoinNode': LazyComponent<typeof import("../assets/icons/Join-node")['default']>
    'LazySvgoIconsJpg': LazyComponent<typeof import("../assets/icons/Jpg")['default']>
    'LazySvgoIconsJsError': LazyComponent<typeof import("../assets/icons/Js-error")['default']>
    'LazySvgoIconsJsonReference': LazyComponent<typeof import("../assets/icons/Json--reference")['default']>
    'LazySvgoIconsJson': LazyComponent<typeof import("../assets/icons/Json")['default']>
    'LazySvgoIconsJumpLink': LazyComponent<typeof import("../assets/icons/Jump-link")['default']>
    'LazySvgoIconsKEY': LazyComponent<typeof import("../assets/icons/KEY")['default']>
    'LazySvgoIconsKeepDry': LazyComponent<typeof import("../assets/icons/Keep-dry")['default']>
    'LazySvgoIconsKeyboard': LazyComponent<typeof import("../assets/icons/Keyboard")['default']>
    'LazySvgoIconsKubelet': LazyComponent<typeof import("../assets/icons/Kubelet")['default']>
    'LazySvgoIconsKubernetesControlPlaneNode': LazyComponent<typeof import("../assets/icons/Kubernetes--control-plane-node")['default']>
    'LazySvgoIconsKubernetesIpAddress': LazyComponent<typeof import("../assets/icons/Kubernetes--ip-address")['default']>
    'LazySvgoIconsKubernetesOperator': LazyComponent<typeof import("../assets/icons/Kubernetes--operator")['default']>
    'LazySvgoIconsKubernetesPod': LazyComponent<typeof import("../assets/icons/Kubernetes--pod")['default']>
    'LazySvgoIconsKubernetesWorkerNode': LazyComponent<typeof import("../assets/icons/Kubernetes--worker-node")['default']>
    'LazySvgoIconsKubernetes': LazyComponent<typeof import("../assets/icons/Kubernetes")['default']>
    'LazySvgoIconsLabel': LazyComponent<typeof import("../assets/icons/Label")['default']>
    'LazySvgoIconsLanguage': LazyComponent<typeof import("../assets/icons/Language")['default']>
    'LazySvgoIconsLaptop': LazyComponent<typeof import("../assets/icons/Laptop")['default']>
    'LazySvgoIconsLassoPolygon': LazyComponent<typeof import("../assets/icons/Lasso--polygon")['default']>
    'LazySvgoIconsLasso': LazyComponent<typeof import("../assets/icons/Lasso")['default']>
    'LazySvgoIconsLaunchStudy1': LazyComponent<typeof import("../assets/icons/Launch-study--1")['default']>
    'LazySvgoIconsLaunchStudy2': LazyComponent<typeof import("../assets/icons/Launch-study--2")['default']>
    'LazySvgoIconsLaunchStudy3': LazyComponent<typeof import("../assets/icons/Launch-study--3")['default']>
    'LazySvgoIconsLaunch': LazyComponent<typeof import("../assets/icons/Launch")['default']>
    'LazySvgoIconsLayersExternal': LazyComponent<typeof import("../assets/icons/Layers--external")['default']>
    'LazySvgoIconsLayers': LazyComponent<typeof import("../assets/icons/Layers")['default']>
    'LazySvgoIconsLegend': LazyComponent<typeof import("../assets/icons/Legend")['default']>
    'LazySvgoIconsLetterAa': LazyComponent<typeof import("../assets/icons/Letter--aa")['default']>
    'LazySvgoIconsLetterBb': LazyComponent<typeof import("../assets/icons/Letter--bb")['default']>
    'LazySvgoIconsLetterCc': LazyComponent<typeof import("../assets/icons/Letter--cc")['default']>
    'LazySvgoIconsLetterDd': LazyComponent<typeof import("../assets/icons/Letter--dd")['default']>
    'LazySvgoIconsLetterEe': LazyComponent<typeof import("../assets/icons/Letter--ee")['default']>
    'LazySvgoIconsLetterFf': LazyComponent<typeof import("../assets/icons/Letter--ff")['default']>
    'LazySvgoIconsLetterGg': LazyComponent<typeof import("../assets/icons/Letter--gg")['default']>
    'LazySvgoIconsLetterHh': LazyComponent<typeof import("../assets/icons/Letter--hh")['default']>
    'LazySvgoIconsLetterIi': LazyComponent<typeof import("../assets/icons/Letter--ii")['default']>
    'LazySvgoIconsLetterJj': LazyComponent<typeof import("../assets/icons/Letter--jj")['default']>
    'LazySvgoIconsLetterKk': LazyComponent<typeof import("../assets/icons/Letter--kk")['default']>
    'LazySvgoIconsLetterLl': LazyComponent<typeof import("../assets/icons/Letter--ll")['default']>
    'LazySvgoIconsLetterMm': LazyComponent<typeof import("../assets/icons/Letter--mm")['default']>
    'LazySvgoIconsLetterNn': LazyComponent<typeof import("../assets/icons/Letter--nn")['default']>
    'LazySvgoIconsLetterOo': LazyComponent<typeof import("../assets/icons/Letter--oo")['default']>
    'LazySvgoIconsLetterPp': LazyComponent<typeof import("../assets/icons/Letter--pp")['default']>
    'LazySvgoIconsLetterQq': LazyComponent<typeof import("../assets/icons/Letter--qq")['default']>
    'LazySvgoIconsLetterRr': LazyComponent<typeof import("../assets/icons/Letter--rr")['default']>
    'LazySvgoIconsLetterSs': LazyComponent<typeof import("../assets/icons/Letter--ss")['default']>
    'LazySvgoIconsLetterTt': LazyComponent<typeof import("../assets/icons/Letter--tt")['default']>
    'LazySvgoIconsLetterUu': LazyComponent<typeof import("../assets/icons/Letter--uu")['default']>
    'LazySvgoIconsLetterVv': LazyComponent<typeof import("../assets/icons/Letter--vv")['default']>
    'LazySvgoIconsLetterWw': LazyComponent<typeof import("../assets/icons/Letter--ww")['default']>
    'LazySvgoIconsLetterXx': LazyComponent<typeof import("../assets/icons/Letter--xx")['default']>
    'LazySvgoIconsLetterYy': LazyComponent<typeof import("../assets/icons/Letter--yy")['default']>
    'LazySvgoIconsLetterZz': LazyComponent<typeof import("../assets/icons/Letter--zz")['default']>
    'LazySvgoIconsLicenseDraft': LazyComponent<typeof import("../assets/icons/License--draft")['default']>
    'LazySvgoIconsLicenseGlobal': LazyComponent<typeof import("../assets/icons/License--global")['default']>
    'LazySvgoIconsLicenseMaintenanceDraft': LazyComponent<typeof import("../assets/icons/License--maintenance-draft")['default']>
    'LazySvgoIconsLicenseMaintenance': LazyComponent<typeof import("../assets/icons/License--maintenance")['default']>
    'LazySvgoIconsLicenseThirdPartyDraft': LazyComponent<typeof import("../assets/icons/License--third-party-draft")['default']>
    'LazySvgoIconsLicenseThirdParty': LazyComponent<typeof import("../assets/icons/License--third-party")['default']>
    'LazySvgoIconsLicense': LazyComponent<typeof import("../assets/icons/License")['default']>
    'LazySvgoIconsLifesaver': LazyComponent<typeof import("../assets/icons/Lifesaver")['default']>
    'LazySvgoIconsLightFilled': LazyComponent<typeof import("../assets/icons/Light--filled")['default']>
    'LazySvgoIconsLight': LazyComponent<typeof import("../assets/icons/Light")['default']>
    'LazySvgoIconsLightning': LazyComponent<typeof import("../assets/icons/Lightning")['default']>
    'LazySvgoIconsLink': LazyComponent<typeof import("../assets/icons/Link")['default']>
    'LazySvgoIconsLinuxAlt': LazyComponent<typeof import("../assets/icons/Linux--alt")['default']>
    'LazySvgoIconsLinuxNamespace': LazyComponent<typeof import("../assets/icons/Linux--namespace")['default']>
    'LazySvgoIconsLinux': LazyComponent<typeof import("../assets/icons/Linux")['default']>
    'LazySvgoIconsListBoxes': LazyComponent<typeof import("../assets/icons/List--boxes")['default']>
    'LazySvgoIconsListBulleted': LazyComponent<typeof import("../assets/icons/List--bulleted")['default']>
    'LazySvgoIconsListCheckedMirror': LazyComponent<typeof import("../assets/icons/List--checked--mirror")['default']>
    'LazySvgoIconsListChecked': LazyComponent<typeof import("../assets/icons/List--checked")['default']>
    'LazySvgoIconsListDropdown': LazyComponent<typeof import("../assets/icons/List--dropdown")['default']>
    'LazySvgoIconsListNumberedMirror': LazyComponent<typeof import("../assets/icons/List--numbered--mirror")['default']>
    'LazySvgoIconsListNumbered': LazyComponent<typeof import("../assets/icons/List--numbered")['default']>
    'LazySvgoIconsList': LazyComponent<typeof import("../assets/icons/List")['default']>
    'LazySvgoIconsLoadBalancerApplication': LazyComponent<typeof import("../assets/icons/Load-balancer--application")['default']>
    'LazySvgoIconsLoadBalancerClassic': LazyComponent<typeof import("../assets/icons/Load-balancer--classic")['default']>
    'LazySvgoIconsLoadBalancerGlobal': LazyComponent<typeof import("../assets/icons/Load-balancer--global")['default']>
    'LazySvgoIconsLoadBalancerListener': LazyComponent<typeof import("../assets/icons/Load-balancer--listener")['default']>
    'LazySvgoIconsLoadBalancerLocal': LazyComponent<typeof import("../assets/icons/Load-balancer--local")['default']>
    'LazySvgoIconsLoadBalancerNetwork': LazyComponent<typeof import("../assets/icons/Load-balancer--network")['default']>
    'LazySvgoIconsLoadBalancerPool': LazyComponent<typeof import("../assets/icons/Load-balancer--pool")['default']>
    'LazySvgoIconsLoadBalancerVpc': LazyComponent<typeof import("../assets/icons/Load-balancer--vpc")['default']>
    'LazySvgoIconsLocationCompanyFilled': LazyComponent<typeof import("../assets/icons/Location--company--filled")['default']>
    'LazySvgoIconsLocationCompany': LazyComponent<typeof import("../assets/icons/Location--company")['default']>
    'LazySvgoIconsLocationCurrent': LazyComponent<typeof import("../assets/icons/Location--current")['default']>
    'LazySvgoIconsLocationFilled': LazyComponent<typeof import("../assets/icons/Location--filled")['default']>
    'LazySvgoIconsLocationHazardFilled': LazyComponent<typeof import("../assets/icons/Location--hazard--filled")['default']>
    'LazySvgoIconsLocationHazard': LazyComponent<typeof import("../assets/icons/Location--hazard")['default']>
    'LazySvgoIconsLocationHeartFilled': LazyComponent<typeof import("../assets/icons/Location--heart--filled")['default']>
    'LazySvgoIconsLocationHeart': LazyComponent<typeof import("../assets/icons/Location--heart")['default']>
    'LazySvgoIconsLocationInfoFilled': LazyComponent<typeof import("../assets/icons/Location--info--filled")['default']>
    'LazySvgoIconsLocationInfo': LazyComponent<typeof import("../assets/icons/Location--info")['default']>
    'LazySvgoIconsLocationPersonFilled': LazyComponent<typeof import("../assets/icons/Location--person--filled")['default']>
    'LazySvgoIconsLocationPerson': LazyComponent<typeof import("../assets/icons/Location--person")['default']>
    'LazySvgoIconsLocationSave': LazyComponent<typeof import("../assets/icons/Location--save")['default']>
    'LazySvgoIconsLocationStarFilled': LazyComponent<typeof import("../assets/icons/Location--star--filled")['default']>
    'LazySvgoIconsLocationStar': LazyComponent<typeof import("../assets/icons/Location--star")['default']>
    'LazySvgoIconsLocation': LazyComponent<typeof import("../assets/icons/Location")['default']>
    'LazySvgoIconsLocked': LazyComponent<typeof import("../assets/icons/Locked")['default']>
    'LazySvgoIconsLogicalPartition': LazyComponent<typeof import("../assets/icons/Logical-partition")['default']>
    'LazySvgoIconsLogin': LazyComponent<typeof import("../assets/icons/Login")['default']>
    'LazySvgoIconsLogoAngular': LazyComponent<typeof import("../assets/icons/Logo--angular")['default']>
    'LazySvgoIconsLogoAnsibleCommunity': LazyComponent<typeof import("../assets/icons/Logo--ansible-community")['default']>
    'LazySvgoIconsLogoDigg': LazyComponent<typeof import("../assets/icons/Logo--digg")['default']>
    'LazySvgoIconsLogoDiscord': LazyComponent<typeof import("../assets/icons/Logo--discord")['default']>
    'LazySvgoIconsLogoFacebook': LazyComponent<typeof import("../assets/icons/Logo--facebook")['default']>
    'LazySvgoIconsLogoFigma': LazyComponent<typeof import("../assets/icons/Logo--figma")['default']>
    'LazySvgoIconsLogoFlickr': LazyComponent<typeof import("../assets/icons/Logo--flickr")['default']>
    'LazySvgoIconsLogoGithub': LazyComponent<typeof import("../assets/icons/Logo--github")['default']>
    'LazySvgoIconsLogoGitlab': LazyComponent<typeof import("../assets/icons/Logo--gitlab")['default']>
    'LazySvgoIconsLogoGlassdoor': LazyComponent<typeof import("../assets/icons/Logo--glassdoor")['default']>
    'LazySvgoIconsLogoInstagram': LazyComponent<typeof import("../assets/icons/Logo--instagram")['default']>
    'LazySvgoIconsLogoInvision': LazyComponent<typeof import("../assets/icons/Logo--invision")['default']>
    'LazySvgoIconsLogoJupyter': LazyComponent<typeof import("../assets/icons/Logo--jupyter")['default']>
    'LazySvgoIconsLogoKeybase': LazyComponent<typeof import("../assets/icons/Logo--keybase")['default']>
    'LazySvgoIconsLogoKubernetes': LazyComponent<typeof import("../assets/icons/Logo--kubernetes")['default']>
    'LazySvgoIconsLogoLinkedin': LazyComponent<typeof import("../assets/icons/Logo--linkedin")['default']>
    'LazySvgoIconsLogoLivestream': LazyComponent<typeof import("../assets/icons/Logo--livestream")['default']>
    'LazySvgoIconsLogoMastodon': LazyComponent<typeof import("../assets/icons/Logo--mastodon")['default']>
    'LazySvgoIconsLogoMedium': LazyComponent<typeof import("../assets/icons/Logo--medium")['default']>
    'LazySvgoIconsLogoNpm': LazyComponent<typeof import("../assets/icons/Logo--npm")['default']>
    'LazySvgoIconsLogoOpenshift': LazyComponent<typeof import("../assets/icons/Logo--openshift")['default']>
    'LazySvgoIconsLogoPinterest': LazyComponent<typeof import("../assets/icons/Logo--pinterest")['default']>
    'LazySvgoIconsLogoPython': LazyComponent<typeof import("../assets/icons/Logo--python")['default']>
    'LazySvgoIconsLogoQuora': LazyComponent<typeof import("../assets/icons/Logo--quora")['default']>
    'LazySvgoIconsLogoRScript': LazyComponent<typeof import("../assets/icons/Logo--r-script")['default']>
    'LazySvgoIconsLogoReact': LazyComponent<typeof import("../assets/icons/Logo--react")['default']>
    'LazySvgoIconsLogoRedHatAnsible': LazyComponent<typeof import("../assets/icons/Logo--red-hat-ansible")['default']>
    'LazySvgoIconsLogoSketch': LazyComponent<typeof import("../assets/icons/Logo--sketch")['default']>
    'LazySvgoIconsLogoSkype': LazyComponent<typeof import("../assets/icons/Logo--skype")['default']>
    'LazySvgoIconsLogoSlack': LazyComponent<typeof import("../assets/icons/Logo--slack")['default']>
    'LazySvgoIconsLogoSnapchat': LazyComponent<typeof import("../assets/icons/Logo--snapchat")['default']>
    'LazySvgoIconsLogoSvelte': LazyComponent<typeof import("../assets/icons/Logo--svelte")['default']>
    'LazySvgoIconsLogoTumblr': LazyComponent<typeof import("../assets/icons/Logo--tumblr")['default']>
    'LazySvgoIconsLogoTwitter': LazyComponent<typeof import("../assets/icons/Logo--twitter")['default']>
    'LazySvgoIconsLogoVmwareAlt': LazyComponent<typeof import("../assets/icons/Logo--vmware--alt")['default']>
    'LazySvgoIconsLogoVmware': LazyComponent<typeof import("../assets/icons/Logo--vmware")['default']>
    'LazySvgoIconsLogoVue': LazyComponent<typeof import("../assets/icons/Logo--vue")['default']>
    'LazySvgoIconsLogoWechat': LazyComponent<typeof import("../assets/icons/Logo--wechat")['default']>
    'LazySvgoIconsLogoX': LazyComponent<typeof import("../assets/icons/Logo--x")['default']>
    'LazySvgoIconsLogoXing': LazyComponent<typeof import("../assets/icons/Logo--xing")['default']>
    'LazySvgoIconsLogoYelp': LazyComponent<typeof import("../assets/icons/Logo--yelp")['default']>
    'LazySvgoIconsLogoYoutube': LazyComponent<typeof import("../assets/icons/Logo--youtube")['default']>
    'LazySvgoIconsLogout': LazyComponent<typeof import("../assets/icons/Logout")['default']>
    'LazySvgoIconsLoop': LazyComponent<typeof import("../assets/icons/Loop")['default']>
    'LazySvgoIconsLowSeverity': LazyComponent<typeof import("../assets/icons/Low-severity")['default']>
    'LazySvgoIconsMAC': LazyComponent<typeof import("../assets/icons/MAC")['default']>
    'LazySvgoIconsMacCommand': LazyComponent<typeof import("../assets/icons/Mac--command")['default']>
    'LazySvgoIconsMacOption': LazyComponent<typeof import("../assets/icons/Mac--option")['default']>
    'LazySvgoIconsMacShift': LazyComponent<typeof import("../assets/icons/Mac--shift")['default']>
    'LazySvgoIconsMachineLearningModel': LazyComponent<typeof import("../assets/icons/Machine-learning-model")['default']>
    'LazySvgoIconsMagicWandFilled': LazyComponent<typeof import("../assets/icons/Magic-wand--filled")['default']>
    'LazySvgoIconsMagicWand': LazyComponent<typeof import("../assets/icons/Magic-wand")['default']>
    'LazySvgoIconsMagnify': LazyComponent<typeof import("../assets/icons/Magnify")['default']>
    'LazySvgoIconsMailAll': LazyComponent<typeof import("../assets/icons/Mail--all")['default']>
    'LazySvgoIconsMailReply': LazyComponent<typeof import("../assets/icons/Mail--reply")['default']>
    'LazySvgoIconsMammogram': LazyComponent<typeof import("../assets/icons/Mammogram")['default']>
    'LazySvgoIconsManageProtection': LazyComponent<typeof import("../assets/icons/Manage-protection")['default']>
    'LazySvgoIconsManagedSolutions': LazyComponent<typeof import("../assets/icons/Managed-solutions")['default']>
    'LazySvgoIconsMapCenter': LazyComponent<typeof import("../assets/icons/Map--center")['default']>
    'LazySvgoIconsMapIdentify': LazyComponent<typeof import("../assets/icons/Map--identify")['default']>
    'LazySvgoIconsMapBoundaryVegetation': LazyComponent<typeof import("../assets/icons/Map-boundary--vegetation")['default']>
    'LazySvgoIconsMapBoundary': LazyComponent<typeof import("../assets/icons/Map-boundary")['default']>
    'LazySvgoIconsMap': LazyComponent<typeof import("../assets/icons/Map")['default']>
    'LazySvgoIconsMarineWarning': LazyComponent<typeof import("../assets/icons/Marine-warning")['default']>
    'LazySvgoIconsMathCurve': LazyComponent<typeof import("../assets/icons/Math-curve")['default']>
    'LazySvgoIconsMatrix': LazyComponent<typeof import("../assets/icons/Matrix")['default']>
    'LazySvgoIconsMaximize': LazyComponent<typeof import("../assets/icons/Maximize")['default']>
    'LazySvgoIconsMediaLibraryFilled': LazyComponent<typeof import("../assets/icons/Media--library--filled")['default']>
    'LazySvgoIconsMediaLibrary': LazyComponent<typeof import("../assets/icons/Media--library")['default']>
    'LazySvgoIconsMediaCast': LazyComponent<typeof import("../assets/icons/Media-cast")['default']>
    'LazySvgoIconsMedicationAlert': LazyComponent<typeof import("../assets/icons/Medication--alert")['default']>
    'LazySvgoIconsMedicationReminder': LazyComponent<typeof import("../assets/icons/Medication--reminder")['default']>
    'LazySvgoIconsMedication': LazyComponent<typeof import("../assets/icons/Medication")['default']>
    'LazySvgoIconsMenu': LazyComponent<typeof import("../assets/icons/Menu")['default']>
    'LazySvgoIconsMergeNode': LazyComponent<typeof import("../assets/icons/Merge-node")['default']>
    'LazySvgoIconsMerge': LazyComponent<typeof import("../assets/icons/Merge")['default']>
    'LazySvgoIconsMessageQueue': LazyComponent<typeof import("../assets/icons/Message-queue")['default']>
    'LazySvgoIconsMeterAlt': LazyComponent<typeof import("../assets/icons/Meter--alt")['default']>
    'LazySvgoIconsMeter': LazyComponent<typeof import("../assets/icons/Meter")['default']>
    'LazySvgoIconsMicrophoneFilled': LazyComponent<typeof import("../assets/icons/Microphone--filled")['default']>
    'LazySvgoIconsMicrophoneOffFilled': LazyComponent<typeof import("../assets/icons/Microphone--off--filled")['default']>
    'LazySvgoIconsMicrophoneOff': LazyComponent<typeof import("../assets/icons/Microphone--off")['default']>
    'LazySvgoIconsMicrophone': LazyComponent<typeof import("../assets/icons/Microphone")['default']>
    'LazySvgoIconsMicroscope': LazyComponent<typeof import("../assets/icons/Microscope")['default']>
    'LazySvgoIconsMicroservices1': LazyComponent<typeof import("../assets/icons/Microservices--1")['default']>
    'LazySvgoIconsMicroservices2': LazyComponent<typeof import("../assets/icons/Microservices--2")['default']>
    'LazySvgoIconsMigrateAlt': LazyComponent<typeof import("../assets/icons/Migrate--alt")['default']>
    'LazySvgoIconsMigrate': LazyComponent<typeof import("../assets/icons/Migrate")['default']>
    'LazySvgoIconsMilestone': LazyComponent<typeof import("../assets/icons/Milestone")['default']>
    'LazySvgoIconsMilitaryCamp': LazyComponent<typeof import("../assets/icons/Military-camp")['default']>
    'LazySvgoIconsMinimize': LazyComponent<typeof import("../assets/icons/Minimize")['default']>
    'LazySvgoIconsMisuseOutline': LazyComponent<typeof import("../assets/icons/Misuse--outline")['default']>
    'LazySvgoIconsMisuse': LazyComponent<typeof import("../assets/icons/Misuse")['default']>
    'LazySvgoIconsMixedRainHail': LazyComponent<typeof import("../assets/icons/Mixed-rain-hail")['default']>
    'LazySvgoIconsMlModelReference': LazyComponent<typeof import("../assets/icons/Ml-model--reference")['default']>
    'LazySvgoIconsMobileAdd': LazyComponent<typeof import("../assets/icons/Mobile--add")['default']>
    'LazySvgoIconsMobileAudio': LazyComponent<typeof import("../assets/icons/Mobile--audio")['default']>
    'LazySvgoIconsMobileCheck': LazyComponent<typeof import("../assets/icons/Mobile--check")['default']>
    'LazySvgoIconsMobileCrash': LazyComponent<typeof import("../assets/icons/Mobile--crash")['default']>
    'LazySvgoIconsMobileDownload': LazyComponent<typeof import("../assets/icons/Mobile--download")['default']>
    'LazySvgoIconsMobileEvent': LazyComponent<typeof import("../assets/icons/Mobile--event")['default']>
    'LazySvgoIconsMobileLandscape': LazyComponent<typeof import("../assets/icons/Mobile--landscape")['default']>
    'LazySvgoIconsMobileRequest': LazyComponent<typeof import("../assets/icons/Mobile--request")['default']>
    'LazySvgoIconsMobileSession': LazyComponent<typeof import("../assets/icons/Mobile--session")['default']>
    'LazySvgoIconsMobileViewOrientation': LazyComponent<typeof import("../assets/icons/Mobile--view-orientation")['default']>
    'LazySvgoIconsMobileView': LazyComponent<typeof import("../assets/icons/Mobile--view")['default']>
    'LazySvgoIconsMobile': LazyComponent<typeof import("../assets/icons/Mobile")['default']>
    'LazySvgoIconsMobilityServices': LazyComponent<typeof import("../assets/icons/Mobility--services")['default']>
    'LazySvgoIconsModelAlt': LazyComponent<typeof import("../assets/icons/Model--alt")['default']>
    'LazySvgoIconsModelFoundation': LazyComponent<typeof import("../assets/icons/Model--foundation")['default']>
    'LazySvgoIconsModelReference': LazyComponent<typeof import("../assets/icons/Model--reference")['default']>
    'LazySvgoIconsModelTuned1': LazyComponent<typeof import("../assets/icons/Model--tuned-1")['default']>
    'LazySvgoIconsModelTuned': LazyComponent<typeof import("../assets/icons/Model--tuned")['default']>
    'LazySvgoIconsModelBuilderReference': LazyComponent<typeof import("../assets/icons/Model-builder--reference")['default']>
    'LazySvgoIconsModelBuilder': LazyComponent<typeof import("../assets/icons/Model-builder")['default']>
    'LazySvgoIconsModel': LazyComponent<typeof import("../assets/icons/Model")['default']>
    'LazySvgoIconsMoney': LazyComponent<typeof import("../assets/icons/Money")['default']>
    'LazySvgoIconsMonster': LazyComponent<typeof import("../assets/icons/Monster")['default']>
    'LazySvgoIconsMonument': LazyComponent<typeof import("../assets/icons/Monument")['default']>
    'LazySvgoIconsMoon': LazyComponent<typeof import("../assets/icons/Moon")['default']>
    'LazySvgoIconsMoonrise': LazyComponent<typeof import("../assets/icons/Moonrise")['default']>
    'LazySvgoIconsMoonset': LazyComponent<typeof import("../assets/icons/Moonset")['default']>
    'LazySvgoIconsMostlyCloudyNight': LazyComponent<typeof import("../assets/icons/Mostly-cloudy--night")['default']>
    'LazySvgoIconsMostlyCloudy': LazyComponent<typeof import("../assets/icons/Mostly-cloudy")['default']>
    'LazySvgoIconsMountain': LazyComponent<typeof import("../assets/icons/Mountain")['default']>
    'LazySvgoIconsMov': LazyComponent<typeof import("../assets/icons/Mov")['default']>
    'LazySvgoIconsMove': LazyComponent<typeof import("../assets/icons/Move")['default']>
    'LazySvgoIconsMovement': LazyComponent<typeof import("../assets/icons/Movement")['default']>
    'LazySvgoIconsMp3': LazyComponent<typeof import("../assets/icons/Mp3")['default']>
    'LazySvgoIconsMp4': LazyComponent<typeof import("../assets/icons/Mp4")['default']>
    'LazySvgoIconsMpeg': LazyComponent<typeof import("../assets/icons/Mpeg")['default']>
    'LazySvgoIconsMpg2': LazyComponent<typeof import("../assets/icons/Mpg2")['default']>
    'LazySvgoIconsMusicAdd': LazyComponent<typeof import("../assets/icons/Music--add")['default']>
    'LazySvgoIconsMusicRemove': LazyComponent<typeof import("../assets/icons/Music--remove")['default']>
    'LazySvgoIconsMusic': LazyComponent<typeof import("../assets/icons/Music")['default']>
    'LazySvgoIconsMysql': LazyComponent<typeof import("../assets/icons/Mysql")['default']>
    'LazySvgoIconsNameSpace': LazyComponent<typeof import("../assets/icons/Name-space")['default']>
    'LazySvgoIconsNavaidCivil': LazyComponent<typeof import("../assets/icons/Navaid--civil")['default']>
    'LazySvgoIconsNavaidDme': LazyComponent<typeof import("../assets/icons/Navaid--dme")['default']>
    'LazySvgoIconsNavaidHelipad': LazyComponent<typeof import("../assets/icons/Navaid--helipad")['default']>
    'LazySvgoIconsNavaidMilitaryCivil': LazyComponent<typeof import("../assets/icons/Navaid--military-civil")['default']>
    'LazySvgoIconsNavaidMilitary': LazyComponent<typeof import("../assets/icons/Navaid--military")['default']>
    'LazySvgoIconsNavaidNdbDme': LazyComponent<typeof import("../assets/icons/Navaid--ndb-dme")['default']>
    'LazySvgoIconsNavaidNdb': LazyComponent<typeof import("../assets/icons/Navaid--ndb")['default']>
    'LazySvgoIconsNavaidPrivate': LazyComponent<typeof import("../assets/icons/Navaid--private")['default']>
    'LazySvgoIconsNavaidSeaplane': LazyComponent<typeof import("../assets/icons/Navaid--seaplane")['default']>
    'LazySvgoIconsNavaidTacan': LazyComponent<typeof import("../assets/icons/Navaid--tacan")['default']>
    'LazySvgoIconsNavaidVhfor': LazyComponent<typeof import("../assets/icons/Navaid--vhfor")['default']>
    'LazySvgoIconsNavaidVor': LazyComponent<typeof import("../assets/icons/Navaid--vor")['default']>
    'LazySvgoIconsNavaidVordme': LazyComponent<typeof import("../assets/icons/Navaid--vordme")['default']>
    'LazySvgoIconsNavaidVortac': LazyComponent<typeof import("../assets/icons/Navaid--vortac")['default']>
    'LazySvgoIconsNeed': LazyComponent<typeof import("../assets/icons/Need")['default']>
    'LazySvgoIconsNetwork1': LazyComponent<typeof import("../assets/icons/Network--1")['default']>
    'LazySvgoIconsNetwork2': LazyComponent<typeof import("../assets/icons/Network--2")['default']>
    'LazySvgoIconsNetwork3Reference': LazyComponent<typeof import("../assets/icons/Network--3--reference")['default']>
    'LazySvgoIconsNetwork3': LazyComponent<typeof import("../assets/icons/Network--3")['default']>
    'LazySvgoIconsNetwork4Reference': LazyComponent<typeof import("../assets/icons/Network--4--reference")['default']>
    'LazySvgoIconsNetwork4': LazyComponent<typeof import("../assets/icons/Network--4")['default']>
    'LazySvgoIconsNetworkAdminControl': LazyComponent<typeof import("../assets/icons/Network--admin-control")['default']>
    'LazySvgoIconsNetworkEnterprise': LazyComponent<typeof import("../assets/icons/Network--enterprise")['default']>
    'LazySvgoIconsNetworkOverlay': LazyComponent<typeof import("../assets/icons/Network--overlay")['default']>
    'LazySvgoIconsNetworkPublic': LazyComponent<typeof import("../assets/icons/Network--public")['default']>
    'LazySvgoIconsNetworkInterface': LazyComponent<typeof import("../assets/icons/Network-interface")['default']>
    'LazySvgoIconsNewTab': LazyComponent<typeof import("../assets/icons/New-tab")['default']>
    'LazySvgoIconsNextFilled': LazyComponent<typeof import("../assets/icons/Next--filled")['default']>
    'LazySvgoIconsNextOutline': LazyComponent<typeof import("../assets/icons/Next--outline")['default']>
    'LazySvgoIconsNoImage': LazyComponent<typeof import("../assets/icons/No-image")['default']>
    'LazySvgoIconsNoTicket': LazyComponent<typeof import("../assets/icons/No-ticket")['default']>
    'LazySvgoIconsNominal': LazyComponent<typeof import("../assets/icons/Nominal")['default']>
    'LazySvgoIconsNominate': LazyComponent<typeof import("../assets/icons/Nominate")['default']>
    'LazySvgoIconsNonCertified': LazyComponent<typeof import("../assets/icons/Non-certified")['default']>
    'LazySvgoIconsNoodleBowl': LazyComponent<typeof import("../assets/icons/Noodle-bowl")['default']>
    'LazySvgoIconsNotAvailable': LazyComponent<typeof import("../assets/icons/Not-available")['default']>
    'LazySvgoIconsNotSentFilled': LazyComponent<typeof import("../assets/icons/Not-sent--filled")['default']>
    'LazySvgoIconsNotSent': LazyComponent<typeof import("../assets/icons/Not-sent")['default']>
    'LazySvgoIconsNotebookReference': LazyComponent<typeof import("../assets/icons/Notebook--reference")['default']>
    'LazySvgoIconsNotebook': LazyComponent<typeof import("../assets/icons/Notebook")['default']>
    'LazySvgoIconsNotificationFilled': LazyComponent<typeof import("../assets/icons/Notification--filled")['default']>
    'LazySvgoIconsNotificationNew': LazyComponent<typeof import("../assets/icons/Notification--new")['default']>
    'LazySvgoIconsNotificationOffFilled': LazyComponent<typeof import("../assets/icons/Notification--off--filled")['default']>
    'LazySvgoIconsNotificationOff': LazyComponent<typeof import("../assets/icons/Notification--off")['default']>
    'LazySvgoIconsNotificationCounter': LazyComponent<typeof import("../assets/icons/Notification-counter")['default']>
    'LazySvgoIconsNotification': LazyComponent<typeof import("../assets/icons/Notification")['default']>
    'LazySvgoIconsNumber0': LazyComponent<typeof import("../assets/icons/Number--0")['default']>
    'LazySvgoIconsNumber1': LazyComponent<typeof import("../assets/icons/Number--1")['default']>
    'LazySvgoIconsNumber2': LazyComponent<typeof import("../assets/icons/Number--2")['default']>
    'LazySvgoIconsNumber3': LazyComponent<typeof import("../assets/icons/Number--3")['default']>
    'LazySvgoIconsNumber4': LazyComponent<typeof import("../assets/icons/Number--4")['default']>
    'LazySvgoIconsNumber5': LazyComponent<typeof import("../assets/icons/Number--5")['default']>
    'LazySvgoIconsNumber6': LazyComponent<typeof import("../assets/icons/Number--6")['default']>
    'LazySvgoIconsNumber7': LazyComponent<typeof import("../assets/icons/Number--7")['default']>
    'LazySvgoIconsNumber8': LazyComponent<typeof import("../assets/icons/Number--8")['default']>
    'LazySvgoIconsNumber9': LazyComponent<typeof import("../assets/icons/Number--9")['default']>
    'LazySvgoIconsNumberSmall0': LazyComponent<typeof import("../assets/icons/Number--small--0")['default']>
    'LazySvgoIconsNumberSmall1': LazyComponent<typeof import("../assets/icons/Number--small--1")['default']>
    'LazySvgoIconsNumberSmall2': LazyComponent<typeof import("../assets/icons/Number--small--2")['default']>
    'LazySvgoIconsNumberSmall3': LazyComponent<typeof import("../assets/icons/Number--small--3")['default']>
    'LazySvgoIconsNumberSmall4': LazyComponent<typeof import("../assets/icons/Number--small--4")['default']>
    'LazySvgoIconsNumberSmall5': LazyComponent<typeof import("../assets/icons/Number--small--5")['default']>
    'LazySvgoIconsNumberSmall6': LazyComponent<typeof import("../assets/icons/Number--small--6")['default']>
    'LazySvgoIconsNumberSmall7': LazyComponent<typeof import("../assets/icons/Number--small--7")['default']>
    'LazySvgoIconsNumberSmall8': LazyComponent<typeof import("../assets/icons/Number--small--8")['default']>
    'LazySvgoIconsNumberSmall9': LazyComponent<typeof import("../assets/icons/Number--small--9")['default']>
    'LazySvgoIconsObjectStorageAlt': LazyComponent<typeof import("../assets/icons/Object-storage--alt")['default']>
    'LazySvgoIconsObjectStorage1': LazyComponent<typeof import("../assets/icons/Object-storage-1")['default']>
    'LazySvgoIconsObjectStorage': LazyComponent<typeof import("../assets/icons/Object-storage")['default']>
    'LazySvgoIconsObservedHail': LazyComponent<typeof import("../assets/icons/Observed--hail")['default']>
    'LazySvgoIconsObservedLightning': LazyComponent<typeof import("../assets/icons/Observed--lightning")['default']>
    'LazySvgoIconsOmega': LazyComponent<typeof import("../assets/icons/Omega")['default']>
    'LazySvgoIconsOpacity': LazyComponent<typeof import("../assets/icons/Opacity")['default']>
    'LazySvgoIconsOpenPanelBottom': LazyComponent<typeof import("../assets/icons/Open-panel--bottom")['default']>
    'LazySvgoIconsOpenPanelFilledBottom': LazyComponent<typeof import("../assets/icons/Open-panel--filled--bottom")['default']>
    'LazySvgoIconsOpenPanelFilledLeft': LazyComponent<typeof import("../assets/icons/Open-panel--filled--left")['default']>
    'LazySvgoIconsOpenPanelFilledRight': LazyComponent<typeof import("../assets/icons/Open-panel--filled--right")['default']>
    'LazySvgoIconsOpenPanelFilledTop': LazyComponent<typeof import("../assets/icons/Open-panel--filled--top")['default']>
    'LazySvgoIconsOpenPanelLeft': LazyComponent<typeof import("../assets/icons/Open-panel--left")['default']>
    'LazySvgoIconsOpenPanelRight': LazyComponent<typeof import("../assets/icons/Open-panel--right")['default']>
    'LazySvgoIconsOpenPanelTop': LazyComponent<typeof import("../assets/icons/Open-panel--top")['default']>
    'LazySvgoIconsOperationGauge': LazyComponent<typeof import("../assets/icons/Operation--gauge")['default']>
    'LazySvgoIconsOperationIf': LazyComponent<typeof import("../assets/icons/Operation--if")['default']>
    'LazySvgoIconsOperation': LazyComponent<typeof import("../assets/icons/Operation")['default']>
    'LazySvgoIconsOperationsField': LazyComponent<typeof import("../assets/icons/Operations--field")['default']>
    'LazySvgoIconsOperationsRecord': LazyComponent<typeof import("../assets/icons/Operations--record")['default']>
    'LazySvgoIconsOrderDetails': LazyComponent<typeof import("../assets/icons/Order-details")['default']>
    'LazySvgoIconsOrdinal': LazyComponent<typeof import("../assets/icons/Ordinal")['default']>
    'LazySvgoIconsOutage': LazyComponent<typeof import("../assets/icons/Outage")['default']>
    'LazySvgoIconsOutlookSevere': LazyComponent<typeof import("../assets/icons/Outlook-severe")['default']>
    'LazySvgoIconsOverflowMenuHorizontal': LazyComponent<typeof import("../assets/icons/Overflow-menu--horizontal")['default']>
    'LazySvgoIconsOverflowMenuVertical': LazyComponent<typeof import("../assets/icons/Overflow-menu--vertical")['default']>
    'LazySvgoIconsOverlay': LazyComponent<typeof import("../assets/icons/Overlay")['default']>
    'LazySvgoIconsPackageTextAnalysis': LazyComponent<typeof import("../assets/icons/Package--text-analysis")['default']>
    'LazySvgoIconsPackageNode': LazyComponent<typeof import("../assets/icons/Package-node")['default']>
    'LazySvgoIconsPackage': LazyComponent<typeof import("../assets/icons/Package")['default']>
    'LazySvgoIconsPageFirst': LazyComponent<typeof import("../assets/icons/Page--first")['default']>
    'LazySvgoIconsPageLast': LazyComponent<typeof import("../assets/icons/Page--last")['default']>
    'LazySvgoIconsPageBreak': LazyComponent<typeof import("../assets/icons/Page-break")['default']>
    'LazySvgoIconsPageNumber': LazyComponent<typeof import("../assets/icons/Page-number")['default']>
    'LazySvgoIconsPageScroll': LazyComponent<typeof import("../assets/icons/Page-scroll")['default']>
    'LazySvgoIconsPaintBrushAlt': LazyComponent<typeof import("../assets/icons/Paint-brush--alt")['default']>
    'LazySvgoIconsPaintBrush': LazyComponent<typeof import("../assets/icons/Paint-brush")['default']>
    'LazySvgoIconsPalmTree': LazyComponent<typeof import("../assets/icons/Palm-tree")['default']>
    'LazySvgoIconsPanHorizontal': LazyComponent<typeof import("../assets/icons/Pan--horizontal")['default']>
    'LazySvgoIconsPanVertical': LazyComponent<typeof import("../assets/icons/Pan--vertical")['default']>
    'LazySvgoIconsPanelExpansion': LazyComponent<typeof import("../assets/icons/Panel-expansion")['default']>
    'LazySvgoIconsParagraph': LazyComponent<typeof import("../assets/icons/Paragraph")['default']>
    'LazySvgoIconsParameter': LazyComponent<typeof import("../assets/icons/Parameter")['default']>
    'LazySvgoIconsParentChild': LazyComponent<typeof import("../assets/icons/Parent-child")['default']>
    'LazySvgoIconsPartDefinition': LazyComponent<typeof import("../assets/icons/Part--definition")['default']>
    'LazySvgoIconsPartUsage': LazyComponent<typeof import("../assets/icons/Part--usage")['default']>
    'LazySvgoIconsPartitionAuto': LazyComponent<typeof import("../assets/icons/Partition--auto")['default']>
    'LazySvgoIconsPartitionCollection': LazyComponent<typeof import("../assets/icons/Partition--collection")['default']>
    'LazySvgoIconsPartitionRepartition': LazyComponent<typeof import("../assets/icons/Partition--repartition")['default']>
    'LazySvgoIconsPartitionSame': LazyComponent<typeof import("../assets/icons/Partition--same")['default']>
    'LazySvgoIconsPartitionSpecific': LazyComponent<typeof import("../assets/icons/Partition--specific")['default']>
    'LazySvgoIconsPartlyCloudyNight': LazyComponent<typeof import("../assets/icons/Partly-cloudy--night")['default']>
    'LazySvgoIconsPartlyCloudy': LazyComponent<typeof import("../assets/icons/Partly-cloudy")['default']>
    'LazySvgoIconsPartnership': LazyComponent<typeof import("../assets/icons/Partnership")['default']>
    'LazySvgoIconsPassengerDrinks': LazyComponent<typeof import("../assets/icons/Passenger--drinks")['default']>
    'LazySvgoIconsPassengerPlus': LazyComponent<typeof import("../assets/icons/Passenger--plus")['default']>
    'LazySvgoIconsPassword': LazyComponent<typeof import("../assets/icons/Password")['default']>
    'LazySvgoIconsPaste': LazyComponent<typeof import("../assets/icons/Paste")['default']>
    'LazySvgoIconsPauseFilled': LazyComponent<typeof import("../assets/icons/Pause--filled")['default']>
    'LazySvgoIconsPauseOutlineFilled': LazyComponent<typeof import("../assets/icons/Pause--outline--filled")['default']>
    'LazySvgoIconsPauseOutline': LazyComponent<typeof import("../assets/icons/Pause--outline")['default']>
    'LazySvgoIconsPauseFuture': LazyComponent<typeof import("../assets/icons/Pause-future")['default']>
    'LazySvgoIconsPausePast': LazyComponent<typeof import("../assets/icons/Pause-past")['default']>
    'LazySvgoIconsPause': LazyComponent<typeof import("../assets/icons/Pause")['default']>
    'LazySvgoIconsPcnENode': LazyComponent<typeof import("../assets/icons/Pcn--e-node")['default']>
    'LazySvgoIconsPcnMilitary': LazyComponent<typeof import("../assets/icons/Pcn--military")['default']>
    'LazySvgoIconsPcnPNode': LazyComponent<typeof import("../assets/icons/Pcn--p-node")['default']>
    'LazySvgoIconsPcnZNode': LazyComponent<typeof import("../assets/icons/Pcn--z-node")['default']>
    'LazySvgoIconsPdfReference': LazyComponent<typeof import("../assets/icons/Pdf--reference")['default']>
    'LazySvgoIconsPdf': LazyComponent<typeof import("../assets/icons/Pdf")['default']>
    'LazySvgoIconsPedestrianFamily': LazyComponent<typeof import("../assets/icons/Pedestrian--family")['default']>
    'LazySvgoIconsPedestrianChild': LazyComponent<typeof import("../assets/icons/Pedestrian-child")['default']>
    'LazySvgoIconsPedestrian': LazyComponent<typeof import("../assets/icons/Pedestrian")['default']>
    'LazySvgoIconsPenFountain': LazyComponent<typeof import("../assets/icons/Pen--fountain")['default']>
    'LazySvgoIconsPen': LazyComponent<typeof import("../assets/icons/Pen")['default']>
    'LazySvgoIconsPendingFilled': LazyComponent<typeof import("../assets/icons/Pending--filled")['default']>
    'LazySvgoIconsPending': LazyComponent<typeof import("../assets/icons/Pending")['default']>
    'LazySvgoIconsPentagonDownOutline': LazyComponent<typeof import("../assets/icons/Pentagon--down--outline")['default']>
    'LazySvgoIconsPentagonDownSolid': LazyComponent<typeof import("../assets/icons/Pentagon--down--solid")['default']>
    'LazySvgoIconsPentagonLeftOutline': LazyComponent<typeof import("../assets/icons/Pentagon--left--outline")['default']>
    'LazySvgoIconsPentagonLeftSolid': LazyComponent<typeof import("../assets/icons/Pentagon--left--solid")['default']>
    'LazySvgoIconsPentagonOutline': LazyComponent<typeof import("../assets/icons/Pentagon--outline")['default']>
    'LazySvgoIconsPentagonRightOutline': LazyComponent<typeof import("../assets/icons/Pentagon--right--outline")['default']>
    'LazySvgoIconsPentagonRightSolid': LazyComponent<typeof import("../assets/icons/Pentagon--right--solid")['default']>
    'LazySvgoIconsPentagonSolid': LazyComponent<typeof import("../assets/icons/Pentagon--solid")['default']>
    'LazySvgoIconsPercentageFilled': LazyComponent<typeof import("../assets/icons/Percentage--filled")['default']>
    'LazySvgoIconsPercentage': LazyComponent<typeof import("../assets/icons/Percentage")['default']>
    'LazySvgoIconsPersonFavorite': LazyComponent<typeof import("../assets/icons/Person--favorite")['default']>
    'LazySvgoIconsPerson': LazyComponent<typeof import("../assets/icons/Person")['default']>
    'LazySvgoIconsPest': LazyComponent<typeof import("../assets/icons/Pest")['default']>
    'LazySvgoIconsPetImageB': LazyComponent<typeof import("../assets/icons/Pet-image--b")['default']>
    'LazySvgoIconsPetImageO': LazyComponent<typeof import("../assets/icons/Pet-image--o")['default']>
    'LazySvgoIconsPhoneApplication': LazyComponent<typeof import("../assets/icons/Phone--application")['default']>
    'LazySvgoIconsPhoneBlockFilled': LazyComponent<typeof import("../assets/icons/Phone--block--filled")['default']>
    'LazySvgoIconsPhoneBlock': LazyComponent<typeof import("../assets/icons/Phone--block")['default']>
    'LazySvgoIconsPhoneFilled': LazyComponent<typeof import("../assets/icons/Phone--filled")['default']>
    'LazySvgoIconsPhoneIncomingFilled': LazyComponent<typeof import("../assets/icons/Phone--incoming--filled")['default']>
    'LazySvgoIconsPhoneIncoming': LazyComponent<typeof import("../assets/icons/Phone--incoming")['default']>
    'LazySvgoIconsPhoneIp': LazyComponent<typeof import("../assets/icons/Phone--ip")['default']>
    'LazySvgoIconsPhoneOffFilled': LazyComponent<typeof import("../assets/icons/Phone--off--filled")['default']>
    'LazySvgoIconsPhoneOff': LazyComponent<typeof import("../assets/icons/Phone--off")['default']>
    'LazySvgoIconsPhoneOutgoingFilled': LazyComponent<typeof import("../assets/icons/Phone--outgoing--filled")['default']>
    'LazySvgoIconsPhoneOutgoing': LazyComponent<typeof import("../assets/icons/Phone--outgoing")['default']>
    'LazySvgoIconsPhoneSettings': LazyComponent<typeof import("../assets/icons/Phone--settings")['default']>
    'LazySvgoIconsPhoneVoiceFilled': LazyComponent<typeof import("../assets/icons/Phone--voice--filled")['default']>
    'LazySvgoIconsPhoneVoice': LazyComponent<typeof import("../assets/icons/Phone--voice")['default']>
    'LazySvgoIconsPhone': LazyComponent<typeof import("../assets/icons/Phone")['default']>
    'LazySvgoIconsPhraseSentiment': LazyComponent<typeof import("../assets/icons/Phrase-sentiment")['default']>
    'LazySvgoIconsPicnicArea': LazyComponent<typeof import("../assets/icons/Picnic-area")['default']>
    'LazySvgoIconsPiggyBankSlot': LazyComponent<typeof import("../assets/icons/Piggy-bank--slot")['default']>
    'LazySvgoIconsPiggyBank': LazyComponent<typeof import("../assets/icons/Piggy-bank")['default']>
    'LazySvgoIconsPillsAdd': LazyComponent<typeof import("../assets/icons/Pills--add")['default']>
    'LazySvgoIconsPillsSubtract': LazyComponent<typeof import("../assets/icons/Pills--subtract")['default']>
    'LazySvgoIconsPills': LazyComponent<typeof import("../assets/icons/Pills")['default']>
    'LazySvgoIconsPinFilled': LazyComponent<typeof import("../assets/icons/Pin--filled")['default']>
    'LazySvgoIconsPin': LazyComponent<typeof import("../assets/icons/Pin")['default']>
    'LazySvgoIconsPlan': LazyComponent<typeof import("../assets/icons/Plan")['default']>
    'LazySvgoIconsPlanePrivate': LazyComponent<typeof import("../assets/icons/Plane--private")['default']>
    'LazySvgoIconsPlaneSea': LazyComponent<typeof import("../assets/icons/Plane--sea")['default']>
    'LazySvgoIconsPlane': LazyComponent<typeof import("../assets/icons/Plane")['default']>
    'LazySvgoIconsPlatforms': LazyComponent<typeof import("../assets/icons/Platforms")['default']>
    'LazySvgoIconsPlayFilledAlt': LazyComponent<typeof import("../assets/icons/Play--filled--alt")['default']>
    'LazySvgoIconsPlayFilled': LazyComponent<typeof import("../assets/icons/Play--filled")['default']>
    'LazySvgoIconsPlayOutlineFilled': LazyComponent<typeof import("../assets/icons/Play--outline--filled")['default']>
    'LazySvgoIconsPlayOutline': LazyComponent<typeof import("../assets/icons/Play--outline")['default']>
    'LazySvgoIconsPlay': LazyComponent<typeof import("../assets/icons/Play")['default']>
    'LazySvgoIconsPlaylist': LazyComponent<typeof import("../assets/icons/Playlist")['default']>
    'LazySvgoIconsPlugFilled': LazyComponent<typeof import("../assets/icons/Plug--filled")['default']>
    'LazySvgoIconsPlug': LazyComponent<typeof import("../assets/icons/Plug")['default']>
    'LazySvgoIconsPng': LazyComponent<typeof import("../assets/icons/Png")['default']>
    'LazySvgoIconsPointOfPresence': LazyComponent<typeof import("../assets/icons/Point-of-presence")['default']>
    'LazySvgoIconsPointerText': LazyComponent<typeof import("../assets/icons/Pointer-text")['default']>
    'LazySvgoIconsPolice': LazyComponent<typeof import("../assets/icons/Police")['default']>
    'LazySvgoIconsPolicy': LazyComponent<typeof import("../assets/icons/Policy")['default']>
    'LazySvgoIconsPopup': LazyComponent<typeof import("../assets/icons/Popup")['default']>
    'LazySvgoIconsPortDefinition': LazyComponent<typeof import("../assets/icons/Port--definition")['default']>
    'LazySvgoIconsPortInput': LazyComponent<typeof import("../assets/icons/Port--input")['default']>
    'LazySvgoIconsPortOutput': LazyComponent<typeof import("../assets/icons/Port--output")['default']>
    'LazySvgoIconsPortUsage': LazyComponent<typeof import("../assets/icons/Port--usage")['default']>
    'LazySvgoIconsPortfolio': LazyComponent<typeof import("../assets/icons/Portfolio")['default']>
    'LazySvgoIconsPower': LazyComponent<typeof import("../assets/icons/Power")['default']>
    'LazySvgoIconsPpt': LazyComponent<typeof import("../assets/icons/Ppt")['default']>
    'LazySvgoIconsPresentationFile': LazyComponent<typeof import("../assets/icons/Presentation-file")['default']>
    'LazySvgoIconsPressureFilled': LazyComponent<typeof import("../assets/icons/Pressure--filled")['default']>
    'LazySvgoIconsPressure': LazyComponent<typeof import("../assets/icons/Pressure")['default']>
    'LazySvgoIconsPreviousFilled': LazyComponent<typeof import("../assets/icons/Previous--filled")['default']>
    'LazySvgoIconsPreviousOutline': LazyComponent<typeof import("../assets/icons/Previous--outline")['default']>
    'LazySvgoIconsPricingConsumption': LazyComponent<typeof import("../assets/icons/Pricing--consumption")['default']>
    'LazySvgoIconsPricingContainer': LazyComponent<typeof import("../assets/icons/Pricing--container")['default']>
    'LazySvgoIconsPricingQuickProposal': LazyComponent<typeof import("../assets/icons/Pricing--quick-proposal")['default']>
    'LazySvgoIconsPricingTailored': LazyComponent<typeof import("../assets/icons/Pricing--tailored")['default']>
    'LazySvgoIconsPricingTraditional': LazyComponent<typeof import("../assets/icons/Pricing--traditional")['default']>
    'LazySvgoIconsPrinter': LazyComponent<typeof import("../assets/icons/Printer")['default']>
    'LazySvgoIconsProcessAutomate': LazyComponent<typeof import("../assets/icons/Process-automate")['default']>
    'LazySvgoIconsProcess': LazyComponent<typeof import("../assets/icons/Process")['default']>
    'LazySvgoIconsProduct': LazyComponent<typeof import("../assets/icons/Product")['default']>
    'LazySvgoIconsProgressBarRound': LazyComponent<typeof import("../assets/icons/Progress-bar--round")['default']>
    'LazySvgoIconsProgressBar': LazyComponent<typeof import("../assets/icons/Progress-bar")['default']>
    'LazySvgoIconsPromote': LazyComponent<typeof import("../assets/icons/Promote")['default']>
    'LazySvgoIconsPromptSession': LazyComponent<typeof import("../assets/icons/Prompt-session")['default']>
    'LazySvgoIconsPromptTemplate': LazyComponent<typeof import("../assets/icons/Prompt-template")['default']>
    'LazySvgoIconsPropertyRelationship': LazyComponent<typeof import("../assets/icons/Property-relationship")['default']>
    'LazySvgoIconsPullRequest': LazyComponent<typeof import("../assets/icons/Pull-request")['default']>
    'LazySvgoIconsPurchase': LazyComponent<typeof import("../assets/icons/Purchase")['default']>
    'LazySvgoIconsQCLaunch': LazyComponent<typeof import("../assets/icons/QC-launch")['default']>
    'LazySvgoIconsQiskit': LazyComponent<typeof import("../assets/icons/Qiskit")['default']>
    'LazySvgoIconsQqPlot': LazyComponent<typeof import("../assets/icons/Qq-plot")['default']>
    'LazySvgoIconsQrCode': LazyComponent<typeof import("../assets/icons/Qr-code")['default']>
    'LazySvgoIconsQuadrantPlot': LazyComponent<typeof import("../assets/icons/Quadrant-plot")['default']>
    'LazySvgoIconsQueryQueue': LazyComponent<typeof import("../assets/icons/Query-queue")['default']>
    'LazySvgoIconsQuery': LazyComponent<typeof import("../assets/icons/Query")['default']>
    'LazySvgoIconsQuestionAnswering': LazyComponent<typeof import("../assets/icons/Question-answering")['default']>
    'LazySvgoIconsQueued': LazyComponent<typeof import("../assets/icons/Queued")['default']>
    'LazySvgoIconsQuotes': LazyComponent<typeof import("../assets/icons/Quotes")['default']>
    'LazySvgoIconsRAG': LazyComponent<typeof import("../assets/icons/RAG")['default']>
    'LazySvgoIconsRadarEnhanced': LazyComponent<typeof import("../assets/icons/Radar--enhanced")['default']>
    'LazySvgoIconsRadarWeather': LazyComponent<typeof import("../assets/icons/Radar--weather")['default']>
    'LazySvgoIconsRadar': LazyComponent<typeof import("../assets/icons/Radar")['default']>
    'LazySvgoIconsRadioCombat': LazyComponent<typeof import("../assets/icons/Radio--combat")['default']>
    'LazySvgoIconsRadioPushToTalk': LazyComponent<typeof import("../assets/icons/Radio--push-to-talk")['default']>
    'LazySvgoIconsRadioButtonChecked': LazyComponent<typeof import("../assets/icons/Radio-button--checked")['default']>
    'LazySvgoIconsRadioButton': LazyComponent<typeof import("../assets/icons/Radio-button")['default']>
    'LazySvgoIconsRadio': LazyComponent<typeof import("../assets/icons/Radio")['default']>
    'LazySvgoIconsRainDrizzle': LazyComponent<typeof import("../assets/icons/Rain--drizzle")['default']>
    'LazySvgoIconsRainHeavy': LazyComponent<typeof import("../assets/icons/Rain--heavy")['default']>
    'LazySvgoIconsRainScatteredNight': LazyComponent<typeof import("../assets/icons/Rain--scattered--night")['default']>
    'LazySvgoIconsRainScattered': LazyComponent<typeof import("../assets/icons/Rain--scattered")['default']>
    'LazySvgoIconsRainDrop': LazyComponent<typeof import("../assets/icons/Rain-drop")['default']>
    'LazySvgoIconsRain': LazyComponent<typeof import("../assets/icons/Rain")['default']>
    'LazySvgoIconsRaw': LazyComponent<typeof import("../assets/icons/Raw")['default']>
    'LazySvgoIconsReceipt': LazyComponent<typeof import("../assets/icons/Receipt")['default']>
    'LazySvgoIconsRecentlyViewed': LazyComponent<typeof import("../assets/icons/Recently-viewed")['default']>
    'LazySvgoIconsRecommend': LazyComponent<typeof import("../assets/icons/Recommend")['default']>
    'LazySvgoIconsRecordingFilledAlt': LazyComponent<typeof import("../assets/icons/Recording--filled--alt")['default']>
    'LazySvgoIconsRecordingFilled': LazyComponent<typeof import("../assets/icons/Recording--filled")['default']>
    'LazySvgoIconsRecording': LazyComponent<typeof import("../assets/icons/Recording")['default']>
    'LazySvgoIconsRecycle': LazyComponent<typeof import("../assets/icons/Recycle")['default']>
    'LazySvgoIconsRedo': LazyComponent<typeof import("../assets/icons/Redo")['default']>
    'LazySvgoIconsRefEvapotranspiration': LazyComponent<typeof import("../assets/icons/Ref-evapotranspiration")['default']>
    'LazySvgoIconsReferenceArchitecture': LazyComponent<typeof import("../assets/icons/Reference-architecture")['default']>
    'LazySvgoIconsReflectHorizontal': LazyComponent<typeof import("../assets/icons/Reflect--horizontal")['default']>
    'LazySvgoIconsReflectVertical': LazyComponent<typeof import("../assets/icons/Reflect--vertical")['default']>
    'LazySvgoIconsRegionAnalysisArea': LazyComponent<typeof import("../assets/icons/Region-analysis--area")['default']>
    'LazySvgoIconsRegionAnalysisVolume': LazyComponent<typeof import("../assets/icons/Region-analysis--volume")['default']>
    'LazySvgoIconsRegistration': LazyComponent<typeof import("../assets/icons/Registration")['default']>
    'LazySvgoIconsReminderMedical': LazyComponent<typeof import("../assets/icons/Reminder--medical")['default']>
    'LazySvgoIconsReminder': LazyComponent<typeof import("../assets/icons/Reminder")['default']>
    'LazySvgoIconsRenew': LazyComponent<typeof import("../assets/icons/Renew")['default']>
    'LazySvgoIconsRepeatOne': LazyComponent<typeof import("../assets/icons/Repeat--one")['default']>
    'LazySvgoIconsRepeat': LazyComponent<typeof import("../assets/icons/Repeat")['default']>
    'LazySvgoIconsReplicate': LazyComponent<typeof import("../assets/icons/Replicate")['default']>
    'LazySvgoIconsReplyAll': LazyComponent<typeof import("../assets/icons/Reply--all")['default']>
    'LazySvgoIconsReply': LazyComponent<typeof import("../assets/icons/Reply")['default']>
    'LazySvgoIconsRepoArtifact': LazyComponent<typeof import("../assets/icons/Repo--artifact")['default']>
    'LazySvgoIconsRepoSourceCode': LazyComponent<typeof import("../assets/icons/Repo--source-code")['default']>
    'LazySvgoIconsReportData': LazyComponent<typeof import("../assets/icons/Report--data")['default']>
    'LazySvgoIconsReport': LazyComponent<typeof import("../assets/icons/Report")['default']>
    'LazySvgoIconsRequestQuote': LazyComponent<typeof import("../assets/icons/Request-quote")['default']>
    'LazySvgoIconsRequirementDefinition': LazyComponent<typeof import("../assets/icons/Requirement--definition")['default']>
    'LazySvgoIconsRequirementUsage': LazyComponent<typeof import("../assets/icons/Requirement--usage")['default']>
    'LazySvgoIconsResetAlt': LazyComponent<typeof import("../assets/icons/Reset--alt")['default']>
    'LazySvgoIconsReset': LazyComponent<typeof import("../assets/icons/Reset")['default']>
    'LazySvgoIconsRestart': LazyComponent<typeof import("../assets/icons/Restart")['default']>
    'LazySvgoIconsRestaurantFine': LazyComponent<typeof import("../assets/icons/Restaurant--fine")['default']>
    'LazySvgoIconsRestaurant': LazyComponent<typeof import("../assets/icons/Restaurant")['default']>
    'LazySvgoIconsResultDraft': LazyComponent<typeof import("../assets/icons/Result--draft")['default']>
    'LazySvgoIconsResultNew': LazyComponent<typeof import("../assets/icons/Result--new")['default']>
    'LazySvgoIconsResultOld': LazyComponent<typeof import("../assets/icons/Result--old")['default']>
    'LazySvgoIconsResult': LazyComponent<typeof import("../assets/icons/Result")['default']>
    'LazySvgoIconsRetryFailed': LazyComponent<typeof import("../assets/icons/Retry--failed")['default']>
    'LazySvgoIconsReturn': LazyComponent<typeof import("../assets/icons/Return")['default']>
    'LazySvgoIconsReview': LazyComponent<typeof import("../assets/icons/Review")['default']>
    'LazySvgoIconsRewind10': LazyComponent<typeof import("../assets/icons/Rewind--10")['default']>
    'LazySvgoIconsRewind30': LazyComponent<typeof import("../assets/icons/Rewind--30")['default']>
    'LazySvgoIconsRewind5': LazyComponent<typeof import("../assets/icons/Rewind--5")['default']>
    'LazySvgoIconsRightPanelCloseFilled': LazyComponent<typeof import("../assets/icons/Right-panel--close--filled")['default']>
    'LazySvgoIconsRightPanelClose': LazyComponent<typeof import("../assets/icons/Right-panel--close")['default']>
    'LazySvgoIconsRightPanelOpenFilled': LazyComponent<typeof import("../assets/icons/Right-panel--open--filled")['default']>
    'LazySvgoIconsRightPanelOpen': LazyComponent<typeof import("../assets/icons/Right-panel--open")['default']>
    'LazySvgoIconsRoadWeather': LazyComponent<typeof import("../assets/icons/Road--weather")['default']>
    'LazySvgoIconsRoad': LazyComponent<typeof import("../assets/icons/Road")['default']>
    'LazySvgoIconsRoadmap': LazyComponent<typeof import("../assets/icons/Roadmap")['default']>
    'LazySvgoIconsRocket': LazyComponent<typeof import("../assets/icons/Rocket")['default']>
    'LazySvgoIconsRotate180': LazyComponent<typeof import("../assets/icons/Rotate--180")['default']>
    'LazySvgoIconsRotate360': LazyComponent<typeof import("../assets/icons/Rotate--360")['default']>
    'LazySvgoIconsRotateClockwiseAltFilled': LazyComponent<typeof import("../assets/icons/Rotate--clockwise--alt--filled")['default']>
    'LazySvgoIconsRotateClockwiseAlt': LazyComponent<typeof import("../assets/icons/Rotate--clockwise--alt")['default']>
    'LazySvgoIconsRotateClockwiseFilled': LazyComponent<typeof import("../assets/icons/Rotate--clockwise--filled")['default']>
    'LazySvgoIconsRotateClockwise': LazyComponent<typeof import("../assets/icons/Rotate--clockwise")['default']>
    'LazySvgoIconsRotateCounterclockwiseAltFilled': LazyComponent<typeof import("../assets/icons/Rotate--counterclockwise--alt--filled")['default']>
    'LazySvgoIconsRotateCounterclockwiseAlt': LazyComponent<typeof import("../assets/icons/Rotate--counterclockwise--alt")['default']>
    'LazySvgoIconsRotateCounterclockwiseFilled': LazyComponent<typeof import("../assets/icons/Rotate--counterclockwise--filled")['default']>
    'LazySvgoIconsRotateCounterclockwise': LazyComponent<typeof import("../assets/icons/Rotate--counterclockwise")['default']>
    'LazySvgoIconsRotate': LazyComponent<typeof import("../assets/icons/Rotate")['default']>
    'LazySvgoIconsRouterVoice': LazyComponent<typeof import("../assets/icons/Router--voice")['default']>
    'LazySvgoIconsRouterWifi': LazyComponent<typeof import("../assets/icons/Router--wifi")['default']>
    'LazySvgoIconsRouter': LazyComponent<typeof import("../assets/icons/Router")['default']>
    'LazySvgoIconsRowCollapse': LazyComponent<typeof import("../assets/icons/Row--collapse")['default']>
    'LazySvgoIconsRowDelete': LazyComponent<typeof import("../assets/icons/Row--delete")['default']>
    'LazySvgoIconsRowExpand': LazyComponent<typeof import("../assets/icons/Row--expand")['default']>
    'LazySvgoIconsRowInsert': LazyComponent<typeof import("../assets/icons/Row--insert")['default']>
    'LazySvgoIconsRow': LazyComponent<typeof import("../assets/icons/Row")['default']>
    'LazySvgoIconsRss': LazyComponent<typeof import("../assets/icons/Rss")['default']>
    'LazySvgoIconsRuleCancelled': LazyComponent<typeof import("../assets/icons/Rule--cancelled")['default']>
    'LazySvgoIconsRuleDataQuality': LazyComponent<typeof import("../assets/icons/Rule--data-quality")['default']>
    'LazySvgoIconsRuleDraft': LazyComponent<typeof import("../assets/icons/Rule--draft")['default']>
    'LazySvgoIconsRuleFilled': LazyComponent<typeof import("../assets/icons/Rule--filled")['default']>
    'LazySvgoIconsRuleLocked': LazyComponent<typeof import("../assets/icons/Rule--locked")['default']>
    'LazySvgoIconsRulePartial': LazyComponent<typeof import("../assets/icons/Rule--partial")['default']>
    'LazySvgoIconsRuleTest': LazyComponent<typeof import("../assets/icons/Rule--test")['default']>
    'LazySvgoIconsRule': LazyComponent<typeof import("../assets/icons/Rule")['default']>
    'LazySvgoIconsRulerAlt': LazyComponent<typeof import("../assets/icons/Ruler--alt")['default']>
    'LazySvgoIconsRuler': LazyComponent<typeof import("../assets/icons/Ruler")['default']>
    'LazySvgoIconsRunMirror': LazyComponent<typeof import("../assets/icons/Run--mirror")['default']>
    'LazySvgoIconsRun': LazyComponent<typeof import("../assets/icons/Run")['default']>
    'LazySvgoIconsRunning': LazyComponent<typeof import("../assets/icons/Running")['default']>
    'LazySvgoIconsSAlt': LazyComponent<typeof import("../assets/icons/S--alt")['default']>
    'LazySvgoIconsS': LazyComponent<typeof import("../assets/icons/S")['default']>
    'LazySvgoIconsSLM': LazyComponent<typeof import("../assets/icons/SLM")['default']>
    'LazySvgoIconsSailboatCoastal': LazyComponent<typeof import("../assets/icons/Sailboat--coastal")['default']>
    'LazySvgoIconsSailboatOffshore': LazyComponent<typeof import("../assets/icons/Sailboat--offshore")['default']>
    'LazySvgoIconsSalesOps': LazyComponent<typeof import("../assets/icons/Sales-ops")['default']>
    'LazySvgoIconsSankeyDiagramAlt': LazyComponent<typeof import("../assets/icons/Sankey-diagram--alt")['default']>
    'LazySvgoIconsSankeyDiagram': LazyComponent<typeof import("../assets/icons/Sankey-diagram")['default']>
    'LazySvgoIconsSatelliteRadar': LazyComponent<typeof import("../assets/icons/Satellite--radar")['default']>
    'LazySvgoIconsSatelliteWeather': LazyComponent<typeof import("../assets/icons/Satellite--weather")['default']>
    'LazySvgoIconsSatellite': LazyComponent<typeof import("../assets/icons/Satellite")['default']>
    'LazySvgoIconsSatisfyDefinition': LazyComponent<typeof import("../assets/icons/Satisfy--definition")['default']>
    'LazySvgoIconsSatisfyUsage': LazyComponent<typeof import("../assets/icons/Satisfy--usage")['default']>
    'LazySvgoIconsSaveAnnotation': LazyComponent<typeof import("../assets/icons/Save--annotation")['default']>
    'LazySvgoIconsSaveImage': LazyComponent<typeof import("../assets/icons/Save--image")['default']>
    'LazySvgoIconsSaveModel': LazyComponent<typeof import("../assets/icons/Save--model")['default']>
    'LazySvgoIconsSaveSeries': LazyComponent<typeof import("../assets/icons/Save--series")['default']>
    'LazySvgoIconsSave': LazyComponent<typeof import("../assets/icons/Save")['default']>
    'LazySvgoIconsScale': LazyComponent<typeof import("../assets/icons/Scale")['default']>
    'LazySvgoIconsScalesTipped': LazyComponent<typeof import("../assets/icons/Scales--tipped")['default']>
    'LazySvgoIconsScales': LazyComponent<typeof import("../assets/icons/Scales")['default']>
    'LazySvgoIconsScalpelCursor': LazyComponent<typeof import("../assets/icons/Scalpel--cursor")['default']>
    'LazySvgoIconsScalpelLasso': LazyComponent<typeof import("../assets/icons/Scalpel--lasso")['default']>
    'LazySvgoIconsScalpelSelect': LazyComponent<typeof import("../assets/icons/Scalpel--select")['default']>
    'LazySvgoIconsScalpel': LazyComponent<typeof import("../assets/icons/Scalpel")['default']>
    'LazySvgoIconsScanAlt': LazyComponent<typeof import("../assets/icons/Scan--alt")['default']>
    'LazySvgoIconsScanDisabled': LazyComponent<typeof import("../assets/icons/Scan--disabled")['default']>
    'LazySvgoIconsScan': LazyComponent<typeof import("../assets/icons/Scan")['default']>
    'LazySvgoIconsScatterMatrix': LazyComponent<typeof import("../assets/icons/Scatter-matrix")['default']>
    'LazySvgoIconsSchematics': LazyComponent<typeof import("../assets/icons/Schematics")['default']>
    'LazySvgoIconsScisControlTower': LazyComponent<typeof import("../assets/icons/Scis--control-tower")['default']>
    'LazySvgoIconsScisTransparentSupply': LazyComponent<typeof import("../assets/icons/Scis--transparent-supply")['default']>
    'LazySvgoIconsScooterFront': LazyComponent<typeof import("../assets/icons/Scooter--front")['default']>
    'LazySvgoIconsScooter': LazyComponent<typeof import("../assets/icons/Scooter")['default']>
    'LazySvgoIconsScreenOff': LazyComponent<typeof import("../assets/icons/Screen--off")['default']>
    'LazySvgoIconsScreenMapSet': LazyComponent<typeof import("../assets/icons/Screen-map--set")['default']>
    'LazySvgoIconsScreenMap': LazyComponent<typeof import("../assets/icons/Screen-map")['default']>
    'LazySvgoIconsScreen': LazyComponent<typeof import("../assets/icons/Screen")['default']>
    'LazySvgoIconsScriptReference': LazyComponent<typeof import("../assets/icons/Script--reference")['default']>
    'LazySvgoIconsScript': LazyComponent<typeof import("../assets/icons/Script")['default']>
    'LazySvgoIconsSdk': LazyComponent<typeof import("../assets/icons/Sdk")['default']>
    'LazySvgoIconsSearchAdvanced': LazyComponent<typeof import("../assets/icons/Search--advanced")['default']>
    'LazySvgoIconsSearchLocateMirror': LazyComponent<typeof import("../assets/icons/Search--locate--mirror")['default']>
    'LazySvgoIconsSearchLocate': LazyComponent<typeof import("../assets/icons/Search--locate")['default']>
    'LazySvgoIconsSearch': LazyComponent<typeof import("../assets/icons/Search")['default']>
    'LazySvgoIconsSecurityServices': LazyComponent<typeof import("../assets/icons/Security-services")['default']>
    'LazySvgoIconsSecurity': LazyComponent<typeof import("../assets/icons/Security")['default']>
    'LazySvgoIconsSelect01': LazyComponent<typeof import("../assets/icons/Select--01")['default']>
    'LazySvgoIconsSelect02': LazyComponent<typeof import("../assets/icons/Select--02")['default']>
    'LazySvgoIconsSelectWindow': LazyComponent<typeof import("../assets/icons/Select--window")['default']>
    'LazySvgoIconsSendAltFilled': LazyComponent<typeof import("../assets/icons/Send--alt--filled")['default']>
    'LazySvgoIconsSendAlt': LazyComponent<typeof import("../assets/icons/Send--alt")['default']>
    'LazySvgoIconsSendFilled': LazyComponent<typeof import("../assets/icons/Send--filled")['default']>
    'LazySvgoIconsSendActionUsage': LazyComponent<typeof import("../assets/icons/Send-action--usage")['default']>
    'LazySvgoIconsSendBackward': LazyComponent<typeof import("../assets/icons/Send-backward")['default']>
    'LazySvgoIconsSendToBack': LazyComponent<typeof import("../assets/icons/Send-to-back")['default']>
    'LazySvgoIconsSend': LazyComponent<typeof import("../assets/icons/Send")['default']>
    'LazySvgoIconsServerDns': LazyComponent<typeof import("../assets/icons/Server--dns")['default']>
    'LazySvgoIconsServerProxy': LazyComponent<typeof import("../assets/icons/Server--proxy")['default']>
    'LazySvgoIconsServerTime': LazyComponent<typeof import("../assets/icons/Server--time")['default']>
    'LazySvgoIconsServiceDesk': LazyComponent<typeof import("../assets/icons/Service-desk")['default']>
    'LazySvgoIconsServiceId': LazyComponent<typeof import("../assets/icons/Service-id")['default']>
    'LazySvgoIconsServiceLevels': LazyComponent<typeof import("../assets/icons/Service-levels")['default']>
    'LazySvgoIconsSessionBorderControl': LazyComponent<typeof import("../assets/icons/Session-border-control")['default']>
    'LazySvgoIconsSettingsAdjust': LazyComponent<typeof import("../assets/icons/Settings--adjust")['default']>
    'LazySvgoIconsSettingsCheck': LazyComponent<typeof import("../assets/icons/Settings--check")['default']>
    'LazySvgoIconsSettingsEdit': LazyComponent<typeof import("../assets/icons/Settings--edit")['default']>
    'LazySvgoIconsSettingsServices': LazyComponent<typeof import("../assets/icons/Settings--services")['default']>
    'LazySvgoIconsSettingsView': LazyComponent<typeof import("../assets/icons/Settings--view")['default']>
    'LazySvgoIconsSettings': LazyComponent<typeof import("../assets/icons/Settings")['default']>
    'LazySvgoIconsShapeExcept': LazyComponent<typeof import("../assets/icons/Shape--except")['default']>
    'LazySvgoIconsShapeExclude': LazyComponent<typeof import("../assets/icons/Shape--exclude")['default']>
    'LazySvgoIconsShapeIntersect': LazyComponent<typeof import("../assets/icons/Shape--intersect")['default']>
    'LazySvgoIconsShapeJoin': LazyComponent<typeof import("../assets/icons/Shape--join")['default']>
    'LazySvgoIconsShapeUnite': LazyComponent<typeof import("../assets/icons/Shape--unite")['default']>
    'LazySvgoIconsShapes': LazyComponent<typeof import("../assets/icons/Shapes")['default']>
    'LazySvgoIconsShareKnowledge': LazyComponent<typeof import("../assets/icons/Share-knowledge")['default']>
    'LazySvgoIconsShare': LazyComponent<typeof import("../assets/icons/Share")['default']>
    'LazySvgoIconsShoppingBag': LazyComponent<typeof import("../assets/icons/Shopping--bag")['default']>
    'LazySvgoIconsShoppingCartArrowDown': LazyComponent<typeof import("../assets/icons/Shopping--cart--arrow-down")['default']>
    'LazySvgoIconsShoppingCartArrowUp': LazyComponent<typeof import("../assets/icons/Shopping--cart--arrow-up")['default']>
    'LazySvgoIconsShoppingCartClear': LazyComponent<typeof import("../assets/icons/Shopping--cart--clear")['default']>
    'LazySvgoIconsShoppingCartError': LazyComponent<typeof import("../assets/icons/Shopping--cart--error")['default']>
    'LazySvgoIconsShoppingCartMinus': LazyComponent<typeof import("../assets/icons/Shopping--cart--minus")['default']>
    'LazySvgoIconsShoppingCartPlus': LazyComponent<typeof import("../assets/icons/Shopping--cart--plus")['default']>
    'LazySvgoIconsShoppingCart': LazyComponent<typeof import("../assets/icons/Shopping--cart")['default']>
    'LazySvgoIconsShoppingCatalog': LazyComponent<typeof import("../assets/icons/Shopping--catalog")['default']>
    'LazySvgoIconsShowDataCards': LazyComponent<typeof import("../assets/icons/Show-data--cards")['default']>
    'LazySvgoIconsShrinkScreenFilled': LazyComponent<typeof import("../assets/icons/Shrink-screen--filled")['default']>
    'LazySvgoIconsShrinkScreen': LazyComponent<typeof import("../assets/icons/Shrink-screen")['default']>
    'LazySvgoIconsShuffle': LazyComponent<typeof import("../assets/icons/Shuffle")['default']>
    'LazySvgoIconsShuttle': LazyComponent<typeof import("../assets/icons/Shuttle")['default']>
    'LazySvgoIconsSidePanelCloseFilled': LazyComponent<typeof import("../assets/icons/Side-panel--close--filled")['default']>
    'LazySvgoIconsSidePanelClose': LazyComponent<typeof import("../assets/icons/Side-panel--close")['default']>
    'LazySvgoIconsSidePanelOpenFilled': LazyComponent<typeof import("../assets/icons/Side-panel--open--filled")['default']>
    'LazySvgoIconsSidePanelOpen': LazyComponent<typeof import("../assets/icons/Side-panel--open")['default']>
    'LazySvgoIconsSight': LazyComponent<typeof import("../assets/icons/Sight")['default']>
    'LazySvgoIconsSigma': LazyComponent<typeof import("../assets/icons/Sigma")['default']>
    'LazySvgoIconsSignalStrength': LazyComponent<typeof import("../assets/icons/Signal-strength")['default']>
    'LazySvgoIconsSimCard': LazyComponent<typeof import("../assets/icons/Sim-card")['default']>
    'LazySvgoIconsSkillLevelAdvanced': LazyComponent<typeof import("../assets/icons/Skill-level--advanced")['default']>
    'LazySvgoIconsSkillLevelBasic': LazyComponent<typeof import("../assets/icons/Skill-level--basic")['default']>
    'LazySvgoIconsSkillLevelIntermediate': LazyComponent<typeof import("../assets/icons/Skill-level--intermediate")['default']>
    'LazySvgoIconsSkillLevel': LazyComponent<typeof import("../assets/icons/Skill-level")['default']>
    'LazySvgoIconsSkipBackFilled': LazyComponent<typeof import("../assets/icons/Skip--back--filled")['default']>
    'LazySvgoIconsSkipBackOutlineFilled': LazyComponent<typeof import("../assets/icons/Skip--back--outline--filled")['default']>
    'LazySvgoIconsSkipBackOutlineSolid': LazyComponent<typeof import("../assets/icons/Skip--back--outline--solid")['default']>
    'LazySvgoIconsSkipBackOutline': LazyComponent<typeof import("../assets/icons/Skip--back--outline")['default']>
    'LazySvgoIconsSkipBackSolidFilled': LazyComponent<typeof import("../assets/icons/Skip--back--solid--filled")['default']>
    'LazySvgoIconsSkipBack': LazyComponent<typeof import("../assets/icons/Skip--back")['default']>
    'LazySvgoIconsSkipForwardFilled': LazyComponent<typeof import("../assets/icons/Skip--forward--filled")['default']>
    'LazySvgoIconsSkipForwardOutlineFilled': LazyComponent<typeof import("../assets/icons/Skip--forward--outline--filled")['default']>
    'LazySvgoIconsSkipForwardOutlineSolid': LazyComponent<typeof import("../assets/icons/Skip--forward--outline--solid")['default']>
    'LazySvgoIconsSkipForwardOutline': LazyComponent<typeof import("../assets/icons/Skip--forward--outline")['default']>
    'LazySvgoIconsSkipForwardSolidFilled': LazyComponent<typeof import("../assets/icons/Skip--forward--solid--filled")['default']>
    'LazySvgoIconsSkipForward': LazyComponent<typeof import("../assets/icons/Skip--forward")['default']>
    'LazySvgoIconsSleet': LazyComponent<typeof import("../assets/icons/Sleet")['default']>
    'LazySvgoIconsSlisor': LazyComponent<typeof import("../assets/icons/Slisor")['default']>
    'LazySvgoIconsSmell': LazyComponent<typeof import("../assets/icons/Smell")['default']>
    'LazySvgoIconsSmoke': LazyComponent<typeof import("../assets/icons/Smoke")['default']>
    'LazySvgoIconsSmoothingCursor': LazyComponent<typeof import("../assets/icons/Smoothing--cursor")['default']>
    'LazySvgoIconsSmoothing': LazyComponent<typeof import("../assets/icons/Smoothing")['default']>
    'LazySvgoIconsSnooze': LazyComponent<typeof import("../assets/icons/Snooze")['default']>
    'LazySvgoIconsSnowBlizzard': LazyComponent<typeof import("../assets/icons/Snow--blizzard")['default']>
    'LazySvgoIconsSnowHeavy': LazyComponent<typeof import("../assets/icons/Snow--heavy")['default']>
    'LazySvgoIconsSnowScatteredNight': LazyComponent<typeof import("../assets/icons/Snow--scattered--night")['default']>
    'LazySvgoIconsSnowScattered': LazyComponent<typeof import("../assets/icons/Snow--scattered")['default']>
    'LazySvgoIconsSnowDensity': LazyComponent<typeof import("../assets/icons/Snow-density")['default']>
    'LazySvgoIconsSnow': LazyComponent<typeof import("../assets/icons/Snow")['default']>
    'LazySvgoIconsSnowflake': LazyComponent<typeof import("../assets/icons/Snowflake")['default']>
    'LazySvgoIconsSoccer': LazyComponent<typeof import("../assets/icons/Soccer")['default']>
    'LazySvgoIconsSoftwareResourceCluster': LazyComponent<typeof import("../assets/icons/Software-resource--cluster")['default']>
    'LazySvgoIconsSoftwareResourceResource': LazyComponent<typeof import("../assets/icons/Software-resource--resource")['default']>
    'LazySvgoIconsSoftwareResource': LazyComponent<typeof import("../assets/icons/Software-resource")['default']>
    'LazySvgoIconsSoilMoistureField': LazyComponent<typeof import("../assets/icons/Soil-moisture--field")['default']>
    'LazySvgoIconsSoilMoistureGlobal': LazyComponent<typeof import("../assets/icons/Soil-moisture--global")['default']>
    'LazySvgoIconsSoilMoisture': LazyComponent<typeof import("../assets/icons/Soil-moisture")['default']>
    'LazySvgoIconsSoilTemperatureField': LazyComponent<typeof import("../assets/icons/Soil-temperature--field")['default']>
    'LazySvgoIconsSoilTemperatureGlobal': LazyComponent<typeof import("../assets/icons/Soil-temperature--global")['default']>
    'LazySvgoIconsSoilTemperature': LazyComponent<typeof import("../assets/icons/Soil-temperature")['default']>
    'LazySvgoIconsSolarPanel': LazyComponent<typeof import("../assets/icons/Solar-panel")['default']>
    'LazySvgoIconsSortAscending': LazyComponent<typeof import("../assets/icons/Sort--ascending")['default']>
    'LazySvgoIconsSortDescending': LazyComponent<typeof import("../assets/icons/Sort--descending")['default']>
    'LazySvgoIconsSortRemove': LazyComponent<typeof import("../assets/icons/Sort--remove")['default']>
    'LazySvgoIconsSpellCheck': LazyComponent<typeof import("../assets/icons/Spell-check")['default']>
    'LazySvgoIconsSpineLabel': LazyComponent<typeof import("../assets/icons/Spine-label")['default']>
    'LazySvgoIconsSplitDiscard': LazyComponent<typeof import("../assets/icons/Split--discard")['default']>
    'LazySvgoIconsSplitScreen': LazyComponent<typeof import("../assets/icons/Split-screen")['default']>
    'LazySvgoIconsSplit': LazyComponent<typeof import("../assets/icons/Split")['default']>
    'LazySvgoIconsSprayPaint': LazyComponent<typeof import("../assets/icons/Spray-paint")['default']>
    'LazySvgoIconsSprout': LazyComponent<typeof import("../assets/icons/Sprout")['default']>
    'LazySvgoIconsSql': LazyComponent<typeof import("../assets/icons/Sql")['default']>
    'LazySvgoIconsSquareOutline': LazyComponent<typeof import("../assets/icons/Square--outline")['default']>
    'LazySvgoIconsSquareSolid': LazyComponent<typeof import("../assets/icons/Square--solid")['default']>
    'LazySvgoIconsStackLimitation': LazyComponent<typeof import("../assets/icons/Stack-limitation")['default']>
    'LazySvgoIconsStackedMove': LazyComponent<typeof import("../assets/icons/Stacked-move")['default']>
    'LazySvgoIconsStackedScrolling1': LazyComponent<typeof import("../assets/icons/Stacked-scrolling--1")['default']>
    'LazySvgoIconsStackedScrolling2': LazyComponent<typeof import("../assets/icons/Stacked-scrolling--2")['default']>
    'LazySvgoIconsStamp': LazyComponent<typeof import("../assets/icons/Stamp")['default']>
    'LazySvgoIconsStarFilled': LazyComponent<typeof import("../assets/icons/Star--filled")['default']>
    'LazySvgoIconsStarHalf': LazyComponent<typeof import("../assets/icons/Star--half")['default']>
    'LazySvgoIconsStarReview': LazyComponent<typeof import("../assets/icons/Star--review")['default']>
    'LazySvgoIconsStar': LazyComponent<typeof import("../assets/icons/Star")['default']>
    'LazySvgoIconsStatusAcknowledge': LazyComponent<typeof import("../assets/icons/Status--acknowledge")['default']>
    'LazySvgoIconsStatusPartialFail': LazyComponent<typeof import("../assets/icons/Status--partial-fail")['default']>
    'LazySvgoIconsStatusResolved': LazyComponent<typeof import("../assets/icons/Status--resolved")['default']>
    'LazySvgoIconsStayInside': LazyComponent<typeof import("../assets/icons/Stay-inside")['default']>
    'LazySvgoIconsStemLeafPlot': LazyComponent<typeof import("../assets/icons/Stem-leaf-plot")['default']>
    'LazySvgoIconsStethoscope': LazyComponent<typeof import("../assets/icons/Stethoscope")['default']>
    'LazySvgoIconsStopFilledAlt': LazyComponent<typeof import("../assets/icons/Stop--filled--alt")['default']>
    'LazySvgoIconsStopFilled': LazyComponent<typeof import("../assets/icons/Stop--filled")['default']>
    'LazySvgoIconsStopOutlineFilled': LazyComponent<typeof import("../assets/icons/Stop--outline--filled")['default']>
    'LazySvgoIconsStopOutline': LazyComponent<typeof import("../assets/icons/Stop--outline")['default']>
    'LazySvgoIconsStopSignFilled': LazyComponent<typeof import("../assets/icons/Stop-sign--filled")['default']>
    'LazySvgoIconsStopSign': LazyComponent<typeof import("../assets/icons/Stop-sign")['default']>
    'LazySvgoIconsStop': LazyComponent<typeof import("../assets/icons/Stop")['default']>
    'LazySvgoIconsStoragePool': LazyComponent<typeof import("../assets/icons/Storage-pool")['default']>
    'LazySvgoIconsStorageRequest': LazyComponent<typeof import("../assets/icons/Storage-request")['default']>
    'LazySvgoIconsStore': LazyComponent<typeof import("../assets/icons/Store")['default']>
    'LazySvgoIconsStormTracker': LazyComponent<typeof import("../assets/icons/Storm-tracker")['default']>
    'LazySvgoIconsStrategyPlay': LazyComponent<typeof import("../assets/icons/Strategy-play")['default']>
    'LazySvgoIconsStrawberry': LazyComponent<typeof import("../assets/icons/Strawberry")['default']>
    'LazySvgoIconsStressBreathEditor': LazyComponent<typeof import("../assets/icons/Stress-breath-editor")['default']>
    'LazySvgoIconsStudyNext': LazyComponent<typeof import("../assets/icons/Study--next")['default']>
    'LazySvgoIconsStudyPrevious': LazyComponent<typeof import("../assets/icons/Study--previous")['default']>
    'LazySvgoIconsStudyRead': LazyComponent<typeof import("../assets/icons/Study--read")['default']>
    'LazySvgoIconsStudySkip': LazyComponent<typeof import("../assets/icons/Study--skip")['default']>
    'LazySvgoIconsStudyTransfer': LazyComponent<typeof import("../assets/icons/Study--transfer")['default']>
    'LazySvgoIconsStudyUnread': LazyComponent<typeof import("../assets/icons/Study--unread")['default']>
    'LazySvgoIconsStudyView': LazyComponent<typeof import("../assets/icons/Study--view")['default']>
    'LazySvgoIconsSubVolume': LazyComponent<typeof import("../assets/icons/Sub-volume")['default']>
    'LazySvgoIconsSubclassification': LazyComponent<typeof import("../assets/icons/Subclassification")['default']>
    'LazySvgoIconsSubdirectory': LazyComponent<typeof import("../assets/icons/Subdirectory")['default']>
    'LazySvgoIconsSubflowLocal': LazyComponent<typeof import("../assets/icons/Subflow--local")['default']>
    'LazySvgoIconsSubflow': LazyComponent<typeof import("../assets/icons/Subflow")['default']>
    'LazySvgoIconsSubjectDefinition': LazyComponent<typeof import("../assets/icons/Subject--definition")['default']>
    'LazySvgoIconsSubjectUsage': LazyComponent<typeof import("../assets/icons/Subject--usage")['default']>
    'LazySvgoIconsSubnetAclRules': LazyComponent<typeof import("../assets/icons/Subnet-acl-rules")['default']>
    'LazySvgoIconsSubtractAlt': LazyComponent<typeof import("../assets/icons/Subtract--alt")['default']>
    'LazySvgoIconsSubtractFilled': LazyComponent<typeof import("../assets/icons/Subtract--filled")['default']>
    'LazySvgoIconsSubtractLarge': LazyComponent<typeof import("../assets/icons/Subtract--large")['default']>
    'LazySvgoIconsSubtract': LazyComponent<typeof import("../assets/icons/Subtract")['default']>
    'LazySvgoIconsSuccession': LazyComponent<typeof import("../assets/icons/Succession")['default']>
    'LazySvgoIconsSummaryKPIMirror': LazyComponent<typeof import("../assets/icons/Summary--KPI--mirror")['default']>
    'LazySvgoIconsSummaryKpi': LazyComponent<typeof import("../assets/icons/Summary--kpi")['default']>
    'LazySvgoIconsSun': LazyComponent<typeof import("../assets/icons/Sun")['default']>
    'LazySvgoIconsSunrise': LazyComponent<typeof import("../assets/icons/Sunrise")['default']>
    'LazySvgoIconsSunset': LazyComponent<typeof import("../assets/icons/Sunset")['default']>
    'LazySvgoIconsSupportVectorMachine': LazyComponent<typeof import("../assets/icons/Support-vector-machine")['default']>
    'LazySvgoIconsSustainability': LazyComponent<typeof import("../assets/icons/Sustainability")['default']>
    'LazySvgoIconsSvg': LazyComponent<typeof import("../assets/icons/Svg")['default']>
    'LazySvgoIconsSwim': LazyComponent<typeof import("../assets/icons/Swim")['default']>
    'LazySvgoIconsSwitchLayer2': LazyComponent<typeof import("../assets/icons/Switch-layer-2")['default']>
    'LazySvgoIconsSwitchLayer3': LazyComponent<typeof import("../assets/icons/Switch-layer-3")['default']>
    'LazySvgoIconsSwitcher': LazyComponent<typeof import("../assets/icons/Switcher")['default']>
    'LazySvgoIconsSyncSettings': LazyComponent<typeof import("../assets/icons/Sync-settings")['default']>
    'LazySvgoIconsSysProvision': LazyComponent<typeof import("../assets/icons/Sys-provision")['default']>
    'LazySvgoIconsSysplexDistributor': LazyComponent<typeof import("../assets/icons/Sysplex--distributor")['default']>
    'LazySvgoIconsTAlt': LazyComponent<typeof import("../assets/icons/T--alt")['default']>
    'LazySvgoIconsT': LazyComponent<typeof import("../assets/icons/T")['default']>
    'LazySvgoIconsTableAlias': LazyComponent<typeof import("../assets/icons/Table--alias")['default']>
    'LazySvgoIconsTableBuilt': LazyComponent<typeof import("../assets/icons/Table--built")['default']>
    'LazySvgoIconsTableShortcut': LazyComponent<typeof import("../assets/icons/Table--shortcut")['default']>
    'LazySvgoIconsTableSplit': LazyComponent<typeof import("../assets/icons/Table--split")['default']>
    'LazySvgoIconsTableOfContents': LazyComponent<typeof import("../assets/icons/Table-of-contents")['default']>
    'LazySvgoIconsTable': LazyComponent<typeof import("../assets/icons/Table")['default']>
    'LazySvgoIconsTabletLandscape': LazyComponent<typeof import("../assets/icons/Tablet--landscape")['default']>
    'LazySvgoIconsTablet': LazyComponent<typeof import("../assets/icons/Tablet")['default']>
    'LazySvgoIconsTagEdit': LazyComponent<typeof import("../assets/icons/Tag--edit")['default']>
    'LazySvgoIconsTagExport': LazyComponent<typeof import("../assets/icons/Tag--export")['default']>
    'LazySvgoIconsTagGroup': LazyComponent<typeof import("../assets/icons/Tag--group")['default']>
    'LazySvgoIconsTagImport': LazyComponent<typeof import("../assets/icons/Tag--import")['default']>
    'LazySvgoIconsTagNone': LazyComponent<typeof import("../assets/icons/Tag--none")['default']>
    'LazySvgoIconsTag': LazyComponent<typeof import("../assets/icons/Tag")['default']>
    'LazySvgoIconsTank': LazyComponent<typeof import("../assets/icons/Tank")['default']>
    'LazySvgoIconsTaskAdd': LazyComponent<typeof import("../assets/icons/Task--add")['default']>
    'LazySvgoIconsTaskApproved': LazyComponent<typeof import("../assets/icons/Task--approved")['default']>
    'LazySvgoIconsTaskAssetView': LazyComponent<typeof import("../assets/icons/Task--asset-view")['default']>
    'LazySvgoIconsTaskComplete': LazyComponent<typeof import("../assets/icons/Task--complete")['default']>
    'LazySvgoIconsTaskLocation': LazyComponent<typeof import("../assets/icons/Task--location")['default']>
    'LazySvgoIconsTaskRemove': LazyComponent<typeof import("../assets/icons/Task--remove")['default']>
    'LazySvgoIconsTaskSettings': LazyComponent<typeof import("../assets/icons/Task--settings")['default']>
    'LazySvgoIconsTaskStar': LazyComponent<typeof import("../assets/icons/Task--star")['default']>
    'LazySvgoIconsTaskTools': LazyComponent<typeof import("../assets/icons/Task--tools")['default']>
    'LazySvgoIconsTaskView': LazyComponent<typeof import("../assets/icons/Task--view")['default']>
    'LazySvgoIconsTask': LazyComponent<typeof import("../assets/icons/Task")['default']>
    'LazySvgoIconsTaste': LazyComponent<typeof import("../assets/icons/Taste")['default']>
    'LazySvgoIconsTaxi': LazyComponent<typeof import("../assets/icons/Taxi")['default']>
    'LazySvgoIconsTcpIpService': LazyComponent<typeof import("../assets/icons/Tcp-ip-service")['default']>
    'LazySvgoIconsTemperatureCelsiusAlt': LazyComponent<typeof import("../assets/icons/Temperature--celsius--alt")['default']>
    'LazySvgoIconsTemperatureCelsius': LazyComponent<typeof import("../assets/icons/Temperature--celsius")['default']>
    'LazySvgoIconsTemperatureFahrenheitAlt': LazyComponent<typeof import("../assets/icons/Temperature--fahrenheit--alt")['default']>
    'LazySvgoIconsTemperatureFahrenheit': LazyComponent<typeof import("../assets/icons/Temperature--fahrenheit")['default']>
    'LazySvgoIconsTemperatureFeelsLike': LazyComponent<typeof import("../assets/icons/Temperature--feels-like")['default']>
    'LazySvgoIconsTemperatureFrigid': LazyComponent<typeof import("../assets/icons/Temperature--frigid")['default']>
    'LazySvgoIconsTemperatureHot': LazyComponent<typeof import("../assets/icons/Temperature--hot")['default']>
    'LazySvgoIconsTemperatureInversion': LazyComponent<typeof import("../assets/icons/Temperature--inversion")['default']>
    'LazySvgoIconsTemperatureMax': LazyComponent<typeof import("../assets/icons/Temperature--max")['default']>
    'LazySvgoIconsTemperatureMin': LazyComponent<typeof import("../assets/icons/Temperature--min")['default']>
    'LazySvgoIconsTemperatureWater': LazyComponent<typeof import("../assets/icons/Temperature--water")['default']>
    'LazySvgoIconsTemperature': LazyComponent<typeof import("../assets/icons/Temperature")['default']>
    'LazySvgoIconsTemplate': LazyComponent<typeof import("../assets/icons/Template")['default']>
    'LazySvgoIconsTennisBall': LazyComponent<typeof import("../assets/icons/Tennis-ball")['default']>
    'LazySvgoIconsTennis': LazyComponent<typeof import("../assets/icons/Tennis")['default']>
    'LazySvgoIconsTermReference': LazyComponent<typeof import("../assets/icons/Term--reference")['default']>
    'LazySvgoIconsTerm': LazyComponent<typeof import("../assets/icons/Term")['default']>
    'LazySvgoIconsTerminal3270': LazyComponent<typeof import("../assets/icons/Terminal--3270")['default']>
    'LazySvgoIconsTerminal': LazyComponent<typeof import("../assets/icons/Terminal")['default']>
    'LazySvgoIconsTestTool': LazyComponent<typeof import("../assets/icons/Test-tool")['default']>
    'LazySvgoIconsTextAlignCenter': LazyComponent<typeof import("../assets/icons/Text--align--center")['default']>
    'LazySvgoIconsTextAlignJustify': LazyComponent<typeof import("../assets/icons/Text--align--justify")['default']>
    'LazySvgoIconsTextAlignLeft': LazyComponent<typeof import("../assets/icons/Text--align--left")['default']>
    'LazySvgoIconsTextAlignMixed': LazyComponent<typeof import("../assets/icons/Text--align--mixed")['default']>
    'LazySvgoIconsTextAlignRight': LazyComponent<typeof import("../assets/icons/Text--align--right")['default']>
    'LazySvgoIconsTextAllCaps': LazyComponent<typeof import("../assets/icons/Text--all-caps")['default']>
    'LazySvgoIconsTextBold': LazyComponent<typeof import("../assets/icons/Text--bold")['default']>
    'LazySvgoIconsTextClearFormat': LazyComponent<typeof import("../assets/icons/Text--clear-format")['default']>
    'LazySvgoIconsTextColor': LazyComponent<typeof import("../assets/icons/Text--color")['default']>
    'LazySvgoIconsTextCreation': LazyComponent<typeof import("../assets/icons/Text--creation")['default']>
    'LazySvgoIconsTextFill': LazyComponent<typeof import("../assets/icons/Text--fill")['default']>
    'LazySvgoIconsTextFont': LazyComponent<typeof import("../assets/icons/Text--font")['default']>
    'LazySvgoIconsTextFootnote': LazyComponent<typeof import("../assets/icons/Text--footnote")['default']>
    'LazySvgoIconsTextHighlight': LazyComponent<typeof import("../assets/icons/Text--highlight")['default']>
    'LazySvgoIconsTextIndentLess': LazyComponent<typeof import("../assets/icons/Text--indent--less")['default']>
    'LazySvgoIconsTextIndentMore': LazyComponent<typeof import("../assets/icons/Text--indent--more")['default']>
    'LazySvgoIconsTextIndent': LazyComponent<typeof import("../assets/icons/Text--indent")['default']>
    'LazySvgoIconsTextItalic': LazyComponent<typeof import("../assets/icons/Text--italic")['default']>
    'LazySvgoIconsTextKerning': LazyComponent<typeof import("../assets/icons/Text--kerning")['default']>
    'LazySvgoIconsTextLeading': LazyComponent<typeof import("../assets/icons/Text--leading")['default']>
    'LazySvgoIconsTextLineSpacing': LazyComponent<typeof import("../assets/icons/Text--line-spacing")['default']>
    'LazySvgoIconsTextLongParagraph': LazyComponent<typeof import("../assets/icons/Text--long-paragraph")['default']>
    'LazySvgoIconsTextNewLine': LazyComponent<typeof import("../assets/icons/Text--new-line")['default']>
    'LazySvgoIconsTextScale': LazyComponent<typeof import("../assets/icons/Text--scale")['default']>
    'LazySvgoIconsTextSelection': LazyComponent<typeof import("../assets/icons/Text--selection")['default']>
    'LazySvgoIconsTextShortParagraph': LazyComponent<typeof import("../assets/icons/Text--short-paragraph")['default']>
    'LazySvgoIconsTextSmallCaps': LazyComponent<typeof import("../assets/icons/Text--small-caps")['default']>
    'LazySvgoIconsTextStrikethrough': LazyComponent<typeof import("../assets/icons/Text--strikethrough")['default']>
    'LazySvgoIconsTextSubscript': LazyComponent<typeof import("../assets/icons/Text--subscript")['default']>
    'LazySvgoIconsTextSuperscript': LazyComponent<typeof import("../assets/icons/Text--superscript")['default']>
    'LazySvgoIconsTextTracking': LazyComponent<typeof import("../assets/icons/Text--tracking")['default']>
    'LazySvgoIconsTextUnderline': LazyComponent<typeof import("../assets/icons/Text--underline")['default']>
    'LazySvgoIconsTextVerticalAlignment': LazyComponent<typeof import("../assets/icons/Text--vertical-alignment")['default']>
    'LazySvgoIconsTextWrap': LazyComponent<typeof import("../assets/icons/Text--wrap")['default']>
    'LazySvgoIconsTextAnnotationToggle': LazyComponent<typeof import("../assets/icons/Text-annotation-toggle")['default']>
    'LazySvgoIconsTextLinkAnalysis': LazyComponent<typeof import("../assets/icons/Text-link--analysis")['default']>
    'LazySvgoIconsTextLink': LazyComponent<typeof import("../assets/icons/Text-link")['default']>
    'LazySvgoIconsTextMiningApplier': LazyComponent<typeof import("../assets/icons/Text-mining--applier")['default']>
    'LazySvgoIconsTextMining': LazyComponent<typeof import("../assets/icons/Text-mining")['default']>
    'LazySvgoIconsTheater': LazyComponent<typeof import("../assets/icons/Theater")['default']>
    'LazySvgoIconsThisSideUp': LazyComponent<typeof import("../assets/icons/This-side-up")['default']>
    'LazySvgoIconsThreshold': LazyComponent<typeof import("../assets/icons/Threshold")['default']>
    'LazySvgoIconsThumbnail1': LazyComponent<typeof import("../assets/icons/Thumbnail--1")['default']>
    'LazySvgoIconsThumbnail2': LazyComponent<typeof import("../assets/icons/Thumbnail--2")['default']>
    'LazySvgoIconsThumbnailPreview': LazyComponent<typeof import("../assets/icons/Thumbnail-preview")['default']>
    'LazySvgoIconsThumbsDownFilled': LazyComponent<typeof import("../assets/icons/Thumbs-down--filled")['default']>
    'LazySvgoIconsThumbsDown': LazyComponent<typeof import("../assets/icons/Thumbs-down")['default']>
    'LazySvgoIconsThumbsUpFilled': LazyComponent<typeof import("../assets/icons/Thumbs-up--filled")['default']>
    'LazySvgoIconsThumbsUp': LazyComponent<typeof import("../assets/icons/Thumbs-up")['default']>
    'LazySvgoIconsThunderstormScatteredNight': LazyComponent<typeof import("../assets/icons/Thunderstorm--scattered--night")['default']>
    'LazySvgoIconsThunderstormScattered': LazyComponent<typeof import("../assets/icons/Thunderstorm--scattered")['default']>
    'LazySvgoIconsThunderstormSevere': LazyComponent<typeof import("../assets/icons/Thunderstorm--severe")['default']>
    'LazySvgoIconsThunderstormStrong': LazyComponent<typeof import("../assets/icons/Thunderstorm--strong")['default']>
    'LazySvgoIconsThunderstorm': LazyComponent<typeof import("../assets/icons/Thunderstorm")['default']>
    'LazySvgoIconsTicket': LazyComponent<typeof import("../assets/icons/Ticket")['default']>
    'LazySvgoIconsTides': LazyComponent<typeof import("../assets/icons/Tides")['default']>
    'LazySvgoIconsTif': LazyComponent<typeof import("../assets/icons/Tif")['default']>
    'LazySvgoIconsTimeFilled': LazyComponent<typeof import("../assets/icons/Time--filled")['default']>
    'LazySvgoIconsTimePlot': LazyComponent<typeof import("../assets/icons/Time-plot")['default']>
    'LazySvgoIconsTime': LazyComponent<typeof import("../assets/icons/Time")['default']>
    'LazySvgoIconsTimer': LazyComponent<typeof import("../assets/icons/Timer")['default']>
    'LazySvgoIconsTimingBelt': LazyComponent<typeof import("../assets/icons/Timing-belt")['default']>
    'LazySvgoIconsToolBox': LazyComponent<typeof import("../assets/icons/Tool-box")['default']>
    'LazySvgoIconsToolKit': LazyComponent<typeof import("../assets/icons/Tool-kit")['default']>
    'LazySvgoIconsToolsAlt': LazyComponent<typeof import("../assets/icons/Tools--alt")['default']>
    'LazySvgoIconsTools': LazyComponent<typeof import("../assets/icons/Tools")['default']>
    'LazySvgoIconsTornadoWarning': LazyComponent<typeof import("../assets/icons/Tornado-warning")['default']>
    'LazySvgoIconsTornado': LazyComponent<typeof import("../assets/icons/Tornado")['default']>
    'LazySvgoIconsTouch1Filled': LazyComponent<typeof import("../assets/icons/Touch--1--filled")['default']>
    'LazySvgoIconsTouch1DownFilled': LazyComponent<typeof import("../assets/icons/Touch--1-down--filled")['default']>
    'LazySvgoIconsTouch1Down': LazyComponent<typeof import("../assets/icons/Touch--1-down")['default']>
    'LazySvgoIconsTouch1': LazyComponent<typeof import("../assets/icons/Touch--1")['default']>
    'LazySvgoIconsTouch2Filled': LazyComponent<typeof import("../assets/icons/Touch--2--filled")['default']>
    'LazySvgoIconsTouch2': LazyComponent<typeof import("../assets/icons/Touch--2")['default']>
    'LazySvgoIconsTouchInteraction': LazyComponent<typeof import("../assets/icons/Touch--interaction")['default']>
    'LazySvgoIconsTour': LazyComponent<typeof import("../assets/icons/Tour")['default']>
    'LazySvgoIconsTrafficEvent': LazyComponent<typeof import("../assets/icons/Traffic--event")['default']>
    'LazySvgoIconsTrafficFlowIncident': LazyComponent<typeof import("../assets/icons/Traffic--flow-incident")['default']>
    'LazySvgoIconsTrafficFlow': LazyComponent<typeof import("../assets/icons/Traffic--flow")['default']>
    'LazySvgoIconsTrafficIncident': LazyComponent<typeof import("../assets/icons/Traffic--incident")['default']>
    'LazySvgoIconsTrafficWeatherIncident': LazyComponent<typeof import("../assets/icons/Traffic--weather-incident")['default']>
    'LazySvgoIconsTrafficCone': LazyComponent<typeof import("../assets/icons/Traffic-cone")['default']>
    'LazySvgoIconsTrainHeart': LazyComponent<typeof import("../assets/icons/Train--heart")['default']>
    'LazySvgoIconsTrainProfile': LazyComponent<typeof import("../assets/icons/Train--profile")['default']>
    'LazySvgoIconsTrainSpeed': LazyComponent<typeof import("../assets/icons/Train--speed")['default']>
    'LazySvgoIconsTrainTicket': LazyComponent<typeof import("../assets/icons/Train--ticket")['default']>
    'LazySvgoIconsTrainTime': LazyComponent<typeof import("../assets/icons/Train--time")['default']>
    'LazySvgoIconsTrain': LazyComponent<typeof import("../assets/icons/Train")['default']>
    'LazySvgoIconsTram': LazyComponent<typeof import("../assets/icons/Tram")['default']>
    'LazySvgoIconsTransformBinary': LazyComponent<typeof import("../assets/icons/Transform--binary")['default']>
    'LazySvgoIconsTransformCode': LazyComponent<typeof import("../assets/icons/Transform--code")['default']>
    'LazySvgoIconsTransformInstructions': LazyComponent<typeof import("../assets/icons/Transform--instructions")['default']>
    'LazySvgoIconsTransformLanguage': LazyComponent<typeof import("../assets/icons/Transform--language")['default']>
    'LazySvgoIconsTransgender': LazyComponent<typeof import("../assets/icons/Transgender")['default']>
    'LazySvgoIconsTranslate': LazyComponent<typeof import("../assets/icons/Translate")['default']>
    'LazySvgoIconsTransmissionLte': LazyComponent<typeof import("../assets/icons/Transmission-lte")['default']>
    'LazySvgoIconsTranspose': LazyComponent<typeof import("../assets/icons/Transpose")['default']>
    'LazySvgoIconsTrashCan': LazyComponent<typeof import("../assets/icons/Trash-can")['default']>
    'LazySvgoIconsTreeFallRisk': LazyComponent<typeof import("../assets/icons/Tree--fall-risk")['default']>
    'LazySvgoIconsTreeViewAlt': LazyComponent<typeof import("../assets/icons/Tree-view--alt")['default']>
    'LazySvgoIconsTreeView': LazyComponent<typeof import("../assets/icons/Tree-view")['default']>
    'LazySvgoIconsTree': LazyComponent<typeof import("../assets/icons/Tree")['default']>
    'LazySvgoIconsTriangleDownOutline': LazyComponent<typeof import("../assets/icons/Triangle--down--outline")['default']>
    'LazySvgoIconsTriangleDownSolid': LazyComponent<typeof import("../assets/icons/Triangle--down--solid")['default']>
    'LazySvgoIconsTriangleLeftOutline': LazyComponent<typeof import("../assets/icons/Triangle--left--outline")['default']>
    'LazySvgoIconsTriangleLeftSolid': LazyComponent<typeof import("../assets/icons/Triangle--left--solid")['default']>
    'LazySvgoIconsTriangleOutline': LazyComponent<typeof import("../assets/icons/Triangle--outline")['default']>
    'LazySvgoIconsTriangleRightOutline': LazyComponent<typeof import("../assets/icons/Triangle--right--outline")['default']>
    'LazySvgoIconsTriangleRightSolid': LazyComponent<typeof import("../assets/icons/Triangle--right--solid")['default']>
    'LazySvgoIconsTriangleSolid': LazyComponent<typeof import("../assets/icons/Triangle--solid")['default']>
    'LazySvgoIconsTrophyFilled': LazyComponent<typeof import("../assets/icons/Trophy--filled")['default']>
    'LazySvgoIconsTrophy': LazyComponent<typeof import("../assets/icons/Trophy")['default']>
    'LazySvgoIconsTropicalStormModelTracks': LazyComponent<typeof import("../assets/icons/Tropical-storm--model-tracks")['default']>
    'LazySvgoIconsTropicalStormTracks': LazyComponent<typeof import("../assets/icons/Tropical-storm--tracks")['default']>
    'LazySvgoIconsTropicalStorm': LazyComponent<typeof import("../assets/icons/Tropical-storm")['default']>
    'LazySvgoIconsTropicalWarning': LazyComponent<typeof import("../assets/icons/Tropical-warning")['default']>
    'LazySvgoIconsTsq': LazyComponent<typeof import("../assets/icons/Tsq")['default']>
    'LazySvgoIconsTsunami': LazyComponent<typeof import("../assets/icons/Tsunami")['default']>
    'LazySvgoIconsTsv': LazyComponent<typeof import("../assets/icons/Tsv")['default']>
    'LazySvgoIconsTuning': LazyComponent<typeof import("../assets/icons/Tuning")['default']>
    'LazySvgoIconsTwoFactorAuthentication': LazyComponent<typeof import("../assets/icons/Two-factor-authentication")['default']>
    'LazySvgoIconsTwoPersonLift': LazyComponent<typeof import("../assets/icons/Two-person-lift")['default']>
    'LazySvgoIconsTxtReference': LazyComponent<typeof import("../assets/icons/Txt--reference")['default']>
    'LazySvgoIconsTxt': LazyComponent<typeof import("../assets/icons/Txt")['default']>
    'LazySvgoIconsTypePattern': LazyComponent<typeof import("../assets/icons/Type-pattern")['default']>
    'LazySvgoIconsTypes': LazyComponent<typeof import("../assets/icons/Types")['default']>
    'LazySvgoIconsU1': LazyComponent<typeof import("../assets/icons/U1")['default']>
    'LazySvgoIconsU2': LazyComponent<typeof import("../assets/icons/U2")['default']>
    'LazySvgoIconsU3': LazyComponent<typeof import("../assets/icons/U3")['default']>
    'LazySvgoIconsURL': LazyComponent<typeof import("../assets/icons/URL")['default']>
    'LazySvgoIconsUmbrella': LazyComponent<typeof import("../assets/icons/Umbrella")['default']>
    'LazySvgoIconsUndefinedFilled': LazyComponent<typeof import("../assets/icons/Undefined--filled")['default']>
    'LazySvgoIconsUndefined': LazyComponent<typeof import("../assets/icons/Undefined")['default']>
    'LazySvgoIconsUndo': LazyComponent<typeof import("../assets/icons/Undo")['default']>
    'LazySvgoIconsUngroupObjects': LazyComponent<typeof import("../assets/icons/Ungroup-objects")['default']>
    'LazySvgoIconsUnknownFilled': LazyComponent<typeof import("../assets/icons/Unknown--filled")['default']>
    'LazySvgoIconsUnknown': LazyComponent<typeof import("../assets/icons/Unknown")['default']>
    'LazySvgoIconsUnlink': LazyComponent<typeof import("../assets/icons/Unlink")['default']>
    'LazySvgoIconsUnlocked': LazyComponent<typeof import("../assets/icons/Unlocked")['default']>
    'LazySvgoIconsUnsaved': LazyComponent<typeof import("../assets/icons/Unsaved")['default']>
    'LazySvgoIconsUpToTop': LazyComponent<typeof import("../assets/icons/Up-to-top")['default']>
    'LazySvgoIconsUpdateNow': LazyComponent<typeof import("../assets/icons/Update-now")['default']>
    'LazySvgoIconsUpgrade': LazyComponent<typeof import("../assets/icons/Upgrade")['default']>
    'LazySvgoIconsUpload': LazyComponent<typeof import("../assets/icons/Upload")['default']>
    'LazySvgoIconsUpstream': LazyComponent<typeof import("../assets/icons/Upstream")['default']>
    'LazySvgoIconsUsageIncludedUseCase': LazyComponent<typeof import("../assets/icons/Usage--included-use-case")['default']>
    'LazySvgoIconsUsb': LazyComponent<typeof import("../assets/icons/Usb")['default']>
    'LazySvgoIconsUseCaseDefinition': LazyComponent<typeof import("../assets/icons/Use-case--definition")['default']>
    'LazySvgoIconsUseCaseUsage': LazyComponent<typeof import("../assets/icons/Use-case--usage")['default']>
    'LazySvgoIconsUserAccessLocked': LazyComponent<typeof import("../assets/icons/User--access-locked")['default']>
    'LazySvgoIconsUserAccessUnlocked': LazyComponent<typeof import("../assets/icons/User--access-unlocked")['default']>
    'LazySvgoIconsUserAccess': LazyComponent<typeof import("../assets/icons/User--access")['default']>
    'LazySvgoIconsUserActivity': LazyComponent<typeof import("../assets/icons/User--activity")['default']>
    'LazySvgoIconsUserAdmin': LazyComponent<typeof import("../assets/icons/User--admin")['default']>
    'LazySvgoIconsUserAvatarFilledAlt': LazyComponent<typeof import("../assets/icons/User--avatar--filled--alt")['default']>
    'LazySvgoIconsUserAvatarFilled': LazyComponent<typeof import("../assets/icons/User--avatar--filled")['default']>
    'LazySvgoIconsUserAvatar': LazyComponent<typeof import("../assets/icons/User--avatar")['default']>
    'LazySvgoIconsUserCertification': LazyComponent<typeof import("../assets/icons/User--certification")['default']>
    'LazySvgoIconsUserData': LazyComponent<typeof import("../assets/icons/User--data")['default']>
    'LazySvgoIconsUserFavoriteAltFilled': LazyComponent<typeof import("../assets/icons/User--favorite--alt--filled")['default']>
    'LazySvgoIconsUserFavoriteAlt': LazyComponent<typeof import("../assets/icons/User--favorite--alt")['default']>
    'LazySvgoIconsUserFavorite': LazyComponent<typeof import("../assets/icons/User--favorite")['default']>
    'LazySvgoIconsUserFeedback': LazyComponent<typeof import("../assets/icons/User--feedback")['default']>
    'LazySvgoIconsUserFilled': LazyComponent<typeof import("../assets/icons/User--filled")['default']>
    'LazySvgoIconsUserFollow': LazyComponent<typeof import("../assets/icons/User--follow")['default']>
    'LazySvgoIconsUserIdentification': LazyComponent<typeof import("../assets/icons/User--identification")['default']>
    'LazySvgoIconsUserMilitary': LazyComponent<typeof import("../assets/icons/User--military")['default']>
    'LazySvgoIconsUserMultiple': LazyComponent<typeof import("../assets/icons/User--multiple")['default']>
    'LazySvgoIconsUserOnline': LazyComponent<typeof import("../assets/icons/User--online")['default']>
    'LazySvgoIconsUserProfile': LazyComponent<typeof import("../assets/icons/User--profile")['default']>
    'LazySvgoIconsUserRole': LazyComponent<typeof import("../assets/icons/User--role")['default']>
    'LazySvgoIconsUserServiceDesk': LazyComponent<typeof import("../assets/icons/User--service-desk")['default']>
    'LazySvgoIconsUserService': LazyComponent<typeof import("../assets/icons/User--service")['default']>
    'LazySvgoIconsUserSettings': LazyComponent<typeof import("../assets/icons/User--settings")['default']>
    'LazySvgoIconsUserSimulation': LazyComponent<typeof import("../assets/icons/User--simulation")['default']>
    'LazySvgoIconsUserSpeaker': LazyComponent<typeof import("../assets/icons/User--speaker")['default']>
    'LazySvgoIconsUserSponsor': LazyComponent<typeof import("../assets/icons/User--sponsor")['default']>
    'LazySvgoIconsUserXRay': LazyComponent<typeof import("../assets/icons/User--x-ray")['default']>
    'LazySvgoIconsUserProfileAlt': LazyComponent<typeof import("../assets/icons/User-profile--alt")['default']>
    'LazySvgoIconsUser': LazyComponent<typeof import("../assets/icons/User")['default']>
    'LazySvgoIconsUvIndexAlt': LazyComponent<typeof import("../assets/icons/Uv-index--alt")['default']>
    'LazySvgoIconsUvIndexFilled': LazyComponent<typeof import("../assets/icons/Uv-index--filled")['default']>
    'LazySvgoIconsUvIndex': LazyComponent<typeof import("../assets/icons/Uv-index")['default']>
    'LazySvgoIconsValueVariable': LazyComponent<typeof import("../assets/icons/Value--variable")['default']>
    'LazySvgoIconsVan': LazyComponent<typeof import("../assets/icons/Van")['default']>
    'LazySvgoIconsVegetationAsset': LazyComponent<typeof import("../assets/icons/Vegetation--asset")['default']>
    'LazySvgoIconsVegetationEncroachment': LazyComponent<typeof import("../assets/icons/Vegetation--encroachment")['default']>
    'LazySvgoIconsVegetationHeight': LazyComponent<typeof import("../assets/icons/Vegetation--height")['default']>
    'LazySvgoIconsVehicleApi': LazyComponent<typeof import("../assets/icons/Vehicle--api")['default']>
    'LazySvgoIconsVehicleConnected': LazyComponent<typeof import("../assets/icons/Vehicle--connected")['default']>
    'LazySvgoIconsVehicleInsights': LazyComponent<typeof import("../assets/icons/Vehicle--insights")['default']>
    'LazySvgoIconsVehicleServices': LazyComponent<typeof import("../assets/icons/Vehicle--services")['default']>
    'LazySvgoIconsVersionMajor': LazyComponent<typeof import("../assets/icons/Version--major")['default']>
    'LazySvgoIconsVersionMinor': LazyComponent<typeof import("../assets/icons/Version--minor")['default']>
    'LazySvgoIconsVersionPatch': LazyComponent<typeof import("../assets/icons/Version--patch")['default']>
    'LazySvgoIconsVersion': LazyComponent<typeof import("../assets/icons/Version")['default']>
    'LazySvgoIconsVerticalView': LazyComponent<typeof import("../assets/icons/Vertical-view")['default']>
    'LazySvgoIconsVideoAdd': LazyComponent<typeof import("../assets/icons/Video--add")['default']>
    'LazySvgoIconsVideoChat': LazyComponent<typeof import("../assets/icons/Video--chat")['default']>
    'LazySvgoIconsVideoFilled': LazyComponent<typeof import("../assets/icons/Video--filled")['default']>
    'LazySvgoIconsVideoOffFilled': LazyComponent<typeof import("../assets/icons/Video--off--filled")['default']>
    'LazySvgoIconsVideoOff': LazyComponent<typeof import("../assets/icons/Video--off")['default']>
    'LazySvgoIconsVideoPlayer': LazyComponent<typeof import("../assets/icons/Video-player")['default']>
    'LazySvgoIconsVideo': LazyComponent<typeof import("../assets/icons/Video")['default']>
    'LazySvgoIconsViewFilled': LazyComponent<typeof import("../assets/icons/View--filled")['default']>
    'LazySvgoIconsViewMode1': LazyComponent<typeof import("../assets/icons/View--mode-1")['default']>
    'LazySvgoIconsViewMode2': LazyComponent<typeof import("../assets/icons/View--mode-2")['default']>
    'LazySvgoIconsViewOffFilled': LazyComponent<typeof import("../assets/icons/View--off--filled")['default']>
    'LazySvgoIconsViewOff': LazyComponent<typeof import("../assets/icons/View--off")['default']>
    'LazySvgoIconsViewNext': LazyComponent<typeof import("../assets/icons/View-next")['default']>
    'LazySvgoIconsView': LazyComponent<typeof import("../assets/icons/View")['default']>
    'LazySvgoIconsVirtualColumnKey': LazyComponent<typeof import("../assets/icons/Virtual-column--key")['default']>
    'LazySvgoIconsVirtualColumn': LazyComponent<typeof import("../assets/icons/Virtual-column")['default']>
    'LazySvgoIconsVirtualDesktop': LazyComponent<typeof import("../assets/icons/Virtual-desktop")['default']>
    'LazySvgoIconsVirtualMachine': LazyComponent<typeof import("../assets/icons/Virtual-machine")['default']>
    'LazySvgoIconsVirtualPrivateCloud': LazyComponent<typeof import("../assets/icons/Virtual-private-cloud")['default']>
    'LazySvgoIconsVisualRecognition': LazyComponent<typeof import("../assets/icons/Visual-recognition")['default']>
    'LazySvgoIconsVlanIBM': LazyComponent<typeof import("../assets/icons/Vlan--IBM")['default']>
    'LazySvgoIconsVlan': LazyComponent<typeof import("../assets/icons/Vlan")['default']>
    'LazySvgoIconsVmdkDisk': LazyComponent<typeof import("../assets/icons/Vmdk-disk")['default']>
    'LazySvgoIconsVoiceActivate': LazyComponent<typeof import("../assets/icons/Voice-activate")['default']>
    'LazySvgoIconsVoicemail': LazyComponent<typeof import("../assets/icons/Voicemail")['default']>
    'LazySvgoIconsVolumeBlockStorage': LazyComponent<typeof import("../assets/icons/Volume--block-storage")['default']>
    'LazySvgoIconsVolumeDownAlt': LazyComponent<typeof import("../assets/icons/Volume--down--alt")['default']>
    'LazySvgoIconsVolumeDownFilledAlt': LazyComponent<typeof import("../assets/icons/Volume--down--filled--alt")['default']>
    'LazySvgoIconsVolumeDownFilled': LazyComponent<typeof import("../assets/icons/Volume--down--filled")['default']>
    'LazySvgoIconsVolumeDown': LazyComponent<typeof import("../assets/icons/Volume--down")['default']>
    'LazySvgoIconsVolumeFileStorage': LazyComponent<typeof import("../assets/icons/Volume--file-storage")['default']>
    'LazySvgoIconsVolumeMuteFilled': LazyComponent<typeof import("../assets/icons/Volume--mute--filled")['default']>
    'LazySvgoIconsVolumeMute': LazyComponent<typeof import("../assets/icons/Volume--mute")['default']>
    'LazySvgoIconsVolumeObjectStorage': LazyComponent<typeof import("../assets/icons/Volume--object-storage")['default']>
    'LazySvgoIconsVolumeUpAlt': LazyComponent<typeof import("../assets/icons/Volume--up--alt")['default']>
    'LazySvgoIconsVolumeUpFilledAlt': LazyComponent<typeof import("../assets/icons/Volume--up--filled--alt")['default']>
    'LazySvgoIconsVolumeUpFilled': LazyComponent<typeof import("../assets/icons/Volume--up--filled")['default']>
    'LazySvgoIconsVolumeUp': LazyComponent<typeof import("../assets/icons/Volume--up")['default']>
    'LazySvgoIconsVpnConnection': LazyComponent<typeof import("../assets/icons/Vpn--connection")['default']>
    'LazySvgoIconsVpnPolicy': LazyComponent<typeof import("../assets/icons/Vpn--policy")['default']>
    'LazySvgoIconsVpn': LazyComponent<typeof import("../assets/icons/Vpn")['default']>
    'LazySvgoIconsWallet': LazyComponent<typeof import("../assets/icons/Wallet")['default']>
    'LazySvgoIconsWarningAltFilled': LazyComponent<typeof import("../assets/icons/Warning--alt--filled")['default']>
    'LazySvgoIconsWarningAltInvertedFilled': LazyComponent<typeof import("../assets/icons/Warning--alt-inverted--filled")['default']>
    'LazySvgoIconsWarningAltInverted': LazyComponent<typeof import("../assets/icons/Warning--alt-inverted")['default']>
    'LazySvgoIconsWarningAlt': LazyComponent<typeof import("../assets/icons/Warning--alt")['default']>
    'LazySvgoIconsWarningDiamond': LazyComponent<typeof import("../assets/icons/Warning--diamond")['default']>
    'LazySvgoIconsWarningFilled': LazyComponent<typeof import("../assets/icons/Warning--filled")['default']>
    'LazySvgoIconsWarningHexFilled': LazyComponent<typeof import("../assets/icons/Warning--hex--filled")['default']>
    'LazySvgoIconsWarningHex': LazyComponent<typeof import("../assets/icons/Warning--hex")['default']>
    'LazySvgoIconsWarningMultiple': LazyComponent<typeof import("../assets/icons/Warning--multiple")['default']>
    'LazySvgoIconsWarningOther': LazyComponent<typeof import("../assets/icons/Warning--other")['default']>
    'LazySvgoIconsWarningSquareFilled': LazyComponent<typeof import("../assets/icons/Warning-square--filled")['default']>
    'LazySvgoIconsWarningSquare': LazyComponent<typeof import("../assets/icons/Warning-square")['default']>
    'LazySvgoIconsWarning': LazyComponent<typeof import("../assets/icons/Warning")['default']>
    'LazySvgoIconsWatch': LazyComponent<typeof import("../assets/icons/Watch")['default']>
    'LazySvgoIconsWatsonxAi': LazyComponent<typeof import("../assets/icons/Watsonx-ai")['default']>
    'LazySvgoIconsWatsonxData': LazyComponent<typeof import("../assets/icons/Watsonx-data")['default']>
    'LazySvgoIconsWatsonxGovernance': LazyComponent<typeof import("../assets/icons/Watsonx-governance")['default']>
    'LazySvgoIconsWatsonx': LazyComponent<typeof import("../assets/icons/Watsonx")['default']>
    'LazySvgoIconsWaveDirection': LazyComponent<typeof import("../assets/icons/Wave-direction")['default']>
    'LazySvgoIconsWaveHeight': LazyComponent<typeof import("../assets/icons/Wave-height")['default']>
    'LazySvgoIconsWavePeriod': LazyComponent<typeof import("../assets/icons/Wave-period")['default']>
    'LazySvgoIconsWeatherFrontCold': LazyComponent<typeof import("../assets/icons/Weather-front--cold")['default']>
    'LazySvgoIconsWeatherFrontStationary': LazyComponent<typeof import("../assets/icons/Weather-front--stationary")['default']>
    'LazySvgoIconsWeatherFrontWarm': LazyComponent<typeof import("../assets/icons/Weather-front--warm")['default']>
    'LazySvgoIconsWeatherStation': LazyComponent<typeof import("../assets/icons/Weather-station")['default']>
    'LazySvgoIconsWebServicesCluster': LazyComponent<typeof import("../assets/icons/Web-services--cluster")['default']>
    'LazySvgoIconsWebServicesContainer': LazyComponent<typeof import("../assets/icons/Web-services--container")['default']>
    'LazySvgoIconsWebServicesDefinition': LazyComponent<typeof import("../assets/icons/Web-services--definition")['default']>
    'LazySvgoIconsWebServicesService': LazyComponent<typeof import("../assets/icons/Web-services--service")['default']>
    'LazySvgoIconsWebServicesTaskDefinitionVersion': LazyComponent<typeof import("../assets/icons/Web-services--task-definition-version")['default']>
    'LazySvgoIconsWebServicesTask': LazyComponent<typeof import("../assets/icons/Web-services--task")['default']>
    'LazySvgoIconsWebhook': LazyComponent<typeof import("../assets/icons/Webhook")['default']>
    'LazySvgoIconsWebsheet': LazyComponent<typeof import("../assets/icons/Websheet")['default']>
    'LazySvgoIconsWheat': LazyComponent<typeof import("../assets/icons/Wheat")['default']>
    'LazySvgoIconsWhitePaper': LazyComponent<typeof import("../assets/icons/White-paper")['default']>
    'LazySvgoIconsWifiController': LazyComponent<typeof import("../assets/icons/Wifi--controller")['default']>
    'LazySvgoIconsWifiNotSecure': LazyComponent<typeof import("../assets/icons/Wifi--not-secure")['default']>
    'LazySvgoIconsWifiOff': LazyComponent<typeof import("../assets/icons/Wifi--off")['default']>
    'LazySvgoIconsWifiSecure': LazyComponent<typeof import("../assets/icons/Wifi--secure")['default']>
    'LazySvgoIconsWifiBridgeAlt': LazyComponent<typeof import("../assets/icons/Wifi-bridge--alt")['default']>
    'LazySvgoIconsWifiBridge': LazyComponent<typeof import("../assets/icons/Wifi-bridge")['default']>
    'LazySvgoIconsWifi': LazyComponent<typeof import("../assets/icons/Wifi")['default']>
    'LazySvgoIconsWikis': LazyComponent<typeof import("../assets/icons/Wikis")['default']>
    'LazySvgoIconsWindGusts': LazyComponent<typeof import("../assets/icons/Wind-gusts")['default']>
    'LazySvgoIconsWindPower': LazyComponent<typeof import("../assets/icons/Wind-power")['default']>
    'LazySvgoIconsWindStream': LazyComponent<typeof import("../assets/icons/Wind-stream")['default']>
    'LazySvgoIconsWindowAuto': LazyComponent<typeof import("../assets/icons/Window--auto")['default']>
    'LazySvgoIconsWindowBase': LazyComponent<typeof import("../assets/icons/Window--base")['default']>
    'LazySvgoIconsWindowBlackSaturation': LazyComponent<typeof import("../assets/icons/Window--black-saturation")['default']>
    'LazySvgoIconsWindowOverlay': LazyComponent<typeof import("../assets/icons/Window--overlay")['default']>
    'LazySvgoIconsWindowPreset': LazyComponent<typeof import("../assets/icons/Window--preset")['default']>
    'LazySvgoIconsWindyDust': LazyComponent<typeof import("../assets/icons/Windy--dust")['default']>
    'LazySvgoIconsWindySnow': LazyComponent<typeof import("../assets/icons/Windy--snow")['default']>
    'LazySvgoIconsWindyStrong': LazyComponent<typeof import("../assets/icons/Windy--strong")['default']>
    'LazySvgoIconsWindy': LazyComponent<typeof import("../assets/icons/Windy")['default']>
    'LazySvgoIconsWinterWarning': LazyComponent<typeof import("../assets/icons/Winter-warning")['default']>
    'LazySvgoIconsWintryMix': LazyComponent<typeof import("../assets/icons/Wintry-mix")['default']>
    'LazySvgoIconsWirelessCheckout': LazyComponent<typeof import("../assets/icons/Wireless-checkout")['default']>
    'LazySvgoIconsWmv': LazyComponent<typeof import("../assets/icons/Wmv")['default']>
    'LazySvgoIconsWordCloud': LazyComponent<typeof import("../assets/icons/Word-cloud")['default']>
    'LazySvgoIconsWorkflowAutomation': LazyComponent<typeof import("../assets/icons/Workflow-automation")['default']>
    'LazySvgoIconsWorkspaceImport': LazyComponent<typeof import("../assets/icons/Workspace--import")['default']>
    'LazySvgoIconsWorkspace': LazyComponent<typeof import("../assets/icons/Workspace")['default']>
    'LazySvgoIconsWorshipChristian': LazyComponent<typeof import("../assets/icons/Worship--christian")['default']>
    'LazySvgoIconsWorshipJewish': LazyComponent<typeof import("../assets/icons/Worship--jewish")['default']>
    'LazySvgoIconsWorshipMuslim': LazyComponent<typeof import("../assets/icons/Worship--muslim")['default']>
    'LazySvgoIconsWorship': LazyComponent<typeof import("../assets/icons/Worship")['default']>
    'LazySvgoIconsXAxis': LazyComponent<typeof import("../assets/icons/X-axis")['default']>
    'LazySvgoIconsX': LazyComponent<typeof import("../assets/icons/X")['default']>
    'LazySvgoIconsXls': LazyComponent<typeof import("../assets/icons/Xls")['default']>
    'LazySvgoIconsXml': LazyComponent<typeof import("../assets/icons/Xml")['default']>
    'LazySvgoIconsYAxis': LazyComponent<typeof import("../assets/icons/Y-axis")['default']>
    'LazySvgoIconsY': LazyComponent<typeof import("../assets/icons/Y")['default']>
    'LazySvgoIconsZLpar': LazyComponent<typeof import("../assets/icons/Z--lpar")['default']>
    'LazySvgoIconsZSystems': LazyComponent<typeof import("../assets/icons/Z--systems")['default']>
    'LazySvgoIconsZAxis': LazyComponent<typeof import("../assets/icons/Z-axis")['default']>
    'LazySvgoIconsZ': LazyComponent<typeof import("../assets/icons/Z")['default']>
    'LazySvgoIconsZipReference': LazyComponent<typeof import("../assets/icons/Zip--reference")['default']>
    'LazySvgoIconsZip': LazyComponent<typeof import("../assets/icons/Zip")['default']>
    'LazySvgoIconsZoomArea': LazyComponent<typeof import("../assets/icons/Zoom--area")['default']>
    'LazySvgoIconsZoomFit': LazyComponent<typeof import("../assets/icons/Zoom--fit")['default']>
    'LazySvgoIconsZoomInArea': LazyComponent<typeof import("../assets/icons/Zoom--in-area")['default']>
    'LazySvgoIconsZoomIn': LazyComponent<typeof import("../assets/icons/Zoom--in")['default']>
    'LazySvgoIconsZoomOutArea': LazyComponent<typeof import("../assets/icons/Zoom--out-area")['default']>
    'LazySvgoIconsZoomOut': LazyComponent<typeof import("../assets/icons/Zoom--out")['default']>
    'LazySvgoIconsZoomReset': LazyComponent<typeof import("../assets/icons/Zoom--reset")['default']>
    'LazySvgoIconsZoomPan': LazyComponent<typeof import("../assets/icons/Zoom-pan")['default']>
    'LazySvgoIconsZosSysplex': LazyComponent<typeof import("../assets/icons/Zos--sysplex")['default']>
    'LazySvgoIconsZos': LazyComponent<typeof import("../assets/icons/Zos")['default']>
    'LazySvgoIconsBrandAbbreviations': LazyComponent<typeof import("../assets/icons/brand/Abbreviations")['default']>
    'LazySvgoIconsBrandAbstract': LazyComponent<typeof import("../assets/icons/brand/Abstract")['default']>
    'LazySvgoIconsBrandBitmap': LazyComponent<typeof import("../assets/icons/brand/Bitmap")['default']>
    'LazySvgoIconsBrandLogotype': LazyComponent<typeof import("../assets/icons/brand/Logotype")['default']>
    'LazySvgoIconsBrandOfficial': LazyComponent<typeof import("../assets/icons/brand/Official")['default']>
    'LazySvgoIconsKeyboardOff': LazyComponent<typeof import("../assets/icons/keyboard--off")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyTiptapEditorContent': LazyComponent<typeof import("@tiptap/vue-3")['EditorContent']>
    'LazyTiptapFloatingMenu': LazyComponent<typeof import("@tiptap/vue-3")['FloatingMenu']>
    'LazyTiptapBubbleMenu': LazyComponent<typeof import("@tiptap/vue-3")['BubbleMenu']>
    'LazyNuxtPlotly': LazyComponent<typeof import("../node_modules/nuxt-plotly/dist/runtime/components/nuxt-plotly")['default']>
    'LazyNuxtIcon': LazyComponent<typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
    'LazyNuxtPlotly': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Canvas: typeof import("../components/Canvas/Canvas.vue")['default']
export const CanvasEditMode: typeof import("../components/Canvas/EditMode.vue")['default']
export const CanvasPresentationMode: typeof import("../components/Canvas/PresentationMode.vue")['default']
export const ContentSection: typeof import("../components/ContentSection.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Navigation: typeof import("../components/Navigation.vue")['default']
export const AboutSections: typeof import("../components/about/AboutSections.vue")['default']
export const AboutFirstSection: typeof import("../components/about/FirstSection.vue")['default']
export const AboutSecondSection: typeof import("../components/about/SecondSection.vue")['default']
export const AboutThirdSection: typeof import("../components/about/ThirdSection.vue")['default']
export const FooterLink: typeof import("../components/footer/FooterLink.vue")['default']
export const FooterLinkSection: typeof import("../components/footer/FooterLinkSection.vue")['default']
export const FooterLogoSection: typeof import("../components/footer/FooterLogoSection.vue")['default']
export const IndexHero: typeof import("../components/index/Hero.vue")['default']
export const IndexSectionTemplate: typeof import("../components/index/SectionTemplate.vue")['default']
export const NavLogo: typeof import("../components/nav/Logo.vue")['default']
export const NavBar: typeof import("../components/nav/NavBar.vue")['default']
export const NavButton: typeof import("../components/nav/NavButton.vue")['default']
export const SvgoIcons3dCursorAlt: typeof import("../assets/icons/3d-cursor--alt")['default']
export const SvgoIcons3dCursor: typeof import("../assets/icons/3d-cursor")['default']
export const SvgoIcons3dCurveAutoColon: typeof import("../assets/icons/3d-curve--auto-colon")['default']
export const SvgoIcons3dCurveAutoVessels: typeof import("../assets/icons/3d-curve--auto-vessels")['default']
export const SvgoIcons3dCurveManual: typeof import("../assets/icons/3d-curve--manual")['default']
export const SvgoIcons3dIca: typeof import("../assets/icons/3d-ica")['default']
export const SvgoIcons3dMprToggle: typeof import("../assets/icons/3d-mpr-toggle")['default']
export const SvgoIcons3dPrintMesh: typeof import("../assets/icons/3d-print-mesh")['default']
export const SvgoIcons3dSoftware: typeof import("../assets/icons/3d-software")['default']
export const SvgoIcons3rdPartyConnected: typeof import("../assets/icons/3rd-party-connected")['default']
export const SvgoIcons4kFilled: typeof import("../assets/icons/4k--filled")['default']
export const SvgoIcons4k: typeof import("../assets/icons/4k")['default']
export const SvgoIconsAIGenerate: typeof import("../assets/icons/AI-generate")['default']
export const SvgoIconsAIGovernanceLifecycle: typeof import("../assets/icons/AI-governance--lifecycle")['default']
export const SvgoIconsAIGovernanceTracked: typeof import("../assets/icons/AI-governance--tracked")['default']
export const SvgoIconsAIGovernanceUntracked: typeof import("../assets/icons/AI-governance--untracked")['default']
export const SvgoIconsAILaunch: typeof import("../assets/icons/AI-launch")['default']
export const SvgoIconsAIRecommend: typeof import("../assets/icons/AI-recommend")['default']
export const SvgoIconsAI: typeof import("../assets/icons/AI")['default']
export const SvgoIconsAcceptActionUsage: typeof import("../assets/icons/Accept-action--usage")['default']
export const SvgoIconsAccessibilityAlt: typeof import("../assets/icons/Accessibility--alt")['default']
export const SvgoIconsAccessibilityColorFilled: typeof import("../assets/icons/Accessibility--color--filled")['default']
export const SvgoIconsAccessibilityColor: typeof import("../assets/icons/Accessibility--color")['default']
export const SvgoIconsAccessibility: typeof import("../assets/icons/Accessibility")['default']
export const SvgoIconsAccount: typeof import("../assets/icons/Account")['default']
export const SvgoIconsAccumulationIce: typeof import("../assets/icons/Accumulation--ice")['default']
export const SvgoIconsAccumulationPrecipitation: typeof import("../assets/icons/Accumulation--precipitation")['default']
export const SvgoIconsAccumulationRain: typeof import("../assets/icons/Accumulation--rain")['default']
export const SvgoIconsAccumulationSnow: typeof import("../assets/icons/Accumulation--snow")['default']
export const SvgoIconsActionDefinition: typeof import("../assets/icons/Action--definition")['default']
export const SvgoIconsActionUsage: typeof import("../assets/icons/Action--usage")['default']
export const SvgoIconsActivity: typeof import("../assets/icons/Activity")['default']
export const SvgoIconsAddAlt: typeof import("../assets/icons/Add--alt")['default']
export const SvgoIconsAddFilled: typeof import("../assets/icons/Add--filled")['default']
export const SvgoIconsAddLarge: typeof import("../assets/icons/Add--large")['default']
export const SvgoIconsAddComment: typeof import("../assets/icons/Add-comment")['default']
export const SvgoIconsAdd: typeof import("../assets/icons/Add")['default']
export const SvgoIconsAgricultureAnalytics: typeof import("../assets/icons/Agriculture-analytics")['default']
export const SvgoIconsAiFinancialSustainabilityCheck: typeof import("../assets/icons/Ai-financial-sustainability-check")['default']
export const SvgoIconsAiResultsHigh: typeof import("../assets/icons/Ai-results--high")['default']
export const SvgoIconsAiResultsLow: typeof import("../assets/icons/Ai-results--low")['default']
export const SvgoIconsAiResultsMedium: typeof import("../assets/icons/Ai-results--medium")['default']
export const SvgoIconsAiResultsUrgent: typeof import("../assets/icons/Ai-results--urgent")['default']
export const SvgoIconsAiResultsVeryHigh: typeof import("../assets/icons/Ai-results--very-high")['default']
export const SvgoIconsAiResults: typeof import("../assets/icons/Ai-results")['default']
export const SvgoIconsAiStatusComplete: typeof import("../assets/icons/Ai-status--complete")['default']
export const SvgoIconsAiStatusFailed: typeof import("../assets/icons/Ai-status--failed")['default']
export const SvgoIconsAiStatusInProgress: typeof import("../assets/icons/Ai-status--in-progress")['default']
export const SvgoIconsAiStatusQueued: typeof import("../assets/icons/Ai-status--queued")['default']
export const SvgoIconsAiStatusRejected: typeof import("../assets/icons/Ai-status--rejected")['default']
export const SvgoIconsAiStatus: typeof import("../assets/icons/Ai-status")['default']
export const SvgoIconsAirlineDigitalGate: typeof import("../assets/icons/Airline--digital-gate")['default']
export const SvgoIconsAirlineManageGates: typeof import("../assets/icons/Airline--manage-gates")['default']
export const SvgoIconsAirlinePassengerCare: typeof import("../assets/icons/Airline--passenger-care")['default']
export const SvgoIconsAirlineRapidBoard: typeof import("../assets/icons/Airline--rapid-board")['default']
export const SvgoIconsAirplayFilled: typeof import("../assets/icons/Airplay--filled")['default']
export const SvgoIconsAirplay: typeof import("../assets/icons/Airplay")['default']
export const SvgoIconsAirport01: typeof import("../assets/icons/Airport--01")['default']
export const SvgoIconsAirport02: typeof import("../assets/icons/Airport--02")['default']
export const SvgoIconsAirportLocation: typeof import("../assets/icons/Airport-location")['default']
export const SvgoIconsAlarmAdd: typeof import("../assets/icons/Alarm--add")['default']
export const SvgoIconsAlarmSubtract: typeof import("../assets/icons/Alarm--subtract")['default']
export const SvgoIconsAlarm: typeof import("../assets/icons/Alarm")['default']
export const SvgoIconsAlignHorizontalCenter: typeof import("../assets/icons/Align--horizontal-center")['default']
export const SvgoIconsAlignHorizontalLeft: typeof import("../assets/icons/Align--horizontal-left")['default']
export const SvgoIconsAlignHorizontalRight: typeof import("../assets/icons/Align--horizontal-right")['default']
export const SvgoIconsAlignVerticalBottom: typeof import("../assets/icons/Align--vertical-bottom")['default']
export const SvgoIconsAlignVerticalCenter: typeof import("../assets/icons/Align--vertical-center")['default']
export const SvgoIconsAlignVerticalTop: typeof import("../assets/icons/Align--vertical-top")['default']
export const SvgoIconsAlignBoxBottomCenter: typeof import("../assets/icons/Align-box--bottom-center")['default']
export const SvgoIconsAlignBoxBottomLeft: typeof import("../assets/icons/Align-box--bottom-left")['default']
export const SvgoIconsAlignBoxBottomRight: typeof import("../assets/icons/Align-box--bottom-right")['default']
export const SvgoIconsAlignBoxMiddleCenter: typeof import("../assets/icons/Align-box--middle-center")['default']
export const SvgoIconsAlignBoxMiddleLeft: typeof import("../assets/icons/Align-box--middle-left")['default']
export const SvgoIconsAlignBoxMiddleRight: typeof import("../assets/icons/Align-box--middle-right")['default']
export const SvgoIconsAlignBoxTopCenter: typeof import("../assets/icons/Align-box--top-center")['default']
export const SvgoIconsAlignBoxTopLeft: typeof import("../assets/icons/Align-box--top-left")['default']
export const SvgoIconsAlignBoxTopRight: typeof import("../assets/icons/Align-box--top-right")['default']
export const SvgoIconsAnalyticsCustom: typeof import("../assets/icons/Analytics--custom")['default']
export const SvgoIconsAnalyticsReference: typeof import("../assets/icons/Analytics--reference")['default']
export const SvgoIconsAnalytics: typeof import("../assets/icons/Analytics")['default']
export const SvgoIconsAnchor: typeof import("../assets/icons/Anchor")['default']
export const SvgoIconsAngle: typeof import("../assets/icons/Angle")['default']
export const SvgoIconsAnnotationVisibility: typeof import("../assets/icons/Annotation-visibility")['default']
export const SvgoIconsAperture: typeof import("../assets/icons/Aperture")['default']
export const SvgoIconsApi1: typeof import("../assets/icons/Api--1")['default']
export const SvgoIconsApiKey: typeof import("../assets/icons/Api--key")['default']
export const SvgoIconsApi: typeof import("../assets/icons/Api")['default']
export const SvgoIconsAppConnectivity: typeof import("../assets/icons/App-connectivity")['default']
export const SvgoIconsApp: typeof import("../assets/icons/App")['default']
export const SvgoIconsAppleDash: typeof import("../assets/icons/Apple--dash")['default']
export const SvgoIconsApple: typeof import("../assets/icons/Apple")['default']
export const SvgoIconsApplicationMobile: typeof import("../assets/icons/Application--mobile")['default']
export const SvgoIconsApplicationVirtual: typeof import("../assets/icons/Application--virtual")['default']
export const SvgoIconsApplicationWeb: typeof import("../assets/icons/Application--web")['default']
export const SvgoIconsApplication: typeof import("../assets/icons/Application")['default']
export const SvgoIconsApps: typeof import("../assets/icons/Apps")['default']
export const SvgoIconsArchive: typeof import("../assets/icons/Archive")['default']
export const SvgoIconsAreaCustom: typeof import("../assets/icons/Area--custom")['default']
export const SvgoIconsArea: typeof import("../assets/icons/Area")['default']
export const SvgoIconsArithmeticMean: typeof import("../assets/icons/Arithmetic-mean")['default']
export const SvgoIconsArithmeticMedian: typeof import("../assets/icons/Arithmetic-median")['default']
export const SvgoIconsArrangeHorizontal: typeof import("../assets/icons/Arrange--horizontal")['default']
export const SvgoIconsArrangeVertical: typeof import("../assets/icons/Arrange--vertical")['default']
export const SvgoIconsArrival: typeof import("../assets/icons/Arrival")['default']
export const SvgoIconsArrowAnnotation: typeof import("../assets/icons/Arrow--annotation")['default']
export const SvgoIconsArrowDownLeft: typeof import("../assets/icons/Arrow--down-left")['default']
export const SvgoIconsArrowDownRight: typeof import("../assets/icons/Arrow--down-right")['default']
export const SvgoIconsArrowDown: typeof import("../assets/icons/Arrow--down")['default']
export const SvgoIconsArrowLeft: typeof import("../assets/icons/Arrow--left")['default']
export const SvgoIconsArrowRight: typeof import("../assets/icons/Arrow--right")['default']
export const SvgoIconsArrowUpLeft: typeof import("../assets/icons/Arrow--up-left")['default']
export const SvgoIconsArrowUpRight: typeof import("../assets/icons/Arrow--up-right")['default']
export const SvgoIconsArrowUp: typeof import("../assets/icons/Arrow--up")['default']
export const SvgoIconsArrowShiftDown: typeof import("../assets/icons/Arrow-shift-down")['default']
export const SvgoIconsArrowsHorizontal: typeof import("../assets/icons/Arrows--horizontal")['default']
export const SvgoIconsArrowsVertical: typeof import("../assets/icons/Arrows--vertical")['default']
export const SvgoIconsAsleepFilled: typeof import("../assets/icons/Asleep--filled")['default']
export const SvgoIconsAsleep: typeof import("../assets/icons/Asleep")['default']
export const SvgoIconsAssemblyCluster: typeof import("../assets/icons/Assembly--cluster")['default']
export const SvgoIconsAssemblyReference: typeof import("../assets/icons/Assembly--reference")['default']
export const SvgoIconsAssembly: typeof import("../assets/icons/Assembly")['default']
export const SvgoIconsAssetConfirm: typeof import("../assets/icons/Asset--confirm")['default']
export const SvgoIconsAssetDigitalTwin: typeof import("../assets/icons/Asset--digital-twin")['default']
export const SvgoIconsAssetView: typeof import("../assets/icons/Asset--view")['default']
export const SvgoIconsAsset: typeof import("../assets/icons/Asset")['default']
export const SvgoIconsAsterisk: typeof import("../assets/icons/Asterisk")['default']
export const SvgoIconsAsync: typeof import("../assets/icons/Async")['default']
export const SvgoIconsAt: typeof import("../assets/icons/At")['default']
export const SvgoIconsAttachment: typeof import("../assets/icons/Attachment")['default']
export const SvgoIconsAudioConsole: typeof import("../assets/icons/Audio-console")['default']
export const SvgoIconsAugmentedReality: typeof import("../assets/icons/Augmented-reality")['default']
export const SvgoIconsAutoScroll: typeof import("../assets/icons/Auto-scroll")['default']
export const SvgoIconsAutomatic: typeof import("../assets/icons/Automatic")['default']
export const SvgoIconsAutoscaling: typeof import("../assets/icons/Autoscaling")['default']
export const SvgoIconsAwake: typeof import("../assets/icons/Awake")['default']
export const SvgoIconsBadge: typeof import("../assets/icons/Badge")['default']
export const SvgoIconsBaggageClaim: typeof import("../assets/icons/Baggage-claim")['default']
export const SvgoIconsBar: typeof import("../assets/icons/Bar")['default']
export const SvgoIconsBarcode: typeof import("../assets/icons/Barcode")['default']
export const SvgoIconsBareMetalServer01: typeof import("../assets/icons/Bare-metal-server--01")['default']
export const SvgoIconsBareMetalServer02: typeof import("../assets/icons/Bare-metal-server--02")['default']
export const SvgoIconsBareMetalServer: typeof import("../assets/icons/Bare-metal-server")['default']
export const SvgoIconsBarrier: typeof import("../assets/icons/Barrier")['default']
export const SvgoIconsBasketball: typeof import("../assets/icons/Basketball")['default']
export const SvgoIconsBastionHost: typeof import("../assets/icons/Bastion-host")['default']
export const SvgoIconsBat: typeof import("../assets/icons/Bat")['default']
export const SvgoIconsBatchJobStep: typeof import("../assets/icons/Batch-job--step")['default']
export const SvgoIconsBatchJob: typeof import("../assets/icons/Batch-job")['default']
export const SvgoIconsBatteryCharging: typeof import("../assets/icons/Battery--charging")['default']
export const SvgoIconsBatteryEmpty: typeof import("../assets/icons/Battery--empty")['default']
export const SvgoIconsBatteryFull: typeof import("../assets/icons/Battery--full")['default']
export const SvgoIconsBatteryHalf: typeof import("../assets/icons/Battery--half")['default']
export const SvgoIconsBatteryLow: typeof import("../assets/icons/Battery--low")['default']
export const SvgoIconsBatteryQuarter: typeof import("../assets/icons/Battery--quarter")['default']
export const SvgoIconsBeeBat: typeof import("../assets/icons/Bee-bat")['default']
export const SvgoIconsBee: typeof import("../assets/icons/Bee")['default']
export const SvgoIconsBeta: typeof import("../assets/icons/Beta")['default']
export const SvgoIconsBicycle: typeof import("../assets/icons/Bicycle")['default']
export const SvgoIconsBinding01: typeof import("../assets/icons/Binding--01")['default']
export const SvgoIconsBinding02: typeof import("../assets/icons/Binding--02")['default']
export const SvgoIconsBinoculars: typeof import("../assets/icons/Binoculars")['default']
export const SvgoIconsBlochSphere: typeof import("../assets/icons/Bloch-sphere")['default']
export const SvgoIconsBlockStorageAlt: typeof import("../assets/icons/Block-storage--alt")['default']
export const SvgoIconsBlockStorage: typeof import("../assets/icons/Block-storage")['default']
export const SvgoIconsBlockchain: typeof import("../assets/icons/Blockchain")['default']
export const SvgoIconsBlog: typeof import("../assets/icons/Blog")['default']
export const SvgoIconsBluetoothOff: typeof import("../assets/icons/Bluetooth--off")['default']
export const SvgoIconsBluetooth: typeof import("../assets/icons/Bluetooth")['default']
export const SvgoIconsBook: typeof import("../assets/icons/Book")['default']
export const SvgoIconsBookmarkAdd: typeof import("../assets/icons/Bookmark--add")['default']
export const SvgoIconsBookmarkFilled: typeof import("../assets/icons/Bookmark--filled")['default']
export const SvgoIconsBookmark: typeof import("../assets/icons/Bookmark")['default']
export const SvgoIconsBoolean: typeof import("../assets/icons/Boolean")['default']
export const SvgoIconsBootVolumeAlt: typeof import("../assets/icons/Boot-volume--alt")['default']
export const SvgoIconsBootVolume: typeof import("../assets/icons/Boot-volume")['default']
export const SvgoIconsBoot: typeof import("../assets/icons/Boot")['default']
export const SvgoIconsBorderBottom: typeof import("../assets/icons/Border--bottom")['default']
export const SvgoIconsBorderFull: typeof import("../assets/icons/Border--full")['default']
export const SvgoIconsBorderLeft: typeof import("../assets/icons/Border--left")['default']
export const SvgoIconsBorderNone: typeof import("../assets/icons/Border--none")['default']
export const SvgoIconsBorderRight: typeof import("../assets/icons/Border--right")['default']
export const SvgoIconsBorderTop: typeof import("../assets/icons/Border--top")['default']
export const SvgoIconsBot: typeof import("../assets/icons/Bot")['default']
export const SvgoIconsBottles01Dash: typeof import("../assets/icons/Bottles--01--dash")['default']
export const SvgoIconsBottles01: typeof import("../assets/icons/Bottles--01")['default']
export const SvgoIconsBottles02Dash: typeof import("../assets/icons/Bottles--02--dash")['default']
export const SvgoIconsBottles02: typeof import("../assets/icons/Bottles--02")['default']
export const SvgoIconsBottlesContainer: typeof import("../assets/icons/Bottles--container")['default']
export const SvgoIconsBottomPanelCloseFilled: typeof import("../assets/icons/Bottom-panel--close--filled")['default']
export const SvgoIconsBottomPanelClose: typeof import("../assets/icons/Bottom-panel--close")['default']
export const SvgoIconsBottomPanelOpenFilled: typeof import("../assets/icons/Bottom-panel--open--filled")['default']
export const SvgoIconsBottomPanelOpen: typeof import("../assets/icons/Bottom-panel--open")['default']
export const SvgoIconsBoxExtraLarge: typeof import("../assets/icons/Box--extra-large")['default']
export const SvgoIconsBoxLarge: typeof import("../assets/icons/Box--large")['default']
export const SvgoIconsBoxMedium: typeof import("../assets/icons/Box--medium")['default']
export const SvgoIconsBoxSmall: typeof import("../assets/icons/Box--small")['default']
export const SvgoIconsBoxPlot: typeof import("../assets/icons/Box-plot")['default']
export const SvgoIconsBox: typeof import("../assets/icons/Box")['default']
export const SvgoIconsBranch: typeof import("../assets/icons/Branch")['default']
export const SvgoIconsBreakingChange: typeof import("../assets/icons/Breaking-change")['default']
export const SvgoIconsBrightnessContrast: typeof import("../assets/icons/Brightness-contrast")['default']
export const SvgoIconsBringForward: typeof import("../assets/icons/Bring-forward")['default']
export const SvgoIconsBringToFront: typeof import("../assets/icons/Bring-to-front")['default']
export const SvgoIconsBrushFreehand: typeof import("../assets/icons/Brush-freehand")['default']
export const SvgoIconsBrushPolygon: typeof import("../assets/icons/Brush-polygon")['default']
export const SvgoIconsBuildTool: typeof import("../assets/icons/Build-tool")['default']
export const SvgoIconsBuildingInsights1: typeof import("../assets/icons/Building--insights-1")['default']
export const SvgoIconsBuildingInsights2: typeof import("../assets/icons/Building--insights-2")['default']
export const SvgoIconsBuildingInsights3: typeof import("../assets/icons/Building--insights-3")['default']
export const SvgoIconsBuilding: typeof import("../assets/icons/Building")['default']
export const SvgoIconsBullhorn: typeof import("../assets/icons/Bullhorn")['default']
export const SvgoIconsBuoy: typeof import("../assets/icons/Buoy")['default']
export const SvgoIconsBus: typeof import("../assets/icons/Bus")['default']
export const SvgoIconsBusinessProcesses: typeof import("../assets/icons/Business-processes")['default']
export const SvgoIconsButtonCentered: typeof import("../assets/icons/Button--centered")['default']
export const SvgoIconsButtonFlushLeft: typeof import("../assets/icons/Button--flush-left")['default']
export const SvgoIconsCabinCareAlert: typeof import("../assets/icons/Cabin-care--alert")['default']
export const SvgoIconsCabinCareAlt: typeof import("../assets/icons/Cabin-care--alt")['default']
export const SvgoIconsCabinCare: typeof import("../assets/icons/Cabin-care")['default']
export const SvgoIconsCad: typeof import("../assets/icons/Cad")['default']
export const SvgoIconsCafe: typeof import("../assets/icons/Cafe")['default']
export const SvgoIconsCalculationAlt: typeof import("../assets/icons/Calculation--alt")['default']
export const SvgoIconsCalculation: typeof import("../assets/icons/Calculation")['default']
export const SvgoIconsCalculatorCheck: typeof import("../assets/icons/Calculator--check")['default']
export const SvgoIconsCalculator: typeof import("../assets/icons/Calculator")['default']
export const SvgoIconsCalendarAddAlt: typeof import("../assets/icons/Calendar--add--alt")['default']
export const SvgoIconsCalendarAdd: typeof import("../assets/icons/Calendar--add")['default']
export const SvgoIconsCalendarHeatMap: typeof import("../assets/icons/Calendar--heat-map")['default']
export const SvgoIconsCalendarSettings: typeof import("../assets/icons/Calendar--settings")['default']
export const SvgoIconsCalendarTools: typeof import("../assets/icons/Calendar--tools")['default']
export const SvgoIconsCalendar: typeof import("../assets/icons/Calendar")['default']
export const SvgoIconsCalibrate: typeof import("../assets/icons/Calibrate")['default']
export const SvgoIconsCallsAll: typeof import("../assets/icons/Calls--all")['default']
export const SvgoIconsCallsIncoming: typeof import("../assets/icons/Calls--incoming")['default']
export const SvgoIconsCalls: typeof import("../assets/icons/Calls")['default']
export const SvgoIconsCameraAction: typeof import("../assets/icons/Camera--action")['default']
export const SvgoIconsCamera: typeof import("../assets/icons/Camera")['default']
export const SvgoIconsCampsite: typeof import("../assets/icons/Campsite")['default']
export const SvgoIconsCarFront: typeof import("../assets/icons/Car--front")['default']
export const SvgoIconsCar: typeof import("../assets/icons/Car")['default']
export const SvgoIconsCarbonUiBuilder: typeof import("../assets/icons/Carbon--ui-builder")['default']
export const SvgoIconsCarbonAccounting: typeof import("../assets/icons/Carbon-accounting")['default']
export const SvgoIconsCarbonForAEM: typeof import("../assets/icons/Carbon-for-AEM")['default']
export const SvgoIconsCarbonForIbmDotcom: typeof import("../assets/icons/Carbon-for-ibm-dotcom")['default']
export const SvgoIconsCarbonForIbmProduct: typeof import("../assets/icons/Carbon-for-ibm-product")['default']
export const SvgoIconsCarbonForMobile: typeof import("../assets/icons/Carbon-for-mobile")['default']
export const SvgoIconsCarbonForSalesforce: typeof import("../assets/icons/Carbon-for-salesforce")['default']
export const SvgoIconsCarbon: typeof import("../assets/icons/Carbon")['default']
export const SvgoIconsCaretDown: typeof import("../assets/icons/Caret--down")['default']
export const SvgoIconsCaretLeft: typeof import("../assets/icons/Caret--left")['default']
export const SvgoIconsCaretRight: typeof import("../assets/icons/Caret--right")['default']
export const SvgoIconsCaretSortDown: typeof import("../assets/icons/Caret--sort--down")['default']
export const SvgoIconsCaretSortUp: typeof import("../assets/icons/Caret--sort--up")['default']
export const SvgoIconsCaretSort: typeof import("../assets/icons/Caret--sort")['default']
export const SvgoIconsCaretUp: typeof import("../assets/icons/Caret--up")['default']
export const SvgoIconsCarouselHorizontal: typeof import("../assets/icons/Carousel--horizontal")['default']
export const SvgoIconsCarouselVertical: typeof import("../assets/icons/Carousel--vertical")['default']
export const SvgoIconsCatalogPublish: typeof import("../assets/icons/Catalog--publish")['default']
export const SvgoIconsCatalog: typeof import("../assets/icons/Catalog")['default']
export const SvgoIconsCategories: typeof import("../assets/icons/Categories")['default']
export const SvgoIconsCategoryAdd: typeof import("../assets/icons/Category--add")['default']
export const SvgoIconsCategoryAnd: typeof import("../assets/icons/Category--and")['default']
export const SvgoIconsCategoryNewEach: typeof import("../assets/icons/Category--new-each")['default']
export const SvgoIconsCategoryNew: typeof import("../assets/icons/Category--new")['default']
export const SvgoIconsCategory: typeof import("../assets/icons/Category")['default']
export const SvgoIconsCautionInverted: typeof import("../assets/icons/Caution-inverted")['default']
export const SvgoIconsCaution: typeof import("../assets/icons/Caution")['default']
export const SvgoIconsCcx: typeof import("../assets/icons/Ccx")['default']
export const SvgoIconsCdArchive: typeof import("../assets/icons/Cd--archive")['default']
export const SvgoIconsCdCreateArchive: typeof import("../assets/icons/Cd--create-archive")['default']
export const SvgoIconsCdCreateExchange: typeof import("../assets/icons/Cd--create-exchange")['default']
export const SvgoIconsCda: typeof import("../assets/icons/Cda")['default']
export const SvgoIconsCellTower: typeof import("../assets/icons/Cell-tower")['default']
export const SvgoIconsCenterCircle: typeof import("../assets/icons/Center--circle")['default']
export const SvgoIconsCenterSquare: typeof import("../assets/icons/Center--square")['default']
export const SvgoIconsCenterToFit: typeof import("../assets/icons/Center-to-fit")['default']
export const SvgoIconsCertificateCheck: typeof import("../assets/icons/Certificate--check")['default']
export const SvgoIconsCertificate: typeof import("../assets/icons/Certificate")['default']
export const SvgoIconsChangeCatalog: typeof import("../assets/icons/Change-catalog")['default']
export const SvgoIconsCharacterDecimal: typeof import("../assets/icons/Character--decimal")['default']
export const SvgoIconsCharacterFraction: typeof import("../assets/icons/Character--fraction")['default']
export const SvgoIconsCharacterInteger: typeof import("../assets/icons/Character--integer")['default']
export const SvgoIconsCharacterLowerCase: typeof import("../assets/icons/Character--lower-case")['default']
export const SvgoIconsCharacterNegativeNumber: typeof import("../assets/icons/Character--negative-number")['default']
export const SvgoIconsCharacterSentenceCase: typeof import("../assets/icons/Character--sentence-case")['default']
export const SvgoIconsCharacterUpperCase: typeof import("../assets/icons/Character--upper-case")['default']
export const SvgoIconsCharacterWholeNumber: typeof import("../assets/icons/Character--whole-number")['default']
export const SvgoIconsCharacterPatterns: typeof import("../assets/icons/Character-patterns")['default']
export const SvgoIconsChargingStationFilled: typeof import("../assets/icons/Charging-station--filled")['default']
export const SvgoIconsChargingStation: typeof import("../assets/icons/Charging-station")['default']
export const SvgoIconsChart3d: typeof import("../assets/icons/Chart--3d")['default']
export const SvgoIconsChartAreaSmooth: typeof import("../assets/icons/Chart--area-smooth")['default']
export const SvgoIconsChartAreaStepper: typeof import("../assets/icons/Chart--area-stepper")['default']
export const SvgoIconsChartArea: typeof import("../assets/icons/Chart--area")['default']
export const SvgoIconsChartAverage: typeof import("../assets/icons/Chart--average")['default']
export const SvgoIconsChartBarFloating: typeof import("../assets/icons/Chart--bar-floating")['default']
export const SvgoIconsChartBarOverlay: typeof import("../assets/icons/Chart--bar-overlay")['default']
export const SvgoIconsChartBarStacked: typeof import("../assets/icons/Chart--bar-stacked")['default']
export const SvgoIconsChartBarTarget: typeof import("../assets/icons/Chart--bar-target")['default']
export const SvgoIconsChartBar: typeof import("../assets/icons/Chart--bar")['default']
export const SvgoIconsChartBubblePacked: typeof import("../assets/icons/Chart--bubble-packed")['default']
export const SvgoIconsChartBubble: typeof import("../assets/icons/Chart--bubble")['default']
export const SvgoIconsChartBullet: typeof import("../assets/icons/Chart--bullet")['default']
export const SvgoIconsChartCandlestick: typeof import("../assets/icons/Chart--candlestick")['default']
export const SvgoIconsChartClusterBar: typeof import("../assets/icons/Chart--cluster-bar")['default']
export const SvgoIconsChartColumnFloating: typeof import("../assets/icons/Chart--column-floating")['default']
export const SvgoIconsChartColumnTarget: typeof import("../assets/icons/Chart--column-target")['default']
export const SvgoIconsChartColumn: typeof import("../assets/icons/Chart--column")['default']
export const SvgoIconsChartComboStacked: typeof import("../assets/icons/Chart--combo-stacked")['default']
export const SvgoIconsChartCombo: typeof import("../assets/icons/Chart--combo")['default']
export const SvgoIconsChartCustom: typeof import("../assets/icons/Chart--custom")['default']
export const SvgoIconsChartDualYAxis: typeof import("../assets/icons/Chart--dual-y-axis")['default']
export const SvgoIconsChartErrorBarAlt: typeof import("../assets/icons/Chart--error-bar--alt")['default']
export const SvgoIconsChartErrorBar: typeof import("../assets/icons/Chart--error-bar")['default']
export const SvgoIconsChartEvaluation: typeof import("../assets/icons/Chart--evaluation")['default']
export const SvgoIconsChartHighLow: typeof import("../assets/icons/Chart--high-low")['default']
export const SvgoIconsChartHistogram: typeof import("../assets/icons/Chart--histogram")['default']
export const SvgoIconsChartLineData: typeof import("../assets/icons/Chart--line--data")['default']
export const SvgoIconsChartLineSmooth: typeof import("../assets/icons/Chart--line-smooth")['default']
export const SvgoIconsChartLine: typeof import("../assets/icons/Chart--line")['default']
export const SvgoIconsChartLogisticRegression: typeof import("../assets/icons/Chart--logistic-regression")['default']
export const SvgoIconsChartMarimekko: typeof import("../assets/icons/Chart--marimekko")['default']
export const SvgoIconsChartMaximum: typeof import("../assets/icons/Chart--maximum")['default']
export const SvgoIconsChartMedian: typeof import("../assets/icons/Chart--median")['default']
export const SvgoIconsChartMinimum: typeof import("../assets/icons/Chart--minimum")['default']
export const SvgoIconsChartMultiLine: typeof import("../assets/icons/Chart--multi-line")['default']
export const SvgoIconsChartMultitype: typeof import("../assets/icons/Chart--multitype")['default']
export const SvgoIconsChartNetwork: typeof import("../assets/icons/Chart--network")['default']
export const SvgoIconsChartParallel: typeof import("../assets/icons/Chart--parallel")['default']
export const SvgoIconsChartPie: typeof import("../assets/icons/Chart--pie")['default']
export const SvgoIconsChartPlanningWaterfall: typeof import("../assets/icons/Chart--planning-waterfall")['default']
export const SvgoIconsChartPoint: typeof import("../assets/icons/Chart--point")['default']
export const SvgoIconsChartPopulation: typeof import("../assets/icons/Chart--population")['default']
export const SvgoIconsChartRadar: typeof import("../assets/icons/Chart--radar")['default']
export const SvgoIconsChartRadial: typeof import("../assets/icons/Chart--radial")['default']
export const SvgoIconsChartRelationship: typeof import("../assets/icons/Chart--relationship")['default']
export const SvgoIconsChartRing: typeof import("../assets/icons/Chart--ring")['default']
export const SvgoIconsChartRiver: typeof import("../assets/icons/Chart--river")['default']
export const SvgoIconsChartRose: typeof import("../assets/icons/Chart--rose")['default']
export const SvgoIconsChartScatter: typeof import("../assets/icons/Chart--scatter")['default']
export const SvgoIconsChartSpiral: typeof import("../assets/icons/Chart--spiral")['default']
export const SvgoIconsChartStacked: typeof import("../assets/icons/Chart--stacked")['default']
export const SvgoIconsChartStepper: typeof import("../assets/icons/Chart--stepper")['default']
export const SvgoIconsChartSunburst: typeof import("../assets/icons/Chart--sunburst")['default']
export const SvgoIconsChartTSne: typeof import("../assets/icons/Chart--t-sne")['default']
export const SvgoIconsChartTreemap: typeof import("../assets/icons/Chart--treemap")['default']
export const SvgoIconsChartVennDiagram: typeof import("../assets/icons/Chart--venn-diagram")['default']
export const SvgoIconsChartViolinPlot: typeof import("../assets/icons/Chart--violin-plot")['default']
export const SvgoIconsChartWaterfall: typeof import("../assets/icons/Chart--waterfall")['default']
export const SvgoIconsChartWinLoss: typeof import("../assets/icons/Chart--win-loss")['default']
export const SvgoIconsChatLaunch: typeof import("../assets/icons/Chat--launch")['default']
export const SvgoIconsChatOff: typeof import("../assets/icons/Chat--off")['default']
export const SvgoIconsChatOperational: typeof import("../assets/icons/Chat--operational")['default']
export const SvgoIconsChatBot: typeof import("../assets/icons/Chat-bot")['default']
export const SvgoIconsChat: typeof import("../assets/icons/Chat")['default']
export const SvgoIconsCheckboxCheckedFilled: typeof import("../assets/icons/Checkbox--checked--filled")['default']
export const SvgoIconsCheckboxChecked: typeof import("../assets/icons/Checkbox--checked")['default']
export const SvgoIconsCheckboxIndeterminateFilled: typeof import("../assets/icons/Checkbox--indeterminate--filled")['default']
export const SvgoIconsCheckboxIndeterminate: typeof import("../assets/icons/Checkbox--indeterminate")['default']
export const SvgoIconsCheckbox: typeof import("../assets/icons/Checkbox")['default']
export const SvgoIconsCheckmarkFilledError: typeof import("../assets/icons/Checkmark--filled--error")['default']
export const SvgoIconsCheckmarkFilledWarning: typeof import("../assets/icons/Checkmark--filled--warning")['default']
export const SvgoIconsCheckmarkFilled: typeof import("../assets/icons/Checkmark--filled")['default']
export const SvgoIconsCheckmarkOutlineError: typeof import("../assets/icons/Checkmark--outline--error")['default']
export const SvgoIconsCheckmarkOutlineWarning: typeof import("../assets/icons/Checkmark--outline--warning")['default']
export const SvgoIconsCheckmarkOutline: typeof import("../assets/icons/Checkmark--outline")['default']
export const SvgoIconsCheckmark: typeof import("../assets/icons/Checkmark")['default']
export const SvgoIconsChemistryReference: typeof import("../assets/icons/Chemistry--reference")['default']
export const SvgoIconsChemistry: typeof import("../assets/icons/Chemistry")['default']
export const SvgoIconsChevronDownOutline: typeof import("../assets/icons/Chevron--down--outline")['default']
export const SvgoIconsChevronDown: typeof import("../assets/icons/Chevron--down")['default']
export const SvgoIconsChevronLeft: typeof import("../assets/icons/Chevron--left")['default']
export const SvgoIconsChevronMini: typeof import("../assets/icons/Chevron--mini")['default']
export const SvgoIconsChevronRight: typeof import("../assets/icons/Chevron--right")['default']
export const SvgoIconsChevronSortDown: typeof import("../assets/icons/Chevron--sort--down")['default']
export const SvgoIconsChevronSortUp: typeof import("../assets/icons/Chevron--sort--up")['default']
export const SvgoIconsChevronSort: typeof import("../assets/icons/Chevron--sort")['default']
export const SvgoIconsChevronUpOutline: typeof import("../assets/icons/Chevron--up--outline")['default']
export const SvgoIconsChevronUp: typeof import("../assets/icons/Chevron--up")['default']
export const SvgoIconsChip: typeof import("../assets/icons/Chip")['default']
export const SvgoIconsChoices: typeof import("../assets/icons/Choices")['default']
export const SvgoIconsChooseItem: typeof import("../assets/icons/Choose-item")['default']
export const SvgoIconsChoroplethMap: typeof import("../assets/icons/Choropleth-map")['default']
export const SvgoIconsCicsCmas: typeof import("../assets/icons/Cics--cmas")['default']
export const SvgoIconsCicsDb2Connection: typeof import("../assets/icons/Cics--db2-connection")['default']
export const SvgoIconsCicsExplorer: typeof import("../assets/icons/Cics--explorer")['default']
export const SvgoIconsCicsProgram: typeof import("../assets/icons/Cics--program")['default']
export const SvgoIconsCicsSitOverrides: typeof import("../assets/icons/Cics--sit-overrides")['default']
export const SvgoIconsCicsSit: typeof import("../assets/icons/Cics--sit")['default']
export const SvgoIconsCicsSystemGroup: typeof import("../assets/icons/Cics--system-group")['default']
export const SvgoIconsCicsTransactionServerZos: typeof import("../assets/icons/Cics--transaction-server-zos")['default']
export const SvgoIconsCicsWuiRegion: typeof import("../assets/icons/Cics--wui-region")['default']
export const SvgoIconsCicsRegionAlt: typeof import("../assets/icons/Cics-region--alt")['default']
export const SvgoIconsCicsRegionRouting: typeof import("../assets/icons/Cics-region--routing")['default']
export const SvgoIconsCicsRegionTarget: typeof import("../assets/icons/Cics-region--target")['default']
export const SvgoIconsCicsRegion: typeof import("../assets/icons/Cics-region")['default']
export const SvgoIconsCicsplex: typeof import("../assets/icons/Cicsplex")['default']
export const SvgoIconsCircleFilled: typeof import("../assets/icons/Circle--filled")['default']
export const SvgoIconsCircleOutline: typeof import("../assets/icons/Circle--outline")['default']
export const SvgoIconsCircleSolid: typeof import("../assets/icons/Circle--solid")['default']
export const SvgoIconsCircleDash: typeof import("../assets/icons/Circle-dash")['default']
export const SvgoIconsCircleFill: typeof import("../assets/icons/Circle-fill")['default']
export const SvgoIconsCircleMeasurement: typeof import("../assets/icons/Circle-measurement")['default']
export const SvgoIconsCirclePacking: typeof import("../assets/icons/Circle-packing")['default']
export const SvgoIconsCircleStroke: typeof import("../assets/icons/Circle-stroke")['default']
export const SvgoIconsCircuitComposer: typeof import("../assets/icons/Circuit-composer")['default']
export const SvgoIconsClassification: typeof import("../assets/icons/Classification")['default']
export const SvgoIconsClassifierLanguage: typeof import("../assets/icons/Classifier--language")['default']
export const SvgoIconsClean: typeof import("../assets/icons/Clean")['default']
export const SvgoIconsCloseFilled: typeof import("../assets/icons/Close--filled")['default']
export const SvgoIconsCloseLarge: typeof import("../assets/icons/Close--large")['default']
export const SvgoIconsCloseOutline: typeof import("../assets/icons/Close--outline")['default']
export const SvgoIconsClose: typeof import("../assets/icons/Close")['default']
export const SvgoIconsClosedCaptionAlt: typeof import("../assets/icons/Closed-caption--alt")['default']
export const SvgoIconsClosedCaptionFilled: typeof import("../assets/icons/Closed-caption--filled")['default']
export const SvgoIconsClosedCaption: typeof import("../assets/icons/Closed-caption")['default']
export const SvgoIconsCloudAlerting: typeof import("../assets/icons/Cloud--alerting")['default']
export const SvgoIconsCloudAuditing: typeof import("../assets/icons/Cloud--auditing")['default']
export const SvgoIconsCloudDataOps: typeof import("../assets/icons/Cloud--data-ops")['default']
export const SvgoIconsCloudDownload: typeof import("../assets/icons/Cloud--download")['default']
export const SvgoIconsCloudLogging: typeof import("../assets/icons/Cloud--logging")['default']
export const SvgoIconsCloudMonitoring: typeof import("../assets/icons/Cloud--monitoring")['default']
export const SvgoIconsCloudOffline: typeof import("../assets/icons/Cloud--offline")['default']
export const SvgoIconsCloudServiceManagement: typeof import("../assets/icons/Cloud--service-management")['default']
export const SvgoIconsCloudUpload: typeof import("../assets/icons/Cloud--upload")['default']
export const SvgoIconsCloudApp: typeof import("../assets/icons/Cloud-app")['default']
export const SvgoIconsCloudCeiling: typeof import("../assets/icons/Cloud-ceiling")['default']
export const SvgoIconsCloudFoundry1: typeof import("../assets/icons/Cloud-foundry--1")['default']
export const SvgoIconsCloudFoundry2: typeof import("../assets/icons/Cloud-foundry--2")['default']
export const SvgoIconsCloudRegistry: typeof import("../assets/icons/Cloud-registry")['default']
export const SvgoIconsCloudSatelliteConfig: typeof import("../assets/icons/Cloud-satellite--config")['default']
export const SvgoIconsCloudSatelliteLink: typeof import("../assets/icons/Cloud-satellite--link")['default']
export const SvgoIconsCloudSatelliteServices: typeof import("../assets/icons/Cloud-satellite--services")['default']
export const SvgoIconsCloudSatellite: typeof import("../assets/icons/Cloud-satellite")['default']
export const SvgoIconsCloudServices: typeof import("../assets/icons/Cloud-services")['default']
export const SvgoIconsCloud: typeof import("../assets/icons/Cloud")['default']
export const SvgoIconsCloudy: typeof import("../assets/icons/Cloudy")['default']
export const SvgoIconsCobbAngle: typeof import("../assets/icons/Cobb-angle")['default']
export const SvgoIconsCodeHide: typeof import("../assets/icons/Code--hide")['default']
export const SvgoIconsCodeReference: typeof import("../assets/icons/Code--reference")['default']
export const SvgoIconsCodeBlock: typeof import("../assets/icons/Code-block")['default']
export const SvgoIconsCodeSigningService: typeof import("../assets/icons/Code-signing-service")['default']
export const SvgoIconsCode: typeof import("../assets/icons/Code")['default']
export const SvgoIconsCognitive: typeof import("../assets/icons/Cognitive")['default']
export const SvgoIconsCollaborate: typeof import("../assets/icons/Collaborate")['default']
export const SvgoIconsCollapseAll: typeof import("../assets/icons/Collapse-all")['default']
export const SvgoIconsCollapseCategories: typeof import("../assets/icons/Collapse-categories")['default']
export const SvgoIconsColorPalette: typeof import("../assets/icons/Color-palette")['default']
export const SvgoIconsColorSwitch: typeof import("../assets/icons/Color-switch")['default']
export const SvgoIconsColumnDelete: typeof import("../assets/icons/Column--delete")['default']
export const SvgoIconsColumnInsert: typeof import("../assets/icons/Column--insert")['default']
export const SvgoIconsColumnDependency: typeof import("../assets/icons/Column-dependency")['default']
export const SvgoIconsColumn: typeof import("../assets/icons/Column")['default']
export const SvgoIconsCommit: typeof import("../assets/icons/Commit")['default']
export const SvgoIconsCommunicationUnified: typeof import("../assets/icons/Communication--unified")['default']
export const SvgoIconsCompare: typeof import("../assets/icons/Compare")['default']
export const SvgoIconsCompass: typeof import("../assets/icons/Compass")['default']
export const SvgoIconsComposerEdit: typeof import("../assets/icons/Composer-edit")['default']
export const SvgoIconsConcept: typeof import("../assets/icons/Concept")['default']
export const SvgoIconsConditionPoint: typeof import("../assets/icons/Condition--point")['default']
export const SvgoIconsConditionWaitPoint: typeof import("../assets/icons/Condition--wait-point")['default']
export const SvgoIconsConnectRecursive: typeof import("../assets/icons/Connect--recursive")['default']
export const SvgoIconsConnectReference: typeof import("../assets/icons/Connect--reference")['default']
export const SvgoIconsConnectSource: typeof import("../assets/icons/Connect--source")['default']
export const SvgoIconsConnectTarget: typeof import("../assets/icons/Connect--target")['default']
export const SvgoIconsConnect: typeof import("../assets/icons/Connect")['default']
export const SvgoIconsConnectionReceive: typeof import("../assets/icons/Connection--receive")['default']
export const SvgoIconsConnectionSend: typeof import("../assets/icons/Connection--send")['default']
export const SvgoIconsConnectionTwoWay: typeof import("../assets/icons/Connection--two-way")['default']
export const SvgoIconsConnectionUsage: typeof import("../assets/icons/Connection--usage")['default']
export const SvgoIconsConnectionFlowUsage: typeof import("../assets/icons/Connection-flow--usage")['default']
export const SvgoIconsConnectionSignalOff: typeof import("../assets/icons/Connection-signal--off")['default']
export const SvgoIconsConnectionSignal: typeof import("../assets/icons/Connection-signal")['default']
export const SvgoIconsConstraint: typeof import("../assets/icons/Constraint")['default']
export const SvgoIconsConstruction: typeof import("../assets/icons/Construction")['default']
export const SvgoIconsContainerEngine: typeof import("../assets/icons/Container--engine")['default']
export const SvgoIconsContainerImage: typeof import("../assets/icons/Container--image")['default']
export const SvgoIconsContainerRuntimeMonitor: typeof import("../assets/icons/Container--runtime-monitor")['default']
export const SvgoIconsContainerRuntime: typeof import("../assets/icons/Container--runtime")['default']
export const SvgoIconsContainerImagePull: typeof import("../assets/icons/Container-image--pull")['default']
export const SvgoIconsContainerImagePushPull: typeof import("../assets/icons/Container-image--push-pull")['default']
export const SvgoIconsContainerImagePush: typeof import("../assets/icons/Container-image--push")['default']
export const SvgoIconsContainerRegistry: typeof import("../assets/icons/Container-registry")['default']
export const SvgoIconsContainerServices: typeof import("../assets/icons/Container-services")['default']
export const SvgoIconsContainerSoftware: typeof import("../assets/icons/Container-software")['default']
export const SvgoIconsContentDeliveryNetwork: typeof import("../assets/icons/Content-delivery-network")['default']
export const SvgoIconsContentView: typeof import("../assets/icons/Content-view")['default']
export const SvgoIconsContinueFilled: typeof import("../assets/icons/Continue--filled")['default']
export const SvgoIconsContinue: typeof import("../assets/icons/Continue")['default']
export const SvgoIconsContinuousDeployment: typeof import("../assets/icons/Continuous-deployment")['default']
export const SvgoIconsContinuousIntegration: typeof import("../assets/icons/Continuous-integration")['default']
export const SvgoIconsContourDraw: typeof import("../assets/icons/Contour--draw")['default']
export const SvgoIconsContourEdit: typeof import("../assets/icons/Contour--edit")['default']
export const SvgoIconsContourFinding: typeof import("../assets/icons/Contour-finding")['default']
export const SvgoIconsContrast: typeof import("../assets/icons/Contrast")['default']
export const SvgoIconsConvertToCloud: typeof import("../assets/icons/Convert-to-cloud")['default']
export const SvgoIconsCookie: typeof import("../assets/icons/Cookie")['default']
export const SvgoIconsCopyFile: typeof import("../assets/icons/Copy--file")['default']
export const SvgoIconsCopyLink: typeof import("../assets/icons/Copy--link")['default']
export const SvgoIconsCopy: typeof import("../assets/icons/Copy")['default']
export const SvgoIconsCorn: typeof import("../assets/icons/Corn")['default']
export const SvgoIconsCorner: typeof import("../assets/icons/Corner")['default']
export const SvgoIconsCoronavirus: typeof import("../assets/icons/Coronavirus")['default']
export const SvgoIconsCostTotal: typeof import("../assets/icons/Cost--total")['default']
export const SvgoIconsCost: typeof import("../assets/icons/Cost")['default']
export const SvgoIconsCough: typeof import("../assets/icons/Cough")['default']
export const SvgoIconsCourse: typeof import("../assets/icons/Course")['default']
export const SvgoIconsCovariate: typeof import("../assets/icons/Covariate")['default']
export const SvgoIconsCredentials: typeof import("../assets/icons/Credentials")['default']
export const SvgoIconsCriticalSeverity: typeof import("../assets/icons/Critical-severity")['default']
export const SvgoIconsCritical: typeof import("../assets/icons/Critical")['default']
export const SvgoIconsCropGrowth: typeof import("../assets/icons/Crop-growth")['default']
export const SvgoIconsCropHealth: typeof import("../assets/icons/Crop-health")['default']
export const SvgoIconsCrop: typeof import("../assets/icons/Crop")['default']
export const SvgoIconsCrossReference: typeof import("../assets/icons/Cross-reference")['default']
export const SvgoIconsCrossTab: typeof import("../assets/icons/Cross-tab")['default']
export const SvgoIconsCrossroads: typeof import("../assets/icons/Crossroads")['default']
export const SvgoIconsCrowdReportFilled: typeof import("../assets/icons/Crowd-report--filled")['default']
export const SvgoIconsCrowdReport: typeof import("../assets/icons/Crowd-report")['default']
export const SvgoIconsCsv: typeof import("../assets/icons/Csv")['default']
export const SvgoIconsCu1: typeof import("../assets/icons/Cu1")['default']
export const SvgoIconsCu3: typeof import("../assets/icons/Cu3")['default']
export const SvgoIconsCubeView: typeof import("../assets/icons/Cube-view")['default']
export const SvgoIconsCube: typeof import("../assets/icons/Cube")['default']
export const SvgoIconsCurrencyBaht: typeof import("../assets/icons/Currency--baht")['default']
export const SvgoIconsCurrencyDollar: typeof import("../assets/icons/Currency--dollar")['default']
export const SvgoIconsCurrencyEuro: typeof import("../assets/icons/Currency--euro")['default']
export const SvgoIconsCurrencyLira: typeof import("../assets/icons/Currency--lira")['default']
export const SvgoIconsCurrencyPound: typeof import("../assets/icons/Currency--pound")['default']
export const SvgoIconsCurrencyRuble: typeof import("../assets/icons/Currency--ruble")['default']
export const SvgoIconsCurrencyRupee: typeof import("../assets/icons/Currency--rupee")['default']
export const SvgoIconsCurrencyShekel: typeof import("../assets/icons/Currency--shekel")['default']
export const SvgoIconsCurrencyWon: typeof import("../assets/icons/Currency--won")['default']
export const SvgoIconsCurrencyYen: typeof import("../assets/icons/Currency--yen")['default']
export const SvgoIconsCurrency: typeof import("../assets/icons/Currency")['default']
export const SvgoIconsCursor1: typeof import("../assets/icons/Cursor--1")['default']
export const SvgoIconsCursor2: typeof import("../assets/icons/Cursor--2")['default']
export const SvgoIconsCustomerService: typeof import("../assets/icons/Customer-service")['default']
export const SvgoIconsCustomer: typeof import("../assets/icons/Customer")['default']
export const SvgoIconsCutInHalf: typeof import("../assets/icons/Cut-in-half")['default']
export const SvgoIconsCutOut: typeof import("../assets/icons/Cut-out")['default']
export const SvgoIconsCut: typeof import("../assets/icons/Cut")['default']
export const SvgoIconsCy: typeof import("../assets/icons/Cy")['default']
export const SvgoIconsCyclist: typeof import("../assets/icons/Cyclist")['default']
export const SvgoIconsCz: typeof import("../assets/icons/Cz")['default']
export const SvgoIconsDashboardReference: typeof import("../assets/icons/Dashboard--reference")['default']
export const SvgoIconsDashboard: typeof import("../assets/icons/Dashboard")['default']
export const SvgoIconsData1: typeof import("../assets/icons/Data--1")['default']
export const SvgoIconsData2: typeof import("../assets/icons/Data--2")['default']
export const SvgoIconsDataBaseAlt: typeof import("../assets/icons/Data--base--alt")['default']
export const SvgoIconsDataBase: typeof import("../assets/icons/Data--base")['default']
export const SvgoIconsDataCategorical: typeof import("../assets/icons/Data--categorical")['default']
export const SvgoIconsDataCenter: typeof import("../assets/icons/Data--center")['default']
export const SvgoIconsDataCheck: typeof import("../assets/icons/Data--check")['default']
export const SvgoIconsDataConnected: typeof import("../assets/icons/Data--connected")['default']
export const SvgoIconsDataError: typeof import("../assets/icons/Data--error")['default']
export const SvgoIconsDataFormat: typeof import("../assets/icons/Data--format")['default']
export const SvgoIconsDataReference: typeof import("../assets/icons/Data--reference")['default']
export const SvgoIconsDataRegular: typeof import("../assets/icons/Data--regular")['default']
export const SvgoIconsDataSet: typeof import("../assets/icons/Data--set")['default']
export const SvgoIconsDataStructured: typeof import("../assets/icons/Data--structured")['default']
export const SvgoIconsDataUnreal: typeof import("../assets/icons/Data--unreal")['default']
export const SvgoIconsDataUnstructured: typeof import("../assets/icons/Data--unstructured")['default']
export const SvgoIconsDataViewAlt: typeof import("../assets/icons/Data--view--alt")['default']
export const SvgoIconsDataView: typeof import("../assets/icons/Data--view")['default']
export const SvgoIconsDataAccessor: typeof import("../assets/icons/Data-accessor")['default']
export const SvgoIconsDataAnalytics: typeof import("../assets/icons/Data-analytics")['default']
export const SvgoIconsDataBackup: typeof import("../assets/icons/Data-backup")['default']
export const SvgoIconsDataBin: typeof import("../assets/icons/Data-bin")['default']
export const SvgoIconsDataBlob: typeof import("../assets/icons/Data-blob")['default']
export const SvgoIconsDataClass: typeof import("../assets/icons/Data-class")['default']
export const SvgoIconsDataCollection: typeof import("../assets/icons/Data-collection")['default']
export const SvgoIconsDataDefinition: typeof import("../assets/icons/Data-definition")['default']
export const SvgoIconsDataDiode: typeof import("../assets/icons/Data-diode")['default']
export const SvgoIconsDataEnrichmentAdd: typeof import("../assets/icons/Data-enrichment--add")['default']
export const SvgoIconsDataEnrichment: typeof import("../assets/icons/Data-enrichment")['default']
export const SvgoIconsDataPlayer: typeof import("../assets/icons/Data-player")['default']
export const SvgoIconsDataQualityDefinition: typeof import("../assets/icons/Data-quality-definition")['default']
export const SvgoIconsDataRefineryReference: typeof import("../assets/icons/Data-refinery--reference")['default']
export const SvgoIconsDataRefinery: typeof import("../assets/icons/Data-refinery")['default']
export const SvgoIconsDataShare: typeof import("../assets/icons/Data-share")['default']
export const SvgoIconsDataTableReference: typeof import("../assets/icons/Data-table--reference")['default']
export const SvgoIconsDataTable: typeof import("../assets/icons/Data-table")['default']
export const SvgoIconsDataVis1: typeof import("../assets/icons/Data-vis--1")['default']
export const SvgoIconsDataVis2: typeof import("../assets/icons/Data-vis--2")['default']
export const SvgoIconsDataVis3: typeof import("../assets/icons/Data-vis--3")['default']
export const SvgoIconsDataVis4: typeof import("../assets/icons/Data-vis--4")['default']
export const SvgoIconsDataVolumeAlt: typeof import("../assets/icons/Data-volume--alt")['default']
export const SvgoIconsDataVolume: typeof import("../assets/icons/Data-volume")['default']
export const SvgoIconsDatabaseDatastax: typeof import("../assets/icons/Database--datastax")['default']
export const SvgoIconsDatabaseElastic: typeof import("../assets/icons/Database--elastic")['default']
export const SvgoIconsDatabaseEnterprisedb: typeof import("../assets/icons/Database--enterprisedb")['default']
export const SvgoIconsDatabaseEtcd: typeof import("../assets/icons/Database--etcd")['default']
export const SvgoIconsDatabaseMessaging: typeof import("../assets/icons/Database--messaging")['default']
export const SvgoIconsDatabaseMongodb: typeof import("../assets/icons/Database--mongodb")['default']
export const SvgoIconsDatabasePostgresql: typeof import("../assets/icons/Database--postgresql")['default']
export const SvgoIconsDatabaseRabbit: typeof import("../assets/icons/Database--rabbit")['default']
export const SvgoIconsDatabaseRedis: typeof import("../assets/icons/Database--redis")['default']
export const SvgoIconsDatastore: typeof import("../assets/icons/Datastore")['default']
export const SvgoIconsDb2BufferPool: typeof import("../assets/icons/Db2--buffer-pool")['default']
export const SvgoIconsDb2DataSharingGroup: typeof import("../assets/icons/Db2--data-sharing-group")['default']
export const SvgoIconsDb2Database: typeof import("../assets/icons/Db2--database")['default']
export const SvgoIconsDebug: typeof import("../assets/icons/Debug")['default']
export const SvgoIconsDecisionNode: typeof import("../assets/icons/Decision-node")['default']
export const SvgoIconsDecisionTree: typeof import("../assets/icons/Decision-tree")['default']
export const SvgoIconsDelete: typeof import("../assets/icons/Delete")['default']
export const SvgoIconsDeliveryAdd: typeof import("../assets/icons/Delivery--add")['default']
export const SvgoIconsDeliveryParcel: typeof import("../assets/icons/Delivery--parcel")['default']
export const SvgoIconsDeliveryTruck: typeof import("../assets/icons/Delivery-truck")['default']
export const SvgoIconsDelivery: typeof import("../assets/icons/Delivery")['default']
export const SvgoIconsDemo: typeof import("../assets/icons/Demo")['default']
export const SvgoIconsDenominate: typeof import("../assets/icons/Denominate")['default']
export const SvgoIconsDeparture: typeof import("../assets/icons/Departure")['default']
export const SvgoIconsDeployRules: typeof import("../assets/icons/Deploy-rules")['default']
export const SvgoIconsDeploy: typeof import("../assets/icons/Deploy")['default']
export const SvgoIconsDeploymentPattern: typeof import("../assets/icons/Deployment-pattern")['default']
export const SvgoIconsDeploymentPolicy: typeof import("../assets/icons/Deployment-policy")['default']
export const SvgoIconsDeploymentUnitData: typeof import("../assets/icons/Deployment-unit--data")['default']
export const SvgoIconsDeploymentUnitExecution: typeof import("../assets/icons/Deployment-unit--execution")['default']
export const SvgoIconsDeploymentUnitInstallation1: typeof import("../assets/icons/Deployment-unit--installation1")['default']
export const SvgoIconsDeploymentUnitPresentation: typeof import("../assets/icons/Deployment-unit--presentation")['default']
export const SvgoIconsDeploymentUnitTechnicalData: typeof import("../assets/icons/Deployment-unit--technical--data")['default']
export const SvgoIconsDeploymentUnitTechnicalExecution: typeof import("../assets/icons/Deployment-unit--technical--execution")['default']
export const SvgoIconsDeploymentUnitTechnicalInstallation: typeof import("../assets/icons/Deployment-unit--technical--installation")['default']
export const SvgoIconsDeploymentUnitTechnicalPresentation: typeof import("../assets/icons/Deployment-unit--technical--presentation")['default']
export const SvgoIconsDeskAdjustable: typeof import("../assets/icons/Desk--adjustable")['default']
export const SvgoIconsDevelopment: typeof import("../assets/icons/Development")['default']
export const SvgoIconsDevicesApps: typeof import("../assets/icons/Devices--apps")['default']
export const SvgoIconsDevices: typeof import("../assets/icons/Devices")['default']
export const SvgoIconsDewPointFilled: typeof import("../assets/icons/Dew-point--filled")['default']
export const SvgoIconsDewPoint: typeof import("../assets/icons/Dew-point")['default']
export const SvgoIconsDiagramReference: typeof import("../assets/icons/Diagram--reference")['default']
export const SvgoIconsDiagram: typeof import("../assets/icons/Diagram")['default']
export const SvgoIconsDiamondOutline: typeof import("../assets/icons/Diamond--outline")['default']
export const SvgoIconsDiamondSolid: typeof import("../assets/icons/Diamond--solid")['default']
export const SvgoIconsDiamondFill: typeof import("../assets/icons/Diamond-fill")['default']
export const SvgoIconsDicom6000: typeof import("../assets/icons/Dicom--6000")['default']
export const SvgoIconsDicomOverlay: typeof import("../assets/icons/Dicom--overlay")['default']
export const SvgoIconsDirectionBearRight01Filled: typeof import("../assets/icons/Direction--bear-right--01--filled")['default']
export const SvgoIconsDirectionBearRight01: typeof import("../assets/icons/Direction--bear-right--01")['default']
export const SvgoIconsDirectionBearRight02Filled: typeof import("../assets/icons/Direction--bear-right--02--filled")['default']
export const SvgoIconsDirectionBearRight02: typeof import("../assets/icons/Direction--bear-right--02")['default']
export const SvgoIconsDirectionCurveFilled: typeof import("../assets/icons/Direction--curve--filled")['default']
export const SvgoIconsDirectionCurve: typeof import("../assets/icons/Direction--curve")['default']
export const SvgoIconsDirectionForkFilled: typeof import("../assets/icons/Direction--fork--filled")['default']
export const SvgoIconsDirectionFork: typeof import("../assets/icons/Direction--fork")['default']
export const SvgoIconsDirectionLoopLeftFilled: typeof import("../assets/icons/Direction--loop-left--filled")['default']
export const SvgoIconsDirectionLoopLeft: typeof import("../assets/icons/Direction--loop-left")['default']
export const SvgoIconsDirectionLoopRightFilled: typeof import("../assets/icons/Direction--loop-right--filled")['default']
export const SvgoIconsDirectionLoopRight: typeof import("../assets/icons/Direction--loop-right")['default']
export const SvgoIconsDirectionMergeFilled: typeof import("../assets/icons/Direction--merge--filled")['default']
export const SvgoIconsDirectionMerge: typeof import("../assets/icons/Direction--merge")['default']
export const SvgoIconsDirectionRight01Filled: typeof import("../assets/icons/Direction--right--01--filled")['default']
export const SvgoIconsDirectionRight01: typeof import("../assets/icons/Direction--right--01")['default']
export const SvgoIconsDirectionRight02Filled: typeof import("../assets/icons/Direction--right--02--filled")['default']
export const SvgoIconsDirectionRight02: typeof import("../assets/icons/Direction--right--02")['default']
export const SvgoIconsDirectionRotaryFirstRightFilled: typeof import("../assets/icons/Direction--rotary--first-right--filled")['default']
export const SvgoIconsDirectionRotaryFirstRight: typeof import("../assets/icons/Direction--rotary--first-right")['default']
export const SvgoIconsDirectionRotaryRightFilled: typeof import("../assets/icons/Direction--rotary--right--filled")['default']
export const SvgoIconsDirectionRotaryRight: typeof import("../assets/icons/Direction--rotary--right")['default']
export const SvgoIconsDirectionRotaryStraightFilled: typeof import("../assets/icons/Direction--rotary--straight--filled")['default']
export const SvgoIconsDirectionRotaryStraight: typeof import("../assets/icons/Direction--rotary--straight")['default']
export const SvgoIconsDirectionSharpTurnFilled: typeof import("../assets/icons/Direction--sharp-turn--filled")['default']
export const SvgoIconsDirectionSharpTurn: typeof import("../assets/icons/Direction--sharp-turn")['default']
export const SvgoIconsDirectionStraightFilled: typeof import("../assets/icons/Direction--straight--filled")['default']
export const SvgoIconsDirectionStraightRightFilled: typeof import("../assets/icons/Direction--straight--right--filled")['default']
export const SvgoIconsDirectionStraightRight: typeof import("../assets/icons/Direction--straight--right")['default']
export const SvgoIconsDirectionStraight: typeof import("../assets/icons/Direction--straight")['default']
export const SvgoIconsDirectionUTurnFilled: typeof import("../assets/icons/Direction--u-turn--filled")['default']
export const SvgoIconsDirectionUTurn: typeof import("../assets/icons/Direction--u-turn")['default']
export const SvgoIconsDirectoryDomain: typeof import("../assets/icons/Directory-domain")['default']
export const SvgoIconsDistributeHorizontalCenter: typeof import("../assets/icons/Distribute--horizontal-center")['default']
export const SvgoIconsDistributeHorizontalLeft: typeof import("../assets/icons/Distribute--horizontal-left")['default']
export const SvgoIconsDistributeHorizontalRight: typeof import("../assets/icons/Distribute--horizontal-right")['default']
export const SvgoIconsDistributeVerticalBottom: typeof import("../assets/icons/Distribute--vertical-bottom")['default']
export const SvgoIconsDistributeVerticalCenter: typeof import("../assets/icons/Distribute--vertical-center")['default']
export const SvgoIconsDistributeVerticalTop: typeof import("../assets/icons/Distribute--vertical-top")['default']
export const SvgoIconsDna: typeof import("../assets/icons/Dna")['default']
export const SvgoIconsDnsServices: typeof import("../assets/icons/Dns-services")['default']
export const SvgoIconsDoc: typeof import("../assets/icons/Doc")['default']
export const SvgoIconsDocumentAdd: typeof import("../assets/icons/Document--add")['default']
export const SvgoIconsDocumentAttachment: typeof import("../assets/icons/Document--attachment")['default']
export const SvgoIconsDocumentAudio: typeof import("../assets/icons/Document--audio")['default']
export const SvgoIconsDocumentBlank: typeof import("../assets/icons/Document--blank")['default']
export const SvgoIconsDocumentComment: typeof import("../assets/icons/Document--comment")['default']
export const SvgoIconsDocumentConfiguration: typeof import("../assets/icons/Document--configuration")['default']
export const SvgoIconsDocumentDownload: typeof import("../assets/icons/Document--download")['default']
export const SvgoIconsDocumentEpdf: typeof import("../assets/icons/Document--epdf")['default']
export const SvgoIconsDocumentExport: typeof import("../assets/icons/Document--export")['default']
export const SvgoIconsDocumentHorizontal: typeof import("../assets/icons/Document--horizontal")['default']
export const SvgoIconsDocumentImport: typeof import("../assets/icons/Document--import")['default']
export const SvgoIconsDocumentMultiple01: typeof import("../assets/icons/Document--multiple-01")['default']
export const SvgoIconsDocumentMultiple02: typeof import("../assets/icons/Document--multiple-02")['default']
export const SvgoIconsDocumentPdf: typeof import("../assets/icons/Document--pdf")['default']
export const SvgoIconsDocumentPreliminary: typeof import("../assets/icons/Document--preliminary")['default']
export const SvgoIconsDocumentProtected: typeof import("../assets/icons/Document--protected")['default']
export const SvgoIconsDocumentRequirements: typeof import("../assets/icons/Document--requirements")['default']
export const SvgoIconsDocumentSecurity: typeof import("../assets/icons/Document--security")['default']
export const SvgoIconsDocumentSigned: typeof import("../assets/icons/Document--signed")['default']
export const SvgoIconsDocumentSketch: typeof import("../assets/icons/Document--sketch")['default']
export const SvgoIconsDocumentSubject: typeof import("../assets/icons/Document--subject")['default']
export const SvgoIconsDocumentSubtract: typeof import("../assets/icons/Document--subtract")['default']
export const SvgoIconsDocumentTasks: typeof import("../assets/icons/Document--tasks")['default']
export const SvgoIconsDocumentUnknown: typeof import("../assets/icons/Document--unknown")['default']
export const SvgoIconsDocumentUnprotected: typeof import("../assets/icons/Document--unprotected")['default']
export const SvgoIconsDocumentVertical: typeof import("../assets/icons/Document--vertical")['default']
export const SvgoIconsDocumentVideo: typeof import("../assets/icons/Document--video")['default']
export const SvgoIconsDocumentView: typeof import("../assets/icons/Document--view")['default']
export const SvgoIconsDocumentWordProcessorReference: typeof import("../assets/icons/Document--word-processor--reference")['default']
export const SvgoIconsDocumentWordProcessor: typeof import("../assets/icons/Document--word-processor")['default']
export const SvgoIconsDocumentSentiment: typeof import("../assets/icons/Document-sentiment")['default']
export const SvgoIconsDocument: typeof import("../assets/icons/Document")['default']
export const SvgoIconsDogWalker: typeof import("../assets/icons/Dog-walker")['default']
export const SvgoIconsDotMark: typeof import("../assets/icons/Dot-mark")['default']
export const SvgoIconsDoubleInteger: typeof import("../assets/icons/Double-integer")['default']
export const SvgoIconsDownToBottom: typeof import("../assets/icons/Down-to-bottom")['default']
export const SvgoIconsDownloadStudy: typeof import("../assets/icons/Download-study")['default']
export const SvgoIconsDownload: typeof import("../assets/icons/Download")['default']
export const SvgoIconsDownstream: typeof import("../assets/icons/Downstream")['default']
export const SvgoIconsDragHorizontal: typeof import("../assets/icons/Drag--horizontal")['default']
export const SvgoIconsDragVertical: typeof import("../assets/icons/Drag--vertical")['default']
export const SvgoIconsDraggable: typeof import("../assets/icons/Draggable")['default']
export const SvgoIconsDraw: typeof import("../assets/icons/Draw")['default']
export const SvgoIconsDrillBack: typeof import("../assets/icons/Drill-back")['default']
export const SvgoIconsDrillDown: typeof import("../assets/icons/Drill-down")['default']
export const SvgoIconsDrillThrough: typeof import("../assets/icons/Drill-through")['default']
export const SvgoIconsDrink01: typeof import("../assets/icons/Drink--01")['default']
export const SvgoIconsDrink02: typeof import("../assets/icons/Drink--02")['default']
export const SvgoIconsDriverAnalysis: typeof import("../assets/icons/Driver-analysis")['default']
export const SvgoIconsDroneDelivery: typeof import("../assets/icons/Drone--delivery")['default']
export const SvgoIconsDroneFront: typeof import("../assets/icons/Drone--front")['default']
export const SvgoIconsDroneVideo: typeof import("../assets/icons/Drone--video")['default']
export const SvgoIconsDrone: typeof import("../assets/icons/Drone")['default']
export const SvgoIconsDropPhotoFilled: typeof import("../assets/icons/Drop-photo--filled")['default']
export const SvgoIconsDropPhoto: typeof import("../assets/icons/Drop-photo")['default']
export const SvgoIconsDrought: typeof import("../assets/icons/Drought")['default']
export const SvgoIconsDvr: typeof import("../assets/icons/Dvr")['default']
export const SvgoIconsEarthAmericasFilled: typeof import("../assets/icons/Earth--americas--filled")['default']
export const SvgoIconsEarthAmericas: typeof import("../assets/icons/Earth--americas")['default']
export const SvgoIconsEarthEuropeAfricaFilled: typeof import("../assets/icons/Earth--europe-africa--filled")['default']
export const SvgoIconsEarthEuropeAfrica: typeof import("../assets/icons/Earth--europe-africa")['default']
export const SvgoIconsEarthFilled: typeof import("../assets/icons/Earth--filled")['default']
export const SvgoIconsEarthSoutheastAsiaFilled: typeof import("../assets/icons/Earth--southeast-asia--filled")['default']
export const SvgoIconsEarthSoutheastAsia: typeof import("../assets/icons/Earth--southeast-asia")['default']
export const SvgoIconsEarth: typeof import("../assets/icons/Earth")['default']
export const SvgoIconsEarthquake: typeof import("../assets/icons/Earthquake")['default']
export const SvgoIconsEdgeCluster: typeof import("../assets/icons/Edge-cluster")['default']
export const SvgoIconsEdgeDevice: typeof import("../assets/icons/Edge-device")['default']
export const SvgoIconsEdgeEnhancement01: typeof import("../assets/icons/Edge-enhancement--01")['default']
export const SvgoIconsEdgeEnhancement02: typeof import("../assets/icons/Edge-enhancement--02")['default']
export const SvgoIconsEdgeEnhancement03: typeof import("../assets/icons/Edge-enhancement--03")['default']
export const SvgoIconsEdgeEnhancement: typeof import("../assets/icons/Edge-enhancement")['default']
export const SvgoIconsEdgeNodeAlt: typeof import("../assets/icons/Edge-node--alt")['default']
export const SvgoIconsEdgeNode: typeof import("../assets/icons/Edge-node")['default']
export const SvgoIconsEdgeService: typeof import("../assets/icons/Edge-service")['default']
export const SvgoIconsEditOff: typeof import("../assets/icons/Edit--off")['default']
export const SvgoIconsEdit: typeof import("../assets/icons/Edit")['default']
export const SvgoIconsEdtLoop: typeof import("../assets/icons/Edt-loop")['default']
export const SvgoIconsEducation: typeof import("../assets/icons/Education")['default']
export const SvgoIconsEmailNew: typeof import("../assets/icons/Email--new")['default']
export const SvgoIconsEmail: typeof import("../assets/icons/Email")['default']
export const SvgoIconsEncryption: typeof import("../assets/icons/Encryption")['default']
export const SvgoIconsEnergyRenewable: typeof import("../assets/icons/Energy--renewable")['default']
export const SvgoIconsEnterprise: typeof import("../assets/icons/Enterprise")['default']
export const SvgoIconsEnumerationDefinition: typeof import("../assets/icons/Enumeration--definition")['default']
export const SvgoIconsEnumerationUsage: typeof import("../assets/icons/Enumeration--usage")['default']
export const SvgoIconsEqualApproximately: typeof import("../assets/icons/Equal--approximately")['default']
export const SvgoIconsEqualizer: typeof import("../assets/icons/Equalizer")['default']
export const SvgoIconsErase3d: typeof import("../assets/icons/Erase--3d")['default']
export const SvgoIconsErase: typeof import("../assets/icons/Erase")['default']
export const SvgoIconsErrorFilled: typeof import("../assets/icons/Error--filled")['default']
export const SvgoIconsErrorOutline: typeof import("../assets/icons/Error--outline")['default']
export const SvgoIconsError: typeof import("../assets/icons/Error")['default']
export const SvgoIconsEventChange: typeof import("../assets/icons/Event--change")['default']
export const SvgoIconsEventIncident: typeof import("../assets/icons/Event--incident")['default']
export const SvgoIconsEventSchedule: typeof import("../assets/icons/Event--schedule")['default']
export const SvgoIconsEventWarning: typeof import("../assets/icons/Event--warning")['default']
export const SvgoIconsEvent: typeof import("../assets/icons/Event")['default']
export const SvgoIconsEventsAlt: typeof import("../assets/icons/Events--alt")['default']
export const SvgoIconsEvents: typeof import("../assets/icons/Events")['default']
export const SvgoIconsExamMode: typeof import("../assets/icons/Exam-mode")['default']
export const SvgoIconsExecutableProgram: typeof import("../assets/icons/Executable-program")['default']
export const SvgoIconsExit: typeof import("../assets/icons/Exit")['default']
export const SvgoIconsExpandAll: typeof import("../assets/icons/Expand-all")['default']
export const SvgoIconsExpandCategories: typeof import("../assets/icons/Expand-categories")['default']
export const SvgoIconsExplore: typeof import("../assets/icons/Explore")['default']
export const SvgoIconsExport: typeof import("../assets/icons/Export")['default']
export const SvgoIconsEyedropper: typeof import("../assets/icons/Eyedropper")['default']
export const SvgoIconsFaceActivatedAdd: typeof import("../assets/icons/Face--activated--add")['default']
export const SvgoIconsFaceActivatedFilled: typeof import("../assets/icons/Face--activated--filled")['default']
export const SvgoIconsFaceActivated: typeof import("../assets/icons/Face--activated")['default']
export const SvgoIconsFaceAdd: typeof import("../assets/icons/Face--add")['default']
export const SvgoIconsFaceCool: typeof import("../assets/icons/Face--cool")['default']
export const SvgoIconsFaceDissatisfiedFilled: typeof import("../assets/icons/Face--dissatisfied--filled")['default']
export const SvgoIconsFaceDissatisfied: typeof import("../assets/icons/Face--dissatisfied")['default']
export const SvgoIconsFaceDizzyFilled: typeof import("../assets/icons/Face--dizzy--filled")['default']
export const SvgoIconsFaceDizzy: typeof import("../assets/icons/Face--dizzy")['default']
export const SvgoIconsFaceMask: typeof import("../assets/icons/Face--mask")['default']
export const SvgoIconsFaceNeutralFilled: typeof import("../assets/icons/Face--neutral--filled")['default']
export const SvgoIconsFaceNeutral: typeof import("../assets/icons/Face--neutral")['default']
export const SvgoIconsFacePendingFilled: typeof import("../assets/icons/Face--pending--filled")['default']
export const SvgoIconsFacePending: typeof import("../assets/icons/Face--pending")['default']
export const SvgoIconsFaceSatisfiedFilled: typeof import("../assets/icons/Face--satisfied--filled")['default']
export const SvgoIconsFaceSatisfied: typeof import("../assets/icons/Face--satisfied")['default']
export const SvgoIconsFaceWinkFilled: typeof import("../assets/icons/Face--wink--filled")['default']
export const SvgoIconsFaceWink: typeof import("../assets/icons/Face--wink")['default']
export const SvgoIconsFactor: typeof import("../assets/icons/Factor")['default']
export const SvgoIconsFade: typeof import("../assets/icons/Fade")['default']
export const SvgoIconsFavoriteFilled: typeof import("../assets/icons/Favorite--filled")['default']
export const SvgoIconsFavoriteHalf: typeof import("../assets/icons/Favorite--half")['default']
export const SvgoIconsFavorite: typeof import("../assets/icons/Favorite")['default']
export const SvgoIconsFeatureMembershipFilled: typeof import("../assets/icons/Feature-membership--filled")['default']
export const SvgoIconsFeatureMembership: typeof import("../assets/icons/Feature-membership")['default']
export const SvgoIconsFeatureTyping: typeof import("../assets/icons/Feature-typing")['default']
export const SvgoIconsFetchUploadCloud: typeof import("../assets/icons/Fetch-upload--cloud")['default']
export const SvgoIconsFetchUpload: typeof import("../assets/icons/Fetch-upload")['default']
export const SvgoIconsFileStorage: typeof import("../assets/icons/File-storage")['default']
export const SvgoIconsFilterEdit: typeof import("../assets/icons/Filter--edit")['default']
export const SvgoIconsFilterRemove: typeof import("../assets/icons/Filter--remove")['default']
export const SvgoIconsFilterReset: typeof import("../assets/icons/Filter--reset")['default']
export const SvgoIconsFilter: typeof import("../assets/icons/Filter")['default']
export const SvgoIconsFinance: typeof import("../assets/icons/Finance")['default']
export const SvgoIconsFingerprintRecognition: typeof import("../assets/icons/Fingerprint-recognition")['default']
export const SvgoIconsFire: typeof import("../assets/icons/Fire")['default']
export const SvgoIconsFirewallClassic: typeof import("../assets/icons/Firewall--classic")['default']
export const SvgoIconsFirewall: typeof import("../assets/icons/Firewall")['default']
export const SvgoIconsFishMultiple: typeof import("../assets/icons/Fish--multiple")['default']
export const SvgoIconsFish: typeof import("../assets/icons/Fish")['default']
export const SvgoIconsFitToHeight: typeof import("../assets/icons/Fit-to-height")['default']
export const SvgoIconsFitToScreen: typeof import("../assets/icons/Fit-to-screen")['default']
export const SvgoIconsFitToWidth1: typeof import("../assets/icons/Fit-to-width1")['default']
export const SvgoIconsFlagFilled: typeof import("../assets/icons/Flag--filled")['default']
export const SvgoIconsFlag: typeof import("../assets/icons/Flag")['default']
export const SvgoIconsFlaggingTaxi: typeof import("../assets/icons/Flagging-taxi")['default']
export const SvgoIconsFlashFilled: typeof import("../assets/icons/Flash--filled")['default']
export const SvgoIconsFlashOffFilled: typeof import("../assets/icons/Flash--off--filled")['default']
export const SvgoIconsFlashOff: typeof import("../assets/icons/Flash--off")['default']
export const SvgoIconsFlash: typeof import("../assets/icons/Flash")['default']
export const SvgoIconsFlightInternational: typeof import("../assets/icons/Flight--international")['default']
export const SvgoIconsFlightRoster: typeof import("../assets/icons/Flight--roster")['default']
export const SvgoIconsFlightSchedule: typeof import("../assets/icons/Flight--schedule")['default']
export const SvgoIconsFloatingIp: typeof import("../assets/icons/Floating-ip")['default']
export const SvgoIconsFloodWarning: typeof import("../assets/icons/Flood--warning")['default']
export const SvgoIconsFlood: typeof import("../assets/icons/Flood")['default']
export const SvgoIconsFloorplan: typeof import("../assets/icons/Floorplan")['default']
export const SvgoIconsFlowConnection: typeof import("../assets/icons/Flow--connection")['default']
export const SvgoIconsFlowData: typeof import("../assets/icons/Flow--data")['default']
export const SvgoIconsFlowModeler: typeof import("../assets/icons/Flow--modeler")['default']
export const SvgoIconsFlowStreamReference: typeof import("../assets/icons/Flow--stream--reference")['default']
export const SvgoIconsFlowStream: typeof import("../assets/icons/Flow--stream")['default']
export const SvgoIconsFlowLogsVpc: typeof import("../assets/icons/Flow-logs-vpc")['default']
export const SvgoIconsFlow: typeof import("../assets/icons/Flow")['default']
export const SvgoIconsFog: typeof import("../assets/icons/Fog")['default']
export const SvgoIconsFolderAdd: typeof import("../assets/icons/Folder--add")['default']
export const SvgoIconsFolderDetailsReference: typeof import("../assets/icons/Folder--details--reference")['default']
export const SvgoIconsFolderDetails: typeof import("../assets/icons/Folder--details")['default']
export const SvgoIconsFolderMoveTo: typeof import("../assets/icons/Folder--move-to")['default']
export const SvgoIconsFolderOff: typeof import("../assets/icons/Folder--off")['default']
export const SvgoIconsFolderOpen: typeof import("../assets/icons/Folder--open")['default']
export const SvgoIconsFolderParent: typeof import("../assets/icons/Folder--parent")['default']
export const SvgoIconsFolderShared: typeof import("../assets/icons/Folder--shared")['default']
export const SvgoIconsFolder: typeof import("../assets/icons/Folder")['default']
export const SvgoIconsFolders: typeof import("../assets/icons/Folders")['default']
export const SvgoIconsForecastHail30: typeof import("../assets/icons/Forecast--hail-30")['default']
export const SvgoIconsForecastHail: typeof import("../assets/icons/Forecast--hail")['default']
export const SvgoIconsForecastLightning30: typeof import("../assets/icons/Forecast--lightning-30")['default']
export const SvgoIconsForecastLightning: typeof import("../assets/icons/Forecast--lightning")['default']
export const SvgoIconsForkNode: typeof import("../assets/icons/Fork-node")['default']
export const SvgoIconsFork: typeof import("../assets/icons/Fork")['default']
export const SvgoIconsForum: typeof import("../assets/icons/Forum")['default']
export const SvgoIconsForward10: typeof import("../assets/icons/Forward--10")['default']
export const SvgoIconsForward30: typeof import("../assets/icons/Forward--30")['default']
export const SvgoIconsForward5: typeof import("../assets/icons/Forward--5")['default']
export const SvgoIconsFragile: typeof import("../assets/icons/Fragile")['default']
export const SvgoIconsFriendship: typeof import("../assets/icons/Friendship")['default']
export const SvgoIconsFruitBowl: typeof import("../assets/icons/Fruit-bowl")['default']
export const SvgoIconsFunctionMath: typeof import("../assets/icons/Function-math")['default']
export const SvgoIconsFunction: typeof import("../assets/icons/Function")['default']
export const SvgoIconsFusionBlender: typeof import("../assets/icons/Fusion-blender")['default']
export const SvgoIconsGameConsole: typeof import("../assets/icons/Game--console")['default']
export const SvgoIconsGameWireless: typeof import("../assets/icons/Game--wireless")['default']
export const SvgoIconsGamification: typeof import("../assets/icons/Gamification")['default']
export const SvgoIconsGasStationFilled: typeof import("../assets/icons/Gas-station--filled")['default']
export const SvgoIconsGasStation: typeof import("../assets/icons/Gas-station")['default']
export const SvgoIconsGatewayApi: typeof import("../assets/icons/Gateway--api")['default']
export const SvgoIconsGatewayMail: typeof import("../assets/icons/Gateway--mail")['default']
export const SvgoIconsGatewayPublic: typeof import("../assets/icons/Gateway--public")['default']
export const SvgoIconsGatewaySecurity: typeof import("../assets/icons/Gateway--security")['default']
export const SvgoIconsGatewayUserAccess: typeof import("../assets/icons/Gateway--user-access")['default']
export const SvgoIconsGatewayVpn: typeof import("../assets/icons/Gateway--vpn")['default']
export const SvgoIconsGateway: typeof import("../assets/icons/Gateway")['default']
export const SvgoIconsGears: typeof import("../assets/icons/Gears")['default']
export const SvgoIconsGemReference: typeof import("../assets/icons/Gem--reference")['default']
export const SvgoIconsGem: typeof import("../assets/icons/Gem")['default']
export const SvgoIconsGenderFemale: typeof import("../assets/icons/Gender--female")['default']
export const SvgoIconsGenderMale: typeof import("../assets/icons/Gender--male")['default']
export const SvgoIconsGeneratePdf: typeof import("../assets/icons/Generate-pdf")['default']
export const SvgoIconsGif: typeof import("../assets/icons/Gif")['default']
export const SvgoIconsGift: typeof import("../assets/icons/Gift")['default']
export const SvgoIconsGlobalLoanAndTrial: typeof import("../assets/icons/Global-loan-and-trial")['default']
export const SvgoIconsGlobe: typeof import("../assets/icons/Globe")['default']
export const SvgoIconsGradient: typeof import("../assets/icons/Gradient")['default']
export const SvgoIconsGraphicalDataFlow: typeof import("../assets/icons/Graphical-data-flow")['default']
export const SvgoIconsGrid: typeof import("../assets/icons/Grid")['default']
export const SvgoIconsGroupAccess: typeof import("../assets/icons/Group--access")['default']
export const SvgoIconsGroupAccount: typeof import("../assets/icons/Group--account")['default']
export const SvgoIconsGroupPresentation: typeof import("../assets/icons/Group--presentation")['default']
export const SvgoIconsGroupResource: typeof import("../assets/icons/Group--resource")['default']
export const SvgoIconsGroupSecurity: typeof import("../assets/icons/Group--security")['default']
export const SvgoIconsGroupObjectsNew: typeof import("../assets/icons/Group-objects--new")['default']
export const SvgoIconsGroupObjectsSave: typeof import("../assets/icons/Group-objects--save")['default']
export const SvgoIconsGroupObjects: typeof import("../assets/icons/Group-objects")['default']
export const SvgoIconsGroup: typeof import("../assets/icons/Group")['default']
export const SvgoIconsGrowth: typeof import("../assets/icons/Growth")['default']
export const SvgoIconsGuiManagement: typeof import("../assets/icons/Gui--management")['default']
export const SvgoIconsGui: typeof import("../assets/icons/Gui")['default']
export const SvgoIconsH: typeof import("../assets/icons/H")['default']
export const SvgoIconsHL7Attributes: typeof import("../assets/icons/HL7-attributes")['default']
export const SvgoIconsHail: typeof import("../assets/icons/Hail")['default']
export const SvgoIconsHangingProtocol: typeof import("../assets/icons/Hanging-protocol")['default']
export const SvgoIconsHarbor: typeof import("../assets/icons/Harbor")['default']
export const SvgoIconsHardwareSecurityModule: typeof import("../assets/icons/Hardware-security-module")['default']
export const SvgoIconsHashtag: typeof import("../assets/icons/Hashtag")['default']
export const SvgoIconsHazeNight: typeof import("../assets/icons/Haze--night")['default']
export const SvgoIconsHaze: typeof import("../assets/icons/Haze")['default']
export const SvgoIconsHdFilled: typeof import("../assets/icons/Hd--filled")['default']
export const SvgoIconsHd: typeof import("../assets/icons/Hd")['default']
export const SvgoIconsHdr: typeof import("../assets/icons/Hdr")['default']
export const SvgoIconsHeadphones: typeof import("../assets/icons/Headphones")['default']
export const SvgoIconsHeadset: typeof import("../assets/icons/Headset")['default']
export const SvgoIconsHealthCross: typeof import("../assets/icons/Health-cross")['default']
export const SvgoIconsHearing: typeof import("../assets/icons/Hearing")['default']
export const SvgoIconsHeatMap02: typeof import("../assets/icons/Heat-map--02")['default']
export const SvgoIconsHeatMap03: typeof import("../assets/icons/Heat-map--03")['default']
export const SvgoIconsHeatMapStocks: typeof import("../assets/icons/Heat-map--stocks")['default']
export const SvgoIconsHeatMap: typeof import("../assets/icons/Heat-map")['default']
export const SvgoIconsHelicopter: typeof import("../assets/icons/Helicopter")['default']
export const SvgoIconsHelpFilled: typeof import("../assets/icons/Help--filled")['default']
export const SvgoIconsHelpDesk: typeof import("../assets/icons/Help-desk")['default']
export const SvgoIconsHelp: typeof import("../assets/icons/Help")['default']
export const SvgoIconsHexagonOutline: typeof import("../assets/icons/Hexagon--outline")['default']
export const SvgoIconsHexagonSolid: typeof import("../assets/icons/Hexagon--solid")['default']
export const SvgoIconsHexagonVerticalOutline: typeof import("../assets/icons/Hexagon--vertical--outline")['default']
export const SvgoIconsHexagonVerticalSolid: typeof import("../assets/icons/Hexagon--vertical--solid")['default']
export const SvgoIconsHintonPlot: typeof import("../assets/icons/Hinton-plot")['default']
export const SvgoIconsHoleFillingCursor: typeof import("../assets/icons/Hole-filling--cursor")['default']
export const SvgoIconsHoleFilling: typeof import("../assets/icons/Hole-filling")['default']
export const SvgoIconsHome: typeof import("../assets/icons/Home")['default']
export const SvgoIconsHorizontalView: typeof import("../assets/icons/Horizontal-view")['default']
export const SvgoIconsHospitalBed: typeof import("../assets/icons/Hospital-bed")['default']
export const SvgoIconsHospital: typeof import("../assets/icons/Hospital")['default']
export const SvgoIconsHotel: typeof import("../assets/icons/Hotel")['default']
export const SvgoIconsHourglass: typeof import("../assets/icons/Hourglass")['default']
export const SvgoIconsHtmlReference: typeof import("../assets/icons/Html--reference")['default']
export const SvgoIconsHtml: typeof import("../assets/icons/Html")['default']
export const SvgoIconsHttp: typeof import("../assets/icons/Http")['default']
export const SvgoIconsHumidityAlt: typeof import("../assets/icons/Humidity--alt")['default']
export const SvgoIconsHumidity: typeof import("../assets/icons/Humidity")['default']
export const SvgoIconsHurricane: typeof import("../assets/icons/Hurricane")['default']
export const SvgoIconsHybridNetworkingAlt: typeof import("../assets/icons/Hybrid-networking--alt")['default']
export const SvgoIconsHybridNetworking: typeof import("../assets/icons/Hybrid-networking")['default']
export const SvgoIconsIBMAiOnZ: typeof import("../assets/icons/IBM--ai-on-z")['default']
export const SvgoIconsIBMAiopsInsights: typeof import("../assets/icons/IBM--aiops-insights")['default']
export const SvgoIconsIBMBluepay: typeof import("../assets/icons/IBM--bluepay")['default']
export const SvgoIconsIBMCloudant: typeof import("../assets/icons/IBM--cloudant")['default']
export const SvgoIconsIBMContentServices: typeof import("../assets/icons/IBM--content-services")['default']
export const SvgoIconsIBMDataProductExchange: typeof import("../assets/icons/IBM--data-product-exchange")['default']
export const SvgoIconsIBMDataReplication: typeof import("../assets/icons/IBM--data-replication")['default']
export const SvgoIconsIBMDatastage: typeof import("../assets/icons/IBM--datastage")['default']
export const SvgoIconsIBMDb2Alt: typeof import("../assets/icons/IBM--db2--alt")['default']
export const SvgoIconsIBMDb2Warehouse: typeof import("../assets/icons/IBM--db2-warehouse")['default']
export const SvgoIconsIBMDb2: typeof import("../assets/icons/IBM--db2")['default']
export const SvgoIconsIBMDynamicRouteServer: typeof import("../assets/icons/IBM--dynamic-route-server")['default']
export const SvgoIconsIBMEloAutomotiveCompliance: typeof import("../assets/icons/IBM--elo--automotive-compliance")['default']
export const SvgoIconsIBMEloEngineeringInsights: typeof import("../assets/icons/IBM--elo--engineering-insights")['default']
export const SvgoIconsIBMEloMethodComposer: typeof import("../assets/icons/IBM--elo--method-composer")['default']
export const SvgoIconsIBMEloPublishing: typeof import("../assets/icons/IBM--elo--publishing")['default']
export const SvgoIconsIBMEngineeringLifecycleMgmt: typeof import("../assets/icons/IBM--engineering-lifecycle-mgmt")['default']
export const SvgoIconsIBMEngineeringRequirementsDoorsNext: typeof import("../assets/icons/IBM--engineering-requirements-doors-next")['default']
export const SvgoIconsIBMEngineeringSystemsDesignRhapsodyModelManager: typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-model-manager")['default']
export const SvgoIconsIBMEngineeringSystemsDesignRhapsodySn1: typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-sn1")['default']
export const SvgoIconsIBMEngineeringSystemsDesignRhapsodySn2: typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-sn2")['default']
export const SvgoIconsIBMEngineeringSystemsDesignRhapsody: typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody")['default']
export const SvgoIconsIBMEngineeringTestMgmt: typeof import("../assets/icons/IBM--engineering-test-mgmt")['default']
export const SvgoIconsIBMEngineeringWorkflowMgmt: typeof import("../assets/icons/IBM--engineering-workflow-mgmt")['default']
export const SvgoIconsIBMEventAutomation: typeof import("../assets/icons/IBM--event-automation")['default']
export const SvgoIconsIBMEventEndpointMgmt: typeof import("../assets/icons/IBM--event-endpoint-mgmt")['default']
export const SvgoIconsIBMEventProcessing: typeof import("../assets/icons/IBM--event-processing")['default']
export const SvgoIconsIBMEventStreams: typeof import("../assets/icons/IBM--event-streams")['default']
export const SvgoIconsIBMGcm: typeof import("../assets/icons/IBM--gcm")['default']
export const SvgoIconsIBMIbv: typeof import("../assets/icons/IBM--ibv")['default']
export const SvgoIconsIBMInstana: typeof import("../assets/icons/IBM--instana")['default']
export const SvgoIconsIBMJrs: typeof import("../assets/icons/IBM--jrs")['default']
export const SvgoIconsIBMLaunchpadS4: typeof import("../assets/icons/IBM--launchpad-s4")['default']
export const SvgoIconsIBMLpa: typeof import("../assets/icons/IBM--lpa")['default']
export const SvgoIconsIBMLqe: typeof import("../assets/icons/IBM--lqe")['default']
export const SvgoIconsIBMMatch360: typeof import("../assets/icons/IBM--match-360")['default']
export const SvgoIconsIBMMq: typeof import("../assets/icons/IBM--mq")['default']
export const SvgoIconsIBMOpenEnterpriseLanguages: typeof import("../assets/icons/IBM--open-enterprise-languages")['default']
export const SvgoIconsIBMOpenshiftContainerPlatformOnVpcForRegulatedIndustries: typeof import("../assets/icons/IBM--openshift-container-platform-on-vpc-for-regulated-industries")['default']
export const SvgoIconsIBMPowerVsPrivateCloud: typeof import("../assets/icons/IBM--power-vs-private-cloud")['default']
export const SvgoIconsIBMPowerVs: typeof import("../assets/icons/IBM--power-vs")['default']
export const SvgoIconsIBMPowerWithVpc: typeof import("../assets/icons/IBM--power-with-vpc")['default']
export const SvgoIconsIBMPrivatePathServices: typeof import("../assets/icons/IBM--private-path-services")['default']
export const SvgoIconsIBMProcessMining: typeof import("../assets/icons/IBM--process-mining")['default']
export const SvgoIconsIBMSaasConsole: typeof import("../assets/icons/IBM--saas-console")['default']
export const SvgoIconsIBMSapOnPower: typeof import("../assets/icons/IBM--sap-on-power")['default']
export const SvgoIconsIBMSecureInfrastructureOnVpcForRegulatedIndustries: typeof import("../assets/icons/IBM--secure-infrastructure-on-vpc-for-regulated-industries")['default']
export const SvgoIconsIBMTelehealth: typeof import("../assets/icons/IBM--telehealth")['default']
export const SvgoIconsIBMTenet: typeof import("../assets/icons/IBM--tenet")['default']
export const SvgoIconsIBMToolchain: typeof import("../assets/icons/IBM--toolchain")['default']
export const SvgoIconsIBMTurbonomic: typeof import("../assets/icons/IBM--turbonomic")['default']
export const SvgoIconsIBMVpnForVpc: typeof import("../assets/icons/IBM--vpn-for-vpc")['default']
export const SvgoIconsIBMVsiOnVpcForRegulatedIndustries: typeof import("../assets/icons/IBM--vsi-on-vpc-for-regulated-industries")['default']
export const SvgoIconsIBMWaziDeploy: typeof import("../assets/icons/IBM--wazi-deploy")['default']
export const SvgoIconsIBMCloudHSM: typeof import("../assets/icons/IBM-cloud--HSM")['default']
export const SvgoIconsIBMCloudAppId: typeof import("../assets/icons/IBM-cloud--app-id")['default']
export const SvgoIconsIBMCloudBareMetalServer: typeof import("../assets/icons/IBM-cloud--bare-metal-server")['default']
export const SvgoIconsIBMCloudBareMetalServersVpc: typeof import("../assets/icons/IBM-cloud--bare-metal-servers-vpc")['default']
export const SvgoIconsIBMCloudCitrixDaas: typeof import("../assets/icons/IBM-cloud--citrix-daas")['default']
export const SvgoIconsIBMCloudContinuousDelivery: typeof import("../assets/icons/IBM-cloud--continuous-delivery")['default']
export const SvgoIconsIBMCloudDedicatedHost: typeof import("../assets/icons/IBM-cloud--dedicated-host")['default']
export const SvgoIconsIBMCloudDirectLink1Connect: typeof import("../assets/icons/IBM-cloud--direct-link-1--connect")['default']
export const SvgoIconsIBMCloudDirectLink1DedicatedHosting: typeof import("../assets/icons/IBM-cloud--direct-link-1--dedicated-hosting")['default']
export const SvgoIconsIBMCloudDirectLink1Dedicated: typeof import("../assets/icons/IBM-cloud--direct-link-1--dedicated")['default']
export const SvgoIconsIBMCloudDirectLink1Exchange: typeof import("../assets/icons/IBM-cloud--direct-link-1--exchange")['default']
export const SvgoIconsIBMCloudDirectLink2Connect: typeof import("../assets/icons/IBM-cloud--direct-link-2--connect")['default']
export const SvgoIconsIBMCloudDirectLink2DedicatedHosting: typeof import("../assets/icons/IBM-cloud--direct-link-2--dedicated-hosting")['default']
export const SvgoIconsIBMCloudDirectLink2Dedicated: typeof import("../assets/icons/IBM-cloud--direct-link-2--dedicated")['default']
export const SvgoIconsIBMCloudEventNotification: typeof import("../assets/icons/IBM-cloud--event-notification")['default']
export const SvgoIconsIBMCloudEventStreams: typeof import("../assets/icons/IBM-cloud--event-streams")['default']
export const SvgoIconsIBMCloudForEducation: typeof import("../assets/icons/IBM-cloud--for-education")['default']
export const SvgoIconsIBMCloudHpc: typeof import("../assets/icons/IBM-cloud--hpc")['default']
export const SvgoIconsIBMCloudHyperProtectCryptoServices: typeof import("../assets/icons/IBM-cloud--hyper-protect-crypto-services")['default']
export const SvgoIconsIBMCloudHyperProtectDbaas: typeof import("../assets/icons/IBM-cloud--hyper-protect-dbaas")['default']
export const SvgoIconsIBMCloudHyperProtectVs: typeof import("../assets/icons/IBM-cloud--hyper-protect-vs")['default']
export const SvgoIconsIBMCloudInternetServices: typeof import("../assets/icons/IBM-cloud--internet-services")['default']
export const SvgoIconsIBMCloudIpsecVpn: typeof import("../assets/icons/IBM-cloud--ipsec-vpn")['default']
export const SvgoIconsIBMCloudKeyProtect: typeof import("../assets/icons/IBM-cloud--key-protect")['default']
export const SvgoIconsIBMCloudKubernetesService: typeof import("../assets/icons/IBM-cloud--kubernetes-service")['default']
export const SvgoIconsIBMCloudLogging: typeof import("../assets/icons/IBM-cloud--logging")['default']
export const SvgoIconsIBMCloudMassDataMigration: typeof import("../assets/icons/IBM-cloud--mass-data-migration")['default']
export const SvgoIconsIBMCloudPal: typeof import("../assets/icons/IBM-cloud--pal")['default']
export const SvgoIconsIBMCloudPrivilegedAccessGateway: typeof import("../assets/icons/IBM-cloud--privileged-access-gateway")['default']
export const SvgoIconsIBMCloudProjects: typeof import("../assets/icons/IBM-cloud--projects")['default']
export const SvgoIconsIBMCloudResiliency: typeof import("../assets/icons/IBM-cloud--resiliency")['default']
export const SvgoIconsIBMCloudSecretsManager: typeof import("../assets/icons/IBM-cloud--secrets-manager")['default']
export const SvgoIconsIBMCloudSecurityComplianceCenterWorkloadProtection: typeof import("../assets/icons/IBM-cloud--security-compliance-center-workload-protection")['default']
export const SvgoIconsIBMCloudSecurityComplianceCenter: typeof import("../assets/icons/IBM-cloud--security-compliance-center")['default']
export const SvgoIconsIBMCloudSubnets: typeof import("../assets/icons/IBM-cloud--subnets")['default']
export const SvgoIconsIBMCloudSysdigSecure: typeof import("../assets/icons/IBM-cloud--sysdig-secure")['default']
export const SvgoIconsIBMCloudTransitGateway: typeof import("../assets/icons/IBM-cloud--transit-gateway")['default']
export const SvgoIconsIBMCloudVirtualServerClassic: typeof import("../assets/icons/IBM-cloud--virtual-server-classic")['default']
export const SvgoIconsIBMCloudVirtualServerVpc: typeof import("../assets/icons/IBM-cloud--virtual-server-vpc")['default']
export const SvgoIconsIBMCloudVpcEndpoints: typeof import("../assets/icons/IBM-cloud--vpc-endpoints")['default']
export const SvgoIconsIBMCloudVpc: typeof import("../assets/icons/IBM-cloud--vpc")['default']
export const SvgoIconsIBMCloudPakMANTAAutomatedDataLineage: typeof import("../assets/icons/IBM-cloud-pak--MANTA-automated-data-lineage")['default']
export const SvgoIconsIBMCloudPakApplications: typeof import("../assets/icons/IBM-cloud-pak--applications")['default']
export const SvgoIconsIBMCloudPakBusinessAutomation: typeof import("../assets/icons/IBM-cloud-pak--business-automation")['default']
export const SvgoIconsIBMCloudPakData: typeof import("../assets/icons/IBM-cloud-pak--data")['default']
export const SvgoIconsIBMCloudPakIntegration: typeof import("../assets/icons/IBM-cloud-pak--integration")['default']
export const SvgoIconsIBMCloudPakMulticloudMgmt: typeof import("../assets/icons/IBM-cloud-pak--multicloud-mgmt")['default']
export const SvgoIconsIBMCloudPakNetezza: typeof import("../assets/icons/IBM-cloud-pak--netezza")['default']
export const SvgoIconsIBMCloudPakNetworkAutomation: typeof import("../assets/icons/IBM-cloud-pak--network-automation")['default']
export const SvgoIconsIBMCloudPakSecurity: typeof import("../assets/icons/IBM-cloud-pak--security")['default']
export const SvgoIconsIBMCloudPakSystem: typeof import("../assets/icons/IBM-cloud-pak--system")['default']
export const SvgoIconsIBMCloudPakWatsonAiops: typeof import("../assets/icons/IBM-cloud-pak--watson-aiops")['default']
export const SvgoIconsIBMCloud: typeof import("../assets/icons/IBM-cloud")['default']
export const SvgoIconsIBMSecurityServices: typeof import("../assets/icons/IBM-security--services")['default']
export const SvgoIconsIBMSecurity: typeof import("../assets/icons/IBM-security")['default']
export const SvgoIconsIBMWatsonDiscovery: typeof import("../assets/icons/IBM-watson--discovery")['default']
export const SvgoIconsIBMWatsonKnowledgeCatalog: typeof import("../assets/icons/IBM-watson--knowledge-catalog")['default']
export const SvgoIconsIBMWatsonKnowledgeStudio: typeof import("../assets/icons/IBM-watson--knowledge-studio")['default']
export const SvgoIconsIBMWatsonLanguageTranslator: typeof import("../assets/icons/IBM-watson--language-translator")['default']
export const SvgoIconsIBMWatsonMachineLearning: typeof import("../assets/icons/IBM-watson--machine-learning")['default']
export const SvgoIconsIBMWatsonNaturalLanguageClassifier: typeof import("../assets/icons/IBM-watson--natural-language-classifier")['default']
export const SvgoIconsIBMWatsonNaturalLanguageUnderstanding: typeof import("../assets/icons/IBM-watson--natural-language-understanding")['default']
export const SvgoIconsIBMWatsonOpenscale: typeof import("../assets/icons/IBM-watson--openscale")['default']
export const SvgoIconsIBMWatsonOrders1: typeof import("../assets/icons/IBM-watson--orders-1")['default']
export const SvgoIconsIBMWatsonOrders: typeof import("../assets/icons/IBM-watson--orders")['default']
export const SvgoIconsIBMWatsonQuery: typeof import("../assets/icons/IBM-watson--query")['default']
export const SvgoIconsIBMWatsonSpeechToText: typeof import("../assets/icons/IBM-watson--speech-to-text")['default']
export const SvgoIconsIBMWatsonStudio: typeof import("../assets/icons/IBM-watson--studio")['default']
export const SvgoIconsIBMWatsonTextToSpeech: typeof import("../assets/icons/IBM-watson--text-to-speech")['default']
export const SvgoIconsIBMWatsonToneAnalyzer: typeof import("../assets/icons/IBM-watson--tone-analyzer")['default']
export const SvgoIconsIBMWatsonxAssistant: typeof import("../assets/icons/IBM-watsonx--assistant")['default']
export const SvgoIconsIBMWatsonxCodeAssistantForZRefactor: typeof import("../assets/icons/IBM-watsonx--code-assistant-for-z--refactor")['default']
export const SvgoIconsIBMWatsonxCodeAssistantForZ: typeof import("../assets/icons/IBM-watsonx--code-assistant-for-z")['default']
export const SvgoIconsIBMWatsonxCodeAssistant: typeof import("../assets/icons/IBM-watsonx--code-assistant")['default']
export const SvgoIconsIBMWatsonxOrchestrate: typeof import("../assets/icons/IBM-watsonx--orchestrate")['default']
export const SvgoIconsIBMZCloudModStack: typeof import("../assets/icons/IBM-z--cloud-mod-stack")['default']
export const SvgoIconsIBMZEnvironmentsDevSecOps: typeof import("../assets/icons/IBM-z--environments-dev-sec-ops")['default']
export const SvgoIconsIBMZProcessorCapacityReference: typeof import("../assets/icons/IBM-z--processor-capacity-reference")['default']
export const SvgoIconsIBMZCloudProvisioning: typeof import("../assets/icons/IBM-z-cloud--provisioning")['default']
export const SvgoIconsIBMZOsAiControlInterface: typeof import("../assets/icons/IBM-z-os--ai-control-interface")['default']
export const SvgoIconsIBMZOsContainers: typeof import("../assets/icons/IBM-z-os--containers")['default']
export const SvgoIconsIBMZOsPackageManager: typeof import("../assets/icons/IBM-z-os--package-manager")['default']
export const SvgoIconsIBMZOs: typeof import("../assets/icons/IBM-z-os")['default']
export const SvgoIconsIP: typeof import("../assets/icons/IP")['default']
export const SvgoIconsIca2d: typeof import("../assets/icons/Ica-2d")['default']
export const SvgoIconsIceAccretion: typeof import("../assets/icons/Ice--accretion")['default']
export const SvgoIconsIceVision: typeof import("../assets/icons/Ice--vision")['default']
export const SvgoIconsIdManagement: typeof import("../assets/icons/Id-management")['default']
export const SvgoIconsId: typeof import("../assets/icons/Id")['default']
export const SvgoIconsIdea: typeof import("../assets/icons/Idea")['default']
export const SvgoIconsIdentification: typeof import("../assets/icons/Identification")['default']
export const SvgoIconsImageCopy: typeof import("../assets/icons/Image--copy")['default']
export const SvgoIconsImageMedical: typeof import("../assets/icons/Image--medical")['default']
export const SvgoIconsImageReference: typeof import("../assets/icons/Image--reference")['default']
export const SvgoIconsImageSearchAlt: typeof import("../assets/icons/Image--search--alt")['default']
export const SvgoIconsImageSearch: typeof import("../assets/icons/Image--search")['default']
export const SvgoIconsImageAvailabilityLocal: typeof import("../assets/icons/Image-availability--local")['default']
export const SvgoIconsImageAvailabilityRetrieving: typeof import("../assets/icons/Image-availability--retrieving")['default']
export const SvgoIconsImageAvailabilityUnavailable: typeof import("../assets/icons/Image-availability--unavailable")['default']
export const SvgoIconsImageService: typeof import("../assets/icons/Image-service")['default']
export const SvgoIconsImageStoreLocal: typeof import("../assets/icons/Image-store--local")['default']
export const SvgoIconsImage: typeof import("../assets/icons/Image")['default']
export const SvgoIconsImportExport: typeof import("../assets/icons/Import-export")['default']
export const SvgoIconsImproveRelevance: typeof import("../assets/icons/Improve-relevance")['default']
export const SvgoIconsInProgressError: typeof import("../assets/icons/In-progress--error")['default']
export const SvgoIconsInProgressWarning: typeof import("../assets/icons/In-progress--warning")['default']
export const SvgoIconsInProgress: typeof import("../assets/icons/In-progress")['default']
export const SvgoIconsIncompleteCancel: typeof import("../assets/icons/Incomplete--cancel")['default']
export const SvgoIconsIncompleteError: typeof import("../assets/icons/Incomplete--error")['default']
export const SvgoIconsIncompleteNormal: typeof import("../assets/icons/Incomplete--normal")['default']
export const SvgoIconsIncompleteWarning: typeof import("../assets/icons/Incomplete--warning")['default']
export const SvgoIconsIncomplete: typeof import("../assets/icons/Incomplete")['default']
export const SvgoIconsIncreaseLevel: typeof import("../assets/icons/Increase-level")['default']
export const SvgoIconsIndustry: typeof import("../assets/icons/Industry")['default']
export const SvgoIconsInfinitySymbol: typeof import("../assets/icons/Infinity-symbol")['default']
export const SvgoIconsInformationDisabled: typeof import("../assets/icons/Information--disabled")['default']
export const SvgoIconsInformationFilled: typeof import("../assets/icons/Information--filled")['default']
export const SvgoIconsInformationSquareFilled: typeof import("../assets/icons/Information--square--filled")['default']
export const SvgoIconsInformationSquare: typeof import("../assets/icons/Information--square")['default']
export const SvgoIconsInformation: typeof import("../assets/icons/Information")['default']
export const SvgoIconsInfrastructureClassic: typeof import("../assets/icons/Infrastructure--classic")['default']
export const SvgoIconsInsertPage: typeof import("../assets/icons/Insert--page")['default']
export const SvgoIconsInsertSyntax: typeof import("../assets/icons/Insert-syntax")['default']
export const SvgoIconsInsert: typeof import("../assets/icons/Insert")['default']
export const SvgoIconsInspection: typeof import("../assets/icons/Inspection")['default']
export const SvgoIconsInstanceBx: typeof import("../assets/icons/Instance--bx")['default']
export const SvgoIconsInstanceClassic: typeof import("../assets/icons/Instance--classic")['default']
export const SvgoIconsInstanceCx: typeof import("../assets/icons/Instance--cx")['default']
export const SvgoIconsInstanceMx: typeof import("../assets/icons/Instance--mx")['default']
export const SvgoIconsInstanceVirtual: typeof import("../assets/icons/Instance--virtual")['default']
export const SvgoIconsIntegration: typeof import("../assets/icons/Integration")['default']
export const SvgoIconsIntentRequestActive: typeof import("../assets/icons/Intent-request--active")['default']
export const SvgoIconsIntentRequestCreate: typeof import("../assets/icons/Intent-request--create")['default']
export const SvgoIconsIntentRequestHeal: typeof import("../assets/icons/Intent-request--heal")['default']
export const SvgoIconsIntentRequestInactive: typeof import("../assets/icons/Intent-request--inactive")['default']
export const SvgoIconsIntentRequestScaleIn: typeof import("../assets/icons/Intent-request--scale-in")['default']
export const SvgoIconsIntentRequestScaleOut: typeof import("../assets/icons/Intent-request--scale-out")['default']
export const SvgoIconsIntentRequestUninstall: typeof import("../assets/icons/Intent-request--uninstall")['default']
export const SvgoIconsInteractions: typeof import("../assets/icons/Interactions")['default']
export const SvgoIconsInteractiveSegmentationCursor: typeof import("../assets/icons/Interactive-segmentation-cursor")['default']
export const SvgoIconsInterfaceUsage: typeof import("../assets/icons/Interface--usage")['default']
export const SvgoIconsIntersect: typeof import("../assets/icons/Intersect")['default']
export const SvgoIconsIntrusionPrevention: typeof import("../assets/icons/Intrusion-prevention")['default']
export const SvgoIconsInventoryManagement: typeof import("../assets/icons/Inventory-management")['default']
export const SvgoIconsIotConnect: typeof import("../assets/icons/Iot--connect")['default']
export const SvgoIconsIotPlatform: typeof import("../assets/icons/Iot--platform")['default']
export const SvgoIconsIsoFilled: typeof import("../assets/icons/Iso--filled")['default']
export const SvgoIconsIsoOutline: typeof import("../assets/icons/Iso--outline")['default']
export const SvgoIconsIso: typeof import("../assets/icons/Iso")['default']
export const SvgoIconsJoinFull: typeof import("../assets/icons/Join--full")['default']
export const SvgoIconsJoinInner: typeof import("../assets/icons/Join--inner")['default']
export const SvgoIconsJoinLeft: typeof import("../assets/icons/Join--left")['default']
export const SvgoIconsJoinOuter: typeof import("../assets/icons/Join--outer")['default']
export const SvgoIconsJoinRight: typeof import("../assets/icons/Join--right")['default']
export const SvgoIconsJoinNode: typeof import("../assets/icons/Join-node")['default']
export const SvgoIconsJpg: typeof import("../assets/icons/Jpg")['default']
export const SvgoIconsJsError: typeof import("../assets/icons/Js-error")['default']
export const SvgoIconsJsonReference: typeof import("../assets/icons/Json--reference")['default']
export const SvgoIconsJson: typeof import("../assets/icons/Json")['default']
export const SvgoIconsJumpLink: typeof import("../assets/icons/Jump-link")['default']
export const SvgoIconsKEY: typeof import("../assets/icons/KEY")['default']
export const SvgoIconsKeepDry: typeof import("../assets/icons/Keep-dry")['default']
export const SvgoIconsKeyboard: typeof import("../assets/icons/Keyboard")['default']
export const SvgoIconsKubelet: typeof import("../assets/icons/Kubelet")['default']
export const SvgoIconsKubernetesControlPlaneNode: typeof import("../assets/icons/Kubernetes--control-plane-node")['default']
export const SvgoIconsKubernetesIpAddress: typeof import("../assets/icons/Kubernetes--ip-address")['default']
export const SvgoIconsKubernetesOperator: typeof import("../assets/icons/Kubernetes--operator")['default']
export const SvgoIconsKubernetesPod: typeof import("../assets/icons/Kubernetes--pod")['default']
export const SvgoIconsKubernetesWorkerNode: typeof import("../assets/icons/Kubernetes--worker-node")['default']
export const SvgoIconsKubernetes: typeof import("../assets/icons/Kubernetes")['default']
export const SvgoIconsLabel: typeof import("../assets/icons/Label")['default']
export const SvgoIconsLanguage: typeof import("../assets/icons/Language")['default']
export const SvgoIconsLaptop: typeof import("../assets/icons/Laptop")['default']
export const SvgoIconsLassoPolygon: typeof import("../assets/icons/Lasso--polygon")['default']
export const SvgoIconsLasso: typeof import("../assets/icons/Lasso")['default']
export const SvgoIconsLaunchStudy1: typeof import("../assets/icons/Launch-study--1")['default']
export const SvgoIconsLaunchStudy2: typeof import("../assets/icons/Launch-study--2")['default']
export const SvgoIconsLaunchStudy3: typeof import("../assets/icons/Launch-study--3")['default']
export const SvgoIconsLaunch: typeof import("../assets/icons/Launch")['default']
export const SvgoIconsLayersExternal: typeof import("../assets/icons/Layers--external")['default']
export const SvgoIconsLayers: typeof import("../assets/icons/Layers")['default']
export const SvgoIconsLegend: typeof import("../assets/icons/Legend")['default']
export const SvgoIconsLetterAa: typeof import("../assets/icons/Letter--aa")['default']
export const SvgoIconsLetterBb: typeof import("../assets/icons/Letter--bb")['default']
export const SvgoIconsLetterCc: typeof import("../assets/icons/Letter--cc")['default']
export const SvgoIconsLetterDd: typeof import("../assets/icons/Letter--dd")['default']
export const SvgoIconsLetterEe: typeof import("../assets/icons/Letter--ee")['default']
export const SvgoIconsLetterFf: typeof import("../assets/icons/Letter--ff")['default']
export const SvgoIconsLetterGg: typeof import("../assets/icons/Letter--gg")['default']
export const SvgoIconsLetterHh: typeof import("../assets/icons/Letter--hh")['default']
export const SvgoIconsLetterIi: typeof import("../assets/icons/Letter--ii")['default']
export const SvgoIconsLetterJj: typeof import("../assets/icons/Letter--jj")['default']
export const SvgoIconsLetterKk: typeof import("../assets/icons/Letter--kk")['default']
export const SvgoIconsLetterLl: typeof import("../assets/icons/Letter--ll")['default']
export const SvgoIconsLetterMm: typeof import("../assets/icons/Letter--mm")['default']
export const SvgoIconsLetterNn: typeof import("../assets/icons/Letter--nn")['default']
export const SvgoIconsLetterOo: typeof import("../assets/icons/Letter--oo")['default']
export const SvgoIconsLetterPp: typeof import("../assets/icons/Letter--pp")['default']
export const SvgoIconsLetterQq: typeof import("../assets/icons/Letter--qq")['default']
export const SvgoIconsLetterRr: typeof import("../assets/icons/Letter--rr")['default']
export const SvgoIconsLetterSs: typeof import("../assets/icons/Letter--ss")['default']
export const SvgoIconsLetterTt: typeof import("../assets/icons/Letter--tt")['default']
export const SvgoIconsLetterUu: typeof import("../assets/icons/Letter--uu")['default']
export const SvgoIconsLetterVv: typeof import("../assets/icons/Letter--vv")['default']
export const SvgoIconsLetterWw: typeof import("../assets/icons/Letter--ww")['default']
export const SvgoIconsLetterXx: typeof import("../assets/icons/Letter--xx")['default']
export const SvgoIconsLetterYy: typeof import("../assets/icons/Letter--yy")['default']
export const SvgoIconsLetterZz: typeof import("../assets/icons/Letter--zz")['default']
export const SvgoIconsLicenseDraft: typeof import("../assets/icons/License--draft")['default']
export const SvgoIconsLicenseGlobal: typeof import("../assets/icons/License--global")['default']
export const SvgoIconsLicenseMaintenanceDraft: typeof import("../assets/icons/License--maintenance-draft")['default']
export const SvgoIconsLicenseMaintenance: typeof import("../assets/icons/License--maintenance")['default']
export const SvgoIconsLicenseThirdPartyDraft: typeof import("../assets/icons/License--third-party-draft")['default']
export const SvgoIconsLicenseThirdParty: typeof import("../assets/icons/License--third-party")['default']
export const SvgoIconsLicense: typeof import("../assets/icons/License")['default']
export const SvgoIconsLifesaver: typeof import("../assets/icons/Lifesaver")['default']
export const SvgoIconsLightFilled: typeof import("../assets/icons/Light--filled")['default']
export const SvgoIconsLight: typeof import("../assets/icons/Light")['default']
export const SvgoIconsLightning: typeof import("../assets/icons/Lightning")['default']
export const SvgoIconsLink: typeof import("../assets/icons/Link")['default']
export const SvgoIconsLinuxAlt: typeof import("../assets/icons/Linux--alt")['default']
export const SvgoIconsLinuxNamespace: typeof import("../assets/icons/Linux--namespace")['default']
export const SvgoIconsLinux: typeof import("../assets/icons/Linux")['default']
export const SvgoIconsListBoxes: typeof import("../assets/icons/List--boxes")['default']
export const SvgoIconsListBulleted: typeof import("../assets/icons/List--bulleted")['default']
export const SvgoIconsListCheckedMirror: typeof import("../assets/icons/List--checked--mirror")['default']
export const SvgoIconsListChecked: typeof import("../assets/icons/List--checked")['default']
export const SvgoIconsListDropdown: typeof import("../assets/icons/List--dropdown")['default']
export const SvgoIconsListNumberedMirror: typeof import("../assets/icons/List--numbered--mirror")['default']
export const SvgoIconsListNumbered: typeof import("../assets/icons/List--numbered")['default']
export const SvgoIconsList: typeof import("../assets/icons/List")['default']
export const SvgoIconsLoadBalancerApplication: typeof import("../assets/icons/Load-balancer--application")['default']
export const SvgoIconsLoadBalancerClassic: typeof import("../assets/icons/Load-balancer--classic")['default']
export const SvgoIconsLoadBalancerGlobal: typeof import("../assets/icons/Load-balancer--global")['default']
export const SvgoIconsLoadBalancerListener: typeof import("../assets/icons/Load-balancer--listener")['default']
export const SvgoIconsLoadBalancerLocal: typeof import("../assets/icons/Load-balancer--local")['default']
export const SvgoIconsLoadBalancerNetwork: typeof import("../assets/icons/Load-balancer--network")['default']
export const SvgoIconsLoadBalancerPool: typeof import("../assets/icons/Load-balancer--pool")['default']
export const SvgoIconsLoadBalancerVpc: typeof import("../assets/icons/Load-balancer--vpc")['default']
export const SvgoIconsLocationCompanyFilled: typeof import("../assets/icons/Location--company--filled")['default']
export const SvgoIconsLocationCompany: typeof import("../assets/icons/Location--company")['default']
export const SvgoIconsLocationCurrent: typeof import("../assets/icons/Location--current")['default']
export const SvgoIconsLocationFilled: typeof import("../assets/icons/Location--filled")['default']
export const SvgoIconsLocationHazardFilled: typeof import("../assets/icons/Location--hazard--filled")['default']
export const SvgoIconsLocationHazard: typeof import("../assets/icons/Location--hazard")['default']
export const SvgoIconsLocationHeartFilled: typeof import("../assets/icons/Location--heart--filled")['default']
export const SvgoIconsLocationHeart: typeof import("../assets/icons/Location--heart")['default']
export const SvgoIconsLocationInfoFilled: typeof import("../assets/icons/Location--info--filled")['default']
export const SvgoIconsLocationInfo: typeof import("../assets/icons/Location--info")['default']
export const SvgoIconsLocationPersonFilled: typeof import("../assets/icons/Location--person--filled")['default']
export const SvgoIconsLocationPerson: typeof import("../assets/icons/Location--person")['default']
export const SvgoIconsLocationSave: typeof import("../assets/icons/Location--save")['default']
export const SvgoIconsLocationStarFilled: typeof import("../assets/icons/Location--star--filled")['default']
export const SvgoIconsLocationStar: typeof import("../assets/icons/Location--star")['default']
export const SvgoIconsLocation: typeof import("../assets/icons/Location")['default']
export const SvgoIconsLocked: typeof import("../assets/icons/Locked")['default']
export const SvgoIconsLogicalPartition: typeof import("../assets/icons/Logical-partition")['default']
export const SvgoIconsLogin: typeof import("../assets/icons/Login")['default']
export const SvgoIconsLogoAngular: typeof import("../assets/icons/Logo--angular")['default']
export const SvgoIconsLogoAnsibleCommunity: typeof import("../assets/icons/Logo--ansible-community")['default']
export const SvgoIconsLogoDigg: typeof import("../assets/icons/Logo--digg")['default']
export const SvgoIconsLogoDiscord: typeof import("../assets/icons/Logo--discord")['default']
export const SvgoIconsLogoFacebook: typeof import("../assets/icons/Logo--facebook")['default']
export const SvgoIconsLogoFigma: typeof import("../assets/icons/Logo--figma")['default']
export const SvgoIconsLogoFlickr: typeof import("../assets/icons/Logo--flickr")['default']
export const SvgoIconsLogoGithub: typeof import("../assets/icons/Logo--github")['default']
export const SvgoIconsLogoGitlab: typeof import("../assets/icons/Logo--gitlab")['default']
export const SvgoIconsLogoGlassdoor: typeof import("../assets/icons/Logo--glassdoor")['default']
export const SvgoIconsLogoInstagram: typeof import("../assets/icons/Logo--instagram")['default']
export const SvgoIconsLogoInvision: typeof import("../assets/icons/Logo--invision")['default']
export const SvgoIconsLogoJupyter: typeof import("../assets/icons/Logo--jupyter")['default']
export const SvgoIconsLogoKeybase: typeof import("../assets/icons/Logo--keybase")['default']
export const SvgoIconsLogoKubernetes: typeof import("../assets/icons/Logo--kubernetes")['default']
export const SvgoIconsLogoLinkedin: typeof import("../assets/icons/Logo--linkedin")['default']
export const SvgoIconsLogoLivestream: typeof import("../assets/icons/Logo--livestream")['default']
export const SvgoIconsLogoMastodon: typeof import("../assets/icons/Logo--mastodon")['default']
export const SvgoIconsLogoMedium: typeof import("../assets/icons/Logo--medium")['default']
export const SvgoIconsLogoNpm: typeof import("../assets/icons/Logo--npm")['default']
export const SvgoIconsLogoOpenshift: typeof import("../assets/icons/Logo--openshift")['default']
export const SvgoIconsLogoPinterest: typeof import("../assets/icons/Logo--pinterest")['default']
export const SvgoIconsLogoPython: typeof import("../assets/icons/Logo--python")['default']
export const SvgoIconsLogoQuora: typeof import("../assets/icons/Logo--quora")['default']
export const SvgoIconsLogoRScript: typeof import("../assets/icons/Logo--r-script")['default']
export const SvgoIconsLogoReact: typeof import("../assets/icons/Logo--react")['default']
export const SvgoIconsLogoRedHatAnsible: typeof import("../assets/icons/Logo--red-hat-ansible")['default']
export const SvgoIconsLogoSketch: typeof import("../assets/icons/Logo--sketch")['default']
export const SvgoIconsLogoSkype: typeof import("../assets/icons/Logo--skype")['default']
export const SvgoIconsLogoSlack: typeof import("../assets/icons/Logo--slack")['default']
export const SvgoIconsLogoSnapchat: typeof import("../assets/icons/Logo--snapchat")['default']
export const SvgoIconsLogoSvelte: typeof import("../assets/icons/Logo--svelte")['default']
export const SvgoIconsLogoTumblr: typeof import("../assets/icons/Logo--tumblr")['default']
export const SvgoIconsLogoTwitter: typeof import("../assets/icons/Logo--twitter")['default']
export const SvgoIconsLogoVmwareAlt: typeof import("../assets/icons/Logo--vmware--alt")['default']
export const SvgoIconsLogoVmware: typeof import("../assets/icons/Logo--vmware")['default']
export const SvgoIconsLogoVue: typeof import("../assets/icons/Logo--vue")['default']
export const SvgoIconsLogoWechat: typeof import("../assets/icons/Logo--wechat")['default']
export const SvgoIconsLogoX: typeof import("../assets/icons/Logo--x")['default']
export const SvgoIconsLogoXing: typeof import("../assets/icons/Logo--xing")['default']
export const SvgoIconsLogoYelp: typeof import("../assets/icons/Logo--yelp")['default']
export const SvgoIconsLogoYoutube: typeof import("../assets/icons/Logo--youtube")['default']
export const SvgoIconsLogout: typeof import("../assets/icons/Logout")['default']
export const SvgoIconsLoop: typeof import("../assets/icons/Loop")['default']
export const SvgoIconsLowSeverity: typeof import("../assets/icons/Low-severity")['default']
export const SvgoIconsMAC: typeof import("../assets/icons/MAC")['default']
export const SvgoIconsMacCommand: typeof import("../assets/icons/Mac--command")['default']
export const SvgoIconsMacOption: typeof import("../assets/icons/Mac--option")['default']
export const SvgoIconsMacShift: typeof import("../assets/icons/Mac--shift")['default']
export const SvgoIconsMachineLearningModel: typeof import("../assets/icons/Machine-learning-model")['default']
export const SvgoIconsMagicWandFilled: typeof import("../assets/icons/Magic-wand--filled")['default']
export const SvgoIconsMagicWand: typeof import("../assets/icons/Magic-wand")['default']
export const SvgoIconsMagnify: typeof import("../assets/icons/Magnify")['default']
export const SvgoIconsMailAll: typeof import("../assets/icons/Mail--all")['default']
export const SvgoIconsMailReply: typeof import("../assets/icons/Mail--reply")['default']
export const SvgoIconsMammogram: typeof import("../assets/icons/Mammogram")['default']
export const SvgoIconsManageProtection: typeof import("../assets/icons/Manage-protection")['default']
export const SvgoIconsManagedSolutions: typeof import("../assets/icons/Managed-solutions")['default']
export const SvgoIconsMapCenter: typeof import("../assets/icons/Map--center")['default']
export const SvgoIconsMapIdentify: typeof import("../assets/icons/Map--identify")['default']
export const SvgoIconsMapBoundaryVegetation: typeof import("../assets/icons/Map-boundary--vegetation")['default']
export const SvgoIconsMapBoundary: typeof import("../assets/icons/Map-boundary")['default']
export const SvgoIconsMap: typeof import("../assets/icons/Map")['default']
export const SvgoIconsMarineWarning: typeof import("../assets/icons/Marine-warning")['default']
export const SvgoIconsMathCurve: typeof import("../assets/icons/Math-curve")['default']
export const SvgoIconsMatrix: typeof import("../assets/icons/Matrix")['default']
export const SvgoIconsMaximize: typeof import("../assets/icons/Maximize")['default']
export const SvgoIconsMediaLibraryFilled: typeof import("../assets/icons/Media--library--filled")['default']
export const SvgoIconsMediaLibrary: typeof import("../assets/icons/Media--library")['default']
export const SvgoIconsMediaCast: typeof import("../assets/icons/Media-cast")['default']
export const SvgoIconsMedicationAlert: typeof import("../assets/icons/Medication--alert")['default']
export const SvgoIconsMedicationReminder: typeof import("../assets/icons/Medication--reminder")['default']
export const SvgoIconsMedication: typeof import("../assets/icons/Medication")['default']
export const SvgoIconsMenu: typeof import("../assets/icons/Menu")['default']
export const SvgoIconsMergeNode: typeof import("../assets/icons/Merge-node")['default']
export const SvgoIconsMerge: typeof import("../assets/icons/Merge")['default']
export const SvgoIconsMessageQueue: typeof import("../assets/icons/Message-queue")['default']
export const SvgoIconsMeterAlt: typeof import("../assets/icons/Meter--alt")['default']
export const SvgoIconsMeter: typeof import("../assets/icons/Meter")['default']
export const SvgoIconsMicrophoneFilled: typeof import("../assets/icons/Microphone--filled")['default']
export const SvgoIconsMicrophoneOffFilled: typeof import("../assets/icons/Microphone--off--filled")['default']
export const SvgoIconsMicrophoneOff: typeof import("../assets/icons/Microphone--off")['default']
export const SvgoIconsMicrophone: typeof import("../assets/icons/Microphone")['default']
export const SvgoIconsMicroscope: typeof import("../assets/icons/Microscope")['default']
export const SvgoIconsMicroservices1: typeof import("../assets/icons/Microservices--1")['default']
export const SvgoIconsMicroservices2: typeof import("../assets/icons/Microservices--2")['default']
export const SvgoIconsMigrateAlt: typeof import("../assets/icons/Migrate--alt")['default']
export const SvgoIconsMigrate: typeof import("../assets/icons/Migrate")['default']
export const SvgoIconsMilestone: typeof import("../assets/icons/Milestone")['default']
export const SvgoIconsMilitaryCamp: typeof import("../assets/icons/Military-camp")['default']
export const SvgoIconsMinimize: typeof import("../assets/icons/Minimize")['default']
export const SvgoIconsMisuseOutline: typeof import("../assets/icons/Misuse--outline")['default']
export const SvgoIconsMisuse: typeof import("../assets/icons/Misuse")['default']
export const SvgoIconsMixedRainHail: typeof import("../assets/icons/Mixed-rain-hail")['default']
export const SvgoIconsMlModelReference: typeof import("../assets/icons/Ml-model--reference")['default']
export const SvgoIconsMobileAdd: typeof import("../assets/icons/Mobile--add")['default']
export const SvgoIconsMobileAudio: typeof import("../assets/icons/Mobile--audio")['default']
export const SvgoIconsMobileCheck: typeof import("../assets/icons/Mobile--check")['default']
export const SvgoIconsMobileCrash: typeof import("../assets/icons/Mobile--crash")['default']
export const SvgoIconsMobileDownload: typeof import("../assets/icons/Mobile--download")['default']
export const SvgoIconsMobileEvent: typeof import("../assets/icons/Mobile--event")['default']
export const SvgoIconsMobileLandscape: typeof import("../assets/icons/Mobile--landscape")['default']
export const SvgoIconsMobileRequest: typeof import("../assets/icons/Mobile--request")['default']
export const SvgoIconsMobileSession: typeof import("../assets/icons/Mobile--session")['default']
export const SvgoIconsMobileViewOrientation: typeof import("../assets/icons/Mobile--view-orientation")['default']
export const SvgoIconsMobileView: typeof import("../assets/icons/Mobile--view")['default']
export const SvgoIconsMobile: typeof import("../assets/icons/Mobile")['default']
export const SvgoIconsMobilityServices: typeof import("../assets/icons/Mobility--services")['default']
export const SvgoIconsModelAlt: typeof import("../assets/icons/Model--alt")['default']
export const SvgoIconsModelFoundation: typeof import("../assets/icons/Model--foundation")['default']
export const SvgoIconsModelReference: typeof import("../assets/icons/Model--reference")['default']
export const SvgoIconsModelTuned1: typeof import("../assets/icons/Model--tuned-1")['default']
export const SvgoIconsModelTuned: typeof import("../assets/icons/Model--tuned")['default']
export const SvgoIconsModelBuilderReference: typeof import("../assets/icons/Model-builder--reference")['default']
export const SvgoIconsModelBuilder: typeof import("../assets/icons/Model-builder")['default']
export const SvgoIconsModel: typeof import("../assets/icons/Model")['default']
export const SvgoIconsMoney: typeof import("../assets/icons/Money")['default']
export const SvgoIconsMonster: typeof import("../assets/icons/Monster")['default']
export const SvgoIconsMonument: typeof import("../assets/icons/Monument")['default']
export const SvgoIconsMoon: typeof import("../assets/icons/Moon")['default']
export const SvgoIconsMoonrise: typeof import("../assets/icons/Moonrise")['default']
export const SvgoIconsMoonset: typeof import("../assets/icons/Moonset")['default']
export const SvgoIconsMostlyCloudyNight: typeof import("../assets/icons/Mostly-cloudy--night")['default']
export const SvgoIconsMostlyCloudy: typeof import("../assets/icons/Mostly-cloudy")['default']
export const SvgoIconsMountain: typeof import("../assets/icons/Mountain")['default']
export const SvgoIconsMov: typeof import("../assets/icons/Mov")['default']
export const SvgoIconsMove: typeof import("../assets/icons/Move")['default']
export const SvgoIconsMovement: typeof import("../assets/icons/Movement")['default']
export const SvgoIconsMp3: typeof import("../assets/icons/Mp3")['default']
export const SvgoIconsMp4: typeof import("../assets/icons/Mp4")['default']
export const SvgoIconsMpeg: typeof import("../assets/icons/Mpeg")['default']
export const SvgoIconsMpg2: typeof import("../assets/icons/Mpg2")['default']
export const SvgoIconsMusicAdd: typeof import("../assets/icons/Music--add")['default']
export const SvgoIconsMusicRemove: typeof import("../assets/icons/Music--remove")['default']
export const SvgoIconsMusic: typeof import("../assets/icons/Music")['default']
export const SvgoIconsMysql: typeof import("../assets/icons/Mysql")['default']
export const SvgoIconsNameSpace: typeof import("../assets/icons/Name-space")['default']
export const SvgoIconsNavaidCivil: typeof import("../assets/icons/Navaid--civil")['default']
export const SvgoIconsNavaidDme: typeof import("../assets/icons/Navaid--dme")['default']
export const SvgoIconsNavaidHelipad: typeof import("../assets/icons/Navaid--helipad")['default']
export const SvgoIconsNavaidMilitaryCivil: typeof import("../assets/icons/Navaid--military-civil")['default']
export const SvgoIconsNavaidMilitary: typeof import("../assets/icons/Navaid--military")['default']
export const SvgoIconsNavaidNdbDme: typeof import("../assets/icons/Navaid--ndb-dme")['default']
export const SvgoIconsNavaidNdb: typeof import("../assets/icons/Navaid--ndb")['default']
export const SvgoIconsNavaidPrivate: typeof import("../assets/icons/Navaid--private")['default']
export const SvgoIconsNavaidSeaplane: typeof import("../assets/icons/Navaid--seaplane")['default']
export const SvgoIconsNavaidTacan: typeof import("../assets/icons/Navaid--tacan")['default']
export const SvgoIconsNavaidVhfor: typeof import("../assets/icons/Navaid--vhfor")['default']
export const SvgoIconsNavaidVor: typeof import("../assets/icons/Navaid--vor")['default']
export const SvgoIconsNavaidVordme: typeof import("../assets/icons/Navaid--vordme")['default']
export const SvgoIconsNavaidVortac: typeof import("../assets/icons/Navaid--vortac")['default']
export const SvgoIconsNeed: typeof import("../assets/icons/Need")['default']
export const SvgoIconsNetwork1: typeof import("../assets/icons/Network--1")['default']
export const SvgoIconsNetwork2: typeof import("../assets/icons/Network--2")['default']
export const SvgoIconsNetwork3Reference: typeof import("../assets/icons/Network--3--reference")['default']
export const SvgoIconsNetwork3: typeof import("../assets/icons/Network--3")['default']
export const SvgoIconsNetwork4Reference: typeof import("../assets/icons/Network--4--reference")['default']
export const SvgoIconsNetwork4: typeof import("../assets/icons/Network--4")['default']
export const SvgoIconsNetworkAdminControl: typeof import("../assets/icons/Network--admin-control")['default']
export const SvgoIconsNetworkEnterprise: typeof import("../assets/icons/Network--enterprise")['default']
export const SvgoIconsNetworkOverlay: typeof import("../assets/icons/Network--overlay")['default']
export const SvgoIconsNetworkPublic: typeof import("../assets/icons/Network--public")['default']
export const SvgoIconsNetworkInterface: typeof import("../assets/icons/Network-interface")['default']
export const SvgoIconsNewTab: typeof import("../assets/icons/New-tab")['default']
export const SvgoIconsNextFilled: typeof import("../assets/icons/Next--filled")['default']
export const SvgoIconsNextOutline: typeof import("../assets/icons/Next--outline")['default']
export const SvgoIconsNoImage: typeof import("../assets/icons/No-image")['default']
export const SvgoIconsNoTicket: typeof import("../assets/icons/No-ticket")['default']
export const SvgoIconsNominal: typeof import("../assets/icons/Nominal")['default']
export const SvgoIconsNominate: typeof import("../assets/icons/Nominate")['default']
export const SvgoIconsNonCertified: typeof import("../assets/icons/Non-certified")['default']
export const SvgoIconsNoodleBowl: typeof import("../assets/icons/Noodle-bowl")['default']
export const SvgoIconsNotAvailable: typeof import("../assets/icons/Not-available")['default']
export const SvgoIconsNotSentFilled: typeof import("../assets/icons/Not-sent--filled")['default']
export const SvgoIconsNotSent: typeof import("../assets/icons/Not-sent")['default']
export const SvgoIconsNotebookReference: typeof import("../assets/icons/Notebook--reference")['default']
export const SvgoIconsNotebook: typeof import("../assets/icons/Notebook")['default']
export const SvgoIconsNotificationFilled: typeof import("../assets/icons/Notification--filled")['default']
export const SvgoIconsNotificationNew: typeof import("../assets/icons/Notification--new")['default']
export const SvgoIconsNotificationOffFilled: typeof import("../assets/icons/Notification--off--filled")['default']
export const SvgoIconsNotificationOff: typeof import("../assets/icons/Notification--off")['default']
export const SvgoIconsNotificationCounter: typeof import("../assets/icons/Notification-counter")['default']
export const SvgoIconsNotification: typeof import("../assets/icons/Notification")['default']
export const SvgoIconsNumber0: typeof import("../assets/icons/Number--0")['default']
export const SvgoIconsNumber1: typeof import("../assets/icons/Number--1")['default']
export const SvgoIconsNumber2: typeof import("../assets/icons/Number--2")['default']
export const SvgoIconsNumber3: typeof import("../assets/icons/Number--3")['default']
export const SvgoIconsNumber4: typeof import("../assets/icons/Number--4")['default']
export const SvgoIconsNumber5: typeof import("../assets/icons/Number--5")['default']
export const SvgoIconsNumber6: typeof import("../assets/icons/Number--6")['default']
export const SvgoIconsNumber7: typeof import("../assets/icons/Number--7")['default']
export const SvgoIconsNumber8: typeof import("../assets/icons/Number--8")['default']
export const SvgoIconsNumber9: typeof import("../assets/icons/Number--9")['default']
export const SvgoIconsNumberSmall0: typeof import("../assets/icons/Number--small--0")['default']
export const SvgoIconsNumberSmall1: typeof import("../assets/icons/Number--small--1")['default']
export const SvgoIconsNumberSmall2: typeof import("../assets/icons/Number--small--2")['default']
export const SvgoIconsNumberSmall3: typeof import("../assets/icons/Number--small--3")['default']
export const SvgoIconsNumberSmall4: typeof import("../assets/icons/Number--small--4")['default']
export const SvgoIconsNumberSmall5: typeof import("../assets/icons/Number--small--5")['default']
export const SvgoIconsNumberSmall6: typeof import("../assets/icons/Number--small--6")['default']
export const SvgoIconsNumberSmall7: typeof import("../assets/icons/Number--small--7")['default']
export const SvgoIconsNumberSmall8: typeof import("../assets/icons/Number--small--8")['default']
export const SvgoIconsNumberSmall9: typeof import("../assets/icons/Number--small--9")['default']
export const SvgoIconsObjectStorageAlt: typeof import("../assets/icons/Object-storage--alt")['default']
export const SvgoIconsObjectStorage1: typeof import("../assets/icons/Object-storage-1")['default']
export const SvgoIconsObjectStorage: typeof import("../assets/icons/Object-storage")['default']
export const SvgoIconsObservedHail: typeof import("../assets/icons/Observed--hail")['default']
export const SvgoIconsObservedLightning: typeof import("../assets/icons/Observed--lightning")['default']
export const SvgoIconsOmega: typeof import("../assets/icons/Omega")['default']
export const SvgoIconsOpacity: typeof import("../assets/icons/Opacity")['default']
export const SvgoIconsOpenPanelBottom: typeof import("../assets/icons/Open-panel--bottom")['default']
export const SvgoIconsOpenPanelFilledBottom: typeof import("../assets/icons/Open-panel--filled--bottom")['default']
export const SvgoIconsOpenPanelFilledLeft: typeof import("../assets/icons/Open-panel--filled--left")['default']
export const SvgoIconsOpenPanelFilledRight: typeof import("../assets/icons/Open-panel--filled--right")['default']
export const SvgoIconsOpenPanelFilledTop: typeof import("../assets/icons/Open-panel--filled--top")['default']
export const SvgoIconsOpenPanelLeft: typeof import("../assets/icons/Open-panel--left")['default']
export const SvgoIconsOpenPanelRight: typeof import("../assets/icons/Open-panel--right")['default']
export const SvgoIconsOpenPanelTop: typeof import("../assets/icons/Open-panel--top")['default']
export const SvgoIconsOperationGauge: typeof import("../assets/icons/Operation--gauge")['default']
export const SvgoIconsOperationIf: typeof import("../assets/icons/Operation--if")['default']
export const SvgoIconsOperation: typeof import("../assets/icons/Operation")['default']
export const SvgoIconsOperationsField: typeof import("../assets/icons/Operations--field")['default']
export const SvgoIconsOperationsRecord: typeof import("../assets/icons/Operations--record")['default']
export const SvgoIconsOrderDetails: typeof import("../assets/icons/Order-details")['default']
export const SvgoIconsOrdinal: typeof import("../assets/icons/Ordinal")['default']
export const SvgoIconsOutage: typeof import("../assets/icons/Outage")['default']
export const SvgoIconsOutlookSevere: typeof import("../assets/icons/Outlook-severe")['default']
export const SvgoIconsOverflowMenuHorizontal: typeof import("../assets/icons/Overflow-menu--horizontal")['default']
export const SvgoIconsOverflowMenuVertical: typeof import("../assets/icons/Overflow-menu--vertical")['default']
export const SvgoIconsOverlay: typeof import("../assets/icons/Overlay")['default']
export const SvgoIconsPackageTextAnalysis: typeof import("../assets/icons/Package--text-analysis")['default']
export const SvgoIconsPackageNode: typeof import("../assets/icons/Package-node")['default']
export const SvgoIconsPackage: typeof import("../assets/icons/Package")['default']
export const SvgoIconsPageFirst: typeof import("../assets/icons/Page--first")['default']
export const SvgoIconsPageLast: typeof import("../assets/icons/Page--last")['default']
export const SvgoIconsPageBreak: typeof import("../assets/icons/Page-break")['default']
export const SvgoIconsPageNumber: typeof import("../assets/icons/Page-number")['default']
export const SvgoIconsPageScroll: typeof import("../assets/icons/Page-scroll")['default']
export const SvgoIconsPaintBrushAlt: typeof import("../assets/icons/Paint-brush--alt")['default']
export const SvgoIconsPaintBrush: typeof import("../assets/icons/Paint-brush")['default']
export const SvgoIconsPalmTree: typeof import("../assets/icons/Palm-tree")['default']
export const SvgoIconsPanHorizontal: typeof import("../assets/icons/Pan--horizontal")['default']
export const SvgoIconsPanVertical: typeof import("../assets/icons/Pan--vertical")['default']
export const SvgoIconsPanelExpansion: typeof import("../assets/icons/Panel-expansion")['default']
export const SvgoIconsParagraph: typeof import("../assets/icons/Paragraph")['default']
export const SvgoIconsParameter: typeof import("../assets/icons/Parameter")['default']
export const SvgoIconsParentChild: typeof import("../assets/icons/Parent-child")['default']
export const SvgoIconsPartDefinition: typeof import("../assets/icons/Part--definition")['default']
export const SvgoIconsPartUsage: typeof import("../assets/icons/Part--usage")['default']
export const SvgoIconsPartitionAuto: typeof import("../assets/icons/Partition--auto")['default']
export const SvgoIconsPartitionCollection: typeof import("../assets/icons/Partition--collection")['default']
export const SvgoIconsPartitionRepartition: typeof import("../assets/icons/Partition--repartition")['default']
export const SvgoIconsPartitionSame: typeof import("../assets/icons/Partition--same")['default']
export const SvgoIconsPartitionSpecific: typeof import("../assets/icons/Partition--specific")['default']
export const SvgoIconsPartlyCloudyNight: typeof import("../assets/icons/Partly-cloudy--night")['default']
export const SvgoIconsPartlyCloudy: typeof import("../assets/icons/Partly-cloudy")['default']
export const SvgoIconsPartnership: typeof import("../assets/icons/Partnership")['default']
export const SvgoIconsPassengerDrinks: typeof import("../assets/icons/Passenger--drinks")['default']
export const SvgoIconsPassengerPlus: typeof import("../assets/icons/Passenger--plus")['default']
export const SvgoIconsPassword: typeof import("../assets/icons/Password")['default']
export const SvgoIconsPaste: typeof import("../assets/icons/Paste")['default']
export const SvgoIconsPauseFilled: typeof import("../assets/icons/Pause--filled")['default']
export const SvgoIconsPauseOutlineFilled: typeof import("../assets/icons/Pause--outline--filled")['default']
export const SvgoIconsPauseOutline: typeof import("../assets/icons/Pause--outline")['default']
export const SvgoIconsPauseFuture: typeof import("../assets/icons/Pause-future")['default']
export const SvgoIconsPausePast: typeof import("../assets/icons/Pause-past")['default']
export const SvgoIconsPause: typeof import("../assets/icons/Pause")['default']
export const SvgoIconsPcnENode: typeof import("../assets/icons/Pcn--e-node")['default']
export const SvgoIconsPcnMilitary: typeof import("../assets/icons/Pcn--military")['default']
export const SvgoIconsPcnPNode: typeof import("../assets/icons/Pcn--p-node")['default']
export const SvgoIconsPcnZNode: typeof import("../assets/icons/Pcn--z-node")['default']
export const SvgoIconsPdfReference: typeof import("../assets/icons/Pdf--reference")['default']
export const SvgoIconsPdf: typeof import("../assets/icons/Pdf")['default']
export const SvgoIconsPedestrianFamily: typeof import("../assets/icons/Pedestrian--family")['default']
export const SvgoIconsPedestrianChild: typeof import("../assets/icons/Pedestrian-child")['default']
export const SvgoIconsPedestrian: typeof import("../assets/icons/Pedestrian")['default']
export const SvgoIconsPenFountain: typeof import("../assets/icons/Pen--fountain")['default']
export const SvgoIconsPen: typeof import("../assets/icons/Pen")['default']
export const SvgoIconsPendingFilled: typeof import("../assets/icons/Pending--filled")['default']
export const SvgoIconsPending: typeof import("../assets/icons/Pending")['default']
export const SvgoIconsPentagonDownOutline: typeof import("../assets/icons/Pentagon--down--outline")['default']
export const SvgoIconsPentagonDownSolid: typeof import("../assets/icons/Pentagon--down--solid")['default']
export const SvgoIconsPentagonLeftOutline: typeof import("../assets/icons/Pentagon--left--outline")['default']
export const SvgoIconsPentagonLeftSolid: typeof import("../assets/icons/Pentagon--left--solid")['default']
export const SvgoIconsPentagonOutline: typeof import("../assets/icons/Pentagon--outline")['default']
export const SvgoIconsPentagonRightOutline: typeof import("../assets/icons/Pentagon--right--outline")['default']
export const SvgoIconsPentagonRightSolid: typeof import("../assets/icons/Pentagon--right--solid")['default']
export const SvgoIconsPentagonSolid: typeof import("../assets/icons/Pentagon--solid")['default']
export const SvgoIconsPercentageFilled: typeof import("../assets/icons/Percentage--filled")['default']
export const SvgoIconsPercentage: typeof import("../assets/icons/Percentage")['default']
export const SvgoIconsPersonFavorite: typeof import("../assets/icons/Person--favorite")['default']
export const SvgoIconsPerson: typeof import("../assets/icons/Person")['default']
export const SvgoIconsPest: typeof import("../assets/icons/Pest")['default']
export const SvgoIconsPetImageB: typeof import("../assets/icons/Pet-image--b")['default']
export const SvgoIconsPetImageO: typeof import("../assets/icons/Pet-image--o")['default']
export const SvgoIconsPhoneApplication: typeof import("../assets/icons/Phone--application")['default']
export const SvgoIconsPhoneBlockFilled: typeof import("../assets/icons/Phone--block--filled")['default']
export const SvgoIconsPhoneBlock: typeof import("../assets/icons/Phone--block")['default']
export const SvgoIconsPhoneFilled: typeof import("../assets/icons/Phone--filled")['default']
export const SvgoIconsPhoneIncomingFilled: typeof import("../assets/icons/Phone--incoming--filled")['default']
export const SvgoIconsPhoneIncoming: typeof import("../assets/icons/Phone--incoming")['default']
export const SvgoIconsPhoneIp: typeof import("../assets/icons/Phone--ip")['default']
export const SvgoIconsPhoneOffFilled: typeof import("../assets/icons/Phone--off--filled")['default']
export const SvgoIconsPhoneOff: typeof import("../assets/icons/Phone--off")['default']
export const SvgoIconsPhoneOutgoingFilled: typeof import("../assets/icons/Phone--outgoing--filled")['default']
export const SvgoIconsPhoneOutgoing: typeof import("../assets/icons/Phone--outgoing")['default']
export const SvgoIconsPhoneSettings: typeof import("../assets/icons/Phone--settings")['default']
export const SvgoIconsPhoneVoiceFilled: typeof import("../assets/icons/Phone--voice--filled")['default']
export const SvgoIconsPhoneVoice: typeof import("../assets/icons/Phone--voice")['default']
export const SvgoIconsPhone: typeof import("../assets/icons/Phone")['default']
export const SvgoIconsPhraseSentiment: typeof import("../assets/icons/Phrase-sentiment")['default']
export const SvgoIconsPicnicArea: typeof import("../assets/icons/Picnic-area")['default']
export const SvgoIconsPiggyBankSlot: typeof import("../assets/icons/Piggy-bank--slot")['default']
export const SvgoIconsPiggyBank: typeof import("../assets/icons/Piggy-bank")['default']
export const SvgoIconsPillsAdd: typeof import("../assets/icons/Pills--add")['default']
export const SvgoIconsPillsSubtract: typeof import("../assets/icons/Pills--subtract")['default']
export const SvgoIconsPills: typeof import("../assets/icons/Pills")['default']
export const SvgoIconsPinFilled: typeof import("../assets/icons/Pin--filled")['default']
export const SvgoIconsPin: typeof import("../assets/icons/Pin")['default']
export const SvgoIconsPlan: typeof import("../assets/icons/Plan")['default']
export const SvgoIconsPlanePrivate: typeof import("../assets/icons/Plane--private")['default']
export const SvgoIconsPlaneSea: typeof import("../assets/icons/Plane--sea")['default']
export const SvgoIconsPlane: typeof import("../assets/icons/Plane")['default']
export const SvgoIconsPlatforms: typeof import("../assets/icons/Platforms")['default']
export const SvgoIconsPlayFilledAlt: typeof import("../assets/icons/Play--filled--alt")['default']
export const SvgoIconsPlayFilled: typeof import("../assets/icons/Play--filled")['default']
export const SvgoIconsPlayOutlineFilled: typeof import("../assets/icons/Play--outline--filled")['default']
export const SvgoIconsPlayOutline: typeof import("../assets/icons/Play--outline")['default']
export const SvgoIconsPlay: typeof import("../assets/icons/Play")['default']
export const SvgoIconsPlaylist: typeof import("../assets/icons/Playlist")['default']
export const SvgoIconsPlugFilled: typeof import("../assets/icons/Plug--filled")['default']
export const SvgoIconsPlug: typeof import("../assets/icons/Plug")['default']
export const SvgoIconsPng: typeof import("../assets/icons/Png")['default']
export const SvgoIconsPointOfPresence: typeof import("../assets/icons/Point-of-presence")['default']
export const SvgoIconsPointerText: typeof import("../assets/icons/Pointer-text")['default']
export const SvgoIconsPolice: typeof import("../assets/icons/Police")['default']
export const SvgoIconsPolicy: typeof import("../assets/icons/Policy")['default']
export const SvgoIconsPopup: typeof import("../assets/icons/Popup")['default']
export const SvgoIconsPortDefinition: typeof import("../assets/icons/Port--definition")['default']
export const SvgoIconsPortInput: typeof import("../assets/icons/Port--input")['default']
export const SvgoIconsPortOutput: typeof import("../assets/icons/Port--output")['default']
export const SvgoIconsPortUsage: typeof import("../assets/icons/Port--usage")['default']
export const SvgoIconsPortfolio: typeof import("../assets/icons/Portfolio")['default']
export const SvgoIconsPower: typeof import("../assets/icons/Power")['default']
export const SvgoIconsPpt: typeof import("../assets/icons/Ppt")['default']
export const SvgoIconsPresentationFile: typeof import("../assets/icons/Presentation-file")['default']
export const SvgoIconsPressureFilled: typeof import("../assets/icons/Pressure--filled")['default']
export const SvgoIconsPressure: typeof import("../assets/icons/Pressure")['default']
export const SvgoIconsPreviousFilled: typeof import("../assets/icons/Previous--filled")['default']
export const SvgoIconsPreviousOutline: typeof import("../assets/icons/Previous--outline")['default']
export const SvgoIconsPricingConsumption: typeof import("../assets/icons/Pricing--consumption")['default']
export const SvgoIconsPricingContainer: typeof import("../assets/icons/Pricing--container")['default']
export const SvgoIconsPricingQuickProposal: typeof import("../assets/icons/Pricing--quick-proposal")['default']
export const SvgoIconsPricingTailored: typeof import("../assets/icons/Pricing--tailored")['default']
export const SvgoIconsPricingTraditional: typeof import("../assets/icons/Pricing--traditional")['default']
export const SvgoIconsPrinter: typeof import("../assets/icons/Printer")['default']
export const SvgoIconsProcessAutomate: typeof import("../assets/icons/Process-automate")['default']
export const SvgoIconsProcess: typeof import("../assets/icons/Process")['default']
export const SvgoIconsProduct: typeof import("../assets/icons/Product")['default']
export const SvgoIconsProgressBarRound: typeof import("../assets/icons/Progress-bar--round")['default']
export const SvgoIconsProgressBar: typeof import("../assets/icons/Progress-bar")['default']
export const SvgoIconsPromote: typeof import("../assets/icons/Promote")['default']
export const SvgoIconsPromptSession: typeof import("../assets/icons/Prompt-session")['default']
export const SvgoIconsPromptTemplate: typeof import("../assets/icons/Prompt-template")['default']
export const SvgoIconsPropertyRelationship: typeof import("../assets/icons/Property-relationship")['default']
export const SvgoIconsPullRequest: typeof import("../assets/icons/Pull-request")['default']
export const SvgoIconsPurchase: typeof import("../assets/icons/Purchase")['default']
export const SvgoIconsQCLaunch: typeof import("../assets/icons/QC-launch")['default']
export const SvgoIconsQiskit: typeof import("../assets/icons/Qiskit")['default']
export const SvgoIconsQqPlot: typeof import("../assets/icons/Qq-plot")['default']
export const SvgoIconsQrCode: typeof import("../assets/icons/Qr-code")['default']
export const SvgoIconsQuadrantPlot: typeof import("../assets/icons/Quadrant-plot")['default']
export const SvgoIconsQueryQueue: typeof import("../assets/icons/Query-queue")['default']
export const SvgoIconsQuery: typeof import("../assets/icons/Query")['default']
export const SvgoIconsQuestionAnswering: typeof import("../assets/icons/Question-answering")['default']
export const SvgoIconsQueued: typeof import("../assets/icons/Queued")['default']
export const SvgoIconsQuotes: typeof import("../assets/icons/Quotes")['default']
export const SvgoIconsRAG: typeof import("../assets/icons/RAG")['default']
export const SvgoIconsRadarEnhanced: typeof import("../assets/icons/Radar--enhanced")['default']
export const SvgoIconsRadarWeather: typeof import("../assets/icons/Radar--weather")['default']
export const SvgoIconsRadar: typeof import("../assets/icons/Radar")['default']
export const SvgoIconsRadioCombat: typeof import("../assets/icons/Radio--combat")['default']
export const SvgoIconsRadioPushToTalk: typeof import("../assets/icons/Radio--push-to-talk")['default']
export const SvgoIconsRadioButtonChecked: typeof import("../assets/icons/Radio-button--checked")['default']
export const SvgoIconsRadioButton: typeof import("../assets/icons/Radio-button")['default']
export const SvgoIconsRadio: typeof import("../assets/icons/Radio")['default']
export const SvgoIconsRainDrizzle: typeof import("../assets/icons/Rain--drizzle")['default']
export const SvgoIconsRainHeavy: typeof import("../assets/icons/Rain--heavy")['default']
export const SvgoIconsRainScatteredNight: typeof import("../assets/icons/Rain--scattered--night")['default']
export const SvgoIconsRainScattered: typeof import("../assets/icons/Rain--scattered")['default']
export const SvgoIconsRainDrop: typeof import("../assets/icons/Rain-drop")['default']
export const SvgoIconsRain: typeof import("../assets/icons/Rain")['default']
export const SvgoIconsRaw: typeof import("../assets/icons/Raw")['default']
export const SvgoIconsReceipt: typeof import("../assets/icons/Receipt")['default']
export const SvgoIconsRecentlyViewed: typeof import("../assets/icons/Recently-viewed")['default']
export const SvgoIconsRecommend: typeof import("../assets/icons/Recommend")['default']
export const SvgoIconsRecordingFilledAlt: typeof import("../assets/icons/Recording--filled--alt")['default']
export const SvgoIconsRecordingFilled: typeof import("../assets/icons/Recording--filled")['default']
export const SvgoIconsRecording: typeof import("../assets/icons/Recording")['default']
export const SvgoIconsRecycle: typeof import("../assets/icons/Recycle")['default']
export const SvgoIconsRedo: typeof import("../assets/icons/Redo")['default']
export const SvgoIconsRefEvapotranspiration: typeof import("../assets/icons/Ref-evapotranspiration")['default']
export const SvgoIconsReferenceArchitecture: typeof import("../assets/icons/Reference-architecture")['default']
export const SvgoIconsReflectHorizontal: typeof import("../assets/icons/Reflect--horizontal")['default']
export const SvgoIconsReflectVertical: typeof import("../assets/icons/Reflect--vertical")['default']
export const SvgoIconsRegionAnalysisArea: typeof import("../assets/icons/Region-analysis--area")['default']
export const SvgoIconsRegionAnalysisVolume: typeof import("../assets/icons/Region-analysis--volume")['default']
export const SvgoIconsRegistration: typeof import("../assets/icons/Registration")['default']
export const SvgoIconsReminderMedical: typeof import("../assets/icons/Reminder--medical")['default']
export const SvgoIconsReminder: typeof import("../assets/icons/Reminder")['default']
export const SvgoIconsRenew: typeof import("../assets/icons/Renew")['default']
export const SvgoIconsRepeatOne: typeof import("../assets/icons/Repeat--one")['default']
export const SvgoIconsRepeat: typeof import("../assets/icons/Repeat")['default']
export const SvgoIconsReplicate: typeof import("../assets/icons/Replicate")['default']
export const SvgoIconsReplyAll: typeof import("../assets/icons/Reply--all")['default']
export const SvgoIconsReply: typeof import("../assets/icons/Reply")['default']
export const SvgoIconsRepoArtifact: typeof import("../assets/icons/Repo--artifact")['default']
export const SvgoIconsRepoSourceCode: typeof import("../assets/icons/Repo--source-code")['default']
export const SvgoIconsReportData: typeof import("../assets/icons/Report--data")['default']
export const SvgoIconsReport: typeof import("../assets/icons/Report")['default']
export const SvgoIconsRequestQuote: typeof import("../assets/icons/Request-quote")['default']
export const SvgoIconsRequirementDefinition: typeof import("../assets/icons/Requirement--definition")['default']
export const SvgoIconsRequirementUsage: typeof import("../assets/icons/Requirement--usage")['default']
export const SvgoIconsResetAlt: typeof import("../assets/icons/Reset--alt")['default']
export const SvgoIconsReset: typeof import("../assets/icons/Reset")['default']
export const SvgoIconsRestart: typeof import("../assets/icons/Restart")['default']
export const SvgoIconsRestaurantFine: typeof import("../assets/icons/Restaurant--fine")['default']
export const SvgoIconsRestaurant: typeof import("../assets/icons/Restaurant")['default']
export const SvgoIconsResultDraft: typeof import("../assets/icons/Result--draft")['default']
export const SvgoIconsResultNew: typeof import("../assets/icons/Result--new")['default']
export const SvgoIconsResultOld: typeof import("../assets/icons/Result--old")['default']
export const SvgoIconsResult: typeof import("../assets/icons/Result")['default']
export const SvgoIconsRetryFailed: typeof import("../assets/icons/Retry--failed")['default']
export const SvgoIconsReturn: typeof import("../assets/icons/Return")['default']
export const SvgoIconsReview: typeof import("../assets/icons/Review")['default']
export const SvgoIconsRewind10: typeof import("../assets/icons/Rewind--10")['default']
export const SvgoIconsRewind30: typeof import("../assets/icons/Rewind--30")['default']
export const SvgoIconsRewind5: typeof import("../assets/icons/Rewind--5")['default']
export const SvgoIconsRightPanelCloseFilled: typeof import("../assets/icons/Right-panel--close--filled")['default']
export const SvgoIconsRightPanelClose: typeof import("../assets/icons/Right-panel--close")['default']
export const SvgoIconsRightPanelOpenFilled: typeof import("../assets/icons/Right-panel--open--filled")['default']
export const SvgoIconsRightPanelOpen: typeof import("../assets/icons/Right-panel--open")['default']
export const SvgoIconsRoadWeather: typeof import("../assets/icons/Road--weather")['default']
export const SvgoIconsRoad: typeof import("../assets/icons/Road")['default']
export const SvgoIconsRoadmap: typeof import("../assets/icons/Roadmap")['default']
export const SvgoIconsRocket: typeof import("../assets/icons/Rocket")['default']
export const SvgoIconsRotate180: typeof import("../assets/icons/Rotate--180")['default']
export const SvgoIconsRotate360: typeof import("../assets/icons/Rotate--360")['default']
export const SvgoIconsRotateClockwiseAltFilled: typeof import("../assets/icons/Rotate--clockwise--alt--filled")['default']
export const SvgoIconsRotateClockwiseAlt: typeof import("../assets/icons/Rotate--clockwise--alt")['default']
export const SvgoIconsRotateClockwiseFilled: typeof import("../assets/icons/Rotate--clockwise--filled")['default']
export const SvgoIconsRotateClockwise: typeof import("../assets/icons/Rotate--clockwise")['default']
export const SvgoIconsRotateCounterclockwiseAltFilled: typeof import("../assets/icons/Rotate--counterclockwise--alt--filled")['default']
export const SvgoIconsRotateCounterclockwiseAlt: typeof import("../assets/icons/Rotate--counterclockwise--alt")['default']
export const SvgoIconsRotateCounterclockwiseFilled: typeof import("../assets/icons/Rotate--counterclockwise--filled")['default']
export const SvgoIconsRotateCounterclockwise: typeof import("../assets/icons/Rotate--counterclockwise")['default']
export const SvgoIconsRotate: typeof import("../assets/icons/Rotate")['default']
export const SvgoIconsRouterVoice: typeof import("../assets/icons/Router--voice")['default']
export const SvgoIconsRouterWifi: typeof import("../assets/icons/Router--wifi")['default']
export const SvgoIconsRouter: typeof import("../assets/icons/Router")['default']
export const SvgoIconsRowCollapse: typeof import("../assets/icons/Row--collapse")['default']
export const SvgoIconsRowDelete: typeof import("../assets/icons/Row--delete")['default']
export const SvgoIconsRowExpand: typeof import("../assets/icons/Row--expand")['default']
export const SvgoIconsRowInsert: typeof import("../assets/icons/Row--insert")['default']
export const SvgoIconsRow: typeof import("../assets/icons/Row")['default']
export const SvgoIconsRss: typeof import("../assets/icons/Rss")['default']
export const SvgoIconsRuleCancelled: typeof import("../assets/icons/Rule--cancelled")['default']
export const SvgoIconsRuleDataQuality: typeof import("../assets/icons/Rule--data-quality")['default']
export const SvgoIconsRuleDraft: typeof import("../assets/icons/Rule--draft")['default']
export const SvgoIconsRuleFilled: typeof import("../assets/icons/Rule--filled")['default']
export const SvgoIconsRuleLocked: typeof import("../assets/icons/Rule--locked")['default']
export const SvgoIconsRulePartial: typeof import("../assets/icons/Rule--partial")['default']
export const SvgoIconsRuleTest: typeof import("../assets/icons/Rule--test")['default']
export const SvgoIconsRule: typeof import("../assets/icons/Rule")['default']
export const SvgoIconsRulerAlt: typeof import("../assets/icons/Ruler--alt")['default']
export const SvgoIconsRuler: typeof import("../assets/icons/Ruler")['default']
export const SvgoIconsRunMirror: typeof import("../assets/icons/Run--mirror")['default']
export const SvgoIconsRun: typeof import("../assets/icons/Run")['default']
export const SvgoIconsRunning: typeof import("../assets/icons/Running")['default']
export const SvgoIconsSAlt: typeof import("../assets/icons/S--alt")['default']
export const SvgoIconsS: typeof import("../assets/icons/S")['default']
export const SvgoIconsSLM: typeof import("../assets/icons/SLM")['default']
export const SvgoIconsSailboatCoastal: typeof import("../assets/icons/Sailboat--coastal")['default']
export const SvgoIconsSailboatOffshore: typeof import("../assets/icons/Sailboat--offshore")['default']
export const SvgoIconsSalesOps: typeof import("../assets/icons/Sales-ops")['default']
export const SvgoIconsSankeyDiagramAlt: typeof import("../assets/icons/Sankey-diagram--alt")['default']
export const SvgoIconsSankeyDiagram: typeof import("../assets/icons/Sankey-diagram")['default']
export const SvgoIconsSatelliteRadar: typeof import("../assets/icons/Satellite--radar")['default']
export const SvgoIconsSatelliteWeather: typeof import("../assets/icons/Satellite--weather")['default']
export const SvgoIconsSatellite: typeof import("../assets/icons/Satellite")['default']
export const SvgoIconsSatisfyDefinition: typeof import("../assets/icons/Satisfy--definition")['default']
export const SvgoIconsSatisfyUsage: typeof import("../assets/icons/Satisfy--usage")['default']
export const SvgoIconsSaveAnnotation: typeof import("../assets/icons/Save--annotation")['default']
export const SvgoIconsSaveImage: typeof import("../assets/icons/Save--image")['default']
export const SvgoIconsSaveModel: typeof import("../assets/icons/Save--model")['default']
export const SvgoIconsSaveSeries: typeof import("../assets/icons/Save--series")['default']
export const SvgoIconsSave: typeof import("../assets/icons/Save")['default']
export const SvgoIconsScale: typeof import("../assets/icons/Scale")['default']
export const SvgoIconsScalesTipped: typeof import("../assets/icons/Scales--tipped")['default']
export const SvgoIconsScales: typeof import("../assets/icons/Scales")['default']
export const SvgoIconsScalpelCursor: typeof import("../assets/icons/Scalpel--cursor")['default']
export const SvgoIconsScalpelLasso: typeof import("../assets/icons/Scalpel--lasso")['default']
export const SvgoIconsScalpelSelect: typeof import("../assets/icons/Scalpel--select")['default']
export const SvgoIconsScalpel: typeof import("../assets/icons/Scalpel")['default']
export const SvgoIconsScanAlt: typeof import("../assets/icons/Scan--alt")['default']
export const SvgoIconsScanDisabled: typeof import("../assets/icons/Scan--disabled")['default']
export const SvgoIconsScan: typeof import("../assets/icons/Scan")['default']
export const SvgoIconsScatterMatrix: typeof import("../assets/icons/Scatter-matrix")['default']
export const SvgoIconsSchematics: typeof import("../assets/icons/Schematics")['default']
export const SvgoIconsScisControlTower: typeof import("../assets/icons/Scis--control-tower")['default']
export const SvgoIconsScisTransparentSupply: typeof import("../assets/icons/Scis--transparent-supply")['default']
export const SvgoIconsScooterFront: typeof import("../assets/icons/Scooter--front")['default']
export const SvgoIconsScooter: typeof import("../assets/icons/Scooter")['default']
export const SvgoIconsScreenOff: typeof import("../assets/icons/Screen--off")['default']
export const SvgoIconsScreenMapSet: typeof import("../assets/icons/Screen-map--set")['default']
export const SvgoIconsScreenMap: typeof import("../assets/icons/Screen-map")['default']
export const SvgoIconsScreen: typeof import("../assets/icons/Screen")['default']
export const SvgoIconsScriptReference: typeof import("../assets/icons/Script--reference")['default']
export const SvgoIconsScript: typeof import("../assets/icons/Script")['default']
export const SvgoIconsSdk: typeof import("../assets/icons/Sdk")['default']
export const SvgoIconsSearchAdvanced: typeof import("../assets/icons/Search--advanced")['default']
export const SvgoIconsSearchLocateMirror: typeof import("../assets/icons/Search--locate--mirror")['default']
export const SvgoIconsSearchLocate: typeof import("../assets/icons/Search--locate")['default']
export const SvgoIconsSearch: typeof import("../assets/icons/Search")['default']
export const SvgoIconsSecurityServices: typeof import("../assets/icons/Security-services")['default']
export const SvgoIconsSecurity: typeof import("../assets/icons/Security")['default']
export const SvgoIconsSelect01: typeof import("../assets/icons/Select--01")['default']
export const SvgoIconsSelect02: typeof import("../assets/icons/Select--02")['default']
export const SvgoIconsSelectWindow: typeof import("../assets/icons/Select--window")['default']
export const SvgoIconsSendAltFilled: typeof import("../assets/icons/Send--alt--filled")['default']
export const SvgoIconsSendAlt: typeof import("../assets/icons/Send--alt")['default']
export const SvgoIconsSendFilled: typeof import("../assets/icons/Send--filled")['default']
export const SvgoIconsSendActionUsage: typeof import("../assets/icons/Send-action--usage")['default']
export const SvgoIconsSendBackward: typeof import("../assets/icons/Send-backward")['default']
export const SvgoIconsSendToBack: typeof import("../assets/icons/Send-to-back")['default']
export const SvgoIconsSend: typeof import("../assets/icons/Send")['default']
export const SvgoIconsServerDns: typeof import("../assets/icons/Server--dns")['default']
export const SvgoIconsServerProxy: typeof import("../assets/icons/Server--proxy")['default']
export const SvgoIconsServerTime: typeof import("../assets/icons/Server--time")['default']
export const SvgoIconsServiceDesk: typeof import("../assets/icons/Service-desk")['default']
export const SvgoIconsServiceId: typeof import("../assets/icons/Service-id")['default']
export const SvgoIconsServiceLevels: typeof import("../assets/icons/Service-levels")['default']
export const SvgoIconsSessionBorderControl: typeof import("../assets/icons/Session-border-control")['default']
export const SvgoIconsSettingsAdjust: typeof import("../assets/icons/Settings--adjust")['default']
export const SvgoIconsSettingsCheck: typeof import("../assets/icons/Settings--check")['default']
export const SvgoIconsSettingsEdit: typeof import("../assets/icons/Settings--edit")['default']
export const SvgoIconsSettingsServices: typeof import("../assets/icons/Settings--services")['default']
export const SvgoIconsSettingsView: typeof import("../assets/icons/Settings--view")['default']
export const SvgoIconsSettings: typeof import("../assets/icons/Settings")['default']
export const SvgoIconsShapeExcept: typeof import("../assets/icons/Shape--except")['default']
export const SvgoIconsShapeExclude: typeof import("../assets/icons/Shape--exclude")['default']
export const SvgoIconsShapeIntersect: typeof import("../assets/icons/Shape--intersect")['default']
export const SvgoIconsShapeJoin: typeof import("../assets/icons/Shape--join")['default']
export const SvgoIconsShapeUnite: typeof import("../assets/icons/Shape--unite")['default']
export const SvgoIconsShapes: typeof import("../assets/icons/Shapes")['default']
export const SvgoIconsShareKnowledge: typeof import("../assets/icons/Share-knowledge")['default']
export const SvgoIconsShare: typeof import("../assets/icons/Share")['default']
export const SvgoIconsShoppingBag: typeof import("../assets/icons/Shopping--bag")['default']
export const SvgoIconsShoppingCartArrowDown: typeof import("../assets/icons/Shopping--cart--arrow-down")['default']
export const SvgoIconsShoppingCartArrowUp: typeof import("../assets/icons/Shopping--cart--arrow-up")['default']
export const SvgoIconsShoppingCartClear: typeof import("../assets/icons/Shopping--cart--clear")['default']
export const SvgoIconsShoppingCartError: typeof import("../assets/icons/Shopping--cart--error")['default']
export const SvgoIconsShoppingCartMinus: typeof import("../assets/icons/Shopping--cart--minus")['default']
export const SvgoIconsShoppingCartPlus: typeof import("../assets/icons/Shopping--cart--plus")['default']
export const SvgoIconsShoppingCart: typeof import("../assets/icons/Shopping--cart")['default']
export const SvgoIconsShoppingCatalog: typeof import("../assets/icons/Shopping--catalog")['default']
export const SvgoIconsShowDataCards: typeof import("../assets/icons/Show-data--cards")['default']
export const SvgoIconsShrinkScreenFilled: typeof import("../assets/icons/Shrink-screen--filled")['default']
export const SvgoIconsShrinkScreen: typeof import("../assets/icons/Shrink-screen")['default']
export const SvgoIconsShuffle: typeof import("../assets/icons/Shuffle")['default']
export const SvgoIconsShuttle: typeof import("../assets/icons/Shuttle")['default']
export const SvgoIconsSidePanelCloseFilled: typeof import("../assets/icons/Side-panel--close--filled")['default']
export const SvgoIconsSidePanelClose: typeof import("../assets/icons/Side-panel--close")['default']
export const SvgoIconsSidePanelOpenFilled: typeof import("../assets/icons/Side-panel--open--filled")['default']
export const SvgoIconsSidePanelOpen: typeof import("../assets/icons/Side-panel--open")['default']
export const SvgoIconsSight: typeof import("../assets/icons/Sight")['default']
export const SvgoIconsSigma: typeof import("../assets/icons/Sigma")['default']
export const SvgoIconsSignalStrength: typeof import("../assets/icons/Signal-strength")['default']
export const SvgoIconsSimCard: typeof import("../assets/icons/Sim-card")['default']
export const SvgoIconsSkillLevelAdvanced: typeof import("../assets/icons/Skill-level--advanced")['default']
export const SvgoIconsSkillLevelBasic: typeof import("../assets/icons/Skill-level--basic")['default']
export const SvgoIconsSkillLevelIntermediate: typeof import("../assets/icons/Skill-level--intermediate")['default']
export const SvgoIconsSkillLevel: typeof import("../assets/icons/Skill-level")['default']
export const SvgoIconsSkipBackFilled: typeof import("../assets/icons/Skip--back--filled")['default']
export const SvgoIconsSkipBackOutlineFilled: typeof import("../assets/icons/Skip--back--outline--filled")['default']
export const SvgoIconsSkipBackOutlineSolid: typeof import("../assets/icons/Skip--back--outline--solid")['default']
export const SvgoIconsSkipBackOutline: typeof import("../assets/icons/Skip--back--outline")['default']
export const SvgoIconsSkipBackSolidFilled: typeof import("../assets/icons/Skip--back--solid--filled")['default']
export const SvgoIconsSkipBack: typeof import("../assets/icons/Skip--back")['default']
export const SvgoIconsSkipForwardFilled: typeof import("../assets/icons/Skip--forward--filled")['default']
export const SvgoIconsSkipForwardOutlineFilled: typeof import("../assets/icons/Skip--forward--outline--filled")['default']
export const SvgoIconsSkipForwardOutlineSolid: typeof import("../assets/icons/Skip--forward--outline--solid")['default']
export const SvgoIconsSkipForwardOutline: typeof import("../assets/icons/Skip--forward--outline")['default']
export const SvgoIconsSkipForwardSolidFilled: typeof import("../assets/icons/Skip--forward--solid--filled")['default']
export const SvgoIconsSkipForward: typeof import("../assets/icons/Skip--forward")['default']
export const SvgoIconsSleet: typeof import("../assets/icons/Sleet")['default']
export const SvgoIconsSlisor: typeof import("../assets/icons/Slisor")['default']
export const SvgoIconsSmell: typeof import("../assets/icons/Smell")['default']
export const SvgoIconsSmoke: typeof import("../assets/icons/Smoke")['default']
export const SvgoIconsSmoothingCursor: typeof import("../assets/icons/Smoothing--cursor")['default']
export const SvgoIconsSmoothing: typeof import("../assets/icons/Smoothing")['default']
export const SvgoIconsSnooze: typeof import("../assets/icons/Snooze")['default']
export const SvgoIconsSnowBlizzard: typeof import("../assets/icons/Snow--blizzard")['default']
export const SvgoIconsSnowHeavy: typeof import("../assets/icons/Snow--heavy")['default']
export const SvgoIconsSnowScatteredNight: typeof import("../assets/icons/Snow--scattered--night")['default']
export const SvgoIconsSnowScattered: typeof import("../assets/icons/Snow--scattered")['default']
export const SvgoIconsSnowDensity: typeof import("../assets/icons/Snow-density")['default']
export const SvgoIconsSnow: typeof import("../assets/icons/Snow")['default']
export const SvgoIconsSnowflake: typeof import("../assets/icons/Snowflake")['default']
export const SvgoIconsSoccer: typeof import("../assets/icons/Soccer")['default']
export const SvgoIconsSoftwareResourceCluster: typeof import("../assets/icons/Software-resource--cluster")['default']
export const SvgoIconsSoftwareResourceResource: typeof import("../assets/icons/Software-resource--resource")['default']
export const SvgoIconsSoftwareResource: typeof import("../assets/icons/Software-resource")['default']
export const SvgoIconsSoilMoistureField: typeof import("../assets/icons/Soil-moisture--field")['default']
export const SvgoIconsSoilMoistureGlobal: typeof import("../assets/icons/Soil-moisture--global")['default']
export const SvgoIconsSoilMoisture: typeof import("../assets/icons/Soil-moisture")['default']
export const SvgoIconsSoilTemperatureField: typeof import("../assets/icons/Soil-temperature--field")['default']
export const SvgoIconsSoilTemperatureGlobal: typeof import("../assets/icons/Soil-temperature--global")['default']
export const SvgoIconsSoilTemperature: typeof import("../assets/icons/Soil-temperature")['default']
export const SvgoIconsSolarPanel: typeof import("../assets/icons/Solar-panel")['default']
export const SvgoIconsSortAscending: typeof import("../assets/icons/Sort--ascending")['default']
export const SvgoIconsSortDescending: typeof import("../assets/icons/Sort--descending")['default']
export const SvgoIconsSortRemove: typeof import("../assets/icons/Sort--remove")['default']
export const SvgoIconsSpellCheck: typeof import("../assets/icons/Spell-check")['default']
export const SvgoIconsSpineLabel: typeof import("../assets/icons/Spine-label")['default']
export const SvgoIconsSplitDiscard: typeof import("../assets/icons/Split--discard")['default']
export const SvgoIconsSplitScreen: typeof import("../assets/icons/Split-screen")['default']
export const SvgoIconsSplit: typeof import("../assets/icons/Split")['default']
export const SvgoIconsSprayPaint: typeof import("../assets/icons/Spray-paint")['default']
export const SvgoIconsSprout: typeof import("../assets/icons/Sprout")['default']
export const SvgoIconsSql: typeof import("../assets/icons/Sql")['default']
export const SvgoIconsSquareOutline: typeof import("../assets/icons/Square--outline")['default']
export const SvgoIconsSquareSolid: typeof import("../assets/icons/Square--solid")['default']
export const SvgoIconsStackLimitation: typeof import("../assets/icons/Stack-limitation")['default']
export const SvgoIconsStackedMove: typeof import("../assets/icons/Stacked-move")['default']
export const SvgoIconsStackedScrolling1: typeof import("../assets/icons/Stacked-scrolling--1")['default']
export const SvgoIconsStackedScrolling2: typeof import("../assets/icons/Stacked-scrolling--2")['default']
export const SvgoIconsStamp: typeof import("../assets/icons/Stamp")['default']
export const SvgoIconsStarFilled: typeof import("../assets/icons/Star--filled")['default']
export const SvgoIconsStarHalf: typeof import("../assets/icons/Star--half")['default']
export const SvgoIconsStarReview: typeof import("../assets/icons/Star--review")['default']
export const SvgoIconsStar: typeof import("../assets/icons/Star")['default']
export const SvgoIconsStatusAcknowledge: typeof import("../assets/icons/Status--acknowledge")['default']
export const SvgoIconsStatusPartialFail: typeof import("../assets/icons/Status--partial-fail")['default']
export const SvgoIconsStatusResolved: typeof import("../assets/icons/Status--resolved")['default']
export const SvgoIconsStayInside: typeof import("../assets/icons/Stay-inside")['default']
export const SvgoIconsStemLeafPlot: typeof import("../assets/icons/Stem-leaf-plot")['default']
export const SvgoIconsStethoscope: typeof import("../assets/icons/Stethoscope")['default']
export const SvgoIconsStopFilledAlt: typeof import("../assets/icons/Stop--filled--alt")['default']
export const SvgoIconsStopFilled: typeof import("../assets/icons/Stop--filled")['default']
export const SvgoIconsStopOutlineFilled: typeof import("../assets/icons/Stop--outline--filled")['default']
export const SvgoIconsStopOutline: typeof import("../assets/icons/Stop--outline")['default']
export const SvgoIconsStopSignFilled: typeof import("../assets/icons/Stop-sign--filled")['default']
export const SvgoIconsStopSign: typeof import("../assets/icons/Stop-sign")['default']
export const SvgoIconsStop: typeof import("../assets/icons/Stop")['default']
export const SvgoIconsStoragePool: typeof import("../assets/icons/Storage-pool")['default']
export const SvgoIconsStorageRequest: typeof import("../assets/icons/Storage-request")['default']
export const SvgoIconsStore: typeof import("../assets/icons/Store")['default']
export const SvgoIconsStormTracker: typeof import("../assets/icons/Storm-tracker")['default']
export const SvgoIconsStrategyPlay: typeof import("../assets/icons/Strategy-play")['default']
export const SvgoIconsStrawberry: typeof import("../assets/icons/Strawberry")['default']
export const SvgoIconsStressBreathEditor: typeof import("../assets/icons/Stress-breath-editor")['default']
export const SvgoIconsStudyNext: typeof import("../assets/icons/Study--next")['default']
export const SvgoIconsStudyPrevious: typeof import("../assets/icons/Study--previous")['default']
export const SvgoIconsStudyRead: typeof import("../assets/icons/Study--read")['default']
export const SvgoIconsStudySkip: typeof import("../assets/icons/Study--skip")['default']
export const SvgoIconsStudyTransfer: typeof import("../assets/icons/Study--transfer")['default']
export const SvgoIconsStudyUnread: typeof import("../assets/icons/Study--unread")['default']
export const SvgoIconsStudyView: typeof import("../assets/icons/Study--view")['default']
export const SvgoIconsSubVolume: typeof import("../assets/icons/Sub-volume")['default']
export const SvgoIconsSubclassification: typeof import("../assets/icons/Subclassification")['default']
export const SvgoIconsSubdirectory: typeof import("../assets/icons/Subdirectory")['default']
export const SvgoIconsSubflowLocal: typeof import("../assets/icons/Subflow--local")['default']
export const SvgoIconsSubflow: typeof import("../assets/icons/Subflow")['default']
export const SvgoIconsSubjectDefinition: typeof import("../assets/icons/Subject--definition")['default']
export const SvgoIconsSubjectUsage: typeof import("../assets/icons/Subject--usage")['default']
export const SvgoIconsSubnetAclRules: typeof import("../assets/icons/Subnet-acl-rules")['default']
export const SvgoIconsSubtractAlt: typeof import("../assets/icons/Subtract--alt")['default']
export const SvgoIconsSubtractFilled: typeof import("../assets/icons/Subtract--filled")['default']
export const SvgoIconsSubtractLarge: typeof import("../assets/icons/Subtract--large")['default']
export const SvgoIconsSubtract: typeof import("../assets/icons/Subtract")['default']
export const SvgoIconsSuccession: typeof import("../assets/icons/Succession")['default']
export const SvgoIconsSummaryKPIMirror: typeof import("../assets/icons/Summary--KPI--mirror")['default']
export const SvgoIconsSummaryKpi: typeof import("../assets/icons/Summary--kpi")['default']
export const SvgoIconsSun: typeof import("../assets/icons/Sun")['default']
export const SvgoIconsSunrise: typeof import("../assets/icons/Sunrise")['default']
export const SvgoIconsSunset: typeof import("../assets/icons/Sunset")['default']
export const SvgoIconsSupportVectorMachine: typeof import("../assets/icons/Support-vector-machine")['default']
export const SvgoIconsSustainability: typeof import("../assets/icons/Sustainability")['default']
export const SvgoIconsSvg: typeof import("../assets/icons/Svg")['default']
export const SvgoIconsSwim: typeof import("../assets/icons/Swim")['default']
export const SvgoIconsSwitchLayer2: typeof import("../assets/icons/Switch-layer-2")['default']
export const SvgoIconsSwitchLayer3: typeof import("../assets/icons/Switch-layer-3")['default']
export const SvgoIconsSwitcher: typeof import("../assets/icons/Switcher")['default']
export const SvgoIconsSyncSettings: typeof import("../assets/icons/Sync-settings")['default']
export const SvgoIconsSysProvision: typeof import("../assets/icons/Sys-provision")['default']
export const SvgoIconsSysplexDistributor: typeof import("../assets/icons/Sysplex--distributor")['default']
export const SvgoIconsTAlt: typeof import("../assets/icons/T--alt")['default']
export const SvgoIconsT: typeof import("../assets/icons/T")['default']
export const SvgoIconsTableAlias: typeof import("../assets/icons/Table--alias")['default']
export const SvgoIconsTableBuilt: typeof import("../assets/icons/Table--built")['default']
export const SvgoIconsTableShortcut: typeof import("../assets/icons/Table--shortcut")['default']
export const SvgoIconsTableSplit: typeof import("../assets/icons/Table--split")['default']
export const SvgoIconsTableOfContents: typeof import("../assets/icons/Table-of-contents")['default']
export const SvgoIconsTable: typeof import("../assets/icons/Table")['default']
export const SvgoIconsTabletLandscape: typeof import("../assets/icons/Tablet--landscape")['default']
export const SvgoIconsTablet: typeof import("../assets/icons/Tablet")['default']
export const SvgoIconsTagEdit: typeof import("../assets/icons/Tag--edit")['default']
export const SvgoIconsTagExport: typeof import("../assets/icons/Tag--export")['default']
export const SvgoIconsTagGroup: typeof import("../assets/icons/Tag--group")['default']
export const SvgoIconsTagImport: typeof import("../assets/icons/Tag--import")['default']
export const SvgoIconsTagNone: typeof import("../assets/icons/Tag--none")['default']
export const SvgoIconsTag: typeof import("../assets/icons/Tag")['default']
export const SvgoIconsTank: typeof import("../assets/icons/Tank")['default']
export const SvgoIconsTaskAdd: typeof import("../assets/icons/Task--add")['default']
export const SvgoIconsTaskApproved: typeof import("../assets/icons/Task--approved")['default']
export const SvgoIconsTaskAssetView: typeof import("../assets/icons/Task--asset-view")['default']
export const SvgoIconsTaskComplete: typeof import("../assets/icons/Task--complete")['default']
export const SvgoIconsTaskLocation: typeof import("../assets/icons/Task--location")['default']
export const SvgoIconsTaskRemove: typeof import("../assets/icons/Task--remove")['default']
export const SvgoIconsTaskSettings: typeof import("../assets/icons/Task--settings")['default']
export const SvgoIconsTaskStar: typeof import("../assets/icons/Task--star")['default']
export const SvgoIconsTaskTools: typeof import("../assets/icons/Task--tools")['default']
export const SvgoIconsTaskView: typeof import("../assets/icons/Task--view")['default']
export const SvgoIconsTask: typeof import("../assets/icons/Task")['default']
export const SvgoIconsTaste: typeof import("../assets/icons/Taste")['default']
export const SvgoIconsTaxi: typeof import("../assets/icons/Taxi")['default']
export const SvgoIconsTcpIpService: typeof import("../assets/icons/Tcp-ip-service")['default']
export const SvgoIconsTemperatureCelsiusAlt: typeof import("../assets/icons/Temperature--celsius--alt")['default']
export const SvgoIconsTemperatureCelsius: typeof import("../assets/icons/Temperature--celsius")['default']
export const SvgoIconsTemperatureFahrenheitAlt: typeof import("../assets/icons/Temperature--fahrenheit--alt")['default']
export const SvgoIconsTemperatureFahrenheit: typeof import("../assets/icons/Temperature--fahrenheit")['default']
export const SvgoIconsTemperatureFeelsLike: typeof import("../assets/icons/Temperature--feels-like")['default']
export const SvgoIconsTemperatureFrigid: typeof import("../assets/icons/Temperature--frigid")['default']
export const SvgoIconsTemperatureHot: typeof import("../assets/icons/Temperature--hot")['default']
export const SvgoIconsTemperatureInversion: typeof import("../assets/icons/Temperature--inversion")['default']
export const SvgoIconsTemperatureMax: typeof import("../assets/icons/Temperature--max")['default']
export const SvgoIconsTemperatureMin: typeof import("../assets/icons/Temperature--min")['default']
export const SvgoIconsTemperatureWater: typeof import("../assets/icons/Temperature--water")['default']
export const SvgoIconsTemperature: typeof import("../assets/icons/Temperature")['default']
export const SvgoIconsTemplate: typeof import("../assets/icons/Template")['default']
export const SvgoIconsTennisBall: typeof import("../assets/icons/Tennis-ball")['default']
export const SvgoIconsTennis: typeof import("../assets/icons/Tennis")['default']
export const SvgoIconsTermReference: typeof import("../assets/icons/Term--reference")['default']
export const SvgoIconsTerm: typeof import("../assets/icons/Term")['default']
export const SvgoIconsTerminal3270: typeof import("../assets/icons/Terminal--3270")['default']
export const SvgoIconsTerminal: typeof import("../assets/icons/Terminal")['default']
export const SvgoIconsTestTool: typeof import("../assets/icons/Test-tool")['default']
export const SvgoIconsTextAlignCenter: typeof import("../assets/icons/Text--align--center")['default']
export const SvgoIconsTextAlignJustify: typeof import("../assets/icons/Text--align--justify")['default']
export const SvgoIconsTextAlignLeft: typeof import("../assets/icons/Text--align--left")['default']
export const SvgoIconsTextAlignMixed: typeof import("../assets/icons/Text--align--mixed")['default']
export const SvgoIconsTextAlignRight: typeof import("../assets/icons/Text--align--right")['default']
export const SvgoIconsTextAllCaps: typeof import("../assets/icons/Text--all-caps")['default']
export const SvgoIconsTextBold: typeof import("../assets/icons/Text--bold")['default']
export const SvgoIconsTextClearFormat: typeof import("../assets/icons/Text--clear-format")['default']
export const SvgoIconsTextColor: typeof import("../assets/icons/Text--color")['default']
export const SvgoIconsTextCreation: typeof import("../assets/icons/Text--creation")['default']
export const SvgoIconsTextFill: typeof import("../assets/icons/Text--fill")['default']
export const SvgoIconsTextFont: typeof import("../assets/icons/Text--font")['default']
export const SvgoIconsTextFootnote: typeof import("../assets/icons/Text--footnote")['default']
export const SvgoIconsTextHighlight: typeof import("../assets/icons/Text--highlight")['default']
export const SvgoIconsTextIndentLess: typeof import("../assets/icons/Text--indent--less")['default']
export const SvgoIconsTextIndentMore: typeof import("../assets/icons/Text--indent--more")['default']
export const SvgoIconsTextIndent: typeof import("../assets/icons/Text--indent")['default']
export const SvgoIconsTextItalic: typeof import("../assets/icons/Text--italic")['default']
export const SvgoIconsTextKerning: typeof import("../assets/icons/Text--kerning")['default']
export const SvgoIconsTextLeading: typeof import("../assets/icons/Text--leading")['default']
export const SvgoIconsTextLineSpacing: typeof import("../assets/icons/Text--line-spacing")['default']
export const SvgoIconsTextLongParagraph: typeof import("../assets/icons/Text--long-paragraph")['default']
export const SvgoIconsTextNewLine: typeof import("../assets/icons/Text--new-line")['default']
export const SvgoIconsTextScale: typeof import("../assets/icons/Text--scale")['default']
export const SvgoIconsTextSelection: typeof import("../assets/icons/Text--selection")['default']
export const SvgoIconsTextShortParagraph: typeof import("../assets/icons/Text--short-paragraph")['default']
export const SvgoIconsTextSmallCaps: typeof import("../assets/icons/Text--small-caps")['default']
export const SvgoIconsTextStrikethrough: typeof import("../assets/icons/Text--strikethrough")['default']
export const SvgoIconsTextSubscript: typeof import("../assets/icons/Text--subscript")['default']
export const SvgoIconsTextSuperscript: typeof import("../assets/icons/Text--superscript")['default']
export const SvgoIconsTextTracking: typeof import("../assets/icons/Text--tracking")['default']
export const SvgoIconsTextUnderline: typeof import("../assets/icons/Text--underline")['default']
export const SvgoIconsTextVerticalAlignment: typeof import("../assets/icons/Text--vertical-alignment")['default']
export const SvgoIconsTextWrap: typeof import("../assets/icons/Text--wrap")['default']
export const SvgoIconsTextAnnotationToggle: typeof import("../assets/icons/Text-annotation-toggle")['default']
export const SvgoIconsTextLinkAnalysis: typeof import("../assets/icons/Text-link--analysis")['default']
export const SvgoIconsTextLink: typeof import("../assets/icons/Text-link")['default']
export const SvgoIconsTextMiningApplier: typeof import("../assets/icons/Text-mining--applier")['default']
export const SvgoIconsTextMining: typeof import("../assets/icons/Text-mining")['default']
export const SvgoIconsTheater: typeof import("../assets/icons/Theater")['default']
export const SvgoIconsThisSideUp: typeof import("../assets/icons/This-side-up")['default']
export const SvgoIconsThreshold: typeof import("../assets/icons/Threshold")['default']
export const SvgoIconsThumbnail1: typeof import("../assets/icons/Thumbnail--1")['default']
export const SvgoIconsThumbnail2: typeof import("../assets/icons/Thumbnail--2")['default']
export const SvgoIconsThumbnailPreview: typeof import("../assets/icons/Thumbnail-preview")['default']
export const SvgoIconsThumbsDownFilled: typeof import("../assets/icons/Thumbs-down--filled")['default']
export const SvgoIconsThumbsDown: typeof import("../assets/icons/Thumbs-down")['default']
export const SvgoIconsThumbsUpFilled: typeof import("../assets/icons/Thumbs-up--filled")['default']
export const SvgoIconsThumbsUp: typeof import("../assets/icons/Thumbs-up")['default']
export const SvgoIconsThunderstormScatteredNight: typeof import("../assets/icons/Thunderstorm--scattered--night")['default']
export const SvgoIconsThunderstormScattered: typeof import("../assets/icons/Thunderstorm--scattered")['default']
export const SvgoIconsThunderstormSevere: typeof import("../assets/icons/Thunderstorm--severe")['default']
export const SvgoIconsThunderstormStrong: typeof import("../assets/icons/Thunderstorm--strong")['default']
export const SvgoIconsThunderstorm: typeof import("../assets/icons/Thunderstorm")['default']
export const SvgoIconsTicket: typeof import("../assets/icons/Ticket")['default']
export const SvgoIconsTides: typeof import("../assets/icons/Tides")['default']
export const SvgoIconsTif: typeof import("../assets/icons/Tif")['default']
export const SvgoIconsTimeFilled: typeof import("../assets/icons/Time--filled")['default']
export const SvgoIconsTimePlot: typeof import("../assets/icons/Time-plot")['default']
export const SvgoIconsTime: typeof import("../assets/icons/Time")['default']
export const SvgoIconsTimer: typeof import("../assets/icons/Timer")['default']
export const SvgoIconsTimingBelt: typeof import("../assets/icons/Timing-belt")['default']
export const SvgoIconsToolBox: typeof import("../assets/icons/Tool-box")['default']
export const SvgoIconsToolKit: typeof import("../assets/icons/Tool-kit")['default']
export const SvgoIconsToolsAlt: typeof import("../assets/icons/Tools--alt")['default']
export const SvgoIconsTools: typeof import("../assets/icons/Tools")['default']
export const SvgoIconsTornadoWarning: typeof import("../assets/icons/Tornado-warning")['default']
export const SvgoIconsTornado: typeof import("../assets/icons/Tornado")['default']
export const SvgoIconsTouch1Filled: typeof import("../assets/icons/Touch--1--filled")['default']
export const SvgoIconsTouch1DownFilled: typeof import("../assets/icons/Touch--1-down--filled")['default']
export const SvgoIconsTouch1Down: typeof import("../assets/icons/Touch--1-down")['default']
export const SvgoIconsTouch1: typeof import("../assets/icons/Touch--1")['default']
export const SvgoIconsTouch2Filled: typeof import("../assets/icons/Touch--2--filled")['default']
export const SvgoIconsTouch2: typeof import("../assets/icons/Touch--2")['default']
export const SvgoIconsTouchInteraction: typeof import("../assets/icons/Touch--interaction")['default']
export const SvgoIconsTour: typeof import("../assets/icons/Tour")['default']
export const SvgoIconsTrafficEvent: typeof import("../assets/icons/Traffic--event")['default']
export const SvgoIconsTrafficFlowIncident: typeof import("../assets/icons/Traffic--flow-incident")['default']
export const SvgoIconsTrafficFlow: typeof import("../assets/icons/Traffic--flow")['default']
export const SvgoIconsTrafficIncident: typeof import("../assets/icons/Traffic--incident")['default']
export const SvgoIconsTrafficWeatherIncident: typeof import("../assets/icons/Traffic--weather-incident")['default']
export const SvgoIconsTrafficCone: typeof import("../assets/icons/Traffic-cone")['default']
export const SvgoIconsTrainHeart: typeof import("../assets/icons/Train--heart")['default']
export const SvgoIconsTrainProfile: typeof import("../assets/icons/Train--profile")['default']
export const SvgoIconsTrainSpeed: typeof import("../assets/icons/Train--speed")['default']
export const SvgoIconsTrainTicket: typeof import("../assets/icons/Train--ticket")['default']
export const SvgoIconsTrainTime: typeof import("../assets/icons/Train--time")['default']
export const SvgoIconsTrain: typeof import("../assets/icons/Train")['default']
export const SvgoIconsTram: typeof import("../assets/icons/Tram")['default']
export const SvgoIconsTransformBinary: typeof import("../assets/icons/Transform--binary")['default']
export const SvgoIconsTransformCode: typeof import("../assets/icons/Transform--code")['default']
export const SvgoIconsTransformInstructions: typeof import("../assets/icons/Transform--instructions")['default']
export const SvgoIconsTransformLanguage: typeof import("../assets/icons/Transform--language")['default']
export const SvgoIconsTransgender: typeof import("../assets/icons/Transgender")['default']
export const SvgoIconsTranslate: typeof import("../assets/icons/Translate")['default']
export const SvgoIconsTransmissionLte: typeof import("../assets/icons/Transmission-lte")['default']
export const SvgoIconsTranspose: typeof import("../assets/icons/Transpose")['default']
export const SvgoIconsTrashCan: typeof import("../assets/icons/Trash-can")['default']
export const SvgoIconsTreeFallRisk: typeof import("../assets/icons/Tree--fall-risk")['default']
export const SvgoIconsTreeViewAlt: typeof import("../assets/icons/Tree-view--alt")['default']
export const SvgoIconsTreeView: typeof import("../assets/icons/Tree-view")['default']
export const SvgoIconsTree: typeof import("../assets/icons/Tree")['default']
export const SvgoIconsTriangleDownOutline: typeof import("../assets/icons/Triangle--down--outline")['default']
export const SvgoIconsTriangleDownSolid: typeof import("../assets/icons/Triangle--down--solid")['default']
export const SvgoIconsTriangleLeftOutline: typeof import("../assets/icons/Triangle--left--outline")['default']
export const SvgoIconsTriangleLeftSolid: typeof import("../assets/icons/Triangle--left--solid")['default']
export const SvgoIconsTriangleOutline: typeof import("../assets/icons/Triangle--outline")['default']
export const SvgoIconsTriangleRightOutline: typeof import("../assets/icons/Triangle--right--outline")['default']
export const SvgoIconsTriangleRightSolid: typeof import("../assets/icons/Triangle--right--solid")['default']
export const SvgoIconsTriangleSolid: typeof import("../assets/icons/Triangle--solid")['default']
export const SvgoIconsTrophyFilled: typeof import("../assets/icons/Trophy--filled")['default']
export const SvgoIconsTrophy: typeof import("../assets/icons/Trophy")['default']
export const SvgoIconsTropicalStormModelTracks: typeof import("../assets/icons/Tropical-storm--model-tracks")['default']
export const SvgoIconsTropicalStormTracks: typeof import("../assets/icons/Tropical-storm--tracks")['default']
export const SvgoIconsTropicalStorm: typeof import("../assets/icons/Tropical-storm")['default']
export const SvgoIconsTropicalWarning: typeof import("../assets/icons/Tropical-warning")['default']
export const SvgoIconsTsq: typeof import("../assets/icons/Tsq")['default']
export const SvgoIconsTsunami: typeof import("../assets/icons/Tsunami")['default']
export const SvgoIconsTsv: typeof import("../assets/icons/Tsv")['default']
export const SvgoIconsTuning: typeof import("../assets/icons/Tuning")['default']
export const SvgoIconsTwoFactorAuthentication: typeof import("../assets/icons/Two-factor-authentication")['default']
export const SvgoIconsTwoPersonLift: typeof import("../assets/icons/Two-person-lift")['default']
export const SvgoIconsTxtReference: typeof import("../assets/icons/Txt--reference")['default']
export const SvgoIconsTxt: typeof import("../assets/icons/Txt")['default']
export const SvgoIconsTypePattern: typeof import("../assets/icons/Type-pattern")['default']
export const SvgoIconsTypes: typeof import("../assets/icons/Types")['default']
export const SvgoIconsU1: typeof import("../assets/icons/U1")['default']
export const SvgoIconsU2: typeof import("../assets/icons/U2")['default']
export const SvgoIconsU3: typeof import("../assets/icons/U3")['default']
export const SvgoIconsURL: typeof import("../assets/icons/URL")['default']
export const SvgoIconsUmbrella: typeof import("../assets/icons/Umbrella")['default']
export const SvgoIconsUndefinedFilled: typeof import("../assets/icons/Undefined--filled")['default']
export const SvgoIconsUndefined: typeof import("../assets/icons/Undefined")['default']
export const SvgoIconsUndo: typeof import("../assets/icons/Undo")['default']
export const SvgoIconsUngroupObjects: typeof import("../assets/icons/Ungroup-objects")['default']
export const SvgoIconsUnknownFilled: typeof import("../assets/icons/Unknown--filled")['default']
export const SvgoIconsUnknown: typeof import("../assets/icons/Unknown")['default']
export const SvgoIconsUnlink: typeof import("../assets/icons/Unlink")['default']
export const SvgoIconsUnlocked: typeof import("../assets/icons/Unlocked")['default']
export const SvgoIconsUnsaved: typeof import("../assets/icons/Unsaved")['default']
export const SvgoIconsUpToTop: typeof import("../assets/icons/Up-to-top")['default']
export const SvgoIconsUpdateNow: typeof import("../assets/icons/Update-now")['default']
export const SvgoIconsUpgrade: typeof import("../assets/icons/Upgrade")['default']
export const SvgoIconsUpload: typeof import("../assets/icons/Upload")['default']
export const SvgoIconsUpstream: typeof import("../assets/icons/Upstream")['default']
export const SvgoIconsUsageIncludedUseCase: typeof import("../assets/icons/Usage--included-use-case")['default']
export const SvgoIconsUsb: typeof import("../assets/icons/Usb")['default']
export const SvgoIconsUseCaseDefinition: typeof import("../assets/icons/Use-case--definition")['default']
export const SvgoIconsUseCaseUsage: typeof import("../assets/icons/Use-case--usage")['default']
export const SvgoIconsUserAccessLocked: typeof import("../assets/icons/User--access-locked")['default']
export const SvgoIconsUserAccessUnlocked: typeof import("../assets/icons/User--access-unlocked")['default']
export const SvgoIconsUserAccess: typeof import("../assets/icons/User--access")['default']
export const SvgoIconsUserActivity: typeof import("../assets/icons/User--activity")['default']
export const SvgoIconsUserAdmin: typeof import("../assets/icons/User--admin")['default']
export const SvgoIconsUserAvatarFilledAlt: typeof import("../assets/icons/User--avatar--filled--alt")['default']
export const SvgoIconsUserAvatarFilled: typeof import("../assets/icons/User--avatar--filled")['default']
export const SvgoIconsUserAvatar: typeof import("../assets/icons/User--avatar")['default']
export const SvgoIconsUserCertification: typeof import("../assets/icons/User--certification")['default']
export const SvgoIconsUserData: typeof import("../assets/icons/User--data")['default']
export const SvgoIconsUserFavoriteAltFilled: typeof import("../assets/icons/User--favorite--alt--filled")['default']
export const SvgoIconsUserFavoriteAlt: typeof import("../assets/icons/User--favorite--alt")['default']
export const SvgoIconsUserFavorite: typeof import("../assets/icons/User--favorite")['default']
export const SvgoIconsUserFeedback: typeof import("../assets/icons/User--feedback")['default']
export const SvgoIconsUserFilled: typeof import("../assets/icons/User--filled")['default']
export const SvgoIconsUserFollow: typeof import("../assets/icons/User--follow")['default']
export const SvgoIconsUserIdentification: typeof import("../assets/icons/User--identification")['default']
export const SvgoIconsUserMilitary: typeof import("../assets/icons/User--military")['default']
export const SvgoIconsUserMultiple: typeof import("../assets/icons/User--multiple")['default']
export const SvgoIconsUserOnline: typeof import("../assets/icons/User--online")['default']
export const SvgoIconsUserProfile: typeof import("../assets/icons/User--profile")['default']
export const SvgoIconsUserRole: typeof import("../assets/icons/User--role")['default']
export const SvgoIconsUserServiceDesk: typeof import("../assets/icons/User--service-desk")['default']
export const SvgoIconsUserService: typeof import("../assets/icons/User--service")['default']
export const SvgoIconsUserSettings: typeof import("../assets/icons/User--settings")['default']
export const SvgoIconsUserSimulation: typeof import("../assets/icons/User--simulation")['default']
export const SvgoIconsUserSpeaker: typeof import("../assets/icons/User--speaker")['default']
export const SvgoIconsUserSponsor: typeof import("../assets/icons/User--sponsor")['default']
export const SvgoIconsUserXRay: typeof import("../assets/icons/User--x-ray")['default']
export const SvgoIconsUserProfileAlt: typeof import("../assets/icons/User-profile--alt")['default']
export const SvgoIconsUser: typeof import("../assets/icons/User")['default']
export const SvgoIconsUvIndexAlt: typeof import("../assets/icons/Uv-index--alt")['default']
export const SvgoIconsUvIndexFilled: typeof import("../assets/icons/Uv-index--filled")['default']
export const SvgoIconsUvIndex: typeof import("../assets/icons/Uv-index")['default']
export const SvgoIconsValueVariable: typeof import("../assets/icons/Value--variable")['default']
export const SvgoIconsVan: typeof import("../assets/icons/Van")['default']
export const SvgoIconsVegetationAsset: typeof import("../assets/icons/Vegetation--asset")['default']
export const SvgoIconsVegetationEncroachment: typeof import("../assets/icons/Vegetation--encroachment")['default']
export const SvgoIconsVegetationHeight: typeof import("../assets/icons/Vegetation--height")['default']
export const SvgoIconsVehicleApi: typeof import("../assets/icons/Vehicle--api")['default']
export const SvgoIconsVehicleConnected: typeof import("../assets/icons/Vehicle--connected")['default']
export const SvgoIconsVehicleInsights: typeof import("../assets/icons/Vehicle--insights")['default']
export const SvgoIconsVehicleServices: typeof import("../assets/icons/Vehicle--services")['default']
export const SvgoIconsVersionMajor: typeof import("../assets/icons/Version--major")['default']
export const SvgoIconsVersionMinor: typeof import("../assets/icons/Version--minor")['default']
export const SvgoIconsVersionPatch: typeof import("../assets/icons/Version--patch")['default']
export const SvgoIconsVersion: typeof import("../assets/icons/Version")['default']
export const SvgoIconsVerticalView: typeof import("../assets/icons/Vertical-view")['default']
export const SvgoIconsVideoAdd: typeof import("../assets/icons/Video--add")['default']
export const SvgoIconsVideoChat: typeof import("../assets/icons/Video--chat")['default']
export const SvgoIconsVideoFilled: typeof import("../assets/icons/Video--filled")['default']
export const SvgoIconsVideoOffFilled: typeof import("../assets/icons/Video--off--filled")['default']
export const SvgoIconsVideoOff: typeof import("../assets/icons/Video--off")['default']
export const SvgoIconsVideoPlayer: typeof import("../assets/icons/Video-player")['default']
export const SvgoIconsVideo: typeof import("../assets/icons/Video")['default']
export const SvgoIconsViewFilled: typeof import("../assets/icons/View--filled")['default']
export const SvgoIconsViewMode1: typeof import("../assets/icons/View--mode-1")['default']
export const SvgoIconsViewMode2: typeof import("../assets/icons/View--mode-2")['default']
export const SvgoIconsViewOffFilled: typeof import("../assets/icons/View--off--filled")['default']
export const SvgoIconsViewOff: typeof import("../assets/icons/View--off")['default']
export const SvgoIconsViewNext: typeof import("../assets/icons/View-next")['default']
export const SvgoIconsView: typeof import("../assets/icons/View")['default']
export const SvgoIconsVirtualColumnKey: typeof import("../assets/icons/Virtual-column--key")['default']
export const SvgoIconsVirtualColumn: typeof import("../assets/icons/Virtual-column")['default']
export const SvgoIconsVirtualDesktop: typeof import("../assets/icons/Virtual-desktop")['default']
export const SvgoIconsVirtualMachine: typeof import("../assets/icons/Virtual-machine")['default']
export const SvgoIconsVirtualPrivateCloud: typeof import("../assets/icons/Virtual-private-cloud")['default']
export const SvgoIconsVisualRecognition: typeof import("../assets/icons/Visual-recognition")['default']
export const SvgoIconsVlanIBM: typeof import("../assets/icons/Vlan--IBM")['default']
export const SvgoIconsVlan: typeof import("../assets/icons/Vlan")['default']
export const SvgoIconsVmdkDisk: typeof import("../assets/icons/Vmdk-disk")['default']
export const SvgoIconsVoiceActivate: typeof import("../assets/icons/Voice-activate")['default']
export const SvgoIconsVoicemail: typeof import("../assets/icons/Voicemail")['default']
export const SvgoIconsVolumeBlockStorage: typeof import("../assets/icons/Volume--block-storage")['default']
export const SvgoIconsVolumeDownAlt: typeof import("../assets/icons/Volume--down--alt")['default']
export const SvgoIconsVolumeDownFilledAlt: typeof import("../assets/icons/Volume--down--filled--alt")['default']
export const SvgoIconsVolumeDownFilled: typeof import("../assets/icons/Volume--down--filled")['default']
export const SvgoIconsVolumeDown: typeof import("../assets/icons/Volume--down")['default']
export const SvgoIconsVolumeFileStorage: typeof import("../assets/icons/Volume--file-storage")['default']
export const SvgoIconsVolumeMuteFilled: typeof import("../assets/icons/Volume--mute--filled")['default']
export const SvgoIconsVolumeMute: typeof import("../assets/icons/Volume--mute")['default']
export const SvgoIconsVolumeObjectStorage: typeof import("../assets/icons/Volume--object-storage")['default']
export const SvgoIconsVolumeUpAlt: typeof import("../assets/icons/Volume--up--alt")['default']
export const SvgoIconsVolumeUpFilledAlt: typeof import("../assets/icons/Volume--up--filled--alt")['default']
export const SvgoIconsVolumeUpFilled: typeof import("../assets/icons/Volume--up--filled")['default']
export const SvgoIconsVolumeUp: typeof import("../assets/icons/Volume--up")['default']
export const SvgoIconsVpnConnection: typeof import("../assets/icons/Vpn--connection")['default']
export const SvgoIconsVpnPolicy: typeof import("../assets/icons/Vpn--policy")['default']
export const SvgoIconsVpn: typeof import("../assets/icons/Vpn")['default']
export const SvgoIconsWallet: typeof import("../assets/icons/Wallet")['default']
export const SvgoIconsWarningAltFilled: typeof import("../assets/icons/Warning--alt--filled")['default']
export const SvgoIconsWarningAltInvertedFilled: typeof import("../assets/icons/Warning--alt-inverted--filled")['default']
export const SvgoIconsWarningAltInverted: typeof import("../assets/icons/Warning--alt-inverted")['default']
export const SvgoIconsWarningAlt: typeof import("../assets/icons/Warning--alt")['default']
export const SvgoIconsWarningDiamond: typeof import("../assets/icons/Warning--diamond")['default']
export const SvgoIconsWarningFilled: typeof import("../assets/icons/Warning--filled")['default']
export const SvgoIconsWarningHexFilled: typeof import("../assets/icons/Warning--hex--filled")['default']
export const SvgoIconsWarningHex: typeof import("../assets/icons/Warning--hex")['default']
export const SvgoIconsWarningMultiple: typeof import("../assets/icons/Warning--multiple")['default']
export const SvgoIconsWarningOther: typeof import("../assets/icons/Warning--other")['default']
export const SvgoIconsWarningSquareFilled: typeof import("../assets/icons/Warning-square--filled")['default']
export const SvgoIconsWarningSquare: typeof import("../assets/icons/Warning-square")['default']
export const SvgoIconsWarning: typeof import("../assets/icons/Warning")['default']
export const SvgoIconsWatch: typeof import("../assets/icons/Watch")['default']
export const SvgoIconsWatsonxAi: typeof import("../assets/icons/Watsonx-ai")['default']
export const SvgoIconsWatsonxData: typeof import("../assets/icons/Watsonx-data")['default']
export const SvgoIconsWatsonxGovernance: typeof import("../assets/icons/Watsonx-governance")['default']
export const SvgoIconsWatsonx: typeof import("../assets/icons/Watsonx")['default']
export const SvgoIconsWaveDirection: typeof import("../assets/icons/Wave-direction")['default']
export const SvgoIconsWaveHeight: typeof import("../assets/icons/Wave-height")['default']
export const SvgoIconsWavePeriod: typeof import("../assets/icons/Wave-period")['default']
export const SvgoIconsWeatherFrontCold: typeof import("../assets/icons/Weather-front--cold")['default']
export const SvgoIconsWeatherFrontStationary: typeof import("../assets/icons/Weather-front--stationary")['default']
export const SvgoIconsWeatherFrontWarm: typeof import("../assets/icons/Weather-front--warm")['default']
export const SvgoIconsWeatherStation: typeof import("../assets/icons/Weather-station")['default']
export const SvgoIconsWebServicesCluster: typeof import("../assets/icons/Web-services--cluster")['default']
export const SvgoIconsWebServicesContainer: typeof import("../assets/icons/Web-services--container")['default']
export const SvgoIconsWebServicesDefinition: typeof import("../assets/icons/Web-services--definition")['default']
export const SvgoIconsWebServicesService: typeof import("../assets/icons/Web-services--service")['default']
export const SvgoIconsWebServicesTaskDefinitionVersion: typeof import("../assets/icons/Web-services--task-definition-version")['default']
export const SvgoIconsWebServicesTask: typeof import("../assets/icons/Web-services--task")['default']
export const SvgoIconsWebhook: typeof import("../assets/icons/Webhook")['default']
export const SvgoIconsWebsheet: typeof import("../assets/icons/Websheet")['default']
export const SvgoIconsWheat: typeof import("../assets/icons/Wheat")['default']
export const SvgoIconsWhitePaper: typeof import("../assets/icons/White-paper")['default']
export const SvgoIconsWifiController: typeof import("../assets/icons/Wifi--controller")['default']
export const SvgoIconsWifiNotSecure: typeof import("../assets/icons/Wifi--not-secure")['default']
export const SvgoIconsWifiOff: typeof import("../assets/icons/Wifi--off")['default']
export const SvgoIconsWifiSecure: typeof import("../assets/icons/Wifi--secure")['default']
export const SvgoIconsWifiBridgeAlt: typeof import("../assets/icons/Wifi-bridge--alt")['default']
export const SvgoIconsWifiBridge: typeof import("../assets/icons/Wifi-bridge")['default']
export const SvgoIconsWifi: typeof import("../assets/icons/Wifi")['default']
export const SvgoIconsWikis: typeof import("../assets/icons/Wikis")['default']
export const SvgoIconsWindGusts: typeof import("../assets/icons/Wind-gusts")['default']
export const SvgoIconsWindPower: typeof import("../assets/icons/Wind-power")['default']
export const SvgoIconsWindStream: typeof import("../assets/icons/Wind-stream")['default']
export const SvgoIconsWindowAuto: typeof import("../assets/icons/Window--auto")['default']
export const SvgoIconsWindowBase: typeof import("../assets/icons/Window--base")['default']
export const SvgoIconsWindowBlackSaturation: typeof import("../assets/icons/Window--black-saturation")['default']
export const SvgoIconsWindowOverlay: typeof import("../assets/icons/Window--overlay")['default']
export const SvgoIconsWindowPreset: typeof import("../assets/icons/Window--preset")['default']
export const SvgoIconsWindyDust: typeof import("../assets/icons/Windy--dust")['default']
export const SvgoIconsWindySnow: typeof import("../assets/icons/Windy--snow")['default']
export const SvgoIconsWindyStrong: typeof import("../assets/icons/Windy--strong")['default']
export const SvgoIconsWindy: typeof import("../assets/icons/Windy")['default']
export const SvgoIconsWinterWarning: typeof import("../assets/icons/Winter-warning")['default']
export const SvgoIconsWintryMix: typeof import("../assets/icons/Wintry-mix")['default']
export const SvgoIconsWirelessCheckout: typeof import("../assets/icons/Wireless-checkout")['default']
export const SvgoIconsWmv: typeof import("../assets/icons/Wmv")['default']
export const SvgoIconsWordCloud: typeof import("../assets/icons/Word-cloud")['default']
export const SvgoIconsWorkflowAutomation: typeof import("../assets/icons/Workflow-automation")['default']
export const SvgoIconsWorkspaceImport: typeof import("../assets/icons/Workspace--import")['default']
export const SvgoIconsWorkspace: typeof import("../assets/icons/Workspace")['default']
export const SvgoIconsWorshipChristian: typeof import("../assets/icons/Worship--christian")['default']
export const SvgoIconsWorshipJewish: typeof import("../assets/icons/Worship--jewish")['default']
export const SvgoIconsWorshipMuslim: typeof import("../assets/icons/Worship--muslim")['default']
export const SvgoIconsWorship: typeof import("../assets/icons/Worship")['default']
export const SvgoIconsXAxis: typeof import("../assets/icons/X-axis")['default']
export const SvgoIconsX: typeof import("../assets/icons/X")['default']
export const SvgoIconsXls: typeof import("../assets/icons/Xls")['default']
export const SvgoIconsXml: typeof import("../assets/icons/Xml")['default']
export const SvgoIconsYAxis: typeof import("../assets/icons/Y-axis")['default']
export const SvgoIconsY: typeof import("../assets/icons/Y")['default']
export const SvgoIconsZLpar: typeof import("../assets/icons/Z--lpar")['default']
export const SvgoIconsZSystems: typeof import("../assets/icons/Z--systems")['default']
export const SvgoIconsZAxis: typeof import("../assets/icons/Z-axis")['default']
export const SvgoIconsZ: typeof import("../assets/icons/Z")['default']
export const SvgoIconsZipReference: typeof import("../assets/icons/Zip--reference")['default']
export const SvgoIconsZip: typeof import("../assets/icons/Zip")['default']
export const SvgoIconsZoomArea: typeof import("../assets/icons/Zoom--area")['default']
export const SvgoIconsZoomFit: typeof import("../assets/icons/Zoom--fit")['default']
export const SvgoIconsZoomInArea: typeof import("../assets/icons/Zoom--in-area")['default']
export const SvgoIconsZoomIn: typeof import("../assets/icons/Zoom--in")['default']
export const SvgoIconsZoomOutArea: typeof import("../assets/icons/Zoom--out-area")['default']
export const SvgoIconsZoomOut: typeof import("../assets/icons/Zoom--out")['default']
export const SvgoIconsZoomReset: typeof import("../assets/icons/Zoom--reset")['default']
export const SvgoIconsZoomPan: typeof import("../assets/icons/Zoom-pan")['default']
export const SvgoIconsZosSysplex: typeof import("../assets/icons/Zos--sysplex")['default']
export const SvgoIconsZos: typeof import("../assets/icons/Zos")['default']
export const SvgoIconsBrandAbbreviations: typeof import("../assets/icons/brand/Abbreviations")['default']
export const SvgoIconsBrandAbstract: typeof import("../assets/icons/brand/Abstract")['default']
export const SvgoIconsBrandBitmap: typeof import("../assets/icons/brand/Bitmap")['default']
export const SvgoIconsBrandLogotype: typeof import("../assets/icons/brand/Logotype")['default']
export const SvgoIconsBrandOfficial: typeof import("../assets/icons/brand/Official")['default']
export const SvgoIconsKeyboardOff: typeof import("../assets/icons/keyboard--off")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const TiptapEditorContent: typeof import("@tiptap/vue-3")['EditorContent']
export const TiptapFloatingMenu: typeof import("@tiptap/vue-3")['FloatingMenu']
export const TiptapBubbleMenu: typeof import("@tiptap/vue-3")['BubbleMenu']
export const NuxtPlotly: typeof import("../node_modules/nuxt-plotly/dist/runtime/components/nuxt-plotly")['default']
export const NuxtIcon: typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const NuxtPlotly: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCanvas: LazyComponent<typeof import("../components/Canvas/Canvas.vue")['default']>
export const LazyCanvasEditMode: LazyComponent<typeof import("../components/Canvas/EditMode.vue")['default']>
export const LazyCanvasPresentationMode: LazyComponent<typeof import("../components/Canvas/PresentationMode.vue")['default']>
export const LazyContentSection: LazyComponent<typeof import("../components/ContentSection.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyNavigation: LazyComponent<typeof import("../components/Navigation.vue")['default']>
export const LazyAboutSections: LazyComponent<typeof import("../components/about/AboutSections.vue")['default']>
export const LazyAboutFirstSection: LazyComponent<typeof import("../components/about/FirstSection.vue")['default']>
export const LazyAboutSecondSection: LazyComponent<typeof import("../components/about/SecondSection.vue")['default']>
export const LazyAboutThirdSection: LazyComponent<typeof import("../components/about/ThirdSection.vue")['default']>
export const LazyFooterLink: LazyComponent<typeof import("../components/footer/FooterLink.vue")['default']>
export const LazyFooterLinkSection: LazyComponent<typeof import("../components/footer/FooterLinkSection.vue")['default']>
export const LazyFooterLogoSection: LazyComponent<typeof import("../components/footer/FooterLogoSection.vue")['default']>
export const LazyIndexHero: LazyComponent<typeof import("../components/index/Hero.vue")['default']>
export const LazyIndexSectionTemplate: LazyComponent<typeof import("../components/index/SectionTemplate.vue")['default']>
export const LazyNavLogo: LazyComponent<typeof import("../components/nav/Logo.vue")['default']>
export const LazyNavBar: LazyComponent<typeof import("../components/nav/NavBar.vue")['default']>
export const LazyNavButton: LazyComponent<typeof import("../components/nav/NavButton.vue")['default']>
export const LazySvgoIcons3dCursorAlt: LazyComponent<typeof import("../assets/icons/3d-cursor--alt")['default']>
export const LazySvgoIcons3dCursor: LazyComponent<typeof import("../assets/icons/3d-cursor")['default']>
export const LazySvgoIcons3dCurveAutoColon: LazyComponent<typeof import("../assets/icons/3d-curve--auto-colon")['default']>
export const LazySvgoIcons3dCurveAutoVessels: LazyComponent<typeof import("../assets/icons/3d-curve--auto-vessels")['default']>
export const LazySvgoIcons3dCurveManual: LazyComponent<typeof import("../assets/icons/3d-curve--manual")['default']>
export const LazySvgoIcons3dIca: LazyComponent<typeof import("../assets/icons/3d-ica")['default']>
export const LazySvgoIcons3dMprToggle: LazyComponent<typeof import("../assets/icons/3d-mpr-toggle")['default']>
export const LazySvgoIcons3dPrintMesh: LazyComponent<typeof import("../assets/icons/3d-print-mesh")['default']>
export const LazySvgoIcons3dSoftware: LazyComponent<typeof import("../assets/icons/3d-software")['default']>
export const LazySvgoIcons3rdPartyConnected: LazyComponent<typeof import("../assets/icons/3rd-party-connected")['default']>
export const LazySvgoIcons4kFilled: LazyComponent<typeof import("../assets/icons/4k--filled")['default']>
export const LazySvgoIcons4k: LazyComponent<typeof import("../assets/icons/4k")['default']>
export const LazySvgoIconsAIGenerate: LazyComponent<typeof import("../assets/icons/AI-generate")['default']>
export const LazySvgoIconsAIGovernanceLifecycle: LazyComponent<typeof import("../assets/icons/AI-governance--lifecycle")['default']>
export const LazySvgoIconsAIGovernanceTracked: LazyComponent<typeof import("../assets/icons/AI-governance--tracked")['default']>
export const LazySvgoIconsAIGovernanceUntracked: LazyComponent<typeof import("../assets/icons/AI-governance--untracked")['default']>
export const LazySvgoIconsAILaunch: LazyComponent<typeof import("../assets/icons/AI-launch")['default']>
export const LazySvgoIconsAIRecommend: LazyComponent<typeof import("../assets/icons/AI-recommend")['default']>
export const LazySvgoIconsAI: LazyComponent<typeof import("../assets/icons/AI")['default']>
export const LazySvgoIconsAcceptActionUsage: LazyComponent<typeof import("../assets/icons/Accept-action--usage")['default']>
export const LazySvgoIconsAccessibilityAlt: LazyComponent<typeof import("../assets/icons/Accessibility--alt")['default']>
export const LazySvgoIconsAccessibilityColorFilled: LazyComponent<typeof import("../assets/icons/Accessibility--color--filled")['default']>
export const LazySvgoIconsAccessibilityColor: LazyComponent<typeof import("../assets/icons/Accessibility--color")['default']>
export const LazySvgoIconsAccessibility: LazyComponent<typeof import("../assets/icons/Accessibility")['default']>
export const LazySvgoIconsAccount: LazyComponent<typeof import("../assets/icons/Account")['default']>
export const LazySvgoIconsAccumulationIce: LazyComponent<typeof import("../assets/icons/Accumulation--ice")['default']>
export const LazySvgoIconsAccumulationPrecipitation: LazyComponent<typeof import("../assets/icons/Accumulation--precipitation")['default']>
export const LazySvgoIconsAccumulationRain: LazyComponent<typeof import("../assets/icons/Accumulation--rain")['default']>
export const LazySvgoIconsAccumulationSnow: LazyComponent<typeof import("../assets/icons/Accumulation--snow")['default']>
export const LazySvgoIconsActionDefinition: LazyComponent<typeof import("../assets/icons/Action--definition")['default']>
export const LazySvgoIconsActionUsage: LazyComponent<typeof import("../assets/icons/Action--usage")['default']>
export const LazySvgoIconsActivity: LazyComponent<typeof import("../assets/icons/Activity")['default']>
export const LazySvgoIconsAddAlt: LazyComponent<typeof import("../assets/icons/Add--alt")['default']>
export const LazySvgoIconsAddFilled: LazyComponent<typeof import("../assets/icons/Add--filled")['default']>
export const LazySvgoIconsAddLarge: LazyComponent<typeof import("../assets/icons/Add--large")['default']>
export const LazySvgoIconsAddComment: LazyComponent<typeof import("../assets/icons/Add-comment")['default']>
export const LazySvgoIconsAdd: LazyComponent<typeof import("../assets/icons/Add")['default']>
export const LazySvgoIconsAgricultureAnalytics: LazyComponent<typeof import("../assets/icons/Agriculture-analytics")['default']>
export const LazySvgoIconsAiFinancialSustainabilityCheck: LazyComponent<typeof import("../assets/icons/Ai-financial-sustainability-check")['default']>
export const LazySvgoIconsAiResultsHigh: LazyComponent<typeof import("../assets/icons/Ai-results--high")['default']>
export const LazySvgoIconsAiResultsLow: LazyComponent<typeof import("../assets/icons/Ai-results--low")['default']>
export const LazySvgoIconsAiResultsMedium: LazyComponent<typeof import("../assets/icons/Ai-results--medium")['default']>
export const LazySvgoIconsAiResultsUrgent: LazyComponent<typeof import("../assets/icons/Ai-results--urgent")['default']>
export const LazySvgoIconsAiResultsVeryHigh: LazyComponent<typeof import("../assets/icons/Ai-results--very-high")['default']>
export const LazySvgoIconsAiResults: LazyComponent<typeof import("../assets/icons/Ai-results")['default']>
export const LazySvgoIconsAiStatusComplete: LazyComponent<typeof import("../assets/icons/Ai-status--complete")['default']>
export const LazySvgoIconsAiStatusFailed: LazyComponent<typeof import("../assets/icons/Ai-status--failed")['default']>
export const LazySvgoIconsAiStatusInProgress: LazyComponent<typeof import("../assets/icons/Ai-status--in-progress")['default']>
export const LazySvgoIconsAiStatusQueued: LazyComponent<typeof import("../assets/icons/Ai-status--queued")['default']>
export const LazySvgoIconsAiStatusRejected: LazyComponent<typeof import("../assets/icons/Ai-status--rejected")['default']>
export const LazySvgoIconsAiStatus: LazyComponent<typeof import("../assets/icons/Ai-status")['default']>
export const LazySvgoIconsAirlineDigitalGate: LazyComponent<typeof import("../assets/icons/Airline--digital-gate")['default']>
export const LazySvgoIconsAirlineManageGates: LazyComponent<typeof import("../assets/icons/Airline--manage-gates")['default']>
export const LazySvgoIconsAirlinePassengerCare: LazyComponent<typeof import("../assets/icons/Airline--passenger-care")['default']>
export const LazySvgoIconsAirlineRapidBoard: LazyComponent<typeof import("../assets/icons/Airline--rapid-board")['default']>
export const LazySvgoIconsAirplayFilled: LazyComponent<typeof import("../assets/icons/Airplay--filled")['default']>
export const LazySvgoIconsAirplay: LazyComponent<typeof import("../assets/icons/Airplay")['default']>
export const LazySvgoIconsAirport01: LazyComponent<typeof import("../assets/icons/Airport--01")['default']>
export const LazySvgoIconsAirport02: LazyComponent<typeof import("../assets/icons/Airport--02")['default']>
export const LazySvgoIconsAirportLocation: LazyComponent<typeof import("../assets/icons/Airport-location")['default']>
export const LazySvgoIconsAlarmAdd: LazyComponent<typeof import("../assets/icons/Alarm--add")['default']>
export const LazySvgoIconsAlarmSubtract: LazyComponent<typeof import("../assets/icons/Alarm--subtract")['default']>
export const LazySvgoIconsAlarm: LazyComponent<typeof import("../assets/icons/Alarm")['default']>
export const LazySvgoIconsAlignHorizontalCenter: LazyComponent<typeof import("../assets/icons/Align--horizontal-center")['default']>
export const LazySvgoIconsAlignHorizontalLeft: LazyComponent<typeof import("../assets/icons/Align--horizontal-left")['default']>
export const LazySvgoIconsAlignHorizontalRight: LazyComponent<typeof import("../assets/icons/Align--horizontal-right")['default']>
export const LazySvgoIconsAlignVerticalBottom: LazyComponent<typeof import("../assets/icons/Align--vertical-bottom")['default']>
export const LazySvgoIconsAlignVerticalCenter: LazyComponent<typeof import("../assets/icons/Align--vertical-center")['default']>
export const LazySvgoIconsAlignVerticalTop: LazyComponent<typeof import("../assets/icons/Align--vertical-top")['default']>
export const LazySvgoIconsAlignBoxBottomCenter: LazyComponent<typeof import("../assets/icons/Align-box--bottom-center")['default']>
export const LazySvgoIconsAlignBoxBottomLeft: LazyComponent<typeof import("../assets/icons/Align-box--bottom-left")['default']>
export const LazySvgoIconsAlignBoxBottomRight: LazyComponent<typeof import("../assets/icons/Align-box--bottom-right")['default']>
export const LazySvgoIconsAlignBoxMiddleCenter: LazyComponent<typeof import("../assets/icons/Align-box--middle-center")['default']>
export const LazySvgoIconsAlignBoxMiddleLeft: LazyComponent<typeof import("../assets/icons/Align-box--middle-left")['default']>
export const LazySvgoIconsAlignBoxMiddleRight: LazyComponent<typeof import("../assets/icons/Align-box--middle-right")['default']>
export const LazySvgoIconsAlignBoxTopCenter: LazyComponent<typeof import("../assets/icons/Align-box--top-center")['default']>
export const LazySvgoIconsAlignBoxTopLeft: LazyComponent<typeof import("../assets/icons/Align-box--top-left")['default']>
export const LazySvgoIconsAlignBoxTopRight: LazyComponent<typeof import("../assets/icons/Align-box--top-right")['default']>
export const LazySvgoIconsAnalyticsCustom: LazyComponent<typeof import("../assets/icons/Analytics--custom")['default']>
export const LazySvgoIconsAnalyticsReference: LazyComponent<typeof import("../assets/icons/Analytics--reference")['default']>
export const LazySvgoIconsAnalytics: LazyComponent<typeof import("../assets/icons/Analytics")['default']>
export const LazySvgoIconsAnchor: LazyComponent<typeof import("../assets/icons/Anchor")['default']>
export const LazySvgoIconsAngle: LazyComponent<typeof import("../assets/icons/Angle")['default']>
export const LazySvgoIconsAnnotationVisibility: LazyComponent<typeof import("../assets/icons/Annotation-visibility")['default']>
export const LazySvgoIconsAperture: LazyComponent<typeof import("../assets/icons/Aperture")['default']>
export const LazySvgoIconsApi1: LazyComponent<typeof import("../assets/icons/Api--1")['default']>
export const LazySvgoIconsApiKey: LazyComponent<typeof import("../assets/icons/Api--key")['default']>
export const LazySvgoIconsApi: LazyComponent<typeof import("../assets/icons/Api")['default']>
export const LazySvgoIconsAppConnectivity: LazyComponent<typeof import("../assets/icons/App-connectivity")['default']>
export const LazySvgoIconsApp: LazyComponent<typeof import("../assets/icons/App")['default']>
export const LazySvgoIconsAppleDash: LazyComponent<typeof import("../assets/icons/Apple--dash")['default']>
export const LazySvgoIconsApple: LazyComponent<typeof import("../assets/icons/Apple")['default']>
export const LazySvgoIconsApplicationMobile: LazyComponent<typeof import("../assets/icons/Application--mobile")['default']>
export const LazySvgoIconsApplicationVirtual: LazyComponent<typeof import("../assets/icons/Application--virtual")['default']>
export const LazySvgoIconsApplicationWeb: LazyComponent<typeof import("../assets/icons/Application--web")['default']>
export const LazySvgoIconsApplication: LazyComponent<typeof import("../assets/icons/Application")['default']>
export const LazySvgoIconsApps: LazyComponent<typeof import("../assets/icons/Apps")['default']>
export const LazySvgoIconsArchive: LazyComponent<typeof import("../assets/icons/Archive")['default']>
export const LazySvgoIconsAreaCustom: LazyComponent<typeof import("../assets/icons/Area--custom")['default']>
export const LazySvgoIconsArea: LazyComponent<typeof import("../assets/icons/Area")['default']>
export const LazySvgoIconsArithmeticMean: LazyComponent<typeof import("../assets/icons/Arithmetic-mean")['default']>
export const LazySvgoIconsArithmeticMedian: LazyComponent<typeof import("../assets/icons/Arithmetic-median")['default']>
export const LazySvgoIconsArrangeHorizontal: LazyComponent<typeof import("../assets/icons/Arrange--horizontal")['default']>
export const LazySvgoIconsArrangeVertical: LazyComponent<typeof import("../assets/icons/Arrange--vertical")['default']>
export const LazySvgoIconsArrival: LazyComponent<typeof import("../assets/icons/Arrival")['default']>
export const LazySvgoIconsArrowAnnotation: LazyComponent<typeof import("../assets/icons/Arrow--annotation")['default']>
export const LazySvgoIconsArrowDownLeft: LazyComponent<typeof import("../assets/icons/Arrow--down-left")['default']>
export const LazySvgoIconsArrowDownRight: LazyComponent<typeof import("../assets/icons/Arrow--down-right")['default']>
export const LazySvgoIconsArrowDown: LazyComponent<typeof import("../assets/icons/Arrow--down")['default']>
export const LazySvgoIconsArrowLeft: LazyComponent<typeof import("../assets/icons/Arrow--left")['default']>
export const LazySvgoIconsArrowRight: LazyComponent<typeof import("../assets/icons/Arrow--right")['default']>
export const LazySvgoIconsArrowUpLeft: LazyComponent<typeof import("../assets/icons/Arrow--up-left")['default']>
export const LazySvgoIconsArrowUpRight: LazyComponent<typeof import("../assets/icons/Arrow--up-right")['default']>
export const LazySvgoIconsArrowUp: LazyComponent<typeof import("../assets/icons/Arrow--up")['default']>
export const LazySvgoIconsArrowShiftDown: LazyComponent<typeof import("../assets/icons/Arrow-shift-down")['default']>
export const LazySvgoIconsArrowsHorizontal: LazyComponent<typeof import("../assets/icons/Arrows--horizontal")['default']>
export const LazySvgoIconsArrowsVertical: LazyComponent<typeof import("../assets/icons/Arrows--vertical")['default']>
export const LazySvgoIconsAsleepFilled: LazyComponent<typeof import("../assets/icons/Asleep--filled")['default']>
export const LazySvgoIconsAsleep: LazyComponent<typeof import("../assets/icons/Asleep")['default']>
export const LazySvgoIconsAssemblyCluster: LazyComponent<typeof import("../assets/icons/Assembly--cluster")['default']>
export const LazySvgoIconsAssemblyReference: LazyComponent<typeof import("../assets/icons/Assembly--reference")['default']>
export const LazySvgoIconsAssembly: LazyComponent<typeof import("../assets/icons/Assembly")['default']>
export const LazySvgoIconsAssetConfirm: LazyComponent<typeof import("../assets/icons/Asset--confirm")['default']>
export const LazySvgoIconsAssetDigitalTwin: LazyComponent<typeof import("../assets/icons/Asset--digital-twin")['default']>
export const LazySvgoIconsAssetView: LazyComponent<typeof import("../assets/icons/Asset--view")['default']>
export const LazySvgoIconsAsset: LazyComponent<typeof import("../assets/icons/Asset")['default']>
export const LazySvgoIconsAsterisk: LazyComponent<typeof import("../assets/icons/Asterisk")['default']>
export const LazySvgoIconsAsync: LazyComponent<typeof import("../assets/icons/Async")['default']>
export const LazySvgoIconsAt: LazyComponent<typeof import("../assets/icons/At")['default']>
export const LazySvgoIconsAttachment: LazyComponent<typeof import("../assets/icons/Attachment")['default']>
export const LazySvgoIconsAudioConsole: LazyComponent<typeof import("../assets/icons/Audio-console")['default']>
export const LazySvgoIconsAugmentedReality: LazyComponent<typeof import("../assets/icons/Augmented-reality")['default']>
export const LazySvgoIconsAutoScroll: LazyComponent<typeof import("../assets/icons/Auto-scroll")['default']>
export const LazySvgoIconsAutomatic: LazyComponent<typeof import("../assets/icons/Automatic")['default']>
export const LazySvgoIconsAutoscaling: LazyComponent<typeof import("../assets/icons/Autoscaling")['default']>
export const LazySvgoIconsAwake: LazyComponent<typeof import("../assets/icons/Awake")['default']>
export const LazySvgoIconsBadge: LazyComponent<typeof import("../assets/icons/Badge")['default']>
export const LazySvgoIconsBaggageClaim: LazyComponent<typeof import("../assets/icons/Baggage-claim")['default']>
export const LazySvgoIconsBar: LazyComponent<typeof import("../assets/icons/Bar")['default']>
export const LazySvgoIconsBarcode: LazyComponent<typeof import("../assets/icons/Barcode")['default']>
export const LazySvgoIconsBareMetalServer01: LazyComponent<typeof import("../assets/icons/Bare-metal-server--01")['default']>
export const LazySvgoIconsBareMetalServer02: LazyComponent<typeof import("../assets/icons/Bare-metal-server--02")['default']>
export const LazySvgoIconsBareMetalServer: LazyComponent<typeof import("../assets/icons/Bare-metal-server")['default']>
export const LazySvgoIconsBarrier: LazyComponent<typeof import("../assets/icons/Barrier")['default']>
export const LazySvgoIconsBasketball: LazyComponent<typeof import("../assets/icons/Basketball")['default']>
export const LazySvgoIconsBastionHost: LazyComponent<typeof import("../assets/icons/Bastion-host")['default']>
export const LazySvgoIconsBat: LazyComponent<typeof import("../assets/icons/Bat")['default']>
export const LazySvgoIconsBatchJobStep: LazyComponent<typeof import("../assets/icons/Batch-job--step")['default']>
export const LazySvgoIconsBatchJob: LazyComponent<typeof import("../assets/icons/Batch-job")['default']>
export const LazySvgoIconsBatteryCharging: LazyComponent<typeof import("../assets/icons/Battery--charging")['default']>
export const LazySvgoIconsBatteryEmpty: LazyComponent<typeof import("../assets/icons/Battery--empty")['default']>
export const LazySvgoIconsBatteryFull: LazyComponent<typeof import("../assets/icons/Battery--full")['default']>
export const LazySvgoIconsBatteryHalf: LazyComponent<typeof import("../assets/icons/Battery--half")['default']>
export const LazySvgoIconsBatteryLow: LazyComponent<typeof import("../assets/icons/Battery--low")['default']>
export const LazySvgoIconsBatteryQuarter: LazyComponent<typeof import("../assets/icons/Battery--quarter")['default']>
export const LazySvgoIconsBeeBat: LazyComponent<typeof import("../assets/icons/Bee-bat")['default']>
export const LazySvgoIconsBee: LazyComponent<typeof import("../assets/icons/Bee")['default']>
export const LazySvgoIconsBeta: LazyComponent<typeof import("../assets/icons/Beta")['default']>
export const LazySvgoIconsBicycle: LazyComponent<typeof import("../assets/icons/Bicycle")['default']>
export const LazySvgoIconsBinding01: LazyComponent<typeof import("../assets/icons/Binding--01")['default']>
export const LazySvgoIconsBinding02: LazyComponent<typeof import("../assets/icons/Binding--02")['default']>
export const LazySvgoIconsBinoculars: LazyComponent<typeof import("../assets/icons/Binoculars")['default']>
export const LazySvgoIconsBlochSphere: LazyComponent<typeof import("../assets/icons/Bloch-sphere")['default']>
export const LazySvgoIconsBlockStorageAlt: LazyComponent<typeof import("../assets/icons/Block-storage--alt")['default']>
export const LazySvgoIconsBlockStorage: LazyComponent<typeof import("../assets/icons/Block-storage")['default']>
export const LazySvgoIconsBlockchain: LazyComponent<typeof import("../assets/icons/Blockchain")['default']>
export const LazySvgoIconsBlog: LazyComponent<typeof import("../assets/icons/Blog")['default']>
export const LazySvgoIconsBluetoothOff: LazyComponent<typeof import("../assets/icons/Bluetooth--off")['default']>
export const LazySvgoIconsBluetooth: LazyComponent<typeof import("../assets/icons/Bluetooth")['default']>
export const LazySvgoIconsBook: LazyComponent<typeof import("../assets/icons/Book")['default']>
export const LazySvgoIconsBookmarkAdd: LazyComponent<typeof import("../assets/icons/Bookmark--add")['default']>
export const LazySvgoIconsBookmarkFilled: LazyComponent<typeof import("../assets/icons/Bookmark--filled")['default']>
export const LazySvgoIconsBookmark: LazyComponent<typeof import("../assets/icons/Bookmark")['default']>
export const LazySvgoIconsBoolean: LazyComponent<typeof import("../assets/icons/Boolean")['default']>
export const LazySvgoIconsBootVolumeAlt: LazyComponent<typeof import("../assets/icons/Boot-volume--alt")['default']>
export const LazySvgoIconsBootVolume: LazyComponent<typeof import("../assets/icons/Boot-volume")['default']>
export const LazySvgoIconsBoot: LazyComponent<typeof import("../assets/icons/Boot")['default']>
export const LazySvgoIconsBorderBottom: LazyComponent<typeof import("../assets/icons/Border--bottom")['default']>
export const LazySvgoIconsBorderFull: LazyComponent<typeof import("../assets/icons/Border--full")['default']>
export const LazySvgoIconsBorderLeft: LazyComponent<typeof import("../assets/icons/Border--left")['default']>
export const LazySvgoIconsBorderNone: LazyComponent<typeof import("../assets/icons/Border--none")['default']>
export const LazySvgoIconsBorderRight: LazyComponent<typeof import("../assets/icons/Border--right")['default']>
export const LazySvgoIconsBorderTop: LazyComponent<typeof import("../assets/icons/Border--top")['default']>
export const LazySvgoIconsBot: LazyComponent<typeof import("../assets/icons/Bot")['default']>
export const LazySvgoIconsBottles01Dash: LazyComponent<typeof import("../assets/icons/Bottles--01--dash")['default']>
export const LazySvgoIconsBottles01: LazyComponent<typeof import("../assets/icons/Bottles--01")['default']>
export const LazySvgoIconsBottles02Dash: LazyComponent<typeof import("../assets/icons/Bottles--02--dash")['default']>
export const LazySvgoIconsBottles02: LazyComponent<typeof import("../assets/icons/Bottles--02")['default']>
export const LazySvgoIconsBottlesContainer: LazyComponent<typeof import("../assets/icons/Bottles--container")['default']>
export const LazySvgoIconsBottomPanelCloseFilled: LazyComponent<typeof import("../assets/icons/Bottom-panel--close--filled")['default']>
export const LazySvgoIconsBottomPanelClose: LazyComponent<typeof import("../assets/icons/Bottom-panel--close")['default']>
export const LazySvgoIconsBottomPanelOpenFilled: LazyComponent<typeof import("../assets/icons/Bottom-panel--open--filled")['default']>
export const LazySvgoIconsBottomPanelOpen: LazyComponent<typeof import("../assets/icons/Bottom-panel--open")['default']>
export const LazySvgoIconsBoxExtraLarge: LazyComponent<typeof import("../assets/icons/Box--extra-large")['default']>
export const LazySvgoIconsBoxLarge: LazyComponent<typeof import("../assets/icons/Box--large")['default']>
export const LazySvgoIconsBoxMedium: LazyComponent<typeof import("../assets/icons/Box--medium")['default']>
export const LazySvgoIconsBoxSmall: LazyComponent<typeof import("../assets/icons/Box--small")['default']>
export const LazySvgoIconsBoxPlot: LazyComponent<typeof import("../assets/icons/Box-plot")['default']>
export const LazySvgoIconsBox: LazyComponent<typeof import("../assets/icons/Box")['default']>
export const LazySvgoIconsBranch: LazyComponent<typeof import("../assets/icons/Branch")['default']>
export const LazySvgoIconsBreakingChange: LazyComponent<typeof import("../assets/icons/Breaking-change")['default']>
export const LazySvgoIconsBrightnessContrast: LazyComponent<typeof import("../assets/icons/Brightness-contrast")['default']>
export const LazySvgoIconsBringForward: LazyComponent<typeof import("../assets/icons/Bring-forward")['default']>
export const LazySvgoIconsBringToFront: LazyComponent<typeof import("../assets/icons/Bring-to-front")['default']>
export const LazySvgoIconsBrushFreehand: LazyComponent<typeof import("../assets/icons/Brush-freehand")['default']>
export const LazySvgoIconsBrushPolygon: LazyComponent<typeof import("../assets/icons/Brush-polygon")['default']>
export const LazySvgoIconsBuildTool: LazyComponent<typeof import("../assets/icons/Build-tool")['default']>
export const LazySvgoIconsBuildingInsights1: LazyComponent<typeof import("../assets/icons/Building--insights-1")['default']>
export const LazySvgoIconsBuildingInsights2: LazyComponent<typeof import("../assets/icons/Building--insights-2")['default']>
export const LazySvgoIconsBuildingInsights3: LazyComponent<typeof import("../assets/icons/Building--insights-3")['default']>
export const LazySvgoIconsBuilding: LazyComponent<typeof import("../assets/icons/Building")['default']>
export const LazySvgoIconsBullhorn: LazyComponent<typeof import("../assets/icons/Bullhorn")['default']>
export const LazySvgoIconsBuoy: LazyComponent<typeof import("../assets/icons/Buoy")['default']>
export const LazySvgoIconsBus: LazyComponent<typeof import("../assets/icons/Bus")['default']>
export const LazySvgoIconsBusinessProcesses: LazyComponent<typeof import("../assets/icons/Business-processes")['default']>
export const LazySvgoIconsButtonCentered: LazyComponent<typeof import("../assets/icons/Button--centered")['default']>
export const LazySvgoIconsButtonFlushLeft: LazyComponent<typeof import("../assets/icons/Button--flush-left")['default']>
export const LazySvgoIconsCabinCareAlert: LazyComponent<typeof import("../assets/icons/Cabin-care--alert")['default']>
export const LazySvgoIconsCabinCareAlt: LazyComponent<typeof import("../assets/icons/Cabin-care--alt")['default']>
export const LazySvgoIconsCabinCare: LazyComponent<typeof import("../assets/icons/Cabin-care")['default']>
export const LazySvgoIconsCad: LazyComponent<typeof import("../assets/icons/Cad")['default']>
export const LazySvgoIconsCafe: LazyComponent<typeof import("../assets/icons/Cafe")['default']>
export const LazySvgoIconsCalculationAlt: LazyComponent<typeof import("../assets/icons/Calculation--alt")['default']>
export const LazySvgoIconsCalculation: LazyComponent<typeof import("../assets/icons/Calculation")['default']>
export const LazySvgoIconsCalculatorCheck: LazyComponent<typeof import("../assets/icons/Calculator--check")['default']>
export const LazySvgoIconsCalculator: LazyComponent<typeof import("../assets/icons/Calculator")['default']>
export const LazySvgoIconsCalendarAddAlt: LazyComponent<typeof import("../assets/icons/Calendar--add--alt")['default']>
export const LazySvgoIconsCalendarAdd: LazyComponent<typeof import("../assets/icons/Calendar--add")['default']>
export const LazySvgoIconsCalendarHeatMap: LazyComponent<typeof import("../assets/icons/Calendar--heat-map")['default']>
export const LazySvgoIconsCalendarSettings: LazyComponent<typeof import("../assets/icons/Calendar--settings")['default']>
export const LazySvgoIconsCalendarTools: LazyComponent<typeof import("../assets/icons/Calendar--tools")['default']>
export const LazySvgoIconsCalendar: LazyComponent<typeof import("../assets/icons/Calendar")['default']>
export const LazySvgoIconsCalibrate: LazyComponent<typeof import("../assets/icons/Calibrate")['default']>
export const LazySvgoIconsCallsAll: LazyComponent<typeof import("../assets/icons/Calls--all")['default']>
export const LazySvgoIconsCallsIncoming: LazyComponent<typeof import("../assets/icons/Calls--incoming")['default']>
export const LazySvgoIconsCalls: LazyComponent<typeof import("../assets/icons/Calls")['default']>
export const LazySvgoIconsCameraAction: LazyComponent<typeof import("../assets/icons/Camera--action")['default']>
export const LazySvgoIconsCamera: LazyComponent<typeof import("../assets/icons/Camera")['default']>
export const LazySvgoIconsCampsite: LazyComponent<typeof import("../assets/icons/Campsite")['default']>
export const LazySvgoIconsCarFront: LazyComponent<typeof import("../assets/icons/Car--front")['default']>
export const LazySvgoIconsCar: LazyComponent<typeof import("../assets/icons/Car")['default']>
export const LazySvgoIconsCarbonUiBuilder: LazyComponent<typeof import("../assets/icons/Carbon--ui-builder")['default']>
export const LazySvgoIconsCarbonAccounting: LazyComponent<typeof import("../assets/icons/Carbon-accounting")['default']>
export const LazySvgoIconsCarbonForAEM: LazyComponent<typeof import("../assets/icons/Carbon-for-AEM")['default']>
export const LazySvgoIconsCarbonForIbmDotcom: LazyComponent<typeof import("../assets/icons/Carbon-for-ibm-dotcom")['default']>
export const LazySvgoIconsCarbonForIbmProduct: LazyComponent<typeof import("../assets/icons/Carbon-for-ibm-product")['default']>
export const LazySvgoIconsCarbonForMobile: LazyComponent<typeof import("../assets/icons/Carbon-for-mobile")['default']>
export const LazySvgoIconsCarbonForSalesforce: LazyComponent<typeof import("../assets/icons/Carbon-for-salesforce")['default']>
export const LazySvgoIconsCarbon: LazyComponent<typeof import("../assets/icons/Carbon")['default']>
export const LazySvgoIconsCaretDown: LazyComponent<typeof import("../assets/icons/Caret--down")['default']>
export const LazySvgoIconsCaretLeft: LazyComponent<typeof import("../assets/icons/Caret--left")['default']>
export const LazySvgoIconsCaretRight: LazyComponent<typeof import("../assets/icons/Caret--right")['default']>
export const LazySvgoIconsCaretSortDown: LazyComponent<typeof import("../assets/icons/Caret--sort--down")['default']>
export const LazySvgoIconsCaretSortUp: LazyComponent<typeof import("../assets/icons/Caret--sort--up")['default']>
export const LazySvgoIconsCaretSort: LazyComponent<typeof import("../assets/icons/Caret--sort")['default']>
export const LazySvgoIconsCaretUp: LazyComponent<typeof import("../assets/icons/Caret--up")['default']>
export const LazySvgoIconsCarouselHorizontal: LazyComponent<typeof import("../assets/icons/Carousel--horizontal")['default']>
export const LazySvgoIconsCarouselVertical: LazyComponent<typeof import("../assets/icons/Carousel--vertical")['default']>
export const LazySvgoIconsCatalogPublish: LazyComponent<typeof import("../assets/icons/Catalog--publish")['default']>
export const LazySvgoIconsCatalog: LazyComponent<typeof import("../assets/icons/Catalog")['default']>
export const LazySvgoIconsCategories: LazyComponent<typeof import("../assets/icons/Categories")['default']>
export const LazySvgoIconsCategoryAdd: LazyComponent<typeof import("../assets/icons/Category--add")['default']>
export const LazySvgoIconsCategoryAnd: LazyComponent<typeof import("../assets/icons/Category--and")['default']>
export const LazySvgoIconsCategoryNewEach: LazyComponent<typeof import("../assets/icons/Category--new-each")['default']>
export const LazySvgoIconsCategoryNew: LazyComponent<typeof import("../assets/icons/Category--new")['default']>
export const LazySvgoIconsCategory: LazyComponent<typeof import("../assets/icons/Category")['default']>
export const LazySvgoIconsCautionInverted: LazyComponent<typeof import("../assets/icons/Caution-inverted")['default']>
export const LazySvgoIconsCaution: LazyComponent<typeof import("../assets/icons/Caution")['default']>
export const LazySvgoIconsCcx: LazyComponent<typeof import("../assets/icons/Ccx")['default']>
export const LazySvgoIconsCdArchive: LazyComponent<typeof import("../assets/icons/Cd--archive")['default']>
export const LazySvgoIconsCdCreateArchive: LazyComponent<typeof import("../assets/icons/Cd--create-archive")['default']>
export const LazySvgoIconsCdCreateExchange: LazyComponent<typeof import("../assets/icons/Cd--create-exchange")['default']>
export const LazySvgoIconsCda: LazyComponent<typeof import("../assets/icons/Cda")['default']>
export const LazySvgoIconsCellTower: LazyComponent<typeof import("../assets/icons/Cell-tower")['default']>
export const LazySvgoIconsCenterCircle: LazyComponent<typeof import("../assets/icons/Center--circle")['default']>
export const LazySvgoIconsCenterSquare: LazyComponent<typeof import("../assets/icons/Center--square")['default']>
export const LazySvgoIconsCenterToFit: LazyComponent<typeof import("../assets/icons/Center-to-fit")['default']>
export const LazySvgoIconsCertificateCheck: LazyComponent<typeof import("../assets/icons/Certificate--check")['default']>
export const LazySvgoIconsCertificate: LazyComponent<typeof import("../assets/icons/Certificate")['default']>
export const LazySvgoIconsChangeCatalog: LazyComponent<typeof import("../assets/icons/Change-catalog")['default']>
export const LazySvgoIconsCharacterDecimal: LazyComponent<typeof import("../assets/icons/Character--decimal")['default']>
export const LazySvgoIconsCharacterFraction: LazyComponent<typeof import("../assets/icons/Character--fraction")['default']>
export const LazySvgoIconsCharacterInteger: LazyComponent<typeof import("../assets/icons/Character--integer")['default']>
export const LazySvgoIconsCharacterLowerCase: LazyComponent<typeof import("../assets/icons/Character--lower-case")['default']>
export const LazySvgoIconsCharacterNegativeNumber: LazyComponent<typeof import("../assets/icons/Character--negative-number")['default']>
export const LazySvgoIconsCharacterSentenceCase: LazyComponent<typeof import("../assets/icons/Character--sentence-case")['default']>
export const LazySvgoIconsCharacterUpperCase: LazyComponent<typeof import("../assets/icons/Character--upper-case")['default']>
export const LazySvgoIconsCharacterWholeNumber: LazyComponent<typeof import("../assets/icons/Character--whole-number")['default']>
export const LazySvgoIconsCharacterPatterns: LazyComponent<typeof import("../assets/icons/Character-patterns")['default']>
export const LazySvgoIconsChargingStationFilled: LazyComponent<typeof import("../assets/icons/Charging-station--filled")['default']>
export const LazySvgoIconsChargingStation: LazyComponent<typeof import("../assets/icons/Charging-station")['default']>
export const LazySvgoIconsChart3d: LazyComponent<typeof import("../assets/icons/Chart--3d")['default']>
export const LazySvgoIconsChartAreaSmooth: LazyComponent<typeof import("../assets/icons/Chart--area-smooth")['default']>
export const LazySvgoIconsChartAreaStepper: LazyComponent<typeof import("../assets/icons/Chart--area-stepper")['default']>
export const LazySvgoIconsChartArea: LazyComponent<typeof import("../assets/icons/Chart--area")['default']>
export const LazySvgoIconsChartAverage: LazyComponent<typeof import("../assets/icons/Chart--average")['default']>
export const LazySvgoIconsChartBarFloating: LazyComponent<typeof import("../assets/icons/Chart--bar-floating")['default']>
export const LazySvgoIconsChartBarOverlay: LazyComponent<typeof import("../assets/icons/Chart--bar-overlay")['default']>
export const LazySvgoIconsChartBarStacked: LazyComponent<typeof import("../assets/icons/Chart--bar-stacked")['default']>
export const LazySvgoIconsChartBarTarget: LazyComponent<typeof import("../assets/icons/Chart--bar-target")['default']>
export const LazySvgoIconsChartBar: LazyComponent<typeof import("../assets/icons/Chart--bar")['default']>
export const LazySvgoIconsChartBubblePacked: LazyComponent<typeof import("../assets/icons/Chart--bubble-packed")['default']>
export const LazySvgoIconsChartBubble: LazyComponent<typeof import("../assets/icons/Chart--bubble")['default']>
export const LazySvgoIconsChartBullet: LazyComponent<typeof import("../assets/icons/Chart--bullet")['default']>
export const LazySvgoIconsChartCandlestick: LazyComponent<typeof import("../assets/icons/Chart--candlestick")['default']>
export const LazySvgoIconsChartClusterBar: LazyComponent<typeof import("../assets/icons/Chart--cluster-bar")['default']>
export const LazySvgoIconsChartColumnFloating: LazyComponent<typeof import("../assets/icons/Chart--column-floating")['default']>
export const LazySvgoIconsChartColumnTarget: LazyComponent<typeof import("../assets/icons/Chart--column-target")['default']>
export const LazySvgoIconsChartColumn: LazyComponent<typeof import("../assets/icons/Chart--column")['default']>
export const LazySvgoIconsChartComboStacked: LazyComponent<typeof import("../assets/icons/Chart--combo-stacked")['default']>
export const LazySvgoIconsChartCombo: LazyComponent<typeof import("../assets/icons/Chart--combo")['default']>
export const LazySvgoIconsChartCustom: LazyComponent<typeof import("../assets/icons/Chart--custom")['default']>
export const LazySvgoIconsChartDualYAxis: LazyComponent<typeof import("../assets/icons/Chart--dual-y-axis")['default']>
export const LazySvgoIconsChartErrorBarAlt: LazyComponent<typeof import("../assets/icons/Chart--error-bar--alt")['default']>
export const LazySvgoIconsChartErrorBar: LazyComponent<typeof import("../assets/icons/Chart--error-bar")['default']>
export const LazySvgoIconsChartEvaluation: LazyComponent<typeof import("../assets/icons/Chart--evaluation")['default']>
export const LazySvgoIconsChartHighLow: LazyComponent<typeof import("../assets/icons/Chart--high-low")['default']>
export const LazySvgoIconsChartHistogram: LazyComponent<typeof import("../assets/icons/Chart--histogram")['default']>
export const LazySvgoIconsChartLineData: LazyComponent<typeof import("../assets/icons/Chart--line--data")['default']>
export const LazySvgoIconsChartLineSmooth: LazyComponent<typeof import("../assets/icons/Chart--line-smooth")['default']>
export const LazySvgoIconsChartLine: LazyComponent<typeof import("../assets/icons/Chart--line")['default']>
export const LazySvgoIconsChartLogisticRegression: LazyComponent<typeof import("../assets/icons/Chart--logistic-regression")['default']>
export const LazySvgoIconsChartMarimekko: LazyComponent<typeof import("../assets/icons/Chart--marimekko")['default']>
export const LazySvgoIconsChartMaximum: LazyComponent<typeof import("../assets/icons/Chart--maximum")['default']>
export const LazySvgoIconsChartMedian: LazyComponent<typeof import("../assets/icons/Chart--median")['default']>
export const LazySvgoIconsChartMinimum: LazyComponent<typeof import("../assets/icons/Chart--minimum")['default']>
export const LazySvgoIconsChartMultiLine: LazyComponent<typeof import("../assets/icons/Chart--multi-line")['default']>
export const LazySvgoIconsChartMultitype: LazyComponent<typeof import("../assets/icons/Chart--multitype")['default']>
export const LazySvgoIconsChartNetwork: LazyComponent<typeof import("../assets/icons/Chart--network")['default']>
export const LazySvgoIconsChartParallel: LazyComponent<typeof import("../assets/icons/Chart--parallel")['default']>
export const LazySvgoIconsChartPie: LazyComponent<typeof import("../assets/icons/Chart--pie")['default']>
export const LazySvgoIconsChartPlanningWaterfall: LazyComponent<typeof import("../assets/icons/Chart--planning-waterfall")['default']>
export const LazySvgoIconsChartPoint: LazyComponent<typeof import("../assets/icons/Chart--point")['default']>
export const LazySvgoIconsChartPopulation: LazyComponent<typeof import("../assets/icons/Chart--population")['default']>
export const LazySvgoIconsChartRadar: LazyComponent<typeof import("../assets/icons/Chart--radar")['default']>
export const LazySvgoIconsChartRadial: LazyComponent<typeof import("../assets/icons/Chart--radial")['default']>
export const LazySvgoIconsChartRelationship: LazyComponent<typeof import("../assets/icons/Chart--relationship")['default']>
export const LazySvgoIconsChartRing: LazyComponent<typeof import("../assets/icons/Chart--ring")['default']>
export const LazySvgoIconsChartRiver: LazyComponent<typeof import("../assets/icons/Chart--river")['default']>
export const LazySvgoIconsChartRose: LazyComponent<typeof import("../assets/icons/Chart--rose")['default']>
export const LazySvgoIconsChartScatter: LazyComponent<typeof import("../assets/icons/Chart--scatter")['default']>
export const LazySvgoIconsChartSpiral: LazyComponent<typeof import("../assets/icons/Chart--spiral")['default']>
export const LazySvgoIconsChartStacked: LazyComponent<typeof import("../assets/icons/Chart--stacked")['default']>
export const LazySvgoIconsChartStepper: LazyComponent<typeof import("../assets/icons/Chart--stepper")['default']>
export const LazySvgoIconsChartSunburst: LazyComponent<typeof import("../assets/icons/Chart--sunburst")['default']>
export const LazySvgoIconsChartTSne: LazyComponent<typeof import("../assets/icons/Chart--t-sne")['default']>
export const LazySvgoIconsChartTreemap: LazyComponent<typeof import("../assets/icons/Chart--treemap")['default']>
export const LazySvgoIconsChartVennDiagram: LazyComponent<typeof import("../assets/icons/Chart--venn-diagram")['default']>
export const LazySvgoIconsChartViolinPlot: LazyComponent<typeof import("../assets/icons/Chart--violin-plot")['default']>
export const LazySvgoIconsChartWaterfall: LazyComponent<typeof import("../assets/icons/Chart--waterfall")['default']>
export const LazySvgoIconsChartWinLoss: LazyComponent<typeof import("../assets/icons/Chart--win-loss")['default']>
export const LazySvgoIconsChatLaunch: LazyComponent<typeof import("../assets/icons/Chat--launch")['default']>
export const LazySvgoIconsChatOff: LazyComponent<typeof import("../assets/icons/Chat--off")['default']>
export const LazySvgoIconsChatOperational: LazyComponent<typeof import("../assets/icons/Chat--operational")['default']>
export const LazySvgoIconsChatBot: LazyComponent<typeof import("../assets/icons/Chat-bot")['default']>
export const LazySvgoIconsChat: LazyComponent<typeof import("../assets/icons/Chat")['default']>
export const LazySvgoIconsCheckboxCheckedFilled: LazyComponent<typeof import("../assets/icons/Checkbox--checked--filled")['default']>
export const LazySvgoIconsCheckboxChecked: LazyComponent<typeof import("../assets/icons/Checkbox--checked")['default']>
export const LazySvgoIconsCheckboxIndeterminateFilled: LazyComponent<typeof import("../assets/icons/Checkbox--indeterminate--filled")['default']>
export const LazySvgoIconsCheckboxIndeterminate: LazyComponent<typeof import("../assets/icons/Checkbox--indeterminate")['default']>
export const LazySvgoIconsCheckbox: LazyComponent<typeof import("../assets/icons/Checkbox")['default']>
export const LazySvgoIconsCheckmarkFilledError: LazyComponent<typeof import("../assets/icons/Checkmark--filled--error")['default']>
export const LazySvgoIconsCheckmarkFilledWarning: LazyComponent<typeof import("../assets/icons/Checkmark--filled--warning")['default']>
export const LazySvgoIconsCheckmarkFilled: LazyComponent<typeof import("../assets/icons/Checkmark--filled")['default']>
export const LazySvgoIconsCheckmarkOutlineError: LazyComponent<typeof import("../assets/icons/Checkmark--outline--error")['default']>
export const LazySvgoIconsCheckmarkOutlineWarning: LazyComponent<typeof import("../assets/icons/Checkmark--outline--warning")['default']>
export const LazySvgoIconsCheckmarkOutline: LazyComponent<typeof import("../assets/icons/Checkmark--outline")['default']>
export const LazySvgoIconsCheckmark: LazyComponent<typeof import("../assets/icons/Checkmark")['default']>
export const LazySvgoIconsChemistryReference: LazyComponent<typeof import("../assets/icons/Chemistry--reference")['default']>
export const LazySvgoIconsChemistry: LazyComponent<typeof import("../assets/icons/Chemistry")['default']>
export const LazySvgoIconsChevronDownOutline: LazyComponent<typeof import("../assets/icons/Chevron--down--outline")['default']>
export const LazySvgoIconsChevronDown: LazyComponent<typeof import("../assets/icons/Chevron--down")['default']>
export const LazySvgoIconsChevronLeft: LazyComponent<typeof import("../assets/icons/Chevron--left")['default']>
export const LazySvgoIconsChevronMini: LazyComponent<typeof import("../assets/icons/Chevron--mini")['default']>
export const LazySvgoIconsChevronRight: LazyComponent<typeof import("../assets/icons/Chevron--right")['default']>
export const LazySvgoIconsChevronSortDown: LazyComponent<typeof import("../assets/icons/Chevron--sort--down")['default']>
export const LazySvgoIconsChevronSortUp: LazyComponent<typeof import("../assets/icons/Chevron--sort--up")['default']>
export const LazySvgoIconsChevronSort: LazyComponent<typeof import("../assets/icons/Chevron--sort")['default']>
export const LazySvgoIconsChevronUpOutline: LazyComponent<typeof import("../assets/icons/Chevron--up--outline")['default']>
export const LazySvgoIconsChevronUp: LazyComponent<typeof import("../assets/icons/Chevron--up")['default']>
export const LazySvgoIconsChip: LazyComponent<typeof import("../assets/icons/Chip")['default']>
export const LazySvgoIconsChoices: LazyComponent<typeof import("../assets/icons/Choices")['default']>
export const LazySvgoIconsChooseItem: LazyComponent<typeof import("../assets/icons/Choose-item")['default']>
export const LazySvgoIconsChoroplethMap: LazyComponent<typeof import("../assets/icons/Choropleth-map")['default']>
export const LazySvgoIconsCicsCmas: LazyComponent<typeof import("../assets/icons/Cics--cmas")['default']>
export const LazySvgoIconsCicsDb2Connection: LazyComponent<typeof import("../assets/icons/Cics--db2-connection")['default']>
export const LazySvgoIconsCicsExplorer: LazyComponent<typeof import("../assets/icons/Cics--explorer")['default']>
export const LazySvgoIconsCicsProgram: LazyComponent<typeof import("../assets/icons/Cics--program")['default']>
export const LazySvgoIconsCicsSitOverrides: LazyComponent<typeof import("../assets/icons/Cics--sit-overrides")['default']>
export const LazySvgoIconsCicsSit: LazyComponent<typeof import("../assets/icons/Cics--sit")['default']>
export const LazySvgoIconsCicsSystemGroup: LazyComponent<typeof import("../assets/icons/Cics--system-group")['default']>
export const LazySvgoIconsCicsTransactionServerZos: LazyComponent<typeof import("../assets/icons/Cics--transaction-server-zos")['default']>
export const LazySvgoIconsCicsWuiRegion: LazyComponent<typeof import("../assets/icons/Cics--wui-region")['default']>
export const LazySvgoIconsCicsRegionAlt: LazyComponent<typeof import("../assets/icons/Cics-region--alt")['default']>
export const LazySvgoIconsCicsRegionRouting: LazyComponent<typeof import("../assets/icons/Cics-region--routing")['default']>
export const LazySvgoIconsCicsRegionTarget: LazyComponent<typeof import("../assets/icons/Cics-region--target")['default']>
export const LazySvgoIconsCicsRegion: LazyComponent<typeof import("../assets/icons/Cics-region")['default']>
export const LazySvgoIconsCicsplex: LazyComponent<typeof import("../assets/icons/Cicsplex")['default']>
export const LazySvgoIconsCircleFilled: LazyComponent<typeof import("../assets/icons/Circle--filled")['default']>
export const LazySvgoIconsCircleOutline: LazyComponent<typeof import("../assets/icons/Circle--outline")['default']>
export const LazySvgoIconsCircleSolid: LazyComponent<typeof import("../assets/icons/Circle--solid")['default']>
export const LazySvgoIconsCircleDash: LazyComponent<typeof import("../assets/icons/Circle-dash")['default']>
export const LazySvgoIconsCircleFill: LazyComponent<typeof import("../assets/icons/Circle-fill")['default']>
export const LazySvgoIconsCircleMeasurement: LazyComponent<typeof import("../assets/icons/Circle-measurement")['default']>
export const LazySvgoIconsCirclePacking: LazyComponent<typeof import("../assets/icons/Circle-packing")['default']>
export const LazySvgoIconsCircleStroke: LazyComponent<typeof import("../assets/icons/Circle-stroke")['default']>
export const LazySvgoIconsCircuitComposer: LazyComponent<typeof import("../assets/icons/Circuit-composer")['default']>
export const LazySvgoIconsClassification: LazyComponent<typeof import("../assets/icons/Classification")['default']>
export const LazySvgoIconsClassifierLanguage: LazyComponent<typeof import("../assets/icons/Classifier--language")['default']>
export const LazySvgoIconsClean: LazyComponent<typeof import("../assets/icons/Clean")['default']>
export const LazySvgoIconsCloseFilled: LazyComponent<typeof import("../assets/icons/Close--filled")['default']>
export const LazySvgoIconsCloseLarge: LazyComponent<typeof import("../assets/icons/Close--large")['default']>
export const LazySvgoIconsCloseOutline: LazyComponent<typeof import("../assets/icons/Close--outline")['default']>
export const LazySvgoIconsClose: LazyComponent<typeof import("../assets/icons/Close")['default']>
export const LazySvgoIconsClosedCaptionAlt: LazyComponent<typeof import("../assets/icons/Closed-caption--alt")['default']>
export const LazySvgoIconsClosedCaptionFilled: LazyComponent<typeof import("../assets/icons/Closed-caption--filled")['default']>
export const LazySvgoIconsClosedCaption: LazyComponent<typeof import("../assets/icons/Closed-caption")['default']>
export const LazySvgoIconsCloudAlerting: LazyComponent<typeof import("../assets/icons/Cloud--alerting")['default']>
export const LazySvgoIconsCloudAuditing: LazyComponent<typeof import("../assets/icons/Cloud--auditing")['default']>
export const LazySvgoIconsCloudDataOps: LazyComponent<typeof import("../assets/icons/Cloud--data-ops")['default']>
export const LazySvgoIconsCloudDownload: LazyComponent<typeof import("../assets/icons/Cloud--download")['default']>
export const LazySvgoIconsCloudLogging: LazyComponent<typeof import("../assets/icons/Cloud--logging")['default']>
export const LazySvgoIconsCloudMonitoring: LazyComponent<typeof import("../assets/icons/Cloud--monitoring")['default']>
export const LazySvgoIconsCloudOffline: LazyComponent<typeof import("../assets/icons/Cloud--offline")['default']>
export const LazySvgoIconsCloudServiceManagement: LazyComponent<typeof import("../assets/icons/Cloud--service-management")['default']>
export const LazySvgoIconsCloudUpload: LazyComponent<typeof import("../assets/icons/Cloud--upload")['default']>
export const LazySvgoIconsCloudApp: LazyComponent<typeof import("../assets/icons/Cloud-app")['default']>
export const LazySvgoIconsCloudCeiling: LazyComponent<typeof import("../assets/icons/Cloud-ceiling")['default']>
export const LazySvgoIconsCloudFoundry1: LazyComponent<typeof import("../assets/icons/Cloud-foundry--1")['default']>
export const LazySvgoIconsCloudFoundry2: LazyComponent<typeof import("../assets/icons/Cloud-foundry--2")['default']>
export const LazySvgoIconsCloudRegistry: LazyComponent<typeof import("../assets/icons/Cloud-registry")['default']>
export const LazySvgoIconsCloudSatelliteConfig: LazyComponent<typeof import("../assets/icons/Cloud-satellite--config")['default']>
export const LazySvgoIconsCloudSatelliteLink: LazyComponent<typeof import("../assets/icons/Cloud-satellite--link")['default']>
export const LazySvgoIconsCloudSatelliteServices: LazyComponent<typeof import("../assets/icons/Cloud-satellite--services")['default']>
export const LazySvgoIconsCloudSatellite: LazyComponent<typeof import("../assets/icons/Cloud-satellite")['default']>
export const LazySvgoIconsCloudServices: LazyComponent<typeof import("../assets/icons/Cloud-services")['default']>
export const LazySvgoIconsCloud: LazyComponent<typeof import("../assets/icons/Cloud")['default']>
export const LazySvgoIconsCloudy: LazyComponent<typeof import("../assets/icons/Cloudy")['default']>
export const LazySvgoIconsCobbAngle: LazyComponent<typeof import("../assets/icons/Cobb-angle")['default']>
export const LazySvgoIconsCodeHide: LazyComponent<typeof import("../assets/icons/Code--hide")['default']>
export const LazySvgoIconsCodeReference: LazyComponent<typeof import("../assets/icons/Code--reference")['default']>
export const LazySvgoIconsCodeBlock: LazyComponent<typeof import("../assets/icons/Code-block")['default']>
export const LazySvgoIconsCodeSigningService: LazyComponent<typeof import("../assets/icons/Code-signing-service")['default']>
export const LazySvgoIconsCode: LazyComponent<typeof import("../assets/icons/Code")['default']>
export const LazySvgoIconsCognitive: LazyComponent<typeof import("../assets/icons/Cognitive")['default']>
export const LazySvgoIconsCollaborate: LazyComponent<typeof import("../assets/icons/Collaborate")['default']>
export const LazySvgoIconsCollapseAll: LazyComponent<typeof import("../assets/icons/Collapse-all")['default']>
export const LazySvgoIconsCollapseCategories: LazyComponent<typeof import("../assets/icons/Collapse-categories")['default']>
export const LazySvgoIconsColorPalette: LazyComponent<typeof import("../assets/icons/Color-palette")['default']>
export const LazySvgoIconsColorSwitch: LazyComponent<typeof import("../assets/icons/Color-switch")['default']>
export const LazySvgoIconsColumnDelete: LazyComponent<typeof import("../assets/icons/Column--delete")['default']>
export const LazySvgoIconsColumnInsert: LazyComponent<typeof import("../assets/icons/Column--insert")['default']>
export const LazySvgoIconsColumnDependency: LazyComponent<typeof import("../assets/icons/Column-dependency")['default']>
export const LazySvgoIconsColumn: LazyComponent<typeof import("../assets/icons/Column")['default']>
export const LazySvgoIconsCommit: LazyComponent<typeof import("../assets/icons/Commit")['default']>
export const LazySvgoIconsCommunicationUnified: LazyComponent<typeof import("../assets/icons/Communication--unified")['default']>
export const LazySvgoIconsCompare: LazyComponent<typeof import("../assets/icons/Compare")['default']>
export const LazySvgoIconsCompass: LazyComponent<typeof import("../assets/icons/Compass")['default']>
export const LazySvgoIconsComposerEdit: LazyComponent<typeof import("../assets/icons/Composer-edit")['default']>
export const LazySvgoIconsConcept: LazyComponent<typeof import("../assets/icons/Concept")['default']>
export const LazySvgoIconsConditionPoint: LazyComponent<typeof import("../assets/icons/Condition--point")['default']>
export const LazySvgoIconsConditionWaitPoint: LazyComponent<typeof import("../assets/icons/Condition--wait-point")['default']>
export const LazySvgoIconsConnectRecursive: LazyComponent<typeof import("../assets/icons/Connect--recursive")['default']>
export const LazySvgoIconsConnectReference: LazyComponent<typeof import("../assets/icons/Connect--reference")['default']>
export const LazySvgoIconsConnectSource: LazyComponent<typeof import("../assets/icons/Connect--source")['default']>
export const LazySvgoIconsConnectTarget: LazyComponent<typeof import("../assets/icons/Connect--target")['default']>
export const LazySvgoIconsConnect: LazyComponent<typeof import("../assets/icons/Connect")['default']>
export const LazySvgoIconsConnectionReceive: LazyComponent<typeof import("../assets/icons/Connection--receive")['default']>
export const LazySvgoIconsConnectionSend: LazyComponent<typeof import("../assets/icons/Connection--send")['default']>
export const LazySvgoIconsConnectionTwoWay: LazyComponent<typeof import("../assets/icons/Connection--two-way")['default']>
export const LazySvgoIconsConnectionUsage: LazyComponent<typeof import("../assets/icons/Connection--usage")['default']>
export const LazySvgoIconsConnectionFlowUsage: LazyComponent<typeof import("../assets/icons/Connection-flow--usage")['default']>
export const LazySvgoIconsConnectionSignalOff: LazyComponent<typeof import("../assets/icons/Connection-signal--off")['default']>
export const LazySvgoIconsConnectionSignal: LazyComponent<typeof import("../assets/icons/Connection-signal")['default']>
export const LazySvgoIconsConstraint: LazyComponent<typeof import("../assets/icons/Constraint")['default']>
export const LazySvgoIconsConstruction: LazyComponent<typeof import("../assets/icons/Construction")['default']>
export const LazySvgoIconsContainerEngine: LazyComponent<typeof import("../assets/icons/Container--engine")['default']>
export const LazySvgoIconsContainerImage: LazyComponent<typeof import("../assets/icons/Container--image")['default']>
export const LazySvgoIconsContainerRuntimeMonitor: LazyComponent<typeof import("../assets/icons/Container--runtime-monitor")['default']>
export const LazySvgoIconsContainerRuntime: LazyComponent<typeof import("../assets/icons/Container--runtime")['default']>
export const LazySvgoIconsContainerImagePull: LazyComponent<typeof import("../assets/icons/Container-image--pull")['default']>
export const LazySvgoIconsContainerImagePushPull: LazyComponent<typeof import("../assets/icons/Container-image--push-pull")['default']>
export const LazySvgoIconsContainerImagePush: LazyComponent<typeof import("../assets/icons/Container-image--push")['default']>
export const LazySvgoIconsContainerRegistry: LazyComponent<typeof import("../assets/icons/Container-registry")['default']>
export const LazySvgoIconsContainerServices: LazyComponent<typeof import("../assets/icons/Container-services")['default']>
export const LazySvgoIconsContainerSoftware: LazyComponent<typeof import("../assets/icons/Container-software")['default']>
export const LazySvgoIconsContentDeliveryNetwork: LazyComponent<typeof import("../assets/icons/Content-delivery-network")['default']>
export const LazySvgoIconsContentView: LazyComponent<typeof import("../assets/icons/Content-view")['default']>
export const LazySvgoIconsContinueFilled: LazyComponent<typeof import("../assets/icons/Continue--filled")['default']>
export const LazySvgoIconsContinue: LazyComponent<typeof import("../assets/icons/Continue")['default']>
export const LazySvgoIconsContinuousDeployment: LazyComponent<typeof import("../assets/icons/Continuous-deployment")['default']>
export const LazySvgoIconsContinuousIntegration: LazyComponent<typeof import("../assets/icons/Continuous-integration")['default']>
export const LazySvgoIconsContourDraw: LazyComponent<typeof import("../assets/icons/Contour--draw")['default']>
export const LazySvgoIconsContourEdit: LazyComponent<typeof import("../assets/icons/Contour--edit")['default']>
export const LazySvgoIconsContourFinding: LazyComponent<typeof import("../assets/icons/Contour-finding")['default']>
export const LazySvgoIconsContrast: LazyComponent<typeof import("../assets/icons/Contrast")['default']>
export const LazySvgoIconsConvertToCloud: LazyComponent<typeof import("../assets/icons/Convert-to-cloud")['default']>
export const LazySvgoIconsCookie: LazyComponent<typeof import("../assets/icons/Cookie")['default']>
export const LazySvgoIconsCopyFile: LazyComponent<typeof import("../assets/icons/Copy--file")['default']>
export const LazySvgoIconsCopyLink: LazyComponent<typeof import("../assets/icons/Copy--link")['default']>
export const LazySvgoIconsCopy: LazyComponent<typeof import("../assets/icons/Copy")['default']>
export const LazySvgoIconsCorn: LazyComponent<typeof import("../assets/icons/Corn")['default']>
export const LazySvgoIconsCorner: LazyComponent<typeof import("../assets/icons/Corner")['default']>
export const LazySvgoIconsCoronavirus: LazyComponent<typeof import("../assets/icons/Coronavirus")['default']>
export const LazySvgoIconsCostTotal: LazyComponent<typeof import("../assets/icons/Cost--total")['default']>
export const LazySvgoIconsCost: LazyComponent<typeof import("../assets/icons/Cost")['default']>
export const LazySvgoIconsCough: LazyComponent<typeof import("../assets/icons/Cough")['default']>
export const LazySvgoIconsCourse: LazyComponent<typeof import("../assets/icons/Course")['default']>
export const LazySvgoIconsCovariate: LazyComponent<typeof import("../assets/icons/Covariate")['default']>
export const LazySvgoIconsCredentials: LazyComponent<typeof import("../assets/icons/Credentials")['default']>
export const LazySvgoIconsCriticalSeverity: LazyComponent<typeof import("../assets/icons/Critical-severity")['default']>
export const LazySvgoIconsCritical: LazyComponent<typeof import("../assets/icons/Critical")['default']>
export const LazySvgoIconsCropGrowth: LazyComponent<typeof import("../assets/icons/Crop-growth")['default']>
export const LazySvgoIconsCropHealth: LazyComponent<typeof import("../assets/icons/Crop-health")['default']>
export const LazySvgoIconsCrop: LazyComponent<typeof import("../assets/icons/Crop")['default']>
export const LazySvgoIconsCrossReference: LazyComponent<typeof import("../assets/icons/Cross-reference")['default']>
export const LazySvgoIconsCrossTab: LazyComponent<typeof import("../assets/icons/Cross-tab")['default']>
export const LazySvgoIconsCrossroads: LazyComponent<typeof import("../assets/icons/Crossroads")['default']>
export const LazySvgoIconsCrowdReportFilled: LazyComponent<typeof import("../assets/icons/Crowd-report--filled")['default']>
export const LazySvgoIconsCrowdReport: LazyComponent<typeof import("../assets/icons/Crowd-report")['default']>
export const LazySvgoIconsCsv: LazyComponent<typeof import("../assets/icons/Csv")['default']>
export const LazySvgoIconsCu1: LazyComponent<typeof import("../assets/icons/Cu1")['default']>
export const LazySvgoIconsCu3: LazyComponent<typeof import("../assets/icons/Cu3")['default']>
export const LazySvgoIconsCubeView: LazyComponent<typeof import("../assets/icons/Cube-view")['default']>
export const LazySvgoIconsCube: LazyComponent<typeof import("../assets/icons/Cube")['default']>
export const LazySvgoIconsCurrencyBaht: LazyComponent<typeof import("../assets/icons/Currency--baht")['default']>
export const LazySvgoIconsCurrencyDollar: LazyComponent<typeof import("../assets/icons/Currency--dollar")['default']>
export const LazySvgoIconsCurrencyEuro: LazyComponent<typeof import("../assets/icons/Currency--euro")['default']>
export const LazySvgoIconsCurrencyLira: LazyComponent<typeof import("../assets/icons/Currency--lira")['default']>
export const LazySvgoIconsCurrencyPound: LazyComponent<typeof import("../assets/icons/Currency--pound")['default']>
export const LazySvgoIconsCurrencyRuble: LazyComponent<typeof import("../assets/icons/Currency--ruble")['default']>
export const LazySvgoIconsCurrencyRupee: LazyComponent<typeof import("../assets/icons/Currency--rupee")['default']>
export const LazySvgoIconsCurrencyShekel: LazyComponent<typeof import("../assets/icons/Currency--shekel")['default']>
export const LazySvgoIconsCurrencyWon: LazyComponent<typeof import("../assets/icons/Currency--won")['default']>
export const LazySvgoIconsCurrencyYen: LazyComponent<typeof import("../assets/icons/Currency--yen")['default']>
export const LazySvgoIconsCurrency: LazyComponent<typeof import("../assets/icons/Currency")['default']>
export const LazySvgoIconsCursor1: LazyComponent<typeof import("../assets/icons/Cursor--1")['default']>
export const LazySvgoIconsCursor2: LazyComponent<typeof import("../assets/icons/Cursor--2")['default']>
export const LazySvgoIconsCustomerService: LazyComponent<typeof import("../assets/icons/Customer-service")['default']>
export const LazySvgoIconsCustomer: LazyComponent<typeof import("../assets/icons/Customer")['default']>
export const LazySvgoIconsCutInHalf: LazyComponent<typeof import("../assets/icons/Cut-in-half")['default']>
export const LazySvgoIconsCutOut: LazyComponent<typeof import("../assets/icons/Cut-out")['default']>
export const LazySvgoIconsCut: LazyComponent<typeof import("../assets/icons/Cut")['default']>
export const LazySvgoIconsCy: LazyComponent<typeof import("../assets/icons/Cy")['default']>
export const LazySvgoIconsCyclist: LazyComponent<typeof import("../assets/icons/Cyclist")['default']>
export const LazySvgoIconsCz: LazyComponent<typeof import("../assets/icons/Cz")['default']>
export const LazySvgoIconsDashboardReference: LazyComponent<typeof import("../assets/icons/Dashboard--reference")['default']>
export const LazySvgoIconsDashboard: LazyComponent<typeof import("../assets/icons/Dashboard")['default']>
export const LazySvgoIconsData1: LazyComponent<typeof import("../assets/icons/Data--1")['default']>
export const LazySvgoIconsData2: LazyComponent<typeof import("../assets/icons/Data--2")['default']>
export const LazySvgoIconsDataBaseAlt: LazyComponent<typeof import("../assets/icons/Data--base--alt")['default']>
export const LazySvgoIconsDataBase: LazyComponent<typeof import("../assets/icons/Data--base")['default']>
export const LazySvgoIconsDataCategorical: LazyComponent<typeof import("../assets/icons/Data--categorical")['default']>
export const LazySvgoIconsDataCenter: LazyComponent<typeof import("../assets/icons/Data--center")['default']>
export const LazySvgoIconsDataCheck: LazyComponent<typeof import("../assets/icons/Data--check")['default']>
export const LazySvgoIconsDataConnected: LazyComponent<typeof import("../assets/icons/Data--connected")['default']>
export const LazySvgoIconsDataError: LazyComponent<typeof import("../assets/icons/Data--error")['default']>
export const LazySvgoIconsDataFormat: LazyComponent<typeof import("../assets/icons/Data--format")['default']>
export const LazySvgoIconsDataReference: LazyComponent<typeof import("../assets/icons/Data--reference")['default']>
export const LazySvgoIconsDataRegular: LazyComponent<typeof import("../assets/icons/Data--regular")['default']>
export const LazySvgoIconsDataSet: LazyComponent<typeof import("../assets/icons/Data--set")['default']>
export const LazySvgoIconsDataStructured: LazyComponent<typeof import("../assets/icons/Data--structured")['default']>
export const LazySvgoIconsDataUnreal: LazyComponent<typeof import("../assets/icons/Data--unreal")['default']>
export const LazySvgoIconsDataUnstructured: LazyComponent<typeof import("../assets/icons/Data--unstructured")['default']>
export const LazySvgoIconsDataViewAlt: LazyComponent<typeof import("../assets/icons/Data--view--alt")['default']>
export const LazySvgoIconsDataView: LazyComponent<typeof import("../assets/icons/Data--view")['default']>
export const LazySvgoIconsDataAccessor: LazyComponent<typeof import("../assets/icons/Data-accessor")['default']>
export const LazySvgoIconsDataAnalytics: LazyComponent<typeof import("../assets/icons/Data-analytics")['default']>
export const LazySvgoIconsDataBackup: LazyComponent<typeof import("../assets/icons/Data-backup")['default']>
export const LazySvgoIconsDataBin: LazyComponent<typeof import("../assets/icons/Data-bin")['default']>
export const LazySvgoIconsDataBlob: LazyComponent<typeof import("../assets/icons/Data-blob")['default']>
export const LazySvgoIconsDataClass: LazyComponent<typeof import("../assets/icons/Data-class")['default']>
export const LazySvgoIconsDataCollection: LazyComponent<typeof import("../assets/icons/Data-collection")['default']>
export const LazySvgoIconsDataDefinition: LazyComponent<typeof import("../assets/icons/Data-definition")['default']>
export const LazySvgoIconsDataDiode: LazyComponent<typeof import("../assets/icons/Data-diode")['default']>
export const LazySvgoIconsDataEnrichmentAdd: LazyComponent<typeof import("../assets/icons/Data-enrichment--add")['default']>
export const LazySvgoIconsDataEnrichment: LazyComponent<typeof import("../assets/icons/Data-enrichment")['default']>
export const LazySvgoIconsDataPlayer: LazyComponent<typeof import("../assets/icons/Data-player")['default']>
export const LazySvgoIconsDataQualityDefinition: LazyComponent<typeof import("../assets/icons/Data-quality-definition")['default']>
export const LazySvgoIconsDataRefineryReference: LazyComponent<typeof import("../assets/icons/Data-refinery--reference")['default']>
export const LazySvgoIconsDataRefinery: LazyComponent<typeof import("../assets/icons/Data-refinery")['default']>
export const LazySvgoIconsDataShare: LazyComponent<typeof import("../assets/icons/Data-share")['default']>
export const LazySvgoIconsDataTableReference: LazyComponent<typeof import("../assets/icons/Data-table--reference")['default']>
export const LazySvgoIconsDataTable: LazyComponent<typeof import("../assets/icons/Data-table")['default']>
export const LazySvgoIconsDataVis1: LazyComponent<typeof import("../assets/icons/Data-vis--1")['default']>
export const LazySvgoIconsDataVis2: LazyComponent<typeof import("../assets/icons/Data-vis--2")['default']>
export const LazySvgoIconsDataVis3: LazyComponent<typeof import("../assets/icons/Data-vis--3")['default']>
export const LazySvgoIconsDataVis4: LazyComponent<typeof import("../assets/icons/Data-vis--4")['default']>
export const LazySvgoIconsDataVolumeAlt: LazyComponent<typeof import("../assets/icons/Data-volume--alt")['default']>
export const LazySvgoIconsDataVolume: LazyComponent<typeof import("../assets/icons/Data-volume")['default']>
export const LazySvgoIconsDatabaseDatastax: LazyComponent<typeof import("../assets/icons/Database--datastax")['default']>
export const LazySvgoIconsDatabaseElastic: LazyComponent<typeof import("../assets/icons/Database--elastic")['default']>
export const LazySvgoIconsDatabaseEnterprisedb: LazyComponent<typeof import("../assets/icons/Database--enterprisedb")['default']>
export const LazySvgoIconsDatabaseEtcd: LazyComponent<typeof import("../assets/icons/Database--etcd")['default']>
export const LazySvgoIconsDatabaseMessaging: LazyComponent<typeof import("../assets/icons/Database--messaging")['default']>
export const LazySvgoIconsDatabaseMongodb: LazyComponent<typeof import("../assets/icons/Database--mongodb")['default']>
export const LazySvgoIconsDatabasePostgresql: LazyComponent<typeof import("../assets/icons/Database--postgresql")['default']>
export const LazySvgoIconsDatabaseRabbit: LazyComponent<typeof import("../assets/icons/Database--rabbit")['default']>
export const LazySvgoIconsDatabaseRedis: LazyComponent<typeof import("../assets/icons/Database--redis")['default']>
export const LazySvgoIconsDatastore: LazyComponent<typeof import("../assets/icons/Datastore")['default']>
export const LazySvgoIconsDb2BufferPool: LazyComponent<typeof import("../assets/icons/Db2--buffer-pool")['default']>
export const LazySvgoIconsDb2DataSharingGroup: LazyComponent<typeof import("../assets/icons/Db2--data-sharing-group")['default']>
export const LazySvgoIconsDb2Database: LazyComponent<typeof import("../assets/icons/Db2--database")['default']>
export const LazySvgoIconsDebug: LazyComponent<typeof import("../assets/icons/Debug")['default']>
export const LazySvgoIconsDecisionNode: LazyComponent<typeof import("../assets/icons/Decision-node")['default']>
export const LazySvgoIconsDecisionTree: LazyComponent<typeof import("../assets/icons/Decision-tree")['default']>
export const LazySvgoIconsDelete: LazyComponent<typeof import("../assets/icons/Delete")['default']>
export const LazySvgoIconsDeliveryAdd: LazyComponent<typeof import("../assets/icons/Delivery--add")['default']>
export const LazySvgoIconsDeliveryParcel: LazyComponent<typeof import("../assets/icons/Delivery--parcel")['default']>
export const LazySvgoIconsDeliveryTruck: LazyComponent<typeof import("../assets/icons/Delivery-truck")['default']>
export const LazySvgoIconsDelivery: LazyComponent<typeof import("../assets/icons/Delivery")['default']>
export const LazySvgoIconsDemo: LazyComponent<typeof import("../assets/icons/Demo")['default']>
export const LazySvgoIconsDenominate: LazyComponent<typeof import("../assets/icons/Denominate")['default']>
export const LazySvgoIconsDeparture: LazyComponent<typeof import("../assets/icons/Departure")['default']>
export const LazySvgoIconsDeployRules: LazyComponent<typeof import("../assets/icons/Deploy-rules")['default']>
export const LazySvgoIconsDeploy: LazyComponent<typeof import("../assets/icons/Deploy")['default']>
export const LazySvgoIconsDeploymentPattern: LazyComponent<typeof import("../assets/icons/Deployment-pattern")['default']>
export const LazySvgoIconsDeploymentPolicy: LazyComponent<typeof import("../assets/icons/Deployment-policy")['default']>
export const LazySvgoIconsDeploymentUnitData: LazyComponent<typeof import("../assets/icons/Deployment-unit--data")['default']>
export const LazySvgoIconsDeploymentUnitExecution: LazyComponent<typeof import("../assets/icons/Deployment-unit--execution")['default']>
export const LazySvgoIconsDeploymentUnitInstallation1: LazyComponent<typeof import("../assets/icons/Deployment-unit--installation1")['default']>
export const LazySvgoIconsDeploymentUnitPresentation: LazyComponent<typeof import("../assets/icons/Deployment-unit--presentation")['default']>
export const LazySvgoIconsDeploymentUnitTechnicalData: LazyComponent<typeof import("../assets/icons/Deployment-unit--technical--data")['default']>
export const LazySvgoIconsDeploymentUnitTechnicalExecution: LazyComponent<typeof import("../assets/icons/Deployment-unit--technical--execution")['default']>
export const LazySvgoIconsDeploymentUnitTechnicalInstallation: LazyComponent<typeof import("../assets/icons/Deployment-unit--technical--installation")['default']>
export const LazySvgoIconsDeploymentUnitTechnicalPresentation: LazyComponent<typeof import("../assets/icons/Deployment-unit--technical--presentation")['default']>
export const LazySvgoIconsDeskAdjustable: LazyComponent<typeof import("../assets/icons/Desk--adjustable")['default']>
export const LazySvgoIconsDevelopment: LazyComponent<typeof import("../assets/icons/Development")['default']>
export const LazySvgoIconsDevicesApps: LazyComponent<typeof import("../assets/icons/Devices--apps")['default']>
export const LazySvgoIconsDevices: LazyComponent<typeof import("../assets/icons/Devices")['default']>
export const LazySvgoIconsDewPointFilled: LazyComponent<typeof import("../assets/icons/Dew-point--filled")['default']>
export const LazySvgoIconsDewPoint: LazyComponent<typeof import("../assets/icons/Dew-point")['default']>
export const LazySvgoIconsDiagramReference: LazyComponent<typeof import("../assets/icons/Diagram--reference")['default']>
export const LazySvgoIconsDiagram: LazyComponent<typeof import("../assets/icons/Diagram")['default']>
export const LazySvgoIconsDiamondOutline: LazyComponent<typeof import("../assets/icons/Diamond--outline")['default']>
export const LazySvgoIconsDiamondSolid: LazyComponent<typeof import("../assets/icons/Diamond--solid")['default']>
export const LazySvgoIconsDiamondFill: LazyComponent<typeof import("../assets/icons/Diamond-fill")['default']>
export const LazySvgoIconsDicom6000: LazyComponent<typeof import("../assets/icons/Dicom--6000")['default']>
export const LazySvgoIconsDicomOverlay: LazyComponent<typeof import("../assets/icons/Dicom--overlay")['default']>
export const LazySvgoIconsDirectionBearRight01Filled: LazyComponent<typeof import("../assets/icons/Direction--bear-right--01--filled")['default']>
export const LazySvgoIconsDirectionBearRight01: LazyComponent<typeof import("../assets/icons/Direction--bear-right--01")['default']>
export const LazySvgoIconsDirectionBearRight02Filled: LazyComponent<typeof import("../assets/icons/Direction--bear-right--02--filled")['default']>
export const LazySvgoIconsDirectionBearRight02: LazyComponent<typeof import("../assets/icons/Direction--bear-right--02")['default']>
export const LazySvgoIconsDirectionCurveFilled: LazyComponent<typeof import("../assets/icons/Direction--curve--filled")['default']>
export const LazySvgoIconsDirectionCurve: LazyComponent<typeof import("../assets/icons/Direction--curve")['default']>
export const LazySvgoIconsDirectionForkFilled: LazyComponent<typeof import("../assets/icons/Direction--fork--filled")['default']>
export const LazySvgoIconsDirectionFork: LazyComponent<typeof import("../assets/icons/Direction--fork")['default']>
export const LazySvgoIconsDirectionLoopLeftFilled: LazyComponent<typeof import("../assets/icons/Direction--loop-left--filled")['default']>
export const LazySvgoIconsDirectionLoopLeft: LazyComponent<typeof import("../assets/icons/Direction--loop-left")['default']>
export const LazySvgoIconsDirectionLoopRightFilled: LazyComponent<typeof import("../assets/icons/Direction--loop-right--filled")['default']>
export const LazySvgoIconsDirectionLoopRight: LazyComponent<typeof import("../assets/icons/Direction--loop-right")['default']>
export const LazySvgoIconsDirectionMergeFilled: LazyComponent<typeof import("../assets/icons/Direction--merge--filled")['default']>
export const LazySvgoIconsDirectionMerge: LazyComponent<typeof import("../assets/icons/Direction--merge")['default']>
export const LazySvgoIconsDirectionRight01Filled: LazyComponent<typeof import("../assets/icons/Direction--right--01--filled")['default']>
export const LazySvgoIconsDirectionRight01: LazyComponent<typeof import("../assets/icons/Direction--right--01")['default']>
export const LazySvgoIconsDirectionRight02Filled: LazyComponent<typeof import("../assets/icons/Direction--right--02--filled")['default']>
export const LazySvgoIconsDirectionRight02: LazyComponent<typeof import("../assets/icons/Direction--right--02")['default']>
export const LazySvgoIconsDirectionRotaryFirstRightFilled: LazyComponent<typeof import("../assets/icons/Direction--rotary--first-right--filled")['default']>
export const LazySvgoIconsDirectionRotaryFirstRight: LazyComponent<typeof import("../assets/icons/Direction--rotary--first-right")['default']>
export const LazySvgoIconsDirectionRotaryRightFilled: LazyComponent<typeof import("../assets/icons/Direction--rotary--right--filled")['default']>
export const LazySvgoIconsDirectionRotaryRight: LazyComponent<typeof import("../assets/icons/Direction--rotary--right")['default']>
export const LazySvgoIconsDirectionRotaryStraightFilled: LazyComponent<typeof import("../assets/icons/Direction--rotary--straight--filled")['default']>
export const LazySvgoIconsDirectionRotaryStraight: LazyComponent<typeof import("../assets/icons/Direction--rotary--straight")['default']>
export const LazySvgoIconsDirectionSharpTurnFilled: LazyComponent<typeof import("../assets/icons/Direction--sharp-turn--filled")['default']>
export const LazySvgoIconsDirectionSharpTurn: LazyComponent<typeof import("../assets/icons/Direction--sharp-turn")['default']>
export const LazySvgoIconsDirectionStraightFilled: LazyComponent<typeof import("../assets/icons/Direction--straight--filled")['default']>
export const LazySvgoIconsDirectionStraightRightFilled: LazyComponent<typeof import("../assets/icons/Direction--straight--right--filled")['default']>
export const LazySvgoIconsDirectionStraightRight: LazyComponent<typeof import("../assets/icons/Direction--straight--right")['default']>
export const LazySvgoIconsDirectionStraight: LazyComponent<typeof import("../assets/icons/Direction--straight")['default']>
export const LazySvgoIconsDirectionUTurnFilled: LazyComponent<typeof import("../assets/icons/Direction--u-turn--filled")['default']>
export const LazySvgoIconsDirectionUTurn: LazyComponent<typeof import("../assets/icons/Direction--u-turn")['default']>
export const LazySvgoIconsDirectoryDomain: LazyComponent<typeof import("../assets/icons/Directory-domain")['default']>
export const LazySvgoIconsDistributeHorizontalCenter: LazyComponent<typeof import("../assets/icons/Distribute--horizontal-center")['default']>
export const LazySvgoIconsDistributeHorizontalLeft: LazyComponent<typeof import("../assets/icons/Distribute--horizontal-left")['default']>
export const LazySvgoIconsDistributeHorizontalRight: LazyComponent<typeof import("../assets/icons/Distribute--horizontal-right")['default']>
export const LazySvgoIconsDistributeVerticalBottom: LazyComponent<typeof import("../assets/icons/Distribute--vertical-bottom")['default']>
export const LazySvgoIconsDistributeVerticalCenter: LazyComponent<typeof import("../assets/icons/Distribute--vertical-center")['default']>
export const LazySvgoIconsDistributeVerticalTop: LazyComponent<typeof import("../assets/icons/Distribute--vertical-top")['default']>
export const LazySvgoIconsDna: LazyComponent<typeof import("../assets/icons/Dna")['default']>
export const LazySvgoIconsDnsServices: LazyComponent<typeof import("../assets/icons/Dns-services")['default']>
export const LazySvgoIconsDoc: LazyComponent<typeof import("../assets/icons/Doc")['default']>
export const LazySvgoIconsDocumentAdd: LazyComponent<typeof import("../assets/icons/Document--add")['default']>
export const LazySvgoIconsDocumentAttachment: LazyComponent<typeof import("../assets/icons/Document--attachment")['default']>
export const LazySvgoIconsDocumentAudio: LazyComponent<typeof import("../assets/icons/Document--audio")['default']>
export const LazySvgoIconsDocumentBlank: LazyComponent<typeof import("../assets/icons/Document--blank")['default']>
export const LazySvgoIconsDocumentComment: LazyComponent<typeof import("../assets/icons/Document--comment")['default']>
export const LazySvgoIconsDocumentConfiguration: LazyComponent<typeof import("../assets/icons/Document--configuration")['default']>
export const LazySvgoIconsDocumentDownload: LazyComponent<typeof import("../assets/icons/Document--download")['default']>
export const LazySvgoIconsDocumentEpdf: LazyComponent<typeof import("../assets/icons/Document--epdf")['default']>
export const LazySvgoIconsDocumentExport: LazyComponent<typeof import("../assets/icons/Document--export")['default']>
export const LazySvgoIconsDocumentHorizontal: LazyComponent<typeof import("../assets/icons/Document--horizontal")['default']>
export const LazySvgoIconsDocumentImport: LazyComponent<typeof import("../assets/icons/Document--import")['default']>
export const LazySvgoIconsDocumentMultiple01: LazyComponent<typeof import("../assets/icons/Document--multiple-01")['default']>
export const LazySvgoIconsDocumentMultiple02: LazyComponent<typeof import("../assets/icons/Document--multiple-02")['default']>
export const LazySvgoIconsDocumentPdf: LazyComponent<typeof import("../assets/icons/Document--pdf")['default']>
export const LazySvgoIconsDocumentPreliminary: LazyComponent<typeof import("../assets/icons/Document--preliminary")['default']>
export const LazySvgoIconsDocumentProtected: LazyComponent<typeof import("../assets/icons/Document--protected")['default']>
export const LazySvgoIconsDocumentRequirements: LazyComponent<typeof import("../assets/icons/Document--requirements")['default']>
export const LazySvgoIconsDocumentSecurity: LazyComponent<typeof import("../assets/icons/Document--security")['default']>
export const LazySvgoIconsDocumentSigned: LazyComponent<typeof import("../assets/icons/Document--signed")['default']>
export const LazySvgoIconsDocumentSketch: LazyComponent<typeof import("../assets/icons/Document--sketch")['default']>
export const LazySvgoIconsDocumentSubject: LazyComponent<typeof import("../assets/icons/Document--subject")['default']>
export const LazySvgoIconsDocumentSubtract: LazyComponent<typeof import("../assets/icons/Document--subtract")['default']>
export const LazySvgoIconsDocumentTasks: LazyComponent<typeof import("../assets/icons/Document--tasks")['default']>
export const LazySvgoIconsDocumentUnknown: LazyComponent<typeof import("../assets/icons/Document--unknown")['default']>
export const LazySvgoIconsDocumentUnprotected: LazyComponent<typeof import("../assets/icons/Document--unprotected")['default']>
export const LazySvgoIconsDocumentVertical: LazyComponent<typeof import("../assets/icons/Document--vertical")['default']>
export const LazySvgoIconsDocumentVideo: LazyComponent<typeof import("../assets/icons/Document--video")['default']>
export const LazySvgoIconsDocumentView: LazyComponent<typeof import("../assets/icons/Document--view")['default']>
export const LazySvgoIconsDocumentWordProcessorReference: LazyComponent<typeof import("../assets/icons/Document--word-processor--reference")['default']>
export const LazySvgoIconsDocumentWordProcessor: LazyComponent<typeof import("../assets/icons/Document--word-processor")['default']>
export const LazySvgoIconsDocumentSentiment: LazyComponent<typeof import("../assets/icons/Document-sentiment")['default']>
export const LazySvgoIconsDocument: LazyComponent<typeof import("../assets/icons/Document")['default']>
export const LazySvgoIconsDogWalker: LazyComponent<typeof import("../assets/icons/Dog-walker")['default']>
export const LazySvgoIconsDotMark: LazyComponent<typeof import("../assets/icons/Dot-mark")['default']>
export const LazySvgoIconsDoubleInteger: LazyComponent<typeof import("../assets/icons/Double-integer")['default']>
export const LazySvgoIconsDownToBottom: LazyComponent<typeof import("../assets/icons/Down-to-bottom")['default']>
export const LazySvgoIconsDownloadStudy: LazyComponent<typeof import("../assets/icons/Download-study")['default']>
export const LazySvgoIconsDownload: LazyComponent<typeof import("../assets/icons/Download")['default']>
export const LazySvgoIconsDownstream: LazyComponent<typeof import("../assets/icons/Downstream")['default']>
export const LazySvgoIconsDragHorizontal: LazyComponent<typeof import("../assets/icons/Drag--horizontal")['default']>
export const LazySvgoIconsDragVertical: LazyComponent<typeof import("../assets/icons/Drag--vertical")['default']>
export const LazySvgoIconsDraggable: LazyComponent<typeof import("../assets/icons/Draggable")['default']>
export const LazySvgoIconsDraw: LazyComponent<typeof import("../assets/icons/Draw")['default']>
export const LazySvgoIconsDrillBack: LazyComponent<typeof import("../assets/icons/Drill-back")['default']>
export const LazySvgoIconsDrillDown: LazyComponent<typeof import("../assets/icons/Drill-down")['default']>
export const LazySvgoIconsDrillThrough: LazyComponent<typeof import("../assets/icons/Drill-through")['default']>
export const LazySvgoIconsDrink01: LazyComponent<typeof import("../assets/icons/Drink--01")['default']>
export const LazySvgoIconsDrink02: LazyComponent<typeof import("../assets/icons/Drink--02")['default']>
export const LazySvgoIconsDriverAnalysis: LazyComponent<typeof import("../assets/icons/Driver-analysis")['default']>
export const LazySvgoIconsDroneDelivery: LazyComponent<typeof import("../assets/icons/Drone--delivery")['default']>
export const LazySvgoIconsDroneFront: LazyComponent<typeof import("../assets/icons/Drone--front")['default']>
export const LazySvgoIconsDroneVideo: LazyComponent<typeof import("../assets/icons/Drone--video")['default']>
export const LazySvgoIconsDrone: LazyComponent<typeof import("../assets/icons/Drone")['default']>
export const LazySvgoIconsDropPhotoFilled: LazyComponent<typeof import("../assets/icons/Drop-photo--filled")['default']>
export const LazySvgoIconsDropPhoto: LazyComponent<typeof import("../assets/icons/Drop-photo")['default']>
export const LazySvgoIconsDrought: LazyComponent<typeof import("../assets/icons/Drought")['default']>
export const LazySvgoIconsDvr: LazyComponent<typeof import("../assets/icons/Dvr")['default']>
export const LazySvgoIconsEarthAmericasFilled: LazyComponent<typeof import("../assets/icons/Earth--americas--filled")['default']>
export const LazySvgoIconsEarthAmericas: LazyComponent<typeof import("../assets/icons/Earth--americas")['default']>
export const LazySvgoIconsEarthEuropeAfricaFilled: LazyComponent<typeof import("../assets/icons/Earth--europe-africa--filled")['default']>
export const LazySvgoIconsEarthEuropeAfrica: LazyComponent<typeof import("../assets/icons/Earth--europe-africa")['default']>
export const LazySvgoIconsEarthFilled: LazyComponent<typeof import("../assets/icons/Earth--filled")['default']>
export const LazySvgoIconsEarthSoutheastAsiaFilled: LazyComponent<typeof import("../assets/icons/Earth--southeast-asia--filled")['default']>
export const LazySvgoIconsEarthSoutheastAsia: LazyComponent<typeof import("../assets/icons/Earth--southeast-asia")['default']>
export const LazySvgoIconsEarth: LazyComponent<typeof import("../assets/icons/Earth")['default']>
export const LazySvgoIconsEarthquake: LazyComponent<typeof import("../assets/icons/Earthquake")['default']>
export const LazySvgoIconsEdgeCluster: LazyComponent<typeof import("../assets/icons/Edge-cluster")['default']>
export const LazySvgoIconsEdgeDevice: LazyComponent<typeof import("../assets/icons/Edge-device")['default']>
export const LazySvgoIconsEdgeEnhancement01: LazyComponent<typeof import("../assets/icons/Edge-enhancement--01")['default']>
export const LazySvgoIconsEdgeEnhancement02: LazyComponent<typeof import("../assets/icons/Edge-enhancement--02")['default']>
export const LazySvgoIconsEdgeEnhancement03: LazyComponent<typeof import("../assets/icons/Edge-enhancement--03")['default']>
export const LazySvgoIconsEdgeEnhancement: LazyComponent<typeof import("../assets/icons/Edge-enhancement")['default']>
export const LazySvgoIconsEdgeNodeAlt: LazyComponent<typeof import("../assets/icons/Edge-node--alt")['default']>
export const LazySvgoIconsEdgeNode: LazyComponent<typeof import("../assets/icons/Edge-node")['default']>
export const LazySvgoIconsEdgeService: LazyComponent<typeof import("../assets/icons/Edge-service")['default']>
export const LazySvgoIconsEditOff: LazyComponent<typeof import("../assets/icons/Edit--off")['default']>
export const LazySvgoIconsEdit: LazyComponent<typeof import("../assets/icons/Edit")['default']>
export const LazySvgoIconsEdtLoop: LazyComponent<typeof import("../assets/icons/Edt-loop")['default']>
export const LazySvgoIconsEducation: LazyComponent<typeof import("../assets/icons/Education")['default']>
export const LazySvgoIconsEmailNew: LazyComponent<typeof import("../assets/icons/Email--new")['default']>
export const LazySvgoIconsEmail: LazyComponent<typeof import("../assets/icons/Email")['default']>
export const LazySvgoIconsEncryption: LazyComponent<typeof import("../assets/icons/Encryption")['default']>
export const LazySvgoIconsEnergyRenewable: LazyComponent<typeof import("../assets/icons/Energy--renewable")['default']>
export const LazySvgoIconsEnterprise: LazyComponent<typeof import("../assets/icons/Enterprise")['default']>
export const LazySvgoIconsEnumerationDefinition: LazyComponent<typeof import("../assets/icons/Enumeration--definition")['default']>
export const LazySvgoIconsEnumerationUsage: LazyComponent<typeof import("../assets/icons/Enumeration--usage")['default']>
export const LazySvgoIconsEqualApproximately: LazyComponent<typeof import("../assets/icons/Equal--approximately")['default']>
export const LazySvgoIconsEqualizer: LazyComponent<typeof import("../assets/icons/Equalizer")['default']>
export const LazySvgoIconsErase3d: LazyComponent<typeof import("../assets/icons/Erase--3d")['default']>
export const LazySvgoIconsErase: LazyComponent<typeof import("../assets/icons/Erase")['default']>
export const LazySvgoIconsErrorFilled: LazyComponent<typeof import("../assets/icons/Error--filled")['default']>
export const LazySvgoIconsErrorOutline: LazyComponent<typeof import("../assets/icons/Error--outline")['default']>
export const LazySvgoIconsError: LazyComponent<typeof import("../assets/icons/Error")['default']>
export const LazySvgoIconsEventChange: LazyComponent<typeof import("../assets/icons/Event--change")['default']>
export const LazySvgoIconsEventIncident: LazyComponent<typeof import("../assets/icons/Event--incident")['default']>
export const LazySvgoIconsEventSchedule: LazyComponent<typeof import("../assets/icons/Event--schedule")['default']>
export const LazySvgoIconsEventWarning: LazyComponent<typeof import("../assets/icons/Event--warning")['default']>
export const LazySvgoIconsEvent: LazyComponent<typeof import("../assets/icons/Event")['default']>
export const LazySvgoIconsEventsAlt: LazyComponent<typeof import("../assets/icons/Events--alt")['default']>
export const LazySvgoIconsEvents: LazyComponent<typeof import("../assets/icons/Events")['default']>
export const LazySvgoIconsExamMode: LazyComponent<typeof import("../assets/icons/Exam-mode")['default']>
export const LazySvgoIconsExecutableProgram: LazyComponent<typeof import("../assets/icons/Executable-program")['default']>
export const LazySvgoIconsExit: LazyComponent<typeof import("../assets/icons/Exit")['default']>
export const LazySvgoIconsExpandAll: LazyComponent<typeof import("../assets/icons/Expand-all")['default']>
export const LazySvgoIconsExpandCategories: LazyComponent<typeof import("../assets/icons/Expand-categories")['default']>
export const LazySvgoIconsExplore: LazyComponent<typeof import("../assets/icons/Explore")['default']>
export const LazySvgoIconsExport: LazyComponent<typeof import("../assets/icons/Export")['default']>
export const LazySvgoIconsEyedropper: LazyComponent<typeof import("../assets/icons/Eyedropper")['default']>
export const LazySvgoIconsFaceActivatedAdd: LazyComponent<typeof import("../assets/icons/Face--activated--add")['default']>
export const LazySvgoIconsFaceActivatedFilled: LazyComponent<typeof import("../assets/icons/Face--activated--filled")['default']>
export const LazySvgoIconsFaceActivated: LazyComponent<typeof import("../assets/icons/Face--activated")['default']>
export const LazySvgoIconsFaceAdd: LazyComponent<typeof import("../assets/icons/Face--add")['default']>
export const LazySvgoIconsFaceCool: LazyComponent<typeof import("../assets/icons/Face--cool")['default']>
export const LazySvgoIconsFaceDissatisfiedFilled: LazyComponent<typeof import("../assets/icons/Face--dissatisfied--filled")['default']>
export const LazySvgoIconsFaceDissatisfied: LazyComponent<typeof import("../assets/icons/Face--dissatisfied")['default']>
export const LazySvgoIconsFaceDizzyFilled: LazyComponent<typeof import("../assets/icons/Face--dizzy--filled")['default']>
export const LazySvgoIconsFaceDizzy: LazyComponent<typeof import("../assets/icons/Face--dizzy")['default']>
export const LazySvgoIconsFaceMask: LazyComponent<typeof import("../assets/icons/Face--mask")['default']>
export const LazySvgoIconsFaceNeutralFilled: LazyComponent<typeof import("../assets/icons/Face--neutral--filled")['default']>
export const LazySvgoIconsFaceNeutral: LazyComponent<typeof import("../assets/icons/Face--neutral")['default']>
export const LazySvgoIconsFacePendingFilled: LazyComponent<typeof import("../assets/icons/Face--pending--filled")['default']>
export const LazySvgoIconsFacePending: LazyComponent<typeof import("../assets/icons/Face--pending")['default']>
export const LazySvgoIconsFaceSatisfiedFilled: LazyComponent<typeof import("../assets/icons/Face--satisfied--filled")['default']>
export const LazySvgoIconsFaceSatisfied: LazyComponent<typeof import("../assets/icons/Face--satisfied")['default']>
export const LazySvgoIconsFaceWinkFilled: LazyComponent<typeof import("../assets/icons/Face--wink--filled")['default']>
export const LazySvgoIconsFaceWink: LazyComponent<typeof import("../assets/icons/Face--wink")['default']>
export const LazySvgoIconsFactor: LazyComponent<typeof import("../assets/icons/Factor")['default']>
export const LazySvgoIconsFade: LazyComponent<typeof import("../assets/icons/Fade")['default']>
export const LazySvgoIconsFavoriteFilled: LazyComponent<typeof import("../assets/icons/Favorite--filled")['default']>
export const LazySvgoIconsFavoriteHalf: LazyComponent<typeof import("../assets/icons/Favorite--half")['default']>
export const LazySvgoIconsFavorite: LazyComponent<typeof import("../assets/icons/Favorite")['default']>
export const LazySvgoIconsFeatureMembershipFilled: LazyComponent<typeof import("../assets/icons/Feature-membership--filled")['default']>
export const LazySvgoIconsFeatureMembership: LazyComponent<typeof import("../assets/icons/Feature-membership")['default']>
export const LazySvgoIconsFeatureTyping: LazyComponent<typeof import("../assets/icons/Feature-typing")['default']>
export const LazySvgoIconsFetchUploadCloud: LazyComponent<typeof import("../assets/icons/Fetch-upload--cloud")['default']>
export const LazySvgoIconsFetchUpload: LazyComponent<typeof import("../assets/icons/Fetch-upload")['default']>
export const LazySvgoIconsFileStorage: LazyComponent<typeof import("../assets/icons/File-storage")['default']>
export const LazySvgoIconsFilterEdit: LazyComponent<typeof import("../assets/icons/Filter--edit")['default']>
export const LazySvgoIconsFilterRemove: LazyComponent<typeof import("../assets/icons/Filter--remove")['default']>
export const LazySvgoIconsFilterReset: LazyComponent<typeof import("../assets/icons/Filter--reset")['default']>
export const LazySvgoIconsFilter: LazyComponent<typeof import("../assets/icons/Filter")['default']>
export const LazySvgoIconsFinance: LazyComponent<typeof import("../assets/icons/Finance")['default']>
export const LazySvgoIconsFingerprintRecognition: LazyComponent<typeof import("../assets/icons/Fingerprint-recognition")['default']>
export const LazySvgoIconsFire: LazyComponent<typeof import("../assets/icons/Fire")['default']>
export const LazySvgoIconsFirewallClassic: LazyComponent<typeof import("../assets/icons/Firewall--classic")['default']>
export const LazySvgoIconsFirewall: LazyComponent<typeof import("../assets/icons/Firewall")['default']>
export const LazySvgoIconsFishMultiple: LazyComponent<typeof import("../assets/icons/Fish--multiple")['default']>
export const LazySvgoIconsFish: LazyComponent<typeof import("../assets/icons/Fish")['default']>
export const LazySvgoIconsFitToHeight: LazyComponent<typeof import("../assets/icons/Fit-to-height")['default']>
export const LazySvgoIconsFitToScreen: LazyComponent<typeof import("../assets/icons/Fit-to-screen")['default']>
export const LazySvgoIconsFitToWidth1: LazyComponent<typeof import("../assets/icons/Fit-to-width1")['default']>
export const LazySvgoIconsFlagFilled: LazyComponent<typeof import("../assets/icons/Flag--filled")['default']>
export const LazySvgoIconsFlag: LazyComponent<typeof import("../assets/icons/Flag")['default']>
export const LazySvgoIconsFlaggingTaxi: LazyComponent<typeof import("../assets/icons/Flagging-taxi")['default']>
export const LazySvgoIconsFlashFilled: LazyComponent<typeof import("../assets/icons/Flash--filled")['default']>
export const LazySvgoIconsFlashOffFilled: LazyComponent<typeof import("../assets/icons/Flash--off--filled")['default']>
export const LazySvgoIconsFlashOff: LazyComponent<typeof import("../assets/icons/Flash--off")['default']>
export const LazySvgoIconsFlash: LazyComponent<typeof import("../assets/icons/Flash")['default']>
export const LazySvgoIconsFlightInternational: LazyComponent<typeof import("../assets/icons/Flight--international")['default']>
export const LazySvgoIconsFlightRoster: LazyComponent<typeof import("../assets/icons/Flight--roster")['default']>
export const LazySvgoIconsFlightSchedule: LazyComponent<typeof import("../assets/icons/Flight--schedule")['default']>
export const LazySvgoIconsFloatingIp: LazyComponent<typeof import("../assets/icons/Floating-ip")['default']>
export const LazySvgoIconsFloodWarning: LazyComponent<typeof import("../assets/icons/Flood--warning")['default']>
export const LazySvgoIconsFlood: LazyComponent<typeof import("../assets/icons/Flood")['default']>
export const LazySvgoIconsFloorplan: LazyComponent<typeof import("../assets/icons/Floorplan")['default']>
export const LazySvgoIconsFlowConnection: LazyComponent<typeof import("../assets/icons/Flow--connection")['default']>
export const LazySvgoIconsFlowData: LazyComponent<typeof import("../assets/icons/Flow--data")['default']>
export const LazySvgoIconsFlowModeler: LazyComponent<typeof import("../assets/icons/Flow--modeler")['default']>
export const LazySvgoIconsFlowStreamReference: LazyComponent<typeof import("../assets/icons/Flow--stream--reference")['default']>
export const LazySvgoIconsFlowStream: LazyComponent<typeof import("../assets/icons/Flow--stream")['default']>
export const LazySvgoIconsFlowLogsVpc: LazyComponent<typeof import("../assets/icons/Flow-logs-vpc")['default']>
export const LazySvgoIconsFlow: LazyComponent<typeof import("../assets/icons/Flow")['default']>
export const LazySvgoIconsFog: LazyComponent<typeof import("../assets/icons/Fog")['default']>
export const LazySvgoIconsFolderAdd: LazyComponent<typeof import("../assets/icons/Folder--add")['default']>
export const LazySvgoIconsFolderDetailsReference: LazyComponent<typeof import("../assets/icons/Folder--details--reference")['default']>
export const LazySvgoIconsFolderDetails: LazyComponent<typeof import("../assets/icons/Folder--details")['default']>
export const LazySvgoIconsFolderMoveTo: LazyComponent<typeof import("../assets/icons/Folder--move-to")['default']>
export const LazySvgoIconsFolderOff: LazyComponent<typeof import("../assets/icons/Folder--off")['default']>
export const LazySvgoIconsFolderOpen: LazyComponent<typeof import("../assets/icons/Folder--open")['default']>
export const LazySvgoIconsFolderParent: LazyComponent<typeof import("../assets/icons/Folder--parent")['default']>
export const LazySvgoIconsFolderShared: LazyComponent<typeof import("../assets/icons/Folder--shared")['default']>
export const LazySvgoIconsFolder: LazyComponent<typeof import("../assets/icons/Folder")['default']>
export const LazySvgoIconsFolders: LazyComponent<typeof import("../assets/icons/Folders")['default']>
export const LazySvgoIconsForecastHail30: LazyComponent<typeof import("../assets/icons/Forecast--hail-30")['default']>
export const LazySvgoIconsForecastHail: LazyComponent<typeof import("../assets/icons/Forecast--hail")['default']>
export const LazySvgoIconsForecastLightning30: LazyComponent<typeof import("../assets/icons/Forecast--lightning-30")['default']>
export const LazySvgoIconsForecastLightning: LazyComponent<typeof import("../assets/icons/Forecast--lightning")['default']>
export const LazySvgoIconsForkNode: LazyComponent<typeof import("../assets/icons/Fork-node")['default']>
export const LazySvgoIconsFork: LazyComponent<typeof import("../assets/icons/Fork")['default']>
export const LazySvgoIconsForum: LazyComponent<typeof import("../assets/icons/Forum")['default']>
export const LazySvgoIconsForward10: LazyComponent<typeof import("../assets/icons/Forward--10")['default']>
export const LazySvgoIconsForward30: LazyComponent<typeof import("../assets/icons/Forward--30")['default']>
export const LazySvgoIconsForward5: LazyComponent<typeof import("../assets/icons/Forward--5")['default']>
export const LazySvgoIconsFragile: LazyComponent<typeof import("../assets/icons/Fragile")['default']>
export const LazySvgoIconsFriendship: LazyComponent<typeof import("../assets/icons/Friendship")['default']>
export const LazySvgoIconsFruitBowl: LazyComponent<typeof import("../assets/icons/Fruit-bowl")['default']>
export const LazySvgoIconsFunctionMath: LazyComponent<typeof import("../assets/icons/Function-math")['default']>
export const LazySvgoIconsFunction: LazyComponent<typeof import("../assets/icons/Function")['default']>
export const LazySvgoIconsFusionBlender: LazyComponent<typeof import("../assets/icons/Fusion-blender")['default']>
export const LazySvgoIconsGameConsole: LazyComponent<typeof import("../assets/icons/Game--console")['default']>
export const LazySvgoIconsGameWireless: LazyComponent<typeof import("../assets/icons/Game--wireless")['default']>
export const LazySvgoIconsGamification: LazyComponent<typeof import("../assets/icons/Gamification")['default']>
export const LazySvgoIconsGasStationFilled: LazyComponent<typeof import("../assets/icons/Gas-station--filled")['default']>
export const LazySvgoIconsGasStation: LazyComponent<typeof import("../assets/icons/Gas-station")['default']>
export const LazySvgoIconsGatewayApi: LazyComponent<typeof import("../assets/icons/Gateway--api")['default']>
export const LazySvgoIconsGatewayMail: LazyComponent<typeof import("../assets/icons/Gateway--mail")['default']>
export const LazySvgoIconsGatewayPublic: LazyComponent<typeof import("../assets/icons/Gateway--public")['default']>
export const LazySvgoIconsGatewaySecurity: LazyComponent<typeof import("../assets/icons/Gateway--security")['default']>
export const LazySvgoIconsGatewayUserAccess: LazyComponent<typeof import("../assets/icons/Gateway--user-access")['default']>
export const LazySvgoIconsGatewayVpn: LazyComponent<typeof import("../assets/icons/Gateway--vpn")['default']>
export const LazySvgoIconsGateway: LazyComponent<typeof import("../assets/icons/Gateway")['default']>
export const LazySvgoIconsGears: LazyComponent<typeof import("../assets/icons/Gears")['default']>
export const LazySvgoIconsGemReference: LazyComponent<typeof import("../assets/icons/Gem--reference")['default']>
export const LazySvgoIconsGem: LazyComponent<typeof import("../assets/icons/Gem")['default']>
export const LazySvgoIconsGenderFemale: LazyComponent<typeof import("../assets/icons/Gender--female")['default']>
export const LazySvgoIconsGenderMale: LazyComponent<typeof import("../assets/icons/Gender--male")['default']>
export const LazySvgoIconsGeneratePdf: LazyComponent<typeof import("../assets/icons/Generate-pdf")['default']>
export const LazySvgoIconsGif: LazyComponent<typeof import("../assets/icons/Gif")['default']>
export const LazySvgoIconsGift: LazyComponent<typeof import("../assets/icons/Gift")['default']>
export const LazySvgoIconsGlobalLoanAndTrial: LazyComponent<typeof import("../assets/icons/Global-loan-and-trial")['default']>
export const LazySvgoIconsGlobe: LazyComponent<typeof import("../assets/icons/Globe")['default']>
export const LazySvgoIconsGradient: LazyComponent<typeof import("../assets/icons/Gradient")['default']>
export const LazySvgoIconsGraphicalDataFlow: LazyComponent<typeof import("../assets/icons/Graphical-data-flow")['default']>
export const LazySvgoIconsGrid: LazyComponent<typeof import("../assets/icons/Grid")['default']>
export const LazySvgoIconsGroupAccess: LazyComponent<typeof import("../assets/icons/Group--access")['default']>
export const LazySvgoIconsGroupAccount: LazyComponent<typeof import("../assets/icons/Group--account")['default']>
export const LazySvgoIconsGroupPresentation: LazyComponent<typeof import("../assets/icons/Group--presentation")['default']>
export const LazySvgoIconsGroupResource: LazyComponent<typeof import("../assets/icons/Group--resource")['default']>
export const LazySvgoIconsGroupSecurity: LazyComponent<typeof import("../assets/icons/Group--security")['default']>
export const LazySvgoIconsGroupObjectsNew: LazyComponent<typeof import("../assets/icons/Group-objects--new")['default']>
export const LazySvgoIconsGroupObjectsSave: LazyComponent<typeof import("../assets/icons/Group-objects--save")['default']>
export const LazySvgoIconsGroupObjects: LazyComponent<typeof import("../assets/icons/Group-objects")['default']>
export const LazySvgoIconsGroup: LazyComponent<typeof import("../assets/icons/Group")['default']>
export const LazySvgoIconsGrowth: LazyComponent<typeof import("../assets/icons/Growth")['default']>
export const LazySvgoIconsGuiManagement: LazyComponent<typeof import("../assets/icons/Gui--management")['default']>
export const LazySvgoIconsGui: LazyComponent<typeof import("../assets/icons/Gui")['default']>
export const LazySvgoIconsH: LazyComponent<typeof import("../assets/icons/H")['default']>
export const LazySvgoIconsHL7Attributes: LazyComponent<typeof import("../assets/icons/HL7-attributes")['default']>
export const LazySvgoIconsHail: LazyComponent<typeof import("../assets/icons/Hail")['default']>
export const LazySvgoIconsHangingProtocol: LazyComponent<typeof import("../assets/icons/Hanging-protocol")['default']>
export const LazySvgoIconsHarbor: LazyComponent<typeof import("../assets/icons/Harbor")['default']>
export const LazySvgoIconsHardwareSecurityModule: LazyComponent<typeof import("../assets/icons/Hardware-security-module")['default']>
export const LazySvgoIconsHashtag: LazyComponent<typeof import("../assets/icons/Hashtag")['default']>
export const LazySvgoIconsHazeNight: LazyComponent<typeof import("../assets/icons/Haze--night")['default']>
export const LazySvgoIconsHaze: LazyComponent<typeof import("../assets/icons/Haze")['default']>
export const LazySvgoIconsHdFilled: LazyComponent<typeof import("../assets/icons/Hd--filled")['default']>
export const LazySvgoIconsHd: LazyComponent<typeof import("../assets/icons/Hd")['default']>
export const LazySvgoIconsHdr: LazyComponent<typeof import("../assets/icons/Hdr")['default']>
export const LazySvgoIconsHeadphones: LazyComponent<typeof import("../assets/icons/Headphones")['default']>
export const LazySvgoIconsHeadset: LazyComponent<typeof import("../assets/icons/Headset")['default']>
export const LazySvgoIconsHealthCross: LazyComponent<typeof import("../assets/icons/Health-cross")['default']>
export const LazySvgoIconsHearing: LazyComponent<typeof import("../assets/icons/Hearing")['default']>
export const LazySvgoIconsHeatMap02: LazyComponent<typeof import("../assets/icons/Heat-map--02")['default']>
export const LazySvgoIconsHeatMap03: LazyComponent<typeof import("../assets/icons/Heat-map--03")['default']>
export const LazySvgoIconsHeatMapStocks: LazyComponent<typeof import("../assets/icons/Heat-map--stocks")['default']>
export const LazySvgoIconsHeatMap: LazyComponent<typeof import("../assets/icons/Heat-map")['default']>
export const LazySvgoIconsHelicopter: LazyComponent<typeof import("../assets/icons/Helicopter")['default']>
export const LazySvgoIconsHelpFilled: LazyComponent<typeof import("../assets/icons/Help--filled")['default']>
export const LazySvgoIconsHelpDesk: LazyComponent<typeof import("../assets/icons/Help-desk")['default']>
export const LazySvgoIconsHelp: LazyComponent<typeof import("../assets/icons/Help")['default']>
export const LazySvgoIconsHexagonOutline: LazyComponent<typeof import("../assets/icons/Hexagon--outline")['default']>
export const LazySvgoIconsHexagonSolid: LazyComponent<typeof import("../assets/icons/Hexagon--solid")['default']>
export const LazySvgoIconsHexagonVerticalOutline: LazyComponent<typeof import("../assets/icons/Hexagon--vertical--outline")['default']>
export const LazySvgoIconsHexagonVerticalSolid: LazyComponent<typeof import("../assets/icons/Hexagon--vertical--solid")['default']>
export const LazySvgoIconsHintonPlot: LazyComponent<typeof import("../assets/icons/Hinton-plot")['default']>
export const LazySvgoIconsHoleFillingCursor: LazyComponent<typeof import("../assets/icons/Hole-filling--cursor")['default']>
export const LazySvgoIconsHoleFilling: LazyComponent<typeof import("../assets/icons/Hole-filling")['default']>
export const LazySvgoIconsHome: LazyComponent<typeof import("../assets/icons/Home")['default']>
export const LazySvgoIconsHorizontalView: LazyComponent<typeof import("../assets/icons/Horizontal-view")['default']>
export const LazySvgoIconsHospitalBed: LazyComponent<typeof import("../assets/icons/Hospital-bed")['default']>
export const LazySvgoIconsHospital: LazyComponent<typeof import("../assets/icons/Hospital")['default']>
export const LazySvgoIconsHotel: LazyComponent<typeof import("../assets/icons/Hotel")['default']>
export const LazySvgoIconsHourglass: LazyComponent<typeof import("../assets/icons/Hourglass")['default']>
export const LazySvgoIconsHtmlReference: LazyComponent<typeof import("../assets/icons/Html--reference")['default']>
export const LazySvgoIconsHtml: LazyComponent<typeof import("../assets/icons/Html")['default']>
export const LazySvgoIconsHttp: LazyComponent<typeof import("../assets/icons/Http")['default']>
export const LazySvgoIconsHumidityAlt: LazyComponent<typeof import("../assets/icons/Humidity--alt")['default']>
export const LazySvgoIconsHumidity: LazyComponent<typeof import("../assets/icons/Humidity")['default']>
export const LazySvgoIconsHurricane: LazyComponent<typeof import("../assets/icons/Hurricane")['default']>
export const LazySvgoIconsHybridNetworkingAlt: LazyComponent<typeof import("../assets/icons/Hybrid-networking--alt")['default']>
export const LazySvgoIconsHybridNetworking: LazyComponent<typeof import("../assets/icons/Hybrid-networking")['default']>
export const LazySvgoIconsIBMAiOnZ: LazyComponent<typeof import("../assets/icons/IBM--ai-on-z")['default']>
export const LazySvgoIconsIBMAiopsInsights: LazyComponent<typeof import("../assets/icons/IBM--aiops-insights")['default']>
export const LazySvgoIconsIBMBluepay: LazyComponent<typeof import("../assets/icons/IBM--bluepay")['default']>
export const LazySvgoIconsIBMCloudant: LazyComponent<typeof import("../assets/icons/IBM--cloudant")['default']>
export const LazySvgoIconsIBMContentServices: LazyComponent<typeof import("../assets/icons/IBM--content-services")['default']>
export const LazySvgoIconsIBMDataProductExchange: LazyComponent<typeof import("../assets/icons/IBM--data-product-exchange")['default']>
export const LazySvgoIconsIBMDataReplication: LazyComponent<typeof import("../assets/icons/IBM--data-replication")['default']>
export const LazySvgoIconsIBMDatastage: LazyComponent<typeof import("../assets/icons/IBM--datastage")['default']>
export const LazySvgoIconsIBMDb2Alt: LazyComponent<typeof import("../assets/icons/IBM--db2--alt")['default']>
export const LazySvgoIconsIBMDb2Warehouse: LazyComponent<typeof import("../assets/icons/IBM--db2-warehouse")['default']>
export const LazySvgoIconsIBMDb2: LazyComponent<typeof import("../assets/icons/IBM--db2")['default']>
export const LazySvgoIconsIBMDynamicRouteServer: LazyComponent<typeof import("../assets/icons/IBM--dynamic-route-server")['default']>
export const LazySvgoIconsIBMEloAutomotiveCompliance: LazyComponent<typeof import("../assets/icons/IBM--elo--automotive-compliance")['default']>
export const LazySvgoIconsIBMEloEngineeringInsights: LazyComponent<typeof import("../assets/icons/IBM--elo--engineering-insights")['default']>
export const LazySvgoIconsIBMEloMethodComposer: LazyComponent<typeof import("../assets/icons/IBM--elo--method-composer")['default']>
export const LazySvgoIconsIBMEloPublishing: LazyComponent<typeof import("../assets/icons/IBM--elo--publishing")['default']>
export const LazySvgoIconsIBMEngineeringLifecycleMgmt: LazyComponent<typeof import("../assets/icons/IBM--engineering-lifecycle-mgmt")['default']>
export const LazySvgoIconsIBMEngineeringRequirementsDoorsNext: LazyComponent<typeof import("../assets/icons/IBM--engineering-requirements-doors-next")['default']>
export const LazySvgoIconsIBMEngineeringSystemsDesignRhapsodyModelManager: LazyComponent<typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-model-manager")['default']>
export const LazySvgoIconsIBMEngineeringSystemsDesignRhapsodySn1: LazyComponent<typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-sn1")['default']>
export const LazySvgoIconsIBMEngineeringSystemsDesignRhapsodySn2: LazyComponent<typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody-sn2")['default']>
export const LazySvgoIconsIBMEngineeringSystemsDesignRhapsody: LazyComponent<typeof import("../assets/icons/IBM--engineering-systems-design-rhapsody")['default']>
export const LazySvgoIconsIBMEngineeringTestMgmt: LazyComponent<typeof import("../assets/icons/IBM--engineering-test-mgmt")['default']>
export const LazySvgoIconsIBMEngineeringWorkflowMgmt: LazyComponent<typeof import("../assets/icons/IBM--engineering-workflow-mgmt")['default']>
export const LazySvgoIconsIBMEventAutomation: LazyComponent<typeof import("../assets/icons/IBM--event-automation")['default']>
export const LazySvgoIconsIBMEventEndpointMgmt: LazyComponent<typeof import("../assets/icons/IBM--event-endpoint-mgmt")['default']>
export const LazySvgoIconsIBMEventProcessing: LazyComponent<typeof import("../assets/icons/IBM--event-processing")['default']>
export const LazySvgoIconsIBMEventStreams: LazyComponent<typeof import("../assets/icons/IBM--event-streams")['default']>
export const LazySvgoIconsIBMGcm: LazyComponent<typeof import("../assets/icons/IBM--gcm")['default']>
export const LazySvgoIconsIBMIbv: LazyComponent<typeof import("../assets/icons/IBM--ibv")['default']>
export const LazySvgoIconsIBMInstana: LazyComponent<typeof import("../assets/icons/IBM--instana")['default']>
export const LazySvgoIconsIBMJrs: LazyComponent<typeof import("../assets/icons/IBM--jrs")['default']>
export const LazySvgoIconsIBMLaunchpadS4: LazyComponent<typeof import("../assets/icons/IBM--launchpad-s4")['default']>
export const LazySvgoIconsIBMLpa: LazyComponent<typeof import("../assets/icons/IBM--lpa")['default']>
export const LazySvgoIconsIBMLqe: LazyComponent<typeof import("../assets/icons/IBM--lqe")['default']>
export const LazySvgoIconsIBMMatch360: LazyComponent<typeof import("../assets/icons/IBM--match-360")['default']>
export const LazySvgoIconsIBMMq: LazyComponent<typeof import("../assets/icons/IBM--mq")['default']>
export const LazySvgoIconsIBMOpenEnterpriseLanguages: LazyComponent<typeof import("../assets/icons/IBM--open-enterprise-languages")['default']>
export const LazySvgoIconsIBMOpenshiftContainerPlatformOnVpcForRegulatedIndustries: LazyComponent<typeof import("../assets/icons/IBM--openshift-container-platform-on-vpc-for-regulated-industries")['default']>
export const LazySvgoIconsIBMPowerVsPrivateCloud: LazyComponent<typeof import("../assets/icons/IBM--power-vs-private-cloud")['default']>
export const LazySvgoIconsIBMPowerVs: LazyComponent<typeof import("../assets/icons/IBM--power-vs")['default']>
export const LazySvgoIconsIBMPowerWithVpc: LazyComponent<typeof import("../assets/icons/IBM--power-with-vpc")['default']>
export const LazySvgoIconsIBMPrivatePathServices: LazyComponent<typeof import("../assets/icons/IBM--private-path-services")['default']>
export const LazySvgoIconsIBMProcessMining: LazyComponent<typeof import("../assets/icons/IBM--process-mining")['default']>
export const LazySvgoIconsIBMSaasConsole: LazyComponent<typeof import("../assets/icons/IBM--saas-console")['default']>
export const LazySvgoIconsIBMSapOnPower: LazyComponent<typeof import("../assets/icons/IBM--sap-on-power")['default']>
export const LazySvgoIconsIBMSecureInfrastructureOnVpcForRegulatedIndustries: LazyComponent<typeof import("../assets/icons/IBM--secure-infrastructure-on-vpc-for-regulated-industries")['default']>
export const LazySvgoIconsIBMTelehealth: LazyComponent<typeof import("../assets/icons/IBM--telehealth")['default']>
export const LazySvgoIconsIBMTenet: LazyComponent<typeof import("../assets/icons/IBM--tenet")['default']>
export const LazySvgoIconsIBMToolchain: LazyComponent<typeof import("../assets/icons/IBM--toolchain")['default']>
export const LazySvgoIconsIBMTurbonomic: LazyComponent<typeof import("../assets/icons/IBM--turbonomic")['default']>
export const LazySvgoIconsIBMVpnForVpc: LazyComponent<typeof import("../assets/icons/IBM--vpn-for-vpc")['default']>
export const LazySvgoIconsIBMVsiOnVpcForRegulatedIndustries: LazyComponent<typeof import("../assets/icons/IBM--vsi-on-vpc-for-regulated-industries")['default']>
export const LazySvgoIconsIBMWaziDeploy: LazyComponent<typeof import("../assets/icons/IBM--wazi-deploy")['default']>
export const LazySvgoIconsIBMCloudHSM: LazyComponent<typeof import("../assets/icons/IBM-cloud--HSM")['default']>
export const LazySvgoIconsIBMCloudAppId: LazyComponent<typeof import("../assets/icons/IBM-cloud--app-id")['default']>
export const LazySvgoIconsIBMCloudBareMetalServer: LazyComponent<typeof import("../assets/icons/IBM-cloud--bare-metal-server")['default']>
export const LazySvgoIconsIBMCloudBareMetalServersVpc: LazyComponent<typeof import("../assets/icons/IBM-cloud--bare-metal-servers-vpc")['default']>
export const LazySvgoIconsIBMCloudCitrixDaas: LazyComponent<typeof import("../assets/icons/IBM-cloud--citrix-daas")['default']>
export const LazySvgoIconsIBMCloudContinuousDelivery: LazyComponent<typeof import("../assets/icons/IBM-cloud--continuous-delivery")['default']>
export const LazySvgoIconsIBMCloudDedicatedHost: LazyComponent<typeof import("../assets/icons/IBM-cloud--dedicated-host")['default']>
export const LazySvgoIconsIBMCloudDirectLink1Connect: LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-1--connect")['default']>
export const LazySvgoIconsIBMCloudDirectLink1DedicatedHosting: LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-1--dedicated-hosting")['default']>
export const LazySvgoIconsIBMCloudDirectLink1Dedicated: LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-1--dedicated")['default']>
export const LazySvgoIconsIBMCloudDirectLink1Exchange: LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-1--exchange")['default']>
export const LazySvgoIconsIBMCloudDirectLink2Connect: LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-2--connect")['default']>
export const LazySvgoIconsIBMCloudDirectLink2DedicatedHosting: LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-2--dedicated-hosting")['default']>
export const LazySvgoIconsIBMCloudDirectLink2Dedicated: LazyComponent<typeof import("../assets/icons/IBM-cloud--direct-link-2--dedicated")['default']>
export const LazySvgoIconsIBMCloudEventNotification: LazyComponent<typeof import("../assets/icons/IBM-cloud--event-notification")['default']>
export const LazySvgoIconsIBMCloudEventStreams: LazyComponent<typeof import("../assets/icons/IBM-cloud--event-streams")['default']>
export const LazySvgoIconsIBMCloudForEducation: LazyComponent<typeof import("../assets/icons/IBM-cloud--for-education")['default']>
export const LazySvgoIconsIBMCloudHpc: LazyComponent<typeof import("../assets/icons/IBM-cloud--hpc")['default']>
export const LazySvgoIconsIBMCloudHyperProtectCryptoServices: LazyComponent<typeof import("../assets/icons/IBM-cloud--hyper-protect-crypto-services")['default']>
export const LazySvgoIconsIBMCloudHyperProtectDbaas: LazyComponent<typeof import("../assets/icons/IBM-cloud--hyper-protect-dbaas")['default']>
export const LazySvgoIconsIBMCloudHyperProtectVs: LazyComponent<typeof import("../assets/icons/IBM-cloud--hyper-protect-vs")['default']>
export const LazySvgoIconsIBMCloudInternetServices: LazyComponent<typeof import("../assets/icons/IBM-cloud--internet-services")['default']>
export const LazySvgoIconsIBMCloudIpsecVpn: LazyComponent<typeof import("../assets/icons/IBM-cloud--ipsec-vpn")['default']>
export const LazySvgoIconsIBMCloudKeyProtect: LazyComponent<typeof import("../assets/icons/IBM-cloud--key-protect")['default']>
export const LazySvgoIconsIBMCloudKubernetesService: LazyComponent<typeof import("../assets/icons/IBM-cloud--kubernetes-service")['default']>
export const LazySvgoIconsIBMCloudLogging: LazyComponent<typeof import("../assets/icons/IBM-cloud--logging")['default']>
export const LazySvgoIconsIBMCloudMassDataMigration: LazyComponent<typeof import("../assets/icons/IBM-cloud--mass-data-migration")['default']>
export const LazySvgoIconsIBMCloudPal: LazyComponent<typeof import("../assets/icons/IBM-cloud--pal")['default']>
export const LazySvgoIconsIBMCloudPrivilegedAccessGateway: LazyComponent<typeof import("../assets/icons/IBM-cloud--privileged-access-gateway")['default']>
export const LazySvgoIconsIBMCloudProjects: LazyComponent<typeof import("../assets/icons/IBM-cloud--projects")['default']>
export const LazySvgoIconsIBMCloudResiliency: LazyComponent<typeof import("../assets/icons/IBM-cloud--resiliency")['default']>
export const LazySvgoIconsIBMCloudSecretsManager: LazyComponent<typeof import("../assets/icons/IBM-cloud--secrets-manager")['default']>
export const LazySvgoIconsIBMCloudSecurityComplianceCenterWorkloadProtection: LazyComponent<typeof import("../assets/icons/IBM-cloud--security-compliance-center-workload-protection")['default']>
export const LazySvgoIconsIBMCloudSecurityComplianceCenter: LazyComponent<typeof import("../assets/icons/IBM-cloud--security-compliance-center")['default']>
export const LazySvgoIconsIBMCloudSubnets: LazyComponent<typeof import("../assets/icons/IBM-cloud--subnets")['default']>
export const LazySvgoIconsIBMCloudSysdigSecure: LazyComponent<typeof import("../assets/icons/IBM-cloud--sysdig-secure")['default']>
export const LazySvgoIconsIBMCloudTransitGateway: LazyComponent<typeof import("../assets/icons/IBM-cloud--transit-gateway")['default']>
export const LazySvgoIconsIBMCloudVirtualServerClassic: LazyComponent<typeof import("../assets/icons/IBM-cloud--virtual-server-classic")['default']>
export const LazySvgoIconsIBMCloudVirtualServerVpc: LazyComponent<typeof import("../assets/icons/IBM-cloud--virtual-server-vpc")['default']>
export const LazySvgoIconsIBMCloudVpcEndpoints: LazyComponent<typeof import("../assets/icons/IBM-cloud--vpc-endpoints")['default']>
export const LazySvgoIconsIBMCloudVpc: LazyComponent<typeof import("../assets/icons/IBM-cloud--vpc")['default']>
export const LazySvgoIconsIBMCloudPakMANTAAutomatedDataLineage: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--MANTA-automated-data-lineage")['default']>
export const LazySvgoIconsIBMCloudPakApplications: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--applications")['default']>
export const LazySvgoIconsIBMCloudPakBusinessAutomation: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--business-automation")['default']>
export const LazySvgoIconsIBMCloudPakData: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--data")['default']>
export const LazySvgoIconsIBMCloudPakIntegration: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--integration")['default']>
export const LazySvgoIconsIBMCloudPakMulticloudMgmt: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--multicloud-mgmt")['default']>
export const LazySvgoIconsIBMCloudPakNetezza: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--netezza")['default']>
export const LazySvgoIconsIBMCloudPakNetworkAutomation: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--network-automation")['default']>
export const LazySvgoIconsIBMCloudPakSecurity: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--security")['default']>
export const LazySvgoIconsIBMCloudPakSystem: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--system")['default']>
export const LazySvgoIconsIBMCloudPakWatsonAiops: LazyComponent<typeof import("../assets/icons/IBM-cloud-pak--watson-aiops")['default']>
export const LazySvgoIconsIBMCloud: LazyComponent<typeof import("../assets/icons/IBM-cloud")['default']>
export const LazySvgoIconsIBMSecurityServices: LazyComponent<typeof import("../assets/icons/IBM-security--services")['default']>
export const LazySvgoIconsIBMSecurity: LazyComponent<typeof import("../assets/icons/IBM-security")['default']>
export const LazySvgoIconsIBMWatsonDiscovery: LazyComponent<typeof import("../assets/icons/IBM-watson--discovery")['default']>
export const LazySvgoIconsIBMWatsonKnowledgeCatalog: LazyComponent<typeof import("../assets/icons/IBM-watson--knowledge-catalog")['default']>
export const LazySvgoIconsIBMWatsonKnowledgeStudio: LazyComponent<typeof import("../assets/icons/IBM-watson--knowledge-studio")['default']>
export const LazySvgoIconsIBMWatsonLanguageTranslator: LazyComponent<typeof import("../assets/icons/IBM-watson--language-translator")['default']>
export const LazySvgoIconsIBMWatsonMachineLearning: LazyComponent<typeof import("../assets/icons/IBM-watson--machine-learning")['default']>
export const LazySvgoIconsIBMWatsonNaturalLanguageClassifier: LazyComponent<typeof import("../assets/icons/IBM-watson--natural-language-classifier")['default']>
export const LazySvgoIconsIBMWatsonNaturalLanguageUnderstanding: LazyComponent<typeof import("../assets/icons/IBM-watson--natural-language-understanding")['default']>
export const LazySvgoIconsIBMWatsonOpenscale: LazyComponent<typeof import("../assets/icons/IBM-watson--openscale")['default']>
export const LazySvgoIconsIBMWatsonOrders1: LazyComponent<typeof import("../assets/icons/IBM-watson--orders-1")['default']>
export const LazySvgoIconsIBMWatsonOrders: LazyComponent<typeof import("../assets/icons/IBM-watson--orders")['default']>
export const LazySvgoIconsIBMWatsonQuery: LazyComponent<typeof import("../assets/icons/IBM-watson--query")['default']>
export const LazySvgoIconsIBMWatsonSpeechToText: LazyComponent<typeof import("../assets/icons/IBM-watson--speech-to-text")['default']>
export const LazySvgoIconsIBMWatsonStudio: LazyComponent<typeof import("../assets/icons/IBM-watson--studio")['default']>
export const LazySvgoIconsIBMWatsonTextToSpeech: LazyComponent<typeof import("../assets/icons/IBM-watson--text-to-speech")['default']>
export const LazySvgoIconsIBMWatsonToneAnalyzer: LazyComponent<typeof import("../assets/icons/IBM-watson--tone-analyzer")['default']>
export const LazySvgoIconsIBMWatsonxAssistant: LazyComponent<typeof import("../assets/icons/IBM-watsonx--assistant")['default']>
export const LazySvgoIconsIBMWatsonxCodeAssistantForZRefactor: LazyComponent<typeof import("../assets/icons/IBM-watsonx--code-assistant-for-z--refactor")['default']>
export const LazySvgoIconsIBMWatsonxCodeAssistantForZ: LazyComponent<typeof import("../assets/icons/IBM-watsonx--code-assistant-for-z")['default']>
export const LazySvgoIconsIBMWatsonxCodeAssistant: LazyComponent<typeof import("../assets/icons/IBM-watsonx--code-assistant")['default']>
export const LazySvgoIconsIBMWatsonxOrchestrate: LazyComponent<typeof import("../assets/icons/IBM-watsonx--orchestrate")['default']>
export const LazySvgoIconsIBMZCloudModStack: LazyComponent<typeof import("../assets/icons/IBM-z--cloud-mod-stack")['default']>
export const LazySvgoIconsIBMZEnvironmentsDevSecOps: LazyComponent<typeof import("../assets/icons/IBM-z--environments-dev-sec-ops")['default']>
export const LazySvgoIconsIBMZProcessorCapacityReference: LazyComponent<typeof import("../assets/icons/IBM-z--processor-capacity-reference")['default']>
export const LazySvgoIconsIBMZCloudProvisioning: LazyComponent<typeof import("../assets/icons/IBM-z-cloud--provisioning")['default']>
export const LazySvgoIconsIBMZOsAiControlInterface: LazyComponent<typeof import("../assets/icons/IBM-z-os--ai-control-interface")['default']>
export const LazySvgoIconsIBMZOsContainers: LazyComponent<typeof import("../assets/icons/IBM-z-os--containers")['default']>
export const LazySvgoIconsIBMZOsPackageManager: LazyComponent<typeof import("../assets/icons/IBM-z-os--package-manager")['default']>
export const LazySvgoIconsIBMZOs: LazyComponent<typeof import("../assets/icons/IBM-z-os")['default']>
export const LazySvgoIconsIP: LazyComponent<typeof import("../assets/icons/IP")['default']>
export const LazySvgoIconsIca2d: LazyComponent<typeof import("../assets/icons/Ica-2d")['default']>
export const LazySvgoIconsIceAccretion: LazyComponent<typeof import("../assets/icons/Ice--accretion")['default']>
export const LazySvgoIconsIceVision: LazyComponent<typeof import("../assets/icons/Ice--vision")['default']>
export const LazySvgoIconsIdManagement: LazyComponent<typeof import("../assets/icons/Id-management")['default']>
export const LazySvgoIconsId: LazyComponent<typeof import("../assets/icons/Id")['default']>
export const LazySvgoIconsIdea: LazyComponent<typeof import("../assets/icons/Idea")['default']>
export const LazySvgoIconsIdentification: LazyComponent<typeof import("../assets/icons/Identification")['default']>
export const LazySvgoIconsImageCopy: LazyComponent<typeof import("../assets/icons/Image--copy")['default']>
export const LazySvgoIconsImageMedical: LazyComponent<typeof import("../assets/icons/Image--medical")['default']>
export const LazySvgoIconsImageReference: LazyComponent<typeof import("../assets/icons/Image--reference")['default']>
export const LazySvgoIconsImageSearchAlt: LazyComponent<typeof import("../assets/icons/Image--search--alt")['default']>
export const LazySvgoIconsImageSearch: LazyComponent<typeof import("../assets/icons/Image--search")['default']>
export const LazySvgoIconsImageAvailabilityLocal: LazyComponent<typeof import("../assets/icons/Image-availability--local")['default']>
export const LazySvgoIconsImageAvailabilityRetrieving: LazyComponent<typeof import("../assets/icons/Image-availability--retrieving")['default']>
export const LazySvgoIconsImageAvailabilityUnavailable: LazyComponent<typeof import("../assets/icons/Image-availability--unavailable")['default']>
export const LazySvgoIconsImageService: LazyComponent<typeof import("../assets/icons/Image-service")['default']>
export const LazySvgoIconsImageStoreLocal: LazyComponent<typeof import("../assets/icons/Image-store--local")['default']>
export const LazySvgoIconsImage: LazyComponent<typeof import("../assets/icons/Image")['default']>
export const LazySvgoIconsImportExport: LazyComponent<typeof import("../assets/icons/Import-export")['default']>
export const LazySvgoIconsImproveRelevance: LazyComponent<typeof import("../assets/icons/Improve-relevance")['default']>
export const LazySvgoIconsInProgressError: LazyComponent<typeof import("../assets/icons/In-progress--error")['default']>
export const LazySvgoIconsInProgressWarning: LazyComponent<typeof import("../assets/icons/In-progress--warning")['default']>
export const LazySvgoIconsInProgress: LazyComponent<typeof import("../assets/icons/In-progress")['default']>
export const LazySvgoIconsIncompleteCancel: LazyComponent<typeof import("../assets/icons/Incomplete--cancel")['default']>
export const LazySvgoIconsIncompleteError: LazyComponent<typeof import("../assets/icons/Incomplete--error")['default']>
export const LazySvgoIconsIncompleteNormal: LazyComponent<typeof import("../assets/icons/Incomplete--normal")['default']>
export const LazySvgoIconsIncompleteWarning: LazyComponent<typeof import("../assets/icons/Incomplete--warning")['default']>
export const LazySvgoIconsIncomplete: LazyComponent<typeof import("../assets/icons/Incomplete")['default']>
export const LazySvgoIconsIncreaseLevel: LazyComponent<typeof import("../assets/icons/Increase-level")['default']>
export const LazySvgoIconsIndustry: LazyComponent<typeof import("../assets/icons/Industry")['default']>
export const LazySvgoIconsInfinitySymbol: LazyComponent<typeof import("../assets/icons/Infinity-symbol")['default']>
export const LazySvgoIconsInformationDisabled: LazyComponent<typeof import("../assets/icons/Information--disabled")['default']>
export const LazySvgoIconsInformationFilled: LazyComponent<typeof import("../assets/icons/Information--filled")['default']>
export const LazySvgoIconsInformationSquareFilled: LazyComponent<typeof import("../assets/icons/Information--square--filled")['default']>
export const LazySvgoIconsInformationSquare: LazyComponent<typeof import("../assets/icons/Information--square")['default']>
export const LazySvgoIconsInformation: LazyComponent<typeof import("../assets/icons/Information")['default']>
export const LazySvgoIconsInfrastructureClassic: LazyComponent<typeof import("../assets/icons/Infrastructure--classic")['default']>
export const LazySvgoIconsInsertPage: LazyComponent<typeof import("../assets/icons/Insert--page")['default']>
export const LazySvgoIconsInsertSyntax: LazyComponent<typeof import("../assets/icons/Insert-syntax")['default']>
export const LazySvgoIconsInsert: LazyComponent<typeof import("../assets/icons/Insert")['default']>
export const LazySvgoIconsInspection: LazyComponent<typeof import("../assets/icons/Inspection")['default']>
export const LazySvgoIconsInstanceBx: LazyComponent<typeof import("../assets/icons/Instance--bx")['default']>
export const LazySvgoIconsInstanceClassic: LazyComponent<typeof import("../assets/icons/Instance--classic")['default']>
export const LazySvgoIconsInstanceCx: LazyComponent<typeof import("../assets/icons/Instance--cx")['default']>
export const LazySvgoIconsInstanceMx: LazyComponent<typeof import("../assets/icons/Instance--mx")['default']>
export const LazySvgoIconsInstanceVirtual: LazyComponent<typeof import("../assets/icons/Instance--virtual")['default']>
export const LazySvgoIconsIntegration: LazyComponent<typeof import("../assets/icons/Integration")['default']>
export const LazySvgoIconsIntentRequestActive: LazyComponent<typeof import("../assets/icons/Intent-request--active")['default']>
export const LazySvgoIconsIntentRequestCreate: LazyComponent<typeof import("../assets/icons/Intent-request--create")['default']>
export const LazySvgoIconsIntentRequestHeal: LazyComponent<typeof import("../assets/icons/Intent-request--heal")['default']>
export const LazySvgoIconsIntentRequestInactive: LazyComponent<typeof import("../assets/icons/Intent-request--inactive")['default']>
export const LazySvgoIconsIntentRequestScaleIn: LazyComponent<typeof import("../assets/icons/Intent-request--scale-in")['default']>
export const LazySvgoIconsIntentRequestScaleOut: LazyComponent<typeof import("../assets/icons/Intent-request--scale-out")['default']>
export const LazySvgoIconsIntentRequestUninstall: LazyComponent<typeof import("../assets/icons/Intent-request--uninstall")['default']>
export const LazySvgoIconsInteractions: LazyComponent<typeof import("../assets/icons/Interactions")['default']>
export const LazySvgoIconsInteractiveSegmentationCursor: LazyComponent<typeof import("../assets/icons/Interactive-segmentation-cursor")['default']>
export const LazySvgoIconsInterfaceUsage: LazyComponent<typeof import("../assets/icons/Interface--usage")['default']>
export const LazySvgoIconsIntersect: LazyComponent<typeof import("../assets/icons/Intersect")['default']>
export const LazySvgoIconsIntrusionPrevention: LazyComponent<typeof import("../assets/icons/Intrusion-prevention")['default']>
export const LazySvgoIconsInventoryManagement: LazyComponent<typeof import("../assets/icons/Inventory-management")['default']>
export const LazySvgoIconsIotConnect: LazyComponent<typeof import("../assets/icons/Iot--connect")['default']>
export const LazySvgoIconsIotPlatform: LazyComponent<typeof import("../assets/icons/Iot--platform")['default']>
export const LazySvgoIconsIsoFilled: LazyComponent<typeof import("../assets/icons/Iso--filled")['default']>
export const LazySvgoIconsIsoOutline: LazyComponent<typeof import("../assets/icons/Iso--outline")['default']>
export const LazySvgoIconsIso: LazyComponent<typeof import("../assets/icons/Iso")['default']>
export const LazySvgoIconsJoinFull: LazyComponent<typeof import("../assets/icons/Join--full")['default']>
export const LazySvgoIconsJoinInner: LazyComponent<typeof import("../assets/icons/Join--inner")['default']>
export const LazySvgoIconsJoinLeft: LazyComponent<typeof import("../assets/icons/Join--left")['default']>
export const LazySvgoIconsJoinOuter: LazyComponent<typeof import("../assets/icons/Join--outer")['default']>
export const LazySvgoIconsJoinRight: LazyComponent<typeof import("../assets/icons/Join--right")['default']>
export const LazySvgoIconsJoinNode: LazyComponent<typeof import("../assets/icons/Join-node")['default']>
export const LazySvgoIconsJpg: LazyComponent<typeof import("../assets/icons/Jpg")['default']>
export const LazySvgoIconsJsError: LazyComponent<typeof import("../assets/icons/Js-error")['default']>
export const LazySvgoIconsJsonReference: LazyComponent<typeof import("../assets/icons/Json--reference")['default']>
export const LazySvgoIconsJson: LazyComponent<typeof import("../assets/icons/Json")['default']>
export const LazySvgoIconsJumpLink: LazyComponent<typeof import("../assets/icons/Jump-link")['default']>
export const LazySvgoIconsKEY: LazyComponent<typeof import("../assets/icons/KEY")['default']>
export const LazySvgoIconsKeepDry: LazyComponent<typeof import("../assets/icons/Keep-dry")['default']>
export const LazySvgoIconsKeyboard: LazyComponent<typeof import("../assets/icons/Keyboard")['default']>
export const LazySvgoIconsKubelet: LazyComponent<typeof import("../assets/icons/Kubelet")['default']>
export const LazySvgoIconsKubernetesControlPlaneNode: LazyComponent<typeof import("../assets/icons/Kubernetes--control-plane-node")['default']>
export const LazySvgoIconsKubernetesIpAddress: LazyComponent<typeof import("../assets/icons/Kubernetes--ip-address")['default']>
export const LazySvgoIconsKubernetesOperator: LazyComponent<typeof import("../assets/icons/Kubernetes--operator")['default']>
export const LazySvgoIconsKubernetesPod: LazyComponent<typeof import("../assets/icons/Kubernetes--pod")['default']>
export const LazySvgoIconsKubernetesWorkerNode: LazyComponent<typeof import("../assets/icons/Kubernetes--worker-node")['default']>
export const LazySvgoIconsKubernetes: LazyComponent<typeof import("../assets/icons/Kubernetes")['default']>
export const LazySvgoIconsLabel: LazyComponent<typeof import("../assets/icons/Label")['default']>
export const LazySvgoIconsLanguage: LazyComponent<typeof import("../assets/icons/Language")['default']>
export const LazySvgoIconsLaptop: LazyComponent<typeof import("../assets/icons/Laptop")['default']>
export const LazySvgoIconsLassoPolygon: LazyComponent<typeof import("../assets/icons/Lasso--polygon")['default']>
export const LazySvgoIconsLasso: LazyComponent<typeof import("../assets/icons/Lasso")['default']>
export const LazySvgoIconsLaunchStudy1: LazyComponent<typeof import("../assets/icons/Launch-study--1")['default']>
export const LazySvgoIconsLaunchStudy2: LazyComponent<typeof import("../assets/icons/Launch-study--2")['default']>
export const LazySvgoIconsLaunchStudy3: LazyComponent<typeof import("../assets/icons/Launch-study--3")['default']>
export const LazySvgoIconsLaunch: LazyComponent<typeof import("../assets/icons/Launch")['default']>
export const LazySvgoIconsLayersExternal: LazyComponent<typeof import("../assets/icons/Layers--external")['default']>
export const LazySvgoIconsLayers: LazyComponent<typeof import("../assets/icons/Layers")['default']>
export const LazySvgoIconsLegend: LazyComponent<typeof import("../assets/icons/Legend")['default']>
export const LazySvgoIconsLetterAa: LazyComponent<typeof import("../assets/icons/Letter--aa")['default']>
export const LazySvgoIconsLetterBb: LazyComponent<typeof import("../assets/icons/Letter--bb")['default']>
export const LazySvgoIconsLetterCc: LazyComponent<typeof import("../assets/icons/Letter--cc")['default']>
export const LazySvgoIconsLetterDd: LazyComponent<typeof import("../assets/icons/Letter--dd")['default']>
export const LazySvgoIconsLetterEe: LazyComponent<typeof import("../assets/icons/Letter--ee")['default']>
export const LazySvgoIconsLetterFf: LazyComponent<typeof import("../assets/icons/Letter--ff")['default']>
export const LazySvgoIconsLetterGg: LazyComponent<typeof import("../assets/icons/Letter--gg")['default']>
export const LazySvgoIconsLetterHh: LazyComponent<typeof import("../assets/icons/Letter--hh")['default']>
export const LazySvgoIconsLetterIi: LazyComponent<typeof import("../assets/icons/Letter--ii")['default']>
export const LazySvgoIconsLetterJj: LazyComponent<typeof import("../assets/icons/Letter--jj")['default']>
export const LazySvgoIconsLetterKk: LazyComponent<typeof import("../assets/icons/Letter--kk")['default']>
export const LazySvgoIconsLetterLl: LazyComponent<typeof import("../assets/icons/Letter--ll")['default']>
export const LazySvgoIconsLetterMm: LazyComponent<typeof import("../assets/icons/Letter--mm")['default']>
export const LazySvgoIconsLetterNn: LazyComponent<typeof import("../assets/icons/Letter--nn")['default']>
export const LazySvgoIconsLetterOo: LazyComponent<typeof import("../assets/icons/Letter--oo")['default']>
export const LazySvgoIconsLetterPp: LazyComponent<typeof import("../assets/icons/Letter--pp")['default']>
export const LazySvgoIconsLetterQq: LazyComponent<typeof import("../assets/icons/Letter--qq")['default']>
export const LazySvgoIconsLetterRr: LazyComponent<typeof import("../assets/icons/Letter--rr")['default']>
export const LazySvgoIconsLetterSs: LazyComponent<typeof import("../assets/icons/Letter--ss")['default']>
export const LazySvgoIconsLetterTt: LazyComponent<typeof import("../assets/icons/Letter--tt")['default']>
export const LazySvgoIconsLetterUu: LazyComponent<typeof import("../assets/icons/Letter--uu")['default']>
export const LazySvgoIconsLetterVv: LazyComponent<typeof import("../assets/icons/Letter--vv")['default']>
export const LazySvgoIconsLetterWw: LazyComponent<typeof import("../assets/icons/Letter--ww")['default']>
export const LazySvgoIconsLetterXx: LazyComponent<typeof import("../assets/icons/Letter--xx")['default']>
export const LazySvgoIconsLetterYy: LazyComponent<typeof import("../assets/icons/Letter--yy")['default']>
export const LazySvgoIconsLetterZz: LazyComponent<typeof import("../assets/icons/Letter--zz")['default']>
export const LazySvgoIconsLicenseDraft: LazyComponent<typeof import("../assets/icons/License--draft")['default']>
export const LazySvgoIconsLicenseGlobal: LazyComponent<typeof import("../assets/icons/License--global")['default']>
export const LazySvgoIconsLicenseMaintenanceDraft: LazyComponent<typeof import("../assets/icons/License--maintenance-draft")['default']>
export const LazySvgoIconsLicenseMaintenance: LazyComponent<typeof import("../assets/icons/License--maintenance")['default']>
export const LazySvgoIconsLicenseThirdPartyDraft: LazyComponent<typeof import("../assets/icons/License--third-party-draft")['default']>
export const LazySvgoIconsLicenseThirdParty: LazyComponent<typeof import("../assets/icons/License--third-party")['default']>
export const LazySvgoIconsLicense: LazyComponent<typeof import("../assets/icons/License")['default']>
export const LazySvgoIconsLifesaver: LazyComponent<typeof import("../assets/icons/Lifesaver")['default']>
export const LazySvgoIconsLightFilled: LazyComponent<typeof import("../assets/icons/Light--filled")['default']>
export const LazySvgoIconsLight: LazyComponent<typeof import("../assets/icons/Light")['default']>
export const LazySvgoIconsLightning: LazyComponent<typeof import("../assets/icons/Lightning")['default']>
export const LazySvgoIconsLink: LazyComponent<typeof import("../assets/icons/Link")['default']>
export const LazySvgoIconsLinuxAlt: LazyComponent<typeof import("../assets/icons/Linux--alt")['default']>
export const LazySvgoIconsLinuxNamespace: LazyComponent<typeof import("../assets/icons/Linux--namespace")['default']>
export const LazySvgoIconsLinux: LazyComponent<typeof import("../assets/icons/Linux")['default']>
export const LazySvgoIconsListBoxes: LazyComponent<typeof import("../assets/icons/List--boxes")['default']>
export const LazySvgoIconsListBulleted: LazyComponent<typeof import("../assets/icons/List--bulleted")['default']>
export const LazySvgoIconsListCheckedMirror: LazyComponent<typeof import("../assets/icons/List--checked--mirror")['default']>
export const LazySvgoIconsListChecked: LazyComponent<typeof import("../assets/icons/List--checked")['default']>
export const LazySvgoIconsListDropdown: LazyComponent<typeof import("../assets/icons/List--dropdown")['default']>
export const LazySvgoIconsListNumberedMirror: LazyComponent<typeof import("../assets/icons/List--numbered--mirror")['default']>
export const LazySvgoIconsListNumbered: LazyComponent<typeof import("../assets/icons/List--numbered")['default']>
export const LazySvgoIconsList: LazyComponent<typeof import("../assets/icons/List")['default']>
export const LazySvgoIconsLoadBalancerApplication: LazyComponent<typeof import("../assets/icons/Load-balancer--application")['default']>
export const LazySvgoIconsLoadBalancerClassic: LazyComponent<typeof import("../assets/icons/Load-balancer--classic")['default']>
export const LazySvgoIconsLoadBalancerGlobal: LazyComponent<typeof import("../assets/icons/Load-balancer--global")['default']>
export const LazySvgoIconsLoadBalancerListener: LazyComponent<typeof import("../assets/icons/Load-balancer--listener")['default']>
export const LazySvgoIconsLoadBalancerLocal: LazyComponent<typeof import("../assets/icons/Load-balancer--local")['default']>
export const LazySvgoIconsLoadBalancerNetwork: LazyComponent<typeof import("../assets/icons/Load-balancer--network")['default']>
export const LazySvgoIconsLoadBalancerPool: LazyComponent<typeof import("../assets/icons/Load-balancer--pool")['default']>
export const LazySvgoIconsLoadBalancerVpc: LazyComponent<typeof import("../assets/icons/Load-balancer--vpc")['default']>
export const LazySvgoIconsLocationCompanyFilled: LazyComponent<typeof import("../assets/icons/Location--company--filled")['default']>
export const LazySvgoIconsLocationCompany: LazyComponent<typeof import("../assets/icons/Location--company")['default']>
export const LazySvgoIconsLocationCurrent: LazyComponent<typeof import("../assets/icons/Location--current")['default']>
export const LazySvgoIconsLocationFilled: LazyComponent<typeof import("../assets/icons/Location--filled")['default']>
export const LazySvgoIconsLocationHazardFilled: LazyComponent<typeof import("../assets/icons/Location--hazard--filled")['default']>
export const LazySvgoIconsLocationHazard: LazyComponent<typeof import("../assets/icons/Location--hazard")['default']>
export const LazySvgoIconsLocationHeartFilled: LazyComponent<typeof import("../assets/icons/Location--heart--filled")['default']>
export const LazySvgoIconsLocationHeart: LazyComponent<typeof import("../assets/icons/Location--heart")['default']>
export const LazySvgoIconsLocationInfoFilled: LazyComponent<typeof import("../assets/icons/Location--info--filled")['default']>
export const LazySvgoIconsLocationInfo: LazyComponent<typeof import("../assets/icons/Location--info")['default']>
export const LazySvgoIconsLocationPersonFilled: LazyComponent<typeof import("../assets/icons/Location--person--filled")['default']>
export const LazySvgoIconsLocationPerson: LazyComponent<typeof import("../assets/icons/Location--person")['default']>
export const LazySvgoIconsLocationSave: LazyComponent<typeof import("../assets/icons/Location--save")['default']>
export const LazySvgoIconsLocationStarFilled: LazyComponent<typeof import("../assets/icons/Location--star--filled")['default']>
export const LazySvgoIconsLocationStar: LazyComponent<typeof import("../assets/icons/Location--star")['default']>
export const LazySvgoIconsLocation: LazyComponent<typeof import("../assets/icons/Location")['default']>
export const LazySvgoIconsLocked: LazyComponent<typeof import("../assets/icons/Locked")['default']>
export const LazySvgoIconsLogicalPartition: LazyComponent<typeof import("../assets/icons/Logical-partition")['default']>
export const LazySvgoIconsLogin: LazyComponent<typeof import("../assets/icons/Login")['default']>
export const LazySvgoIconsLogoAngular: LazyComponent<typeof import("../assets/icons/Logo--angular")['default']>
export const LazySvgoIconsLogoAnsibleCommunity: LazyComponent<typeof import("../assets/icons/Logo--ansible-community")['default']>
export const LazySvgoIconsLogoDigg: LazyComponent<typeof import("../assets/icons/Logo--digg")['default']>
export const LazySvgoIconsLogoDiscord: LazyComponent<typeof import("../assets/icons/Logo--discord")['default']>
export const LazySvgoIconsLogoFacebook: LazyComponent<typeof import("../assets/icons/Logo--facebook")['default']>
export const LazySvgoIconsLogoFigma: LazyComponent<typeof import("../assets/icons/Logo--figma")['default']>
export const LazySvgoIconsLogoFlickr: LazyComponent<typeof import("../assets/icons/Logo--flickr")['default']>
export const LazySvgoIconsLogoGithub: LazyComponent<typeof import("../assets/icons/Logo--github")['default']>
export const LazySvgoIconsLogoGitlab: LazyComponent<typeof import("../assets/icons/Logo--gitlab")['default']>
export const LazySvgoIconsLogoGlassdoor: LazyComponent<typeof import("../assets/icons/Logo--glassdoor")['default']>
export const LazySvgoIconsLogoInstagram: LazyComponent<typeof import("../assets/icons/Logo--instagram")['default']>
export const LazySvgoIconsLogoInvision: LazyComponent<typeof import("../assets/icons/Logo--invision")['default']>
export const LazySvgoIconsLogoJupyter: LazyComponent<typeof import("../assets/icons/Logo--jupyter")['default']>
export const LazySvgoIconsLogoKeybase: LazyComponent<typeof import("../assets/icons/Logo--keybase")['default']>
export const LazySvgoIconsLogoKubernetes: LazyComponent<typeof import("../assets/icons/Logo--kubernetes")['default']>
export const LazySvgoIconsLogoLinkedin: LazyComponent<typeof import("../assets/icons/Logo--linkedin")['default']>
export const LazySvgoIconsLogoLivestream: LazyComponent<typeof import("../assets/icons/Logo--livestream")['default']>
export const LazySvgoIconsLogoMastodon: LazyComponent<typeof import("../assets/icons/Logo--mastodon")['default']>
export const LazySvgoIconsLogoMedium: LazyComponent<typeof import("../assets/icons/Logo--medium")['default']>
export const LazySvgoIconsLogoNpm: LazyComponent<typeof import("../assets/icons/Logo--npm")['default']>
export const LazySvgoIconsLogoOpenshift: LazyComponent<typeof import("../assets/icons/Logo--openshift")['default']>
export const LazySvgoIconsLogoPinterest: LazyComponent<typeof import("../assets/icons/Logo--pinterest")['default']>
export const LazySvgoIconsLogoPython: LazyComponent<typeof import("../assets/icons/Logo--python")['default']>
export const LazySvgoIconsLogoQuora: LazyComponent<typeof import("../assets/icons/Logo--quora")['default']>
export const LazySvgoIconsLogoRScript: LazyComponent<typeof import("../assets/icons/Logo--r-script")['default']>
export const LazySvgoIconsLogoReact: LazyComponent<typeof import("../assets/icons/Logo--react")['default']>
export const LazySvgoIconsLogoRedHatAnsible: LazyComponent<typeof import("../assets/icons/Logo--red-hat-ansible")['default']>
export const LazySvgoIconsLogoSketch: LazyComponent<typeof import("../assets/icons/Logo--sketch")['default']>
export const LazySvgoIconsLogoSkype: LazyComponent<typeof import("../assets/icons/Logo--skype")['default']>
export const LazySvgoIconsLogoSlack: LazyComponent<typeof import("../assets/icons/Logo--slack")['default']>
export const LazySvgoIconsLogoSnapchat: LazyComponent<typeof import("../assets/icons/Logo--snapchat")['default']>
export const LazySvgoIconsLogoSvelte: LazyComponent<typeof import("../assets/icons/Logo--svelte")['default']>
export const LazySvgoIconsLogoTumblr: LazyComponent<typeof import("../assets/icons/Logo--tumblr")['default']>
export const LazySvgoIconsLogoTwitter: LazyComponent<typeof import("../assets/icons/Logo--twitter")['default']>
export const LazySvgoIconsLogoVmwareAlt: LazyComponent<typeof import("../assets/icons/Logo--vmware--alt")['default']>
export const LazySvgoIconsLogoVmware: LazyComponent<typeof import("../assets/icons/Logo--vmware")['default']>
export const LazySvgoIconsLogoVue: LazyComponent<typeof import("../assets/icons/Logo--vue")['default']>
export const LazySvgoIconsLogoWechat: LazyComponent<typeof import("../assets/icons/Logo--wechat")['default']>
export const LazySvgoIconsLogoX: LazyComponent<typeof import("../assets/icons/Logo--x")['default']>
export const LazySvgoIconsLogoXing: LazyComponent<typeof import("../assets/icons/Logo--xing")['default']>
export const LazySvgoIconsLogoYelp: LazyComponent<typeof import("../assets/icons/Logo--yelp")['default']>
export const LazySvgoIconsLogoYoutube: LazyComponent<typeof import("../assets/icons/Logo--youtube")['default']>
export const LazySvgoIconsLogout: LazyComponent<typeof import("../assets/icons/Logout")['default']>
export const LazySvgoIconsLoop: LazyComponent<typeof import("../assets/icons/Loop")['default']>
export const LazySvgoIconsLowSeverity: LazyComponent<typeof import("../assets/icons/Low-severity")['default']>
export const LazySvgoIconsMAC: LazyComponent<typeof import("../assets/icons/MAC")['default']>
export const LazySvgoIconsMacCommand: LazyComponent<typeof import("../assets/icons/Mac--command")['default']>
export const LazySvgoIconsMacOption: LazyComponent<typeof import("../assets/icons/Mac--option")['default']>
export const LazySvgoIconsMacShift: LazyComponent<typeof import("../assets/icons/Mac--shift")['default']>
export const LazySvgoIconsMachineLearningModel: LazyComponent<typeof import("../assets/icons/Machine-learning-model")['default']>
export const LazySvgoIconsMagicWandFilled: LazyComponent<typeof import("../assets/icons/Magic-wand--filled")['default']>
export const LazySvgoIconsMagicWand: LazyComponent<typeof import("../assets/icons/Magic-wand")['default']>
export const LazySvgoIconsMagnify: LazyComponent<typeof import("../assets/icons/Magnify")['default']>
export const LazySvgoIconsMailAll: LazyComponent<typeof import("../assets/icons/Mail--all")['default']>
export const LazySvgoIconsMailReply: LazyComponent<typeof import("../assets/icons/Mail--reply")['default']>
export const LazySvgoIconsMammogram: LazyComponent<typeof import("../assets/icons/Mammogram")['default']>
export const LazySvgoIconsManageProtection: LazyComponent<typeof import("../assets/icons/Manage-protection")['default']>
export const LazySvgoIconsManagedSolutions: LazyComponent<typeof import("../assets/icons/Managed-solutions")['default']>
export const LazySvgoIconsMapCenter: LazyComponent<typeof import("../assets/icons/Map--center")['default']>
export const LazySvgoIconsMapIdentify: LazyComponent<typeof import("../assets/icons/Map--identify")['default']>
export const LazySvgoIconsMapBoundaryVegetation: LazyComponent<typeof import("../assets/icons/Map-boundary--vegetation")['default']>
export const LazySvgoIconsMapBoundary: LazyComponent<typeof import("../assets/icons/Map-boundary")['default']>
export const LazySvgoIconsMap: LazyComponent<typeof import("../assets/icons/Map")['default']>
export const LazySvgoIconsMarineWarning: LazyComponent<typeof import("../assets/icons/Marine-warning")['default']>
export const LazySvgoIconsMathCurve: LazyComponent<typeof import("../assets/icons/Math-curve")['default']>
export const LazySvgoIconsMatrix: LazyComponent<typeof import("../assets/icons/Matrix")['default']>
export const LazySvgoIconsMaximize: LazyComponent<typeof import("../assets/icons/Maximize")['default']>
export const LazySvgoIconsMediaLibraryFilled: LazyComponent<typeof import("../assets/icons/Media--library--filled")['default']>
export const LazySvgoIconsMediaLibrary: LazyComponent<typeof import("../assets/icons/Media--library")['default']>
export const LazySvgoIconsMediaCast: LazyComponent<typeof import("../assets/icons/Media-cast")['default']>
export const LazySvgoIconsMedicationAlert: LazyComponent<typeof import("../assets/icons/Medication--alert")['default']>
export const LazySvgoIconsMedicationReminder: LazyComponent<typeof import("../assets/icons/Medication--reminder")['default']>
export const LazySvgoIconsMedication: LazyComponent<typeof import("../assets/icons/Medication")['default']>
export const LazySvgoIconsMenu: LazyComponent<typeof import("../assets/icons/Menu")['default']>
export const LazySvgoIconsMergeNode: LazyComponent<typeof import("../assets/icons/Merge-node")['default']>
export const LazySvgoIconsMerge: LazyComponent<typeof import("../assets/icons/Merge")['default']>
export const LazySvgoIconsMessageQueue: LazyComponent<typeof import("../assets/icons/Message-queue")['default']>
export const LazySvgoIconsMeterAlt: LazyComponent<typeof import("../assets/icons/Meter--alt")['default']>
export const LazySvgoIconsMeter: LazyComponent<typeof import("../assets/icons/Meter")['default']>
export const LazySvgoIconsMicrophoneFilled: LazyComponent<typeof import("../assets/icons/Microphone--filled")['default']>
export const LazySvgoIconsMicrophoneOffFilled: LazyComponent<typeof import("../assets/icons/Microphone--off--filled")['default']>
export const LazySvgoIconsMicrophoneOff: LazyComponent<typeof import("../assets/icons/Microphone--off")['default']>
export const LazySvgoIconsMicrophone: LazyComponent<typeof import("../assets/icons/Microphone")['default']>
export const LazySvgoIconsMicroscope: LazyComponent<typeof import("../assets/icons/Microscope")['default']>
export const LazySvgoIconsMicroservices1: LazyComponent<typeof import("../assets/icons/Microservices--1")['default']>
export const LazySvgoIconsMicroservices2: LazyComponent<typeof import("../assets/icons/Microservices--2")['default']>
export const LazySvgoIconsMigrateAlt: LazyComponent<typeof import("../assets/icons/Migrate--alt")['default']>
export const LazySvgoIconsMigrate: LazyComponent<typeof import("../assets/icons/Migrate")['default']>
export const LazySvgoIconsMilestone: LazyComponent<typeof import("../assets/icons/Milestone")['default']>
export const LazySvgoIconsMilitaryCamp: LazyComponent<typeof import("../assets/icons/Military-camp")['default']>
export const LazySvgoIconsMinimize: LazyComponent<typeof import("../assets/icons/Minimize")['default']>
export const LazySvgoIconsMisuseOutline: LazyComponent<typeof import("../assets/icons/Misuse--outline")['default']>
export const LazySvgoIconsMisuse: LazyComponent<typeof import("../assets/icons/Misuse")['default']>
export const LazySvgoIconsMixedRainHail: LazyComponent<typeof import("../assets/icons/Mixed-rain-hail")['default']>
export const LazySvgoIconsMlModelReference: LazyComponent<typeof import("../assets/icons/Ml-model--reference")['default']>
export const LazySvgoIconsMobileAdd: LazyComponent<typeof import("../assets/icons/Mobile--add")['default']>
export const LazySvgoIconsMobileAudio: LazyComponent<typeof import("../assets/icons/Mobile--audio")['default']>
export const LazySvgoIconsMobileCheck: LazyComponent<typeof import("../assets/icons/Mobile--check")['default']>
export const LazySvgoIconsMobileCrash: LazyComponent<typeof import("../assets/icons/Mobile--crash")['default']>
export const LazySvgoIconsMobileDownload: LazyComponent<typeof import("../assets/icons/Mobile--download")['default']>
export const LazySvgoIconsMobileEvent: LazyComponent<typeof import("../assets/icons/Mobile--event")['default']>
export const LazySvgoIconsMobileLandscape: LazyComponent<typeof import("../assets/icons/Mobile--landscape")['default']>
export const LazySvgoIconsMobileRequest: LazyComponent<typeof import("../assets/icons/Mobile--request")['default']>
export const LazySvgoIconsMobileSession: LazyComponent<typeof import("../assets/icons/Mobile--session")['default']>
export const LazySvgoIconsMobileViewOrientation: LazyComponent<typeof import("../assets/icons/Mobile--view-orientation")['default']>
export const LazySvgoIconsMobileView: LazyComponent<typeof import("../assets/icons/Mobile--view")['default']>
export const LazySvgoIconsMobile: LazyComponent<typeof import("../assets/icons/Mobile")['default']>
export const LazySvgoIconsMobilityServices: LazyComponent<typeof import("../assets/icons/Mobility--services")['default']>
export const LazySvgoIconsModelAlt: LazyComponent<typeof import("../assets/icons/Model--alt")['default']>
export const LazySvgoIconsModelFoundation: LazyComponent<typeof import("../assets/icons/Model--foundation")['default']>
export const LazySvgoIconsModelReference: LazyComponent<typeof import("../assets/icons/Model--reference")['default']>
export const LazySvgoIconsModelTuned1: LazyComponent<typeof import("../assets/icons/Model--tuned-1")['default']>
export const LazySvgoIconsModelTuned: LazyComponent<typeof import("../assets/icons/Model--tuned")['default']>
export const LazySvgoIconsModelBuilderReference: LazyComponent<typeof import("../assets/icons/Model-builder--reference")['default']>
export const LazySvgoIconsModelBuilder: LazyComponent<typeof import("../assets/icons/Model-builder")['default']>
export const LazySvgoIconsModel: LazyComponent<typeof import("../assets/icons/Model")['default']>
export const LazySvgoIconsMoney: LazyComponent<typeof import("../assets/icons/Money")['default']>
export const LazySvgoIconsMonster: LazyComponent<typeof import("../assets/icons/Monster")['default']>
export const LazySvgoIconsMonument: LazyComponent<typeof import("../assets/icons/Monument")['default']>
export const LazySvgoIconsMoon: LazyComponent<typeof import("../assets/icons/Moon")['default']>
export const LazySvgoIconsMoonrise: LazyComponent<typeof import("../assets/icons/Moonrise")['default']>
export const LazySvgoIconsMoonset: LazyComponent<typeof import("../assets/icons/Moonset")['default']>
export const LazySvgoIconsMostlyCloudyNight: LazyComponent<typeof import("../assets/icons/Mostly-cloudy--night")['default']>
export const LazySvgoIconsMostlyCloudy: LazyComponent<typeof import("../assets/icons/Mostly-cloudy")['default']>
export const LazySvgoIconsMountain: LazyComponent<typeof import("../assets/icons/Mountain")['default']>
export const LazySvgoIconsMov: LazyComponent<typeof import("../assets/icons/Mov")['default']>
export const LazySvgoIconsMove: LazyComponent<typeof import("../assets/icons/Move")['default']>
export const LazySvgoIconsMovement: LazyComponent<typeof import("../assets/icons/Movement")['default']>
export const LazySvgoIconsMp3: LazyComponent<typeof import("../assets/icons/Mp3")['default']>
export const LazySvgoIconsMp4: LazyComponent<typeof import("../assets/icons/Mp4")['default']>
export const LazySvgoIconsMpeg: LazyComponent<typeof import("../assets/icons/Mpeg")['default']>
export const LazySvgoIconsMpg2: LazyComponent<typeof import("../assets/icons/Mpg2")['default']>
export const LazySvgoIconsMusicAdd: LazyComponent<typeof import("../assets/icons/Music--add")['default']>
export const LazySvgoIconsMusicRemove: LazyComponent<typeof import("../assets/icons/Music--remove")['default']>
export const LazySvgoIconsMusic: LazyComponent<typeof import("../assets/icons/Music")['default']>
export const LazySvgoIconsMysql: LazyComponent<typeof import("../assets/icons/Mysql")['default']>
export const LazySvgoIconsNameSpace: LazyComponent<typeof import("../assets/icons/Name-space")['default']>
export const LazySvgoIconsNavaidCivil: LazyComponent<typeof import("../assets/icons/Navaid--civil")['default']>
export const LazySvgoIconsNavaidDme: LazyComponent<typeof import("../assets/icons/Navaid--dme")['default']>
export const LazySvgoIconsNavaidHelipad: LazyComponent<typeof import("../assets/icons/Navaid--helipad")['default']>
export const LazySvgoIconsNavaidMilitaryCivil: LazyComponent<typeof import("../assets/icons/Navaid--military-civil")['default']>
export const LazySvgoIconsNavaidMilitary: LazyComponent<typeof import("../assets/icons/Navaid--military")['default']>
export const LazySvgoIconsNavaidNdbDme: LazyComponent<typeof import("../assets/icons/Navaid--ndb-dme")['default']>
export const LazySvgoIconsNavaidNdb: LazyComponent<typeof import("../assets/icons/Navaid--ndb")['default']>
export const LazySvgoIconsNavaidPrivate: LazyComponent<typeof import("../assets/icons/Navaid--private")['default']>
export const LazySvgoIconsNavaidSeaplane: LazyComponent<typeof import("../assets/icons/Navaid--seaplane")['default']>
export const LazySvgoIconsNavaidTacan: LazyComponent<typeof import("../assets/icons/Navaid--tacan")['default']>
export const LazySvgoIconsNavaidVhfor: LazyComponent<typeof import("../assets/icons/Navaid--vhfor")['default']>
export const LazySvgoIconsNavaidVor: LazyComponent<typeof import("../assets/icons/Navaid--vor")['default']>
export const LazySvgoIconsNavaidVordme: LazyComponent<typeof import("../assets/icons/Navaid--vordme")['default']>
export const LazySvgoIconsNavaidVortac: LazyComponent<typeof import("../assets/icons/Navaid--vortac")['default']>
export const LazySvgoIconsNeed: LazyComponent<typeof import("../assets/icons/Need")['default']>
export const LazySvgoIconsNetwork1: LazyComponent<typeof import("../assets/icons/Network--1")['default']>
export const LazySvgoIconsNetwork2: LazyComponent<typeof import("../assets/icons/Network--2")['default']>
export const LazySvgoIconsNetwork3Reference: LazyComponent<typeof import("../assets/icons/Network--3--reference")['default']>
export const LazySvgoIconsNetwork3: LazyComponent<typeof import("../assets/icons/Network--3")['default']>
export const LazySvgoIconsNetwork4Reference: LazyComponent<typeof import("../assets/icons/Network--4--reference")['default']>
export const LazySvgoIconsNetwork4: LazyComponent<typeof import("../assets/icons/Network--4")['default']>
export const LazySvgoIconsNetworkAdminControl: LazyComponent<typeof import("../assets/icons/Network--admin-control")['default']>
export const LazySvgoIconsNetworkEnterprise: LazyComponent<typeof import("../assets/icons/Network--enterprise")['default']>
export const LazySvgoIconsNetworkOverlay: LazyComponent<typeof import("../assets/icons/Network--overlay")['default']>
export const LazySvgoIconsNetworkPublic: LazyComponent<typeof import("../assets/icons/Network--public")['default']>
export const LazySvgoIconsNetworkInterface: LazyComponent<typeof import("../assets/icons/Network-interface")['default']>
export const LazySvgoIconsNewTab: LazyComponent<typeof import("../assets/icons/New-tab")['default']>
export const LazySvgoIconsNextFilled: LazyComponent<typeof import("../assets/icons/Next--filled")['default']>
export const LazySvgoIconsNextOutline: LazyComponent<typeof import("../assets/icons/Next--outline")['default']>
export const LazySvgoIconsNoImage: LazyComponent<typeof import("../assets/icons/No-image")['default']>
export const LazySvgoIconsNoTicket: LazyComponent<typeof import("../assets/icons/No-ticket")['default']>
export const LazySvgoIconsNominal: LazyComponent<typeof import("../assets/icons/Nominal")['default']>
export const LazySvgoIconsNominate: LazyComponent<typeof import("../assets/icons/Nominate")['default']>
export const LazySvgoIconsNonCertified: LazyComponent<typeof import("../assets/icons/Non-certified")['default']>
export const LazySvgoIconsNoodleBowl: LazyComponent<typeof import("../assets/icons/Noodle-bowl")['default']>
export const LazySvgoIconsNotAvailable: LazyComponent<typeof import("../assets/icons/Not-available")['default']>
export const LazySvgoIconsNotSentFilled: LazyComponent<typeof import("../assets/icons/Not-sent--filled")['default']>
export const LazySvgoIconsNotSent: LazyComponent<typeof import("../assets/icons/Not-sent")['default']>
export const LazySvgoIconsNotebookReference: LazyComponent<typeof import("../assets/icons/Notebook--reference")['default']>
export const LazySvgoIconsNotebook: LazyComponent<typeof import("../assets/icons/Notebook")['default']>
export const LazySvgoIconsNotificationFilled: LazyComponent<typeof import("../assets/icons/Notification--filled")['default']>
export const LazySvgoIconsNotificationNew: LazyComponent<typeof import("../assets/icons/Notification--new")['default']>
export const LazySvgoIconsNotificationOffFilled: LazyComponent<typeof import("../assets/icons/Notification--off--filled")['default']>
export const LazySvgoIconsNotificationOff: LazyComponent<typeof import("../assets/icons/Notification--off")['default']>
export const LazySvgoIconsNotificationCounter: LazyComponent<typeof import("../assets/icons/Notification-counter")['default']>
export const LazySvgoIconsNotification: LazyComponent<typeof import("../assets/icons/Notification")['default']>
export const LazySvgoIconsNumber0: LazyComponent<typeof import("../assets/icons/Number--0")['default']>
export const LazySvgoIconsNumber1: LazyComponent<typeof import("../assets/icons/Number--1")['default']>
export const LazySvgoIconsNumber2: LazyComponent<typeof import("../assets/icons/Number--2")['default']>
export const LazySvgoIconsNumber3: LazyComponent<typeof import("../assets/icons/Number--3")['default']>
export const LazySvgoIconsNumber4: LazyComponent<typeof import("../assets/icons/Number--4")['default']>
export const LazySvgoIconsNumber5: LazyComponent<typeof import("../assets/icons/Number--5")['default']>
export const LazySvgoIconsNumber6: LazyComponent<typeof import("../assets/icons/Number--6")['default']>
export const LazySvgoIconsNumber7: LazyComponent<typeof import("../assets/icons/Number--7")['default']>
export const LazySvgoIconsNumber8: LazyComponent<typeof import("../assets/icons/Number--8")['default']>
export const LazySvgoIconsNumber9: LazyComponent<typeof import("../assets/icons/Number--9")['default']>
export const LazySvgoIconsNumberSmall0: LazyComponent<typeof import("../assets/icons/Number--small--0")['default']>
export const LazySvgoIconsNumberSmall1: LazyComponent<typeof import("../assets/icons/Number--small--1")['default']>
export const LazySvgoIconsNumberSmall2: LazyComponent<typeof import("../assets/icons/Number--small--2")['default']>
export const LazySvgoIconsNumberSmall3: LazyComponent<typeof import("../assets/icons/Number--small--3")['default']>
export const LazySvgoIconsNumberSmall4: LazyComponent<typeof import("../assets/icons/Number--small--4")['default']>
export const LazySvgoIconsNumberSmall5: LazyComponent<typeof import("../assets/icons/Number--small--5")['default']>
export const LazySvgoIconsNumberSmall6: LazyComponent<typeof import("../assets/icons/Number--small--6")['default']>
export const LazySvgoIconsNumberSmall7: LazyComponent<typeof import("../assets/icons/Number--small--7")['default']>
export const LazySvgoIconsNumberSmall8: LazyComponent<typeof import("../assets/icons/Number--small--8")['default']>
export const LazySvgoIconsNumberSmall9: LazyComponent<typeof import("../assets/icons/Number--small--9")['default']>
export const LazySvgoIconsObjectStorageAlt: LazyComponent<typeof import("../assets/icons/Object-storage--alt")['default']>
export const LazySvgoIconsObjectStorage1: LazyComponent<typeof import("../assets/icons/Object-storage-1")['default']>
export const LazySvgoIconsObjectStorage: LazyComponent<typeof import("../assets/icons/Object-storage")['default']>
export const LazySvgoIconsObservedHail: LazyComponent<typeof import("../assets/icons/Observed--hail")['default']>
export const LazySvgoIconsObservedLightning: LazyComponent<typeof import("../assets/icons/Observed--lightning")['default']>
export const LazySvgoIconsOmega: LazyComponent<typeof import("../assets/icons/Omega")['default']>
export const LazySvgoIconsOpacity: LazyComponent<typeof import("../assets/icons/Opacity")['default']>
export const LazySvgoIconsOpenPanelBottom: LazyComponent<typeof import("../assets/icons/Open-panel--bottom")['default']>
export const LazySvgoIconsOpenPanelFilledBottom: LazyComponent<typeof import("../assets/icons/Open-panel--filled--bottom")['default']>
export const LazySvgoIconsOpenPanelFilledLeft: LazyComponent<typeof import("../assets/icons/Open-panel--filled--left")['default']>
export const LazySvgoIconsOpenPanelFilledRight: LazyComponent<typeof import("../assets/icons/Open-panel--filled--right")['default']>
export const LazySvgoIconsOpenPanelFilledTop: LazyComponent<typeof import("../assets/icons/Open-panel--filled--top")['default']>
export const LazySvgoIconsOpenPanelLeft: LazyComponent<typeof import("../assets/icons/Open-panel--left")['default']>
export const LazySvgoIconsOpenPanelRight: LazyComponent<typeof import("../assets/icons/Open-panel--right")['default']>
export const LazySvgoIconsOpenPanelTop: LazyComponent<typeof import("../assets/icons/Open-panel--top")['default']>
export const LazySvgoIconsOperationGauge: LazyComponent<typeof import("../assets/icons/Operation--gauge")['default']>
export const LazySvgoIconsOperationIf: LazyComponent<typeof import("../assets/icons/Operation--if")['default']>
export const LazySvgoIconsOperation: LazyComponent<typeof import("../assets/icons/Operation")['default']>
export const LazySvgoIconsOperationsField: LazyComponent<typeof import("../assets/icons/Operations--field")['default']>
export const LazySvgoIconsOperationsRecord: LazyComponent<typeof import("../assets/icons/Operations--record")['default']>
export const LazySvgoIconsOrderDetails: LazyComponent<typeof import("../assets/icons/Order-details")['default']>
export const LazySvgoIconsOrdinal: LazyComponent<typeof import("../assets/icons/Ordinal")['default']>
export const LazySvgoIconsOutage: LazyComponent<typeof import("../assets/icons/Outage")['default']>
export const LazySvgoIconsOutlookSevere: LazyComponent<typeof import("../assets/icons/Outlook-severe")['default']>
export const LazySvgoIconsOverflowMenuHorizontal: LazyComponent<typeof import("../assets/icons/Overflow-menu--horizontal")['default']>
export const LazySvgoIconsOverflowMenuVertical: LazyComponent<typeof import("../assets/icons/Overflow-menu--vertical")['default']>
export const LazySvgoIconsOverlay: LazyComponent<typeof import("../assets/icons/Overlay")['default']>
export const LazySvgoIconsPackageTextAnalysis: LazyComponent<typeof import("../assets/icons/Package--text-analysis")['default']>
export const LazySvgoIconsPackageNode: LazyComponent<typeof import("../assets/icons/Package-node")['default']>
export const LazySvgoIconsPackage: LazyComponent<typeof import("../assets/icons/Package")['default']>
export const LazySvgoIconsPageFirst: LazyComponent<typeof import("../assets/icons/Page--first")['default']>
export const LazySvgoIconsPageLast: LazyComponent<typeof import("../assets/icons/Page--last")['default']>
export const LazySvgoIconsPageBreak: LazyComponent<typeof import("../assets/icons/Page-break")['default']>
export const LazySvgoIconsPageNumber: LazyComponent<typeof import("../assets/icons/Page-number")['default']>
export const LazySvgoIconsPageScroll: LazyComponent<typeof import("../assets/icons/Page-scroll")['default']>
export const LazySvgoIconsPaintBrushAlt: LazyComponent<typeof import("../assets/icons/Paint-brush--alt")['default']>
export const LazySvgoIconsPaintBrush: LazyComponent<typeof import("../assets/icons/Paint-brush")['default']>
export const LazySvgoIconsPalmTree: LazyComponent<typeof import("../assets/icons/Palm-tree")['default']>
export const LazySvgoIconsPanHorizontal: LazyComponent<typeof import("../assets/icons/Pan--horizontal")['default']>
export const LazySvgoIconsPanVertical: LazyComponent<typeof import("../assets/icons/Pan--vertical")['default']>
export const LazySvgoIconsPanelExpansion: LazyComponent<typeof import("../assets/icons/Panel-expansion")['default']>
export const LazySvgoIconsParagraph: LazyComponent<typeof import("../assets/icons/Paragraph")['default']>
export const LazySvgoIconsParameter: LazyComponent<typeof import("../assets/icons/Parameter")['default']>
export const LazySvgoIconsParentChild: LazyComponent<typeof import("../assets/icons/Parent-child")['default']>
export const LazySvgoIconsPartDefinition: LazyComponent<typeof import("../assets/icons/Part--definition")['default']>
export const LazySvgoIconsPartUsage: LazyComponent<typeof import("../assets/icons/Part--usage")['default']>
export const LazySvgoIconsPartitionAuto: LazyComponent<typeof import("../assets/icons/Partition--auto")['default']>
export const LazySvgoIconsPartitionCollection: LazyComponent<typeof import("../assets/icons/Partition--collection")['default']>
export const LazySvgoIconsPartitionRepartition: LazyComponent<typeof import("../assets/icons/Partition--repartition")['default']>
export const LazySvgoIconsPartitionSame: LazyComponent<typeof import("../assets/icons/Partition--same")['default']>
export const LazySvgoIconsPartitionSpecific: LazyComponent<typeof import("../assets/icons/Partition--specific")['default']>
export const LazySvgoIconsPartlyCloudyNight: LazyComponent<typeof import("../assets/icons/Partly-cloudy--night")['default']>
export const LazySvgoIconsPartlyCloudy: LazyComponent<typeof import("../assets/icons/Partly-cloudy")['default']>
export const LazySvgoIconsPartnership: LazyComponent<typeof import("../assets/icons/Partnership")['default']>
export const LazySvgoIconsPassengerDrinks: LazyComponent<typeof import("../assets/icons/Passenger--drinks")['default']>
export const LazySvgoIconsPassengerPlus: LazyComponent<typeof import("../assets/icons/Passenger--plus")['default']>
export const LazySvgoIconsPassword: LazyComponent<typeof import("../assets/icons/Password")['default']>
export const LazySvgoIconsPaste: LazyComponent<typeof import("../assets/icons/Paste")['default']>
export const LazySvgoIconsPauseFilled: LazyComponent<typeof import("../assets/icons/Pause--filled")['default']>
export const LazySvgoIconsPauseOutlineFilled: LazyComponent<typeof import("../assets/icons/Pause--outline--filled")['default']>
export const LazySvgoIconsPauseOutline: LazyComponent<typeof import("../assets/icons/Pause--outline")['default']>
export const LazySvgoIconsPauseFuture: LazyComponent<typeof import("../assets/icons/Pause-future")['default']>
export const LazySvgoIconsPausePast: LazyComponent<typeof import("../assets/icons/Pause-past")['default']>
export const LazySvgoIconsPause: LazyComponent<typeof import("../assets/icons/Pause")['default']>
export const LazySvgoIconsPcnENode: LazyComponent<typeof import("../assets/icons/Pcn--e-node")['default']>
export const LazySvgoIconsPcnMilitary: LazyComponent<typeof import("../assets/icons/Pcn--military")['default']>
export const LazySvgoIconsPcnPNode: LazyComponent<typeof import("../assets/icons/Pcn--p-node")['default']>
export const LazySvgoIconsPcnZNode: LazyComponent<typeof import("../assets/icons/Pcn--z-node")['default']>
export const LazySvgoIconsPdfReference: LazyComponent<typeof import("../assets/icons/Pdf--reference")['default']>
export const LazySvgoIconsPdf: LazyComponent<typeof import("../assets/icons/Pdf")['default']>
export const LazySvgoIconsPedestrianFamily: LazyComponent<typeof import("../assets/icons/Pedestrian--family")['default']>
export const LazySvgoIconsPedestrianChild: LazyComponent<typeof import("../assets/icons/Pedestrian-child")['default']>
export const LazySvgoIconsPedestrian: LazyComponent<typeof import("../assets/icons/Pedestrian")['default']>
export const LazySvgoIconsPenFountain: LazyComponent<typeof import("../assets/icons/Pen--fountain")['default']>
export const LazySvgoIconsPen: LazyComponent<typeof import("../assets/icons/Pen")['default']>
export const LazySvgoIconsPendingFilled: LazyComponent<typeof import("../assets/icons/Pending--filled")['default']>
export const LazySvgoIconsPending: LazyComponent<typeof import("../assets/icons/Pending")['default']>
export const LazySvgoIconsPentagonDownOutline: LazyComponent<typeof import("../assets/icons/Pentagon--down--outline")['default']>
export const LazySvgoIconsPentagonDownSolid: LazyComponent<typeof import("../assets/icons/Pentagon--down--solid")['default']>
export const LazySvgoIconsPentagonLeftOutline: LazyComponent<typeof import("../assets/icons/Pentagon--left--outline")['default']>
export const LazySvgoIconsPentagonLeftSolid: LazyComponent<typeof import("../assets/icons/Pentagon--left--solid")['default']>
export const LazySvgoIconsPentagonOutline: LazyComponent<typeof import("../assets/icons/Pentagon--outline")['default']>
export const LazySvgoIconsPentagonRightOutline: LazyComponent<typeof import("../assets/icons/Pentagon--right--outline")['default']>
export const LazySvgoIconsPentagonRightSolid: LazyComponent<typeof import("../assets/icons/Pentagon--right--solid")['default']>
export const LazySvgoIconsPentagonSolid: LazyComponent<typeof import("../assets/icons/Pentagon--solid")['default']>
export const LazySvgoIconsPercentageFilled: LazyComponent<typeof import("../assets/icons/Percentage--filled")['default']>
export const LazySvgoIconsPercentage: LazyComponent<typeof import("../assets/icons/Percentage")['default']>
export const LazySvgoIconsPersonFavorite: LazyComponent<typeof import("../assets/icons/Person--favorite")['default']>
export const LazySvgoIconsPerson: LazyComponent<typeof import("../assets/icons/Person")['default']>
export const LazySvgoIconsPest: LazyComponent<typeof import("../assets/icons/Pest")['default']>
export const LazySvgoIconsPetImageB: LazyComponent<typeof import("../assets/icons/Pet-image--b")['default']>
export const LazySvgoIconsPetImageO: LazyComponent<typeof import("../assets/icons/Pet-image--o")['default']>
export const LazySvgoIconsPhoneApplication: LazyComponent<typeof import("../assets/icons/Phone--application")['default']>
export const LazySvgoIconsPhoneBlockFilled: LazyComponent<typeof import("../assets/icons/Phone--block--filled")['default']>
export const LazySvgoIconsPhoneBlock: LazyComponent<typeof import("../assets/icons/Phone--block")['default']>
export const LazySvgoIconsPhoneFilled: LazyComponent<typeof import("../assets/icons/Phone--filled")['default']>
export const LazySvgoIconsPhoneIncomingFilled: LazyComponent<typeof import("../assets/icons/Phone--incoming--filled")['default']>
export const LazySvgoIconsPhoneIncoming: LazyComponent<typeof import("../assets/icons/Phone--incoming")['default']>
export const LazySvgoIconsPhoneIp: LazyComponent<typeof import("../assets/icons/Phone--ip")['default']>
export const LazySvgoIconsPhoneOffFilled: LazyComponent<typeof import("../assets/icons/Phone--off--filled")['default']>
export const LazySvgoIconsPhoneOff: LazyComponent<typeof import("../assets/icons/Phone--off")['default']>
export const LazySvgoIconsPhoneOutgoingFilled: LazyComponent<typeof import("../assets/icons/Phone--outgoing--filled")['default']>
export const LazySvgoIconsPhoneOutgoing: LazyComponent<typeof import("../assets/icons/Phone--outgoing")['default']>
export const LazySvgoIconsPhoneSettings: LazyComponent<typeof import("../assets/icons/Phone--settings")['default']>
export const LazySvgoIconsPhoneVoiceFilled: LazyComponent<typeof import("../assets/icons/Phone--voice--filled")['default']>
export const LazySvgoIconsPhoneVoice: LazyComponent<typeof import("../assets/icons/Phone--voice")['default']>
export const LazySvgoIconsPhone: LazyComponent<typeof import("../assets/icons/Phone")['default']>
export const LazySvgoIconsPhraseSentiment: LazyComponent<typeof import("../assets/icons/Phrase-sentiment")['default']>
export const LazySvgoIconsPicnicArea: LazyComponent<typeof import("../assets/icons/Picnic-area")['default']>
export const LazySvgoIconsPiggyBankSlot: LazyComponent<typeof import("../assets/icons/Piggy-bank--slot")['default']>
export const LazySvgoIconsPiggyBank: LazyComponent<typeof import("../assets/icons/Piggy-bank")['default']>
export const LazySvgoIconsPillsAdd: LazyComponent<typeof import("../assets/icons/Pills--add")['default']>
export const LazySvgoIconsPillsSubtract: LazyComponent<typeof import("../assets/icons/Pills--subtract")['default']>
export const LazySvgoIconsPills: LazyComponent<typeof import("../assets/icons/Pills")['default']>
export const LazySvgoIconsPinFilled: LazyComponent<typeof import("../assets/icons/Pin--filled")['default']>
export const LazySvgoIconsPin: LazyComponent<typeof import("../assets/icons/Pin")['default']>
export const LazySvgoIconsPlan: LazyComponent<typeof import("../assets/icons/Plan")['default']>
export const LazySvgoIconsPlanePrivate: LazyComponent<typeof import("../assets/icons/Plane--private")['default']>
export const LazySvgoIconsPlaneSea: LazyComponent<typeof import("../assets/icons/Plane--sea")['default']>
export const LazySvgoIconsPlane: LazyComponent<typeof import("../assets/icons/Plane")['default']>
export const LazySvgoIconsPlatforms: LazyComponent<typeof import("../assets/icons/Platforms")['default']>
export const LazySvgoIconsPlayFilledAlt: LazyComponent<typeof import("../assets/icons/Play--filled--alt")['default']>
export const LazySvgoIconsPlayFilled: LazyComponent<typeof import("../assets/icons/Play--filled")['default']>
export const LazySvgoIconsPlayOutlineFilled: LazyComponent<typeof import("../assets/icons/Play--outline--filled")['default']>
export const LazySvgoIconsPlayOutline: LazyComponent<typeof import("../assets/icons/Play--outline")['default']>
export const LazySvgoIconsPlay: LazyComponent<typeof import("../assets/icons/Play")['default']>
export const LazySvgoIconsPlaylist: LazyComponent<typeof import("../assets/icons/Playlist")['default']>
export const LazySvgoIconsPlugFilled: LazyComponent<typeof import("../assets/icons/Plug--filled")['default']>
export const LazySvgoIconsPlug: LazyComponent<typeof import("../assets/icons/Plug")['default']>
export const LazySvgoIconsPng: LazyComponent<typeof import("../assets/icons/Png")['default']>
export const LazySvgoIconsPointOfPresence: LazyComponent<typeof import("../assets/icons/Point-of-presence")['default']>
export const LazySvgoIconsPointerText: LazyComponent<typeof import("../assets/icons/Pointer-text")['default']>
export const LazySvgoIconsPolice: LazyComponent<typeof import("../assets/icons/Police")['default']>
export const LazySvgoIconsPolicy: LazyComponent<typeof import("../assets/icons/Policy")['default']>
export const LazySvgoIconsPopup: LazyComponent<typeof import("../assets/icons/Popup")['default']>
export const LazySvgoIconsPortDefinition: LazyComponent<typeof import("../assets/icons/Port--definition")['default']>
export const LazySvgoIconsPortInput: LazyComponent<typeof import("../assets/icons/Port--input")['default']>
export const LazySvgoIconsPortOutput: LazyComponent<typeof import("../assets/icons/Port--output")['default']>
export const LazySvgoIconsPortUsage: LazyComponent<typeof import("../assets/icons/Port--usage")['default']>
export const LazySvgoIconsPortfolio: LazyComponent<typeof import("../assets/icons/Portfolio")['default']>
export const LazySvgoIconsPower: LazyComponent<typeof import("../assets/icons/Power")['default']>
export const LazySvgoIconsPpt: LazyComponent<typeof import("../assets/icons/Ppt")['default']>
export const LazySvgoIconsPresentationFile: LazyComponent<typeof import("../assets/icons/Presentation-file")['default']>
export const LazySvgoIconsPressureFilled: LazyComponent<typeof import("../assets/icons/Pressure--filled")['default']>
export const LazySvgoIconsPressure: LazyComponent<typeof import("../assets/icons/Pressure")['default']>
export const LazySvgoIconsPreviousFilled: LazyComponent<typeof import("../assets/icons/Previous--filled")['default']>
export const LazySvgoIconsPreviousOutline: LazyComponent<typeof import("../assets/icons/Previous--outline")['default']>
export const LazySvgoIconsPricingConsumption: LazyComponent<typeof import("../assets/icons/Pricing--consumption")['default']>
export const LazySvgoIconsPricingContainer: LazyComponent<typeof import("../assets/icons/Pricing--container")['default']>
export const LazySvgoIconsPricingQuickProposal: LazyComponent<typeof import("../assets/icons/Pricing--quick-proposal")['default']>
export const LazySvgoIconsPricingTailored: LazyComponent<typeof import("../assets/icons/Pricing--tailored")['default']>
export const LazySvgoIconsPricingTraditional: LazyComponent<typeof import("../assets/icons/Pricing--traditional")['default']>
export const LazySvgoIconsPrinter: LazyComponent<typeof import("../assets/icons/Printer")['default']>
export const LazySvgoIconsProcessAutomate: LazyComponent<typeof import("../assets/icons/Process-automate")['default']>
export const LazySvgoIconsProcess: LazyComponent<typeof import("../assets/icons/Process")['default']>
export const LazySvgoIconsProduct: LazyComponent<typeof import("../assets/icons/Product")['default']>
export const LazySvgoIconsProgressBarRound: LazyComponent<typeof import("../assets/icons/Progress-bar--round")['default']>
export const LazySvgoIconsProgressBar: LazyComponent<typeof import("../assets/icons/Progress-bar")['default']>
export const LazySvgoIconsPromote: LazyComponent<typeof import("../assets/icons/Promote")['default']>
export const LazySvgoIconsPromptSession: LazyComponent<typeof import("../assets/icons/Prompt-session")['default']>
export const LazySvgoIconsPromptTemplate: LazyComponent<typeof import("../assets/icons/Prompt-template")['default']>
export const LazySvgoIconsPropertyRelationship: LazyComponent<typeof import("../assets/icons/Property-relationship")['default']>
export const LazySvgoIconsPullRequest: LazyComponent<typeof import("../assets/icons/Pull-request")['default']>
export const LazySvgoIconsPurchase: LazyComponent<typeof import("../assets/icons/Purchase")['default']>
export const LazySvgoIconsQCLaunch: LazyComponent<typeof import("../assets/icons/QC-launch")['default']>
export const LazySvgoIconsQiskit: LazyComponent<typeof import("../assets/icons/Qiskit")['default']>
export const LazySvgoIconsQqPlot: LazyComponent<typeof import("../assets/icons/Qq-plot")['default']>
export const LazySvgoIconsQrCode: LazyComponent<typeof import("../assets/icons/Qr-code")['default']>
export const LazySvgoIconsQuadrantPlot: LazyComponent<typeof import("../assets/icons/Quadrant-plot")['default']>
export const LazySvgoIconsQueryQueue: LazyComponent<typeof import("../assets/icons/Query-queue")['default']>
export const LazySvgoIconsQuery: LazyComponent<typeof import("../assets/icons/Query")['default']>
export const LazySvgoIconsQuestionAnswering: LazyComponent<typeof import("../assets/icons/Question-answering")['default']>
export const LazySvgoIconsQueued: LazyComponent<typeof import("../assets/icons/Queued")['default']>
export const LazySvgoIconsQuotes: LazyComponent<typeof import("../assets/icons/Quotes")['default']>
export const LazySvgoIconsRAG: LazyComponent<typeof import("../assets/icons/RAG")['default']>
export const LazySvgoIconsRadarEnhanced: LazyComponent<typeof import("../assets/icons/Radar--enhanced")['default']>
export const LazySvgoIconsRadarWeather: LazyComponent<typeof import("../assets/icons/Radar--weather")['default']>
export const LazySvgoIconsRadar: LazyComponent<typeof import("../assets/icons/Radar")['default']>
export const LazySvgoIconsRadioCombat: LazyComponent<typeof import("../assets/icons/Radio--combat")['default']>
export const LazySvgoIconsRadioPushToTalk: LazyComponent<typeof import("../assets/icons/Radio--push-to-talk")['default']>
export const LazySvgoIconsRadioButtonChecked: LazyComponent<typeof import("../assets/icons/Radio-button--checked")['default']>
export const LazySvgoIconsRadioButton: LazyComponent<typeof import("../assets/icons/Radio-button")['default']>
export const LazySvgoIconsRadio: LazyComponent<typeof import("../assets/icons/Radio")['default']>
export const LazySvgoIconsRainDrizzle: LazyComponent<typeof import("../assets/icons/Rain--drizzle")['default']>
export const LazySvgoIconsRainHeavy: LazyComponent<typeof import("../assets/icons/Rain--heavy")['default']>
export const LazySvgoIconsRainScatteredNight: LazyComponent<typeof import("../assets/icons/Rain--scattered--night")['default']>
export const LazySvgoIconsRainScattered: LazyComponent<typeof import("../assets/icons/Rain--scattered")['default']>
export const LazySvgoIconsRainDrop: LazyComponent<typeof import("../assets/icons/Rain-drop")['default']>
export const LazySvgoIconsRain: LazyComponent<typeof import("../assets/icons/Rain")['default']>
export const LazySvgoIconsRaw: LazyComponent<typeof import("../assets/icons/Raw")['default']>
export const LazySvgoIconsReceipt: LazyComponent<typeof import("../assets/icons/Receipt")['default']>
export const LazySvgoIconsRecentlyViewed: LazyComponent<typeof import("../assets/icons/Recently-viewed")['default']>
export const LazySvgoIconsRecommend: LazyComponent<typeof import("../assets/icons/Recommend")['default']>
export const LazySvgoIconsRecordingFilledAlt: LazyComponent<typeof import("../assets/icons/Recording--filled--alt")['default']>
export const LazySvgoIconsRecordingFilled: LazyComponent<typeof import("../assets/icons/Recording--filled")['default']>
export const LazySvgoIconsRecording: LazyComponent<typeof import("../assets/icons/Recording")['default']>
export const LazySvgoIconsRecycle: LazyComponent<typeof import("../assets/icons/Recycle")['default']>
export const LazySvgoIconsRedo: LazyComponent<typeof import("../assets/icons/Redo")['default']>
export const LazySvgoIconsRefEvapotranspiration: LazyComponent<typeof import("../assets/icons/Ref-evapotranspiration")['default']>
export const LazySvgoIconsReferenceArchitecture: LazyComponent<typeof import("../assets/icons/Reference-architecture")['default']>
export const LazySvgoIconsReflectHorizontal: LazyComponent<typeof import("../assets/icons/Reflect--horizontal")['default']>
export const LazySvgoIconsReflectVertical: LazyComponent<typeof import("../assets/icons/Reflect--vertical")['default']>
export const LazySvgoIconsRegionAnalysisArea: LazyComponent<typeof import("../assets/icons/Region-analysis--area")['default']>
export const LazySvgoIconsRegionAnalysisVolume: LazyComponent<typeof import("../assets/icons/Region-analysis--volume")['default']>
export const LazySvgoIconsRegistration: LazyComponent<typeof import("../assets/icons/Registration")['default']>
export const LazySvgoIconsReminderMedical: LazyComponent<typeof import("../assets/icons/Reminder--medical")['default']>
export const LazySvgoIconsReminder: LazyComponent<typeof import("../assets/icons/Reminder")['default']>
export const LazySvgoIconsRenew: LazyComponent<typeof import("../assets/icons/Renew")['default']>
export const LazySvgoIconsRepeatOne: LazyComponent<typeof import("../assets/icons/Repeat--one")['default']>
export const LazySvgoIconsRepeat: LazyComponent<typeof import("../assets/icons/Repeat")['default']>
export const LazySvgoIconsReplicate: LazyComponent<typeof import("../assets/icons/Replicate")['default']>
export const LazySvgoIconsReplyAll: LazyComponent<typeof import("../assets/icons/Reply--all")['default']>
export const LazySvgoIconsReply: LazyComponent<typeof import("../assets/icons/Reply")['default']>
export const LazySvgoIconsRepoArtifact: LazyComponent<typeof import("../assets/icons/Repo--artifact")['default']>
export const LazySvgoIconsRepoSourceCode: LazyComponent<typeof import("../assets/icons/Repo--source-code")['default']>
export const LazySvgoIconsReportData: LazyComponent<typeof import("../assets/icons/Report--data")['default']>
export const LazySvgoIconsReport: LazyComponent<typeof import("../assets/icons/Report")['default']>
export const LazySvgoIconsRequestQuote: LazyComponent<typeof import("../assets/icons/Request-quote")['default']>
export const LazySvgoIconsRequirementDefinition: LazyComponent<typeof import("../assets/icons/Requirement--definition")['default']>
export const LazySvgoIconsRequirementUsage: LazyComponent<typeof import("../assets/icons/Requirement--usage")['default']>
export const LazySvgoIconsResetAlt: LazyComponent<typeof import("../assets/icons/Reset--alt")['default']>
export const LazySvgoIconsReset: LazyComponent<typeof import("../assets/icons/Reset")['default']>
export const LazySvgoIconsRestart: LazyComponent<typeof import("../assets/icons/Restart")['default']>
export const LazySvgoIconsRestaurantFine: LazyComponent<typeof import("../assets/icons/Restaurant--fine")['default']>
export const LazySvgoIconsRestaurant: LazyComponent<typeof import("../assets/icons/Restaurant")['default']>
export const LazySvgoIconsResultDraft: LazyComponent<typeof import("../assets/icons/Result--draft")['default']>
export const LazySvgoIconsResultNew: LazyComponent<typeof import("../assets/icons/Result--new")['default']>
export const LazySvgoIconsResultOld: LazyComponent<typeof import("../assets/icons/Result--old")['default']>
export const LazySvgoIconsResult: LazyComponent<typeof import("../assets/icons/Result")['default']>
export const LazySvgoIconsRetryFailed: LazyComponent<typeof import("../assets/icons/Retry--failed")['default']>
export const LazySvgoIconsReturn: LazyComponent<typeof import("../assets/icons/Return")['default']>
export const LazySvgoIconsReview: LazyComponent<typeof import("../assets/icons/Review")['default']>
export const LazySvgoIconsRewind10: LazyComponent<typeof import("../assets/icons/Rewind--10")['default']>
export const LazySvgoIconsRewind30: LazyComponent<typeof import("../assets/icons/Rewind--30")['default']>
export const LazySvgoIconsRewind5: LazyComponent<typeof import("../assets/icons/Rewind--5")['default']>
export const LazySvgoIconsRightPanelCloseFilled: LazyComponent<typeof import("../assets/icons/Right-panel--close--filled")['default']>
export const LazySvgoIconsRightPanelClose: LazyComponent<typeof import("../assets/icons/Right-panel--close")['default']>
export const LazySvgoIconsRightPanelOpenFilled: LazyComponent<typeof import("../assets/icons/Right-panel--open--filled")['default']>
export const LazySvgoIconsRightPanelOpen: LazyComponent<typeof import("../assets/icons/Right-panel--open")['default']>
export const LazySvgoIconsRoadWeather: LazyComponent<typeof import("../assets/icons/Road--weather")['default']>
export const LazySvgoIconsRoad: LazyComponent<typeof import("../assets/icons/Road")['default']>
export const LazySvgoIconsRoadmap: LazyComponent<typeof import("../assets/icons/Roadmap")['default']>
export const LazySvgoIconsRocket: LazyComponent<typeof import("../assets/icons/Rocket")['default']>
export const LazySvgoIconsRotate180: LazyComponent<typeof import("../assets/icons/Rotate--180")['default']>
export const LazySvgoIconsRotate360: LazyComponent<typeof import("../assets/icons/Rotate--360")['default']>
export const LazySvgoIconsRotateClockwiseAltFilled: LazyComponent<typeof import("../assets/icons/Rotate--clockwise--alt--filled")['default']>
export const LazySvgoIconsRotateClockwiseAlt: LazyComponent<typeof import("../assets/icons/Rotate--clockwise--alt")['default']>
export const LazySvgoIconsRotateClockwiseFilled: LazyComponent<typeof import("../assets/icons/Rotate--clockwise--filled")['default']>
export const LazySvgoIconsRotateClockwise: LazyComponent<typeof import("../assets/icons/Rotate--clockwise")['default']>
export const LazySvgoIconsRotateCounterclockwiseAltFilled: LazyComponent<typeof import("../assets/icons/Rotate--counterclockwise--alt--filled")['default']>
export const LazySvgoIconsRotateCounterclockwiseAlt: LazyComponent<typeof import("../assets/icons/Rotate--counterclockwise--alt")['default']>
export const LazySvgoIconsRotateCounterclockwiseFilled: LazyComponent<typeof import("../assets/icons/Rotate--counterclockwise--filled")['default']>
export const LazySvgoIconsRotateCounterclockwise: LazyComponent<typeof import("../assets/icons/Rotate--counterclockwise")['default']>
export const LazySvgoIconsRotate: LazyComponent<typeof import("../assets/icons/Rotate")['default']>
export const LazySvgoIconsRouterVoice: LazyComponent<typeof import("../assets/icons/Router--voice")['default']>
export const LazySvgoIconsRouterWifi: LazyComponent<typeof import("../assets/icons/Router--wifi")['default']>
export const LazySvgoIconsRouter: LazyComponent<typeof import("../assets/icons/Router")['default']>
export const LazySvgoIconsRowCollapse: LazyComponent<typeof import("../assets/icons/Row--collapse")['default']>
export const LazySvgoIconsRowDelete: LazyComponent<typeof import("../assets/icons/Row--delete")['default']>
export const LazySvgoIconsRowExpand: LazyComponent<typeof import("../assets/icons/Row--expand")['default']>
export const LazySvgoIconsRowInsert: LazyComponent<typeof import("../assets/icons/Row--insert")['default']>
export const LazySvgoIconsRow: LazyComponent<typeof import("../assets/icons/Row")['default']>
export const LazySvgoIconsRss: LazyComponent<typeof import("../assets/icons/Rss")['default']>
export const LazySvgoIconsRuleCancelled: LazyComponent<typeof import("../assets/icons/Rule--cancelled")['default']>
export const LazySvgoIconsRuleDataQuality: LazyComponent<typeof import("../assets/icons/Rule--data-quality")['default']>
export const LazySvgoIconsRuleDraft: LazyComponent<typeof import("../assets/icons/Rule--draft")['default']>
export const LazySvgoIconsRuleFilled: LazyComponent<typeof import("../assets/icons/Rule--filled")['default']>
export const LazySvgoIconsRuleLocked: LazyComponent<typeof import("../assets/icons/Rule--locked")['default']>
export const LazySvgoIconsRulePartial: LazyComponent<typeof import("../assets/icons/Rule--partial")['default']>
export const LazySvgoIconsRuleTest: LazyComponent<typeof import("../assets/icons/Rule--test")['default']>
export const LazySvgoIconsRule: LazyComponent<typeof import("../assets/icons/Rule")['default']>
export const LazySvgoIconsRulerAlt: LazyComponent<typeof import("../assets/icons/Ruler--alt")['default']>
export const LazySvgoIconsRuler: LazyComponent<typeof import("../assets/icons/Ruler")['default']>
export const LazySvgoIconsRunMirror: LazyComponent<typeof import("../assets/icons/Run--mirror")['default']>
export const LazySvgoIconsRun: LazyComponent<typeof import("../assets/icons/Run")['default']>
export const LazySvgoIconsRunning: LazyComponent<typeof import("../assets/icons/Running")['default']>
export const LazySvgoIconsSAlt: LazyComponent<typeof import("../assets/icons/S--alt")['default']>
export const LazySvgoIconsS: LazyComponent<typeof import("../assets/icons/S")['default']>
export const LazySvgoIconsSLM: LazyComponent<typeof import("../assets/icons/SLM")['default']>
export const LazySvgoIconsSailboatCoastal: LazyComponent<typeof import("../assets/icons/Sailboat--coastal")['default']>
export const LazySvgoIconsSailboatOffshore: LazyComponent<typeof import("../assets/icons/Sailboat--offshore")['default']>
export const LazySvgoIconsSalesOps: LazyComponent<typeof import("../assets/icons/Sales-ops")['default']>
export const LazySvgoIconsSankeyDiagramAlt: LazyComponent<typeof import("../assets/icons/Sankey-diagram--alt")['default']>
export const LazySvgoIconsSankeyDiagram: LazyComponent<typeof import("../assets/icons/Sankey-diagram")['default']>
export const LazySvgoIconsSatelliteRadar: LazyComponent<typeof import("../assets/icons/Satellite--radar")['default']>
export const LazySvgoIconsSatelliteWeather: LazyComponent<typeof import("../assets/icons/Satellite--weather")['default']>
export const LazySvgoIconsSatellite: LazyComponent<typeof import("../assets/icons/Satellite")['default']>
export const LazySvgoIconsSatisfyDefinition: LazyComponent<typeof import("../assets/icons/Satisfy--definition")['default']>
export const LazySvgoIconsSatisfyUsage: LazyComponent<typeof import("../assets/icons/Satisfy--usage")['default']>
export const LazySvgoIconsSaveAnnotation: LazyComponent<typeof import("../assets/icons/Save--annotation")['default']>
export const LazySvgoIconsSaveImage: LazyComponent<typeof import("../assets/icons/Save--image")['default']>
export const LazySvgoIconsSaveModel: LazyComponent<typeof import("../assets/icons/Save--model")['default']>
export const LazySvgoIconsSaveSeries: LazyComponent<typeof import("../assets/icons/Save--series")['default']>
export const LazySvgoIconsSave: LazyComponent<typeof import("../assets/icons/Save")['default']>
export const LazySvgoIconsScale: LazyComponent<typeof import("../assets/icons/Scale")['default']>
export const LazySvgoIconsScalesTipped: LazyComponent<typeof import("../assets/icons/Scales--tipped")['default']>
export const LazySvgoIconsScales: LazyComponent<typeof import("../assets/icons/Scales")['default']>
export const LazySvgoIconsScalpelCursor: LazyComponent<typeof import("../assets/icons/Scalpel--cursor")['default']>
export const LazySvgoIconsScalpelLasso: LazyComponent<typeof import("../assets/icons/Scalpel--lasso")['default']>
export const LazySvgoIconsScalpelSelect: LazyComponent<typeof import("../assets/icons/Scalpel--select")['default']>
export const LazySvgoIconsScalpel: LazyComponent<typeof import("../assets/icons/Scalpel")['default']>
export const LazySvgoIconsScanAlt: LazyComponent<typeof import("../assets/icons/Scan--alt")['default']>
export const LazySvgoIconsScanDisabled: LazyComponent<typeof import("../assets/icons/Scan--disabled")['default']>
export const LazySvgoIconsScan: LazyComponent<typeof import("../assets/icons/Scan")['default']>
export const LazySvgoIconsScatterMatrix: LazyComponent<typeof import("../assets/icons/Scatter-matrix")['default']>
export const LazySvgoIconsSchematics: LazyComponent<typeof import("../assets/icons/Schematics")['default']>
export const LazySvgoIconsScisControlTower: LazyComponent<typeof import("../assets/icons/Scis--control-tower")['default']>
export const LazySvgoIconsScisTransparentSupply: LazyComponent<typeof import("../assets/icons/Scis--transparent-supply")['default']>
export const LazySvgoIconsScooterFront: LazyComponent<typeof import("../assets/icons/Scooter--front")['default']>
export const LazySvgoIconsScooter: LazyComponent<typeof import("../assets/icons/Scooter")['default']>
export const LazySvgoIconsScreenOff: LazyComponent<typeof import("../assets/icons/Screen--off")['default']>
export const LazySvgoIconsScreenMapSet: LazyComponent<typeof import("../assets/icons/Screen-map--set")['default']>
export const LazySvgoIconsScreenMap: LazyComponent<typeof import("../assets/icons/Screen-map")['default']>
export const LazySvgoIconsScreen: LazyComponent<typeof import("../assets/icons/Screen")['default']>
export const LazySvgoIconsScriptReference: LazyComponent<typeof import("../assets/icons/Script--reference")['default']>
export const LazySvgoIconsScript: LazyComponent<typeof import("../assets/icons/Script")['default']>
export const LazySvgoIconsSdk: LazyComponent<typeof import("../assets/icons/Sdk")['default']>
export const LazySvgoIconsSearchAdvanced: LazyComponent<typeof import("../assets/icons/Search--advanced")['default']>
export const LazySvgoIconsSearchLocateMirror: LazyComponent<typeof import("../assets/icons/Search--locate--mirror")['default']>
export const LazySvgoIconsSearchLocate: LazyComponent<typeof import("../assets/icons/Search--locate")['default']>
export const LazySvgoIconsSearch: LazyComponent<typeof import("../assets/icons/Search")['default']>
export const LazySvgoIconsSecurityServices: LazyComponent<typeof import("../assets/icons/Security-services")['default']>
export const LazySvgoIconsSecurity: LazyComponent<typeof import("../assets/icons/Security")['default']>
export const LazySvgoIconsSelect01: LazyComponent<typeof import("../assets/icons/Select--01")['default']>
export const LazySvgoIconsSelect02: LazyComponent<typeof import("../assets/icons/Select--02")['default']>
export const LazySvgoIconsSelectWindow: LazyComponent<typeof import("../assets/icons/Select--window")['default']>
export const LazySvgoIconsSendAltFilled: LazyComponent<typeof import("../assets/icons/Send--alt--filled")['default']>
export const LazySvgoIconsSendAlt: LazyComponent<typeof import("../assets/icons/Send--alt")['default']>
export const LazySvgoIconsSendFilled: LazyComponent<typeof import("../assets/icons/Send--filled")['default']>
export const LazySvgoIconsSendActionUsage: LazyComponent<typeof import("../assets/icons/Send-action--usage")['default']>
export const LazySvgoIconsSendBackward: LazyComponent<typeof import("../assets/icons/Send-backward")['default']>
export const LazySvgoIconsSendToBack: LazyComponent<typeof import("../assets/icons/Send-to-back")['default']>
export const LazySvgoIconsSend: LazyComponent<typeof import("../assets/icons/Send")['default']>
export const LazySvgoIconsServerDns: LazyComponent<typeof import("../assets/icons/Server--dns")['default']>
export const LazySvgoIconsServerProxy: LazyComponent<typeof import("../assets/icons/Server--proxy")['default']>
export const LazySvgoIconsServerTime: LazyComponent<typeof import("../assets/icons/Server--time")['default']>
export const LazySvgoIconsServiceDesk: LazyComponent<typeof import("../assets/icons/Service-desk")['default']>
export const LazySvgoIconsServiceId: LazyComponent<typeof import("../assets/icons/Service-id")['default']>
export const LazySvgoIconsServiceLevels: LazyComponent<typeof import("../assets/icons/Service-levels")['default']>
export const LazySvgoIconsSessionBorderControl: LazyComponent<typeof import("../assets/icons/Session-border-control")['default']>
export const LazySvgoIconsSettingsAdjust: LazyComponent<typeof import("../assets/icons/Settings--adjust")['default']>
export const LazySvgoIconsSettingsCheck: LazyComponent<typeof import("../assets/icons/Settings--check")['default']>
export const LazySvgoIconsSettingsEdit: LazyComponent<typeof import("../assets/icons/Settings--edit")['default']>
export const LazySvgoIconsSettingsServices: LazyComponent<typeof import("../assets/icons/Settings--services")['default']>
export const LazySvgoIconsSettingsView: LazyComponent<typeof import("../assets/icons/Settings--view")['default']>
export const LazySvgoIconsSettings: LazyComponent<typeof import("../assets/icons/Settings")['default']>
export const LazySvgoIconsShapeExcept: LazyComponent<typeof import("../assets/icons/Shape--except")['default']>
export const LazySvgoIconsShapeExclude: LazyComponent<typeof import("../assets/icons/Shape--exclude")['default']>
export const LazySvgoIconsShapeIntersect: LazyComponent<typeof import("../assets/icons/Shape--intersect")['default']>
export const LazySvgoIconsShapeJoin: LazyComponent<typeof import("../assets/icons/Shape--join")['default']>
export const LazySvgoIconsShapeUnite: LazyComponent<typeof import("../assets/icons/Shape--unite")['default']>
export const LazySvgoIconsShapes: LazyComponent<typeof import("../assets/icons/Shapes")['default']>
export const LazySvgoIconsShareKnowledge: LazyComponent<typeof import("../assets/icons/Share-knowledge")['default']>
export const LazySvgoIconsShare: LazyComponent<typeof import("../assets/icons/Share")['default']>
export const LazySvgoIconsShoppingBag: LazyComponent<typeof import("../assets/icons/Shopping--bag")['default']>
export const LazySvgoIconsShoppingCartArrowDown: LazyComponent<typeof import("../assets/icons/Shopping--cart--arrow-down")['default']>
export const LazySvgoIconsShoppingCartArrowUp: LazyComponent<typeof import("../assets/icons/Shopping--cart--arrow-up")['default']>
export const LazySvgoIconsShoppingCartClear: LazyComponent<typeof import("../assets/icons/Shopping--cart--clear")['default']>
export const LazySvgoIconsShoppingCartError: LazyComponent<typeof import("../assets/icons/Shopping--cart--error")['default']>
export const LazySvgoIconsShoppingCartMinus: LazyComponent<typeof import("../assets/icons/Shopping--cart--minus")['default']>
export const LazySvgoIconsShoppingCartPlus: LazyComponent<typeof import("../assets/icons/Shopping--cart--plus")['default']>
export const LazySvgoIconsShoppingCart: LazyComponent<typeof import("../assets/icons/Shopping--cart")['default']>
export const LazySvgoIconsShoppingCatalog: LazyComponent<typeof import("../assets/icons/Shopping--catalog")['default']>
export const LazySvgoIconsShowDataCards: LazyComponent<typeof import("../assets/icons/Show-data--cards")['default']>
export const LazySvgoIconsShrinkScreenFilled: LazyComponent<typeof import("../assets/icons/Shrink-screen--filled")['default']>
export const LazySvgoIconsShrinkScreen: LazyComponent<typeof import("../assets/icons/Shrink-screen")['default']>
export const LazySvgoIconsShuffle: LazyComponent<typeof import("../assets/icons/Shuffle")['default']>
export const LazySvgoIconsShuttle: LazyComponent<typeof import("../assets/icons/Shuttle")['default']>
export const LazySvgoIconsSidePanelCloseFilled: LazyComponent<typeof import("../assets/icons/Side-panel--close--filled")['default']>
export const LazySvgoIconsSidePanelClose: LazyComponent<typeof import("../assets/icons/Side-panel--close")['default']>
export const LazySvgoIconsSidePanelOpenFilled: LazyComponent<typeof import("../assets/icons/Side-panel--open--filled")['default']>
export const LazySvgoIconsSidePanelOpen: LazyComponent<typeof import("../assets/icons/Side-panel--open")['default']>
export const LazySvgoIconsSight: LazyComponent<typeof import("../assets/icons/Sight")['default']>
export const LazySvgoIconsSigma: LazyComponent<typeof import("../assets/icons/Sigma")['default']>
export const LazySvgoIconsSignalStrength: LazyComponent<typeof import("../assets/icons/Signal-strength")['default']>
export const LazySvgoIconsSimCard: LazyComponent<typeof import("../assets/icons/Sim-card")['default']>
export const LazySvgoIconsSkillLevelAdvanced: LazyComponent<typeof import("../assets/icons/Skill-level--advanced")['default']>
export const LazySvgoIconsSkillLevelBasic: LazyComponent<typeof import("../assets/icons/Skill-level--basic")['default']>
export const LazySvgoIconsSkillLevelIntermediate: LazyComponent<typeof import("../assets/icons/Skill-level--intermediate")['default']>
export const LazySvgoIconsSkillLevel: LazyComponent<typeof import("../assets/icons/Skill-level")['default']>
export const LazySvgoIconsSkipBackFilled: LazyComponent<typeof import("../assets/icons/Skip--back--filled")['default']>
export const LazySvgoIconsSkipBackOutlineFilled: LazyComponent<typeof import("../assets/icons/Skip--back--outline--filled")['default']>
export const LazySvgoIconsSkipBackOutlineSolid: LazyComponent<typeof import("../assets/icons/Skip--back--outline--solid")['default']>
export const LazySvgoIconsSkipBackOutline: LazyComponent<typeof import("../assets/icons/Skip--back--outline")['default']>
export const LazySvgoIconsSkipBackSolidFilled: LazyComponent<typeof import("../assets/icons/Skip--back--solid--filled")['default']>
export const LazySvgoIconsSkipBack: LazyComponent<typeof import("../assets/icons/Skip--back")['default']>
export const LazySvgoIconsSkipForwardFilled: LazyComponent<typeof import("../assets/icons/Skip--forward--filled")['default']>
export const LazySvgoIconsSkipForwardOutlineFilled: LazyComponent<typeof import("../assets/icons/Skip--forward--outline--filled")['default']>
export const LazySvgoIconsSkipForwardOutlineSolid: LazyComponent<typeof import("../assets/icons/Skip--forward--outline--solid")['default']>
export const LazySvgoIconsSkipForwardOutline: LazyComponent<typeof import("../assets/icons/Skip--forward--outline")['default']>
export const LazySvgoIconsSkipForwardSolidFilled: LazyComponent<typeof import("../assets/icons/Skip--forward--solid--filled")['default']>
export const LazySvgoIconsSkipForward: LazyComponent<typeof import("../assets/icons/Skip--forward")['default']>
export const LazySvgoIconsSleet: LazyComponent<typeof import("../assets/icons/Sleet")['default']>
export const LazySvgoIconsSlisor: LazyComponent<typeof import("../assets/icons/Slisor")['default']>
export const LazySvgoIconsSmell: LazyComponent<typeof import("../assets/icons/Smell")['default']>
export const LazySvgoIconsSmoke: LazyComponent<typeof import("../assets/icons/Smoke")['default']>
export const LazySvgoIconsSmoothingCursor: LazyComponent<typeof import("../assets/icons/Smoothing--cursor")['default']>
export const LazySvgoIconsSmoothing: LazyComponent<typeof import("../assets/icons/Smoothing")['default']>
export const LazySvgoIconsSnooze: LazyComponent<typeof import("../assets/icons/Snooze")['default']>
export const LazySvgoIconsSnowBlizzard: LazyComponent<typeof import("../assets/icons/Snow--blizzard")['default']>
export const LazySvgoIconsSnowHeavy: LazyComponent<typeof import("../assets/icons/Snow--heavy")['default']>
export const LazySvgoIconsSnowScatteredNight: LazyComponent<typeof import("../assets/icons/Snow--scattered--night")['default']>
export const LazySvgoIconsSnowScattered: LazyComponent<typeof import("../assets/icons/Snow--scattered")['default']>
export const LazySvgoIconsSnowDensity: LazyComponent<typeof import("../assets/icons/Snow-density")['default']>
export const LazySvgoIconsSnow: LazyComponent<typeof import("../assets/icons/Snow")['default']>
export const LazySvgoIconsSnowflake: LazyComponent<typeof import("../assets/icons/Snowflake")['default']>
export const LazySvgoIconsSoccer: LazyComponent<typeof import("../assets/icons/Soccer")['default']>
export const LazySvgoIconsSoftwareResourceCluster: LazyComponent<typeof import("../assets/icons/Software-resource--cluster")['default']>
export const LazySvgoIconsSoftwareResourceResource: LazyComponent<typeof import("../assets/icons/Software-resource--resource")['default']>
export const LazySvgoIconsSoftwareResource: LazyComponent<typeof import("../assets/icons/Software-resource")['default']>
export const LazySvgoIconsSoilMoistureField: LazyComponent<typeof import("../assets/icons/Soil-moisture--field")['default']>
export const LazySvgoIconsSoilMoistureGlobal: LazyComponent<typeof import("../assets/icons/Soil-moisture--global")['default']>
export const LazySvgoIconsSoilMoisture: LazyComponent<typeof import("../assets/icons/Soil-moisture")['default']>
export const LazySvgoIconsSoilTemperatureField: LazyComponent<typeof import("../assets/icons/Soil-temperature--field")['default']>
export const LazySvgoIconsSoilTemperatureGlobal: LazyComponent<typeof import("../assets/icons/Soil-temperature--global")['default']>
export const LazySvgoIconsSoilTemperature: LazyComponent<typeof import("../assets/icons/Soil-temperature")['default']>
export const LazySvgoIconsSolarPanel: LazyComponent<typeof import("../assets/icons/Solar-panel")['default']>
export const LazySvgoIconsSortAscending: LazyComponent<typeof import("../assets/icons/Sort--ascending")['default']>
export const LazySvgoIconsSortDescending: LazyComponent<typeof import("../assets/icons/Sort--descending")['default']>
export const LazySvgoIconsSortRemove: LazyComponent<typeof import("../assets/icons/Sort--remove")['default']>
export const LazySvgoIconsSpellCheck: LazyComponent<typeof import("../assets/icons/Spell-check")['default']>
export const LazySvgoIconsSpineLabel: LazyComponent<typeof import("../assets/icons/Spine-label")['default']>
export const LazySvgoIconsSplitDiscard: LazyComponent<typeof import("../assets/icons/Split--discard")['default']>
export const LazySvgoIconsSplitScreen: LazyComponent<typeof import("../assets/icons/Split-screen")['default']>
export const LazySvgoIconsSplit: LazyComponent<typeof import("../assets/icons/Split")['default']>
export const LazySvgoIconsSprayPaint: LazyComponent<typeof import("../assets/icons/Spray-paint")['default']>
export const LazySvgoIconsSprout: LazyComponent<typeof import("../assets/icons/Sprout")['default']>
export const LazySvgoIconsSql: LazyComponent<typeof import("../assets/icons/Sql")['default']>
export const LazySvgoIconsSquareOutline: LazyComponent<typeof import("../assets/icons/Square--outline")['default']>
export const LazySvgoIconsSquareSolid: LazyComponent<typeof import("../assets/icons/Square--solid")['default']>
export const LazySvgoIconsStackLimitation: LazyComponent<typeof import("../assets/icons/Stack-limitation")['default']>
export const LazySvgoIconsStackedMove: LazyComponent<typeof import("../assets/icons/Stacked-move")['default']>
export const LazySvgoIconsStackedScrolling1: LazyComponent<typeof import("../assets/icons/Stacked-scrolling--1")['default']>
export const LazySvgoIconsStackedScrolling2: LazyComponent<typeof import("../assets/icons/Stacked-scrolling--2")['default']>
export const LazySvgoIconsStamp: LazyComponent<typeof import("../assets/icons/Stamp")['default']>
export const LazySvgoIconsStarFilled: LazyComponent<typeof import("../assets/icons/Star--filled")['default']>
export const LazySvgoIconsStarHalf: LazyComponent<typeof import("../assets/icons/Star--half")['default']>
export const LazySvgoIconsStarReview: LazyComponent<typeof import("../assets/icons/Star--review")['default']>
export const LazySvgoIconsStar: LazyComponent<typeof import("../assets/icons/Star")['default']>
export const LazySvgoIconsStatusAcknowledge: LazyComponent<typeof import("../assets/icons/Status--acknowledge")['default']>
export const LazySvgoIconsStatusPartialFail: LazyComponent<typeof import("../assets/icons/Status--partial-fail")['default']>
export const LazySvgoIconsStatusResolved: LazyComponent<typeof import("../assets/icons/Status--resolved")['default']>
export const LazySvgoIconsStayInside: LazyComponent<typeof import("../assets/icons/Stay-inside")['default']>
export const LazySvgoIconsStemLeafPlot: LazyComponent<typeof import("../assets/icons/Stem-leaf-plot")['default']>
export const LazySvgoIconsStethoscope: LazyComponent<typeof import("../assets/icons/Stethoscope")['default']>
export const LazySvgoIconsStopFilledAlt: LazyComponent<typeof import("../assets/icons/Stop--filled--alt")['default']>
export const LazySvgoIconsStopFilled: LazyComponent<typeof import("../assets/icons/Stop--filled")['default']>
export const LazySvgoIconsStopOutlineFilled: LazyComponent<typeof import("../assets/icons/Stop--outline--filled")['default']>
export const LazySvgoIconsStopOutline: LazyComponent<typeof import("../assets/icons/Stop--outline")['default']>
export const LazySvgoIconsStopSignFilled: LazyComponent<typeof import("../assets/icons/Stop-sign--filled")['default']>
export const LazySvgoIconsStopSign: LazyComponent<typeof import("../assets/icons/Stop-sign")['default']>
export const LazySvgoIconsStop: LazyComponent<typeof import("../assets/icons/Stop")['default']>
export const LazySvgoIconsStoragePool: LazyComponent<typeof import("../assets/icons/Storage-pool")['default']>
export const LazySvgoIconsStorageRequest: LazyComponent<typeof import("../assets/icons/Storage-request")['default']>
export const LazySvgoIconsStore: LazyComponent<typeof import("../assets/icons/Store")['default']>
export const LazySvgoIconsStormTracker: LazyComponent<typeof import("../assets/icons/Storm-tracker")['default']>
export const LazySvgoIconsStrategyPlay: LazyComponent<typeof import("../assets/icons/Strategy-play")['default']>
export const LazySvgoIconsStrawberry: LazyComponent<typeof import("../assets/icons/Strawberry")['default']>
export const LazySvgoIconsStressBreathEditor: LazyComponent<typeof import("../assets/icons/Stress-breath-editor")['default']>
export const LazySvgoIconsStudyNext: LazyComponent<typeof import("../assets/icons/Study--next")['default']>
export const LazySvgoIconsStudyPrevious: LazyComponent<typeof import("../assets/icons/Study--previous")['default']>
export const LazySvgoIconsStudyRead: LazyComponent<typeof import("../assets/icons/Study--read")['default']>
export const LazySvgoIconsStudySkip: LazyComponent<typeof import("../assets/icons/Study--skip")['default']>
export const LazySvgoIconsStudyTransfer: LazyComponent<typeof import("../assets/icons/Study--transfer")['default']>
export const LazySvgoIconsStudyUnread: LazyComponent<typeof import("../assets/icons/Study--unread")['default']>
export const LazySvgoIconsStudyView: LazyComponent<typeof import("../assets/icons/Study--view")['default']>
export const LazySvgoIconsSubVolume: LazyComponent<typeof import("../assets/icons/Sub-volume")['default']>
export const LazySvgoIconsSubclassification: LazyComponent<typeof import("../assets/icons/Subclassification")['default']>
export const LazySvgoIconsSubdirectory: LazyComponent<typeof import("../assets/icons/Subdirectory")['default']>
export const LazySvgoIconsSubflowLocal: LazyComponent<typeof import("../assets/icons/Subflow--local")['default']>
export const LazySvgoIconsSubflow: LazyComponent<typeof import("../assets/icons/Subflow")['default']>
export const LazySvgoIconsSubjectDefinition: LazyComponent<typeof import("../assets/icons/Subject--definition")['default']>
export const LazySvgoIconsSubjectUsage: LazyComponent<typeof import("../assets/icons/Subject--usage")['default']>
export const LazySvgoIconsSubnetAclRules: LazyComponent<typeof import("../assets/icons/Subnet-acl-rules")['default']>
export const LazySvgoIconsSubtractAlt: LazyComponent<typeof import("../assets/icons/Subtract--alt")['default']>
export const LazySvgoIconsSubtractFilled: LazyComponent<typeof import("../assets/icons/Subtract--filled")['default']>
export const LazySvgoIconsSubtractLarge: LazyComponent<typeof import("../assets/icons/Subtract--large")['default']>
export const LazySvgoIconsSubtract: LazyComponent<typeof import("../assets/icons/Subtract")['default']>
export const LazySvgoIconsSuccession: LazyComponent<typeof import("../assets/icons/Succession")['default']>
export const LazySvgoIconsSummaryKPIMirror: LazyComponent<typeof import("../assets/icons/Summary--KPI--mirror")['default']>
export const LazySvgoIconsSummaryKpi: LazyComponent<typeof import("../assets/icons/Summary--kpi")['default']>
export const LazySvgoIconsSun: LazyComponent<typeof import("../assets/icons/Sun")['default']>
export const LazySvgoIconsSunrise: LazyComponent<typeof import("../assets/icons/Sunrise")['default']>
export const LazySvgoIconsSunset: LazyComponent<typeof import("../assets/icons/Sunset")['default']>
export const LazySvgoIconsSupportVectorMachine: LazyComponent<typeof import("../assets/icons/Support-vector-machine")['default']>
export const LazySvgoIconsSustainability: LazyComponent<typeof import("../assets/icons/Sustainability")['default']>
export const LazySvgoIconsSvg: LazyComponent<typeof import("../assets/icons/Svg")['default']>
export const LazySvgoIconsSwim: LazyComponent<typeof import("../assets/icons/Swim")['default']>
export const LazySvgoIconsSwitchLayer2: LazyComponent<typeof import("../assets/icons/Switch-layer-2")['default']>
export const LazySvgoIconsSwitchLayer3: LazyComponent<typeof import("../assets/icons/Switch-layer-3")['default']>
export const LazySvgoIconsSwitcher: LazyComponent<typeof import("../assets/icons/Switcher")['default']>
export const LazySvgoIconsSyncSettings: LazyComponent<typeof import("../assets/icons/Sync-settings")['default']>
export const LazySvgoIconsSysProvision: LazyComponent<typeof import("../assets/icons/Sys-provision")['default']>
export const LazySvgoIconsSysplexDistributor: LazyComponent<typeof import("../assets/icons/Sysplex--distributor")['default']>
export const LazySvgoIconsTAlt: LazyComponent<typeof import("../assets/icons/T--alt")['default']>
export const LazySvgoIconsT: LazyComponent<typeof import("../assets/icons/T")['default']>
export const LazySvgoIconsTableAlias: LazyComponent<typeof import("../assets/icons/Table--alias")['default']>
export const LazySvgoIconsTableBuilt: LazyComponent<typeof import("../assets/icons/Table--built")['default']>
export const LazySvgoIconsTableShortcut: LazyComponent<typeof import("../assets/icons/Table--shortcut")['default']>
export const LazySvgoIconsTableSplit: LazyComponent<typeof import("../assets/icons/Table--split")['default']>
export const LazySvgoIconsTableOfContents: LazyComponent<typeof import("../assets/icons/Table-of-contents")['default']>
export const LazySvgoIconsTable: LazyComponent<typeof import("../assets/icons/Table")['default']>
export const LazySvgoIconsTabletLandscape: LazyComponent<typeof import("../assets/icons/Tablet--landscape")['default']>
export const LazySvgoIconsTablet: LazyComponent<typeof import("../assets/icons/Tablet")['default']>
export const LazySvgoIconsTagEdit: LazyComponent<typeof import("../assets/icons/Tag--edit")['default']>
export const LazySvgoIconsTagExport: LazyComponent<typeof import("../assets/icons/Tag--export")['default']>
export const LazySvgoIconsTagGroup: LazyComponent<typeof import("../assets/icons/Tag--group")['default']>
export const LazySvgoIconsTagImport: LazyComponent<typeof import("../assets/icons/Tag--import")['default']>
export const LazySvgoIconsTagNone: LazyComponent<typeof import("../assets/icons/Tag--none")['default']>
export const LazySvgoIconsTag: LazyComponent<typeof import("../assets/icons/Tag")['default']>
export const LazySvgoIconsTank: LazyComponent<typeof import("../assets/icons/Tank")['default']>
export const LazySvgoIconsTaskAdd: LazyComponent<typeof import("../assets/icons/Task--add")['default']>
export const LazySvgoIconsTaskApproved: LazyComponent<typeof import("../assets/icons/Task--approved")['default']>
export const LazySvgoIconsTaskAssetView: LazyComponent<typeof import("../assets/icons/Task--asset-view")['default']>
export const LazySvgoIconsTaskComplete: LazyComponent<typeof import("../assets/icons/Task--complete")['default']>
export const LazySvgoIconsTaskLocation: LazyComponent<typeof import("../assets/icons/Task--location")['default']>
export const LazySvgoIconsTaskRemove: LazyComponent<typeof import("../assets/icons/Task--remove")['default']>
export const LazySvgoIconsTaskSettings: LazyComponent<typeof import("../assets/icons/Task--settings")['default']>
export const LazySvgoIconsTaskStar: LazyComponent<typeof import("../assets/icons/Task--star")['default']>
export const LazySvgoIconsTaskTools: LazyComponent<typeof import("../assets/icons/Task--tools")['default']>
export const LazySvgoIconsTaskView: LazyComponent<typeof import("../assets/icons/Task--view")['default']>
export const LazySvgoIconsTask: LazyComponent<typeof import("../assets/icons/Task")['default']>
export const LazySvgoIconsTaste: LazyComponent<typeof import("../assets/icons/Taste")['default']>
export const LazySvgoIconsTaxi: LazyComponent<typeof import("../assets/icons/Taxi")['default']>
export const LazySvgoIconsTcpIpService: LazyComponent<typeof import("../assets/icons/Tcp-ip-service")['default']>
export const LazySvgoIconsTemperatureCelsiusAlt: LazyComponent<typeof import("../assets/icons/Temperature--celsius--alt")['default']>
export const LazySvgoIconsTemperatureCelsius: LazyComponent<typeof import("../assets/icons/Temperature--celsius")['default']>
export const LazySvgoIconsTemperatureFahrenheitAlt: LazyComponent<typeof import("../assets/icons/Temperature--fahrenheit--alt")['default']>
export const LazySvgoIconsTemperatureFahrenheit: LazyComponent<typeof import("../assets/icons/Temperature--fahrenheit")['default']>
export const LazySvgoIconsTemperatureFeelsLike: LazyComponent<typeof import("../assets/icons/Temperature--feels-like")['default']>
export const LazySvgoIconsTemperatureFrigid: LazyComponent<typeof import("../assets/icons/Temperature--frigid")['default']>
export const LazySvgoIconsTemperatureHot: LazyComponent<typeof import("../assets/icons/Temperature--hot")['default']>
export const LazySvgoIconsTemperatureInversion: LazyComponent<typeof import("../assets/icons/Temperature--inversion")['default']>
export const LazySvgoIconsTemperatureMax: LazyComponent<typeof import("../assets/icons/Temperature--max")['default']>
export const LazySvgoIconsTemperatureMin: LazyComponent<typeof import("../assets/icons/Temperature--min")['default']>
export const LazySvgoIconsTemperatureWater: LazyComponent<typeof import("../assets/icons/Temperature--water")['default']>
export const LazySvgoIconsTemperature: LazyComponent<typeof import("../assets/icons/Temperature")['default']>
export const LazySvgoIconsTemplate: LazyComponent<typeof import("../assets/icons/Template")['default']>
export const LazySvgoIconsTennisBall: LazyComponent<typeof import("../assets/icons/Tennis-ball")['default']>
export const LazySvgoIconsTennis: LazyComponent<typeof import("../assets/icons/Tennis")['default']>
export const LazySvgoIconsTermReference: LazyComponent<typeof import("../assets/icons/Term--reference")['default']>
export const LazySvgoIconsTerm: LazyComponent<typeof import("../assets/icons/Term")['default']>
export const LazySvgoIconsTerminal3270: LazyComponent<typeof import("../assets/icons/Terminal--3270")['default']>
export const LazySvgoIconsTerminal: LazyComponent<typeof import("../assets/icons/Terminal")['default']>
export const LazySvgoIconsTestTool: LazyComponent<typeof import("../assets/icons/Test-tool")['default']>
export const LazySvgoIconsTextAlignCenter: LazyComponent<typeof import("../assets/icons/Text--align--center")['default']>
export const LazySvgoIconsTextAlignJustify: LazyComponent<typeof import("../assets/icons/Text--align--justify")['default']>
export const LazySvgoIconsTextAlignLeft: LazyComponent<typeof import("../assets/icons/Text--align--left")['default']>
export const LazySvgoIconsTextAlignMixed: LazyComponent<typeof import("../assets/icons/Text--align--mixed")['default']>
export const LazySvgoIconsTextAlignRight: LazyComponent<typeof import("../assets/icons/Text--align--right")['default']>
export const LazySvgoIconsTextAllCaps: LazyComponent<typeof import("../assets/icons/Text--all-caps")['default']>
export const LazySvgoIconsTextBold: LazyComponent<typeof import("../assets/icons/Text--bold")['default']>
export const LazySvgoIconsTextClearFormat: LazyComponent<typeof import("../assets/icons/Text--clear-format")['default']>
export const LazySvgoIconsTextColor: LazyComponent<typeof import("../assets/icons/Text--color")['default']>
export const LazySvgoIconsTextCreation: LazyComponent<typeof import("../assets/icons/Text--creation")['default']>
export const LazySvgoIconsTextFill: LazyComponent<typeof import("../assets/icons/Text--fill")['default']>
export const LazySvgoIconsTextFont: LazyComponent<typeof import("../assets/icons/Text--font")['default']>
export const LazySvgoIconsTextFootnote: LazyComponent<typeof import("../assets/icons/Text--footnote")['default']>
export const LazySvgoIconsTextHighlight: LazyComponent<typeof import("../assets/icons/Text--highlight")['default']>
export const LazySvgoIconsTextIndentLess: LazyComponent<typeof import("../assets/icons/Text--indent--less")['default']>
export const LazySvgoIconsTextIndentMore: LazyComponent<typeof import("../assets/icons/Text--indent--more")['default']>
export const LazySvgoIconsTextIndent: LazyComponent<typeof import("../assets/icons/Text--indent")['default']>
export const LazySvgoIconsTextItalic: LazyComponent<typeof import("../assets/icons/Text--italic")['default']>
export const LazySvgoIconsTextKerning: LazyComponent<typeof import("../assets/icons/Text--kerning")['default']>
export const LazySvgoIconsTextLeading: LazyComponent<typeof import("../assets/icons/Text--leading")['default']>
export const LazySvgoIconsTextLineSpacing: LazyComponent<typeof import("../assets/icons/Text--line-spacing")['default']>
export const LazySvgoIconsTextLongParagraph: LazyComponent<typeof import("../assets/icons/Text--long-paragraph")['default']>
export const LazySvgoIconsTextNewLine: LazyComponent<typeof import("../assets/icons/Text--new-line")['default']>
export const LazySvgoIconsTextScale: LazyComponent<typeof import("../assets/icons/Text--scale")['default']>
export const LazySvgoIconsTextSelection: LazyComponent<typeof import("../assets/icons/Text--selection")['default']>
export const LazySvgoIconsTextShortParagraph: LazyComponent<typeof import("../assets/icons/Text--short-paragraph")['default']>
export const LazySvgoIconsTextSmallCaps: LazyComponent<typeof import("../assets/icons/Text--small-caps")['default']>
export const LazySvgoIconsTextStrikethrough: LazyComponent<typeof import("../assets/icons/Text--strikethrough")['default']>
export const LazySvgoIconsTextSubscript: LazyComponent<typeof import("../assets/icons/Text--subscript")['default']>
export const LazySvgoIconsTextSuperscript: LazyComponent<typeof import("../assets/icons/Text--superscript")['default']>
export const LazySvgoIconsTextTracking: LazyComponent<typeof import("../assets/icons/Text--tracking")['default']>
export const LazySvgoIconsTextUnderline: LazyComponent<typeof import("../assets/icons/Text--underline")['default']>
export const LazySvgoIconsTextVerticalAlignment: LazyComponent<typeof import("../assets/icons/Text--vertical-alignment")['default']>
export const LazySvgoIconsTextWrap: LazyComponent<typeof import("../assets/icons/Text--wrap")['default']>
export const LazySvgoIconsTextAnnotationToggle: LazyComponent<typeof import("../assets/icons/Text-annotation-toggle")['default']>
export const LazySvgoIconsTextLinkAnalysis: LazyComponent<typeof import("../assets/icons/Text-link--analysis")['default']>
export const LazySvgoIconsTextLink: LazyComponent<typeof import("../assets/icons/Text-link")['default']>
export const LazySvgoIconsTextMiningApplier: LazyComponent<typeof import("../assets/icons/Text-mining--applier")['default']>
export const LazySvgoIconsTextMining: LazyComponent<typeof import("../assets/icons/Text-mining")['default']>
export const LazySvgoIconsTheater: LazyComponent<typeof import("../assets/icons/Theater")['default']>
export const LazySvgoIconsThisSideUp: LazyComponent<typeof import("../assets/icons/This-side-up")['default']>
export const LazySvgoIconsThreshold: LazyComponent<typeof import("../assets/icons/Threshold")['default']>
export const LazySvgoIconsThumbnail1: LazyComponent<typeof import("../assets/icons/Thumbnail--1")['default']>
export const LazySvgoIconsThumbnail2: LazyComponent<typeof import("../assets/icons/Thumbnail--2")['default']>
export const LazySvgoIconsThumbnailPreview: LazyComponent<typeof import("../assets/icons/Thumbnail-preview")['default']>
export const LazySvgoIconsThumbsDownFilled: LazyComponent<typeof import("../assets/icons/Thumbs-down--filled")['default']>
export const LazySvgoIconsThumbsDown: LazyComponent<typeof import("../assets/icons/Thumbs-down")['default']>
export const LazySvgoIconsThumbsUpFilled: LazyComponent<typeof import("../assets/icons/Thumbs-up--filled")['default']>
export const LazySvgoIconsThumbsUp: LazyComponent<typeof import("../assets/icons/Thumbs-up")['default']>
export const LazySvgoIconsThunderstormScatteredNight: LazyComponent<typeof import("../assets/icons/Thunderstorm--scattered--night")['default']>
export const LazySvgoIconsThunderstormScattered: LazyComponent<typeof import("../assets/icons/Thunderstorm--scattered")['default']>
export const LazySvgoIconsThunderstormSevere: LazyComponent<typeof import("../assets/icons/Thunderstorm--severe")['default']>
export const LazySvgoIconsThunderstormStrong: LazyComponent<typeof import("../assets/icons/Thunderstorm--strong")['default']>
export const LazySvgoIconsThunderstorm: LazyComponent<typeof import("../assets/icons/Thunderstorm")['default']>
export const LazySvgoIconsTicket: LazyComponent<typeof import("../assets/icons/Ticket")['default']>
export const LazySvgoIconsTides: LazyComponent<typeof import("../assets/icons/Tides")['default']>
export const LazySvgoIconsTif: LazyComponent<typeof import("../assets/icons/Tif")['default']>
export const LazySvgoIconsTimeFilled: LazyComponent<typeof import("../assets/icons/Time--filled")['default']>
export const LazySvgoIconsTimePlot: LazyComponent<typeof import("../assets/icons/Time-plot")['default']>
export const LazySvgoIconsTime: LazyComponent<typeof import("../assets/icons/Time")['default']>
export const LazySvgoIconsTimer: LazyComponent<typeof import("../assets/icons/Timer")['default']>
export const LazySvgoIconsTimingBelt: LazyComponent<typeof import("../assets/icons/Timing-belt")['default']>
export const LazySvgoIconsToolBox: LazyComponent<typeof import("../assets/icons/Tool-box")['default']>
export const LazySvgoIconsToolKit: LazyComponent<typeof import("../assets/icons/Tool-kit")['default']>
export const LazySvgoIconsToolsAlt: LazyComponent<typeof import("../assets/icons/Tools--alt")['default']>
export const LazySvgoIconsTools: LazyComponent<typeof import("../assets/icons/Tools")['default']>
export const LazySvgoIconsTornadoWarning: LazyComponent<typeof import("../assets/icons/Tornado-warning")['default']>
export const LazySvgoIconsTornado: LazyComponent<typeof import("../assets/icons/Tornado")['default']>
export const LazySvgoIconsTouch1Filled: LazyComponent<typeof import("../assets/icons/Touch--1--filled")['default']>
export const LazySvgoIconsTouch1DownFilled: LazyComponent<typeof import("../assets/icons/Touch--1-down--filled")['default']>
export const LazySvgoIconsTouch1Down: LazyComponent<typeof import("../assets/icons/Touch--1-down")['default']>
export const LazySvgoIconsTouch1: LazyComponent<typeof import("../assets/icons/Touch--1")['default']>
export const LazySvgoIconsTouch2Filled: LazyComponent<typeof import("../assets/icons/Touch--2--filled")['default']>
export const LazySvgoIconsTouch2: LazyComponent<typeof import("../assets/icons/Touch--2")['default']>
export const LazySvgoIconsTouchInteraction: LazyComponent<typeof import("../assets/icons/Touch--interaction")['default']>
export const LazySvgoIconsTour: LazyComponent<typeof import("../assets/icons/Tour")['default']>
export const LazySvgoIconsTrafficEvent: LazyComponent<typeof import("../assets/icons/Traffic--event")['default']>
export const LazySvgoIconsTrafficFlowIncident: LazyComponent<typeof import("../assets/icons/Traffic--flow-incident")['default']>
export const LazySvgoIconsTrafficFlow: LazyComponent<typeof import("../assets/icons/Traffic--flow")['default']>
export const LazySvgoIconsTrafficIncident: LazyComponent<typeof import("../assets/icons/Traffic--incident")['default']>
export const LazySvgoIconsTrafficWeatherIncident: LazyComponent<typeof import("../assets/icons/Traffic--weather-incident")['default']>
export const LazySvgoIconsTrafficCone: LazyComponent<typeof import("../assets/icons/Traffic-cone")['default']>
export const LazySvgoIconsTrainHeart: LazyComponent<typeof import("../assets/icons/Train--heart")['default']>
export const LazySvgoIconsTrainProfile: LazyComponent<typeof import("../assets/icons/Train--profile")['default']>
export const LazySvgoIconsTrainSpeed: LazyComponent<typeof import("../assets/icons/Train--speed")['default']>
export const LazySvgoIconsTrainTicket: LazyComponent<typeof import("../assets/icons/Train--ticket")['default']>
export const LazySvgoIconsTrainTime: LazyComponent<typeof import("../assets/icons/Train--time")['default']>
export const LazySvgoIconsTrain: LazyComponent<typeof import("../assets/icons/Train")['default']>
export const LazySvgoIconsTram: LazyComponent<typeof import("../assets/icons/Tram")['default']>
export const LazySvgoIconsTransformBinary: LazyComponent<typeof import("../assets/icons/Transform--binary")['default']>
export const LazySvgoIconsTransformCode: LazyComponent<typeof import("../assets/icons/Transform--code")['default']>
export const LazySvgoIconsTransformInstructions: LazyComponent<typeof import("../assets/icons/Transform--instructions")['default']>
export const LazySvgoIconsTransformLanguage: LazyComponent<typeof import("../assets/icons/Transform--language")['default']>
export const LazySvgoIconsTransgender: LazyComponent<typeof import("../assets/icons/Transgender")['default']>
export const LazySvgoIconsTranslate: LazyComponent<typeof import("../assets/icons/Translate")['default']>
export const LazySvgoIconsTransmissionLte: LazyComponent<typeof import("../assets/icons/Transmission-lte")['default']>
export const LazySvgoIconsTranspose: LazyComponent<typeof import("../assets/icons/Transpose")['default']>
export const LazySvgoIconsTrashCan: LazyComponent<typeof import("../assets/icons/Trash-can")['default']>
export const LazySvgoIconsTreeFallRisk: LazyComponent<typeof import("../assets/icons/Tree--fall-risk")['default']>
export const LazySvgoIconsTreeViewAlt: LazyComponent<typeof import("../assets/icons/Tree-view--alt")['default']>
export const LazySvgoIconsTreeView: LazyComponent<typeof import("../assets/icons/Tree-view")['default']>
export const LazySvgoIconsTree: LazyComponent<typeof import("../assets/icons/Tree")['default']>
export const LazySvgoIconsTriangleDownOutline: LazyComponent<typeof import("../assets/icons/Triangle--down--outline")['default']>
export const LazySvgoIconsTriangleDownSolid: LazyComponent<typeof import("../assets/icons/Triangle--down--solid")['default']>
export const LazySvgoIconsTriangleLeftOutline: LazyComponent<typeof import("../assets/icons/Triangle--left--outline")['default']>
export const LazySvgoIconsTriangleLeftSolid: LazyComponent<typeof import("../assets/icons/Triangle--left--solid")['default']>
export const LazySvgoIconsTriangleOutline: LazyComponent<typeof import("../assets/icons/Triangle--outline")['default']>
export const LazySvgoIconsTriangleRightOutline: LazyComponent<typeof import("../assets/icons/Triangle--right--outline")['default']>
export const LazySvgoIconsTriangleRightSolid: LazyComponent<typeof import("../assets/icons/Triangle--right--solid")['default']>
export const LazySvgoIconsTriangleSolid: LazyComponent<typeof import("../assets/icons/Triangle--solid")['default']>
export const LazySvgoIconsTrophyFilled: LazyComponent<typeof import("../assets/icons/Trophy--filled")['default']>
export const LazySvgoIconsTrophy: LazyComponent<typeof import("../assets/icons/Trophy")['default']>
export const LazySvgoIconsTropicalStormModelTracks: LazyComponent<typeof import("../assets/icons/Tropical-storm--model-tracks")['default']>
export const LazySvgoIconsTropicalStormTracks: LazyComponent<typeof import("../assets/icons/Tropical-storm--tracks")['default']>
export const LazySvgoIconsTropicalStorm: LazyComponent<typeof import("../assets/icons/Tropical-storm")['default']>
export const LazySvgoIconsTropicalWarning: LazyComponent<typeof import("../assets/icons/Tropical-warning")['default']>
export const LazySvgoIconsTsq: LazyComponent<typeof import("../assets/icons/Tsq")['default']>
export const LazySvgoIconsTsunami: LazyComponent<typeof import("../assets/icons/Tsunami")['default']>
export const LazySvgoIconsTsv: LazyComponent<typeof import("../assets/icons/Tsv")['default']>
export const LazySvgoIconsTuning: LazyComponent<typeof import("../assets/icons/Tuning")['default']>
export const LazySvgoIconsTwoFactorAuthentication: LazyComponent<typeof import("../assets/icons/Two-factor-authentication")['default']>
export const LazySvgoIconsTwoPersonLift: LazyComponent<typeof import("../assets/icons/Two-person-lift")['default']>
export const LazySvgoIconsTxtReference: LazyComponent<typeof import("../assets/icons/Txt--reference")['default']>
export const LazySvgoIconsTxt: LazyComponent<typeof import("../assets/icons/Txt")['default']>
export const LazySvgoIconsTypePattern: LazyComponent<typeof import("../assets/icons/Type-pattern")['default']>
export const LazySvgoIconsTypes: LazyComponent<typeof import("../assets/icons/Types")['default']>
export const LazySvgoIconsU1: LazyComponent<typeof import("../assets/icons/U1")['default']>
export const LazySvgoIconsU2: LazyComponent<typeof import("../assets/icons/U2")['default']>
export const LazySvgoIconsU3: LazyComponent<typeof import("../assets/icons/U3")['default']>
export const LazySvgoIconsURL: LazyComponent<typeof import("../assets/icons/URL")['default']>
export const LazySvgoIconsUmbrella: LazyComponent<typeof import("../assets/icons/Umbrella")['default']>
export const LazySvgoIconsUndefinedFilled: LazyComponent<typeof import("../assets/icons/Undefined--filled")['default']>
export const LazySvgoIconsUndefined: LazyComponent<typeof import("../assets/icons/Undefined")['default']>
export const LazySvgoIconsUndo: LazyComponent<typeof import("../assets/icons/Undo")['default']>
export const LazySvgoIconsUngroupObjects: LazyComponent<typeof import("../assets/icons/Ungroup-objects")['default']>
export const LazySvgoIconsUnknownFilled: LazyComponent<typeof import("../assets/icons/Unknown--filled")['default']>
export const LazySvgoIconsUnknown: LazyComponent<typeof import("../assets/icons/Unknown")['default']>
export const LazySvgoIconsUnlink: LazyComponent<typeof import("../assets/icons/Unlink")['default']>
export const LazySvgoIconsUnlocked: LazyComponent<typeof import("../assets/icons/Unlocked")['default']>
export const LazySvgoIconsUnsaved: LazyComponent<typeof import("../assets/icons/Unsaved")['default']>
export const LazySvgoIconsUpToTop: LazyComponent<typeof import("../assets/icons/Up-to-top")['default']>
export const LazySvgoIconsUpdateNow: LazyComponent<typeof import("../assets/icons/Update-now")['default']>
export const LazySvgoIconsUpgrade: LazyComponent<typeof import("../assets/icons/Upgrade")['default']>
export const LazySvgoIconsUpload: LazyComponent<typeof import("../assets/icons/Upload")['default']>
export const LazySvgoIconsUpstream: LazyComponent<typeof import("../assets/icons/Upstream")['default']>
export const LazySvgoIconsUsageIncludedUseCase: LazyComponent<typeof import("../assets/icons/Usage--included-use-case")['default']>
export const LazySvgoIconsUsb: LazyComponent<typeof import("../assets/icons/Usb")['default']>
export const LazySvgoIconsUseCaseDefinition: LazyComponent<typeof import("../assets/icons/Use-case--definition")['default']>
export const LazySvgoIconsUseCaseUsage: LazyComponent<typeof import("../assets/icons/Use-case--usage")['default']>
export const LazySvgoIconsUserAccessLocked: LazyComponent<typeof import("../assets/icons/User--access-locked")['default']>
export const LazySvgoIconsUserAccessUnlocked: LazyComponent<typeof import("../assets/icons/User--access-unlocked")['default']>
export const LazySvgoIconsUserAccess: LazyComponent<typeof import("../assets/icons/User--access")['default']>
export const LazySvgoIconsUserActivity: LazyComponent<typeof import("../assets/icons/User--activity")['default']>
export const LazySvgoIconsUserAdmin: LazyComponent<typeof import("../assets/icons/User--admin")['default']>
export const LazySvgoIconsUserAvatarFilledAlt: LazyComponent<typeof import("../assets/icons/User--avatar--filled--alt")['default']>
export const LazySvgoIconsUserAvatarFilled: LazyComponent<typeof import("../assets/icons/User--avatar--filled")['default']>
export const LazySvgoIconsUserAvatar: LazyComponent<typeof import("../assets/icons/User--avatar")['default']>
export const LazySvgoIconsUserCertification: LazyComponent<typeof import("../assets/icons/User--certification")['default']>
export const LazySvgoIconsUserData: LazyComponent<typeof import("../assets/icons/User--data")['default']>
export const LazySvgoIconsUserFavoriteAltFilled: LazyComponent<typeof import("../assets/icons/User--favorite--alt--filled")['default']>
export const LazySvgoIconsUserFavoriteAlt: LazyComponent<typeof import("../assets/icons/User--favorite--alt")['default']>
export const LazySvgoIconsUserFavorite: LazyComponent<typeof import("../assets/icons/User--favorite")['default']>
export const LazySvgoIconsUserFeedback: LazyComponent<typeof import("../assets/icons/User--feedback")['default']>
export const LazySvgoIconsUserFilled: LazyComponent<typeof import("../assets/icons/User--filled")['default']>
export const LazySvgoIconsUserFollow: LazyComponent<typeof import("../assets/icons/User--follow")['default']>
export const LazySvgoIconsUserIdentification: LazyComponent<typeof import("../assets/icons/User--identification")['default']>
export const LazySvgoIconsUserMilitary: LazyComponent<typeof import("../assets/icons/User--military")['default']>
export const LazySvgoIconsUserMultiple: LazyComponent<typeof import("../assets/icons/User--multiple")['default']>
export const LazySvgoIconsUserOnline: LazyComponent<typeof import("../assets/icons/User--online")['default']>
export const LazySvgoIconsUserProfile: LazyComponent<typeof import("../assets/icons/User--profile")['default']>
export const LazySvgoIconsUserRole: LazyComponent<typeof import("../assets/icons/User--role")['default']>
export const LazySvgoIconsUserServiceDesk: LazyComponent<typeof import("../assets/icons/User--service-desk")['default']>
export const LazySvgoIconsUserService: LazyComponent<typeof import("../assets/icons/User--service")['default']>
export const LazySvgoIconsUserSettings: LazyComponent<typeof import("../assets/icons/User--settings")['default']>
export const LazySvgoIconsUserSimulation: LazyComponent<typeof import("../assets/icons/User--simulation")['default']>
export const LazySvgoIconsUserSpeaker: LazyComponent<typeof import("../assets/icons/User--speaker")['default']>
export const LazySvgoIconsUserSponsor: LazyComponent<typeof import("../assets/icons/User--sponsor")['default']>
export const LazySvgoIconsUserXRay: LazyComponent<typeof import("../assets/icons/User--x-ray")['default']>
export const LazySvgoIconsUserProfileAlt: LazyComponent<typeof import("../assets/icons/User-profile--alt")['default']>
export const LazySvgoIconsUser: LazyComponent<typeof import("../assets/icons/User")['default']>
export const LazySvgoIconsUvIndexAlt: LazyComponent<typeof import("../assets/icons/Uv-index--alt")['default']>
export const LazySvgoIconsUvIndexFilled: LazyComponent<typeof import("../assets/icons/Uv-index--filled")['default']>
export const LazySvgoIconsUvIndex: LazyComponent<typeof import("../assets/icons/Uv-index")['default']>
export const LazySvgoIconsValueVariable: LazyComponent<typeof import("../assets/icons/Value--variable")['default']>
export const LazySvgoIconsVan: LazyComponent<typeof import("../assets/icons/Van")['default']>
export const LazySvgoIconsVegetationAsset: LazyComponent<typeof import("../assets/icons/Vegetation--asset")['default']>
export const LazySvgoIconsVegetationEncroachment: LazyComponent<typeof import("../assets/icons/Vegetation--encroachment")['default']>
export const LazySvgoIconsVegetationHeight: LazyComponent<typeof import("../assets/icons/Vegetation--height")['default']>
export const LazySvgoIconsVehicleApi: LazyComponent<typeof import("../assets/icons/Vehicle--api")['default']>
export const LazySvgoIconsVehicleConnected: LazyComponent<typeof import("../assets/icons/Vehicle--connected")['default']>
export const LazySvgoIconsVehicleInsights: LazyComponent<typeof import("../assets/icons/Vehicle--insights")['default']>
export const LazySvgoIconsVehicleServices: LazyComponent<typeof import("../assets/icons/Vehicle--services")['default']>
export const LazySvgoIconsVersionMajor: LazyComponent<typeof import("../assets/icons/Version--major")['default']>
export const LazySvgoIconsVersionMinor: LazyComponent<typeof import("../assets/icons/Version--minor")['default']>
export const LazySvgoIconsVersionPatch: LazyComponent<typeof import("../assets/icons/Version--patch")['default']>
export const LazySvgoIconsVersion: LazyComponent<typeof import("../assets/icons/Version")['default']>
export const LazySvgoIconsVerticalView: LazyComponent<typeof import("../assets/icons/Vertical-view")['default']>
export const LazySvgoIconsVideoAdd: LazyComponent<typeof import("../assets/icons/Video--add")['default']>
export const LazySvgoIconsVideoChat: LazyComponent<typeof import("../assets/icons/Video--chat")['default']>
export const LazySvgoIconsVideoFilled: LazyComponent<typeof import("../assets/icons/Video--filled")['default']>
export const LazySvgoIconsVideoOffFilled: LazyComponent<typeof import("../assets/icons/Video--off--filled")['default']>
export const LazySvgoIconsVideoOff: LazyComponent<typeof import("../assets/icons/Video--off")['default']>
export const LazySvgoIconsVideoPlayer: LazyComponent<typeof import("../assets/icons/Video-player")['default']>
export const LazySvgoIconsVideo: LazyComponent<typeof import("../assets/icons/Video")['default']>
export const LazySvgoIconsViewFilled: LazyComponent<typeof import("../assets/icons/View--filled")['default']>
export const LazySvgoIconsViewMode1: LazyComponent<typeof import("../assets/icons/View--mode-1")['default']>
export const LazySvgoIconsViewMode2: LazyComponent<typeof import("../assets/icons/View--mode-2")['default']>
export const LazySvgoIconsViewOffFilled: LazyComponent<typeof import("../assets/icons/View--off--filled")['default']>
export const LazySvgoIconsViewOff: LazyComponent<typeof import("../assets/icons/View--off")['default']>
export const LazySvgoIconsViewNext: LazyComponent<typeof import("../assets/icons/View-next")['default']>
export const LazySvgoIconsView: LazyComponent<typeof import("../assets/icons/View")['default']>
export const LazySvgoIconsVirtualColumnKey: LazyComponent<typeof import("../assets/icons/Virtual-column--key")['default']>
export const LazySvgoIconsVirtualColumn: LazyComponent<typeof import("../assets/icons/Virtual-column")['default']>
export const LazySvgoIconsVirtualDesktop: LazyComponent<typeof import("../assets/icons/Virtual-desktop")['default']>
export const LazySvgoIconsVirtualMachine: LazyComponent<typeof import("../assets/icons/Virtual-machine")['default']>
export const LazySvgoIconsVirtualPrivateCloud: LazyComponent<typeof import("../assets/icons/Virtual-private-cloud")['default']>
export const LazySvgoIconsVisualRecognition: LazyComponent<typeof import("../assets/icons/Visual-recognition")['default']>
export const LazySvgoIconsVlanIBM: LazyComponent<typeof import("../assets/icons/Vlan--IBM")['default']>
export const LazySvgoIconsVlan: LazyComponent<typeof import("../assets/icons/Vlan")['default']>
export const LazySvgoIconsVmdkDisk: LazyComponent<typeof import("../assets/icons/Vmdk-disk")['default']>
export const LazySvgoIconsVoiceActivate: LazyComponent<typeof import("../assets/icons/Voice-activate")['default']>
export const LazySvgoIconsVoicemail: LazyComponent<typeof import("../assets/icons/Voicemail")['default']>
export const LazySvgoIconsVolumeBlockStorage: LazyComponent<typeof import("../assets/icons/Volume--block-storage")['default']>
export const LazySvgoIconsVolumeDownAlt: LazyComponent<typeof import("../assets/icons/Volume--down--alt")['default']>
export const LazySvgoIconsVolumeDownFilledAlt: LazyComponent<typeof import("../assets/icons/Volume--down--filled--alt")['default']>
export const LazySvgoIconsVolumeDownFilled: LazyComponent<typeof import("../assets/icons/Volume--down--filled")['default']>
export const LazySvgoIconsVolumeDown: LazyComponent<typeof import("../assets/icons/Volume--down")['default']>
export const LazySvgoIconsVolumeFileStorage: LazyComponent<typeof import("../assets/icons/Volume--file-storage")['default']>
export const LazySvgoIconsVolumeMuteFilled: LazyComponent<typeof import("../assets/icons/Volume--mute--filled")['default']>
export const LazySvgoIconsVolumeMute: LazyComponent<typeof import("../assets/icons/Volume--mute")['default']>
export const LazySvgoIconsVolumeObjectStorage: LazyComponent<typeof import("../assets/icons/Volume--object-storage")['default']>
export const LazySvgoIconsVolumeUpAlt: LazyComponent<typeof import("../assets/icons/Volume--up--alt")['default']>
export const LazySvgoIconsVolumeUpFilledAlt: LazyComponent<typeof import("../assets/icons/Volume--up--filled--alt")['default']>
export const LazySvgoIconsVolumeUpFilled: LazyComponent<typeof import("../assets/icons/Volume--up--filled")['default']>
export const LazySvgoIconsVolumeUp: LazyComponent<typeof import("../assets/icons/Volume--up")['default']>
export const LazySvgoIconsVpnConnection: LazyComponent<typeof import("../assets/icons/Vpn--connection")['default']>
export const LazySvgoIconsVpnPolicy: LazyComponent<typeof import("../assets/icons/Vpn--policy")['default']>
export const LazySvgoIconsVpn: LazyComponent<typeof import("../assets/icons/Vpn")['default']>
export const LazySvgoIconsWallet: LazyComponent<typeof import("../assets/icons/Wallet")['default']>
export const LazySvgoIconsWarningAltFilled: LazyComponent<typeof import("../assets/icons/Warning--alt--filled")['default']>
export const LazySvgoIconsWarningAltInvertedFilled: LazyComponent<typeof import("../assets/icons/Warning--alt-inverted--filled")['default']>
export const LazySvgoIconsWarningAltInverted: LazyComponent<typeof import("../assets/icons/Warning--alt-inverted")['default']>
export const LazySvgoIconsWarningAlt: LazyComponent<typeof import("../assets/icons/Warning--alt")['default']>
export const LazySvgoIconsWarningDiamond: LazyComponent<typeof import("../assets/icons/Warning--diamond")['default']>
export const LazySvgoIconsWarningFilled: LazyComponent<typeof import("../assets/icons/Warning--filled")['default']>
export const LazySvgoIconsWarningHexFilled: LazyComponent<typeof import("../assets/icons/Warning--hex--filled")['default']>
export const LazySvgoIconsWarningHex: LazyComponent<typeof import("../assets/icons/Warning--hex")['default']>
export const LazySvgoIconsWarningMultiple: LazyComponent<typeof import("../assets/icons/Warning--multiple")['default']>
export const LazySvgoIconsWarningOther: LazyComponent<typeof import("../assets/icons/Warning--other")['default']>
export const LazySvgoIconsWarningSquareFilled: LazyComponent<typeof import("../assets/icons/Warning-square--filled")['default']>
export const LazySvgoIconsWarningSquare: LazyComponent<typeof import("../assets/icons/Warning-square")['default']>
export const LazySvgoIconsWarning: LazyComponent<typeof import("../assets/icons/Warning")['default']>
export const LazySvgoIconsWatch: LazyComponent<typeof import("../assets/icons/Watch")['default']>
export const LazySvgoIconsWatsonxAi: LazyComponent<typeof import("../assets/icons/Watsonx-ai")['default']>
export const LazySvgoIconsWatsonxData: LazyComponent<typeof import("../assets/icons/Watsonx-data")['default']>
export const LazySvgoIconsWatsonxGovernance: LazyComponent<typeof import("../assets/icons/Watsonx-governance")['default']>
export const LazySvgoIconsWatsonx: LazyComponent<typeof import("../assets/icons/Watsonx")['default']>
export const LazySvgoIconsWaveDirection: LazyComponent<typeof import("../assets/icons/Wave-direction")['default']>
export const LazySvgoIconsWaveHeight: LazyComponent<typeof import("../assets/icons/Wave-height")['default']>
export const LazySvgoIconsWavePeriod: LazyComponent<typeof import("../assets/icons/Wave-period")['default']>
export const LazySvgoIconsWeatherFrontCold: LazyComponent<typeof import("../assets/icons/Weather-front--cold")['default']>
export const LazySvgoIconsWeatherFrontStationary: LazyComponent<typeof import("../assets/icons/Weather-front--stationary")['default']>
export const LazySvgoIconsWeatherFrontWarm: LazyComponent<typeof import("../assets/icons/Weather-front--warm")['default']>
export const LazySvgoIconsWeatherStation: LazyComponent<typeof import("../assets/icons/Weather-station")['default']>
export const LazySvgoIconsWebServicesCluster: LazyComponent<typeof import("../assets/icons/Web-services--cluster")['default']>
export const LazySvgoIconsWebServicesContainer: LazyComponent<typeof import("../assets/icons/Web-services--container")['default']>
export const LazySvgoIconsWebServicesDefinition: LazyComponent<typeof import("../assets/icons/Web-services--definition")['default']>
export const LazySvgoIconsWebServicesService: LazyComponent<typeof import("../assets/icons/Web-services--service")['default']>
export const LazySvgoIconsWebServicesTaskDefinitionVersion: LazyComponent<typeof import("../assets/icons/Web-services--task-definition-version")['default']>
export const LazySvgoIconsWebServicesTask: LazyComponent<typeof import("../assets/icons/Web-services--task")['default']>
export const LazySvgoIconsWebhook: LazyComponent<typeof import("../assets/icons/Webhook")['default']>
export const LazySvgoIconsWebsheet: LazyComponent<typeof import("../assets/icons/Websheet")['default']>
export const LazySvgoIconsWheat: LazyComponent<typeof import("../assets/icons/Wheat")['default']>
export const LazySvgoIconsWhitePaper: LazyComponent<typeof import("../assets/icons/White-paper")['default']>
export const LazySvgoIconsWifiController: LazyComponent<typeof import("../assets/icons/Wifi--controller")['default']>
export const LazySvgoIconsWifiNotSecure: LazyComponent<typeof import("../assets/icons/Wifi--not-secure")['default']>
export const LazySvgoIconsWifiOff: LazyComponent<typeof import("../assets/icons/Wifi--off")['default']>
export const LazySvgoIconsWifiSecure: LazyComponent<typeof import("../assets/icons/Wifi--secure")['default']>
export const LazySvgoIconsWifiBridgeAlt: LazyComponent<typeof import("../assets/icons/Wifi-bridge--alt")['default']>
export const LazySvgoIconsWifiBridge: LazyComponent<typeof import("../assets/icons/Wifi-bridge")['default']>
export const LazySvgoIconsWifi: LazyComponent<typeof import("../assets/icons/Wifi")['default']>
export const LazySvgoIconsWikis: LazyComponent<typeof import("../assets/icons/Wikis")['default']>
export const LazySvgoIconsWindGusts: LazyComponent<typeof import("../assets/icons/Wind-gusts")['default']>
export const LazySvgoIconsWindPower: LazyComponent<typeof import("../assets/icons/Wind-power")['default']>
export const LazySvgoIconsWindStream: LazyComponent<typeof import("../assets/icons/Wind-stream")['default']>
export const LazySvgoIconsWindowAuto: LazyComponent<typeof import("../assets/icons/Window--auto")['default']>
export const LazySvgoIconsWindowBase: LazyComponent<typeof import("../assets/icons/Window--base")['default']>
export const LazySvgoIconsWindowBlackSaturation: LazyComponent<typeof import("../assets/icons/Window--black-saturation")['default']>
export const LazySvgoIconsWindowOverlay: LazyComponent<typeof import("../assets/icons/Window--overlay")['default']>
export const LazySvgoIconsWindowPreset: LazyComponent<typeof import("../assets/icons/Window--preset")['default']>
export const LazySvgoIconsWindyDust: LazyComponent<typeof import("../assets/icons/Windy--dust")['default']>
export const LazySvgoIconsWindySnow: LazyComponent<typeof import("../assets/icons/Windy--snow")['default']>
export const LazySvgoIconsWindyStrong: LazyComponent<typeof import("../assets/icons/Windy--strong")['default']>
export const LazySvgoIconsWindy: LazyComponent<typeof import("../assets/icons/Windy")['default']>
export const LazySvgoIconsWinterWarning: LazyComponent<typeof import("../assets/icons/Winter-warning")['default']>
export const LazySvgoIconsWintryMix: LazyComponent<typeof import("../assets/icons/Wintry-mix")['default']>
export const LazySvgoIconsWirelessCheckout: LazyComponent<typeof import("../assets/icons/Wireless-checkout")['default']>
export const LazySvgoIconsWmv: LazyComponent<typeof import("../assets/icons/Wmv")['default']>
export const LazySvgoIconsWordCloud: LazyComponent<typeof import("../assets/icons/Word-cloud")['default']>
export const LazySvgoIconsWorkflowAutomation: LazyComponent<typeof import("../assets/icons/Workflow-automation")['default']>
export const LazySvgoIconsWorkspaceImport: LazyComponent<typeof import("../assets/icons/Workspace--import")['default']>
export const LazySvgoIconsWorkspace: LazyComponent<typeof import("../assets/icons/Workspace")['default']>
export const LazySvgoIconsWorshipChristian: LazyComponent<typeof import("../assets/icons/Worship--christian")['default']>
export const LazySvgoIconsWorshipJewish: LazyComponent<typeof import("../assets/icons/Worship--jewish")['default']>
export const LazySvgoIconsWorshipMuslim: LazyComponent<typeof import("../assets/icons/Worship--muslim")['default']>
export const LazySvgoIconsWorship: LazyComponent<typeof import("../assets/icons/Worship")['default']>
export const LazySvgoIconsXAxis: LazyComponent<typeof import("../assets/icons/X-axis")['default']>
export const LazySvgoIconsX: LazyComponent<typeof import("../assets/icons/X")['default']>
export const LazySvgoIconsXls: LazyComponent<typeof import("../assets/icons/Xls")['default']>
export const LazySvgoIconsXml: LazyComponent<typeof import("../assets/icons/Xml")['default']>
export const LazySvgoIconsYAxis: LazyComponent<typeof import("../assets/icons/Y-axis")['default']>
export const LazySvgoIconsY: LazyComponent<typeof import("../assets/icons/Y")['default']>
export const LazySvgoIconsZLpar: LazyComponent<typeof import("../assets/icons/Z--lpar")['default']>
export const LazySvgoIconsZSystems: LazyComponent<typeof import("../assets/icons/Z--systems")['default']>
export const LazySvgoIconsZAxis: LazyComponent<typeof import("../assets/icons/Z-axis")['default']>
export const LazySvgoIconsZ: LazyComponent<typeof import("../assets/icons/Z")['default']>
export const LazySvgoIconsZipReference: LazyComponent<typeof import("../assets/icons/Zip--reference")['default']>
export const LazySvgoIconsZip: LazyComponent<typeof import("../assets/icons/Zip")['default']>
export const LazySvgoIconsZoomArea: LazyComponent<typeof import("../assets/icons/Zoom--area")['default']>
export const LazySvgoIconsZoomFit: LazyComponent<typeof import("../assets/icons/Zoom--fit")['default']>
export const LazySvgoIconsZoomInArea: LazyComponent<typeof import("../assets/icons/Zoom--in-area")['default']>
export const LazySvgoIconsZoomIn: LazyComponent<typeof import("../assets/icons/Zoom--in")['default']>
export const LazySvgoIconsZoomOutArea: LazyComponent<typeof import("../assets/icons/Zoom--out-area")['default']>
export const LazySvgoIconsZoomOut: LazyComponent<typeof import("../assets/icons/Zoom--out")['default']>
export const LazySvgoIconsZoomReset: LazyComponent<typeof import("../assets/icons/Zoom--reset")['default']>
export const LazySvgoIconsZoomPan: LazyComponent<typeof import("../assets/icons/Zoom-pan")['default']>
export const LazySvgoIconsZosSysplex: LazyComponent<typeof import("../assets/icons/Zos--sysplex")['default']>
export const LazySvgoIconsZos: LazyComponent<typeof import("../assets/icons/Zos")['default']>
export const LazySvgoIconsBrandAbbreviations: LazyComponent<typeof import("../assets/icons/brand/Abbreviations")['default']>
export const LazySvgoIconsBrandAbstract: LazyComponent<typeof import("../assets/icons/brand/Abstract")['default']>
export const LazySvgoIconsBrandBitmap: LazyComponent<typeof import("../assets/icons/brand/Bitmap")['default']>
export const LazySvgoIconsBrandLogotype: LazyComponent<typeof import("../assets/icons/brand/Logotype")['default']>
export const LazySvgoIconsBrandOfficial: LazyComponent<typeof import("../assets/icons/brand/Official")['default']>
export const LazySvgoIconsKeyboardOff: LazyComponent<typeof import("../assets/icons/keyboard--off")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyTiptapEditorContent: LazyComponent<typeof import("@tiptap/vue-3")['EditorContent']>
export const LazyTiptapFloatingMenu: LazyComponent<typeof import("@tiptap/vue-3")['FloatingMenu']>
export const LazyTiptapBubbleMenu: LazyComponent<typeof import("@tiptap/vue-3")['BubbleMenu']>
export const LazyNuxtPlotly: LazyComponent<typeof import("../node_modules/nuxt-plotly/dist/runtime/components/nuxt-plotly")['default']>
export const LazyNuxtIcon: LazyComponent<typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
export const LazyNuxtPlotly: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
